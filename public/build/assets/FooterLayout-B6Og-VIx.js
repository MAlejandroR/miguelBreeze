import{d as Vt,l as Ht,q as $t,j as R}from"./app-TCiHJzYn.js";var xt={},Oe={exports:{}},Ct=function(e,o){return function(){for(var i=new Array(arguments.length),u=0;u<i.length;u++)i[u]=arguments[u];return e.apply(o,i)}},_t=Ct,M=Object.prototype.toString;function Pe(t){return M.call(t)==="[object Array]"}function Ce(t){return typeof t>"u"}function Jt(t){return t!==null&&!Ce(t)&&t.constructor!==null&&!Ce(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function Wt(t){return M.call(t)==="[object ArrayBuffer]"}function Xt(t){return typeof FormData<"u"&&t instanceof FormData}function Kt(t){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function zt(t){return typeof t=="string"}function Gt(t){return typeof t=="number"}function Rt(t){return t!==null&&typeof t=="object"}function te(t){if(M.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Qt(t){return M.call(t)==="[object Date]"}function Yt(t){return M.call(t)==="[object File]"}function Zt(t){return M.call(t)==="[object Blob]"}function Ot(t){return M.call(t)==="[object Function]"}function er(t){return Rt(t)&&Ot(t.pipe)}function tr(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}function rr(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function nr(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function je(t,e){if(!(t===null||typeof t>"u"))if(typeof t!="object"&&(t=[t]),Pe(t))for(var o=0,a=t.length;o<a;o++)e.call(null,t[o],o,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function Re(){var t={};function e(i,u){te(t[u])&&te(i)?t[u]=Re(t[u],i):te(i)?t[u]=Re({},i):Pe(i)?t[u]=i.slice():t[u]=i}for(var o=0,a=arguments.length;o<a;o++)je(arguments[o],e);return t}function ir(t,e,o){return je(e,function(i,u){o&&typeof i=="function"?t[u]=_t(i,o):t[u]=i}),t}function or(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var k={isArray:Pe,isArrayBuffer:Wt,isBuffer:Jt,isFormData:Xt,isArrayBufferView:Kt,isString:zt,isNumber:Gt,isObject:Rt,isPlainObject:te,isUndefined:Ce,isDate:Qt,isFile:Yt,isBlob:Zt,isFunction:Ot,isStream:er,isURLSearchParams:tr,isStandardBrowserEnv:nr,forEach:je,merge:Re,extend:ir,trim:rr,stripBOM:or},H=k;function et(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Pt=function(e,o,a){if(!o)return e;var i;if(a)i=a(o);else if(H.isURLSearchParams(o))i=o.toString();else{var u=[];H.forEach(o,function(b,d){b===null||typeof b>"u"||(H.isArray(b)?d=d+"[]":b=[b],H.forEach(b,function(O){H.isDate(O)?O=O.toISOString():H.isObject(O)&&(O=JSON.stringify(O)),u.push(et(d)+"="+et(O))}))}),i=u.join("&")}if(i){var f=e.indexOf("#");f!==-1&&(e=e.slice(0,f)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},ar=k;function ne(){this.handlers=[]}ne.prototype.use=function(e,o,a){return this.handlers.push({fulfilled:e,rejected:o,synchronous:a?a.synchronous:!1,runWhen:a?a.runWhen:null}),this.handlers.length-1};ne.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};ne.prototype.forEach=function(e){ar.forEach(this.handlers,function(a){a!==null&&e(a)})};var sr=ne,ur=k,cr=function(e,o){ur.forEach(e,function(i,u){u!==o&&u.toUpperCase()===o.toUpperCase()&&(e[o]=i,delete e[u])})},jt=function(e,o,a,i,u){return e.config=o,a&&(e.code=a),e.request=i,e.response=u,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e},ue,tt;function Tt(){if(tt)return ue;tt=1;var t=jt;return ue=function(o,a,i,u,f){var p=new Error(o);return t(p,a,i,u,f)},ue}var ce,rt;function lr(){if(rt)return ce;rt=1;var t=Tt();return ce=function(o,a,i){var u=i.config.validateStatus;!i.status||!u||u(i.status)?o(i):a(t("Request failed with status code "+i.status,i.config,null,i.request,i))},ce}var le,nt;function dr(){if(nt)return le;nt=1;var t=k;return le=t.isStandardBrowserEnv()?function(){return{write:function(a,i,u,f,p,b){var d=[];d.push(a+"="+encodeURIComponent(i)),t.isNumber(u)&&d.push("expires="+new Date(u).toGMTString()),t.isString(f)&&d.push("path="+f),t.isString(p)&&d.push("domain="+p),b===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(a){var i=document.cookie.match(new RegExp("(^|;\\s*)("+a+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(a){this.write(a,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),le}var de,it;function fr(){return it||(it=1,de=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}),de}var fe,ot;function hr(){return ot||(ot=1,fe=function(e,o){return o?e.replace(/\/+$/,"")+"/"+o.replace(/^\/+/,""):e}),fe}var he,at;function pr(){if(at)return he;at=1;var t=fr(),e=hr();return he=function(a,i){return a&&!t(i)?e(a,i):i},he}var pe,st;function mr(){if(st)return pe;st=1;var t=k,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return pe=function(a){var i={},u,f,p;return a&&t.forEach(a.split(`
`),function(d){if(p=d.indexOf(":"),u=t.trim(d.substr(0,p)).toLowerCase(),f=t.trim(d.substr(p+1)),u){if(i[u]&&e.indexOf(u)>=0)return;u==="set-cookie"?i[u]=(i[u]?i[u]:[]).concat([f]):i[u]=i[u]?i[u]+", "+f:f}}),i},pe}var me,ut;function vr(){if(ut)return me;ut=1;var t=k;return me=t.isStandardBrowserEnv()?function(){var o=/(msie|trident)/i.test(navigator.userAgent),a=document.createElement("a"),i;function u(f){var p=f;return o&&(a.setAttribute("href",p),p=a.href),a.setAttribute("href",p),{href:a.href,protocol:a.protocol?a.protocol.replace(/:$/,""):"",host:a.host,search:a.search?a.search.replace(/^\?/,""):"",hash:a.hash?a.hash.replace(/^#/,""):"",hostname:a.hostname,port:a.port,pathname:a.pathname.charAt(0)==="/"?a.pathname:"/"+a.pathname}}return i=u(window.location.href),function(p){var b=t.isString(p)?u(p):p;return b.protocol===i.protocol&&b.host===i.host}}():function(){return function(){return!0}}(),me}var ve,ct;function lt(){if(ct)return ve;ct=1;var t=k,e=lr(),o=dr(),a=Pt,i=pr(),u=mr(),f=vr(),p=Tt();return ve=function(d){return new Promise(function(O,g){var y=d.data,N=d.headers,A=d.responseType;t.isFormData(y)&&delete N["Content-Type"];var m=new XMLHttpRequest;if(d.auth){var B=d.auth.username||"",X=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"";N.Authorization="Basic "+btoa(B+":"+X)}var K=i(d.baseURL,d.url);m.open(d.method.toUpperCase(),a(K,d.params,d.paramsSerializer),!0),m.timeout=d.timeout;function z(){if(m){var l="getAllResponseHeaders"in m?u(m.getAllResponseHeaders()):null,s=!A||A==="text"||A==="json"?m.responseText:m.response,r={data:s,status:m.status,statusText:m.statusText,headers:l,config:d,request:m};e(O,g,r),m=null}}if("onloadend"in m?m.onloadend=z:m.onreadystatechange=function(){!m||m.readyState!==4||m.status===0&&!(m.responseURL&&m.responseURL.indexOf("file:")===0)||setTimeout(z)},m.onabort=function(){m&&(g(p("Request aborted",d,"ECONNABORTED",m)),m=null)},m.onerror=function(){g(p("Network Error",d,null,m)),m=null},m.ontimeout=function(){var s="timeout of "+d.timeout+"ms exceeded";d.timeoutErrorMessage&&(s=d.timeoutErrorMessage),g(p(s,d,d.transitional&&d.transitional.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",m)),m=null},t.isStandardBrowserEnv()){var G=(d.withCredentials||f(K))&&d.xsrfCookieName?o.read(d.xsrfCookieName):void 0;G&&(N[d.xsrfHeaderName]=G)}"setRequestHeader"in m&&t.forEach(N,function(s,r){typeof y>"u"&&r.toLowerCase()==="content-type"?delete N[r]:m.setRequestHeader(r,s)}),t.isUndefined(d.withCredentials)||(m.withCredentials=!!d.withCredentials),A&&A!=="json"&&(m.responseType=d.responseType),typeof d.onDownloadProgress=="function"&&m.addEventListener("progress",d.onDownloadProgress),typeof d.onUploadProgress=="function"&&m.upload&&m.upload.addEventListener("progress",d.onUploadProgress),d.cancelToken&&d.cancelToken.promise.then(function(s){m&&(m.abort(),g(s),m=null)}),y||(y=null),m.send(y)})},ve}var j=k,dt=cr,gr=jt,yr={"Content-Type":"application/x-www-form-urlencoded"};function ft(t,e){!j.isUndefined(t)&&j.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function wr(){var t;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(t=lt()),t}function br(t,e,o){if(j.isString(t))try{return(e||JSON.parse)(t),j.trim(t)}catch(a){if(a.name!=="SyntaxError")throw a}return(0,JSON.stringify)(t)}var ie={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:wr(),transformRequest:[function(e,o){return dt(o,"Accept"),dt(o,"Content-Type"),j.isFormData(e)||j.isArrayBuffer(e)||j.isBuffer(e)||j.isStream(e)||j.isFile(e)||j.isBlob(e)?e:j.isArrayBufferView(e)?e.buffer:j.isURLSearchParams(e)?(ft(o,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):j.isObject(e)||o&&o["Content-Type"]==="application/json"?(ft(o,"application/json"),br(e)):e}],transformResponse:[function(e){var o=this.transitional,a=o&&o.silentJSONParsing,i=o&&o.forcedJSONParsing,u=!a&&this.responseType==="json";if(u||i&&j.isString(e)&&e.length)try{return JSON.parse(e)}catch(f){if(u)throw f.name==="SyntaxError"?gr(f,this,"E_JSON_PARSE"):f}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ie.headers={common:{Accept:"application/json, text/plain, */*"}};j.forEach(["delete","get","head"],function(e){ie.headers[e]={}});j.forEach(["post","put","patch"],function(e){ie.headers[e]=j.merge(yr)});var Te=ie,Sr=k,Er=Te,xr=function(e,o,a){var i=this||Er;return Sr.forEach(a,function(f){e=f.call(i,e,o)}),e},ge,ht;function At(){return ht||(ht=1,ge=function(e){return!!(e&&e.__CANCEL__)}),ge}var pt=k,ye=xr,Cr=At(),Rr=Te;function we(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var Or=function(e){we(e),e.headers=e.headers||{},e.data=ye.call(e,e.data,e.headers,e.transformRequest),e.headers=pt.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),pt.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var o=e.adapter||Rr.adapter;return o(e).then(function(i){return we(e),i.data=ye.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Cr(i)||(we(e),i&&i.response&&(i.response.data=ye.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},T=k,Lt=function(e,o){o=o||{};var a={},i=["url","method","data"],u=["headers","auth","proxy","params"],f=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],p=["validateStatus"];function b(g,y){return T.isPlainObject(g)&&T.isPlainObject(y)?T.merge(g,y):T.isPlainObject(y)?T.merge({},y):T.isArray(y)?y.slice():y}function d(g){T.isUndefined(o[g])?T.isUndefined(e[g])||(a[g]=b(void 0,e[g])):a[g]=b(e[g],o[g])}T.forEach(i,function(y){T.isUndefined(o[y])||(a[y]=b(void 0,o[y]))}),T.forEach(u,d),T.forEach(f,function(y){T.isUndefined(o[y])?T.isUndefined(e[y])||(a[y]=b(void 0,e[y])):a[y]=b(void 0,o[y])}),T.forEach(p,function(y){y in o?a[y]=b(e[y],o[y]):y in e&&(a[y]=b(void 0,e[y]))});var q=i.concat(u).concat(f).concat(p),O=Object.keys(e).concat(Object.keys(o)).filter(function(y){return q.indexOf(y)===-1});return T.forEach(O,d),a};const Pr="axios",jr="0.21.4",Tr="Promise based HTTP client for the browser and node.js",Ar="index.js",Lr={test:"grunt test",start:"node ./sandbox/server.js",build:"NODE_ENV=production grunt build",preversion:"npm test",version:"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json",postversion:"git push && git push --tags",examples:"node ./examples/server.js",coveralls:"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js",fix:"eslint --fix lib/**/*.js"},kr={type:"git",url:"https://github.com/axios/axios.git"},Nr=["xhr","http","ajax","promise","node"],Ir="Matt Zabriskie",qr="MIT",Br={url:"https://github.com/axios/axios/issues"},Ur="https://axios-http.com",Fr={coveralls:"^3.0.0","es6-promise":"^4.2.4",grunt:"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1",karma:"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2",minimist:"^1.2.0",mocha:"^8.2.1",sinon:"^4.5.0","terser-webpack-plugin":"^4.2.3",typescript:"^4.0.5","url-search-params":"^0.10.0",webpack:"^4.44.2","webpack-dev-server":"^3.11.0"},Dr={"./lib/adapters/http.js":"./lib/adapters/xhr.js"},Mr="dist/axios.min.js",Vr="dist/axios.min.js",Hr="./index.d.ts",$r={"follow-redirects":"^1.14.0"},_r=[{path:"./dist/axios.min.js",threshold:"5kB"}],Jr={name:Pr,version:jr,description:Tr,main:Ar,scripts:Lr,repository:kr,keywords:Nr,author:Ir,license:qr,bugs:Br,homepage:Ur,devDependencies:Fr,browser:Dr,jsdelivr:Mr,unpkg:Vr,typings:Hr,dependencies:$r,bundlesize:_r};var kt=Jr,Ae={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){Ae[t]=function(a){return typeof a===t||"a"+(e<1?"n ":" ")+t}});var mt={},Wr=kt.version.split(".");function Nt(t,e){for(var o=e?e.split("."):Wr,a=t.split("."),i=0;i<3;i++){if(o[i]>a[i])return!0;if(o[i]<a[i])return!1}return!1}Ae.transitional=function(e,o,a){var i=o&&Nt(o);function u(f,p){return"[Axios v"+kt.version+"] Transitional option '"+f+"'"+p+(a?". "+a:"")}return function(f,p,b){if(e===!1)throw new Error(u(p," has been removed in "+o));return i&&!mt[p]&&(mt[p]=!0,console.warn(u(p," has been deprecated since v"+o+" and will be removed in the near future"))),e?e(f,p,b):!0}};function Xr(t,e,o){if(typeof t!="object")throw new TypeError("options must be an object");for(var a=Object.keys(t),i=a.length;i-- >0;){var u=a[i],f=e[u];if(f){var p=t[u],b=p===void 0||f(p,u,t);if(b!==!0)throw new TypeError("option "+u+" must be "+b);continue}if(o!==!0)throw Error("Unknown option "+u)}}var Kr={isOlderVersion:Nt,assertOptions:Xr,validators:Ae},It=k,zr=Pt,vt=sr,gt=Or,oe=Lt,qt=Kr,$=qt.validators;function W(t){this.defaults=t,this.interceptors={request:new vt,response:new vt}}W.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=oe(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var o=e.transitional;o!==void 0&&qt.assertOptions(o,{silentJSONParsing:$.transitional($.boolean,"1.0.0"),forcedJSONParsing:$.transitional($.boolean,"1.0.0"),clarifyTimeoutError:$.transitional($.boolean,"1.0.0")},!1);var a=[],i=!0;this.interceptors.request.forEach(function(g){typeof g.runWhen=="function"&&g.runWhen(e)===!1||(i=i&&g.synchronous,a.unshift(g.fulfilled,g.rejected))});var u=[];this.interceptors.response.forEach(function(g){u.push(g.fulfilled,g.rejected)});var f;if(!i){var p=[gt,void 0];for(Array.prototype.unshift.apply(p,a),p=p.concat(u),f=Promise.resolve(e);p.length;)f=f.then(p.shift(),p.shift());return f}for(var b=e;a.length;){var d=a.shift(),q=a.shift();try{b=d(b)}catch(O){q(O);break}}try{f=gt(b)}catch(O){return Promise.reject(O)}for(;u.length;)f=f.then(u.shift(),u.shift());return f};W.prototype.getUri=function(e){return e=oe(this.defaults,e),zr(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};It.forEach(["delete","get","head","options"],function(e){W.prototype[e]=function(o,a){return this.request(oe(a||{},{method:e,url:o,data:(a||{}).data}))}});It.forEach(["post","put","patch"],function(e){W.prototype[e]=function(o,a,i){return this.request(oe(i||{},{method:e,url:o,data:a}))}});var Gr=W,be,yt;function Bt(){if(yt)return be;yt=1;function t(e){this.message=e}return t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,be=t,be}var Se,wt;function Qr(){if(wt)return Se;wt=1;var t=Bt();function e(o){if(typeof o!="function")throw new TypeError("executor must be a function.");var a;this.promise=new Promise(function(f){a=f});var i=this;o(function(f){i.reason||(i.reason=new t(f),a(i.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.source=function(){var a,i=new e(function(f){a=f});return{token:i,cancel:a}},Se=e,Se}var Ee,bt;function Yr(){return bt||(bt=1,Ee=function(e){return function(a){return e.apply(null,a)}}),Ee}var xe,St;function Zr(){return St||(St=1,xe=function(e){return typeof e=="object"&&e.isAxiosError===!0}),xe}var Et=k,en=Ct,re=Gr,tn=Lt,rn=Te;function Ut(t){var e=new re(t),o=en(re.prototype.request,e);return Et.extend(o,re.prototype,e),Et.extend(o,e),o}var I=Ut(rn);I.Axios=re;I.create=function(e){return Ut(tn(I.defaults,e))};I.Cancel=Bt();I.CancelToken=Qr();I.isCancel=At();I.all=function(e){return Promise.all(e)};I.spread=Yr();I.isAxiosError=Zr();Oe.exports=I;Oe.exports.default=I;var nn=Oe.exports,on=nn;(function(t){function e(l){return l&&typeof l=="object"&&"default"in l?l.default:l}var o=e(on),a=Ht,i=e(Vt);function u(){return(u=Object.assign?Object.assign.bind():function(l){for(var s=1;s<arguments.length;s++){var r=arguments[s];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(l[n]=r[n])}return l}).apply(this,arguments)}var f,p={modal:null,listener:null,show:function(l){var s=this;typeof l=="object"&&(l="All Inertia requests must receive a valid Inertia response, however a plain JSON response was received.<hr>"+JSON.stringify(l));var r=document.createElement("html");r.innerHTML=l,r.querySelectorAll("a").forEach(function(c){return c.setAttribute("target","_top")}),this.modal=document.createElement("div"),this.modal.style.position="fixed",this.modal.style.width="100vw",this.modal.style.height="100vh",this.modal.style.padding="50px",this.modal.style.boxSizing="border-box",this.modal.style.backgroundColor="rgba(0, 0, 0, .6)",this.modal.style.zIndex=2e5,this.modal.addEventListener("click",function(){return s.hide()});var n=document.createElement("iframe");if(n.style.backgroundColor="white",n.style.borderRadius="5px",n.style.width="100%",n.style.height="100%",this.modal.appendChild(n),document.body.prepend(this.modal),document.body.style.overflow="hidden",!n.contentWindow)throw new Error("iframe not yet ready.");n.contentWindow.document.open(),n.contentWindow.document.write(r.outerHTML),n.contentWindow.document.close(),this.listener=this.hideOnEscape.bind(this),document.addEventListener("keydown",this.listener)},hide:function(){this.modal.outerHTML="",this.modal=null,document.body.style.overflow="visible",document.removeEventListener("keydown",this.listener)},hideOnEscape:function(l){l.keyCode===27&&this.hide()}};function b(l,s){var r;return function(){var n=arguments,c=this;clearTimeout(r),r=setTimeout(function(){return l.apply(c,[].slice.call(n))},s)}}function d(l,s,r){for(var n in s===void 0&&(s=new FormData),r===void 0&&(r=null),l=l||{})Object.prototype.hasOwnProperty.call(l,n)&&O(s,q(r,n),l[n]);return s}function q(l,s){return l?l+"["+s+"]":s}function O(l,s,r){return Array.isArray(r)?Array.from(r.keys()).forEach(function(n){return O(l,q(s,n.toString()),r[n])}):r instanceof Date?l.append(s,r.toISOString()):r instanceof File?l.append(s,r,r.name):r instanceof Blob?l.append(s,r):typeof r=="boolean"?l.append(s,r?"1":"0"):typeof r=="string"?l.append(s,r):typeof r=="number"?l.append(s,""+r):r==null?l.append(s,""):void d(r,l,s)}function g(l){return new URL(l.toString(),window.location.toString())}function y(l,s,r,n){n===void 0&&(n="brackets");var c=/^https?:\/\//.test(s.toString()),h=c||s.toString().startsWith("/"),E=!h&&!s.toString().startsWith("#")&&!s.toString().startsWith("?"),C=s.toString().includes("?")||l===t.Method.GET&&Object.keys(r).length,S=s.toString().includes("#"),v=new URL(s.toString(),"http://localhost");return l===t.Method.GET&&Object.keys(r).length&&(v.search=a.stringify(i(a.parse(v.search,{ignoreQueryPrefix:!0}),r),{encodeValuesOnly:!0,arrayFormat:n}),r={}),[[c?v.protocol+"//"+v.host:"",h?v.pathname:"",E?v.pathname.substring(1):"",C?v.search:"",S?v.hash:""].join(""),r]}function N(l){return(l=new URL(l.href)).hash="",l}function A(l,s){return document.dispatchEvent(new CustomEvent("inertia:"+l,s))}(f=t.Method||(t.Method={})).GET="get",f.POST="post",f.PUT="put",f.PATCH="patch",f.DELETE="delete";var m=function(l){return A("finish",{detail:{visit:l}})},B=function(l){return A("navigate",{detail:{page:l}})},X=typeof window>"u",K=function(){function l(){this.visitId=null}var s=l.prototype;return s.init=function(r){var n=r.resolveComponent,c=r.swapComponent;this.page=r.initialPage,this.resolveComponent=n,this.swapComponent=c,this.isBackForwardVisit()?this.handleBackForwardVisit(this.page):this.isLocationVisit()?this.handleLocationVisit(this.page):this.handleInitialPageVisit(this.page),this.setupEventListeners()},s.handleInitialPageVisit=function(r){this.page.url+=window.location.hash,this.setPage(r,{preserveState:!0}).then(function(){return B(r)})},s.setupEventListeners=function(){window.addEventListener("popstate",this.handlePopstateEvent.bind(this)),document.addEventListener("scroll",b(this.handleScrollEvent.bind(this),100),!0)},s.scrollRegions=function(){return document.querySelectorAll("[scroll-region]")},s.handleScrollEvent=function(r){typeof r.target.hasAttribute=="function"&&r.target.hasAttribute("scroll-region")&&this.saveScrollPositions()},s.saveScrollPositions=function(){this.replaceState(u({},this.page,{scrollRegions:Array.from(this.scrollRegions()).map(function(r){return{top:r.scrollTop,left:r.scrollLeft}})}))},s.resetScrollPositions=function(){var r;window.scrollTo(0,0),this.scrollRegions().forEach(function(n){typeof n.scrollTo=="function"?n.scrollTo(0,0):(n.scrollTop=0,n.scrollLeft=0)}),this.saveScrollPositions(),window.location.hash&&((r=document.getElementById(window.location.hash.slice(1)))==null||r.scrollIntoView())},s.restoreScrollPositions=function(){var r=this;this.page.scrollRegions&&this.scrollRegions().forEach(function(n,c){var h=r.page.scrollRegions[c];h&&(typeof n.scrollTo=="function"?n.scrollTo(h.left,h.top):(n.scrollTop=h.top,n.scrollLeft=h.left))})},s.isBackForwardVisit=function(){return window.history.state&&window.performance&&window.performance.getEntriesByType("navigation").length>0&&window.performance.getEntriesByType("navigation")[0].type==="back_forward"},s.handleBackForwardVisit=function(r){var n=this;window.history.state.version=r.version,this.setPage(window.history.state,{preserveScroll:!0,preserveState:!0}).then(function(){n.restoreScrollPositions(),B(r)})},s.locationVisit=function(r,n){try{window.sessionStorage.setItem("inertiaLocationVisit",JSON.stringify({preserveScroll:n})),window.location.href=r.href,N(window.location).href===N(r).href&&window.location.reload()}catch{return!1}},s.isLocationVisit=function(){try{return window.sessionStorage.getItem("inertiaLocationVisit")!==null}catch{return!1}},s.handleLocationVisit=function(r){var n,c,h,E,C=this,S=JSON.parse(window.sessionStorage.getItem("inertiaLocationVisit")||"");window.sessionStorage.removeItem("inertiaLocationVisit"),r.url+=window.location.hash,r.rememberedState=(n=(c=window.history.state)==null?void 0:c.rememberedState)!=null?n:{},r.scrollRegions=(h=(E=window.history.state)==null?void 0:E.scrollRegions)!=null?h:[],this.setPage(r,{preserveScroll:S.preserveScroll,preserveState:!0}).then(function(){S.preserveScroll&&C.restoreScrollPositions(),B(r)})},s.isLocationVisitResponse=function(r){return r&&r.status===409&&r.headers["x-inertia-location"]},s.isInertiaResponse=function(r){return r==null?void 0:r.headers["x-inertia"]},s.createVisitId=function(){return this.visitId={},this.visitId},s.cancelVisit=function(r,n){var c=n.cancelled,h=c!==void 0&&c,E=n.interrupted,C=E!==void 0&&E;!r||r.completed||r.cancelled||r.interrupted||(r.cancelToken.cancel(),r.onCancel(),r.completed=!1,r.cancelled=h,r.interrupted=C,m(r),r.onFinish(r))},s.finishVisit=function(r){r.cancelled||r.interrupted||(r.completed=!0,r.cancelled=!1,r.interrupted=!1,m(r),r.onFinish(r))},s.resolvePreserveOption=function(r,n){return typeof r=="function"?r(n):r==="errors"?Object.keys(n.props.errors||{}).length>0:r},s.visit=function(r,n){var c=this,h=n===void 0?{}:n,E=h.method,C=E===void 0?t.Method.GET:E,S=h.data,v=S===void 0?{}:S,L=h.replace,U=L!==void 0&&L,_=h.preserveScroll,F=_!==void 0&&_,Q=h.preserveState,Y=Q!==void 0&&Q,Le=h.only,Z=Le===void 0?[]:Le,ke=h.headers,Ne=ke===void 0?{}:ke,Ie=h.errorBag,D=Ie===void 0?"":Ie,qe=h.forceFormData,Be=qe!==void 0&&qe,Ue=h.onCancelToken,Fe=Ue===void 0?function(){}:Ue,De=h.onBefore,Me=De===void 0?function(){}:De,Ve=h.onStart,He=Ve===void 0?function(){}:Ve,$e=h.onProgress,_e=$e===void 0?function(){}:$e,Je=h.onFinish,Ft=Je===void 0?function(){}:Je,We=h.onCancel,Dt=We===void 0?function(){}:We,Xe=h.onSuccess,Ke=Xe===void 0?function(){}:Xe,ze=h.onError,Ge=ze===void 0?function(){}:ze,Qe=h.queryStringArrayFormat,ae=Qe===void 0?"brackets":Qe,V=typeof r=="string"?g(r):r;if(!function w(x){return x instanceof File||x instanceof Blob||x instanceof FileList&&x.length>0||x instanceof FormData&&Array.from(x.values()).some(function(P){return w(P)})||typeof x=="object"&&x!==null&&Object.values(x).some(function(P){return w(P)})}(v)&&!Be||v instanceof FormData||(v=d(v)),!(v instanceof FormData)){var Ye=y(C,V,v,ae),Mt=Ye[1];V=g(Ye[0]),v=Mt}var J={url:V,method:C,data:v,replace:U,preserveScroll:F,preserveState:Y,only:Z,headers:Ne,errorBag:D,forceFormData:Be,queryStringArrayFormat:ae,cancelled:!1,completed:!1,interrupted:!1};if(Me(J)!==!1&&function(w){return A("before",{cancelable:!0,detail:{visit:w}})}(J)){this.activeVisit&&this.cancelVisit(this.activeVisit,{interrupted:!0}),this.saveScrollPositions();var Ze=this.createVisitId();this.activeVisit=u({},J,{onCancelToken:Fe,onBefore:Me,onStart:He,onProgress:_e,onFinish:Ft,onCancel:Dt,onSuccess:Ke,onError:Ge,queryStringArrayFormat:ae,cancelToken:o.CancelToken.source()}),Fe({cancel:function(){c.activeVisit&&c.cancelVisit(c.activeVisit,{cancelled:!0})}}),function(w){A("start",{detail:{visit:w}})}(J),He(J),o({method:C,url:N(V).href,data:C===t.Method.GET?{}:v,params:C===t.Method.GET?v:{},cancelToken:this.activeVisit.cancelToken.token,headers:u({},Ne,{Accept:"text/html, application/xhtml+xml","X-Requested-With":"XMLHttpRequest","X-Inertia":!0},Z.length?{"X-Inertia-Partial-Component":this.page.component,"X-Inertia-Partial-Data":Z.join(",")}:{},D&&D.length?{"X-Inertia-Error-Bag":D}:{},this.page.version?{"X-Inertia-Version":this.page.version}:{}),onUploadProgress:function(w){v instanceof FormData&&(w.percentage=Math.round(w.loaded/w.total*100),function(x){A("progress",{detail:{progress:x}})}(w),_e(w))}}).then(function(w){var x;if(!c.isInertiaResponse(w))return Promise.reject({response:w});var P=w.data;Z.length&&P.component===c.page.component&&(P.props=u({},c.page.props,P.props)),F=c.resolvePreserveOption(F,P),(Y=c.resolvePreserveOption(Y,P))&&(x=window.history.state)!=null&&x.rememberedState&&P.component===c.page.component&&(P.rememberedState=window.history.state.rememberedState);var se=V,ee=g(P.url);return se.hash&&!ee.hash&&N(se).href===ee.href&&(ee.hash=se.hash,P.url=ee.href),c.setPage(P,{visitId:Ze,replace:U,preserveScroll:F,preserveState:Y})}).then(function(){var w=c.page.props.errors||{};if(Object.keys(w).length>0){var x=D?w[D]?w[D]:{}:w;return function(P){A("error",{detail:{errors:P}})}(x),Ge(x)}return A("success",{detail:{page:c.page}}),Ke(c.page)}).catch(function(w){if(c.isInertiaResponse(w.response))return c.setPage(w.response.data,{visitId:Ze});if(c.isLocationVisitResponse(w.response)){var x=g(w.response.headers["x-inertia-location"]),P=V;P.hash&&!x.hash&&N(P).href===x.href&&(x.hash=P.hash),c.locationVisit(x,F===!0)}else{if(!w.response)return Promise.reject(w);A("invalid",{cancelable:!0,detail:{response:w.response}})&&p.show(w.response.data)}}).then(function(){c.activeVisit&&c.finishVisit(c.activeVisit)}).catch(function(w){if(!o.isCancel(w)){var x=A("exception",{cancelable:!0,detail:{exception:w}});if(c.activeVisit&&c.finishVisit(c.activeVisit),x)return Promise.reject(w)}})}},s.setPage=function(r,n){var c=this,h=n===void 0?{}:n,E=h.visitId,C=E===void 0?this.createVisitId():E,S=h.replace,v=S!==void 0&&S,L=h.preserveScroll,U=L!==void 0&&L,_=h.preserveState,F=_!==void 0&&_;return Promise.resolve(this.resolveComponent(r.component)).then(function(Q){C===c.visitId&&(r.scrollRegions=r.scrollRegions||[],r.rememberedState=r.rememberedState||{},(v=v||g(r.url).href===window.location.href)?c.replaceState(r):c.pushState(r),c.swapComponent({component:Q,page:r,preserveState:F}).then(function(){U||c.resetScrollPositions(),v||B(r)}))})},s.pushState=function(r){this.page=r,window.history.pushState(r,"",r.url)},s.replaceState=function(r){this.page=r,window.history.replaceState(r,"",r.url)},s.handlePopstateEvent=function(r){var n=this;if(r.state!==null){var c=r.state,h=this.createVisitId();Promise.resolve(this.resolveComponent(c.component)).then(function(C){h===n.visitId&&(n.page=c,n.swapComponent({component:C,page:c,preserveState:!1}).then(function(){n.restoreScrollPositions(),B(c)}))})}else{var E=g(this.page.url);E.hash=window.location.hash,this.replaceState(u({},this.page,{url:E.href})),this.resetScrollPositions()}},s.get=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({},c,{method:t.Method.GET,data:n}))},s.reload=function(r){return r===void 0&&(r={}),this.visit(window.location.href,u({},r,{preserveScroll:!0,preserveState:!0}))},s.replace=function(r,n){var c;return n===void 0&&(n={}),console.warn("Inertia.replace() has been deprecated and will be removed in a future release. Please use Inertia."+((c=n.method)!=null?c:"get")+"() instead."),this.visit(r,u({preserveState:!0},n,{replace:!0}))},s.post=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.POST,data:n}))},s.put=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.PUT,data:n}))},s.patch=function(r,n,c){return n===void 0&&(n={}),c===void 0&&(c={}),this.visit(r,u({preserveState:!0},c,{method:t.Method.PATCH,data:n}))},s.delete=function(r,n){return n===void 0&&(n={}),this.visit(r,u({preserveState:!0},n,{method:t.Method.DELETE}))},s.remember=function(r,n){var c,h;n===void 0&&(n="default"),X||this.replaceState(u({},this.page,{rememberedState:u({},(c=this.page)==null?void 0:c.rememberedState,(h={},h[n]=r,h))}))},s.restore=function(r){var n,c;if(r===void 0&&(r="default"),!X)return(n=window.history.state)==null||(c=n.rememberedState)==null?void 0:c[r]},s.on=function(r,n){var c=function(h){var E=n(h);h.cancelable&&!h.defaultPrevented&&E===!1&&h.preventDefault()};return document.addEventListener("inertia:"+r,c),function(){return document.removeEventListener("inertia:"+r,c)}},l}(),z={buildDOMElement:function(l){var s=document.createElement("template");s.innerHTML=l;var r=s.content.firstChild;if(!l.startsWith("<script "))return r;var n=document.createElement("script");return n.innerHTML=r.innerHTML,r.getAttributeNames().forEach(function(c){n.setAttribute(c,r.getAttribute(c)||"")}),n},isInertiaManagedElement:function(l){return l.nodeType===Node.ELEMENT_NODE&&l.getAttribute("inertia")!==null},findMatchingElementIndex:function(l,s){var r=l.getAttribute("inertia");return r!==null?s.findIndex(function(n){return n.getAttribute("inertia")===r}):-1},update:b(function(l){var s=this,r=l.map(function(n){return s.buildDOMElement(n)});Array.from(document.head.childNodes).filter(function(n){return s.isInertiaManagedElement(n)}).forEach(function(n){var c=s.findMatchingElementIndex(n,r);if(c!==-1){var h,E=r.splice(c,1)[0];E&&!n.isEqualNode(E)&&(n==null||(h=n.parentNode)==null||h.replaceChild(E,n))}else{var C;n==null||(C=n.parentNode)==null||C.removeChild(n)}}),r.forEach(function(n){return document.head.appendChild(n)})},1)},G=new K;t.Inertia=G,t.createHeadManager=function(l,s,r){var n={},c=0;function h(){var C=Object.values(n).reduce(function(S,v){return S.concat(v)},[]).reduce(function(S,v){if(v.indexOf("<")===-1)return S;if(v.indexOf("<title ")===0){var L=v.match(/(<title [^>]+>)(.*?)(<\/title>)/);return S.title=L?""+L[1]+s(L[2])+L[3]:v,S}var U=v.match(/ inertia="[^"]+"/);return U?S[U[0]]=v:S[Object.keys(S).length]=v,S},{});return Object.values(C)}function E(){l?r(h()):z.update(h())}return{createProvider:function(){var C=function(){var S=c+=1;return n[S]=[],S.toString()}();return{update:function(S){return function(v,L){L===void 0&&(L=[]),v!==null&&Object.keys(n).indexOf(v)>-1&&(n[v]=L),E()}(C,S)},disconnect:function(){return function(S){S!==null&&Object.keys(n).indexOf(S)!==-1&&(delete n[S],E())}(C)}}}}},t.hrefToUrl=g,t.mergeDataIntoQueryString=y,t.shouldIntercept=function(l){var s=l.currentTarget.tagName.toLowerCase()==="a";return!(l.target&&l!=null&&l.target.isContentEditable||l.defaultPrevented||s&&l.which>1||s&&l.altKey||s&&l.ctrlKey||s&&l.metaKey||s&&l.shiftKey)},t.urlWithoutHash=N})(xt);function sn(){const t=$t().props.auth.user;function e(){xt.Inertia.post("/logout")}return R.jsxs("header",{className:"h-25v bg-header flex flex-row justify-between items-center p-8",children:[!t&&R.jsxs(R.Fragment,{children:[R.jsx("img",{className:"max-h-full rounded-full border-2",src:"/images/bruce.jpg",alt:"Bruce",title:"Bruce"}),R.jsx("h1",{className:" text-6xl text-white",children:"Nuestro amigo Bruce"}),R.jsxs("div",{children:[R.jsx("a",{href:"login",className:" btn btn-primary m-2",children:"Acceder"}),R.jsx("a",{href:"register",className:" btn btn-primary",children:"Registrarme"})]})]}),t&&R.jsxs(R.Fragment,{children:[R.jsx("img",{className:"max-h-full rounded-full border-2",src:"/images/portada.png",alt:"Bruce",title:"Bruce"}),R.jsx("h1",{className:" text-6xl text-white",children:"Nuestro amigo Bruce"}),R.jsxs("div",{className:" h-full",children:[R.jsx("h2",{className:" text-white text-2xl mb-9",children:t.name}),R.jsx("button",{onClick:()=>e(),type:"submit",className:"btn glass logout",children:"Logout"})]})]})]})}function un({children:t}){return R.jsx(R.Fragment,{children:t})}function cn(){return R.jsx(R.Fragment,{children:R.jsx("footer",{class:"h-10v py-10 bg-footer",children:R.jsx("h6",{class:"text-center text-lg",children:"Copyright © 2024 Miguel Navarro Bellido"})})})}export{cn as F,sn as H,un as M};
