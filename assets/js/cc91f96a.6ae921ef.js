"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[62534],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return t?o.createElement(k,i(i({ref:n},d),{},{components:t})):o.createElement(k,i({ref:n},d))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(87462),a=(t(67294),t(3905));const r={},i="Platform Engineer Develop Guide",l={unversionedId:"concepts/kusion-module/develop-guide",id:"version-v0.11/concepts/kusion-module/develop-guide",title:"Platform Engineer Develop Guide",description:"Prerequisites",source:"@site/docs_versioned_docs/version-v0.11/3-concepts/3-kusion-module/2-develop-guide.md",sourceDirName:"3-concepts/3-kusion-module",slug:"/concepts/kusion-module/develop-guide",permalink:"/docs/v0.11/concepts/kusion-module/develop-guide",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/3-concepts/3-kusion-module/2-develop-guide.md",tags:[],version:"v0.11",lastUpdatedBy:"elliotxx",lastUpdatedAt:1736132596,formattedLastUpdatedAt:"Jan 6, 2025",sidebarPosition:2,frontMatter:{},sidebar:"kusion",previous:{title:"Overview",permalink:"/docs/v0.11/concepts/kusion-module/overview"},next:{title:"Application Developer User Guide",permalink:"/docs/v0.11/concepts/kusion-module/app-dev-guide"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Workflow",id:"workflow",level:2},{value:"Set up a developing environment",id:"set-up-a-developing-environment",level:2},{value:"Developing",id:"developing",level:2},{value:"Publish",id:"publish",level:2},{value:"Initialize the workspace",id:"initialize-the-workspace",level:2}],d={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"platform-engineer-develop-guide"},"Platform Engineer Develop Guide"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To follow this guide, you will need:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Go 1.22 or higher installed and configured"),(0,a.kt)("li",{parentName:"ul"},"Kusion v0.11.1 or higher installed locally")),(0,a.kt)("h2",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"As a platform engineer, the workflow of developing a Kusion module looks like this:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Communicate with app developers and identify the fields that should exposed to them in the dev-orient schema"),(0,a.kt)("li",{parentName:"ol"},"Identify module input parameters that should be configured by platform engineers in the ",(0,a.kt)("a",{parentName:"li",href:"../workspace"},"workspace")),(0,a.kt)("li",{parentName:"ol"},"Define the app dev-orient schema"),(0,a.kt)("li",{parentName:"ol"},"Develop the module by implementing gRPC interfaces")),(0,a.kt)("p",null,"The first two steps primarily involve communication with the application development team, and the specific details are not included in this tutorial. This tutorial begins with the subsequent two steps."),(0,a.kt)("h2",{id:"set-up-a-developing-environment"},"Set up a developing environment"),(0,a.kt)("p",null,"Developing a Kusion module includes defining a KCL schema and developing a module binary in golang. We will provide a scaffold repository and a new command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion mod init")," to help developers set up the developing environment easily."),(0,a.kt)("p",null,"After executing the command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod init <your-module-name>\n")),(0,a.kt)("p",null,"Kusion will download a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion-module-scaffolding"},"scaffold repository")," and rename this project with your module name. The scaffold contains code templates and all files needed for developing a Kusion module."),(0,a.kt)("h2",{id:"developing"},"Developing"),(0,a.kt)("p",null,"The scaffold repository directory structure is shown below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ tree kawesome/\n.\n\u251c\u2500\u2500 example\n\u2502\xa0\xa0 \u251c\u2500\u2500 dev\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 example_workspace.yaml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 kcl.mod\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 main.k\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 stack.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 project.yaml\n\u251c\u2500\u2500 kawesome.k\n\u251c\u2500\u2500 kcl.mod\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 Makefile\n    \u251c\u2500\u2500 go.mod\n    \u251c\u2500\u2500 go.sum\n    \u251c\u2500\u2500 kawesome_generator.go\n    \u2514\u2500\u2500 kawesome_generator_test.go\n")),(0,a.kt)("p",null,"When developing a Kusion module with the scaffold repository, you could follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Define the module name and version")," "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For go files. Rename the module name in the ",(0,a.kt)("inlineCode",{parentName:"li"},"go.mod")," and related files to your Kusion module name.")),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"}," module kawsome\n go 1.22\n require (\n     ...\n )\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"For KCL files. Rename package name and version in the ",(0,a.kt)("inlineCode",{parentName:"li"},"kcl.mod"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-toml"},' [package]\n name = "kawesome"\n version = 0.1.0\n')),(0,a.kt)("p",{parentName:"li"}," We assume the module named is ",(0,a.kt)("inlineCode",{parentName:"p"},"kawesome")," and the version is ",(0,a.kt)("inlineCode",{parentName:"p"},"0.1.0")," in this guide.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Define the dev-orient schemas"),". They would be initialized by app developers. In this scaffold repository, we've defined a schema named Kawesome in ",(0,a.kt)("inlineCode",{parentName:"p"},"kawesome.k")," that consists of two resources ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RandomPassword")," and they will be generated into a Kubernetes Service and a Terraform RandomPassword later."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'schema Kawesome: \n""" Kawesome is a sample module schema consisting of Service\nand RandomPassword\n\nAttributes\n----------\nservice: Service, default is Undefined, required. \n    The exposed port of Workload, which will be generated into Kubernetes Service. \nrandomPassword: RandomPassword, default is Undefined, required. \n    The sensitive random string, which will be generated into Terraform random_password. \n\nExamples\n--------\nimport kawesome as ks\n\naccessories: {\n    "kusionstack/kawesome@v0.1.0": ks.Kawesome {\n        service: ks.Service {\n            port: 8080\n        }\n        randomPassword: ks.RandomPassword {\n            length: 20\n        }\n    }\n}\n"""\n\n# The exposed port of Workload, which will be generated into Kubernetes Service. \nservice:                    Service\n\n# The sensitive random string, which will be generated into Terraform random_password. \nrandomPassword:             RandomPassword\n')),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Implement the gRPC generate interface.")," The ",(0,a.kt)("inlineCode",{parentName:"li"},"generate")," interface consumes the application developer's config described in the ",(0,a.kt)("a",{parentName:"li",href:"../app-configuration"},(0,a.kt)("inlineCode",{parentName:"a"},"AppConfiguration"))," and the platform engineer's config described in the ",(0,a.kt)("a",{parentName:"li",href:"../workspace"},(0,a.kt)("inlineCode",{parentName:"a"},"workspace"))," to generate all infrastructure resources represented by this module.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'func (k *Kawesome) Generate(_ context.Context, request *module.GeneratorRequest) (*module.GeneratorResponse, error){\n    // generate your infrastructure resoruces\n}\n\n// Patcher contains fields should be patched into the workload corresponding fields\ntype Patcher struct {\n    // Environments represent the environment variables patched to all containers in the workload.\n    Environments []v1.EnvVar `json:"environments" yaml:"environments"`\n    // Labels represent the labels patched to both the workload and pod.\n    Labels map[string]string `json:"labels" yaml:"labels"`\n    // Annotations represent the annotations patched to both the workload and pod.\n    Annotations map[string]string `json:"annotations" yaml:"annotations"`\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorRequest")," contains the application developer's config, platform engineer's config, workload config and related metadata a module could need to generate infrastructure resources.\nIn the ",(0,a.kt)("inlineCode",{parentName:"p"},"GeneratorResponse"),", there are two fields, ",(0,a.kt)("inlineCode",{parentName:"p"},"Resources")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Patchers"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Resource")," represents resources that should operated by Kusion and they will be appended into the ",(0,a.kt)("a",{parentName:"p",href:"../spec"},"Spec"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"Patchers")," are used to patch other resources. In this version, Kusion will parse them and patch workload corresponding fields."),(0,a.kt)("h2",{id:"publish"},"Publish"),(0,a.kt)("p",null,"Publish the Kusion module to an OCI registry with the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion mod push"),"."),(0,a.kt)("p",null,"Publish a stable version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod push /path/to/your-module oci://ghcr.io/kusionstack --latest=true --creds <YOUR_TOKEN>\n")),(0,a.kt)("p",null,"Publish a pre-release version"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kusion mod push /path/to/your-module oci://ghcr.io/kusionstack --latest=false --creds <YOUR_TOKEN>\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The OCI URL format is ",(0,a.kt)("inlineCode",{parentName:"p"},"oci://<domain>/<org>")," and please ensure that your token has the appropriate permissions to write to the registry.")),(0,a.kt)("p",null,"More details can be found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion mod push")," reference doc."),(0,a.kt)("h2",{id:"initialize-the-workspace"},"Initialize the workspace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"modules: \n  kusionstack/kawesome@0.1.0: \n    default: \n      service: \n        labels: \n          kusionstack.io/module-name: kawesome\n")),(0,a.kt)("p",null,"Initialize module platform configuration in the ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace.yaml")," to standardize the module's behavior. Please notice the key of this module should match this format: ",(0,a.kt)("inlineCode",{parentName:"p"},"namespace/moduleName@version")))}m.isMDXComponent=!0}}]);