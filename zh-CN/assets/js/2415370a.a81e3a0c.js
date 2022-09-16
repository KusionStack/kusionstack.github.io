"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6130],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,k=s["".concat(p,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},71209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const l={},o="container",i={unversionedId:"reference/model/kusion_models/kube/frontend/container/doc_container",id:"reference/model/kusion_models/kube/frontend/container/doc_container",title:"container",description:"Source: base/pkg/kusionmodels/kube/frontend/container/container.k",source:"@site/docs/reference/model/kusion_models/kube/frontend/container/doc_container.md",sourceDirName:"reference/model/kusion_models/kube/frontend/container",slug:"/reference/model/kusion_models/kube/frontend/container/doc_container",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/doc_container",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_models/kube/frontend/container/doc_container.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663294255,formattedLastUpdatedAt:"2022/9/16",frontMatter:{},sidebar:"reference",previous:{title:"configmap",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/configmap/doc_configmap"},next:{title:"env",permalink:"/zh-CN/docs/reference/model/kusion_models/kube/frontend/container/env/doc_env"}},p={},d=[{value:"Schema Main",id:"schema-main",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Examples",id:"examples",level:3}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"container"},"container"),(0,a.kt)("p",null,"Source: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/container/container.k"},"base/pkg/kusion_models/kube/frontend/container/container.k")),(0,a.kt)("h2",{id:"schema-main"},"Schema Main"),(0,a.kt)("p",null,"Main describes the main container configuration that is expected to be run on the host."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"name"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The container name. Each container in a pod must have a unique name."),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},'"main"'),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"required"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"command"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The startup command of main process. The image's entrypoint is used if this is not provided."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"args"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The startup arguments of main process. The image's cmd is used if this is not provided."),(0,a.kt)("td",{parentName:"tr",align:null},"[str]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"useBuiltInEnv"),(0,a.kt)("br",null),"useBuiltInEnv indicates use built-in envs or not."),(0,a.kt)("td",{parentName:"tr",align:null},"bool"),(0,a.kt)("td",{parentName:"tr",align:null},"False"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"env"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"List of environment variables in the container."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"env/doc_env#schema-env"},"env.Env"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"envFrom"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"List of sources to populate environment variables in the container."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"env/doc_env#schema-envfromsource"},"env.EnvFromSource"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ports"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"List of network ports in the container."),(0,a.kt)("td",{parentName:"tr",align:null},"[",(0,a.kt)("a",{parentName:"td",href:"port/doc_container_port#schema-containerport"},"port.ContainerPort"),"]"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"livenessProbe"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The probe to check whether container is live or not."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"probe/doc_probe#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"readinessProbe"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The probe to check whether container is ready or not.",(0,a.kt)("br",null),"The default value can be referred to presupposed template: base/pkg/kusion","_","models/templates/sofa","_","probe.k"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"probe/doc_probe#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"startupProbe"),(0,a.kt)("br",null),"A Container-level attribute.",(0,a.kt)("br",null),"The probe to indicates that the Pod has successfully initialized."),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"probe/doc_probe#schema-probe"},"p.Probe")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"lifecycle")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"lifecycle/doc_lifecycle#schema-lifecycle"},"lc.Lifecycle")),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"workingDir")),(0,a.kt)("td",{parentName:"tr",align:null},"str"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"securityContext")),(0,a.kt)("td",{parentName:"tr",align:null},"{str: any}"),(0,a.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,a.kt)("td",{parentName:"tr",align:null},"optional")))),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import base.pkg.kusion_models.kube.frontend.container\nimport base.pkg.kusion_models.kube.frontend.container.probe as p\n\nmain = container.Main {\n    name = "test"\n    livenessProbe = p.Probe {\n        handler = p.Http {\n            path = "/healthz"\n        }\n        initialDelaySeconds = 10\n    }\n}\n')))}m.isMDXComponent=!0}}]);