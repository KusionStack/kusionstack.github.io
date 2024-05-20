"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(r),h=n,d=g["".concat(s,".").concat(h)]||g[h]||u[h]||i;return r?o.createElement(d,a(a({ref:t},c),{},{components:r})):o.createElement(d,a({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}g.displayName="MDXCreateElement"},83011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={title:"Topology"},a=void 0,l={unversionedId:"user-guide/insight/topology",id:"version-v0.4/user-guide/insight/topology",title:"Topology",description:"Topology",source:"@site/karpor_versioned_docs/version-v0.4/3-user-guide/3-insight/5-topology.md",sourceDirName:"3-user-guide/3-insight",slug:"/user-guide/insight/topology",permalink:"/karpor/user-guide/insight/topology",draft:!1,tags:[],version:"v0.4",sidebarPosition:5,frontMatter:{title:"Topology"},sidebar:"karpor",previous:{title:"Compliance Report",permalink:"/karpor/user-guide/insight/compliance-report"},next:{title:"One-Pass with Proxy",permalink:"/karpor/user-guide/best-production-practices/one-pass-with-proxy"}},s={},p=[{value:"Topology",id:"topology",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"topology"},"Topology"),(0,n.kt)("p",null,"In this section, we will explore the topology feature in Karpor. The topology view will help you more intuitively understand the relationships and dependencies among various resources in your cluster. Here's how to use the topology view."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the guidance on ",(0,n.kt)("a",{parentName:"li",href:"#inspecting-any-resource-group-and-resource"},"Inspecting Any Resource Group and Resource")," to navigate to the insights page of a particular resource group/resource."),(0,n.kt)("li",{parentName:"ol"},"At the bottom of the page, you can see the resource topology map.\n",(0,n.kt)("img",{src:r(10089).Z,width:"1620",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},"Depending on the current page:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Resource Insights Page:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The map will display relevant upstream and downstream resources related to the current resource. For example, if the current resource is a Deployment, the topology map will show the ReplicaSet under the Deployment and the Pods under the ReplicaSet.\n",(0,n.kt)("img",{src:r(9165).Z,width:"1620",height:"1080"})),(0,n.kt)("li",{parentName:"ol"},"Clicking on a node in the resource topology map is equivalent to clicking on an anchor of a specific resource, which will directly navigate to the insights page of that resource."))),(0,n.kt)("li",{parentName:"ol"},"Resource Group Insights Page:",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"The map will intuitively show the quantity and relationship of all types of resources under the current resource group."),(0,n.kt)("li",{parentName:"ol"},"Clicking on a node in the resource topology map is equivalent to clicking on a resource type, and the list below will refresh with all the resources under a specific type within the current resource group.\n",(0,n.kt)("img",{src:r(31196).Z,width:"1620",height:"1080"}))))))))}u.isMDXComponent=!0},31196:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/insight-linkage-298826c22694d9bbc4dc1bf7ecc2fb8e.png"},9165:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/insight-topology-example-158a6b418f05651909a60beda57ff83b.png"},10089:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/insight-topology-673607ffbbf80cfee39bcd28db038d47.png"}}]);