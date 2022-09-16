"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5170],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(k,i(i({ref:n},l),{},{components:t})):r.createElement(k,i({ref:n},l))}));function m(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,i=new Array(o);i[0]=d;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9499:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=t(87462),s=(t(67294),t(3905));const o={},i="From Kubernetes",a={unversionedId:"user_docs/guides/adopting/from_kubernetes",id:"user_docs/guides/adopting/from_kubernetes",title:"From Kubernetes",description:"1. Kubernetes OpenAPI Spec",source:"@site/docs/user_docs/guides/adopting/from_kubernetes.md",sourceDirName:"user_docs/guides/adopting",slug:"/user_docs/guides/adopting/from_kubernetes",permalink:"/docs/user_docs/guides/adopting/from_kubernetes",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/adopting/from_kubernetes.md",tags:[],version:"current",lastUpdatedBy:"Peefy",lastUpdatedAt:1663294255,formattedLastUpdatedAt:"9/16/2022",frontMatter:{},sidebar:"user_docs",previous:{title:"\u5f00\u59cb\u63a5\u5165 Kusion",permalink:"/docs/user_docs/guides/adopting/"},next:{title:"Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/"}},p={},u=[{value:"1. Kubernetes OpenAPI Spec",id:"1-kubernetes-openapi-spec",level:2},{value:"2. KCL OpenAPI \u652f\u6301",id:"2-kcl-openapi-\u652f\u6301",level:2},{value:"3. \u4ece Kubernetes \u6a21\u578b\u8fc1\u79fb\u5230 Kusion",id:"3-\u4ece-kubernetes-\u6a21\u578b\u8fc1\u79fb\u5230-kusion",level:2},{value:"1. \u4f7f\u7528\u5df2\u6709\u7684 kusion_models \u6a21\u578b\u5305",id:"1-\u4f7f\u7528\u5df2\u6709\u7684-kusion_models-\u6a21\u578b\u5305",level:3},{value:"2. \u521b\u5efa\u81ea\u5b9a\u4e49\u7684 models \u524d\u7aef\u6a21\u578b",id:"2-\u521b\u5efa\u81ea\u5b9a\u4e49\u7684-models-\u524d\u7aef\u6a21\u578b",level:3},{value:"1. Kubernetes Deployment \u8f6c\u4e3a KCL Schema",id:"1-kubernetes-deployment-\u8f6c\u4e3a-kcl-schema",level:4},{value:"2. \u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",id:"2-\u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b",level:4},{value:"3. \u6279\u91cf\u8fc1\u79fb\u914d\u7f6e\u6570\u636e",id:"3-\u6279\u91cf\u8fc1\u79fb\u914d\u7f6e\u6570\u636e",level:4},{value:"4. \u4ece Kubernetes CRD \u8fc1\u79fb\u5230 Kusion",id:"4-\u4ece-kubernetes-crd-\u8fc1\u79fb\u5230-kusion",level:2}],l={toc:u};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"from-kubernetes"},"From Kubernetes"),(0,s.kt)("h2",{id:"1-kubernetes-openapi-spec"},"1. Kubernetes OpenAPI Spec"),(0,s.kt)("p",null,"\u4ece Kubernetes 1.4 \u5f00\u59cb\uff0c\u5f15\u5165\u4e86\u5bf9 OpenAPI \u89c4\u8303\uff08\u5728\u6350\u8d60\u7ed9 Open API Initiative \u4e4b\u524d\u79f0\u4e3a swagger 2.0\uff09\u7684 alpha \u652f\u6301\uff0cAPI \u63cf\u8ff0\u9075\u5faa ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md"},"OpenAPI \u89c4\u8303 2.0"),"\uff0c\u4ece Kubernetes 1.5 \u5f00\u59cb\uff0cKubernetes \u80fd\u591f\u76f4\u63a5\u4ece",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kube-openapi"},"\u6e90\u7801\u81ea\u52a8\u5730\u63d0\u53d6\u6a21\u578b\u5e76\u751f\u6210 OpenAPI \u89c4\u8303"),"\uff0c\u81ea\u52a8\u5316\u5730\u4fdd\u8bc1\u4e86\u89c4\u8303\u548c\u6587\u6863\u4e0e\u64cd\u4f5c/\u6a21\u578b\u7684\u66f4\u65b0\u5b8c\u5168\u540c\u6b65\u3002"),(0,s.kt)("p",null,"\u6b64\u5916\uff0cKubernetes CRD \u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions/#validation"},"OpenAPI v3.0 validation")," \u6765\u63cf\u8ff0\uff08\u9664\u5185\u7f6e\u5c5e\u6027 apiVersion\u3001kind\u3001metadata \u4e4b\u5916\u7684\uff09\u81ea\u5b9a\u4e49 schema\uff0c\u5728 CR \u7684\u521b\u5efa\u548c\u66f4\u65b0\u9636\u6bb5\uff0cAPIServer \u4f1a\u4f7f\u7528\u8fd9\u4e2a schema \u5bf9 CR \u7684\u5185\u5bb9\u8fdb\u884c\u6821\u9a8c\u3002"),(0,s.kt)("h2",{id:"2-kcl-openapi-\u652f\u6301"},"2. KCL OpenAPI \u652f\u6301"),(0,s.kt)("p",null,"KCLOpenAPI \u5de5\u5177\u652f\u6301\u4ece OpenAPI/CRD \u5b9a\u4e49\u63d0\u53d6\u5e76\u751f\u6210 KCL schema. \u5728",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/cli/openapi/spec"},"KCLOpenapi Spec"),"\u4e2d\u660e\u786e\u5b9a\u4e49\u4e86 OpenAPI \u89c4\u8303\u4e0e KCL \u8bed\u8a00\u4e4b\u95f4\u7684\u6620\u5c04\u5173\u7cfb\u3002"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/install"},"\u5b89\u88c5 Kusion \u5de5\u5177\u5305"),"\u7684\u540c\u65f6\u4f1a\u9ed8\u8ba4\u5b89\u88c5 KCLOpenapi \u5de5\u5177\uff0cKCLOpenapi \u5de5\u5177\u7684\u4f7f\u7528\u548c\u793a\u4f8b\u53ef\u53c2\u89c1",(0,s.kt)("a",{parentName:"p",href:"/docs/reference/cli/openapi"},"KCLOpenAPI \u5de5\u5177")),(0,s.kt)("h2",{id:"3-\u4ece-kubernetes-\u6a21\u578b\u8fc1\u79fb\u5230-kusion"},"3. \u4ece Kubernetes \u6a21\u578b\u8fc1\u79fb\u5230 Kusion"),(0,s.kt)("p",null,"Kubernetes \u5185\u7f6e\u6a21\u578b\u7684\u5b8c\u6574 OpenAPI \u5b9a\u4e49\u5b58\u653e\u5728 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/api/openapi-spec/swagger.json"},"Kubernetes openapi-spec \u6587\u4ef6"),"\u3002\u4ee5\u8be5\u6587\u4ef6\u4f5c\u4e3a\u8f93\u5165\uff0cKCLOpenapi \u5de5\u5177\u80fd\u591f\u751f\u6210\u76f8\u5e94\u7248\u672c\u7684\u5168\u90e8\u6a21\u578b schema. \u63a5\u4e0b\u6765\u4ee5\u53d1\u5e03\u90e8\u7f72\u573a\u666f\u4e3a\u4f8b\uff0c\u6f14\u793a\u4ece Kubernetes \u8fc1\u79fb\u5230 Kusion \u7684\u6d41\u7a0b\u3002\u5047\u8bbe\u60a8\u7684\u9879\u76ee\u6b63\u5728\u4f7f\u7528 ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/controllers/deployment/"},"Kubernetes Deployment")," \u5b9a\u4e49\u53d1\u5e03\u90e8\u7f72\u914d\u7f6e\uff0c\u8fc1\u79fb\u5230 Kusion \u53ea\u9700\u8981\u5982\u4e0b\u6b65\u9aa4\uff1a"),(0,s.kt)("h3",{id:"1-\u4f7f\u7528\u5df2\u6709\u7684-kusion_models-\u6a21\u578b\u5305"},"1. \u4f7f\u7528\u5df2\u6709\u7684 kusion_models \u6a21\u578b\u5305"),(0,s.kt)("p",null,"\u5728 Konfig \u7684 kusion_models \u76ee\u5f55\u4e2d\u5df2\u7ecf\u4fdd\u5b58\u4e86\u4e00\u4efd\u7ecf\u8fc7\u826f\u597d\u62bd\u8c61\u7684\u6a21\u578b \u2014\u2014 Server \u6a21\u578b\uff0c\u70b9\u6b64\u67e5\u770b ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"Server Schema"),"\u3002\u81f3\u4e8e\u5b58\u91cf\u7684 Kubernetes \u914d\u7f6e\u6570\u636e\uff0cKusion \u8ba1\u5212\u63d0\u4f9b kube2kcl \u8f6c\u6362\u5de5\u5177\uff0c\u5c06\u5176\u8f6c\u6362\u4e3a KCL \u63cf\u8ff0\u7684\u57fa\u4e8e\u4e0a\u8ff0 Server \u6a21\u578b\u7684\u914d\u7f6e\u5b9e\u4f8b\uff0c\u8fd9\u4e00\u5de5\u5177\u6b63\u5728\u5f00\u53d1\u4e2d\uff0c\u8fd1\u671f\u5373\u53ef\u5f00\u653e\u4f7f\u7528\u3002\u5b8c\u6210\u914d\u7f6e\u6a21\u578b\u548c\u6570\u636e\u8fc1\u79fb\u4e4b\u540e\uff0c\u63a5\u4e0b\u6765\u53ea\u9700\u8981\u6309\u7167 ",(0,s.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/"},"Kubernetes - \u4f7f\u7528 Kusion \u8fdb\u884c\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4"),"\u4e2d\u7684\u6307\u5f15\u5b9a\u4e49\u5e76\u90e8\u7f72\u9879\u76ee\u5373\u53ef\u3002"),(0,s.kt)("h3",{id:"2-\u521b\u5efa\u81ea\u5b9a\u4e49\u7684-models-\u524d\u7aef\u6a21\u578b"},"2. \u521b\u5efa\u81ea\u5b9a\u4e49\u7684 models \u524d\u7aef\u6a21\u578b"),(0,s.kt)("p",null,"\u5f53\u5df2\u6709\u7684 kusion_models \u6a21\u578b\u5305\u4e0d\u8db3\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\u65f6\uff0c\u60a8\u8fd8\u53ef\u4ee5\u8bbe\u8ba1\u81ea\u5b9a\u4e49\u7684\u524d\u7aef\u6a21\u578b\u5305\u3002\u5728 Konfig \u7684 kusion_kubernetes \u76ee\u5f55\u4e2d\u5df2\u7ecf\u4fdd\u5b58\u4e86\u4e00\u4efd\u751f\u6210\u597d\u7684 Kubernetes 1.22 \u7248\u672c\u6a21\u578b\uff0c\u60a8\u53ef\u5728\u6b64\u57fa\u7840\u4e0a\u76f4\u63a5\u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b\u3002\u5e76\u4e14\u60a8\u53ef\u4eff\u7167 kusion_models \u7684\u6a21\u5f0f\uff0c\u5f00\u53d1\u81ea\u5b9a\u4e49\u811a\u672c\uff0c\u5b8c\u6210\u914d\u7f6e\u6570\u636e\u7684\u8fc1\u79fb\u3002\u6b64\u540e\u9879\u76ee\u90e8\u7f72\u53c2\u8003 ",(0,s.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/"},"Kubernetes - \u4f7f\u7528 Kusion \u8fdb\u884c\u5e94\u7528\u90e8\u7f72\u8fd0\u7ef4")," \u6307\u5f15\u5373\u53ef\u3002"),(0,s.kt)("h4",{id:"1-kubernetes-deployment-\u8f6c\u4e3a-kcl-schema"},"1. Kubernetes Deployment \u8f6c\u4e3a KCL Schema"),(0,s.kt)("p",null,"\u5728 Konfig \u7684 base/pkg/kusion_kubernetes \u76ee\u5f55\u4e2d\uff0c\u6211\u4eec\u5df2\u7ecf\u4fdd\u5b58\u4e86\u4e00\u4efd\u751f\u6210\u7684 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/deployment.k"},"KCL \u6587\u4ef6\uff08Kubernetes 1.22 \u7248\u672c\uff09"),"\uff0c\u5e76\u751f\u6210\u4e86\u5bf9\u5e94\u7684 \u6a21\u578b\u6587\u6863\u3002\u60a8\u53ef\u8df3\u8fc7\u8be5\u6b65\u9aa4\uff0c\u4f7f\u7528\u5df2\u751f\u6210\u7684\u6a21\u578b\u5305\uff0c\u6216\u8005\u4f60\u53ef\u81ea\u884c\u751f\u6210\u7279\u5b9a\u7248\u672c\u3002"),(0,s.kt)("p",null,"\u4ece ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/release-1.23/api/openapi-spec/swagger.json"},"Kubernetes 1.23 \u7248\u672c\u7684 openapi-spec \u6587\u4ef6"),"\u4e2d\uff0c\u53ef\u4ee5\u627e\u5230 apps/v1.Deployment \u6a21\u578b\u76f8\u5173\u7684\u5b9a\u4e49\uff0c\u622a\u53d6\u7247\u6bb5\u5982\u4e0b\uff1a"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "definitions": {\n        "io.k8s.api.apps.v1.Deployment": {\n            "description": "Deployment enables declarative updates for Pods and ReplicaSets.",\n            "properties": {\n                "apiVersion": {\n                    "description": "APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#resources",\n                    "type": "string"\n                },\n                "kind": {\n                    "description": "Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds",\n                    "type": "string"\n                },\n                "metadata": {\n                    "$ref": "#/definitions/io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta",\n                    "description": "Standard object\'s metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata"\n                },\n                "spec": {\n                    "$ref": "#/definitions/io.k8s.api.apps.v1.DeploymentSpec",\n                    "description": "Specification of the desired behavior of the Deployment."\n                },\n                "status": {\n                    "$ref": "#/definitions/io.k8s.api.apps.v1.DeploymentStatus",\n                    "description": "Most recently observed status of the Deployment."\n                }\n            },\n            "type": "object",\n            "x-kubernetes-group-version-kind": [\n                {\n                    "group": "apps",\n                    "kind": "Deployment",\n                    "version": "v1"\n                }\n            ]\n        }\n    },\n    "info": {\n        "title": "Kubernetes",\n        "version": "unversioned"\n    },\n    "paths": {},\n    "swagger": "2.0"\n}\n')),(0,s.kt)("p",null,"\u5c06\u4ee5\u4e0a\u8ff0 spec \u4fdd\u5b58\u4e3a deployment.json\uff0c\u6267\u884c ",(0,s.kt)("inlineCode",{parentName:"p"},"kclopenapi generate model -f deployment.json"),"\uff0c\u5c06\u5728\u5f53\u524d\u5de5\u4f5c\u7a7a\u95f4\u751f\u6210\u6240\u6709\u76f8\u5173\u7684 KCL schema \u6587\u4ef6\uff0c\u5982 ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_kubernetes/api/apps/v1/deployment.k"},"KCL Deployment \u6587\u4ef6\uff08Kubernetes 1.22 \u7248\u672c\uff09")," \u6240\u793a\u3002"),(0,s.kt)("h4",{id:"2-\u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"},"2. \u7f16\u5199\u81ea\u5b9a\u4e49\u524d\u7aef\u6a21\u578b"),(0,s.kt)("p",null,"\u7531\u4e8e Kubernetes \u5185\u7f6e\u6a21\u578b\u8f83\u4e3a\u539f\u5b50\u5316\u548c\u590d\u6742\uff0c\u6211\u4eec\u63a8\u8350\u4ee5 Kubernetes \u539f\u751f\u6a21\u578b\u4f5c\u4e3a\u540e\u7aef\u8f93\u51fa\u7684\u6a21\u578b\uff0c\u5bf9\u5176\u8fdb\u4e00\u6b65\u62bd\u8c61\uff0c\u800c\u5411\u7528\u6237\u66b4\u9732\u4e00\u4efd\u66f4\u4e3a\u53cb\u597d\u548c\u7b80\u5355\u7684\u524d\u7aef\u6a21\u578b\u754c\u9762\uff0c\u5177\u4f53\u60a8\u53ef\u53c2\u7167 Konfig \u4ed3\u5e93\u4e2d ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/konfig/blob/main/base/pkg/kusion_models/kube/frontend/server.k"},"kusion_models Server")," \u6a21\u578b\u7684\u8bbe\u8ba1\u65b9\u5f0f\u8fdb\u884c\u3002"),(0,s.kt)("h4",{id:"3-\u6279\u91cf\u8fc1\u79fb\u914d\u7f6e\u6570\u636e"},"3. \u6279\u91cf\u8fc1\u79fb\u914d\u7f6e\u6570\u636e"),(0,s.kt)("p",null,"\u5bf9\u4e8e\u5b58\u91cf\u7684 Kubernetes \u914d\u7f6e\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4eff\u7167 kube2Kcl \u5de5\u5177\u7684\u505a\u6cd5\uff0c\u7f16\u5199\u81ea\u5b9a\u4e49\u7684\u8f6c\u6362\u811a\u672c\uff0c\u8fdb\u884c\u4e00\u952e\u8fc1\u79fb\u3002Kusion \u540e\u7eed\u5c06\u63d0\u4f9b\u8be5\u811a\u672c\u7684\u7f16\u5199\u811a\u624b\u67b6\u548c\u7f16\u5199\u6307\u5357\u3002"),(0,s.kt)("h2",{id:"4-\u4ece-kubernetes-crd-\u8fc1\u79fb\u5230-kusion"},"4. \u4ece Kubernetes CRD \u8fc1\u79fb\u5230 Kusion"),(0,s.kt)("p",null,"\u5982\u679c\u60a8\u7684\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86 CRD\uff0c\u4e5f\u53ef\u4ee5\u91c7\u7528\u7c7b\u4f3c\u7684\u6a21\u5f0f\uff0c\u751f\u6210 CRD \u5bf9\u5e94\u7684 KCL schema\uff0c\u5e76\u57fa\u4e8e\u8be5 schema \u58f0\u660e CR\u3002"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4ece CRD \u751f\u6210 KCL Schema"),(0,s.kt)("pre",{parentName:"li"},(0,s.kt)("code",{parentName:"pre"},"kclopenapi generate model --crd --skip-validation -f your_crd.yaml\n"))),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("p",{parentName:"li"},"\u4f7f\u7528 KCL \u58f0\u660e CR"),(0,s.kt)("p",{parentName:"li"},"  \u4f7f\u7528 KCL \u58f0\u660e CR \u7684\u6a21\u5f0f\u4e0e\u58f0\u660e Kubernetes \u5185\u7f6e\u6a21\u578b\u914d\u7f6e\u7684\u6a21\u5f0f\u76f8\u540c\uff0c\u5728\u6b64\u4e0d\u505a\u8d58\u8ff0\u3002"))))}c.isMDXComponent=!0}}]);