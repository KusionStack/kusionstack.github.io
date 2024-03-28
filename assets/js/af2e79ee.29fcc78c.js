"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},91151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={id:"configuration",sidebar_label:"Stack Configuration"},i="Stack Configuration",c={unversionedId:"kusion/concepts/stack/configuration",id:"version-v0.10/kusion/concepts/stack/configuration",title:"Stack Configuration",description:"Users can add config items of the stack in stack.yaml, such as the stack name, etc.",source:"@site/versioned_docs/version-v0.10/kusion/3-concepts/2-stack/2-configuration.md",sourceDirName:"kusion/3-concepts/2-stack",slug:"/kusion/concepts/stack/configuration",permalink:"/docs/kusion/concepts/stack/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/versioned_docs/version-v0.10/kusion/3-concepts/2-stack/2-configuration.md",tags:[],version:"v0.10",lastUpdatedBy:"Forest",lastUpdatedAt:1711632562,formattedLastUpdatedAt:"Mar 28, 2024",sidebarPosition:2,frontMatter:{id:"configuration",sidebar_label:"Stack Configuration"},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/kusion/concepts/stack/overview"},next:{title:"Kusion Module",permalink:"/docs/kusion/concepts/kusion-module"}},s={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"stack-configuration"},"Stack Configuration"),(0,o.kt)("p",null,"Users can add config items of the stack in ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml"),", such as the stack name, etc."),(0,o.kt)("p",null,"Here is an example of ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The stack basic info\nname: dev\n")),(0,o.kt)("p",null,"The config items in ",(0,o.kt)("inlineCode",{parentName:"p"},"stack.yaml")," are explained below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name"),": The name of the stack, should be same as the workspace name, such as ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"pre")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"prod"),".")))}p.isMDXComponent=!0}}]);