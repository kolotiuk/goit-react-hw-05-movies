"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{690:function(t,n,e){e.r(n),e.d(n,{default:function(){return l}});var r=e(885),u=e(791),c=e(184),i=function(t){var n=t.onChange,e=(0,u.useState)(""),i=(0,r.Z)(e,2),o=i[0],a=i[1];return(0,c.jsx)("div",{children:(0,c.jsxs)("form",{onSubmit:function(t){t.preventDefault(),n(o)},children:[(0,c.jsx)("input",{type:"text",value:o,onChange:function(t){a(t.target.value)}}),(0,c.jsx)("button",{type:"submit",children:"Search"})]})})},o=e(731),a=e(739),f=e(297),s=function(t){var n=t.query,e=(0,a.TH)(),i=(0,u.useState)([]),s=(0,r.Z)(i,2),l=s[0],h=s[1];return(0,u.useEffect)((function(){n&&(0,f.V0)(n).then((function(t){if(!t.length)return alert("No one films"),void h([]);h(t)})).catch((function(t){return console.log(t)}))}),[n]),(0,c.jsx)("ul",{children:l.length>0&&l.map((function(t){return(0,c.jsx)("li",{children:(0,c.jsx)(o.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})},l=function(){var t,n=(0,o.lr)(),e=(0,r.Z)(n,2),u=e[0],a=e[1],f=null!==(t=u.get("filter"))&&void 0!==t?t:"";return(0,c.jsxs)("main",{children:[(0,c.jsx)(i,{onChange:function(t){a(""!==t?{filter:t}:{})}}),(0,c.jsx)(s,{query:f})]})}},297:function(t,n,e){e.d(n,{JS:function(){return c},TP:function(){return o},V0:function(){return i},tx:function(){return f},zv:function(){return a}});var r=e(44);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var u="886a5e80a67d15e1eb52e12b03d8c581",c=function(){return r.Z.get("/trending/movie/day?api_key=".concat(u)).then((function(t){return t.data.results}))},i=function(t){return r.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t)).then((function(t){return t.data.results}))},o=function(t){return r.Z.get("/movie/".concat(t,"?api_key=").concat(u)).then((function(t){return t.data}))},a=function(t){return r.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u)).then((function(t){return t.data.cast}))},f=function(t){return r.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u)).then((function(t){return t.data.results}))}}}]);
//# sourceMappingURL=690.cd669170.chunk.js.map