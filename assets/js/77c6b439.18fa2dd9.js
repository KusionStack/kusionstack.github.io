"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8527],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(o),h=i,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return o?n.createElement(m,r(r({ref:t},c),{},{components:o})):n.createElement(m,r({ref:t},c))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8221:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=o(87462),i=(o(67294),o(3905));const a={id:"overview",title:"Overview",slug:"/"},r="Overview",s={unversionedId:"kusion/what-is-kusion/overview",id:"kusion/what-is-kusion/overview",title:"Overview",description:"Welcome to Kusion! This introduction section covers what Kusion is, the problem Kusion aims to solve, and how Kusion compares to other software. If you just want to dive into using Kusion, feel free to skip ahead to the Getting Started section.",source:"@site/docs/kusion/1-what-is-kusion/1-overview.md",sourceDirName:"kusion/1-what-is-kusion",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/1-what-is-kusion/1-overview.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1710142727,formattedLastUpdatedAt:"Mar 11, 2024",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",slug:"/"},sidebar:"kusion",next:{title:"Kusion vs Other Software",permalink:"/docs/next/kusion/what-is-kusion/kusion-vs-x"}},l={},p=[{value:"What is Kusion?",id:"what-is-kusion",level:2},{value:"Why Kusion?",id:"why-kusion",level:2},{value:"Kusion Highlights",id:"kusion-highlights",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Welcome to Kusion! This introduction section covers what Kusion is, the problem Kusion aims to solve, and how Kusion compares to other software. If you just want to dive into using Kusion, feel free to skip ahead to the ",(0,i.kt)("a",{parentName:"p",href:"kusion/getting-started/install-kusion"},"Getting Started")," section."),(0,i.kt)("h2",{id:"what-is-kusion"},"What is Kusion?"),(0,i.kt)("p",null,"Kusion is a modern application delivery and management toolchain that enables developers to specify desired intent in a declarative way and then using a consistent workflow to drive continuous deployment through application lifecycle. Inspired by the phrase ",(0,i.kt)("strong",{parentName:"p"},"Fusion on Kubernetes"),", Kusion aims to help application and platform developers to develop and deliver in a self-serviceable, fast, reliable, and collaborative way."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/KusionStack/kusion/main/docs/workflow.png",alt:"arch"})),(0,i.kt)("h2",{id:"why-kusion"},"Why Kusion?"),(0,i.kt)("p",null,"Developers should be able to deploy and run their applications and services end to end. ",(0,i.kt)("strong",{parentName:"p"},'"You build it, you run it", the original promise of DevOps.')),(0,i.kt)("p",null,"But the modern day for most software organizations this promise quickly become unrelalistic since the increasingly complex cloud-native toolchains, while cloud native technologies made huge improvements in areas such as scalability, availability and operability, it also brings downside - the growing burden on developers, which leads to the rise of ",(0,i.kt)("a",{parentName:"p",href:"https://platformengineering.org/"},"Platform Engineering"),"."),(0,i.kt)("p",null,"Another challenge we saw is that a series of ",(0,i.kt)("a",{parentName:"p",href:"https://web.devopstopologies.com/#anti-types"},"antipatterns")," emerge when regular software organizations tries to implement true DevOps. Without well proven reference architecture and supporting tools, it's much more difficult to accomplish the original promise."),(0,i.kt)("p",null,"On one hand, ",(0,i.kt)("strong",{parentName:"p"},"Kusion was build to minimize developer's cognitive load"),". With application-centric configuration model, you don't need to deal with tedious infrastructure and configuration management tooling, all you need to be familiar with is ",(0,i.kt)("a",{parentName:"p",href:"kusion/configuration-walkthrough/overview"},"AppConfigation"),". This approach shields developers from the configurational complexity of Kubernetes but still enable standardization by design."),(0,i.kt)("p",null,"On the other hand, ",(0,i.kt)("strong",{parentName:"p"},"Kusion defines a new way of how different engineering teams collaboration"),". With the separation of concerns, different roles could focus on their work based on their knowledge and responsibility. Through such a division of labor, the platform team can better manage the differences and complexities of the platform, and app developers could participate in ops work with less cognitive load."),(0,i.kt)("h2",{id:"kusion-highlights"},"Kusion Highlights"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Platform as Code")),(0,i.kt)("p",{parentName:"li"},"Specify desired application intent through declarative configuration code, drive continuous deployment with any CI/CD systems or GitOps to match that intent. No ad-hoc scripts, no hard maintain custom workflows, just declarative configuration code.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Dynamic Configuration Management")),(0,i.kt)("p",{parentName:"li"},"Enable platform teams to set baseline-templates, control how and where to deploy application workloads and provision accessory resources. While still enabling application developers freedom via workload-centric specification and deployment. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Security & Compliance Built In")),(0,i.kt)("p",{parentName:"li"},"Enforce security and infrastructure best practices with out-of-box ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/catalog"},"base models"),", create security and compliance guardrails for any Kusion deploy with third-party Policy as Code tools. All accessory resource secrets are automatically injected into Workloads.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Lightweight and Open Model Ecosystem")),(0,i.kt)("p",{parentName:"li"},"Pure client-side solution ensures good portability and the rich APIs make it easier to integrate and automate. Large growing model ecosystem covers all stages in  application lifecycle, with extensive connections to various infrastructure capabilities. "))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Kusion is an early project.")," The end goal of Kusion is to boost ",(0,i.kt)("a",{parentName:"p",href:"https://internaldeveloperplatform.org/"},"Internal Developer Platform")," revolution, and we are iterating on Kusion quickly to strive towards this goal. For any help or feedback, please contact us in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/community/discussions/categories/meeting"},"Slack")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/issues"},"issues"),".")))}u.isMDXComponent=!0}}]);