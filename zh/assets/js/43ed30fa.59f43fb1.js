"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44458],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(k,o(o({ref:t},l),{},{components:n})):a.createElement(k,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56798:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"spec",sidebar_label:"Spec"},o="Spec",s={unversionedId:"concepts/spec",id:"version-v0.12/concepts/spec",title:"Spec",description:"The Spec represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the DevOps lifecycle, including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Spec. Once the Spec is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Spec.",source:"@site/docs_versioned_docs/version-v0.12/3-concepts/6-spec.md",sourceDirName:"3-concepts",slug:"/concepts/spec",permalink:"/zh/docs/v0.12/concepts/spec",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.12/3-concepts/6-spec.md",tags:[],version:"v0.12",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1736431633,formattedLastUpdatedAt:"2025\u5e741\u67089\u65e5",sidebarPosition:6,frontMatter:{id:"spec",sidebar_label:"Spec"},sidebar:"kusion",previous:{title:"AppConfiguration",permalink:"/zh/docs/v0.12/concepts/app-configuration"},next:{title:"Backends",permalink:"/zh/docs/v0.12/concepts/backend"}},c={},p=[{value:"Purpose",id:"purpose",level:2},{value:"Single Source of Truth",id:"single-source-of-truth",level:3},{value:"Consistency",id:"consistency",level:3},{value:"Rollback and Disaster Recovery",id:"rollback-and-disaster-recovery",level:3},{value:"Example",id:"example",level:2},{value:"Apply with Spec File",id:"apply-with-spec-file",level:2}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"spec"},"Spec"),(0,i.kt)("p",null,"The Spec represents the operational intentions that you aim to deliver using Kusion. These intentions are expected to contain all components throughout the DevOps lifecycle, including resources (workload, database, load balancer, etc.), dependencies, and policies. The Kusion module generators are responsible for converting all AppConfigurations and environment configurations into the Spec. Once the Spec is generated, the Kusion Engine takes charge of updating the actual infrastructures to match the Spec."),(0,i.kt)("h2",{id:"purpose"},"Purpose"),(0,i.kt)("h3",{id:"single-source-of-truth"},"Single Source of Truth"),(0,i.kt)("p",null,"In Kusion's workflow, the platform engineer builds Kusion modules and provides environment configurations, application developers choose Kusion modules they need and deploy operational intentions to an environment with related environment configurations. They can also input dynamic parameters like the container image when executing the ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion generate")," command. So the final operational intentions include configurations written by application developers, environment configurations and dynamic inputs. Due to this reason, we introduce ",(0,i.kt)("strong",{parentName:"p"},"Spec")," to represent the SSoT(Single Source of Truth) of Kusion. It is the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion generate")," which contains all operational intentions from different sources."),(0,i.kt)("h3",{id:"consistency"},"Consistency"),(0,i.kt)("p",null,"Delivering an application to different environments with identical configurations is a common practice, especially for applications that require scalable distribution. In such cases, an immutable configuration package is helpful. By utilizing the Spec, all configurations and changes are stored in a single file. As the Spec is the input of Kusion, it ensures consistency across different environments whenever you execute Kusion with the same Spec file."),(0,i.kt)("h3",{id:"rollback-and-disaster-recovery"},"Rollback and Disaster Recovery"),(0,i.kt)("p",null,"The ability to roll back is crucial in reducing incident duration. Rolling back the system to a previously validated version is much faster compared to attempting to fix it during an outage. We regard a validated Spec as a snapshot of the system and recommend storing the Spec in a version control system like Git. This enables better change management practices and makes it simpler to roll back to previous versions if needed. In case of a failure or outage, having a validated Spec simplifies the rollback process, ensuring that the system can be quickly recovered."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The API definition of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," structure in Kusion can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KusionStack/kusion/blob/main/pkg/apis/api.kusion.io/v1/types.go#L862"},"here"),". Below is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," file generated from the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart")," demo application (more details can be found ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.12/getting-started/deliver-quickstart"},"here"),"). "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"resources:\n    - id: v1:Namespace:quickstart\n      type: Kubernetes\n      attributes:\n        apiVersion: v1\n        kind: Namespace\n        metadata:\n            creationTimestamp: null\n            name: quickstart\n        spec: {}\n        status: {}\n      extensions:\n        GVK: /v1, Kind=Namespace\n    - id: apps/v1:Deployment:quickstart:quickstart-default-quickstart\n      type: Kubernetes\n      attributes:\n        apiVersion: apps/v1\n        kind: Deployment\n        metadata:\n            creationTimestamp: null\n            labels:\n                app.kubernetes.io/name: quickstart\n                app.kubernetes.io/part-of: quickstart\n            name: quickstart-default-quickstart\n            namespace: quickstart\n        spec:\n            selector:\n                matchLabels:\n                    app.kubernetes.io/name: quickstart\n                    app.kubernetes.io/part-of: quickstart\n            strategy: {}\n            template:\n                metadata:\n                    creationTimestamp: null\n                    labels:\n                        app.kubernetes.io/name: quickstart\n                        app.kubernetes.io/part-of: quickstart\n                spec:\n                    containers:\n                        - image: kusionstack/kusion-quickstart:latest\n                          name: quickstart\n                          resources: {}\n        status: {}\n      dependsOn:\n        - v1:Namespace:quickstart\n        - v1:Service:quickstart:quickstart-default-quickstart-private\n      extensions:\n        GVK: apps/v1, Kind=Deployment\n    - id: v1:Service:quickstart:quickstart-default-quickstart-private\n      type: Kubernetes\n      attributes:\n        apiVersion: v1\n        kind: Service\n        metadata:\n            creationTimestamp: null\n            labels:\n                app.kubernetes.io/name: quickstart\n                app.kubernetes.io/part-of: quickstart\n            name: quickstart-default-quickstart-private\n            namespace: quickstart\n        spec:\n            ports:\n                - name: quickstart-default-quickstart-private-8080-tcp\n                  port: 8080\n                  protocol: TCP\n                  targetPort: 8080\n            selector:\n                app.kubernetes.io/name: quickstart\n                app.kubernetes.io/part-of: quickstart\n            type: ClusterIP\n        status:\n            loadBalancer: {}\n      dependsOn:\n        - v1:Namespace:quickstart\n      extensions:\n        GVK: /v1, Kind=Service\nsecretStore: null\ncontext: {}\n")),(0,i.kt)("p",null,"From the example above, we can see that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," contains a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"resources")," required by the application. Each resource in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Spec")," needs to have ",(0,i.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"type"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"attributes"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dependsOn"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions")," fields: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id")," is the unique key of this resource. An idiomatic way for Kubernetes resources is ",(0,i.kt)("inlineCode",{parentName:"li"},"apiVersion:kind:namespace:name"),", and for Terraform resources is ",(0,i.kt)("inlineCode",{parentName:"li"},"providerNamespace:providerName:resourceType:resourceName"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type")," represents the type of runtime Kusion supports, and currently includes ",(0,i.kt)("inlineCode",{parentName:"li"},"Kubernetes")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Terraform"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes")," represents all specified attributes of this resource, basically the manifest and argument attributes for the ",(0,i.kt)("inlineCode",{parentName:"li"},"Kubernetes")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Terraform")," resources. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dependsOn")," contains all the other resources the resource depends on. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"extensions")," specifies the arbitrary metadata of the resource, where you can declare information such as Kubernetes GVK, Terraform provider, and imported resource id, etc. ")),(0,i.kt)("p",null,"Besides the ",(0,i.kt)("inlineCode",{parentName:"p"},"resources"),", Spec also records the ",(0,i.kt)("inlineCode",{parentName:"p"},"secretStore")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"context")," field in the corresponding workspace. The former can be used to access sensitive data stored in an external secrets manager, while the latter can be used to declare the workspace-level configurations such as Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file path or content, and Terraform providers' AK/SK. More information can be found ",(0,i.kt)("a",{parentName:"p",href:"/zh/docs/v0.12/concepts/workspace#secretstore"},"here"),". "),(0,i.kt)("h2",{id:"apply-with-spec-file"},"Apply with Spec File"),(0,i.kt)("p",null,"Kusion supports using the Spec file directly as input. Users can place the Spec file in the stack directory and execute ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion preview --spec-file spec.yaml")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"kusion apply --spec-file spec.yaml")," to preview and apply the resources."))}u.isMDXComponent=!0}}]);