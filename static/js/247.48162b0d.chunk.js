"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{247:function(t,n,e){e.r(n);var r=e(885),c=e(791),a=e(739),i=e(297),u=e(184);n.default=function(){var t=(0,c.useState)(null),n=(0,r.Z)(t,2),e=n[0],o=n[1],s=(0,a.UO)().homeId;return(0,c.useEffect)((function(){(0,i.zv)(s).then(o)}),[s]),e?(0,u.jsx)("div",{children:(0,u.jsx)("ul",{children:e.length?e.map((function(t){var n=t.id,e=t.profile_path,r=t.character,c=t.original_name;return(0,u.jsxs)("li",{children:[(0,u.jsx)("p",{children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e)||0,alt:""})}),(0,u.jsx)("p",{children:c}),(0,u.jsx)("p",{children:r})]},n)})):(0,u.jsx)("div",{children:"We dont have any actors for this movie"})})}):null}},297:function(t,n,e){e.d(n,{JS:function(){return a},TP:function(){return u},V0:function(){return i},tx:function(){return s},zv:function(){return o}});var r=e(44);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="886a5e80a67d15e1eb52e12b03d8c581",a=function(){return r.Z.get("/trending/movie/day?api_key=".concat(c)).then((function(t){return t.data.results}))},i=function(t){return r.Z.get("/search/movie?api_key=".concat(c,"&query=").concat(t)).then((function(t){return t.data.results}))},u=function(t){return r.Z.get("/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},o=function(t){return r.Z.get("/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},s=function(t){return r.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.data.results}))}}}]);
//# sourceMappingURL=247.48162b0d.chunk.js.map