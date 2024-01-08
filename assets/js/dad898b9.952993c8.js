"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3882],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>k});var o=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},s=Object.keys(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)t=s[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},d=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(t),k=n,f=d["".concat(c,".").concat(k)]||d[k]||u[k]||s;return t?o.createElement(f,a(a({ref:r},l),{},{components:t})):o.createElement(f,a({ref:r},l))}));function k(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,a=new Array(s);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<s;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8880:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var o=t(7462),n=(t(7294),t(3905));const s={},a="kusion workspace show",i={unversionedId:"user_docs/reference/cli/kusion/kusion_workspace_show",id:"user_docs/reference/cli/kusion/kusion_workspace_show",title:"kusion workspace show",description:"Show a workspace configuration",source:"@site/docs/user_docs/reference/cli/kusion/kusion_workspace_show.md",sourceDirName:"user_docs/reference/cli/kusion",slug:"/user_docs/reference/cli/kusion/kusion_workspace_show",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_workspace_show",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/reference/cli/kusion/kusion_workspace_show.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1704699340,formattedLastUpdatedAt:"Jan 8, 2024",frontMatter:{},sidebar:"user_docs",previous:{title:"kusion workspace list",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_workspace_list"},next:{title:"kusion workspace update",permalink:"/docs/next/user_docs/reference/cli/kusion/kusion_workspace_update"}},c={},p=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 4-Jan-2024",id:"auto-generated-by-spf13cobra-on-4-jan-2024",level:6}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kusion-workspace-show"},"kusion workspace show"),(0,n.kt)("p",null,"Show a workspace configuration"),(0,n.kt)("h3",{id:"synopsis"},"Synopsis"),(0,n.kt)("p",null,"This command gets a specified workspace configuration."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kusion workspace show\n")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  # Show a workspace configuration\n  kusion workspace show dev\n")),(0,n.kt)("h3",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"  -h, --help   help for show\n")),(0,n.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,n.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/next/user_docs/reference/cli/kusion/kusion_workspace"},"kusion workspace"),"\t - Workspace is a logical concept representing a target that stacks will be deployed to")),(0,n.kt)("h6",{id:"auto-generated-by-spf13cobra-on-4-jan-2024"},"Auto generated by spf13/cobra on 4-Jan-2024"))}u.isMDXComponent=!0}}]);