(function(){"use strict";var e={4618:function(e,n,t){var r=t(9963),o=t(6252);function a(e,n,t,r,a,i){const u=(0,o.up)("CommonHeader"),s=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(u),(0,o.Wm)(s)],64)}var i=t.p+"img/luagen.3b568aba.svg",u=t.p+"img/help.91207c9c.svg",s=t.p+"img/github.d11a271f.svg";const c=e=>((0,o.dD)("data-v-7785a8a8"),e=e(),(0,o.Cn)(),e),l={class:"m-header"},d={class:"m-header-title"},f=c((()=>(0,o._)("img",{class:"u-logo",src:i,alt:"LUA脚本生成器"},null,-1))),m=c((()=>(0,o._)("span",{class:"u-title"},"LuaGen",-1))),p=(0,o.uE)('<div class="m-header-meta" data-v-7785a8a8><a href="https://github.com/deepberry/luagen/blob/master/README.md" class="u-help" target="_blank" data-v-7785a8a8><img src="'+u+'" alt="Help" data-v-7785a8a8><span data-v-7785a8a8>使用帮助</span></a><a href="https://github.com/deepberry/luagen/blob/master/Dev.md" class="u-dev" target="_blank" data-v-7785a8a8><img src="'+s+'" alt="Help" data-v-7785a8a8><span data-v-7785a8a8>开发文档</span></a></div>',1);function v(e,n,t,r,a,i){const u=(0,o.up)("header-version");return(0,o.wg)(),(0,o.iD)("header",l,[(0,o._)("h1",d,[f,m,(0,o.Wm)(u)]),p])}var h=t(3577);const g={class:"m-header-version"},b={class:"u-version"},y=(0,o.Uk)("版本：");function w(e,n,t,r,a,i){const u=(0,o.up)("ArrowDown"),s=(0,o.up)("el-icon"),c=(0,o.up)("el-button"),l=(0,o.up)("el-dropdown-item"),d=(0,o.up)("el-dropdown-menu"),f=(0,o.up)("el-dropdown");return(0,o.wg)(),(0,o.iD)("div",g,[(0,o.Wm)(f,{type:"primary",placement:"bottom",onCommand:i.handleVersionChange},{dropdown:(0,o.w5)((()=>[(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.versions,(n=>((0,o.wg)(),(0,o.j4)(l,{icon:e.BottomRight,key:n.key,command:n.key,disabled:!n.status},{default:(0,o.w5)((()=>[(0,o.Uk)((0,h.zw)(n.label),1)])),_:2},1032,["icon","command","disabled"])))),128))])),_:1})])),default:(0,o.w5)((()=>[(0,o.Wm)(c,{type:"primary",size:"small"},{default:(0,o.w5)((()=>[(0,o._)("span",b,[y,(0,o._)("b",null,(0,h.zw)(e.version),1)]),(0,o.Wm)(s,{class:"el-icon--right"},{default:(0,o.w5)((()=>[(0,o.Wm)(u)])),_:1})])),_:1})])),_:1},8,["onCommand"])])}var k=t(5781),_=t(2262),C=JSON.parse('{"dd":[{"label":"v1 简易开发版","key":"v1","status":true}]}'),O={name:"HeaderVersion",components:{ArrowDown:k.K5e},data:function(){return{version:"v1",versions:C.dd,BottomRight:(0,_.Xl)(k.TBO)}},watch:{"$store.state.version":{immediate:!0,handler:function(e){this.version=e,this.$router.push({name:e})}}},methods:{handleVersionChange:function(e){this.$store.commit("set",{key:"version",val:e})}}},j=t(3744);const A=(0,j.Z)(O,[["render",w]]);var E=A,T={name:"CommonHeader",components:{HeaderVersion:E}};const H=(0,j.Z)(T,[["render",v],["__scopeId","data-v-7785a8a8"]]);var S=H,D={name:"App",props:[],components:{CommonHeader:S},data:function(){return{}},computed:{},watch:{},methods:{},created:function(){},mounted:function(){}};const N=(0,j.Z)(D,[["render",a]]);var L=N,P=t(2119);const W=()=>t.e(966).then(t.bind(t,9966)),x=[{name:"home",path:"/",redirect:"/v1"},{name:"v1",path:"/v1",component:W}],B=(0,P.p7)({history:(0,P.r5)(),routes:x}),M=new URLSearchParams(location.search),U=M.get("__token");U&&localStorage.setItem("TITAN_TOKEN",U);var V=B,F={},I=t(3907);const K={state:{version:F.defaultVersion||"v1",file:"",raw:"",inputHeader:[],keymap:{},order:[],lua:"",json:"",comment:"",table:""},mutations:{set:(e,n)=>{e[n.key]=n.val},bulk:(e,n)=>{for(let t of n)e[t.key]=t.val},empty:e=>{e.file="",e.raw="",e.lua="",e.json="",e.comment="",e.table=""}},getters:{get:e=>n=>e[n]},actions:{}};var R=(0,I.MT)(K),Z=t(2862);t(4415);const z=(0,r.ri)(L);z.use(V),z.use(R),z.use(Z.Z),z.config.errorHandler=(e,n,t)=>{console.log(e,n,t)},z.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+".5495270a.js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".f6c59a9c.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="luagen:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="https://cdn.deepberry.cn/static/luagen/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={966:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var l=s(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkluagen"]=self["webpackChunkluagen"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(4618)}));r=t.O(r)})();
//# sourceMappingURL=app.89467dbd.js.map