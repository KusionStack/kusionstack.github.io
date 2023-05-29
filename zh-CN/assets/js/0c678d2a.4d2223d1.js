"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[317],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),f=o,g=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return r?n.createElement(g,a(a({ref:t},l),{},{components:r})):n.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},76596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={},a="\u5dee\u5f02\u5316\u914d\u7f6e",s={unversionedId:"user_docs/guides/working-with-k8s/differentiated-configuration",id:"user_docs/guides/working-with-k8s/differentiated-configuration",title:"\u5dee\u5f02\u5316\u914d\u7f6e",description:"\u5e94\u7528\u7684 KCL \u914d\u7f6e\u4ee3\u7801\u4e2d\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 if-else \u8bed\u53e5\u642d\u914d\u9b54\u672f\u53d8\u91cf\u8bbe\u7f6e\u9700\u8981\u7684\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u6bd4\u5982\u6839\u636e\u5b9e\u9645\u90e8\u7f72\u7684\u96c6\u7fa4\u540d\u79f0\u8bbe\u7f6e\u4e0d\u540c\u7684 labels\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/working-with-k8s/7-differentiated-configuration.md",sourceDirName:"user_docs/guides/working-with-k8s",slug:"/user_docs/guides/working-with-k8s/differentiated-configuration",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/differentiated-configuration",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/working-with-k8s/7-differentiated-configuration.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685355131,formattedLastUpdatedAt:"2023/5/29",sidebarPosition:7,frontMatter:{},sidebar:"user_docs",previous:{title:"Configure Resource Specification",permalink:"/zh-CN/docs/user_docs/guides/working-with-k8s/resource-spec"},next:{title:"\u9879\u76ee\u7ec4\u7ec7\u6700\u4f73\u5b9e\u8df5",permalink:"/zh-CN/docs/user_docs/guides/organizing-projects-stacks/"}},c={},u=[{value:"1. \u51c6\u5907\u5de5\u4f5c",id:"1-\u51c6\u5907\u5de5\u4f5c",level:2},{value:"2. \u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b",id:"2-\u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b",level:2}],l={toc:u},d="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5dee\u5f02\u5316\u914d\u7f6e"},"\u5dee\u5f02\u5316\u914d\u7f6e"),(0,o.kt)("p",null,"\u5e94\u7528\u7684 KCL \u914d\u7f6e\u4ee3\u7801\u4e2d\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0 if-else \u8bed\u53e5\u642d\u914d\u9b54\u672f\u53d8\u91cf\u8bbe\u7f6e\u9700\u8981\u7684\u5dee\u5f02\u5316\u914d\u7f6e\uff0c\u6bd4\u5982\u6839\u636e\u5b9e\u9645\u90e8\u7f72\u7684\u96c6\u7fa4\u540d\u79f0\u8bbe\u7f6e\u4e0d\u540c\u7684 labels\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6709\u5173 KCL \u8bed\u4e49\u76f8\u5173\u7684\u8be6\u7ec6\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/lang/lang/spec/expressions"},"\u8868\u8fbe\u5f0f"),"\u3002")),(0,o.kt)("h2",{id:"1-\u51c6\u5907\u5de5\u4f5c"},"1. \u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u53ef\u53c2\u8003\uff1a",(0,o.kt)("a",{parentName:"p",href:"/zh-CN/docs/user_docs/guides/working-with-k8s/deploy-server#1-%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C"},"\u90e8\u7f72\u5e94\u7528\u670d\u52a1/\u51c6\u5907\u5de5\u4f5c")),(0,o.kt)("h2",{id:"2-\u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b"},"2. \u5dee\u5f02\u5316\u914d\u7f6e\u6837\u4f8b"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"base/bask.k")," \u4e2d Pod Label \u7684\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'appConfiguration: frontend.Server {\n    podMetadata.labels = {\n        if __META_CLUSTER_NAME in ["minikube", "kind"]:\n            cluster = __META_CLUSTER_NAME\n        else:\n            cluster = "other"\n    }\n}\n')),(0,o.kt)("p",null,"\u901a\u8fc7\u4ee5\u4e0a KCL \u4ee3\u7801\uff0c\u6211\u4eec\u6839\u636e\u914d\u7f6e\u5927\u5e93\uff08Konfig\uff09\u4e2d\u7684\u9b54\u672f\u53d8\u91cf\u5224\u65ad\u5b9e\u9645\u90e8\u7f72\u65f6\u7684\u96c6\u7fa4\u540d\u79f0\u6765\u9009\u62e9\u6027\u7684\u4e3a\u5e94\u7528\u5bb9\u5668\u4e2d\u6ce8\u5165\u6807\u7b7e\uff0c\u6765\u505a\u5230\u88ab\u7b2c\u4e09\u65b9\u670d\u52a1\u8bc6\u522b\u6216\u8005\u5176\u4ed6\u76ee\u7684\u3002"))}p.isMDXComponent=!0}}]);