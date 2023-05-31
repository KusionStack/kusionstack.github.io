"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3519],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=l,f=k["".concat(c,".").concat(d)]||k[d]||u[d]||a;return n?o.createElement(f,r(r({ref:t},s),{},{components:n})):o.createElement(f,r({ref:t},s))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,r[1]=i;for(var p=2;p<a;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},20991:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=n(87462),l=(n(67294),n(3905));const a={sidebar_position:1},r="KCL OpenAPI Tool Quick Start",i={unversionedId:"reference/cli/openapi/quick-start",id:"reference/cli/openapi/quick-start",title:"KCL OpenAPI Tool Quick Start",description:"1. Installation",source:"@site/docs/reference/cli/openapi/quick-start.md",sourceDirName:"reference/cli/openapi",slug:"/reference/cli/openapi/quick-start",permalink:"/docs/reference/cli/openapi/quick-start",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/cli/openapi/quick-start.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1685503692,formattedLastUpdatedAt:"5/31/2023",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"OpenAPI Tools",permalink:"/docs/reference/cli/openapi/"},next:{title:"CRD to KCL",permalink:"/docs/reference/cli/openapi/crd-to-kcl"}},c={},p=[{value:"1. Installation",id:"1-installation",level:2},{value:"1.1 Install along with the kusion tools pack",id:"11-install-along-with-the-kusion-tools-pack",level:2},{value:"1.2 Only install the kcl-openapi tool",id:"12-only-install-the-kcl-openapi-tool",level:2},{value:"1.3 Verify your installation",id:"13-verify-your-installation",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"kcl-openapi-tool-quick-start"},"KCL OpenAPI Tool Quick Start"),(0,l.kt)("h2",{id:"1-installation"},"1. Installation"),(0,l.kt)("p",null,"The kcl-openapi tool can be installed in both ways: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#11-install-along-with-the-kusion-tools-pack"},"recommend: install along with the kusion tools pack")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#12-only-install-the-kcl-openapi-tool"},"only install the kcl-openapi tool"))),(0,l.kt)("h2",{id:"11-install-along-with-the-kusion-tools-pack"},"1.1 Install along with the kusion tools pack"),(0,l.kt)("p",null,"It's recommended to directly install the kusion tools pack, which bundled the kusion cli, KCLVM, kcl-openapi tool and other useful tools. About installing the kusion tools pack, please refer to the ",(0,l.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"Kusion Quick Start Doc"),"."),(0,l.kt)("h2",{id:"12-only-install-the-kcl-openapi-tool"},"1.2 Only install the kcl-openapi tool"),(0,l.kt)("p",null,"You can optionally install the kcl-openapi tool separately:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'# 1. download the released binary from:\n# https://github.com/KusionStack/kcl-openapi/releases\n\n# 2. Add the binary location to PATH\nexport PATH="<Your directory to store KCLOpenapi binary>:$PATH"\n')),(0,l.kt)("h2",{id:"13-verify-your-installation"},"1.3 Verify your installation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"To verify the installation, you can run the command: ",(0,l.kt)("inlineCode",{parentName:"li"},"kcl-openapi generate model -h")," and the following information indicates your successful installation:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"kcl-openapi command helps you to generate KCL schema structure from K8s CRD YAML/JSON file.\n  1. Translate Swagger Openapi Spec to KCL code\n  2. Translate Kubernetes CRD to KCL code\n\nExamples:\n\n  # convert a K8s CRD file into KCL files\n  kcl-openapi generate model -f FILENAME --crd --skip-validation\n\nOptions:\n      --crd=false: Set the spec file is a kube crd\n  -f, --filename='': The filename to convert\n      --skip-validation=false: Skips validation of spec prior to generation\n  -t, --target='': The location to write output kcl files\n      --version=false: Show the KCLOpenAPI version\n\nUsage:\n  kcl-openapi generate model -f FILENAME [options]\n")),(0,l.kt)("h1",{id:"2-\u751f\u6210-kcl-\u6587\u4ef6"},"2. \u751f\u6210 KCL \u6587\u4ef6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/cli/openapi/openapi-to-kcl"},"OpenAPI to KCL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/reference/cli/openapi/crd-to-kcl"},"CRD to KCL"))))}u.isMDXComponent=!0}}]);