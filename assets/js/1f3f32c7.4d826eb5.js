"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2313],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,m=d["".concat(i,".").concat(f)]||d[f]||u[f]||a;return t?n.createElement(m,c(c({ref:r},l),{},{components:t})):n.createElement(m,c({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2437:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const a={title:"karpor syncer"},c=void 0,s={unversionedId:"references/cli-commands/karpor-syncer",id:"references/cli-commands/karpor-syncer",title:"karpor syncer",description:"karpor syncer",source:"@site/docs/karpor/5-references/1-cli-commands/2-karpor-syncer.md",sourceDirName:"5-references/1-cli-commands",slug:"/references/cli-commands/karpor-syncer",permalink:"/karpor/next/references/cli-commands/karpor-syncer",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"karpor syncer"},sidebar:"karpor",previous:{title:"karpor",permalink:"/karpor/next/references/cli-commands/karpor"},next:{title:"OpenAPI",permalink:"/karpor/next/references/openapi"}},i={},p=[{value:"karpor syncer",id:"karpor-syncer",level:2},{value:"Options",id:"options",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 7-May-2024",id:"auto-generated-by-spf13cobra-on-7-may-2024",level:6}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"karpor-syncer"},"karpor syncer"),(0,o.kt)("p",null,"start a resource syncer to sync resource from clusters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"karpor syncer [flags]\n")),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --elastic-search-addresses strings   The elastic search address.\n      --health-probe-bind-address string   The address the probe endpoint binds to. (default ":8081")\n  -h, --help                               help for syncer\n      --metrics-bind-address string        The address the metric endpoint binds to. (default ":8080")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/karpor/next/references/cli-commands/karpor"},"karpor"),"\t - Launch an API server")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-7-may-2024"},"Auto generated by spf13/cobra on 7-May-2024"))}u.isMDXComponent=!0}}]);