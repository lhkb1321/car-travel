(function(t){function e(e){for(var a,c,u=e[0],i=e[1],h=e[2],d=0,s=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&s.push(o[c][0]),o[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);l&&l(e);while(s.length)s.shift()();return r.push.apply(r,h||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},c={app:0},o={app:0},r=[];function u(t){return i.p+"js/"+({}[t]||t)+"."+{"chunk-095fc30b":"f8a7fe63","chunk-129236e7":"92b0db30","chunk-15a71386":"f46d70f9","chunk-232d3463":"ead8329d","chunk-2d0a2d3a":"b7d225be","chunk-2d0dd45c":"e8701a1a","chunk-349b49aa":"406d385d","chunk-5123fe68":"dea3b685","chunk-785780fc":"7ab890ca","chunk-a9cf5e34":"0e2a3b46","chunk-38531f44":"c03fc524","chunk-4ad1b5bc":"e44c5897","chunk-57a054e9":"d023dae9","chunk-65dccad8":"4b6e7b43","chunk-73d43192":"70d0707e","chunk-b1c072ae":"f526b08f","chunk-c8952db8":"16e6dba9","chunk-39af11a5":"43b38c02","chunk-4e539c6c":"e4a038a0","chunk-d811e520":"6a2e80b6"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={"chunk-095fc30b":1,"chunk-129236e7":1,"chunk-15a71386":1,"chunk-232d3463":1,"chunk-5123fe68":1,"chunk-785780fc":1,"chunk-a9cf5e34":1,"chunk-38531f44":1,"chunk-4ad1b5bc":1,"chunk-57a054e9":1,"chunk-65dccad8":1,"chunk-73d43192":1,"chunk-b1c072ae":1,"chunk-39af11a5":1,"chunk-4e539c6c":1,"chunk-d811e520":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-095fc30b":"e58c8a8b","chunk-129236e7":"9f2f0bca","chunk-15a71386":"de81a04b","chunk-232d3463":"99e2c3df","chunk-2d0a2d3a":"31d6cfe0","chunk-2d0dd45c":"31d6cfe0","chunk-349b49aa":"31d6cfe0","chunk-5123fe68":"8e9e6edd","chunk-785780fc":"9dd6528e","chunk-a9cf5e34":"b1e159e7","chunk-38531f44":"33782668","chunk-4ad1b5bc":"64e213e2","chunk-57a054e9":"b66ec5d5","chunk-65dccad8":"06ad45c8","chunk-73d43192":"2dbbd107","chunk-b1c072ae":"88ab66a0","chunk-c8952db8":"31d6cfe0","chunk-39af11a5":"cefb923e","chunk-4e539c6c":"d8cc1862","chunk-d811e520":"46020a35"}[t]+".css",o=i.p+a,r=document.getElementsByTagName("link"),u=0;u<r.length;u++){var h=r[u],d=h.getAttribute("data-href")||h.getAttribute("href");if("stylesheet"===h.rel&&(d===a||d===o))return e()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){h=s[u],d=h.getAttribute("data-href");if(d===a||d===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[t],l.parentNode.removeChild(l),n(r)},l.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){c[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var h,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(t);var s=new Error;h=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",s.name="ChunkLoadError",s.type=a,s.request=c,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){h({type:"timeout",target:d})}),12e4);d.onerror=d.onload=h,document.head.appendChild(d)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i.oe=function(t){throw console.error(t),t};var h=window["webpackJsonp"]=window["webpackJsonp"]||[],d=h.push.bind(h);h.push=e,h=h.slice();for(var s=0;s<h.length;s++)e(h[s]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0c6d":function(t,e,n){"use strict";var a=n("2427"),c=n.n(a),o={},r="api";o.axios=c.a.create({baseURL:r,timeout:6e5,withCredentials:!0}),e["a"]=o},"56d7":function(t,e,n){"use strict";n.r(e);n("96dd"),n("a60a"),n("e783"),n("8b1f");var a=n("6e6d"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app"},[n("Header"),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header"},[n("div",{staticClass:"header-inner"},[n("ul",{staticClass:"header_left"},[n("li",{staticClass:"logo"},[t._v("\n        汽车出行\n      ")]),n("li",[!0===t.statusData?n("el-dropdown",{attrs:{trigger:"click"},on:{command:t.handleCommand}},[n("span",{staticClass:"el-dropdown-link"},[n("i",{staticClass:"el-icon-location-outline el-icon--left"}),t._v("\n            "+t._s(t.city)+"\n            "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),0===t.mapShow?n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"510100"}},[t._v("成都")]),n("el-dropdown-item",{attrs:{command:"610100"}},[t._v("西安")]),n("el-dropdown-item",{attrs:{command:"460100"}},[t._v("海口")])],1):t._e(),1===t.mapShow?n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"420100"}},[t._v("武汉")]),n("el-dropdown-item",{attrs:{command:"510100"}},[t._v("成都")]),n("el-dropdown-item",{attrs:{command:"610100"}},[t._v("西安")]),n("el-dropdown-item",{attrs:{command:"460100"}},[t._v("海口")])],1):t._e()],1):t._e()],1)]),n("div",{staticClass:"header_right"},[n("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":t.$route.path,router:"","background-color":"#181B2C","text-color":"#fff","active-text-color":"#fff",mode:"horizontal"},on:{select:t.handleSelect}},t._l(t.navList,(function(e){return n("el-menu-item",{key:e.name,attrs:{index:e.router}},[t._v(t._s(e.name))])})),1)],1)])])},u=[],i={data:function(){return{statusData:!0,activeIndex:"1",mapShow:0,navList:[{name:"概览",router:"/"},{name:"订单监控",router:"/orderMonitoring"},{name:"轨迹监控",router:"/trajectory"},{name:"虚拟车站",router:"/station"},{name:"出行迁途",router:"/movingway"},{name:"用户数据",router:"/userData"},{name:"热力图",router:"/heatMap"}],city:"成都"}},methods:{handleSelect:function(t,e){window.localStorage.path=t,"/"===t||"/heatMap"===t?(this.statusData=!0,"/heatMap"===t?(this.mapShow=1,this.city="武汉",this.$store.dispatch("setCitycode","420100")):"/"===t&&(this.mapShow=0,this.city="成都",this.$store.dispatch("setCitycode","610100"))):this.statusData=!1},handleCommand:function(t){"420100"===t?this.city="武汉":"510100"===t?this.city="成都":"610100"===t?this.city="西安":"460100"===t&&(this.city="海口"),this.$store.dispatch("setCitycode",t)}},mounted:function(){console.log(this.$store.state.cityStatus),"/"===window.localStorage.path||"/heatMap"===window.localStorage.path?(this.statusData=!0,"/heatMap"===window.localStorage.path?(this.mapShow=1,this.city="武汉",this.$store.dispatch("setCitycode","420100")):this.mapShow=0):this.statusData=!1}},h=i,d=(n("70c3"),n("6691")),s=Object(d["a"])(h,r,u,!1,null,"1fcb7162",null),l=s.exports,p={components:{Header:l}},f=p,m=(n("5c0b"),Object(d["a"])(f,c,o,!1,null,null,null)),b=m.exports,k=n("c478");a["default"].use(k["a"]);var v=new k["a"]({mode:"history",base:"",routes:[{path:"/",name:"overview",component:function(t){return Promise.all([n.e("chunk-349b49aa"),n.e("chunk-a9cf5e34")]).then(function(){var e=[n("2226")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/orderMonitoring",name:"orderMonitoring",component:function(t){return Promise.all([n.e("chunk-c8952db8"),n.e("chunk-39af11a5")]).then(function(){var e=[n("196b")];t.apply(null,e)}.bind(this)).catch(n.oe)},meta:{isAuth:!0}},{path:"/trajectory",name:"trajectory",component:function(t){return Promise.all([n.e("chunk-349b49aa"),n.e("chunk-785780fc")]).then(function(){var e=[n("91b7")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/station",name:"station",component:function(t){return n.e("chunk-129236e7").then(function(){var e=[n("14c5")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/movingway",name:"movingway",component:function(t){return n.e("chunk-57a054e9").then(function(){var e=[n("85d9")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/orderStatement",name:"orderStatement",component:function(t){return n.e("chunk-b1c072ae").then(function(){var e=[n("05ee")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/behavior",name:"behavior",component:function(t){return n.e("chunk-38531f44").then(function(){var e=[n("61bb")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/trip",name:"trip",component:function(t){return n.e("chunk-15a71386").then(function(){var e=[n("41e7")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/police",name:"police",component:function(t){return n.e("chunk-095fc30b").then(function(){var e=[n("ea53")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/supplyDemand",name:"supplyDemand",component:function(t){return n.e("chunk-2d0dd45c").then(function(){var e=[n("814a")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/trafficJam",name:"trafficJam",component:function(t){return n.e("chunk-2d0a2d3a").then(function(){var e=[n("0026")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/order",name:"order",component:function(t){return n.e("chunk-65dccad8").then(function(){var e=[n("cf2a")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/presentation",name:"presentation",component:function(t){return n.e("chunk-232d3463").then(function(){var e=[n("8b84")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/orderData",name:"orderData",component:function(t){return Promise.all([n.e("chunk-c8952db8"),n.e("chunk-4e539c6c")]).then(function(){var e=[n("7fcf")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/userData",name:"userData",component:function(t){return n.e("chunk-73d43192").then(function(){var e=[n("922f")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/heatMap",name:"heatMap",component:function(t){return n.e("chunk-d811e520").then(function(){var e=[n("a741")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/bookingForm",name:"bookingForm",component:function(t){return n.e("chunk-4ad1b5bc").then(function(){var e=[n("298f")];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/system",name:"system",component:function(t){return Promise.all([n.e("chunk-349b49aa"),n.e("chunk-5123fe68")]).then(function(){var e=[n("f97d")];t.apply(null,e)}.bind(this)).catch(n.oe)}}]}),y=n("7893"),g=n.n(y);n("c69f");a["default"].use(g.a);var w=n("2427"),C=n.n(w),S=n("d84b"),_=n.n(S),j=n("591a");a["default"].use(j["a"]);var x=new j["a"].Store({state:{citycode:"420100",cityStatus:!1},mutations:{changeCitycode:function(t,e){t.citycode=e},changeCityStatus:function(t,e){t.cityStatus=e,console.log(e)}},actions:{setCitycode:function(t,e){var n=t.commit;n("changeCitycode",e)},setCityStatus:function(t,e){var n=t.commit;n("changeCityStatus",e)}}}),D=n("0c6d"),P=n("debc"),M=n.n(P);a["default"].config.productionTip=!1,a["default"].prototype.$axios=C.a,a["default"].prototype.$echarts=_.a,a["default"].prototype.util=D["a"],a["default"].prototype.$jquery=M.a,new a["default"]({router:v,store:x,render:function(t){return t(b)}}).$mount("#app")},"5a03":function(t,e,n){},"5c0b":function(t,e,n){"use strict";var a=n("5a03"),c=n.n(a);c.a},"70c3":function(t,e,n){"use strict";var a=n("f19e"),c=n.n(a);c.a},c69f:function(t,e,n){},f19e:function(t,e,n){}});
//# sourceMappingURL=app.354ebbcb.js.map