"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5679],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={id:"stack-configuration",sidebar_label:"Stack Configuration"},c="Stack Configuration",s={unversionedId:"user_docs/concepts/stack/stack-configuration",id:"user_docs/concepts/stack/stack-configuration",title:"Stack Configuration",description:"Users can add config items of the stack in stack.yaml, such as the stack name, etc.",source:"@site/docs/user_docs/concepts/stack/configuration.md",sourceDirName:"user_docs/concepts/stack",slug:"/user_docs/concepts/stack/stack-configuration",permalink:"/docs/next/user_docs/concepts/stack/stack-configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/concepts/stack/configuration.md",tags:[],version:"current",lastUpdatedBy:"KK",lastUpdatedAt:1704717206,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{id:"stack-configuration",sidebar_label:"Stack Configuration"},sidebar:"user_docs",previous:{title:"Glossary",permalink:"/docs/next/user_docs/concepts/glossary"},next:{title:"How Kusion Works",permalink:"/docs/next/user_docs/concepts/kusion"}},i={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stack-configuration"},"Stack Configuration"),(0,a.kt)("p",null,"Users can add config items of the stack in ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml"),", such as the stack name, etc."),(0,a.kt)("p",null,"Here is an example of ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# The stack basic info\nname: dev\n")),(0,a.kt)("p",null,"The config items in ",(0,a.kt)("inlineCode",{parentName:"p"},"stack.yaml")," are explained below."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name"),": The name of the stack, should be same as the workspace name, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"pre")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"prod"),".")))}p.isMDXComponent=!0}}]);