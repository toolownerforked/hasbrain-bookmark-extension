webpackJsonp([2,4,5,6],{920:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return p});var i=n(0),c=n.n(i),l=n(928),s=n(72),u=n.n(s),f=n(62),d=n(145),m=(n.n(d),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=function(e){function t(){var e,n,o,i;r(this,t);for(var c=arguments.length,s=Array(c),u=0;u<c;u++)s[u]=arguments[u];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.state={data:null,openedItem:0,search:""},o.getData=function(){Object(l.c)().then(function(e){return o.setState({data:e})})},o._handleBookmark=function(e){console.log(e);var t=o.state.data;-1===(t.follow?t.follow.map(function(e){return e.sourceId}):[]).indexOf(e)?Object(l.b)(e).then(function(e){if(!e||e.errors)return void d.toast.error("Topic followed failed.");d.toast.success("Topic followed successfully"),o.getData()}):Object(l.m)(e).then(function(e){if(!e||e.errors)return void d.toast.error("Topic un-followed failed.");d.toast.success("Topic un-followed successfully"),o.getData()})},o._goToDetails=function(e){o.props.history.push("/series/"+e)},i=n,a(o,i)}return o(t,e),m(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,r=t.search;if(u()(n))return null;var a=n.follow?n.follow.map(function(e){return e.sourceId}):[],o=[];return n.items.map(function(e){return-1!==e.title.toLowerCase().indexOf(r.toLowerCase())&&o.push(e),null}),c.a.createElement("div",{className:"series-list"},c.a.createElement("div",{className:"series-search-bar"},c.a.createElement(f.e,{name:"search",size:"big"}),c.a.createElement("input",{type:"text",name:"search",value:r,onChange:function(t){return e.setState({search:t.target.value})}})),c.a.createElement("div",{className:"series-path clearfix active"},c.a.createElement("div",{className:"series-items"},o.map(function(t){return c.a.createElement("div",{key:t._id,className:"series-item"+(-1===a.indexOf(t._id)?"":" follow")},c.a.createElement("div",{className:"series-item-content",onClick:function(){return e._goToDetails(t._id)}},t.title),c.a.createElement(f.j,{inverted:!0,trigger:c.a.createElement(f.e,{className:"series-bookmark"+(-1===a.indexOf(t._id)?"":" followed"),size:"large",name:"check square outline",onClick:function(){return e._handleBookmark(t._id)}}),content:"Follow this path"}))}))))}}]),t}(i.Component)},921:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return k});var c,l,s,u,f=n(0),d=n.n(f),m=n(443),p=n(930),h=n(145),v=(n.n(h),n(70)),g=n(147),y=n.n(g),b=n(62),_=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),k=(c=Object(v.b)(function(e){return{profile:e.profile}}))((u=s=function(e){function t(){var e,n,i,c;a(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state={articles:[],loadingId:"",page:1,stopLoadingMore:!1,showLoadMore:!1,loadingArticles:!0},i.loadMore=function(){i.state.loadingArticles||i.state.stopLoadingMore||i.setState({page:i.state.page+1,loadingArticles:!0},i.getArticles)},i.getArticles=function(){Object(m.e)({page:i.state.page,perPage:20,filter:{state:"published"}}).then(function(e){if(i.setState({loadingArticles:!1}),e&&!e.errors){var t=e.data,n=t.count,a=t.items,o=a.map(function(e){return Object.assign({_id:e._id},e.article)})||[],c=[].concat(r(i.state.articles),r(o)),l=!0,s=!1;c.length!==n&&0!==a.length||(s=!0,l=!1),i.setState({articles:c,stopLoadingMore:s,showLoadMore:l})}}).catch(function(e){console.log(e),i.setState({loadingArticles:!1,page:1===i.state.page?i.state.page:i.state.page-1})})},i._handleRemoveBookmark=function(e){i.setState({loadingId:e}),Object(m.b)(e).then(function(t){if(i.setState({loadingId:""}),!t||t.errros)return void h.toast.error("Remove bookmark failed.");h.toast.success("Remove bookmark successfully."),i.removeItem(e)})},i._handleArchiveBookmark=function(e){i.setState({loadingId:e}),Object(m.c)({filter:{contentId:e},record:{state:"archived"}}).then(function(t){if(i.setState({loadingId:""}),!t||t.errors)return void h.toast.error("Archive article failed.");h.toast.success("Archive article successfully."),i.removeItem(e)})},i.removeItem=function(e){var t=i.state.articles,n=y()(t,{_id:e});t.splice(n,1),i.setState([t])},i.login=function(){window.chrome.runtime.id?window.open("http://hasbrain.surge.sh/#/?extensionId="+(window.chrome.runtime.id||"")):window.open("http://hasbrain.surge.sh/#/?redirect_uri="+document.URL,"_blank")},c=n,o(i,c)}return i(t,e),_(t,[{key:"componentWillMount",value:function(){this.props.profile.isLogged&&this.getArticles()}},{key:"componentWillReceiveProps",value:function(e){console.log(this.props.profile.info._id),console.log(e.profile.info._id),this.props.profile.isLogged!==e.profile.isLogged&&e.profile.isLogged&&this.getArticles()}},{key:"render",value:function(){var e=this,t=this.state,n=t.articles,r=t.loadingId,a=t.showLoadMore,o=t.loadingArticles;return this.props.profile.isLogged?d.a.createElement("div",null,d.a.createElement("div",{className:"heading"},d.a.createElement("div",{className:"heading__left"},d.a.createElement("h2",null,"Saved articles"))),d.a.createElement("div",{className:"article__list"},n.map(function(t){return d.a.createElement(p.a,{key:t._id,article:t,loading:t._id===r,onRemove:function(){return e._handleRemoveBookmark(t._id)},onArchive:function(){return e._handleArchiveBookmark(t._id)}})})),o&&0===n.length&&d.a.createElement("div",{className:"align-center"},"Loading saved articles..."),a&&d.a.createElement("div",{className:"align-center",style:{paddingTop:10,paddingBottom:30}},d.a.createElement(b.a,{primary:!0,size:"tiny",className:"article__btn-load-more",onClick:this.loadMore,loading:o},"Load More"))):d.a.createElement("div",null,"Please login. ",d.a.createElement("a",{onClick:this.login},"Login"))}}]),t}(f.Component),s.propTypes={},l=u))||l},922:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return v});var l=n(0),s=n.n(l),u=n(928),f=n(444),d=n.n(f),m=n(62),p=n(145),h=(n.n(p),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),v=function(e){function t(){var e,n,r,c;o(this,t);for(var l=arguments.length,s=Array(l),f=0;f<l;f++)s[f]=arguments[f];return n=r=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.state={data:[],followedData:[],search:"",openAddModal:!1,isPrivate:!0,title:"",description:"",myPaths:[]},r.getData=function(){Object(u.g)().then(function(e){if(e&&!e.errors){var t=e.data.items;r.setState({data:t})}}),Object(u.d)().then(function(e){if(e&&!e.errors){var t=e.data.items;r.setState({followedData:t})}}),Object(u.e)().then(function(e){return r.setState({myPaths:e})})},r._handleBookmark=function(e){Object(u.a)(e).then(function(e){if(!e||e.errors)return void p.toast.error("Path followed failed.");p.toast.success("Path followed successfully"),r.getData()})},r._handleBookmarkRemove=function(e){Object(u.l)(e).then(function(e){if(!e||e.errors)return void p.toast.error("Path un-followed failed.");p.toast.success("Path un-followed successfully"),r.getData()})},r._goToDetails=function(e){r.props.history.push("/path/"+e)},r._createPath=function(){var e=r.state,t=e.description,n=e.title,a=e.isPrivate;Object(u.k)(n,t,a).then(function(){p.toast.success("Add path successful."),r.setState({title:"",description:"",isPrivate:!0,openAddModal:!1}),r.getData()})},r._handleChange=function(e,t){var n=t.name,o=t.value;return r.setState(a({},n,o))},c=n,i(r,c)}return c(t,e),h(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.followedData,o=t.search,i=t.openAddModal,c=t.isPrivate,l=t.title,u=t.description,f=t.myPaths,p=a.map(function(e){return{_id:e.contentId,title:e.content.title,follow:!0}}),h=d()([].concat(r(n),r(p)),function(e){return e._id}),v=[],g=[];return h.map(function(e){return-1!==e.title.toLowerCase().indexOf(o.toLowerCase())&&v.push(e),null}),f.map(function(e){return-1!==e._source.title.toLowerCase().indexOf(o.toLowerCase())&&g.push(e),null}),s.a.createElement("div",{className:"series-list"},s.a.createElement("div",{className:"series-search-bar"},s.a.createElement(m.e,{name:"search",size:"big"}),s.a.createElement("input",{type:"text",name:"search",value:o,onChange:function(t){return e.setState({search:t.target.value})}})),s.a.createElement("div",{className:"series-path clearfix active"},s.a.createElement("h3",{className:"recommend-title"},"My paths",s.a.createElement(m.a,{onClick:function(){return e.setState({openAddModal:!0})},floated:"right"},"Add a path")),s.a.createElement("div",{className:"series-items",style:{maxHeight:600*Math.ceil(g.length/4)}},g.map(function(t,n){return s.a.createElement("div",{key:n,className:"series-item"+(t.follow?" follow":"")},s.a.createElement("div",{className:"series-item-content",onClick:function(){return e._goToDetails(t._id)}},t._source.title),"private"===t._source.privacy&&s.a.createElement(m.g,{className:"path-privacy"},s.a.createElement(m.e,{name:"lock"}),"Private"),"everyone"===t._source.privacy&&s.a.createElement(m.g,{className:"path-privacy"},s.a.createElement(m.e,{name:"globe"}),"Public"))})),s.a.createElement("h3",{className:"recommend-title"},"Recommended paths"),s.a.createElement("div",{className:"series-items",style:{maxHeight:600*Math.ceil(h.length/4)}},v.map(function(t,n){return s.a.createElement("div",{key:n,className:"series-item"+(t.follow?" follow":"")},s.a.createElement("div",{className:"series-item-content",onClick:function(){return e._goToDetails(t._id)}},t.title),s.a.createElement(m.j,{inverted:!0,trigger:s.a.createElement(m.e,{className:"series-bookmark"+(t.follow?" followed":""),size:"large",name:"check square outline",onClick:function(){return t.follow?e._handleBookmarkRemove(t._id):e._handleBookmark(t._id)}}),content:"Follow this path"}))}))),s.a.createElement(m.i,{open:i,size:"tiny",className:"add-path-modal"},s.a.createElement(m.i.Header,null,"Add path"),s.a.createElement(m.i.Content,null,s.a.createElement(m.d,null,s.a.createElement(m.d.Input,{name:"title",onChange:this._handleChange,value:l,placeholder:"Enter path title"}),s.a.createElement(m.d.TextArea,{name:"description",onChange:this._handleChange,value:u,placeholder:"Enter path description"})),s.a.createElement("div",{className:"clearfix top-10"},s.a.createElement("div",{className:"left"},c&&s.a.createElement(m.g,{onClick:function(){return e.setState({isPrivate:!1})}},s.a.createElement(m.e,{name:"lock"}),"Private"),!c&&s.a.createElement(m.g,{onClick:function(){return e.setState({isPrivate:!0})}},s.a.createElement(m.e,{name:"globe"}),"Public")),s.a.createElement("div",{className:"right"},s.a.createElement(m.a,{content:"Ok",primary:!0,size:"small",floated:"right",onClick:this._createPath}),s.a.createElement(m.a,{content:"Cancel",size:"small",floated:"right",onClick:function(){return e.setState({openAddModal:!1})}}))))))}}]),t}(l.Component)},923:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return p});var i=n(0),c=n.n(i),l=n(922),s=n(63),u=n(921),f=n(942),d=n(920),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),m(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"home__heading"},c.a.createElement("div",{className:"ui text menu"},c.a.createElement(s.c,{activeClassName:"active",className:"item",to:"/home/explore"},"Explore"),c.a.createElement(s.c,{activeClassName:"active",className:"item",to:"/home/bookmark"},"Read it later"),c.a.createElement(s.c,{activeClassName:"active",className:"item",to:"/home/topics"},"Industry topics"),c.a.createElement(s.c,{activeClassName:"active",className:"item",to:"/home/path"},"Paths"))),c.a.createElement(s.d,{exact:!0,path:"/home/explore",component:f.a}),c.a.createElement(s.d,{exact:!0,path:"/home/bookmark",component:u.default}),c.a.createElement(s.d,{exact:!0,path:"/home/path",component:l.default}),c.a.createElement(s.d,{exact:!0,path:"/home/topics",component:d.default}))}}]),t}(i.Component)},928:function(e,t,n){"use strict";n.d(t,"g",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return i}),n.d(t,"h",function(){return c}),n.d(t,"f",function(){return l}),n.d(t,"a",function(){return s}),n.d(t,"b",function(){return u}),n.d(t,"l",function(){return f}),n.d(t,"m",function(){return d}),n.d(t,"j",function(){return m}),n.d(t,"i",function(){return p}),n.d(t,"k",function(){return h}),n.d(t,"e",function(){return v});var r=n(146),a=function(){return Object(r.a)({query:"\n      {\n        viewer {\n          pathRecommend {\n            items {\n              title\n              kind\n              _id\n              contentData {\n                _id\n                title\n                kind\n                contentData {\n                  _id\n                  title\n                  kind\n                  contentId\n                  shortDescription\n                  sourceImage\n                }\n              }\n            }\n          }\n        }\n      }\n    "}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.pathRecommend}})},o=function(){return Object(r.a)({query:"\n      query{\n        viewer{\n          topicPagination(page: 1, perPage: 100) {\n            count\n            items{\n              title\n              _id\n              shortDescription\n              image\n            }\n            follow {\n              sourceId\n            }\n          }\n        }\n      }\n    "}).then(function(e){return!e||e.errors?e:e.data.viewer.topicPagination})},i=function(){return Object(r.a)({query:'\n      {\n      viewer {\n        userbookmarkPagination (filter: {kind: "pathtype"}) {\n          items {\n            contentId\n            content {\n              title\n            }\n          }\n        }\n      }\n    }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.viewer.userbookmarkPagination}})},c=function(e){return Object(r.a)({query:'\n      query{\n        viewer{\n          articleFromTopic(filter: {\n            topicId: "'+e+'"\n          }) {\n            title\n            _id\n            url\n            authorImage\n            author\n            shortDescription\n            longDescription\n            sourceImage\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:e.data.viewer.articleFromTopic})},l=function(e){return Object(r.a)({query:'\n      {\n        viewer {\n          pathOne(filter: {_id: "'+e+'"}) {\n            _id\n            title\n            shortDescription\n            topic {\n              topicId\n              levelId\n              createdAt\n            }\n            topicData {\n              _id\n              articleData {\n                url\n                _id\n                title\n                custom\n                author\n                author\n                authorImage\n                sourceImage\n                shortDescription\n              }\n            }\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:e.data.viewer.pathOne})},s=function(e){return Object(r.a)({query:'\n      mutation {\n        user {\n          bookmarkCreate (record: {\n            contentId: "'+e+'"\n            kind: "pathtype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkCreate}})},u=function(e){return Object(r.a)({query:'\n      mutation {\n        user {\n          followCreate (record: {\n            sourceId: "'+e+'"\n            kind: topictype\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkCreate}})},f=function(e){return Object(r.a)({query:'\n      mutation {\n        user {\n          bookmarkRemoveOne (filter: {\n            contentId: "'+e+'"\n            kind: "pathtype"\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkRemoveOne}})},d=function(e){return Object(r.a)({query:'\n      mutation {\n        user {\n          followRemoveOne (filter: {\n            sourceId: "'+e+'"\n            kind: topictype\n          }) {\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user.bookmarkRemoveOne}})},m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"5afb057a2808c00064203a3e";return Object(r.a)({query:'\n      mutation{\n        user{\n          pathAddTopic(record: {\n            topicId: "'+t+'",\n            levelId: "'+n+'"\n          }, filter: {\n            _id: "'+e+'"\n          }) {\n            privacy\n            profileId\n              topic {\n                topicId\n                levelId\n                createdAt\n              }\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:{data:e.data.user}})},p=function(){return Object(r.a)({query:"\n      query {\n        viewer {\n          levelMany{\n            _id\n            title\n            levelNumber\n          }\n        }\n      }\n    "}).then(function(e){return!e||e.errors?e:e.data.viewer.levelMany})},h=function(e,t,n){var a=n?"private":"everyone";return Object(r.a)({query:'\n      mutation{\n        user{\n          pathCreate(record: {\n            title: "'+e+'",\n            privacy: '+a+',\n            shortDescription: "'+t+'"\n          }){\n            recordId\n          }\n        }\n      }\n    '}).then(function(e){return!e||e.errors?e:e.data})},v=function(){return Object(r.a)({query:"\n      query{\n        viewer{\n          pathSearchUser {\n            count\n            hits {\n              _id\n              _source {\n                privacy\n                title\n              }\n            }\n          }\n        }\n      }\n    "}).then(function(e){return!e||e.errors?e:e.data.viewer.pathSearchUser.hits})}},930:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i,c,l=n(0),s=n.n(l),u=n(1),f=n.n(u),d=n(62),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=(c=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),m(t,[{key:"shouldComponentUpdate",value:function(e){return JSON.stringify(this.props.article)!==JSON.stringify(e.article)||this.props.article.isBookmark!==e.article.isBookmark||this.props.loading!==e.loading}},{key:"render",value:function(){var e=this.props,t=e.article,n=e.loading,r=e.onArchive,a=e.onRemove,o=e.onBookmark;return s.a.createElement("div",{className:"article"},n&&s.a.createElement("div",{className:"ui dimmer active inverted"},s.a.createElement("div",{className:"ui loader"})),s.a.createElement("a",{href:t.contentId,target:"_blank",className:"article__title"},t.title||t.contentId),s.a.createElement("a",{className:"article__image",href:t.contentId,target:"_blank"},t.sourceImage?s.a.createElement("img",{src:t.sourceImage,alt:""}):s.a.createElement("p",null,t.shortDescription)),s.a.createElement("div",{className:"article__content"},s.a.createElement("div",{className:"article__actions"},s.a.createElement("div",{className:"article__source"},t.sourceName),s.a.createElement("div",{className:"article_settings"},s.a.createElement("div",{className:"article__action"},s.a.createElement("i",{className:"bookmark"+(!t.isBookmark&&"outline")+"icon"}))),o&&s.a.createElement("div",{className:"article_settings"},s.a.createElement("div",{onClick:o,className:"article__action"},s.a.createElement(d.e,{name:"bookmark"+(t.isBookmark?"":" outline")}))),r&&a&&s.a.createElement("div",{className:"article__settings"},s.a.createElement(d.c,{icon:"ellipsis vertical"},s.a.createElement(d.c.Menu,null,s.a.createElement(d.c.Item,{icon:"bookmark outline",text:"Remove bookmark",onClick:a}),s.a.createElement(d.c.Item,{icon:"trash",text:"Archive bookmark",onClick:r})))))))}}]),t}(l.Component),i.propTypes={article:f.a.object,loading:f.a.bool,onArchive:f.a.func,onRemove:f.a.func,onBookmark:f.a.func},c)},942:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return O});var c,l,s,u,f=n(0),d=n.n(f),m=n(443),p=n(148),h=n.n(p),v=n(145),g=(n.n(v),n(147)),y=n.n(g),b=n(62),_=n(70),k=n(943),E=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),w={loadingArticles:!1,showLoadMore:!1,stopLoadingMore:!1,limit:20,skip:0,articles:[],loadingId:"",page:1},O=(c=Object(_.b)(function(e){return{profile:e.profile}}))((u=s=function(e){function t(){var e,n,i,c;a(this,t);for(var l=arguments.length,s=Array(l),u=0;u<l;u++)s[u]=arguments[u];return n=i=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),i.state=w,i.loadMore=function(){i.state.loadingArticles||i.state.stopLoadingMore||i.setState({skip:i.state.skip+i.state.limit},i.getArticles)},i.getArticles=function(){var e=i.state,t=e.limit,n=e.page,a=i.props.profile.info.articleFilter,o=void 0===a?{}:a;i.setState({loadingArticles:!0});var c=[],l=[],s=[];Object.values(o).forEach(function(e){s=h()(s,e)}),s.map(function(e){return l.push(e)}),Object.keys(o).map(function(e){return c.push(e)}),Object(m.f)({page:n,perPage:t}).then(function(e){if(i.setState({loadingArticles:!1}),e&&!e.errors){var t=e.data,n=t.count,a=void 0===n?0:n,o=t.items,c=void 0===o?[]:o;if(c){var l=c.map(function(e){return Object.assign({},e,{isBookmark:!1})})||[],s=[].concat(r(i.state.articles),r(l)),u=!0,f=!1;s.length!==a&&0!==c.length||(f=!0,u=!1),i.setState({articles:s,stopLoadingMore:f,showLoadMore:u})}}},function(e){console.log("error",e),i.setState({loadingArticles:!1,page:1===n?n:n-1})})},i._handleBookmark=function(e,t){i.setState({loadingId:e}),Object(m.a)(e).then(function(e){if(i.setState({loadingId:""}),!e||e.errors)return void v.toast.error("Bookmark article failed.");v.toast.success("Bookmark article successfully.");var n=[].concat(r(i.state.articles)),a=y()(n,{_id:t});n[a]=Object.assign({},n[a],{isBookmark:!0}),i.setState({articles:n})})},c=n,o(i,c)}return i(t,e),E(t,[{key:"componentWillMount",value:function(){this.props.profile.isLogged&&this.getArticles()}},{key:"componentWillReceiveProps",value:function(e){this.props.profile.isLogged!==e.profile.isLogged&&e.profile.isLogged?this.getArticles():this.props.profile.isLogged===e.profile.isLogged||e.profile.isLogged||this.setState(w)}},{key:"render",value:function(){var e=this,t=this.state,n=t.articles,r=t.loadingId,a=t.showLoadMore,o=t.loadingArticles;return d.a.createElement("div",{style:{paddingTop:30}},d.a.createElement("div",{className:"feed__list"},n.map(function(t){return d.a.createElement(k.a,{key:t._id,feed:t,loading:t.contentData._id===r,onBookmark:function(){return e._handleBookmark(t.contentData._id,t._id)}})})),o&&0===n.length&&d.a.createElement("div",{className:"align-center"},"Loading feeds..."),a&&d.a.createElement("div",{className:"align-center",style:{paddingTop:10,paddingBottom:30}},d.a.createElement(b.a,{primary:!0,size:"tiny",className:"article__btn-load-more",onClick:this.loadMore,loading:o},"Load More")))}}]),t}(f.Component),s.propTypes={},l=u))||l},943:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}n.d(t,"a",function(){return p});var i,c,l=n(0),s=n.n(l),u=n(1),f=n.n(u),d=n(62),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),p=(c=i=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),m(t,[{key:"shouldComponentUpdate",value:function(e){return JSON.stringify(this.props.feed)!==JSON.stringify(e.feed)||this.props.feed.isBookmark!==e.feed.isBookmark||this.props.loading!==e.loading}},{key:"render",value:function(){var e=this.props,t=e.onBookmark,n=e.feed,r=e.loading,a=n.contentData,o=n.sourceData,i=n.isBookmark;return s.a.createElement("div",{className:"feed"},s.a.createElement("div",{className:"feed__box"},r&&s.a.createElement("div",{className:"ui dimmer active inverted"},s.a.createElement("div",{className:"ui loader"})),s.a.createElement("div",{className:"feed__heading"},s.a.createElement("div",{className:"feed__source"},s.a.createElement("img",{src:o.sourceImage,alt:""})),s.a.createElement("div",{className:"feed__bookmark",onClick:t},s.a.createElement(d.e,{name:"bookmark "+(i?"":"outline")}))),s.a.createElement("a",{className:"feed__title"},a.title),s.a.createElement("div",{className:"feed__image"},a.sourceImage?s.a.createElement("img",{src:a.sourceImage,alt:""}):s.a.createElement("p",{className:"feed__desc"},a.shortDescription))))}}]),t}(l.Component),i.propTypes={feed:f.a.object,onBookmark:f.a.func,loading:f.a.bool},c)}});