(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8],{2934:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/displays/Avatar",function(){return r(5871)}])},5872:function(t,e,r){"use strict";r.d(e,{S:function(){return l}});var n=r(4957);let l=t=>{var e;let{label:r,children:l,line:a="dashed",...i}=t;return(0,n.BX)("fieldset",{...i,class:"rounded-lg p-4 border my-4",style:{borderStyle:a,...null!==(e=i.style)&&void 0!==e?e:{}},children:[(0,n.tZ)("legend",{hidden:!r,class:"px-2 font-bold italic",children:r}),(0,n.tZ)("div",{class:"flex justify-center gap-6",style:{width:"100%"},children:l})]})}},2379:function(t,e,r){"use strict";r.d(e,{G:function(){return h}});var n=r(4957),l=r(7296),a=r(9612),i=r(4180),o=r.n(i);let s=["typedef","property","description","defaultValue"],c=t=>{let{children:e,className:r=""}=t,l=(0,a.Ye)(()=>{let t=r.split(" ").map(t=>t.split("-")[0]);return["py-2","pl-6","text-xs","leading-6","font-mono","font-semibold"].filter(e=>!t.includes(e.split("-")[0])).concat(r)},[r]);return(0,n.tZ)("td",{class:l.join(" "),dangerouslySetInnerHTML:{__html:e}})},d=t=>{let{typedef:e,property:r,description:l,defaultValue:i}=(0,a.Ye)(()=>Object.assign(Object.fromEntries(s.map(t=>[t,"-"])),Object.fromEntries(Object.entries(t).filter(t=>{let[e]=t;return s.includes(e)}).map(t=>{let[e,r]=t;return[e,r.trim()]}))),[t]);return(0,n.BX)("tr",{className:"border-b border-gray-100 dark:border-neutral-700/50",children:[(0,n.tZ)(c,{className:"text-violet-500 pl-0",children:r}),(0,n.tZ)(c,{className:"text-slate-500",children:l}),(0,n.tZ)(c,{className:"text-violet-500",children:e}),(0,n.tZ)(c,{className:"text-slate-500",children:i})]})},h=t=>{let{list:e}=t;return(0,n.tZ)("div",{className:"-mx-6 mb-4 mt-6 overflow-x-auto overscroll-x-contain px-6 pb-4 "+o().container,children:(0,n.BX)("table",{className:"w-full border-collapse text-sm",children:[(0,n.tZ)("thead",{children:(0,n.BX)("tr",{className:"border-b py-4 text-left dark:border-neutral-700",children:[(0,n.tZ)("th",{className:"py-2 font-semibold",children:"属性"}),(0,n.tZ)("th",{className:"px-6 py-2 font-semibold",children:"说明"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"类型"}),(0,n.tZ)("th",{className:"py-2 pl-6 font-semibold",children:"默认值"})]})}),(0,n.tZ)("tbody",{className:"align-baseline text-gray-900 dark:text-gray-100",children:e.map((t,e)=>(0,l.az)(d,{...t,key:e}))})]})})}},981:function(t,e,r){"use strict";r.d(e,{Ec:function(){return o},XK:function(){return i},zj:function(){return a}});var n=r(4512);let l=function(t){for(var e=arguments.length,r=Array(e>1?e-1:0),l=1;l<e;l++)r[l-1]=arguments[l];return r.map(e=>e?(0,n.HD)(e)?"".concat(t,"-").concat(e):(0,n.kJ)(e)?e.map(e=>!!e&&"".concat(t,"-").concat(e)):Object.entries(e).map(e=>{let[r,n]=e;return n?"".concat(t,"-").concat(r):""}):e).flat(1)},a=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.filter(Boolean).join(" ")},i=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"wisteria",r="".concat(e,"-").concat(t);return[r,function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return a(...l(r,...e))}]},o=function(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];let l=e.map(t=>{if(!(0,n.HD)(t))return(0,n.Kn)(t)?Object.fromEntries(Object.entries(t).filter(t=>{let[,e]=t;return!!e})):Object.create(null);let e=Array.from(t.matchAll(/^[a-z-]*:\s*\w+;?/g)).map(t=>{let[e,r]=t.toString().replace(";","").split(":"),n=e.replace(/-(\w)/g,(t,e)=>e.toUpperCase());return[n,r]});return Object.fromEntries(e)});return Object.assign({},...l)}},7122:function(t,e,r){"use strict";r.d(e,{ZT:function(){return l},xj:function(){return a}});var n=r(4512);let l=()=>{},a=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return(0,n.hj)(t)?"".concat(t).concat(e):t}},5871:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return z}});var n,l,a=r(7434),i=r(8065),o=r(2435);r(4267),r(1090);var s=r(4957),c=r(9612);let d=t=>{let{src:e,srcSet:r,crossOrigin:n,referrerpolicy:l}=t,a=!!e||!!r,i=(0,c.sO)(!1),[o,s]=(0,c.eJ)();return(0,c.d4)(()=>{if(!a)return;i.current=!0;let t=new Image;return Object.assign(t,{src:e,srcSet:r,crossOrigin:n,referrerpolicy:l}),t.onload=()=>i.current&&s("loaded"),t.onerror=()=>i.current&&s("error"),()=>{i.current=!1,s(void 0)}},[e,r,n,l,a]),[a,o]};(n=l||(l={})).Small="small",n.Normal="normal",n.Large="large";var h=r(7296);let p=(0,h.kr)(null),v=()=>(0,c.qp)(p);var u=r(981),k=r(4512),y=r(7122);let[Z,m]=(0,u.XK)("avatar"),f={[l.Small]:24,[l.Normal]:40,[l.Large]:56},x=t=>{var e;let{style:r,color:n,children:l,size:a="normal",variant:i="circle",...o}=t,h=(0,c.sO)(null),[p,x]=d(o),g=v(),A=null!==(e=null==g?void 0:g.variant)&&void 0!==e?e:i,b=(0,c.Ye)(()=>{var t,e;let r=null!==(t=null==g?void 0:g.size)&&void 0!==t?t:a;return(0,k.hj)(r)?r:null!==(e=f[r])&&void 0!==e?e:f.normal},[a,null==g?void 0:g.size]);(0,c.d4)(()=>{if(h.current&&b){let t=h.current.clientWidth,e=b/(t+16);e<1&&(h.current.style.transform="scale(".concat(e,")"))}},[b,l]);let N=!p||"error"===x;return(0,s.BX)("div",{className:(0,u.zj)(Z,m(A,!N&&"with-image")),style:(0,u.Ec)(r,{"--wisteria-avatar-color":n,"--wisteria-avatar-size":(0,y.xj)(b),"--wisteria-avatar-offset":g&&(0,y.xj)(-b/4)}),children:[!!(p&&"loaded"===x)&&(0,s.tZ)("img",{...o,className:m("image")}),!!N&&(0,s.tZ)("span",{ref:h,className:m("with-child"),children:null!=l?l:o.alt})]})},[g]=(0,u.XK)("avatar-group"),A=t=>{let{total:e,size:r,variant:n,children:l,maxCount:a=5}=t,i=(0,h.bR)(l).filter(t=>(0,h.l$)(t)&&!(0,k.HD)(t.type)&&"WisAvatar"===t.type.displayName),o=null!=e?e:i.length,c=(0,k.hj)(a)&&o>a,d=i.slice(0,c?a-1:a);if(c){let t=o-a+1;d.push((0,s.BX)(x,{children:["+",t]}))}return(0,s.tZ)(p.Provider,{value:{size:r,variant:n},children:(0,s.tZ)("div",{className:g,children:d})})},b=Object.assign(x,{Group:A});b.displayName="WisAvatar",A.displayName="WisAvatarGroup";var N=r(9904),X=r(5872),B=r(2379);let w=t=>(0,s.tZ)(b,{...t,src:"https://images.pexels.com/photos/18077636/pexels-photo-18077636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"});function j(t){let e=Object.assign({h1:"h1",pre:"pre",code:"code",span:"span",h2:"h2",h3:"h3",p:"p",strong:"strong"},(0,o.ah)(),t.components);return b||_missingMdxReference("Avatar",!1),b.Group||_missingMdxReference("Avatar.Group",!0),(0,a.BX)(a.HY,{children:[(0,a.tZ)(e.h1,{children:"Avatar"}),"\n",(0,a.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,a.tZ)(e.code,{"data-language":"tsx","data-theme":"default",children:(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" { Avatar } "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'wisteria-ui'"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:";"})]})})}),"\n",(0,a.tZ)(e.h2,{id:"用法",children:"用法"}),"\n",(0,a.tZ)(e.h3,{id:"形状",children:"形状"}),"\n",(0,a.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,a.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"square"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"rounded"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"variant"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"circle"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]})]})}),"\n",(0,a.BX)(X.S,{label:"Variant",children:[(0,a.tZ)(w,{variant:"square",size:"large"}),(0,a.tZ)(w,{variant:"rounded",size:"large"}),(0,a.tZ)(w,{variant:"circle",size:"large"})]}),"\n",(0,a.tZ)(e.h3,{id:"尺寸",children:"尺寸"}),"\n",(0,a.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,a.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"small"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"normal"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" />"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"large"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  />"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"72"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}  />"})]})]})}),"\n",(0,a.BX)(X.S,{label:"Size",children:[(0,a.tZ)(w,{size:"small"}),(0,a.tZ)(w,{size:"normal"}),(0,a.tZ)(w,{size:"large"}),(0,a.tZ)(w,{size:72})]}),"\n",(0,a.tZ)(e.h3,{id:"文字",children:"文字"}),"\n",(0,a.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,a.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">L</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"size"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"large"'}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">LA</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,a.BX)(X.S,{label:"Letter",children:[(0,a.tZ)(b,{children:"L"}),(0,a.tZ)(b,{size:"large",children:"LA"})]}),"\n",(0,a.tZ)(e.h3,{id:"avatargroup",children:"AvatarGroup"}),"\n",(0,a.tZ)(e.pre,{"data-language":"tsx","data-theme":"default",hasCopyCode:!0,children:(0,a.BX)(e.code,{"data-language":"tsx","data-theme":"default",children:[(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"<"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar.Group"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-function)"},children:"maxCount"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"{"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"3"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}>"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">A</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">B</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">C</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">D</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  <"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">E</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]}),"\n",(0,a.BX)(e.span,{className:"line",children:[(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:"</"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"Avatar.Group"}),(0,a.tZ)(e.span,{style:{color:"var(--shiki-color-text)"},children:">"})]})]})}),"\n",(0,a.tZ)(X.S,{label:"AvatarGroup",children:(0,a.BX)(b.Group,{maxCount:3,children:[(0,a.tZ)(b,{children:"A"}),(0,a.tZ)(b,{children:"B"}),(0,a.tZ)(b,{children:"C"}),(0,a.tZ)(b,{children:"D"}),(0,a.tZ)(b,{children:"E"})]})}),"\n",(0,a.tZ)(e.h2,{id:"api",children:"API"}),"\n",(0,a.tZ)(e.h3,{id:"avatar",children:"Avatar"}),"\n",(0,a.tZ)(N.UW,{type:"info",children:(0,a.BX)(e.p,{children:[(0,a.tZ)(e.strong,{children:"Avatar"})," 组件支持原生 ",(0,a.tZ)(e.strong,{children:"HTMLImageElement"})," 属性。"]})}),"\n",(0,a.tZ)(N.UW,{type:"info",children:(0,a.BX)(e.p,{children:["如果加载图片链接失败，",(0,a.tZ)(e.strong,{children:"Avatar"})," 组件将会渲染 ",(0,a.tZ)(e.strong,{children:"children"})," 或 ",(0,a.tZ)(e.strong,{children:"alt"}),"\n属性内容。"]})}),"\n",(0,a.tZ)(B.G,{list:[{property:"variant",typedef:"square | rounded | circle",description:"设置形状",defaultValue:"circle"},{property:"size",typedef:"small | normal | large | number",description:"尺寸大小",defaultValue:"normal"},{property:"color",typedef:"string",description:"设置背景色"},{property:"src",typedef:"string",description:"图片链接"}]}),"\n",(0,a.tZ)(e.h3,{id:"avatargroup-1",children:"Avatar.Group"}),"\n",(0,a.tZ)(B.G,{list:[{property:"variant",typedef:"square | rounded | circle",description:"设置形状",defaultValue:"circle"},{property:"size",typedef:"small | normal | large | number",description:"尺寸大小",defaultValue:"normal"},{property:"total",typedef:"number",description:"设置头像总量，默认获取 Avatar 组件数量"},{property:"maxCount",typedef:"number",description:"显示最大数量"}]})]})}var z=(0,i.j)({MDXContent:function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,o.ah)(),t.components);return e?(0,a.tZ)(e,{...t,children:(0,a.tZ)(j,{...t})}):j(t)},pageOpts:{filePath:"pages/components/displays/Avatar.mdx",route:"/components/displays/Avatar",headings:[{depth:1,value:"Avatar",id:"avatar"},{depth:2,value:"用法",id:"用法"},{depth:3,value:"形状",id:"形状"},{depth:3,value:"尺寸",id:"尺寸"},{depth:3,value:"文字",id:"文字"},{depth:3,value:"AvatarGroup",id:"avatargroup"},{depth:2,value:"API",id:"api"},{depth:3,value:"Avatar",id:"avatar-1"},{depth:3,value:"Avatar.Group",id:"avatargroup-1"}],title:"Avatar"},pageNextRoute:"/components/displays/Avatar"})},1090:function(){},4180:function(t){t.exports={container:"styles_container__unOV2"}}},function(t){t.O(0,[65,888,179],function(){return t(t.s=2934)}),_N_E=t.O()}]);