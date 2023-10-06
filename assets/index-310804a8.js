import{R as z,d as _,S as U,o as g,q as S,s as O,B as R,t as C,F as T,U as N,r as L,H as x,f as V,c as H,D as $,E as F,y as J,h as M,v as w,A,x as W,i as I}from"./index-950bfb26.js";import{_ as D}from"./plugin-vueexport-helper-c27b6911.js";var B={},Z={get exports(){return B},set exports(v){B=v}};(function(v,E){(function(a,n){v.exports=n()})(window,function(){return function(m){var a={};function n(o){if(a[o])return a[o].exports;var d=a[o]={i:o,l:!1,exports:{}};return m[o].call(d.exports,d,d.exports,n),d.l=!0,d.exports}return n.m=m,n.c=a,n.d=function(o,d,s){n.o(o,d)||Object.defineProperty(o,d,{enumerable:!0,get:s})},n.r=function(o){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},n.t=function(o,d){if(d&1&&(o=n(o)),d&8||d&4&&typeof o=="object"&&o&&o.__esModule)return o;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:o}),d&2&&typeof o!="string")for(var y in o)n.d(s,y,function(i){return o[i]}.bind(null,y));return s},n.n=function(o){var d=o&&o.__esModule?function(){return o.default}:function(){return o};return n.d(d,"a",d),d},n.o=function(o,d){return Object.prototype.hasOwnProperty.call(o,d)},n.p="",n(n.s=0)}({"./src/index.js":function(m,a,n){n.r(a),n("./src/sass/index.scss");var o=n("./src/js/init.js"),d=o.default.init;typeof window<"u"&&(window.printJS=d),a.default=d},"./src/js/browser.js":function(m,a,n){n.r(a);var o={isFirefox:function(){return typeof InstallTrigger<"u"},isIE:function(){return navigator.userAgent.indexOf("MSIE")!==-1||!!document.documentMode},isEdge:function(){return!o.isIE()&&!!window.StyleMedia},isChrome:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window;return!!s.chrome},isSafari:function(){return Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0||navigator.userAgent.toLowerCase().indexOf("safari")!==-1},isIOSChrome:function(){return navigator.userAgent.toLowerCase().indexOf("crios")!==-1}};a.default=o},"./src/js/functions.js":function(m,a,n){n.r(a),n.d(a,"addWrapper",function(){return y}),n.d(a,"capitalizePrint",function(){return i}),n.d(a,"collectStyles",function(){return l}),n.d(a,"addHeader",function(){return t}),n.d(a,"cleanUp",function(){return u}),n.d(a,"isRawHTML",function(){return f});var o=n("./src/js/modal.js"),d=n("./src/js/browser.js");function s(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(p){return typeof p}:s=function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},s(e)}function y(e,c){var p="font-family:"+c.font+" !important; font-size: "+c.font_size+" !important; width:100%;";return'<div style="'+p+'">'+e+"</div>"}function i(e){return e.charAt(0).toUpperCase()+e.slice(1)}function l(e,c){for(var p=document.defaultView||window,h="",b=p.getComputedStyle(e,""),j=0;j<b.length;j++)(c.targetStyles.indexOf("*")!==-1||c.targetStyle.indexOf(b[j])!==-1||r(c.targetStyles,b[j]))&&b.getPropertyValue(b[j])&&(h+=b[j]+":"+b.getPropertyValue(b[j])+";");return h+="max-width: "+c.maxWidth+"px !important; font-size: "+c.font_size+" !important;",h}function r(e,c){for(var p=0;p<e.length;p++)if(s(c)==="object"&&c.indexOf(e[p])!==-1)return!0;return!1}function t(e,c){var p=document.createElement("div");if(f(c.header))p.innerHTML=c.header;else{var h=document.createElement("h1"),b=document.createTextNode(c.header);h.appendChild(b),h.setAttribute("style",c.headerStyle),p.appendChild(h)}e.insertBefore(p,e.childNodes[0])}function u(e){e.showModal&&o.default.close(),e.onLoadingEnd&&e.onLoadingEnd(),(e.showModal||e.onLoadingStart)&&window.URL.revokeObjectURL(e.printable);var c="mouseover";(d.default.isChrome()||d.default.isFirefox())&&(c="focus");var p=function h(){window.removeEventListener(c,h),e.onPrintDialogClose();var b=document.getElementById(e.frameId);b&&b.remove()};window.addEventListener(c,p)}function f(e){var c=new RegExp("<([A-Za-z][A-Za-z0-9]*)\\b[^>]*>(.*?)</\\1>");return c.test(e)}},"./src/js/html.js":function(m,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function s(l){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(t){return typeof t}:s=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(l)}a.default={print:function(r,t){var u=i(r.printable)?r.printable:document.getElementById(r.printable);if(!u){window.console.error("Invalid HTML element id: "+r.printable);return}r.printableElement=y(u,r),r.header&&Object(o.addHeader)(r.printableElement,r),d.default.send(r,t)}};function y(l,r){for(var t=l.cloneNode(),u=Array.prototype.slice.call(l.childNodes),f=0;f<u.length;f++)if(r.ignoreElements.indexOf(u[f].id)===-1){var e=y(u[f],r);t.appendChild(e)}switch(r.scanStyles&&l.nodeType===1&&t.setAttribute("style",Object(o.collectStyles)(l,r)),l.tagName){case"SELECT":t.value=l.value;break;case"CANVAS":t.getContext("2d").drawImage(l,0,0);break}return t}function i(l){return s(l)==="object"&&l&&(l instanceof HTMLElement||l.nodeType===1)}},"./src/js/image.js":function(m,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js"),s=n("./src/js/browser.js");a.default={print:function(i,l){i.printable.constructor!==Array&&(i.printable=[i.printable]),i.printableElement=document.createElement("div"),i.printable.forEach(function(r){var t=document.createElement("img");if(t.setAttribute("style",i.imageStyle),t.src=r,s.default.isFirefox()){var u=t.src;t.src=u}var f=document.createElement("div");f.appendChild(t),i.printableElement.appendChild(f)}),i.header&&Object(o.addHeader)(i.printableElement,i),d.default.send(i,l)}}},"./src/js/init.js":function(m,a,n){n.r(a);var o=n("./src/js/browser.js"),d=n("./src/js/modal.js"),s=n("./src/js/pdf.js"),y=n("./src/js/html.js"),i=n("./src/js/raw-html.js"),l=n("./src/js/image.js"),r=n("./src/js/json.js");function t(f){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?t=function(c){return typeof c}:t=function(c){return c&&typeof Symbol=="function"&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c},t(f)}var u=["pdf","html","image","json","raw-html"];a.default={init:function(){var e={printable:null,fallbackPrintable:null,type:"pdf",header:null,headerStyle:"font-weight: 300;",maxWidth:800,properties:null,gridHeaderStyle:"font-weight: bold; padding: 5px; border: 1px solid #dddddd;",gridStyle:"border: 1px solid lightgray; margin-bottom: -1px;",showModal:!1,onError:function(K){throw K},onLoadingStart:null,onLoadingEnd:null,onPrintDialogClose:function(){},onIncompatibleBrowser:function(){},modalMessage:"Retrieving Document...",frameId:"printJS",printableElement:null,documentTitle:"Document",targetStyle:["clear","display","width","min-width","height","min-height","max-height"],targetStyles:["border","box","break","text-decoration"],ignoreElements:[],repeatTableHeader:!0,css:null,style:null,scanStyles:!0,base64:!1,onPdfOpen:null,font:"TimesNewRoman",font_size:"12pt",honorMarginPadding:!0,honorColor:!1,imageStyle:"max-width: 100%;"},c=arguments[0];if(c===void 0)throw new Error("printJS expects at least 1 attribute.");switch(t(c)){case"string":e.printable=encodeURI(c),e.fallbackPrintable=e.printable,e.type=arguments[1]||e.type;break;case"object":e.printable=c.printable,e.fallbackPrintable=typeof c.fallbackPrintable<"u"?c.fallbackPrintable:e.printable,e.fallbackPrintable=e.base64?"data:application/pdf;base64,".concat(e.fallbackPrintable):e.fallbackPrintable;for(var p in e)p==="printable"||p==="fallbackPrintable"||(e[p]=typeof c[p]<"u"?c[p]:e[p]);break;default:throw new Error('Unexpected argument type! Expected "string" or "object", got '+t(c))}if(!e.printable)throw new Error("Missing printable information.");if(!e.type||typeof e.type!="string"||u.indexOf(e.type.toLowerCase())===-1)throw new Error("Invalid print type. Available types are: pdf, html, image and json.");e.showModal&&d.default.show(e),e.onLoadingStart&&e.onLoadingStart();var h=document.getElementById(e.frameId);h&&h.parentNode.removeChild(h);var b=document.createElement("iframe");switch(o.default.isFirefox()?b.setAttribute("style","width: 1px; height: 100px; position: fixed; left: 0; top: 0; opacity: 0; border-width: 0; margin: 0; padding: 0"):b.setAttribute("style","visibility: hidden; height: 0; width: 0; position: absolute; border: 0"),b.setAttribute("id",e.frameId),e.type!=="pdf"&&(b.srcdoc="<html><head><title>"+e.documentTitle+"</title>",e.css&&(Array.isArray(e.css)||(e.css=[e.css]),e.css.forEach(function(P){b.srcdoc+='<link rel="stylesheet" href="'+P+'">'})),b.srcdoc+="</head><body></body></html>"),e.type){case"pdf":if(o.default.isIE())try{console.info("Print.js doesn't support PDF printing in Internet Explorer.");var j=window.open(e.fallbackPrintable,"_blank");j.focus(),e.onIncompatibleBrowser()}catch(P){e.onError(P)}finally{e.showModal&&d.default.close(),e.onLoadingEnd&&e.onLoadingEnd()}else s.default.print(e,b);break;case"image":l.default.print(e,b);break;case"html":y.default.print(e,b);break;case"raw-html":i.default.print(e,b);break;case"json":r.default.print(e,b);break}}}},"./src/js/json.js":function(m,a,n){n.r(a);var o=n("./src/js/functions.js"),d=n("./src/js/print.js");function s(i){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?s=function(r){return typeof r}:s=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},s(i)}a.default={print:function(l,r){if(s(l.printable)!=="object")throw new Error("Invalid javascript data object (JSON).");if(typeof l.repeatTableHeader!="boolean")throw new Error("Invalid value for repeatTableHeader attribute (JSON).");if(!l.properties||!Array.isArray(l.properties))throw new Error("Invalid properties array for your JSON data.");l.properties=l.properties.map(function(t){return{field:s(t)==="object"?t.field:t,displayName:s(t)==="object"?t.displayName:t,columnSize:s(t)==="object"&&t.columnSize?t.columnSize+";":100/l.properties.length+"%;"}}),l.printableElement=document.createElement("div"),l.header&&Object(o.addHeader)(l.printableElement,l),l.printableElement.innerHTML+=y(l),d.default.send(l,r)}};function y(i){var l=i.printable,r=i.properties,t='<table style="border-collapse: collapse; width: 100%;">';i.repeatTableHeader&&(t+="<thead>"),t+="<tr>";for(var u=0;u<r.length;u++)t+='<th style="width:'+r[u].columnSize+";"+i.gridHeaderStyle+'">'+Object(o.capitalizePrint)(r[u].displayName)+"</th>";t+="</tr>",i.repeatTableHeader&&(t+="</thead>"),t+="<tbody>";for(var f=0;f<l.length;f++){t+="<tr>";for(var e=0;e<r.length;e++){var c=l[f],p=r[e].field.split(".");if(p.length>1)for(var h=0;h<p.length;h++)c=c[p[h]];else c=c[r[e].field];t+='<td style="width:'+r[e].columnSize+i.gridStyle+'">'+c+"</td>"}t+="</tr>"}return t+="</tbody></table>",t}},"./src/js/modal.js":function(m,a,n){n.r(a);var o={show:function(s){var y="font-family:sans-serif; display:table; text-align:center; font-weight:300; font-size:30px; left:0; top:0;position:fixed; z-index: 9990;color: #0460B5; width: 100%; height: 100%; background-color:rgba(255,255,255,.9);transition: opacity .3s ease;",i=document.createElement("div");i.setAttribute("style",y),i.setAttribute("id","printJS-Modal");var l=document.createElement("div");l.setAttribute("style","display:table-cell; vertical-align:middle; padding-bottom:100px;");var r=document.createElement("div");r.setAttribute("class","printClose"),r.setAttribute("id","printClose"),l.appendChild(r);var t=document.createElement("span");t.setAttribute("class","printSpinner"),l.appendChild(t);var u=document.createTextNode(s.modalMessage);l.appendChild(u),i.appendChild(l),document.getElementsByTagName("body")[0].appendChild(i),document.getElementById("printClose").addEventListener("click",function(){o.close()})},close:function(){var s=document.getElementById("printJS-Modal");s&&s.parentNode.removeChild(s)}};a.default=o},"./src/js/pdf.js":function(m,a,n){n.r(a);var o=n("./src/js/print.js"),d=n("./src/js/functions.js");a.default={print:function(i,l){if(i.base64){var r=Uint8Array.from(atob(i.printable),function(u){return u.charCodeAt(0)});s(i,l,r);return}i.printable=/^(blob|http|\/\/)/i.test(i.printable)?i.printable:window.location.origin+(i.printable.charAt(0)!=="/"?"/"+i.printable:i.printable);var t=new window.XMLHttpRequest;t.responseType="arraybuffer",t.addEventListener("error",function(){Object(d.cleanUp)(i),i.onError(t.statusText,t)}),t.addEventListener("load",function(){if([200,201].indexOf(t.status)===-1){Object(d.cleanUp)(i),i.onError(t.statusText,t);return}s(i,l,t.response)}),t.open("GET",i.printable,!0),t.send()}};function s(y,i,l){var r=new window.Blob([l],{type:"application/pdf"});r=window.URL.createObjectURL(r),i.setAttribute("src",r),o.default.send(y,i)}},"./src/js/print.js":function(m,a,n){n.r(a);var o=n("./src/js/browser.js"),d=n("./src/js/functions.js"),s={send:function(t,u){document.getElementsByTagName("body")[0].appendChild(u);var f=document.getElementById(t.frameId);f.onload=function(){if(t.type==="pdf"){o.default.isFirefox()?setTimeout(function(){return y(f,t)},1e3):y(f,t);return}var e=f.contentWindow||f.contentDocument;if(e.document&&(e=e.document),e.body.appendChild(t.printableElement),t.type!=="pdf"&&t.style){var c=document.createElement("style");c.innerHTML=t.style,e.head.appendChild(c)}var p=e.getElementsByTagName("img");p.length>0?i(Array.from(p)).then(function(){return y(f,t)}):y(f,t)}}};function y(r,t){try{if(r.focus(),o.default.isEdge()||o.default.isIE())try{r.contentWindow.document.execCommand("print",!1,null)}catch{r.contentWindow.print()}else r.contentWindow.print()}catch(u){t.onError(u)}finally{o.default.isFirefox()&&(r.style.visibility="hidden",r.style.left="-1px"),Object(d.cleanUp)(t)}}function i(r){var t=r.map(function(u){if(u.src&&u.src!==window.location.href)return l(u)});return Promise.all(t)}function l(r){return new Promise(function(t){var u=function f(){!r||typeof r.naturalWidth>"u"||r.naturalWidth===0||!r.complete?setTimeout(f,500):t()};u()})}a.default=s},"./src/js/raw-html.js":function(m,a,n){n.r(a);var o=n("./src/js/print.js");a.default={print:function(s,y){s.printableElement=document.createElement("div"),s.printableElement.setAttribute("style","width:100%"),s.printableElement.innerHTML=s.printable,o.default.send(s,y)}}},"./src/sass/index.scss":function(m,a,n){},0:function(m,a,n){m.exports=n("./src/index.js")}}).default})})(Z);const G=z(B),X=O("div",null,"basedata-index1-print",-1),Q=_({__name:"baseTemplate1",props:{printData:{type:Object,default:()=>({})}},setup(v){const E=v,{printData:m}=U(E);return(a,n)=>(g(),S(T,null,[X,O("div",null,R(C(m).name),1)],64))}}),Y=O("div",null,"basedata-index2-print",-1),k=_({__name:"baseTemplate2",props:{printData:{type:Object,default:()=>({})}},setup(v){const E=v,{printData:m}=U(E);return(a,n)=>(g(),S(T,null,[Y,O("div",null,R(C(m).name),1)],64))}}),q={};function ee(v,E){return g(),S("div",null,"wechat-index1-print")}const te=D(q,[["render",ee]]),ne={};function re(v,E){return g(),S("div",null,"wechat-index2-print")}const oe=D(ne,[["render",re]]),ie={class:"print-container"},le=_({__name:"index",props:{printData:{type:Object,default:()=>({})}},setup(v,{expose:E}){const m=v,a=N(),{printData:n}=U(m),o=L(""),d=x(a.templateSelected),s=V(()=>d[o.value]),y={baseTemplate1:Q,baseTemplate2:k,wechatTemplate1:te,wechatTemplate2:oe},i=L(null);return E({onPrint:async r=>{if(o.value=r,console.log(o.value,"templateName.value"),!o.value){console.log("未选择模板");return}await J();const t=i.value;G({printable:t,type:"html",targetStyles:["*"]})}}),(r,t)=>(g(),S("div",ie,[O("div",{id:"print-content",ref_key:"printContent",ref:i},[o.value?(g(),H($(y[C(s)]),{key:0,"print-data":C(n)},null,8,["print-data"])):F("",!0)],512)]))}});const ae=D(le,[["__scopeId","data-v-a4234611"]]),se={class:"template-content"},de={class:"label"},ce=_({__name:"index",setup(v){const E=N(),m=x(E.templateSelected),a=x(E.printTemplate);(()=>{Object.keys(a).forEach(i=>{a[i].temp=m[i]||a[i].options[0].value})})();const o=L(),d=x({name:"base"}),s=i=>{o.value.onPrint(i)},y=()=>{Object.keys(a).forEach(i=>{m[i]=a[i].temp}),localStorage.setItem("templateSelected",JSON.stringify(m))};return(i,l)=>{const r=I("el-button"),t=I("el-option"),u=I("el-select");return g(),S("div",null,[M(r,{onClick:l[0]||(l[0]=f=>s("baseTemplate"))},{default:w(()=>[A("打印基础数据")]),_:1}),M(r,{onClick:l[1]||(l[1]=f=>s("wechatTemplate"))},{default:w(()=>[A("打印微信数据")]),_:1}),O("div",se,[(g(!0),S(T,null,W(Object.values(a),f=>(g(),S("div",{key:f.label,class:"template-item"},[O("p",de,R(f.label),1),M(u,{modelValue:f.temp,"onUpdate:modelValue":e=>f.temp=e,placeholder:"Select",size:"large"},{default:w(()=>[(g(!0),S(T,null,W(f.options,e=>(g(),H(t,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue"])]))),128))]),M(r,{onClick:y},{default:w(()=>[A("保存")]),_:1}),M(ae,{ref_key:"printRef",ref:o,"print-data":d},null,8,["print-data"])])}}});const pe=D(ce,[["__scopeId","data-v-48e7309a"]]);export{pe as default};
