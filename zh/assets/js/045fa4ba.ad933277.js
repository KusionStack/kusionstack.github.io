"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[65517],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(f,i(i({ref:n},p),{},{components:t})):a.createElement(f,i({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},31178:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=t(87462),o=(t(67294),t(3905));const r={},i="Workspace",s={unversionedId:"concepts/workspace",id:"version-v0.10/concepts/workspace",title:"Workspace",description:"Definition",source:"@site/docs_versioned_docs/version-v0.10/3-concepts/4-workspace.md",sourceDirName:"3-concepts",slug:"/concepts/workspace",permalink:"/zh/docs/v0.10/concepts/workspace",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/3-concepts/4-workspace.md",tags:[],version:"v0.10",lastUpdatedBy:"liu-hm19",lastUpdatedAt:1732269665,formattedLastUpdatedAt:"2024\u5e7411\u670822\u65e5",sidebarPosition:4,frontMatter:{},sidebar:"kusion",previous:{title:"Kusion Module",permalink:"/zh/docs/v0.10/concepts/kusion-module"},next:{title:"AppConfiguration",permalink:"/zh/docs/v0.10/concepts/app-configuration"}},l={},c=[{value:"Definition",id:"definition",level:2},{value:"Structure",id:"structure",level:2},{value:"Workflow",id:"workflow",level:2}],p={toc:c};function d(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"workspace"},"Workspace"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A workspace is a logical concept that represents a target environment for deploying a stack. It contains platform configurations, including a set of configurations, Kubeconfig, and provider authentication information, all of which can be reused by multiple stacks. We recommend organizing workspaces by SDLC (Software Development Life Cycle) phases or by cloud vendors. For example, workspaces could be named ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"staging"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"prod"),", or according to cloud vendors such as ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Azure"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Alibaba Cloud"),"."),(0,o.kt)("p",null,"For clarity, workspace data is categorized into two types: configuration and secret. The configuration data is non-sensitive and is stored locally in YAML files, including module inputs, runtime configurations, and backend configurations. The secret data is sensitive and should be stored as workspace variables. For example, when using AWS, users must set the correct workspace variables for ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_ACCESS_KEY_ID")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"AWS_SECRET_ACCESS_KEY"),"."),(0,o.kt)("p",null,"If a set of data items serves the same target and contains one or more sensitive data items, then the entire set should be managed using environment variables. This approach ensures a consistent and seamless user experience."),(0,o.kt)("p",null,"Each stack must be associated with a single workspace, and ",(0,o.kt)("strong",{parentName:"p"},"the stack's name must be the same as the workspace it will be deployed to"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"workspace-project-stack",src:t(27137).Z,width:"587",height:"362"})),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In product design, Kusion does not support deploying to multiple clouds or multiple regions within a single workspace. While users can technically define a module that provisions resources across multiple clouds or regions, Kusion does not recommend this practice and will not provide technical support for such configurations. If a platform team needs to manage resources across multiple clouds or regions, they should create separate workspaces.")),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("p",null,"The configuration of a workspace is stored in a single YAML file, which consists of three components: ",(0,o.kt)("inlineCode",{parentName:"p"},"modules"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"runtimes"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"backends"),"."),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"module")," configuration comprises default configs and several patchers, where the name of each patcher must not be ",(0,o.kt)("strong",{parentName:"p"},"default"),". Configurations in the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," block will be applied to all applications in this workspace and configurations in the patcher block will only be applied to projects in the ",(0,o.kt)("inlineCode",{parentName:"p"},"projectSelector"),". Values in patchers will override default configs with the same field name.\nFor the default configuration or a specific patcher, field keys must be the same as module input field names defined by the module. Module configurations can be found in the ",(0,o.kt)("a",{parentName:"p",href:"../reference/modules"},"Kusion Modules")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"runtime")," configuration currently supports Kubernetes and Terraform, where the former includes the field ",(0,o.kt)("inlineCode",{parentName:"p"},"kubeConfig")," to specify the path of Kube Config, and the latter contains data for Terraform providers, which vary across different providers. For Terraform providers, sensitive data should be stored in environment variables."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"backend")," configuration currently supports local, oss, s3, database, and http. This defines the backend for state, intent, and other Kusion data that may require storage in the future. This format requires that all Kusion data share the same backend. As with sensitive data in the runtime configuration, these details should also be stored in environment variables. Backend configurations can be found in the ",(0,o.kt)("a",{parentName:"p",href:"backend-configuration"},"Backend Configuration")),(0,o.kt)("p",null,"An example is shown as below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Module input, each with the format standard\uff1a\n# # <ModuleName>:\n# #   default: # default configurations, applied to all projects\n# #     <ModuleInput_Field1>: <value1>\n# #     <ModuleInput_Field2>: <value2>\n# #     ...\n# #   <patcherName>: #patcher configurations, applied to the projects assigned in projectSelector\n# #     <ModuleInput_Field1>: <value1_Override>\n# #     ...\n# #     projectSelector:\n# #     - <projectName1>\n# #     ...\nmodules:\n  database:\n    default:\n      provider: aws\n      size: 20\n      instanceClass: db.t3.micro\n      securityIPs:\n      - 10.0.0.0/18\n    smallClass:\n      size: 50\n      instanceClass: db.t3.small\n      projectSelector:\n      - foo\n      - bar\n    largeClass:\n      instanceClass: db.t3.large\n      projectSelector:\n      - baz\n    \n# A set of runtime configs, each with the format standard:\n# # <RuntimeName>:\n# #   <RuntimeConfig_Field1>: <value1>\n# #   <RuntimeConfig_Field2>: <value2>\n# #   ...\nruntimes:\n  kubernetes:\n    kubeConfig: /etc/kubeconfig.yaml\n  terraform:\n    aws:\n      version: 1.0.4\n      source: hashicorp/aws\n      region: us-east-1\n      \n# A set of backend configs, each with the following format standard:\n# # <BackendName>:\n# #   <BackendConfig_Field1>: <value1>\n# #   <BackendConfig_Field2>: <value2>\n# #   ...\nbackends:\n  s3: \n    bucket: kusion\n    region: us-east-1\n")),(0,o.kt)("h2",{id:"workflow"},"Workflow"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Write the ",(0,o.kt)("inlineCode",{parentName:"li"},"workspace.yaml")," with the format shown above and fulfill all necessary fields."),(0,o.kt)("li",{parentName:"ol"},"Create a workspace with ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion worksapce create <name> -f <workspaceFilePath>"),"\nA new workspace configuration file named ",(0,o.kt)("inlineCode",{parentName:"li"},"<name>.yaml")," will be created under the path ",(0,o.kt)("inlineCode",{parentName:"li"},"$KUSION_PATH/.workspace"),", and the validation will be done before the creation."),(0,o.kt)("li",{parentName:"ol"},"Update a workspace with ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion worksapce update <name> -f <workspaceFilePath>"),"\nThe workspace will be updated with the latest values."),(0,o.kt)("li",{parentName:"ol"},"Delete a workspace with ",(0,o.kt)("inlineCode",{parentName:"li"},"kusion workspace delete <name>")," if you don't need it anymore.")),(0,o.kt)("p",null,"More workspace commands can be found in the ",(0,o.kt)("a",{parentName:"p",href:"../reference/commands/kusion-workspace"},"reference"),"."))}d.isMDXComponent=!0},27137:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/workspace-project-stack-35aa4e25ab80fe4a1a6bbfbbe024e127.png"}}]);