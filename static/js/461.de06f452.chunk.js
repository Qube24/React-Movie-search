"use strict";(self.webpackChunkReact_Image_finder=self.webpackChunkReact_Image_finder||[]).push([[461],{458:function(e,n,t){t.d(n,{Bt:function(){return f},Xv:function(){return s},vw:function(){return c},y:function(){return o},z1:function(){return i}});var r=t(861),a=t(757),u=t.n(a),c=function(){var e=(0,r.Z)(u().mark((function e(){var n,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=b32896ed8f56a3105cdf45e097423bca");case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/search/movie?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US&page=1&include_adult=false&query=".concat(n));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=b32896ed8f56a3105cdf45e097423bca&language=en-US"));case 2:return t=e.sent,e.next=5,t.json();case 5:return r=e.sent,e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},461:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),a=t(439),u=t(757),c=t.n(u),i=t(458),s=t(791),o=t(689),f="reviewsStyle_reviewList__UyjkB",p="reviewsStyle_reviewCard__3t7DW",v="reviewsStyle_review__Zqc6O",d=t(184),h=function(){var e=(0,o.UO)().id,n=(0,s.useState)(null),t=(0,a.Z)(n,2),u=t[0],h=t[1],l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,i.Bt)(n);case 2:t=e.sent,h(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){l(e)}),[]),u?(0,d.jsx)("ul",{className:f,children:u.results.map((function(e){return(0,d.jsxs)("li",{className:p,children:[e.author,(0,d.jsx)("p",{dangerouslySetInnerHTML:{__html:e.content},className:v})]},e.id)}))}):"Loading"}},861:function(e,n,t){function r(e,n,t,r,a,u,c){try{var i=e[u](c),s=i.value}catch(o){return void t(o)}i.done?n(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(a,u){var c=e.apply(n,t);function i(e){r(c,a,u,i,s,"next",e)}function s(e){r(c,a,u,i,s,"throw",e)}i(void 0)}))}}t.d(n,{Z:function(){return a}})}}]);
//# sourceMappingURL=461.de06f452.chunk.js.map