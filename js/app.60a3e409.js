(function(t){function e(e){for(var n,o,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,o=1;o<r.length;o++){var i=r[o];0!==a[i]&&(n=!1)}n&&(s.splice(e--,1),t=c(c.s=r[0]))}return t}var n={},o={app:0},a={app:0},s=[];function i(t){return c.p+"js/"+({Proyectos:"Proyectos",about:"about",skills:"skills"}[t]||t)+"."+{Proyectos:"d23563b4",about:"0b6d39ad",skills:"265e8b6d"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(t){var e=[],r={Proyectos:1,about:1,skills:1};o[t]?e.push(o[t]):0!==o[t]&&r[t]&&e.push(o[t]=new Promise((function(e,r){for(var n="css/"+({Proyectos:"Proyectos",about:"about",skills:"skills"}[t]||t)+"."+{Proyectos:"9dd95b67",about:"b0fbd9b7",skills:"d8f525b3"}[t]+".css",a=c.p+n,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var l=s[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){l=f[i],u=l.getAttribute("data-href");if(u===n||u===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var n=e&&e.target&&e.target.src||a,s=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=n,delete o[t],d.parentNode.removeChild(d),r(s)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var n=a[t];if(0!==n)if(n)e.push(n[2]);else{var s=new Promise((function(e,r){n=a[t]=[e,r]}));e.push(n[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var r=a[t];if(0!==r){if(r){var n=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+n+": "+o+")",f.name="ChunkLoadError",f.type=n,f.request=o,r[1](f)}a[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,r){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(r,n,function(e){return t[e]}.bind(null,n));return r},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=u;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("div",{staticClass:"container"},[r("nav",[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/about"}},[t._v("About me")]),r("router-link",{attrs:{to:"/skills"}},[t._v("Skills")]),r("router-link",{attrs:{to:"/proyectos"}},[t._v("Proyectos")])],1)])]),r("router-view"),t._m(0)],1)},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("div",{staticClass:"container"},[r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xs-12 col-sm-12 col-md-8"},[r("h4",{staticClass:"title-footer"},[t._v("Contacto")]),r("h4",{staticStyle:{"font-size":"1rem","font-weight":"bold"}},[r("i",{staticClass:"fas fa-envelope"}),t._v(" Alexpedrasa10@gmail.com")])]),r("div",{staticClass:"col-xs-12 col-sm-12 col-md-2"},[r("div",{staticClass:"redes-footer"},[r("a",{attrs:{href:"https://www.linkedin.com/in/alex-pedrasa-5103441a5/"}},[r("i",{staticClass:"fab fa-linkedin"})]),r("a",{attrs:{href:"https://github.com/Alexpedrasa10"}},[r("i",{staticClass:"fab fa-github"})])])])])])])}],s=(r("034f"),r("2877")),i={},c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,u=r("8c4f"),f=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("section",[n("div",{staticClass:"bottom-linea"}),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-xs-1 col-sm-5 col-md-5"},[n("img",{staticClass:"ph",attrs:{src:r("6451"),alt:""}})]),n("div",{staticClass:"col-xs-6 col-sm-5 col-md-5"},[n("div",{staticClass:"title"},[n("h1",{staticClass:"Alex"},[t._v("Alex")]),n("h1",{staticClass:"Pedrasa"},[t._v("Pedrasa")]),n("h2",[n("i",{staticClass:"fas fa-code"}),t._v(" Desarrollador Frontend")]),n("h2",[n("i",{staticClass:"fas fa-university"}),t._v(" Estudiante de Ingeniería en Sistemas de Información")]),n("h2",[n("i",{staticClass:"fas fa-user-graduate"}),t._v(" Operador de aplicaciones Office")])])])])])])}],p={name:"Home"},v=p,m=(r("cccb"),Object(s["a"])(v,f,d,!1,null,null,null)),h=m.exports;n["a"].use(u["a"]);const b=[{path:"/",name:"Home",component:h},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}},{path:"/skills",name:"Skills",component:function(){return r.e("skills").then(r.bind(null,"ad83"))}},{path:"/proyectos",name:"Proyectos",component:function(){return r.e("Proyectos").then(r.bind(null,"7d97"))}}],y=new u["a"]({routes:b});var g=y;n["a"].config.productionTip=!1,new n["a"]({router:g,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,r){},6451:function(t,e,r){t.exports=r.p+"img/circulocara.9a89134d.png"},"85ec":function(t,e,r){},cccb:function(t,e,r){"use strict";var n=r("5ced"),o=r.n(n);o.a}});
//# sourceMappingURL=app.60a3e409.js.map