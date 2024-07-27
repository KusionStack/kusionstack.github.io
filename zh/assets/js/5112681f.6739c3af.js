"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[58651],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={},r="Expose Application Service Deployed on CSP Kubernetes",s={unversionedId:"user-guides/cloud-resources/expose-service",id:"version-v0.10/user-guides/cloud-resources/expose-service",title:"Expose Application Service Deployed on CSP Kubernetes",description:"Deploying application on the Kubernetes provided by CSP (Cloud Service Provider) is convenient and reliable, which is adopted by many enterprises. Kusion has a good integration with CSP Kubernetes service. You can deploy your application to the Kubernetes cluster, and expose the service in a quite easy way.",source:"@site/docs_versioned_docs/version-v0.10/5-user-guides/1-cloud-resources/2-expose-service.md",sourceDirName:"5-user-guides/1-cloud-resources",slug:"/user-guides/cloud-resources/expose-service",permalink:"/zh/docs/v0.10/user-guides/cloud-resources/expose-service",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.10/5-user-guides/1-cloud-resources/2-expose-service.md",tags:[],version:"v0.10",lastUpdatedBy:"Ekjot Singh",lastUpdatedAt:1722091057,formattedLastUpdatedAt:"2024\u5e747\u670827\u65e5",sidebarPosition:2,frontMatter:{},sidebar:"kusion",previous:{title:"Deliver the WordPress Application with Cloud RDS",permalink:"/zh/docs/v0.10/user-guides/cloud-resources/database"},next:{title:"Deploy Application",permalink:"/zh/docs/v0.10/user-guides/working-with-k8s/deploy-application"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Expose Service Publicly",id:"expose-service-publicly",level:2},{value:"Set up Workspace",id:"set-up-workspace",level:3},{value:"Write Configuration Code",id:"write-configuration-code",level:3},{value:"Preview and Apply",id:"preview-and-apply",level:3},{value:"Verify Accessibility",id:"verify-accessibility",level:3},{value:"Expose Service Inside Cluster",id:"expose-service-inside-cluster",level:2},{value:"Summary",id:"summary",level:2}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"expose-application-service-deployed-on-csp-kubernetes"},"Expose Application Service Deployed on CSP Kubernetes"),(0,a.kt)("p",null,"Deploying application on the Kubernetes provided by CSP (Cloud Service Provider) is convenient and reliable, which is adopted by many enterprises. Kusion has a good integration with CSP Kubernetes service. You can deploy your application to the Kubernetes cluster, and expose the service in a quite easy way. "),(0,a.kt)("p",null,"This tutorial demonstrates how to expose service of the application deployed on CSP Kubernetes. And the responsibilities of platform engineers and application developers are also clearly defined. In this article, ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://github.com/KusionStack/konfig/blob/main/example/nginx/dev/main.k"},"exposing the service of nginx"),' (referred to "the example" in the below)'),"  is given as an example."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Create a Kubernetes cluster, the following CSP Kubernetes services are supported."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/kubernetes"},"Alibaba Cloud Container Service for Kubernetes (ACK)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://aws.amazon.com/eks"},"Amazon Elastic Kubernetes Service (EKS)"),".")),(0,a.kt)("p",null,"Get the example from the official example repository."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/KusionStack/konfig.git && cd konfig/example/nginx\n")),(0,a.kt)("h2",{id:"expose-service-publicly"},"Expose Service Publicly"),(0,a.kt)("p",null,"If you want the application can be accessed from outside the cluster, you should expose the service publicly. Follow the steps below, you will simply hit the goal."),(0,a.kt)("h3",{id:"set-up-workspace"},"Set up Workspace"),(0,a.kt)("p",null,"Create the workspace as the target where the application will be deployed to. The workspace is usually set up by platform engineers, which contains platform-standard and application-agnostic configurations. The workspace configurations are organized through a YAML file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  port:\n    default:\n      type: alicloud\n      annotations:\n        service.beta.kubernetes.io/alibaba-cloud-loadbalancer-spec: slb.s1.small\n\nruntimes:\n  kubernetes:\n    kubeconfig: "<your kube-config file path>"\n')),(0,a.kt)("p",null,"The YAML shown above gives an example of the workspace configuration to expose service on ACK. The file contains two top-level blocks ",(0,a.kt)("inlineCode",{parentName:"p"},"modules")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"runtimes"),", and the block ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"modules"),",  ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"runtimes"),". "),(0,a.kt)("p",null,"The block ",(0,a.kt)("inlineCode",{parentName:"p"},"port")," contains the workspace configuration of module port, which has the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: the CSP providing Kubernetes service, support ",(0,a.kt)("inlineCode",{parentName:"li"},"alicloud")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"aws")),(0,a.kt)("li",{parentName:"ul"},"annotations: annotations attached to the service, should be a map"),(0,a.kt)("li",{parentName:"ul"},"labels: labels attached to the service, should be a map")),(0,a.kt)("p",null,"The block ",(0,a.kt)("inlineCode",{parentName:"p"},"kubernetes")," contains the kubernetes related configuration, which has the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"kubeconfig: the kube-config file path, which is got after creating the cluster.")),(0,a.kt)("p",null,"You can also configure kube-config by environment variables, which has higher priority."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'export KUBE_CONFIG="<kube-config file>"\n')),(0,a.kt)("p",null,"Then, create the workspace with the configuration file. Be attention, the workspace name must be the same as the stack name. The following command creates a workspace named ",(0,a.kt)("inlineCode",{parentName:"p"},"dev")," with configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"kusion workspace create prod workspace.yaml\n")),(0,a.kt)("h3",{id:"write-configuration-code"},"Write Configuration Code"),(0,a.kt)("p",null,"After creating workspace, you should write application configuration code, which only contains simple and application-centric configurations. This step is usually accomplished by application developers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.container as c\nimport catalog.models.schema.v1.workload.network as n\n\nnginx: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            nginx: c.Container {\n                image = "nginx:1.25.2"\n                resources: {\n                    "cpu": "500m"\n                    "memory": "512Mi"\n                }\n            }\n        }\n        replicas: 1\n        ports: [\n            n.Port {\n                type: "aliyun"\n                port: 80\n                protocol: "TCP"\n                public: True\n            }\n        ]\n    }\n}\n')),(0,a.kt)("p",null,"The code shown above describes how to expose service publicly on ACK. Kusion use schema ",(0,a.kt)("inlineCode",{parentName:"p"},"Port")," to describe the network configuration, the primary fields of Port are as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"port: port number to expose service"),(0,a.kt)("li",{parentName:"ul"},"protocol: protocol to expose service, support ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP")," and  ",(0,a.kt)("inlineCode",{parentName:"li"},"UDP")),(0,a.kt)("li",{parentName:"ul"},"public: whether to public the service")),(0,a.kt)("p",null,"To public the service, you should set ",(0,a.kt)("inlineCode",{parentName:"p"},"public")," as True. Besides, schema ",(0,a.kt)("inlineCode",{parentName:"p"},"Service")," should be used to describe the workload configuration."),(0,a.kt)("p",null,"That's all what an application developer need to configure! Next, preview and apply the configuration, the application will get deployed and exposed publicly."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Kusion uses Load Balancer (LB) provided by the CSP to expose service publicly. For more detailed network configuration, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://www.kusionstack.io/docs/kusion/configuration-walkthrough/networking"},"Application Networking"))),(0,a.kt)("h3",{id:"preview-and-apply"},"Preview and Apply"),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion preview")," under the stack path, you will get what will be created in the real infrastructure. The picture below gives the preview result of the example. A Namespace, Service and Deployment will be created, which meets the expectation. The service name has a suffix ",(0,a.kt)("inlineCode",{parentName:"p"},"public"),", which shows it can be accessed publicly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"preview-public",src:n(85091).Z,width:"1540",height:"262"})),(0,a.kt)("p",null,"Then, execute ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply --yes")," to do the real deploying job. Just a command and a few minutes, you have accomplished deploying application and expose it publicly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"apply-public",src:n(97932).Z,width:"1558",height:"480"})),(0,a.kt)("h3",{id:"verify-accessibility"},"Verify Accessibility"),(0,a.kt)("p",null,"In the example, the kubernetes Namespace whose name is nginx, and a Service and Deployment under the Namespace should be created. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get")," to check, the Service whose type is ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," and Deployment are created indeed. And the Service has ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," 106.5.190.109, which means it can be accessed from outside the cluster."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k8s-resource-public",src:n(68162).Z,width:"1662",height:"216"})),(0,a.kt)("p",null,"Visit the ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL-IP")," via browser, the correct result is returned, which illustrates the servie get publicly exposed successfully."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"result-public",src:n(65377).Z,width:"1494",height:"682"})),(0,a.kt)("h2",{id:"expose-service-inside-cluster"},"Expose Service Inside Cluster"),(0,a.kt)("p",null,"If you only need the application can be accessed inside the cluster, just configure ",(0,a.kt)("inlineCode",{parentName:"p"},"Public")," as False in schema ",(0,a.kt)("inlineCode",{parentName:"p"},"Port"),". There is no need to change the workspace, which means an application developer can easily change a service exposure range, without the involvement of platform engineers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import catalog.models.schema.v1 as ac\nimport catalog.models.schema.v1.workload as wl\nimport catalog.models.schema.v1.workload.network as n\n\nnginx: ac.AppConfiguration {\n    workload: wl.Service {\n        ...\n        ports: [\n            n.Port {\n                ...\n                public: False\n            }\n        ]\n    }\n}\n")),(0,a.kt)("p",null,"Execute ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion apply --yes"),", the generated Service has suffix ",(0,a.kt)("inlineCode",{parentName:"p"},"private"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"apply-private",src:n(96057).Z,width:"1612",height:"494"})),(0,a.kt)("p",null,"And the Service type is ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP"),", only has ",(0,a.kt)("inlineCode",{parentName:"p"},"CLUSTER_IP")," and no ",(0,a.kt)("inlineCode",{parentName:"p"},"EXTERNAL_IP"),", which means it cannot get accessed from outside the cluster. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"k8s-resource-private",src:n(64600).Z,width:"1542",height:"210"})),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"This tutorial demonstrates how to expose service of the application deployed on the CSP Kubernetes. By platform engineers' setup of workspace, and application developers' configuration of schema Port, Kusion enables you expose service simply and efficiently."))}u.isMDXComponent=!0},96057:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/apply-private-a1d1f3a1b5afac81cea19f189d08222d.png"},97932:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/apply-public-d89cdb3ba9d96904e1820bfbcf4671d8.png"},64600:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/k8s-resource-private-62ab14b1de35205866b64a0d63180450.png"},68162:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/k8s-resource-public-66ffcb206b33c5fc6f1a779bc10b3e93.png"},85091:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/preview-public-eea90eec123cd2fc13536be2b645e900.png"},65377:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/result-public-4bf3f757b0a43c78464ec9bcd75a4b2f.png"}}]);