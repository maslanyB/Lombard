import{n as d,s as A}from"./scheduler.cc9b4bb6.js";const u=[];function p(e,t=d){let n;const o=new Set;function l(s){if(A(e,s)&&(e=s,n)){const i=!u.length;for(const r of o)r[1](),u.push(r,e);if(i){for(let r=0;r<u.length;r+=2)u[r][0](u[r+1]);u.length=0}}}function f(s){l(s(e))}function a(s,i=d){const r=[s,i];return o.add(r),o.size===1&&(n=t(l,f)||d),s(e),()=>{o.delete(r),o.size===0&&n&&(n(),n=null)}}return{set:l,update:f,subscribe:a}}var v;const R=((v=globalThis.__sveltekit_u9hbm9)==null?void 0:v.base)??"";var S;(S=globalThis.__sveltekit_u9hbm9)==null||S.assets;const T="sveltekit:snapshot",U="sveltekit:scroll",N="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1},w=location.origin;function L(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function P(){return{x:pageXOffset,y:pageYOffset}}const b=new WeakSet,g={"preload-code":["","off","tap","hover","viewport","eager"],"preload-data":["","off","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function c(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return y(e,t,n),n}function y(e,t,n){n!==null&&!b.has(e)&&!g[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${g[t].map(o=>JSON.stringify(o)).join(", ")}`,e),b.add(e))}const h={..._,"":_.hover};function E(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function V(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=E(e)}}function Y(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,l=!n||!!o||x(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),f=(n==null?void 0:n.origin)===w&&e.hasAttribute("download");return{url:n,external:l,target:o,download:f}}function m(e){let t=null,n=null,o=null,l=null,f=null,a=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=c(s,"preload-code")),l===null&&(l=c(s,"preload-data")),t===null&&(t=c(s,"keepfocus")),n===null&&(n=c(s,"noscroll")),f===null&&(f=c(s,"reload")),a===null&&(a=c(s,"replacestate")),s=E(s);function i(r){switch(r){case"":case"true":return!0;case"off":case"false":return!1;default:return null}}return{preload_code:h[o??"off"],preload_data:h[l??"off"],keep_focus:i(t),noscroll:i(n),reload:i(f),replace_state:i(a)}}function k(e){const t=p(e);let n=!0;function o(){n=!0,t.update(a=>a)}function l(a){n=!1,t.set(a)}function f(a){let s;return t.subscribe(i=>{(s===void 0||n&&i!==s)&&a(s=i)})}return{notify:o,set:l,subscribe:f}}function I(){const{set:e,subscribe:t}=p(!1);return{subscribe:t,check:async()=>!1}}function x(e,t){return e.origin!==w||!e.pathname.startsWith(t)}function q(e){e.client}const K={url:k({}),page:k({}),navigating:p(null),updated:I()};export{N as I,_ as P,U as S,T as a,Y as b,m as c,K as d,R as e,V as f,L as g,q as h,x as i,w as o,P as s};
