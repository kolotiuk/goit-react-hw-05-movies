"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[701],{701:function(e,t,n){n.r(t);var r=n(885),i=n(791),c=n(297),o=n(739),a=n(731),u=n(184),s=(0,i.lazy)((function(){return n.e(602).then(n.bind(n,602))}));t.default=function(){var e,t,n=(0,o.TH)(),l=(0,o.s0)(),d=null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",h=(0,o.UO)().homeId,f=(0,i.useState)(null),v=(0,r.Z)(f,2),m=v[0],p=v[1];if((0,i.useEffect)((function(){(0,c.TP)(Number(h)).then(p)}),[h]),!m)return null;var j=m.original_title,x=m.name,g=m.poster_path,k=m.vote_average,_=m.overview,w=m.genres;return(0,u.jsxs)("div",{children:[(0,u.jsx)(s,{onClick:function(){return l(d)}}),(0,u.jsx)("p",{children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(g)||0,alt:"alt",width:"300"})}),(0,u.jsx)("h1",{children:j||x}),(0,u.jsxs)("p",{children:["User Score: ",10*k,"%"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:_}),(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("p",{children:w.map((function(e){return e.name})).join(" ")||"Genres not found"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("p",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"cast",state:{from:null===n||void 0===n?void 0:n.state.from},children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{to:"reviews",state:{from:null===n||void 0===n?void 0:n.state.from},children:"Reviews"})})]}),(0,u.jsx)(o.j3,{})]})]})}},297:function(e,t,n){n.d(t,{JS:function(){return c},TP:function(){return a},V0:function(){return o},tx:function(){return s},zv:function(){return u}});var r=n(44);r.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="886a5e80a67d15e1eb52e12b03d8c581",c=function(){return r.Z.get("/trending/movie/day?api_key=".concat(i)).then((function(e){return e.data.results}))},o=function(e){return r.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e)).then((function(e){return e.data.results}))},a=function(e){return r.Z.get("/movie/".concat(e,"?api_key=").concat(i)).then((function(e){return e.data}))},u=function(e){return r.Z.get("/movie/".concat(e,"/credits?api_key=").concat(i)).then((function(e){return e.data.cast}))},s=function(e){return r.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(i)).then((function(e){return e.data.results}))}}}]);
//# sourceMappingURL=701.c7f002cd.chunk.js.map