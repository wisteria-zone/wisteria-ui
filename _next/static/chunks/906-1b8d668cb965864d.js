(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[906],{5872:function(e,t,r){"use strict";r.d(t,{S:function(){return l}});var n=r(4957);let l=e=>{var t;let{label:r,children:l,line:i="dashed",...a}=e;return(0,n.BX)("fieldset",{...a,class:"rounded-lg p-4 border my-4",style:{borderStyle:i,...null!==(t=a.style)&&void 0!==t?t:{}},children:[(0,n.tZ)("legend",{hidden:!r,class:"px-2 font-bold italic",children:r}),(0,n.tZ)("div",{class:"flex justify-center gap-6",style:{width:"100%"},children:l})]})}},2379:function(e,t,r){"use strict";r.d(t,{G:function(){return E}});var n=r(4957),l=r(7296),i=r(9612),a=r(4180),c=r.n(a);let o=["typedef","property","description","defaultValue"],u=e=>{let{children:t,className:r=""}=e,l=(0,i.Ye)(()=>{let e=r.split(" ").map(e=>e.split("-")[0]);return["py-2","pl-6","text-xs","leading-6","font-mono","font-semibold"].filter(t=>!e.includes(t.split("-")[0])).concat(r)},[r]);return(0,n.tZ)("td",{class:l.join(" "),dangerouslySetInnerHTML:{__html:t}})},s=e=>{let{typedef:t,property:r,description:l,defaultValue:a}=(0,i.Ye)(()=>Object.assign(Object.fromEntries(o.map(e=>[e,"-"])),Object.fromEntries(Object.entries(e).filter(e=>{let[t]=e;return o.includes(t)}).map(e=>{let[t,r]=e;return[t,r.trim()]}))),[e]);return(0,n.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,n.tZ)(u,{className:"text-violet-500 pl-0",children:r}),(0,n.tZ)(u,{className:"text-slate-500",children:l}),(0,n.tZ)(u,{className:"text-violet-500",children:t}),(0,n.tZ)(u,{className:"text-slate-500",children:a})]})},E=e=>{let{list:t}=e;return(0,n.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+c().container,children:(0,n.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,n.tZ)("thead",{children:(0,n.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,n.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,n.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,n.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:t.map((e,t)=>(0,l.az)(s,{...e,key:t}))})]})})}},7794:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(9612);function l(e){let t=(0,n.sO)(e);return t.current=e,t}},1719:function(e,t,r){"use strict";r.d(t,{Ec:function(){return c},XK:function(){return a},zj:function(){return i}});var n=r(362);let l=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),l=1;l<t;l++)r[l-1]=arguments[l];return r.map(t=>t?(0,n.HD)(t)?"".concat(e,"-").concat(t):(0,n.kJ)(t)?t.map(t=>!!t&&"".concat(e,"-").concat(t)):Object.entries(t).map(t=>{let[r,n]=t;return n?"".concat(e,"-").concat(r):""}):t).flat(1)},i=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(" ")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wisteria",r="".concat(t,"-").concat(e);return[r,function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i(...l(r,...t))}]},c=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];let l=t.map(e=>{if(!(0,n.HD)(e))return(0,n.Kn)(e)?Object.fromEntries(Object.entries(e).filter(e=>{let[,t]=e;return!!t})):Object.create(null);let t=Array.from(e.matchAll(/^[a-z-]*:\s*\w+;?/g)).map(e=>{let[t,r]=e.toString().replace(";","").split(":"),n=t.replace(/-(\w)/g,(e,t)=>t.toUpperCase());return[n,r]});return Object.fromEntries(t)});return Object.assign({},...l)}},2423:function(e,t,r){"use strict";r.d(t,{ZT:function(){return l},xj:function(){return i}});var n=r(362);let l=()=>{},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return(0,n.hj)(e)?"".concat(e).concat(t):e}},4476:function(e,t,r){"use strict";r.d(t,{l:function(){return l}});var n=r(362);let l=e=>t=>{for(let r of e)(0,n.rK)(r)?r(t):(0,n.Kn)(r)&&"current"in r&&(r.current=t)}},45:function(e,t,r){"use strict";r.d(t,{u:function(){return Z}}),r(7041);var n,l,i,a,c,o,u=r(4957),s=r(9612),E=r(362);let d=()=>{let e=(0,s.sO)(0),[t,r]=(0,s.eJ)([]),n=(0,s.I4)(t=>{let n=(0,E.z6)(t)?t.touches[0]:t,l=n.currentTarget.getBoundingClientRect(),i=n.clientX-l.left,a=n.clientY-l.top,c=Math.max(Math.abs(l.width-i),i),o=Math.max(Math.abs(l.height-a),a),u=Math.round(Math.sqrt(c**2+o**2)),s=i-u,d=a-u;r(t=>[...t,{key:e.current,size:2*u,offsetX:s,offsetY:d}]),e.current+=1},[]),l=(0,s.I4)(()=>{r(e=>e.slice(1))},[]);return{ripples:t,triggerRipple:n,removeRipple:l}};var p=r(7296);(n=a||(a={})).APPEAR="appear",n.APPEAR_ACTIVE="appearActive",n.APPEAR_DONE="appearDone",n.ENTER="enter",n.ENTER_ACTIVE="enterActive",n.ENTER_DONE="enterDone",n.EXIT="exit",n.EXIT_ACTIVE="exitActive",n.EXIT_DONE="exitDone",(l=c||(c={})).ENTER="onEnter",l.ENTERING="onEntering",l.ENTERED="onEntered",l.EXIT="onExit",l.EXITING="onExiting",l.EXITED="onExited";let f={[a.APPEAR]:[c.ENTER,a.APPEAR_ACTIVE],[a.APPEAR_ACTIVE]:[c.ENTERING,a.APPEAR_DONE,!0],[a.APPEAR_DONE]:[c.ENTERED],[a.ENTER]:[c.ENTER,a.ENTER_ACTIVE],[a.ENTER_ACTIVE]:[c.ENTERING,a.ENTER_DONE,!0],[a.ENTER_DONE]:[c.ENTERED],[a.EXIT]:[c.EXIT,a.EXIT_ACTIVE],[a.EXIT_ACTIVE]:[c.EXITING,a.EXIT_DONE,!0],[a.EXIT_DONE]:[c.EXITED]};var T=e=>{var t;let{children:r,in:n=!1,appear:l=!1,enter:i=!0,exit:c=!0,duration:o=500,alwaysMounted:u=!1,addEndListener:E}=e,d=(0,s.sO)(),T=(0,s.sO)(),m=!1,[h,v]=(0,s.eJ)(()=>(m=!0,n?l?a.APPEAR:a.APPEAR_DONE:a.EXIT_DONE));(0,s.d4)(()=>{var t;let{setTimeout:r,clearTimeout:n}=window,[l,i,a]=f[h];return null==(t=e[l])||t.call(e,d.current),i&&(a?E?E(d.current,()=>v(i)):T.current=r(v,o,i):v(i)),()=>{n(T.current)}},[h,o]),(0,s.bt)(()=>{m||v(n?i?a.ENTER:a.ENTER_DONE:c?a.EXIT:a.EXIT_DONE)},[n]);let N=(0,s.Ye)(()=>{let e={};return Object.values(a).forEach(t=>{e[t]=h===t}),e},[h]);if(!u&&h===a.EXIT_DONE)return null;let I=r(N,h);return(0,p.Tm)(I,{ref:(t=[d,I.ref],e=>{t.forEach(t=>{"function"==typeof t?t(e):null!=t&&(t.current=e)})})})};function m(){return(m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}let h=(e,t,r)=>{let{[t]:n=r}=e.props;return n};var v=e=>{let{children:t,appear:r=!1,enter:n=!0,exit:l=!0,duration:i=500}=e,a=Array.isArray(t)?t:[t],c=(0,s.sO)(!0),o=(0,s.sO)([]),u=[],E=[],d=(e,t)=>{if(!e)return;let a=(0,p.Tm)(e,m({enter:n,exit:l,duration:i},e.props,{in:!t,appear:c.current?h(e,"appear",r):h(e,"enter",n)}));u.push({visibleChild:a,removeTimeout:t}),E.push(a)},f=0;o.current.forEach(({visibleChild:e,removeTimeout:t})=>{let{key:r}=e,n=a.findIndex(e=>e.key===r);if(n<0)t?d(e,t):l&&!1!==e.props.exit&&d(e,setTimeout(()=>{let{current:t}=o,r=t.findIndex(({visibleChild:t})=>t.key===e.key);r>-1&&t.splice(r,1)},h(e,"duration",i)));else{t&&clearTimeout(t);for(let e=f;e<=n;e++)d(a[e],null)}f=Math.max(f,n+1)});for(let e=f;e<a.length;e++)d(a[e],null);return o.current=u,c.current=!1,E};a.APPEAR,a.APPEAR_ACTIVE,a.APPEAR_DONE,a.ENTER,a.ENTER_ACTIVE,a.ENTER_DONE,a.EXIT,a.EXIT_ACTIVE,a.EXIT_DONE;var N=r(1719);let[I,x]=(0,N.XK)("ripple"),y=e=>{let{size:t,offsetX:r,offsetY:n,...l}=e,[i,a]=(0,s.eJ)(!1);return(0,u.tZ)(T,{...l,onExit:()=>{a(!0)},children:()=>(0,u.tZ)("span",{className:x("effect"),style:{top:n,left:r,width:t,height:t},children:(0,u.tZ)("span",{className:x("effect-child",{"effect-child-exiting":i})})})})};var b=r(7794);function O(e,t){let r=(0,s.sO)(!0),n=(0,b.Z)(e);(0,s.d4)(()=>{if(!r.current)return n.current();r.current=!1},t)}let A=e=>{let t=(0,s.sO)(),[r,n]=(0,s.eJ)(e),l=(0,s.I4)((e,r)=>{t.current=r,n(e)},[r]);return O(()=>{t.current&&(t.current(),t.current=null)},[r]),[r,l]};(i=o||(o={})).EXITED="exited",i.EXITING="exiting",i.ENTERED="entered",i.ENTERING="entering";var g=r(4476);let R=e=>{var t;let r=(0,s.sO)(null===(t=e.nodeRef)||void 0===t?void 0:t.current),n=(0,s.sO)(),[l,i]=A(()=>e.in?e.appear?o.EXITED:o.ENTERED:o.EXITED),a=(0,s.Ye)(()=>{let t,r;if((0,E.Kn)(e.timeout)){var n;return Object.assign(e.timeout,{appear:null!==(n=e.timeout.appear)&&void 0!==n?n:e.timeout.enter})}return{appear:t=r=e.timeout,exit:t,enter:r}},[e.timeout]),c=t=>{var l;if(!t&&!e.enter)return i(o.ENTERED,()=>{var t;null===(t=e.onEntered)||void 0===t||t.call(e,r.current)});let c=!!(t||e.appear&&e.unmountOnExit),u=t?a.appear:a.enter;null===(l=e.onEnter)||void 0===l||l.call(e,r.current,c),i(o.ENTERING,()=>{var t;null===(t=e.onEntering)||void 0===t||t.call(e,r.current,c)}),n.current=setTimeout(()=>{i(o.ENTERED,()=>{var t;null===(t=e.onEntered)||void 0===t||t.call(e,r.current,c)})},u)},u=()=>{var t;if(!e.exit)return i(o.EXITED,()=>{var t;null===(t=e.onExited)||void 0===t||t.call(e,r.current)});null===(t=e.onExit)||void 0===t||t.call(e,r.current),i(o.EXITING,()=>{var t;null===(t=e.onExiting)||void 0===t||t.call(e,r.current)}),n.current=setTimeout(()=>{i(o.EXITED,()=>{var t;null===(t=e.onExited)||void 0===t||t.call(e,r.current)})},a.exit)};if((0,s.d4)(()=>(e.in&&e.appear&&c(!0),()=>{clearTimeout(n.current)}),[]),O(()=>(e.in?c():u(),()=>{clearTimeout(n.current)}),[e.in]),!e.in&&e.unmountOnExit&&l===o.EXITED)return null;let d=(0,E.rK)(e.children)?e.children(l):e.children;return(0,p.Tm)(d,{ref:(0,g.l)([d.ref,r])})};var D=r(2423);let X=e=>{let{children:t,timeout:r=250,direction:n="vertical",...l}=e,i=(0,s.sO)(null),a=(0,s.sO)(null),c="vertical"===n,E=c?"height":"width",d=()=>a.current?c?a.current.clientHeight:a.current.clientWidth:0,p=e=>{i.current&&(i.current.style[E]=(0,D.xj)(e))},f=e=>{a.current&&Object.assign(a.current.style,{position:e?"absolute":""})};return(0,u.tZ)(R,{...l,timeout:r,onEnter:(e,t)=>{var r;null===(r=l.onEnter)||void 0===r||r.call(l,e,t),p(0),c||f(!0)},onEntering:(e,t)=>{var r;null===(r=l.onEntering)||void 0===r||r.call(l,e,t),p(d()),c||f()},onEntered:(e,t)=>{var r;null===(r=l.onEntered)||void 0===r||r.call(l,e,t),p("auto")},onExit:e=>{var t;null===(t=l.onExit)||void 0===t||t.call(l,e),p(d())},onExiting:e=>{var t;null===(t=l.onExiting)||void 0===t||t.call(l,e),p(0)},children:e=>{let n=e===o.EXITED;return(0,u.tZ)("div",{ref:i,style:(0,N.Ec)({position:"relative",overflow:"hidden",transitionProperty:E,visibility:n?"hidden":"visible",transitionDuration:(0,D.xj)(r,"ms"),transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)"}),children:(0,u.tZ)("div",{ref:a,style:(0,N.Ec)({display:"flex"}),children:t})})}})},_=e=>{let[t,r]=(0,N.XK)(e);return n=>{let{children:l,timeout:i=200,...a}=n,c={["--".concat(e,"-duration")]:(0,D.xj)(i,"ms")};return(0,u.tZ)(R,{...a,timeout:i,children:e=>(0,p.l$)(l)?(0,p.Tm)(l,{...l.props,style:(0,N.Ec)(l.props.style,c),className:(0,N.zj)(t,r(e),l.props.className)}):(0,p.az)("span",{style:c,className:(0,N.zj)(t,r(e))},l)})}},P=_("zoom"),j=_("fade"),Z=Object.assign(R,{Fade:j,Zoom:P,Ripple:e=>{let{color:t,disabled:r}=e,{ripples:n,triggerRipple:l,removeRipple:i}=d();return(0,u.tZ)("span",{className:I,style:(0,N.Ec)({color:t,pointerEvents:r&&"none"}),onMouseUp:i,onMouseLeave:i,onMouseDown:l,children:(0,u.tZ)(v,{appear:!0,exit:!0,duration:500,children:n.map(e=>{let{key:t,...r}=e;return(0,u.tZ)(y,{...r},t)})})})},Collapse:X});Z.defaultProps={exit:!0,enter:!0,appear:!0},j.displayName="WisteriaUI.Fade",P.displayName="WisteriaUI.Zoom",X.displayName="WisteriaUI.Collapse",Z.displayName="WisteriaUI.Transition"},7041:function(){},4180:function(e){e.exports={container:"styles_container__unOV2"}}}]);