(function(t){function e(e){for(var r,s,i=e[0],l=e[1],c=e[2],u=0,d=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var i=a[s];0!==n[i]&&(r=!1)}r&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var r={},s={app:0},n={app:0},o=[];function i(t){return l.p+"js/"+({Proyectos:"Proyectos",about:"about",skills:"skills"}[t]||t)+"."+{Proyectos:"83ae1628",about:"b5f70314",skills:"5c05480e"}[t]+".js"}function l(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={Proyectos:1,about:1,skills:1};s[t]?e.push(s[t]):0!==s[t]&&a[t]&&e.push(s[t]=new Promise((function(e,a){for(var r="css/"+({Proyectos:"Proyectos",about:"about",skills:"skills"}[t]||t)+"."+{Proyectos:"cc68959b",about:"c81977bf",skills:"00213843"}[t]+".css",n=l.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===r||u===n))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],u=c.getAttribute("data-href");if(u===r||u===n)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||n,o=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[t],f.parentNode.removeChild(f),a(o)},f.href=n;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[t]=0})));var r=n[t];if(0!==r)if(r)e.push(r[2]);else{var o=new Promise((function(e,a){r=n[t]=[e,a]}));e.push(r[2]=o);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=i(t);var d=new Error;c=function(e){u.onerror=u.onload=null,clearTimeout(f);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,a[1](d)}n[t]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(a,r,function(e){return t[e]}.bind(null,r));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=u;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("85ec"),s=a.n(r);s.a},3823:function(t,e,a){t.exports=a.p+"img/loogo.d4fe4894.svg"},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("b-navbar",{staticClass:"navbar navbar-expand-lg",attrs:{toggleable:"",type:"dark"}},[r("div",{staticClass:"container"},[r("b-navbar-toggle",[r("i",{directives:[{name:"b-toggle",rawName:"v-b-toggle.sidebar-no-header",modifiers:{"sidebar-no-header":!0}}],staticClass:"fas fa-bars",staticStyle:{"font-size":"1.50rem",color:"#000"}}),r("b-sidebar",{attrs:{id:"sidebar-no-header","aria-labelledby":"sidebar-no-header-title","no-header":"",shadow:"","bg-variant":"dark","text-variant":"light"},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hide;return[r("div",{staticClass:"p-3"},[r("i",{staticClass:"far fa-times-circle",staticStyle:{"font-size":"2rem",display:"flex",color:"F1F1F1"},attrs:{block:""},on:{click:a}}),r("nav",{staticClass:"mb-15"},[r("b-nav",{attrs:{vertical:""}},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/skills"}},[t._v("Skills")]),r("router-link",{attrs:{to:"/proyectos"}},[t._v("Proyectos")]),r("router-link",{attrs:{to:"/about"}},[t._v("About me")])],1)],1)])]}}])})],1),r("b-navbar-brand",{attrs:{aling:"center"}},[r("router-link",{attrs:{to:"/"}},[r("img",{staticClass:"logo",attrs:{src:a("3823"),alt:"logo"}})])],1),r("b-collapse",{attrs:{id:"sidebar-1","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("router-link",{attrs:{to:"/"}},[t._v("Home")]),r("router-link",{attrs:{to:"/skills"}},[t._v("Skills")]),r("router-link",{attrs:{to:"/proyectos"}},[t._v("Proyectos")]),r("router-link",{attrs:{to:"/about"}},[t._v("About me")])],1)],1)],1)])],1),r("router-view"),t._m(0)],1)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-xs-12 col-sm-12 col-lg-8"},[a("h4",{staticClass:"title-footer"},[t._v("Contacto")]),a("h4",{staticStyle:{"font-size":"1rem","font-weight":"bold"}},[a("i",{staticClass:"fas fa-envelope"}),t._v(" Alexpedrasa10@gmail.com")])]),a("div",{staticClass:"col-xs-12 col-sm-12 col-lg-2"},[a("div",{staticClass:"redes-footer"},[a("a",{attrs:{href:"https://www.linkedin.com/in/alex-pedrasa-5103441a5/"}},[a("i",{staticClass:"fab fa-linkedin"})]),a("a",{attrs:{href:"https://github.com/Alexpedrasa10"}},[a("i",{staticClass:"fab fa-github"})])])])])])])}],o=(a("034f"),a("2877")),i={},l=Object(o["a"])(i,s,n,!1,null,null,null),c=l.exports,u=a("8c4f"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("section",[r("div",{staticClass:"bottom-linea"}),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-xs-1 col-sm-5 col-md-5"},[r("img",{staticClass:"ph",attrs:{src:a("6451"),alt:""}})]),r("div",{staticClass:"col-xs-6 col-sm-5 col-md-5"},[r("div",{staticClass:"title"},[r("h1",{staticClass:"Alex"},[t._v("Alex")]),r("h1",{staticClass:"Pedrasa"},[t._v("Pedrasa")]),r("h2",[r("i",{staticClass:"fas fa-code"}),t._v(" Desarrollador Frontend")]),r("h2",[r("i",{staticClass:"fas fa-university"}),t._v(" Estudiante de Ingeniería en Sistemas de Información")]),r("h2",[r("i",{staticClass:"fas fa-user-graduate"}),t._v(" Operador de aplicaciones Office")])])])])])])}],p={name:"Home"},v=p,b=(a("cccb"),Object(o["a"])(v,d,f,!1,null,null,null)),m=b.exports;r["default"].use(u["a"]);const h=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/skills",name:"Skills",component:function(){return a.e("skills").then(a.bind(null,"ad83"))}},{path:"/proyectos",name:"Proyectos",component:function(){return a.e("Proyectos").then(a.bind(null,"7d97"))}}],g=new u["a"]({routes:h});var y=g,k=a("5f5b"),C=a("b1e0");a("f9e3"),a("2dd8");r["default"].use(k["a"]),r["default"].use(C["a"]),r["default"].config.productionTip=!1,new r["default"]({router:y,render:function(t){return t(c)}}).$mount("#app")},"5ced":function(t,e,a){},6451:function(t,e,a){t.exports=a.p+"img/circulocara.9a89134d.png"},"85ec":function(t,e,a){},cccb:function(t,e,a){"use strict";var r=a("5ced"),s=a.n(r);s.a}});
//# sourceMappingURL=app.aa450c12.js.map