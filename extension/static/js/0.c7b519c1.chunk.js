webpackJsonp([0,2,3,4],{916:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return f});var i=n(0),c=n.n(i),l=n(921),s=n(69),u=n.n(s),d=n(89),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,l=Array(c),s=0;s<c;s++)l[s]=arguments[s];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),o.state={data:null,openedItem:0},o._handleBookmark=function(e){console.log(e)},i=n,a(o,i)}return o(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this;Object(l.c)().then(function(t){return e.setState({data:t})})}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,r=t.openedItem;return u()(n)?null:c.a.createElement("div",{className:"series-list"},c.a.createElement("div",{className:"series-search-bar"},c.a.createElement(d.c,{name:"search",size:"big"}),c.a.createElement("input",{type:"text",name:"search"})),c.a.createElement("h3",{className:"recommend-title"},"Recommended topic"),n.data.map(function(t,n){return c.a.createElement("div",{key:n,className:"series-path clearfix "+(r===n?"active":"")},c.a.createElement("h4",{className:"series-path-name"},t.title),c.a.createElement("div",{className:"expanded-icon"},c.a.createElement(d.c,{name:"angle double down",size:"big",onClick:function(){return e.setState({openedItem:n})}})),c.a.createElement("div",{className:"series-items",style:{maxHeight:600*Math.floor(t.contentData.length/4)}},t.contentData.map(function(t,n){return c.a.createElement("div",{key:n,className:"series-item"},c.a.createElement("div",{style:{backgroundImage:"url("+t.sourceImage+")"},className:"series-item-content"},t.title),c.a.createElement(d.g,{inverted:!0,trigger:c.a.createElement(d.c,{className:"series-bookmark",size:"large",name:"bookmark",onClick:function(){return e._handleBookmark(t._id)}}),content:"Follow this topic"}))})))}))}}]),t}(i.Component)},917:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return E});var c,l,s,u,d=n(0),m=n.n(d),f=n(1),p=(n.n(f),n(922)),h=n(923),g=n(228),v=(n.n(g),n(90)),b=n(144),k=n.n(b),y=n(89),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),E=(c=Object(v.b)(function(e){return{profile:e.profile}}))((u=s=function(e){function t(){var e,n,i,c;a(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={articles:[],loadingId:"",page:1,stopLoadingMore:!1,showLoadMore:!1,loadingArticles:!0},i.loadMore=function(){i.state.loadingArticles||i.state.stopLoadingMore||i.setState({page:i.state.page+1,loadingArticles:!0},i.getArticles)},i.getArticles=function(){Object(p.e)({page:i.state.page,perPage:20,filter:{state:"published"}}).then(function(e){if(i.setState({loadingArticles:!1}),e&&!e.errors){var t=e.data,n=t.count,a=t.items,o=a.map(function(e){return Object.assign({_id:e._id},e.article)})||[],c=[].concat(r(i.state.articles),r(o)),l=!0,s=!1;c.length!==n&&0!==a.length||(s=!0,l=!1),i.setState({articles:c,stopLoadingMore:s,showLoadMore:l})}}).catch(function(e){console.log(e),i.setState({loadingArticles:!1,page:1===i.state.page?i.state.page:i.state.page-1})})},i._handleRemoveBookmark=function(e){i.setState({loadingId:e}),Object(p.b)(e).then(function(t){if(i.setState({loadingId:""}),!t||t.errros)return void g.toast.error("Remove bookmark failed.");g.toast.success("Remove bookmark successfully."),i.removeItem(e)})},i._handleArchiveBookmark=function(e){i.setState({loadingId:e}),Object(p.c)({filter:{contentId:e},record:{state:"archived"}}).then(function(t){if(i.setState({loadingId:""}),!t||t.errors)return void g.toast.error("Archive article failed.");g.toast.success("Archive article successfully."),i.removeItem(e)})},i.removeItem=function(e){var t=i.state.articles,n=k()(t,{_id:e});t.splice(n,1),i.setState([t])},i.login=function(){window.chrome.runtime.id?window.open("http://hasbrain.surge.sh/#/?extensionId="+(window.chrome.runtime.id||"")):window.open("http://hasbrain.surge.sh/#/?redirect_uri="+document.URL,"_blank")},c=n,o(i,c)}return i(t,e),_(t,[{key:"componentWillMount",value:function(){this.getArticles()}},{key:"render",value:function(){var e=this,t=this.state,n=t.articles,r=t.loadingId,a=t.showLoadMore,o=t.loadingArticles;return this.props.profile.isLogged?m.a.createElement("div",null,m.a.createElement("div",{className:"heading"},m.a.createElement("div",{className:"heading__left"},m.a.createElement("h2",null,"Saved articles"))),m.a.createElement("div",{className:"article__list"},n.map(function(t){return m.a.createElement(h.a,{key:t._id,article:t,loading:t._id===r,onRemove:function(){return e._handleRemoveBookmark(t._id)},onArchive:function(){return e._handleArchiveBookmark(t._id)}})})),o&&0===n.length&&m.a.createElement("div",{className:"align-center"},"Loading saved articles..."),a&&m.a.createElement("div",{className:"align-center",style:{paddingTop:10,paddingBottom:30}},m.a.createElement(y.a,{primary:!0,size:"tiny",className:"article__btn-load-more",onClick:this.loadMore,loading:o},"Load More"))):m.a.createElement("div",null,"Please login. ",m.a.createElement("a",{onClick:this.login},"Login"))}}]),t}(d.Component),s.propTypes={},l=u))||l},918:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return p});var i=n(0),c=n.n(i),l=n(921),s=n(69),u=n.n(s),d=n(89),m=n(228),f=(n.n(m),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={data:null,followedData:null,openedItem:0},o.getData=function(){Object(l.c)().then(function(e){if(e&&!e.errors){var t=e.data.items;o.setState({data:t})}}),Object(l.b)().then(function(e){if(e&&!e.errors){var t=e.data.items;o.setState({followedData:t})}})},o._handleBookmark=function(e){console.log(e),Object(l.a)(e).then(function(e){if(!e||e.errors)return void m.toast.error("Path followed failed.");m.toast.success("Path followed successfully"),o.getData()})},o._handleBookmarkRemove=function(e){Object(l.d)(e).then(function(e){if(!e||e.errors)return void m.toast.error("Path un-followed failed.");m.toast.success("Path un-followed successfully"),o.getData()})},i=n,a(o,i)}return o(t,e),f(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,r=t.openedItem,a=t.followedData;return u()(n)?null:u()(a)?null:c.a.createElement("div",{className:"series-list"},c.a.createElement("div",{className:"series-search-bar"},c.a.createElement(d.c,{name:"search",size:"big"}),c.a.createElement("input",{type:"text",name:"search"})),c.a.createElement("h3",{className:"recommend-title"},"Recommended Path"),c.a.createElement("div",{className:"series-path clearfix "+(0===r?"active":"")},c.a.createElement("div",{className:"expanded-icon"},c.a.createElement(d.c,{name:"angle double down",size:"big",onClick:function(){return e.setState({openedItem:0})}})),c.a.createElement("div",{className:"series-items",style:{maxHeight:600*Math.ceil(n.length/4)}},n.map(function(t,n){return c.a.createElement("div",{key:n,className:"series-item"},c.a.createElement("div",{className:"series-item-content"},t.title),c.a.createElement(d.g,{inverted:!0,trigger:c.a.createElement(d.c,{className:"series-bookmark",size:"large",name:"bookmark",onClick:function(){return e._handleBookmark(t._id)}}),content:"Follow this path"}))}))),c.a.createElement("h3",{className:"recommend-title"},"Followed Path"),c.a.createElement("div",{className:"series-path clearfix "+(1===r?"active":"")},c.a.createElement("div",{className:"expanded-icon"},c.a.createElement(d.c,{name:"angle double down",size:"big",onClick:function(){return e.setState({openedItem:1})}})),c.a.createElement("div",{className:"series-items",style:{maxHeight:600*Math.ceil(n.length/4)}},a.map(function(t,n){return c.a.createElement("div",{key:n,className:"series-item"},c.a.createElement("div",{className:"series-item-content"},t.content.title),c.a.createElement(d.g,{inverted:!0,trigger:c.a.createElement(d.c,{className:"series-bookmark",size:"large",name:"trash",onClick:function(){return e._handleBookmarkRemove(t.contentId)}}),content:"Un-follow this path"}))}))))}}]),t}(i.Component)},919:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return w});var c,l,s=n(0),u=n.n(s),d=n(923),m=n(90),f=n(89),p=n(922),h=n(230),g=n.n(h),v=n(228),b=(n.n(v),n(144)),k=n.n(b),y=(n(916),n(918)),_=n(62),E=n(917),O=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w=(c=Object(m.b)(function(e){return{profile:e.profile}}))(l=function(e){function t(){var e,n,i,c;a(this,t);for(var l=arguments.length,s=Array(l),m=0;m<l;m++)s[m]=arguments[m];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={loadingArticles:!0,showLoadMore:!1,stopLoadingMore:!1,limit:20,skip:0,articles:[],loadingId:"",page:1},i.loadMore=function(){i.state.loadingArticles||i.state.stopLoadingMore||i.setState({skip:i.state.skip+i.state.limit,loadingArticles:!0},i.getArticles)},i.getArticles=function(){var e=i.state,t=e.limit,n=(e.skip,e.page),a=i.props.profile.info.articleFilter,o=void 0===a?{}:a,c=[],l=[],s=[];Object.values(o).forEach(function(e){s=g()(s,e)}),s.map(function(e){return l.push(e)}),Object.keys(o).map(function(e){return c.push(e)}),Object(p.f)({page:n,perPage:t}).then(function(e){if(i.setState({loadingArticles:!1}),e&&!e.errors){var t=e.data,n=t.count,a=t.items,o=a.map(function(e){return Object.assign({},e,{isBookmark:!1})})||[],c=[].concat(r(i.state.articles),r(o)),l=!0,s=!1;c.length!==n&&0!==a.length||(s=!0,l=!1),i.setState({articles:c,stopLoadingMore:s,showLoadMore:l})}},function(e){console.log("error",e),i.setState({loadingArticles:!1,page:1===n?n:n-1})})},i._handleBookmark=function(e){i.setState({loadingId:e}),Object(p.a)(e).then(function(t){if(i.setState({loadingId:""}),!t||t.errors)return void v.toast.error("Bookmark article failed.");v.toast.success("Bookmark article successfully.");var n=[].concat(r(i.state.articles)),a=k()(n,{_id:e});n[a]=Object.assign({},n[a],{isBookmark:!0}),i.setState({articles:n})})},i._renderExplore=function(){var e=i.state,t=e.articles,n=e.loadingId,r=e.showLoadMore,a=e.loadingArticles;return u.a.createElement("div",{style:{paddingTop:30}},u.a.createElement("div",{className:"article__list"},t.map(function(e){var t=e.contentData;return u.a.createElement(d.a,{key:t._id,article:t,loading:t._id===n,onBookmark:function(){return i._handleBookmark(t._id)}})})),a&&0===t.length&&u.a.createElement("div",{className:"align-center"},"Loading feeds..."),r&&u.a.createElement("div",{className:"align-center",style:{paddingTop:10,paddingBottom:30}},u.a.createElement(f.a,{primary:!0,size:"tiny",className:"article__btn-load-more",onClick:i.loadMore,loading:a},"Load More")))},c=n,o(i,c)}return i(t,e),O(t,[{key:"componentWillMount",value:function(){this.getArticles()}},{key:"render",value:function(){return u.a.createElement("div",{className:"home-page"},u.a.createElement("div",{className:"home__heading"},u.a.createElement("div",{className:"ui text menu"},u.a.createElement(_.c,{activeClassName:"active",className:"item",to:"/home/explore"},"Explore"),u.a.createElement(_.c,{activeClassName:"active",className:"item",to:"/home/bookmark"},"Read it later"),u.a.createElement(_.c,{activeClassName:"active",className:"item",to:"/home/topics"},"Industry topics"),u.a.createElement(_.c,{activeClassName:"active",className:"item",to:"/home/path"},"Paths"))),u.a.createElement(_.d,{exact:!0,path:"/home/explore",component:this._renderExplore}),u.a.createElement(_.d,{exact:!0,path:"/home/bookmark",component:E.default}),u.a.createElement(_.d,{exact:!0,path:"/home/path",component:y.default}))}}]),t}(s.Component))||l},921:function(e,t,n){"use strict";n.d(t,"c",function(){return a}),n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"d",function(){return c});var r=n(229),a=function(){return Object(r.a)({query:"\n      {\n        viewer {\n          pathRecommend {\n            items {\n              title\n              kind\n              _id\n              contentData {\n                _id\n                title\n                kind\n                contentData {\n                  _id\n                  title\n                  kind\n                  contentId\n                  shortDescription\n                  sourceImage\n                }\n              }\n            }\n          }\n        }\n      }\n    "}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.pathRecommend}})},o=function(){return Object(r.a)({query:'\n      {\n      viewer {\n        userbookmarkPagination (filter: {kind: "pathtype"}) {\n          items {\n            contentId\n            content {\n              title\n            }\n          }\n        }\n      }\n    }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.userbookmarkPagination}})},i=function(e){return Object(r.a)({query:'\n      mutation {\n        user {\n          bookmarkCreate (record: {\n            contentId: "'+e+'"\n            kind: "pathtype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkCreate}})},c=function(e){return Object(r.a)({query:'\n      mutation {\n        user {\n          bookmarkRemoveOne (filter: {\n            contentId: "'+e+'"\n            kind: "pathtype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkRemoveOne}})}},922:function(e,t,n){"use strict";function r(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}n.d(t,"d",function(){return o}),n.d(t,"e",function(){return i}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"f",function(){return u});var a=n(229),o=function(e){var t=e.limit,n=void 0===t?40:t,r=e.skip,o=void 0===r?0:r,i=e.sourceName,c=void 0===i?"":i;return Object(a.a)({query:'\n      query {\n        viewer{\n          articleSearch (\n            sort: sourceCreatedAt__desc,\n            query: {\n              bool: {\n                filter: [\n                  {\n                    terms: {\n                      sourceName: "'+c+'"\n                    }\n                  }\n                ]\n              }\n            },\n            limit: '+n+", skip: "+o+") {\n            count\n            hits {\n              _id\n              _source {\n                category\n                sourceName\n                intentIds\n                contentId\n                content\n                readingTime\n                tags\n                title\n                longDescription\n                shortDescription\n                sourceImage\n                state\n              }\n            }\n          }\n        }\n      }\n    "}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.articleSearch}})},i=function(e){var t=e.page,n=void 0===t?1:t,o=e.perPage,i=void 0===o?20:o,c=r(e,["page","perPage"]),l=c.filter;return Object(a.a)({query:"\n      query ($filter: FilterFindManyuserbookmarktypeInput) {\n        viewer {\n          userbookmarkPagination (\n            page: "+n+",\n            perPage: "+i+",\n            filter: $filter\n          ) {\n            count\n            items {\n              _id\n              state\n              article {\n                _id\n                readingTime\n                custom\n                contentId\n                content\n                title\n                longDescription\n                shortDescription\n                sourceImage\n                sourceName\n                state\n                kind\n              }\n            }\n          }\n        }\n      }\n    ",variables:{filter:l}}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.userbookmarkPagination}})},c=function(e){var t=e.filter,n=e.record;return Object(a.a)({query:"\n      mutation ($record: UpdateOneuserbookmarktypeInput!, $filter: FilterUpdateOneuserbookmarktypeInput) {\n        user {\n          bookmarkUpdateOne (\n            record: $record,\n            filter: $filter\n          ) {\n            recordId\n          }\n        }\n      }\n    ",variables:{filter:t,record:n}}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkUpdateOne}})},l=function(e){return Object(a.a)({query:'\n      mutation {\n        user {\n          bookmarkRemoveOne (\n            filter: {\n              contentId: "'+e+'"\n            }\n          ) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkRemoveOne}})},s=function(e){return Object(a.a)({query:'\n      mutation{\n        user{\n          userbookmarkCreate(record:{\n            contentId: "'+e+'",\n            kind: "articletype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.userbookmarkCreate}})},u=function(e){var t=e.page,n=void 0===t?1:t,r=e.perPage,o=void 0===r?20:r,i=e.filter,c=void 0===i?{}:i;return Object(a.a)({query:"\n      query ($filter: FilterFindManyfeedtypeInput) {\n        viewer {\n          feedPagination (\n            page: "+n+",\n            perPage: "+o+",\n            filter: $filter\n          ) {\n            count\n            items {\n              contentId\n              rank\n              reason\n              contentType\n              contentData {\n                _id\n                contentId\n                contentIds\n                content\n                readingTime\n                tags\n                title\n                shortDescription\n                longDescription\n                sourceImage\n              }\n            }\n          }\n        }\n      }\n    ",variables:{filter:c}}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.feedPagination}})}},923:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i,c,l=n(0),s=n.n(l),u=n(1),d=n.n(u),m=n(89),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=(c=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"shouldComponentUpdate",value:function(e){return JSON.stringify(this.props.article)!==JSON.stringify(e.article)||this.props.article.isBookmark!==e.article.isBookmark||this.props.loading!==e.loading}},{key:"render",value:function(){var e=this.props,t=e.article,n=e.loading,r=e.onArchive,a=e.onRemove,o=e.onBookmark;return s.a.createElement("div",{className:"article"},n&&s.a.createElement("div",{className:"ui dimmer active inverted"},s.a.createElement("div",{className:"ui loader"})),s.a.createElement("a",{href:t.contentId,target:"_blank",className:"article__title"},t.title||t.contentId),s.a.createElement("a",{className:"article__image",href:t.contentId,target:"_blank"},t.sourceImage?s.a.createElement("img",{src:t.sourceImage,alt:""}):s.a.createElement("p",null,t.shortDescription)),s.a.createElement("div",{className:"article__content"},s.a.createElement("div",{className:"article__actions"},s.a.createElement("div",{className:"article__source"},t.sourceName),s.a.createElement("div",{className:"article_settings"},s.a.createElement("div",{className:"article__action"},s.a.createElement("i",{className:"bookmark"+(!t.isBookmark&&"outline")+"icon"}))),o&&s.a.createElement("div",{className:"article_settings"},s.a.createElement("div",{onClick:o,className:"article__action"},s.a.createElement(m.c,{name:"bookmark"+(t.isBookmark?"":" outline")}))),r&&a&&s.a.createElement("div",{className:"article__settings"},s.a.createElement(m.b,{icon:"ellipsis vertical"},s.a.createElement(m.b.Menu,null,s.a.createElement(m.b.Item,{icon:"bookmark outline",text:"Remove bookmark",onClick:a}),s.a.createElement(m.b.Item,{icon:"trash",text:"Archive bookmark",onClick:r})))))))}}]),t}(l.Component),i.propTypes={article:d.a.object,loading:d.a.bool,onArchive:d.a.func,onRemove:d.a.func,onBookmark:d.a.func},c)}});