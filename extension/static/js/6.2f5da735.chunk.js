webpackJsonp([6],{920:function(n,e,t){"use strict";function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function o(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function a(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"default",function(){return h});var i=t(0),c=t.n(i),u=t(929),s=t(73),l=t.n(s),d=t(50),f=t(70),p=(t.n(f),function(){function n(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,r.key,r)}}return function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}}()),h=function(n){function e(){var n,t,a,i;r(this,e);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return t=a=o(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(s))),a.state={data:null,openedItem:0,search:""},a.getData=function(){Object(u.c)().then(function(n){return a.setState({data:n})})},a._handleBookmark=function(n){console.log(n);var e=a.state.data;-1===(e.follow?e.follow.map(function(n){return n.sourceId}):[]).indexOf(n)?Object(u.b)(n).then(function(n){if(!n||n.errors)return void f.toast.error("Topic followed failed.");f.toast.success("Topic followed successfully"),a.getData()}):Object(u.n)(n).then(function(n){if(!n||n.errors)return void f.toast.error("Topic un-followed failed.");f.toast.success("Topic un-followed successfully"),a.getData()})},a._goToDetails=function(n){a.props.history.push("/series/"+n)},i=t,o(a,i)}return a(e,n),p(e,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var n=this,e=this.state,t=e.data,r=e.search;if(l()(t))return null;var o=t.follow?t.follow.map(function(n){return n.sourceId}):[],a=[];return t.items.map(function(n){return-1!==n.title.toLowerCase().indexOf(r.toLowerCase())&&a.push(n),null}),c.a.createElement("div",{className:"series-list"},c.a.createElement("div",{className:"series-search-bar"},c.a.createElement(d.e,{name:"search",size:"big"}),c.a.createElement("input",{type:"text",name:"search",value:r,onChange:function(e){return n.setState({search:e.target.value})}})),c.a.createElement("div",{className:"series-path clearfix active"},c.a.createElement("div",{className:"series-items"},a.map(function(e){return c.a.createElement("div",{key:e._id,className:"series-item"+(-1===o.indexOf(e._id)?"":" follow")},c.a.createElement("div",{className:"series-item-content",onClick:function(){return n._goToDetails(e._id)}},e.title),c.a.createElement(d.j,{inverted:!0,trigger:c.a.createElement(d.e,{className:"series-bookmark"+(-1===o.indexOf(e._id)?"":" followed"),size:"large",name:"check square outline",onClick:function(){return n._handleBookmark(e._id)}}),content:"Follow this path"}))}))))}}]),e}(i.Component)},929:function(n,e,t){"use strict";function r(n){return n.replace(/[\\]/g,"\\\\").replace(/[\"]/g,'\\"').replace(/[\/]/g,"\\/").replace(/[\b]/g,"\\b").replace(/[\f]/g,"\\f").replace(/[\n]/g,"\\n").replace(/[\r]/g,"\\r").replace(/[\t]/g,"\\t")}t.d(e,"g",function(){return a}),t.d(e,"c",function(){return i}),t.d(e,"d",function(){return c}),t.d(e,"h",function(){return u}),t.d(e,"f",function(){return s}),t.d(e,"a",function(){return l}),t.d(e,"b",function(){return d}),t.d(e,"m",function(){return f}),t.d(e,"n",function(){return p}),t.d(e,"j",function(){return h}),t.d(e,"l",function(){return m}),t.d(e,"i",function(){return v}),t.d(e,"o",function(){return y}),t.d(e,"k",function(){return b}),t.d(e,"e",function(){return g});var o=t(146),a=function(){return Object(o.a)({query:"\n      {\n        viewer {\n          pathRecommend {\n            items {\n              title\n              kind\n              _id\n              contentData {\n                _id\n                title\n                kind\n                contentData {\n                  _id\n                  title\n                  kind\n                  contentId\n                  shortDescription\n                  sourceImage\n                }\n              }\n            }\n          }\n        }\n      }\n    "}).then(function(n){return!n||n.errors?n:{data:n.data.viewer.pathRecommend}})},i=function(){return Object(o.a)({query:"\n      query{\n        viewer{\n          topicPagination(page: 1, perPage: 100) {\n            count\n            items{\n              title\n              _id\n              shortDescription\n              image\n            }\n            follow {\n              sourceId\n            }\n          }\n        }\n      }\n    "}).then(function(n){return!n||n.errors?n:n.data.viewer.topicPagination})},c=function(){return Object(o.a)({query:'\n      {\n      viewer {\n        userbookmarkPagination (filter: {kind: "pathtype"}) {\n          items {\n            contentId\n            content {\n              title\n            }\n          }\n        }\n      }\n    }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.viewer.userbookmarkPagination}})},u=function(n){return Object(o.a)({query:'\n      query{\n        viewer{\n          articleFromTopic(filter: {\n            topicId: "'+n+'"\n          }) {\n            title\n            _id\n            url\n            authorImage\n            author\n            shortDescription\n            longDescription\n            sourceImage\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:n.data.viewer.articleFromTopic})},s=function(n){return Object(o.a)({query:'\n      {\n        viewer {\n          pathOne(filter: {_id: "'+n+'"}) {\n            _id\n            title\n            shortDescription\n            layout\n            topic {\n              topicId\n              levelId\n              createdAt\n            }\n            topicData {\n              _id\n              articleData {\n                url\n                _id\n                title\n                custom\n                author\n                author\n                authorImage\n                sourceImage\n                shortDescription\n              }\n            }\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:n.data.viewer.pathOne})},l=function(n){return Object(o.a)({query:'\n      mutation {\n        user {\n          bookmarkCreate (record: {\n            contentId: "'+n+'"\n            kind: "pathtype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.user.bookmarkCreate}})},d=function(n){return Object(o.a)({query:'\n      mutation {\n        user {\n          followCreate (record: {\n            sourceId: "'+n+'"\n            kind: topictype\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.user.bookmarkCreate}})},f=function(n){return Object(o.a)({query:'\n      mutation {\n        user {\n          bookmarkRemoveOne (filter: {\n            contentId: "'+n+'"\n            kind: "pathtype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.user.bookmarkRemoveOne}})},p=function(n){return Object(o.a)({query:'\n      mutation {\n        user {\n          followRemoveOne (filter: {\n            sourceId: "'+n+'"\n            kind: topictype\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.user.bookmarkRemoveOne}})},h=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"5afb057a2808c00064203a3e";return Object(o.a)({query:'\n      mutation{\n        user{\n          pathAddTopic(record: {\n            topicId: "'+e+'",\n            levelId: "'+t+'"\n          }, filter: {\n            _id: "'+n+'"\n          }) {\n            privacy\n            profileId\n              topic {\n                topicId\n                levelId\n                createdAt\n              }\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.user}})},m=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"5afb057a2808c00064203a3e";return Object(o.a)({query:'\n      mutation{\n        user{\n          pathRemoveTopic(record: {\n            topicId: "'+e+'",\n            levelId: "'+t+'"\n          }, filter: {\n            _id: "'+n+'"\n          }) {\n            privacy\n            profileId\n              topic {\n                topicId\n                levelId\n                createdAt\n              }\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:{data:n.data.user}})},v=function(){return Object(o.a)({query:"\n      query {\n        viewer {\n          levelMany{\n            _id\n            title\n            levelNumber\n          }\n        }\n      }\n    "}).then(function(n){return!n||n.errors?n:n.data.viewer.levelMany})},y=function(n,e){var t=r(JSON.stringify(e));return Object(o.a)({query:'\n      mutation {\n        user {\n          pathUpdateOne (\n            record: {layout: "'+t+'"},\n            filter: {_id: "'+n+'"}) {\n            recordId\n          } \n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:n.data})},b=function(n,e,t){var r=t?"private":"everyone";return Object(o.a)({query:'\n      mutation{\n        user{\n          pathCreate(record: {\n            title: "'+n+'",\n            privacy: '+r+',\n            shortDescription: "'+e+'"\n          }){\n            recordId\n          }\n        }\n      }\n    '}).then(function(n){return!n||n.errors?n:n.data})},g=function(){return Object(o.a)({query:"\n      query{\n        viewer{\n          pathSearchUser {\n            count\n            hits {\n              _id\n              _source {\n                privacy\n                title\n              }\n            }\n          }\n        }\n      }\n    "}).then(function(n){return!n||n.errors?n:n.data.viewer.pathSearchUser.hits})}}});