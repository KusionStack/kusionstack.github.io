"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3329],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),f=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=f(e.components);return r.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=f(n),d=i,m=p["".concat(c,".").concat(d)]||p[d]||l[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var f=2;f<o;f++)a[f]=n[f];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22872:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return f},toc:function(){return l}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={},c="session_affinity_config",f={unversionedId:"reference/model/kusion_kubernetes/api/core/v1/doc_session_affinity_config",id:"reference/model/kusion_kubernetes/api/core/v1/doc_session_affinity_config",title:"session_affinity_config",description:"Source: base/pkg/kusionkubernetes/api/core/v1/sessionaffinityconfig.k",source:"@site/docs/reference/model/kusion_kubernetes/api/core/v1/doc_session_affinity_config.md",sourceDirName:"reference/model/kusion_kubernetes/api/core/v1",slug:"/reference/model/kusion_kubernetes/api/core/v1/doc_session_affinity_config",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_session_affinity_config",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/model/kusion_kubernetes/api/core/v1/doc_session_affinity_config.md",tags:[],version:"current",lastUpdatedBy:"chai2010",lastUpdatedAt:1657596779,formattedLastUpdatedAt:"2022/7/12",frontMatter:{},sidebar:"reference",previous:{title:"service_spec",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_service_spec"},next:{title:"storage_os_volume_source",permalink:"/docs/reference/model/kusion_kubernetes/api/core/v1/doc_storage_os_volume_source"}},u={},l=[{value:"Schema SessionAffinityConfig",id:"schema-sessionaffinityconfig",level:2},{value:"Attributes",id:"attributes",level:3}],p={toc:l};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"session_affinity_config"},"session_affinity_config"),(0,o.kt)("p",null,"Source: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/core/v1/session_affinity_config.k"},"base/pkg/kusion_kubernetes/api/core/v1/session_affinity_config.k")),(0,o.kt)("p",null,"This is the session","_","affinity","_","config module in kusion","_","kubernetes.api.core.v1 package.",(0,o.kt)("br",null),"This file was generated by the KCL auto-gen tool. DO NOT EDIT.",(0,o.kt)("br",null),"Editing this file might prove futile when you re-run the KCL auto-gen generate command."),(0,o.kt)("h2",{id:"schema-sessionaffinityconfig"},"Schema SessionAffinityConfig"),(0,o.kt)("p",null,"SessionAffinityConfig represents the configurations of session affinity."),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name and Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"clientIP"),(0,o.kt)("br",null),"clientIP contains the configurations of Client IP based session affinity."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"doc_client_ip_config#schema-clientipconfig"},"ClientIPConfig")),(0,o.kt)("td",{parentName:"tr",align:null},"Undefined"),(0,o.kt)("td",{parentName:"tr",align:null},"optional")))))}d.isMDXComponent=!0}}]);