(()=>{"use strict";var e={607:function(e,t,n){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(n(555));console.log(o.default.Grab("t1"))},555:(e,t,n)=>{function l(e){if("object"==typeof e)for(const t in e)if("object"==typeof e[t])return!0;return!1}function o(e,t){if("object"==typeof t)for(const r in t)if(r in e)if(l(r))o(e[r],t[r]);else if("object"==typeof t[r])for(var n in t[r])e[r][n]=t[r][n];else e[r]=t[r]}n.r(t),n.d(t,{default:()=>u});const r=document;function s(e=null,t=null){const n=r.createElement(e||"div");return e&&Object.keys(t).length>0?(o(n,t),n):n}const i=document;function c(e,t={tag:"div"}){const n=e.length;let l=s(t.tag?t.tag:"div",{className:"collection-wrapper",...t});for(let t=0;t<n;t++)l.append(e.item(0));return l}function a(e){const t=e.length,n=[];for(let l=0;l<t;l++)n.push(e.item(l));return n}const u={Make:(e,t=null)=>s(e,t),Grab:(e,t=null)=>function(e,t=null){const n=function*(e){yield i.getElementById(e)?{el:i.getElementById(e),type:"id"}:null,yield i.getElementsByClassName(e).length>0?{el:i.getElementsByClassName(e),type:"class"}:null}(e);var l,o,r=!1;try{for(let e=0;e<2;e++){let e=n.next().value;if(e){r="class"===e.type&&e.el.length>1,l="id"===e.type?e.el:"class"===e.type&&1===e.el.length?e.el[0]:"class"===e.type&&t?c(e.el,t):a(e.el);break}}if(!r&&t){const e=s(t.tag,{...t});e.append(l),o=e}else o=l;if(l)return o;{const e=Error("No matching elements.");throw console.error(e.message),e}}catch(e){return s("div",{innerText:`${e.message}. Check spelling or identifiers`,style:{backgroundColor:"red",color:"whitesmoke",width:"100%"}})}}(e,t),PARENT:(e="")=>parent(e||null),SIBLINGS:()=>siblings(),STYLE:e=>style(e),CLASS:e=>className(e),TAG:e=>tag(e),APPEND:(e,t)=>append(e,t)}}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var r=t[l]={exports:{}};return e[l].call(r.exports,r,r.exports,n),r.exports}n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n(607)})();