"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14297],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(t),d=n,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||a;return t?o.createElement(m,s(s({ref:r},l),{},{components:t})):o.createElement(m,s({ref:r},l))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=f;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},46691:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var o=t(87462),n=(t(67294),t(3905));const a={},s="kusion resource graph",i={unversionedId:"reference/commands/kusion-resource-graph",id:"version-v0.13/reference/commands/kusion-resource-graph",title:"kusion resource graph",description:"Display a graph of all the resources' information of the target project and target workspaces",source:"@site/docs_versioned_docs/version-v0.13/6-reference/1-commands/kusion-resource-graph.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-resource-graph",permalink:"/zh/docs/reference/commands/kusion-resource-graph",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.13/6-reference/1-commands/kusion-resource-graph.md",tags:[],version:"v0.13",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1736745225,formattedLastUpdatedAt:"2025\u5e741\u670813\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion release",permalink:"/zh/docs/reference/commands/kusion-release"},next:{title:"kusion resource",permalink:"/zh/docs/reference/commands/kusion-resource"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Sep-2024",id:"auto-generated-by-spf13cobra-on-26-sep-2024",level:6}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kusion-resource-graph"},"kusion resource graph"),(0,n.kt)("p",null,"Display a graph of all the resources' information of the target project and target workspaces"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"Display information of all the resources of a project."),(0,n.kt)("p",null," This command displays information of all the resources of a project in the current or specified workspaces."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kusion resource graph [flags]\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  # Display information of all the resources of a project in the current workspace.\n  kusion resource graph --project quickstart\n  \n  # Display information of all the resources of a project in specified workspaces.\n  kusion resource graph --project quickstart --workspace=dev,default\n  \n  # Display information of all the resource of a project in all the workspaces that has been deployed.\n  kusion resource graph --project quickstart --all\n  kusion resource graph --project quickstart -a\n  \n  # Display information of all the resource of a project with in specified workspaces with json format result.\n  kusion resource graph --project quickstart --workspace dev -o json\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -a, --all                 Display all the resources of all the workspaces\n      --backend string      The backend to use, supports 'local', 'oss' and 's3'\n  -h, --help                help for graph\n  -o, --output string       Specify the output format, json only\n      --project string      The name of the target project\n      --workspace strings   The name of the target workspace\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/zh/docs/reference/commands/kusion-resource"},"kusion resource"),"\t - Observe Kusion resource information")),(0,n.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-sep-2024"},"Auto generated by spf13/cobra on 26-Sep-2024"))}u.isMDXComponent=!0}}]);