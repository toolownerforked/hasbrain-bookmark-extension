var RenderingStates, TextPositionAnchor, TextQuoteAnchor, anchorByPosition, findInPages, findPage, getNodeTextLayer, getPage, getPageOffset, getPageTextContent, getSiblingIndex, html, pageTextCache, prioritizePages, quotePositionCache, ref, seek, xpathRange,
  slice = [].slice;

seek = require('dom-seek');

xpathRange = require('./range');

html = require('./html');

RenderingStates = require('../pdfjs-rendering-states');

ref = require('./types'), TextPositionAnchor = ref.TextPositionAnchor, TextQuoteAnchor = ref.TextQuoteAnchor;

pageTextCache = {};

quotePositionCache = {};

getSiblingIndex = function(node) {
  var siblings;
  siblings = Array.prototype.slice.call(node.parentNode.childNodes);
  return siblings.indexOf(node);
};

getNodeTextLayer = function(node) {
  var ref1;
  while (!((ref1 = node.classList) != null ? ref1.contains('page') : void 0)) {
    node = node.parentNode;
  }
  return node.getElementsByClassName('textLayer')[0];
};

getPage = function(pageIndex) {
  return PDFViewerApplication.pdfViewer.getPageView(pageIndex);
};

getPageTextContent = function(pageIndex) {
  var joinItems;
  if (pageTextCache[pageIndex] != null) {
    return pageTextCache[pageIndex];
  } else {
    joinItems = function(arg) {
      var item, items, nonEmpty, textContent;
      items = arg.items;
      nonEmpty = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = items.length; i < len; i++) {
          item = items[i];
          if (/\S/.test(item.str)) {
            results.push(item.str);
          }
        }
        return results;
      })();
      textContent = nonEmpty.join('');
      return textContent;
    };
    pageTextCache[pageIndex] = PDFViewerApplication.pdfViewer.getPageTextContent(pageIndex).then(joinItems);
    return pageTextCache[pageIndex];
  }
};

getPageOffset = function(pageIndex) {
  var index, next;
  index = -1;
  next = function(offset) {
    if (++index === pageIndex) {
      return Promise.resolve(offset);
    }
    return getPageTextContent(index).then(function(textContent) {
      return next(offset + textContent.length);
    });
  };
  return next(0);
};

findPage = function(offset) {
  var count, index, total;
  index = 0;
  total = 0;
  count = function(textContent) {
    var lastPageIndex;
    lastPageIndex = PDFViewerApplication.pdfViewer.pagesCount - 1;
    if (total + textContent.length > offset || index === lastPageIndex) {
      offset = total;
      return Promise.resolve({
        index: index,
        offset: offset,
        textContent: textContent
      });
    } else {
      index++;
      total += textContent.length;
      return getPageTextContent(index).then(count);
    }
  };
  return getPageTextContent(0).then(count);
};

anchorByPosition = function(page, anchor, options) {
  var div, placeholder, range, ref1, ref2, renderingDone, renderingState, root, selector;
  renderingState = page.renderingState;
  renderingDone = (ref1 = page.textLayer) != null ? ref1.renderingDone : void 0;
  if (renderingState === RenderingStates.FINISHED && renderingDone) {
    root = page.textLayer.textLayerDiv;
    selector = anchor.toSelector(options);
    return html.anchor(root, [selector]);
  } else {
    div = (ref2 = page.div) != null ? ref2 : page.el;
    placeholder = div.getElementsByClassName('annotator-placeholder')[0];
    if (placeholder == null) {
      placeholder = document.createElement('span');
      placeholder.classList.add('annotator-placeholder');
      placeholder.textContent = 'Loading annotations…';
      div.appendChild(placeholder);
    }
    range = document.createRange();
    range.setStartBefore(placeholder);
    range.setEndAfter(placeholder);
    return range;
  }
};

findInPages = function(arg, quote, position) {
  var attempt, cacheAndFinish, content, next, offset, page, pageIndex, rest;
  pageIndex = arg[0], rest = 2 <= arg.length ? slice.call(arg, 1) : [];
  if (pageIndex == null) {
    return Promise.reject(new Error('Quote not found'));
  }
  attempt = function(info) {
    var anchor, content, hint, offset, page, root;
    page = info[0], content = info[1], offset = info[2];
    root = {
      textContent: content
    };
    anchor = new TextQuoteAnchor.fromSelector(root, quote);
    if (position != null) {
      hint = position.start - offset;
      hint = Math.max(0, hint);
      hint = Math.min(hint, content.length);
      return anchor.toPositionAnchor({
        hint: hint
      });
    } else {
      return anchor.toPositionAnchor();
    }
  };
  next = function() {
    return findInPages(rest, quote, position);
  };
  cacheAndFinish = function(anchor) {
    var name;
    if (position) {
      if (quotePositionCache[name = quote.exact] == null) {
        quotePositionCache[name] = {};
      }
      quotePositionCache[quote.exact][position.start] = {
        page: page,
        anchor: anchor
      };
    }
    return anchorByPosition(page, anchor);
  };
  page = getPage(pageIndex);
  content = getPageTextContent(pageIndex);
  offset = getPageOffset(pageIndex);
  return Promise.all([page, content, offset]).then(attempt).then(cacheAndFinish)["catch"](next);
};

prioritizePages = function(position) {
  var i, pageIndices, pagesCount, results, sort;
  pagesCount = PDFViewerApplication.pdfViewer.pagesCount;
  pageIndices = (function() {
    results = [];
    for (var i = 0; 0 <= pagesCount ? i < pagesCount : i > pagesCount; 0 <= pagesCount ? i++ : i--){ results.push(i); }
    return results;
  }).apply(this);
  sort = function(pageIndex) {
    var left, result, right;
    left = pageIndices.slice(0, pageIndex);
    right = pageIndices.slice(pageIndex);
    result = [];
    while (left.length || right.length) {
      if (right.length) {
        result.push(right.shift());
      }
      if (left.length) {
        result.push(left.pop());
      }
    }
    return result;
  };
  if (position != null) {
    return findPage(position.start).then(function(arg) {
      var index;
      index = arg.index;
      return sort(index);
    });
  } else {
    return Promise.resolve(pageIndices);
  }
};


/**
 * Anchor a set of selectors.
#
 * This function converts a set of selectors into a document range.
 * It encapsulates the core anchoring algorithm, using the selectors alone or
 * in combination to establish the best anchor within the document.
#
 * :param Element root: The root element of the anchoring context.
 * :param Array selectors: The selectors to try.
 * :param Object options: Options to pass to the anchor implementations.
 * :return: A Promise that resolves to a Range on success.
 * :rtype: Promise
 */

exports.anchor = function(root, selectors, options) {
  var assertQuote, i, len, position, promise, quote, ref1, selector;
  if (options == null) {
    options = {};
  }
  position = null;
  quote = null;
  ref1 = selectors != null ? selectors : [];
  for (i = 0, len = ref1.length; i < len; i++) {
    selector = ref1[i];
    switch (selector.type) {
      case 'TextPositionSelector':
        position = selector;
        break;
      case 'TextQuoteSelector':
        quote = selector;
    }
  }
  promise = Promise.reject('unable to anchor');
  assertQuote = function(range) {
    if (((quote != null ? quote.exact : void 0) != null) && range.toString() !== quote.exact) {
      throw new Error('quote mismatch');
    } else {
      return range;
    }
  };
  if (position != null) {
    promise = promise["catch"](function() {
      return findPage(position.start).then(function(arg) {
        var anchor, end, index, length, offset, page, start, textContent;
        index = arg.index, offset = arg.offset, textContent = arg.textContent;
        page = getPage(index);
        start = position.start - offset;
        end = position.end - offset;
        length = end - start;
        assertQuote(textContent.substr(start, length));
        anchor = new TextPositionAnchor(root, start, end);
        return anchorByPosition(page, anchor, options);
      });
    });
  }
  if (quote != null) {
    promise = promise["catch"](function() {
      var anchor, page, ref2, ref3;
      if ((position != null) && (((ref2 = quotePositionCache[quote.exact]) != null ? ref2[position.start] : void 0) != null)) {
        ref3 = quotePositionCache[quote.exact][position.start], page = ref3.page, anchor = ref3.anchor;
        return anchorByPosition(page, anchor, options);
      }
      return prioritizePages(position).then(function(pageIndices) {
        return findInPages(pageIndices, quote, position);
      });
    });
  }
  return promise;
};


/**
 * Convert a DOM Range object into a set of selectors.
#
 * Converts a DOM `Range` object describing a start and end point within a
 * `root` `Element` and converts it to a `[position, quote]` tuple of selectors
 * which can be saved into an annotation and later passed to `anchor` to map
 * the selectors back to a `Range`.
#
 * :param Element root: The root Element
 * :param Range range: DOM Range object
 * :param Object options: Options passed to `TextQuoteAnchor` and
 *                        `TextPositionAnchor`'s `toSelector` methods.
 */

exports.describe = function(root, range, options) {
  var end, endPageIndex, endRange, endTextLayer, iter, start, startPageIndex, startRange, startTextLayer;
  if (options == null) {
    options = {};
  }
  range = new xpathRange.BrowserRange(range).normalize();
  startTextLayer = getNodeTextLayer(range.start);
  endTextLayer = getNodeTextLayer(range.end);
  if (startTextLayer !== endTextLayer) {
    throw new Error('selecting across page breaks is not supported');
  }
  startRange = range.limit(startTextLayer);
  endRange = range.limit(endTextLayer);
  startPageIndex = getSiblingIndex(startTextLayer.parentNode);
  endPageIndex = getSiblingIndex(endTextLayer.parentNode);
  iter = document.createNodeIterator(startTextLayer, NodeFilter.SHOW_TEXT);
  start = seek(iter, range.start);
  end = seek(iter, range.end) + start + range.end.textContent.length;
  return getPageOffset(startPageIndex).then(function(pageOffset) {
    var position, quote, r;
    start += pageOffset;
    end += pageOffset;
    position = new TextPositionAnchor(root, start, end).toSelector(options);
    r = document.createRange();
    r.setStartBefore(startRange.start);
    r.setEndAfter(endRange.end);
    quote = TextQuoteAnchor.fromRange(root, r, options).toSelector(options);
    return Promise.all([position, quote]);
  });
};


/**
 * Clear the internal caches of page text contents and quote locations.
#
 * This exists mainly as a helper for use in tests.
 */

exports.purgeCache = function() {
  pageTextCache = {};
  return quotePositionCache = {};
};

// ---
// generated by coffee-script 1.9.2