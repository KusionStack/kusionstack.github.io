"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="KCL Validation",l={unversionedId:"reference/lang/use_case/validation",id:"reference/lang/use_case/validation",title:"KCL Validation",description:"\u9664\u4e86\u4f7f\u7528 KCL \u4ee3\u7801\u751f\u6210 JSON/YAML \u7b49\u914d\u7f6e\u683c\u5f0f\uff0cKCL \u8fd8\u652f\u6301\u5bf9 JSON/YAML \u6570\u636e\u8fdb\u884c\u683c\u5f0f\u6821\u9a8c\u3002\u4f5c\u4e3a\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\uff0cKCL \u5728\u9a8c\u8bc1\u65b9\u9762\u51e0\u4e4e\u6db5\u76d6\u4e86 OpenAPI \u7684\u6240\u6709\u529f\u80fd\u3002\u5728 KCL \u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7ed3\u6784\u5b9a\u4e49\u6765\u7ea6\u675f\u914d\u7f6e\u6570\u636e\uff0c\u540c\u65f6\u652f\u6301\u901a\u8fc7 check \u5757\u81ea\u5b9a\u4e49\u7ea6\u675f\u89c4\u5219\uff0c\u5728 schema \u4e2d\u4e66\u5199\u6821\u9a8c\u8868\u8fbe\u5f0f\u5bf9 schema \u5b9a\u4e49\u7684\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\u548c\u7ea6\u675f\u3002\u901a\u8fc7 check \u8868\u8fbe\u5f0f\u53ef\u4ee5\u975e\u5e38\u6e05\u6670\u7b80\u5355\u5730\u6821\u9a8c\u8f93\u5165\u7684 JSON/YAML \u662f\u5426\u6ee1\u8db3\u76f8\u5e94\u7684 schema \u7ed3\u6784\u5b9a\u4e49\u4e0e check \u7ea6\u675f\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/use_case/validation.md",sourceDirName:"reference/lang/use_case",slug:"/reference/lang/use_case/validation",permalink:"/zh-CN/docs/reference/lang/use_case/validation",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/use_case/validation.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1672718015,formattedLastUpdatedAt:"2023/1/3",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"reference",previous:{title:"Use Case",permalink:"/zh-CN/docs/reference/lang/use_case/"},next:{title:"Kusion Model Library",permalink:"/zh-CN/docs/reference/model/"}},c={},d=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",level:2},{value:"\u672a\u6765\u8ba1\u5212",id:"\u672a\u6765\u8ba1\u5212",level:2}],p={toc:d};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kcl-validation"},"KCL Validation"),(0,a.kt)("p",null,"\u9664\u4e86\u4f7f\u7528 KCL \u4ee3\u7801\u751f\u6210 JSON/YAML \u7b49\u914d\u7f6e\u683c\u5f0f\uff0cKCL \u8fd8\u652f\u6301\u5bf9 JSON/YAML \u6570\u636e\u8fdb\u884c\u683c\u5f0f\u6821\u9a8c\u3002\u4f5c\u4e3a\u4e00\u79cd\u914d\u7f6e\u8bed\u8a00\uff0cKCL \u5728\u9a8c\u8bc1\u65b9\u9762\u51e0\u4e4e\u6db5\u76d6\u4e86 OpenAPI \u7684\u6240\u6709\u529f\u80fd\u3002\u5728 KCL \u4e2d\u53ef\u4ee5\u901a\u8fc7\u4e00\u4e2a\u7ed3\u6784\u5b9a\u4e49\u6765\u7ea6\u675f\u914d\u7f6e\u6570\u636e\uff0c\u540c\u65f6\u652f\u6301\u901a\u8fc7 check \u5757\u81ea\u5b9a\u4e49\u7ea6\u675f\u89c4\u5219\uff0c\u5728 schema \u4e2d\u4e66\u5199\u6821\u9a8c\u8868\u8fbe\u5f0f\u5bf9 schema \u5b9a\u4e49\u7684\u5c5e\u6027\u8fdb\u884c\u6821\u9a8c\u548c\u7ea6\u675f\u3002\u901a\u8fc7 check \u8868\u8fbe\u5f0f\u53ef\u4ee5\u975e\u5e38\u6e05\u6670\u7b80\u5355\u5730\u6821\u9a8c\u8f93\u5165\u7684 JSON/YAML \u662f\u5426\u6ee1\u8db3\u76f8\u5e94\u7684 schema \u7ed3\u6784\u5b9a\u4e49\u4e0e check \u7ea6\u675f\u3002"),(0,a.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,a.kt)("p",null,"\u5728 schema \u5b9a\u4e49\u5f53\u4e2d\u53ef\u4ee5\u4f7f\u7528 check \u5173\u952e\u5b57\u7f16\u5199 schema \u5c5e\u6027\u7684\u6821\u9a8c\u89c4\u5219, \u5982\u4e0b\u6240\u793a\uff0ccheck \u4ee3\u7801\u5757\u4e2d\u7684\u6bcf\u4e00\u884c\u90fd\u5bf9\u5e94\u4e00\u4e2a\u6761\u4ef6\u8868\u8fbe\u5f0f\uff0c\u5f53\u6ee1\u8db3\u6761\u4ef6\u65f6\u6821\u9a8c\u6210\u529f\uff0c\u5f53\u4e0d\u6ee1\u8db3\u6761\u4ef6\u65f6\u6821\u9a8c\u5931\u8d25, \u6761\u4ef6\u8868\u8fbe\u5f0f\u540e\u53ef\u8ddf ",(0,a.kt)("inlineCode",{parentName:"p"},', "check error message"')," \u8868\u793a\u5f53\u6821\u9a8c\u5931\u8d25\u65f6\u9700\u8981\u663e\u793a\u7684\u4fe1\u606f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import regex\n\nschema Sample:\n    foo: str  # Required, \u4e0d\u80fd\u4e3aNone/Undefined, \u4e14\u7c7b\u578b\u5fc5\u987b\u4e3astr\n    bar: int  # Required, \u4e0d\u80fd\u4e3aNone/Undefined, \u4e14\u7c7b\u578b\u5fc5\u987b\u4e3aint\n    fooList: [int]  # Required, \u4e0d\u80fd\u4e3aNone/Undefined, \u4e14\u7c7b\u578b\u5fc5\u987b\u4e3aint\u5217\u8868\n    color: "Red" | "Yellow" | "Blue"  # Required, \u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b\uff0c\u4e14\u5fc5\u987b\u4e3a"Red", "Yellow", "Blue"\u4e2d\u7684\u4e00\u4e2a\uff0c\u679a\u4e3e\u4f5c\u7528\n    id?: int  # Optional\uff0c\u53ef\u4ee5\u7559\u7a7a\uff0c\u7c7b\u578b\u5fc5\u987b\u4e3aint\n\n    check:\n        0 <= bar < 100  # bar\u5fc5\u987b\u5927\u4e8e\u7b49\u4e8e0\uff0c\u5c0f\u4e8e100\n        0 < len(fooList) < 100  # fooList\u4e0d\u80fd\u4e3aNone/Undefined\uff0c\u5e76\u4e14\u957f\u5ea6\u5fc5\u987b\u5927\u4e8e0,\u5c0f\u4e8e100\n        regex.match(foo, "^The.*Foo$") # regex \u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\n        bar in range(100) # range, bar\u8303\u56f4\u53ea\u80fd\u4e3a1\u523099\n        bar in [2, 4, 6, 8] # enum, bar\u53ea\u80fd\u53d62, 4, 6, 8\n        bar % 2 == 0  # bar\u5fc5\u987b\u4e3a2\u7684\u500d\u6570\n        all foo in fooList {\n            foo > 1\n        }  # fooList\u4e2d\u7684\u6240\u6709\u5143\u7d20\u5fc5\u987b\u5927\u4e8e1\n        any foo in fooList {\n            foo > 10\n        }  # fooList\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u5143\u7d20\u5fc5\u987b\u5927\u4e8e10\n        abs(id) > 10 if id  # check if \u8868\u8fbe\u5f0f\uff0c\u5f53 id \u4e0d\u4e3a\u7a7a\u65f6\uff0cid\u7684\u7edd\u5bf9\u503c\u5fc5\u987b\u5927\u4e8e10\n')),(0,a.kt)("p",null,"\u7efc\u4e0a\u6240\u8ff0\uff0cKCL Schema \u4e2d\u652f\u6301\u7684\u6821\u9a8c\u7c7b\u578b\u4e3a:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u6821\u9a8c\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u4f7f\u7528\u65b9\u6cd5"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u8303\u56f4\u6821\u9a8c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"<"),", ",(0,a.kt)("inlineCode",{parentName:"td"},">")," \u7b49\u6bd4\u8f83\u8fd0\u7b97\u7b26")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6b63\u5219\u6821\u9a8c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"regex")," \u7cfb\u7edf\u5e93\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"td"},"match")," \u7b49\u65b9\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u957f\u5ea6\u6821\u9a8c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"td"},"len")," \u5185\u7f6e\u51fd\u6570\uff0c\u53ef\u4ee5\u6c42 ",(0,a.kt)("inlineCode",{parentName:"td"},"list/dict/str")," \u7c7b\u578b\u7684\u53d8\u91cf\u957f\u5ea6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u679a\u4e3e\u6821\u9a8c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u5b57\u9762\u503c\u8054\u5408\u7c7b\u578b")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u975e\u7a7a\u6821\u9a8c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 schema \u7684\u53ef\u9009/\u5fc5\u9009\u5c5e\u6027")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u6761\u4ef6\u6821\u9a8c"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528 check if \u6761\u4ef6\u8868\u8fbe\u5f0f")))),(0,a.kt)("p",null,"\u57fa\u4e8e\u6b64\uff0cKCL \u63d0\u4f9b\u4e86\u76f8\u5e94\u7684",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/cli/kcl/vet"},"\u6821\u9a8c\u5de5\u5177"),"\u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh-CN/docs/reference/lang/xlang-api/rest-api#3-kclvmservice-%E6%9C%8D%E5%8A%A1"},"ValidateCode API")," \u76f4\u63a5\u5bf9 JSON/YAML \u6570\u636e\u8fdb\u884c\u6821\u9a8c\u3002\u6b64\u5916\uff0c\u901a\u8fc7 KCL schema \u7684 check \u8868\u8fbe\u5f0f\u53ef\u4ee5\u975e\u5e38\u6e05\u6670\u7b80\u5355\u5730\u6821\u9a8c\u8f93\u5165\u7684 JSON \u662f\u5426\u6ee1\u8db3\u76f8\u5e94\u7684 schema \u7ed3\u6784\u5b9a\u4e49\u4e0e check \u7ea6\u675f\u3002"),(0,a.kt)("h2",{id:"\u672a\u6765\u8ba1\u5212"},"\u672a\u6765\u8ba1\u5212"),(0,a.kt)("p",null,"KCL \u6821\u9a8c\u80fd\u529b\u7684\u63d0\u5347\u5c06\u9010\u6e10\u56f4\u7ed5\u201c\u9759\u6001\u5316\u201d\u65b9\u9762\u5c55\u5f00\u5de5\u4f5c\uff0c\u5373\u5728\u7f16\u8bd1\u65f6\u7ed3\u5408\u5f62\u5f0f\u5316\u9a8c\u8bc1\u7684\u80fd\u529b\u76f4\u63a5\u5206\u6790\u51fa\u6570\u636e\u662f\u5426\u6ee1\u8db3\u7ea6\u675f\u6761\u4ef6\uff0c\u7ea6\u675f\u6761\u4ef6\u662f\u5426\u51b2\u7a81\u7b49\u95ee\u9898\uff0c\u5e76\u4e14\u53ef\u4ee5\u901a\u8fc7 IDE \u5b9e\u65f6\u900f\u51fa\u7ea6\u675f\u9519\u8bef\uff0c\u800c\u65e0\u9700\u5728\u8fd0\u884c\u65f6\u53d1\u73b0\u9519\u8bef\u3002"))}s.isMDXComponent=!0}}]);