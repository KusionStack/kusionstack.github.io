"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,l(l({ref:t},d),{},{components:n})):r.createElement(f,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},54066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},l=void 0,i={unversionedId:"reference/lang/model/yaml",id:"reference/lang/model/yaml",title:"yaml",description:"yaml \u7f16\u7801\u89e3\u7801",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/model/yaml.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/yaml",permalink:"/zh-CN/docs/reference/lang/model/yaml",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/yaml.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1666173969,formattedLastUpdatedAt:"2022/10/19",frontMatter:{title:"yaml",linkTitle:"yaml",type:"docs",description:"yaml \u7f16\u7801\u89e3\u7801",weight:300},sidebar:"reference",previous:{title:"units",permalink:"/zh-CN/docs/reference/lang/model/units"},next:{title:"Plugin System",permalink:"/zh-CN/docs/reference/lang/plugin/"}},c={},p=[{value:"encode",id:"encode",level:2},{value:"decode",id:"decode",level:2},{value:"dump_to_file",id:"dump_to_file",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"encode"},"encode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"encode(\n    data: any,\n    sort_keys: bool = False,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> str\n")),(0,o.kt)("p",null,"Serialize a KCL object ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to a YAML formatted str."),(0,o.kt)("h2",{id:"decode"},"decode"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"decode(value: str) -> any")),(0,o.kt)("p",null,"Deserialize ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," (a string instance containing a YAML document) to a KCL object."),(0,o.kt)("h2",{id:"dump_to_file"},"dump_to_file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"dump_to_file(\n    data: any,\n    filename: str,\n    ignore_private: bool = False,\n    ignore_none: bool = False\n) -> None\n")),(0,o.kt)("p",null,"Serialize a KCL object ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," to a YAML formatted str and write it into the file ",(0,o.kt)("inlineCode",{parentName:"p"},"filename"),"."))}s.isMDXComponent=!0}}]);