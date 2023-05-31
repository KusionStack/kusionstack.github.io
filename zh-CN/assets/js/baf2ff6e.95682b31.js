"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),k=s,g=d["".concat(l,".").concat(k)]||d[k]||p[k]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function k(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65040:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(87462),s=(n(67294),n(3905));const a={},i="ingress_tls",o={unversionedId:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls",id:"reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls",title:"ingress_tls",description:"Source: base/pkg/kusionkubernetes/api/networking/v1/ingresstls.k",source:"@site/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls.md",sourceDirName:"reference/model/kusion_kubernetes/api/networking/v1",slug:"/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_tls.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685503692,formattedLastUpdatedAt:"2023/5/31",frontMatter:{},sidebar:"reference",previous:{title:"ingress_spec",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_ingress_spec"},next:{title:"service_backend_port",permalink:"/zh-CN/docs/reference/model/kusion_kubernetes/api/networking/v1/doc_service_backend_port"}},l={},u=[{value:"Schema IngressTLS",id:"schema-ingresstls",level:2},{value:"Attributes",id:"attributes",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ingress_tls"},"ingress_tls"),(0,s.kt)("p",null,"Source: ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/networking/v1/ingress_tls.k"},"base/pkg/kusion_kubernetes/api/networking/v1/ingress_tls.k")),(0,s.kt)("p",null,"This is the ingress","_","tls module in kusion","_","kubernetes.api.networking.v1 package.",(0,s.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,s.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,s.kt)("h2",{id:"schema-ingresstls"},"Schema IngressTLS"),(0,s.kt)("p",null,"IngressTLS describes the transport layer security associated with an Ingress."),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,s.kt)("th",{parentName:"tr",align:null},"Type"),(0,s.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,s.kt)("th",{parentName:"tr",align:null},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"hosts"),(0,s.kt)("br",null),"Hosts are a list of hosts included in the TLS certificate. The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified."),(0,s.kt)("td",{parentName:"tr",align:null},"[str]"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("strong",{parentName:"td"},"secretName"),(0,s.kt)("br",null),'SecretName is the name of the secret used to terminate TLS traffic on port 443. Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.'),(0,s.kt)("td",{parentName:"tr",align:null},"str"),(0,s.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,s.kt)("td",{parentName:"tr",align:null},"optional")))))}p.isMDXComponent=!0}}]);