"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28141:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={},a="kusion preview",s={unversionedId:"reference/commands/kusion-preview",id:"reference/commands/kusion-preview",title:"kusion preview",description:"Preview a series of resource changes within the stack",source:"@site/docs/kusion/6-reference/1-commands/kusion-preview.md",sourceDirName:"6-reference/1-commands",slug:"/reference/commands/kusion-preview",permalink:"/zh/docs/next/reference/commands/kusion-preview",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/6-reference/1-commands/kusion-preview.md",tags:[],version:"current",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1736745225,formattedLastUpdatedAt:"2025\u5e741\u670813\u65e5",frontMatter:{},sidebar:"kusion",previous:{title:"kusion options",permalink:"/zh/docs/next/reference/commands/kusion-options"},next:{title:"kusion project create",permalink:"/zh/docs/next/reference/commands/kusion-project-create"}},p={},l=[{value:"Synopsis",id:"synopsis",level:3},{value:"Examples",id:"examples",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 26-Sep-2024",id:"auto-generated-by-spf13cobra-on-26-sep-2024",level:6}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kusion-preview"},"kusion preview"),(0,o.kt)("p",null,"Preview a series of resource changes within the stack"),(0,o.kt)("h3",{id:"synopsis"},"Synopsis"),(0,o.kt)("p",null,"Preview a series of resource changes within the stack."),(0,o.kt)("p",null," Create, update or delete resources according to the intent described in the stack. By default, Kusion will generate an execution preview and present it for your approval before taking any action."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"kusion preview [flags]\n")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  # Preview with specified work directory\n  kusion preview -w /path/to/workdir\n  \n  # Preview with specified arguments\n  kusion preview -D name=test -D age=18\n  \n  # Preview with specifying spec file\n  kusion preview --spec-file spec.yaml\n  \n  # Preview with ignored fields\n  kusion preview --ignore-fields="metadata.generation,metadata.managedFields"\n  \n  # Preview with json format result\n  kusion preview -o json\n  \n  # Preview without output style and color\n  kusion preview --no-style=true\n')),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"  -a, --all --detail            Automatically show all preview details, combined use with flag --detail\n  -D, --argument stringArray    Specify arguments on the command line\n      --backend string          The backend to use, supports 'local', 'oss' and 's3'.\n  -d, --detail                  Automatically show preview details with interactive options (default true)\n  -h, --help                    help for preview\n      --ignore-fields strings   Ignore differences of target fields\n      --no-style                no-style sets to RawOutput mode and disables all of styling\n  -o, --output string           Specify the output format\n      --spec-file string        Specify the spec file path as input, and the spec file must be located in the working directory or its subdirectories\n  -w, --workdir string          The work directory to run Kusion CLI.\n      --workspace string        The name of target workspace to operate in.\n")),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --profile string          Name of profile to capture. One of (none|cpu|heap|goroutine|threadcreate|block|mutex) (default "none")\n      --profile-output string   Name of the file to write the profile to (default "profile.pprof")\n')),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/zh/docs/next/reference/commands/"},"kusion"),"\t - Kusion is the Platform Orchestrator of Internal Developer Platform")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-26-sep-2024"},"Auto generated by spf13/cobra on 26-Sep-2024"))}u.isMDXComponent=!0}}]);