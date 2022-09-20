"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5726],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),g=n,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return r?a.createElement(m,l(l({ref:t},p),{},{components:r})):a.createElement(m,l({ref:t},p))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},88565:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const o={},l="\u4f7f\u7528 ArgoCD \u8fdb\u884c\u6f02\u79fb\u68c0\u67e5",s={unversionedId:"user_docs/guides/argocd/drift-detection-by-argocd",id:"user_docs/guides/argocd/drift-detection-by-argocd",title:"\u4f7f\u7528 ArgoCD \u8fdb\u884c\u6f02\u79fb\u68c0\u67e5",description:"1. \u914d\u7f6e Kusion \u63d2\u4ef6",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/user_docs/guides/argocd/drift-detection-by-argocd.md",sourceDirName:"user_docs/guides/argocd",slug:"/user_docs/guides/argocd/drift-detection-by-argocd",permalink:"/zh-CN/docs/user_docs/guides/argocd/drift-detection-by-argocd",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/argocd/drift-detection-by-argocd.md",tags:[],version:"current",lastUpdatedBy:"Hao Yuan",lastUpdatedAt:1663660436,formattedLastUpdatedAt:"2022/9/20",frontMatter:{},sidebar:"user_docs",previous:{title:"ArgoCD",permalink:"/zh-CN/docs/user_docs/guides/argocd/"},next:{title:"\u654f\u611f\u4fe1\u606f\u7ba1\u7406",permalink:"/zh-CN/docs/user_docs/guides/sensitive-data-solution/"}},c={},i=[{value:"1. \u914d\u7f6e Kusion \u63d2\u4ef6",id:"1-\u914d\u7f6e-kusion-\u63d2\u4ef6",level:2},{value:"2. \u66f4\u65b0 ArgoCD \u90e8\u7f72",id:"2-\u66f4\u65b0-argocd-\u90e8\u7f72",level:2},{value:"3. \u521b\u5efa KCL \u9879\u76ee",id:"3-\u521b\u5efa-kcl-\u9879\u76ee",level:2},{value:"4. \u914d\u7f6e\u6f02\u79fb\u68c0\u67e5",id:"4-\u914d\u7f6e\u6f02\u79fb\u68c0\u67e5",level:2}],p={toc:i};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u4f7f\u7528-argocd-\u8fdb\u884c\u6f02\u79fb\u68c0\u67e5"},"\u4f7f\u7528 ArgoCD \u8fdb\u884c\u6f02\u79fb\u68c0\u67e5"),(0,n.kt)("h2",{id:"1-\u914d\u7f6e-kusion-\u63d2\u4ef6"},"1. \u914d\u7f6e Kusion \u63d2\u4ef6"),(0,n.kt)("p",null,"\u76ee\u524d\uff0cArgoCD \u5185\u7f6e\u4e86\u4e00\u4e9b\u5e38\u89c1\u7684\u914d\u7f6e\u63d2\u4ef6\uff0c\u5305\u62ec helm\u3001jsonnet\u3001kustomize\u3002\u800c\u5bf9\u4e8e KCL \u6765\u8bf4\uff0c\u4f5c\u4e3a\u4e00\u95e8\u5168\u65b0\u7684\u914d\u7f6e\u8bed\u8a00\uff0c\u60f3\u8981\u4f7f\u7528 ArgoCD \u5b9e\u73b0\u6f02\u79fb\u68c0\u67e5\u7684\u80fd\u529b\uff0c\u9700\u8981\u9075\u5faa\u5b83\u7684\u63d2\u4ef6\u5316\u7684\u673a\u5236\uff0c\u914d\u7f6e Kusion \u63d2\u4ef6\u3002\u5177\u4f53\u64cd\u4f5c\u5982\u4e0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-cm.yaml"},"patch")," \u6587\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-cm.yaml\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n argocd patch cm/argocd-cm -p "$(cat patch-argocd-cm.yaml)"\n')),(0,n.kt)("h2",{id:"2-\u66f4\u65b0-argocd-\u90e8\u7f72"},"2. \u66f4\u65b0 ArgoCD \u90e8\u7f72"),(0,n.kt)("p",null,"\u5b8c\u6210\u7b2c\u4e00\u6b65\uff0cArgoCD \u5c31\u53ef\u4ee5\u8bc6\u522b Kusion \u63d2\u4ef6\uff0c\u4f46 Kusion \u63d2\u4ef6\u8fd8\u6ca1\u6709\u8f7d\u5165\u5230 ArgoCD \u7684\u955c\u50cf\u4e2d\u3002\u8981\u5b9e\u73b0\u914d\u7f6e\u6f02\u79fb\u68c0\u67e5\uff0c\u9700\u8981\u4fee\u6539 argocd-repo-server \u7684 Deployment\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u4e0b\u8f7d ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/KusionStack/examples/blob/main/kusion/argo-cd/patch-argocd-repo-server.yaml"},"patch")," \u6587\u4ef6")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"wget -q https://raw.githubusercontent.com/KusionStack/examples/main/kusion/argo-cd/patch-argocd-repo-server.yaml\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u914d\u7f6e")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'kubectl -n argocd patch deploy/argocd-repo-server -p "$(cat patch-argocd-repo-server.yaml)"\n')),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u5347\u7ea7\u5b8c\u6210")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get pod -n argocd -l app.kubernetes.io/name=argocd-repo-server\n")),(0,n.kt)("h2",{id:"3-\u521b\u5efa-kcl-\u9879\u76ee"},"3. \u521b\u5efa KCL \u9879\u76ee"),(0,n.kt)("p",null,"\u5230\u6b64\uff0c\u51c6\u5907\u5de5\u5177\u5df2\u7ecf\u5b8c\u6210\uff0c\u73b0\u5728\u5f00\u59cb\u9a8c\u8bc1\u3002\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u5f00\u6e90 Konfig \u5927\u5e93\u4e2d\u7684\u793a\u4f8b\u9879\u76ee\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5f00\u542f\u672c\u5730\u7aef\u53e3\u8f6c\u53d1")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl port-forward svc/argocd-server -n argocd 8080:443\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u767b\u5f55 ArgoCD")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"argocd login localhost:8080\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa ArgoCD Application")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"argocd app create guestbook-test \\\n--repo https://github.com/KusionStack/konfig.git \\\n--path appops/guestbook-frontend/prod \\\n--dest-namespace default \\\n--dest-server https://kubernetes.default.svc \\\n--config-management-plugin kusion\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528\u79c1\u6709\u4ed3\u5e93\uff0c\u9700\u8981\u5148\u914d\u7f6e\u79c1\u6709\u4ed3\u5e93\u7684\u8bbf\u95ee\u79c1\u94a5\u51ed\u8bc1\uff0c\u518d\u6267\u884c\u521b\u5efa\u547d\u4ee4\u3002\u8be6\u7ec6\u64cd\u4f5c\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/private-repositories/#ssh-private-key-credential"},"Private Repositories"),"\u3002")),(0,n.kt)("p",null,"\u521b\u5efa\u6210\u529f\u540e\uff0c\u53ef\u4ee5\u770b\u5230\u4ee5\u4e0b\u8f93\u51fa\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"application 'guestbook-test' created\n")),(0,n.kt)("p",null,"\u901a\u8fc7ArgoCD UI\uff0c\u53ef\u4ee5\u770b\u5230\uff0c\u5df2\u7ecf\u521b\u5efa\u7684\u5e94\u7528\u6682\u672a\u540c\u6b65\uff0c\u6b64\u5904\u53ef\u4ee5\u624b\u52a8\u540c\u6b65\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u81ea\u52a8\u540c\u6b65\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",src:r(72253).Z,width:"1330",height:"380"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u540c\u6b65\u7b56\u7565\uff08\u4ec5\u540c\u6b65 ",(0,n.kt)("inlineCode",{parentName:"li"},"unsynced")," \u7684\u8d44\u6e90\uff09\uff1a")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"argocd app set guestbook-test --sync-option ApplyOutOfSyncOnly=true\n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6709\u5173\u540c\u6b65\u7b56\u7565\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1 ",(0,n.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/user-guide/sync-options/"},"Sync Options"))),(0,n.kt)("p",null,"\u540c\u6b65\u6210\u529f\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",src:r(674).Z,width:"2654",height:"362"})),(0,n.kt)("h2",{id:"4-\u914d\u7f6e\u6f02\u79fb\u68c0\u67e5"},"4. \u914d\u7f6e\u6f02\u79fb\u68c0\u67e5"),(0,n.kt)("p",null,"\u5230\u6b64\uff0c\u5df2\u7ecf\u5b8c\u6210\u4e86 ArgoCD \u76d1\u542c KCL \u9879\u76ee\uff0c\u5b9e\u73b0\u914d\u7f6e\u6f02\u79fb\u68c0\u67e5\u5e76\u5b9e\u73b0\u7ed3\u679c\u4e00\u81f4\u6027\u3002\u6211\u4eec\u6765\u4fee\u6539 ",(0,n.kt)("inlineCode",{parentName:"p"},"guestbook-test")," \u7684\u955c\u50cf\u7248\u672c\uff0c\u5b9e\u73b0\u914d\u7f6e\u53d8\u66f4\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u955c\u50cf")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-diff"},' appConfiguration: frontend.Server {\n-    image = "gcr.io/google-samples/gb-frontend:v4"\n+    image = "gcr.io/google-samples/gb-frontend:v5"\n     schedulingStrategy.resource = res_tpl.tiny\n }\n')),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u66f4\u65b0\u7f16\u8bd1\u7ed3\u679c")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"kusion compile -w appops/guestbook-frontend/prod\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Git \u63d0\u4ea4\u5e76\u63a8\u9001")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'git add .\ngit commit -m "mannual drifted config for appops/guestbook-frontend/prod"\ngit push origin main\n')),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u6f02\u79fb\u914d\u7f6e\u81ea\u52a8\u6536\u655b")),(0,n.kt)("p",null,(0,n.kt)("img",{loading:"lazy",src:r(22292).Z,width:"2654",height:"414"})))}u.isMDXComponent=!0},72253:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/out-of-sync-37f958b3a8b314e916ea330492dee2f0.jpg"},22292:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/reconcile-drifted-config-40ba407f682c028fa3ebd7cd403881a7.jpg"},674:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/synced-9247a7d5a6437d211b07ae03344a8ac3.jpg"}}]);