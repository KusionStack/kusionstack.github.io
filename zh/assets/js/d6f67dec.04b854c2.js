"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[75340],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>d});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},i={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(t),d=o,b=k["".concat(p,".").concat(d)]||k[d]||i[d]||a;return t?n.createElement(b,u(u({ref:r},c),{},{components:t})):n.createElement(b,u({ref:r},c))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=k;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,u[1]=l;for(var s=2;s<a;s++)u[s]=t[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},45814:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>u,default:()=>i,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(87462),o=(t(67294),t(3905));const a={title:"\u5982\u4f55\u521b\u5efa Token"},u=void 0,l={unversionedId:"user-guide/how-to-create-token",id:"version-v0.5/user-guide/how-to-create-token",title:"\u5982\u4f55\u521b\u5efa Token",description:"\u5728\u8fd9\u7bc7\u6587\u6863\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 token \u8bbf\u95ee Karpor dashboard\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-karpor/version-v0.5/3-user-guide/1-how-to-create-token.md",sourceDirName:"3-user-guide",slug:"/user-guide/how-to-create-token",permalink:"/zh/karpor/user-guide/how-to-create-token",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/edit/main/karpor_versioned_docs/version-v0.5/3-user-guide/1-how-to-create-token.md",tags:[],version:"v0.5",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1736745225,formattedLastUpdatedAt:"2025\u5e741\u670813\u65e5",sidebarPosition:1,frontMatter:{title:"\u5982\u4f55\u521b\u5efa Token"},sidebar:"karpor",previous:{title:"\u672f\u8bed\u8868",permalink:"/zh/karpor/concepts/glossary"},next:{title:"\u591a\u96c6\u7fa4\u7ba1\u7406",permalink:"/zh/karpor/user-guide/multi-cluster-management"}},p={},s=[{value:"\u5bfc\u51fa Hub Cluster \u7684 KubeConfig",id:"\u5bfc\u51fa-hub-cluster-\u7684-kubeconfig",level:2},{value:"\u5c06 Hub Cluster \u7684\u670d\u52a1\u8f6c\u53d1\u5230\u672c\u5730",id:"\u5c06-hub-cluster-\u7684\u670d\u52a1\u8f6c\u53d1\u5230\u672c\u5730",level:2},{value:"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa ServiceAccount \u548c ClusterRoleBinding",id:"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa-serviceaccount-\u548c-clusterrolebinding",level:2},{value:"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa Token",id:"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa-token",level:2},{value:"\u5f00\u59cb\u5b89\u5168\u5730\u4f7f\u7528 Karpor",id:"\u5f00\u59cb\u5b89\u5168\u5730\u4f7f\u7528-karpor",level:2}],c={toc:s};function i(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5728\u8fd9\u7bc7\u6587\u6863\u4e2d\uff0c\u4f60\u5c06\u4e86\u89e3\u5982\u4f55\u4f7f\u7528 token \u8bbf\u95ee Karpor dashboard\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh/karpor/concepts/glossary#hub-cluster"},"Hub Cluster")," \u91c7\u7528\u4e86\u4e0e Kubernetes \u76f8\u540c\u7684\u57fa\u4e8e\u89d2\u8272\u7684\u8bbf\u95ee\u63a7\u5236\uff08RBAC\uff09\u673a\u5236\u3002\u8fd9\u610f\u5473\u7740\uff0c\u8981\u8bbf\u95ee Hub Cluster\uff0c\u7528\u6237\u9700\u8981\u5728 Hub Cluster \u4e0a\u521b\u5efa ClusterRole\u3001ServiceAccount\uff0c\u4ee5\u53ca\u76f8\u5e94\u7684 ClusterRoleBinding \u6765\u5c06\u4e24\u8005\u7ed1\u5b9a\u3002\u4e3a\u4e86\u63d0\u5347\u7528\u6237\u4f53\u9a8c\uff0c\u6211\u4eec\u9884\u8bbe\u4e86\u4e24\u79cd ClusterRole\uff1akarpor-admin \u548c karpor-guest\u3002karpor-admin \u89d2\u8272\u62e5\u6709\u5728\u9762\u677f\u4e0a\u6267\u884c\u6240\u6709\u64cd\u4f5c\u7684\u6743\u9650\uff0c\u5305\u62ec\u4f46\u4e0d\u9650\u4e8e\u6dfb\u52a0\u6216\u5220\u9664\u96c6\u7fa4\u3001\u521b\u5efa\u8d44\u6e90\u7ec4\u7b49\uff1b\u800c karpor-guest \u89d2\u8272\u5219\u4ec5\u9650\u4e8e\u5728\u9762\u677f\u4e0a\u8fdb\u884c\u67e5\u770b\u64cd\u4f5c\u3002\u968f\u7740\u5bf9 Karpor \u7684\u6df1\u5165\u4e86\u89e3\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u9700\u6c42\uff0c\u521b\u5efa\u989d\u5916\u7684 ClusterRole\uff0c\u5b9e\u73b0\u66f4\u7ec6\u81f4\u7684\u6743\u9650\u7ba1\u7406\u3002"),(0,o.kt)("h2",{id:"\u5bfc\u51fa-hub-cluster-\u7684-kubeconfig"},"\u5bfc\u51fa Hub Cluster \u7684 KubeConfig"),(0,o.kt)("p",null,"\u7531\u4e8e Hub Cluster \u9700\u8981 KubeConfig \u8fdb\u884c\u9a8c\u8bc1\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u4e00\u952e\u5bfc\u51fa\u7528\u4e8e\u8bbf\u95ee Hub Cluster \u7684 KubeConfig\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4ee5\u4e0b\u64cd\u4f5c\u5728\u5b89\u88c5 Karpor \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u8fd0\u884c\nkubectl get configmap karpor-kubeconfig -n karpor -o go-template='{{.data.config}}' > $HOME/.kube/karpor-hub-cluster.kubeconfig\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u786e\u4fdd\u672c\u5730\u53ef\u8bbf\u95ee Hub Cluster KubeConfig \u4e2d\u7684 server \u5730\u5740\u3002\u9ed8\u8ba4\u4e3a\u96c6\u7fa4\u5185\u90e8\u5730\u5740 (",(0,o.kt)("a",{parentName:"p",href:"https://karpor-server.karpor.svc:7443)%EF%BC%8C%E6%9C%AC%E5%9C%B0%E6%97%A0%E6%B3%95%E7%9B%B4%E6%8E%A5%E8%BF%9E%E6%8E%A5%E3%80%82%E5%A6%82%E5%9C%A8%E6%9C%AC%E5%9C%B0%E9%83%A8%E7%BD%B2"},"https://karpor-server.karpor.svc:7443)\uff0c\u672c\u5730\u65e0\u6cd5\u76f4\u63a5\u8fde\u63a5\u3002\u5982\u5728\u672c\u5730\u90e8\u7f72")," Karpor\uff0c\u9700\u5c06 karpor-server \u670d\u52a1\u8f6c\u53d1\u81f3\u672c\u5730 7443 \u7aef\u53e3\uff0c\u5e76\u5c06 server \u5730\u5740\u6539\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"https://127.0.0.1:7443"),"\u3002"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b sed \u547d\u4ee4\u5c06 Hub \u96c6\u7fa4\u8bc1\u4e66\u4e2d\u7684\u8bbf\u95ee\u5730\u5740\u66f4\u6539\u4e3a\u672c\u5730\u5730\u5740\uff1a"),(0,o.kt)("p",null,"\u5bf9\u4e8e MacOS/BSD \u7cfb\u7edf\uff08\u9700\u8981\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," \u540e\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"''"),"\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i '' 's/karpor-server.karpor.svc/127.0.0.1/g' $HOME/.kube/karpor-hub-cluster.kubeconfig\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e Linux/GNU \u7cfb\u7edf\uff08\u4ec5\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"-i"),"\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sed -i 's/karpor-server.karpor.svc/127.0.0.1/g' $HOME/.kube/karpor-hub-cluster.kubeconfig\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e Windows \u7cfb\u7edf\uff1a\n\u8bf7\u624b\u52a8\u4fee\u6539 kubeconfig \u6587\u4ef6\u4e2d\u7684\u670d\u52a1\u5668\u5730\u5740\u3002"),(0,o.kt)("h2",{id:"\u5c06-hub-cluster-\u7684\u670d\u52a1\u8f6c\u53d1\u5230\u672c\u5730"},"\u5c06 Hub Cluster \u7684\u670d\u52a1\u8f6c\u53d1\u5230\u672c\u5730"),(0,o.kt)("p",null,"\u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u5c06 Karpor \u90e8\u7f72\u5728\u4e86\u672c\u5730\u96c6\u7fa4\uff08\u6bd4\u5982\u7528 kind \u6216\u8005 minikube \u521b\u5efa\u7684\u96c6\u7fa4\uff09\u3002"),(0,o.kt)("p",null,"\u5982\u4e0a\u8282\u6240\u8bf4\uff0c\u4e3a\u4e86\u5728\u672c\u5730\u8bbf\u95ee Hub Cluster\uff0c\u4f60\u9700\u8981\u5c06 karpor-server \u7684\u670d\u52a1\u8f6c\u53d1\u5230\u672c\u5730\u3002\u5982\u679c\u4f60\u4f7f\u7528\u4e86\u5176\u4ed6\u65b9\u6cd5\u8fdb\u884c\u4e86\u8f6c\u53d1\uff0c\u53ef\u4ee5\u8df3\u8fc7\u8fd9\u4e00\u6b65\u3002\u8fd9\u91cc\u4f7f\u7528\u7b80\u5355\u7684 port-forward \u8fdb\u884c\u8f6c\u53d1\uff0c\u6253\u5f00\u53e6\u4e00\u4e2a\u7ec8\u7aef\uff0c\u8fd0\u884c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"# \u4ee5\u4e0b\u64cd\u4f5c\u5728\u5b89\u88c5 Karpor \u7684 Kubernetes \u96c6\u7fa4\u4e2d\u8fd0\u884c\nkubectl -n karpor port-forward svc/karpor-server 7443:7443\n")),(0,o.kt)("h2",{id:"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa-serviceaccount-\u548c-clusterrolebinding"},"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa ServiceAccount \u548c ClusterRoleBinding"),(0,o.kt)("p",null,"\u672c\u8282\u5c06\u6307\u5bfc\u4f60\u5982\u4f55\u5728 Hub Cluster \u4e2d\u521b\u5efa karpor-admin \u548c karpor-guest \u7528\u6237\uff0c\u5e76\u4e3a\u5b83\u4eec\u5206\u914d\u76f8\u5e94\u7684 ClusterRoleBinding\u3002\u4ee5\u4e0b\u662f\u5177\u4f53\u7684\u64cd\u4f5c\u6b65\u9aa4\uff1a"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6307\u5b9a kubectl \u8fde\u63a5\u7684\u76ee\u6807\u96c6\u7fa4\u4e3a Hub Cluster\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=$HOME/.kube/karpor-hub-cluster.kubeconfig\n")),(0,o.kt)("p",null,"\u7136\u540e\uff0c\u6211\u4eec\u5c06\u521b\u5efa\u4e24\u4e2a\u5e38\u7528\u7684\u8eab\u4efd\uff1a\u7ba1\u7406\u5458\uff08karpor-admin\uff09\u548c\u8bbf\u5ba2\uff08karpor-guest\uff09\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u5305\u62ec\u521b\u5efa ServiceAccount \u5e76\u5c06\u5176\u7ed1\u5b9a\u5230\u76f8\u5e94\u7684 ClusterRole\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create serviceaccount karpor-admin\nkubectl create clusterrolebinding karpor-admin --clusterrole=karpor-admin --serviceaccount=default:karpor-admin\nkubectl create serviceaccount karpor-guest\nkubectl create clusterrolebinding karpor-guest --clusterrole=karpor-guest --serviceaccount=default:karpor-guest\n")),(0,o.kt)("h2",{id:"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa-token"},"\u4e3a\u4f60\u7684\u7528\u6237\u521b\u5efa Token"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u64cd\u4f5c\u9700\u5728 Hub Cluster \u4e2d\u6267\u884c\uff0c\u8bf7\u786e\u4fdd\u5df2\u6b63\u786e\u8bbe\u7f6e kubectl \u8fde\u63a5\u5230 Hub Cluster\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export KUBECONFIG=$HOME/.kube/karpor-hub-cluster.kubeconfig\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0ctoken \u7684\u6709\u6548\u671f\u4e3a 1 \u5c0f\u65f6\u3002\u5982\u679c\u4f60\u9700\u8981\u957f\u671f\u4f7f\u7528\u7684 token\uff0c\u53ef\u4ee5\u5728\u751f\u6210\u65f6\u6307\u5b9a\u66f4\u957f\u7684\u8fc7\u671f\u65f6\u95f4\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl create token karpor-admin --duration=1000h\n")),(0,o.kt)("p",null,"\u9ed8\u8ba4\u53c2\u6570\u4e0b\uff0c token \u7684\u6700\u957f\u6709\u6548\u671f\u4e3a 8760h\uff081 \u5e74\uff09\u3002\u5982\u679c\u4f60\u9700\u8981\u4fee\u6539\u8fd9\u4e2a\u6700\u957f\u6709\u6548\u671f\uff0c\u53ef\u4ee5\u5728 karpor-server \u7684\u542f\u52a8\u53c2\u6570\u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"--service-account-max-token-expiration={MAX_EXPIRATION:h/m/s}"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u521b\u5efa token \u9700\u8981 v1.25.0 \u6216\u66f4\u9ad8\u7248\u672c\u7684 kubectl \u3002"),(0,o.kt)("h2",{id:"\u5f00\u59cb\u5b89\u5168\u5730\u4f7f\u7528-karpor"},"\u5f00\u59cb\u5b89\u5168\u5730\u4f7f\u7528 Karpor"),(0,o.kt)("p",null,"\u590d\u5236\u521a\u521a\u751f\u6210\u7684 token\uff0c\u7c98\u8d34\u5230 Karpor dashboard \u7684 token \u8f93\u5165\u6846\u4e2d\uff0c \u70b9\u51fb\u767b\u5f55\u3002"),(0,o.kt)("p",null,"\u5728\u5b89\u5168\u73af\u5883\u4e0b\u5f00\u542f\u4f60\u7684 Karpor \u4e4b\u65c5\u5427\uff01"))}i.isMDXComponent=!0}}]);