"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,d=f["".concat(l,".").concat(u)]||f[u]||p[u]||s;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77792:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={},i="k8s_manifest",o={unversionedId:"reference/modules/developer-schemas/k8s_manifest/k8s_manifest",id:"reference/modules/developer-schemas/k8s_manifest/k8s_manifest",title:"k8s_manifest",description:"Schema K8sManifest",source:"@site/docs/kusion/6-reference/2-modules/1-developer-schemas/k8s_manifest/k8s_manifest.md",sourceDirName:"6-reference/2-modules/1-developer-schemas/k8s_manifest",slug:"/reference/modules/developer-schemas/k8s_manifest/",permalink:"/zh/docs/next/reference/modules/developer-schemas/k8s_manifest/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/2-modules/1-developer-schemas/k8s_manifest/k8s_manifest.md",tags:[],version:"current",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1736745225,formattedLastUpdatedAt:"2025\u5e741\u670813\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"secret",permalink:"/zh/docs/next/reference/modules/developer-schemas/internal/secret/"},next:{title:"prometheus",permalink:"/zh/docs/next/reference/modules/developer-schemas/monitoring/prometheus"}},l={},c=[{value:"Schema K8sManifest",id:"schema-k8smanifest",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],m={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"k8s_manifest"},"k8s_manifest"),(0,a.kt)("h2",{id:"schema-k8smanifest"},"Schema K8sManifest"),(0,a.kt)("p",null,"K8sManifest defines the paths of the YAML files, or the directories of the raw Kubernetes manifests, which will be jointly appended to the Resources of Spec."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"description"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"paths")," ",(0,a.kt)("inlineCode",{parentName:"td"},"required")),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"The paths of the YAML files, or the directories of the raw Kubernetes manifests."),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import k8s_manifest\n\naccessories: {\n    "k8s_manifest": k8s_manifest.K8sManifest {\n        paths: [\n            # The path of a YAML file. \n            "/path/to/my/k8s_manifest.yaml", \n            # The path of a directory containing K8s manifests. \n            "/dir/to/my/k8s_manifests"\n        ]\n    }\n}\n')))}p.isMDXComponent=!0}}]);