"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||c;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47576:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>O,default:()=>D,frontMatter:()=>w,metadata:()=>E,toc:()=>j});var r=n(87462),o=n(67294),c=n(3905),i=n(86010),a=n(53438),s=n(39960),l=n(13919),u=n(95999);const p="cardContainer_fWXF",d="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:n}=e;return o.createElement(s.Z,{href:t,className:(0,i.Z)("card padding--lg",p)},n)}function y(e){let{href:t,icon:n,title:r,description:c}=e;return o.createElement(f,{href:t},o.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:r},n," ",r),c&&o.createElement("p",{className:(0,i.Z)("text--truncate",m),title:c},c))}function h(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?o.createElement(y,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function v(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.xz)(t.docId??void 0);return o.createElement(y,{href:t.href,icon:n,title:t.label,description:t.description??(null==r?void 0:r.description)})}function b(e){let{item:t}=e;switch(t.type){case"link":return o.createElement(v,{item:t});case"category":return o.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.jA)();return o.createElement(k,{items:n.items,className:t})}function k(e){const{items:t,className:n}=e;if(!t)return o.createElement(g,e);const r=(0,a.MN)(t);return o.createElement("section",{className:(0,i.Z)("row",n)},r.map(((e,t)=>o.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},o.createElement(b,{item:e})))))}const w={},O="Concepts",E={unversionedId:"kusion/concepts/index",id:"version-v0.9/kusion/concepts/index",title:"Concepts",description:"In this section, we will introduce the architecture of KusionStack and some core concepts.",source:"@site/versioned_docs/version-v0.9/kusion/concepts/index.md",sourceDirName:"kusion/concepts",slug:"/kusion/concepts/",permalink:"/docs/v0.9/kusion/concepts/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.9/kusion/concepts/index.md",tags:[],version:"v0.9",lastUpdatedBy:"Dayuan",lastUpdatedAt:1710142727,formattedLastUpdatedAt:"Mar 11, 2024",frontMatter:{},sidebar:"kusion",previous:{title:"Deliver the WordPress Application on Kubernetes",permalink:"/docs/v0.9/kusion/getting-started/deliver-wordpress"},next:{title:"Architecture",permalink:"/docs/v0.9/kusion/concepts/arch"}},x={},j=[],P={toc:j};function D(e){let{components:t,...n}=e;return(0,c.kt)("wrapper",(0,r.Z)({},P,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"concepts"},"Concepts"),(0,c.kt)("p",null,"In this section, we will introduce the architecture of KusionStack and some core concepts."),(0,c.kt)(k,{mdxType:"DocCardList"}))}D.isMDXComponent=!0}}]);