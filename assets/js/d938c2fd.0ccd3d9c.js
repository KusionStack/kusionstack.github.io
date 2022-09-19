"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6748],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:0},a="Overview",l={unversionedId:"reference/lang/model/overview",id:"reference/lang/model/overview",title:"Overview",description:"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules.",source:"@site/docs/reference/lang/model/overview.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/overview",permalink:"/docs/reference/lang/model/overview",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/overview.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663568154,formattedLastUpdatedAt:"9/19/2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"reference",previous:{title:"System Module",permalink:"/docs/reference/lang/model/"},next:{title:"builtin",permalink:"/docs/reference/lang/model/builtin"}},s={},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"KCL provides engineering extensibility through built-in modules, system modules and plug-in modules."),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(89105).Z,width:"1544",height:"884"})),(0,o.kt)("p",null,"The user code does not need to import functions that directly use builtin functions (such as calculating the length of a list with ",(0,o.kt)("inlineCode",{parentName:"p"},"len"),", obtaining the type of value through ",(0,o.kt)("inlineCode",{parentName:"p"},"typeof"),", etc.), and for basic types such as strings, it also provides some built-in methods (such as converting the case of strings, etc.)."),(0,o.kt)("p",null,"For relatively complex general logic, it is provided through the system modules. For example, by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"math")," module, we can use related mathematical functions, and we can use the regular expression by importing the ",(0,o.kt)("inlineCode",{parentName:"p"},"regex")," module. For KCL code, it can also be organized into different user modules."),(0,o.kt)("p",null,"In addition, Python and Go can be used to develop plug-ins for KCL through the plugin mechanism. For example, there are the app-context plug-in can be used to obtain the context information of the current application to simplify code writing."))}p.isMDXComponent=!0},89105:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kcl-module-5ec74277ff23c98d06956ab10f3f2fb6.png"}}]);