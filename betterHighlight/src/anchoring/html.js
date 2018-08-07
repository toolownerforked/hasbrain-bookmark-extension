/**
 * This is a modified copy of
 * https://github.com/hypothesis/client/blob/v1.87.0/src/annotator/anchoring/html.coffee
 */


const {
  FragmentAnchor, RangeAnchor, TextPositionAnchor, TextQuoteAnchor
} = require('./types');

const querySelector = function(type, root, selector, options) {
  var doQuery;
  doQuery = function(resolve, reject) {
    var anchor, error, range;
    try {
      anchor = type.fromSelector(root, selector, options);
      range = anchor.toRange(options);
      return resolve(range);
    } catch (_error) {
      error = _error;
      return reject(error);
    }
  };
  return new Promise(doQuery);
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
  var fragment, i, len, maybeAssertQuote, position, promise, quote, range, ref1, selector;
  if (options == null) {
    options = {};
  }
  fragment = null;
  position = null;
  quote = null;
  range = null;
  ref1 = selectors != null ? selectors : [];
  for (i = 0, len = ref1.length; i < len; i++) {
    selector = ref1[i];
    switch (selector.type) {
      case 'FragmentSelector':
        fragment = selector;
        break;
      case 'TextPositionSelector':
        position = selector;
        options.hint = position.start;
        break;
      case 'TextQuoteSelector':
        quote = selector;
        break;
      case 'RangeSelector':
        range = selector;
    }
  }
  maybeAssertQuote = function(range) {
    if (((quote != null ? quote.exact : void 0) != null) && range.toString() !== quote.exact) {
      throw new Error('quote mismatch');
    } else {
      return range;
    }
  };
  promise = Promise.reject('unable to anchor');
  if (fragment != null) {
    promise = promise["catch"](function() {
      return querySelector(FragmentAnchor, root, fragment, options).then(maybeAssertQuote);
    });
  }
  if (range != null) {
    promise = promise["catch"](function() {
      return querySelector(RangeAnchor, root, range, options).then(maybeAssertQuote);
    });
  }
  if (position != null) {
    promise = promise["catch"](function() {
      return querySelector(TextPositionAnchor, root, position, options).then(maybeAssertQuote);
    });
  }
  if (quote != null) {
    promise = promise["catch"](function() {
      return querySelector(TextQuoteAnchor, root, quote, options);
    });
  }
  return promise;
};

exports.describe = function(root, range, options) {
  var anchor, selector, selectors, type, types;
  if (options == null) {
    options = {};
  }
  types = [FragmentAnchor, RangeAnchor, TextPositionAnchor, TextQuoteAnchor];
  selectors = (function() {
    var i, len, results;
    results = [];
    for (i = 0, len = types.length; i < len; i++) {
      type = types[i];
      try {
        anchor = type.fromRange(root, range, options);
        results.push(selector = anchor.toSelector(options));
      } catch (_error) {
        console.log(_error, 'ERROR', i)
        continue;
      }
    }
    return results;
  })();
  return selectors;
};