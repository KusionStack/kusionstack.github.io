"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),r=a(6010);const o="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(7462),r=a(7294),o=a(6010),s=a(2466),i=a(6775),l=a(1980),c=a(7392),u=a(12);function d(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function p(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=p(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,c]=h({queryString:a,groupId:n}),[d,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),f=(()=>{const e=l??d;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var f=a(2389);const g="tabList__CuJ",v="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const t=e.currentTarget,a=u.indexOf(t),n=c[a].value;n!==i&&(d(t),l(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;a=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;a=u[t]??u[u.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:p},s,{className:(0,o.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":i===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=b(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(k,(0,n.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},4969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),o=a(4866),s=a(5162);const i={},l="Configure Database",c={unversionedId:"user_docs/guides/iaas/database",id:"user_docs/guides/iaas/database",title:"Configure Database",description:"You can declare the use of relational database service by configuring the database accessory in AppConfiguration. Kusion will automatically generate the resources needed for your application to use the database based on your configuration code, including random password and services provided by cloud vendors like AWS and Alicloud. Moreover, Kusion will inject the information of database host address, username and password into the application container as environment variables with Kubernetes Secret. You can access the corresponding database in your application code through the relevant environment variables. The naming conventions of the environment variables are more detailed explained here",source:"@site/docs/user_docs/guides/iaas/database.md",sourceDirName:"user_docs/guides/iaas",slug:"/user_docs/guides/iaas/database",permalink:"/docs/user_docs/guides/iaas/database",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/user_docs/guides/iaas/database.md",tags:[],version:"current",lastUpdatedBy:"elliotxx",lastUpdatedAt:1695092146,formattedLastUpdatedAt:"Sep 19, 2023",frontMatter:{},sidebar:"user_docs",previous:{title:"User Guide",permalink:"/docs/user_docs/guides/"},next:{title:"Kubernetes",permalink:"/docs/user_docs/guides/working-with-k8s/"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Example",id:"example",level:2},{value:"Applying",id:"applying",level:2},{value:"Validation",id:"validation",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configure-database"},"Configure Database"),(0,r.kt)("p",null,"You can declare the use of ",(0,r.kt)("strong",{parentName:"p"},"relational database service")," by configuring the ",(0,r.kt)("inlineCode",{parentName:"p"},"database")," accessory in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". Kusion will automatically generate the resources needed for your application to use the database based on your configuration code, including random password and services provided by cloud vendors like ",(0,r.kt)("strong",{parentName:"p"},"AWS")," and ",(0,r.kt)("strong",{parentName:"p"},"Alicloud"),". Moreover, Kusion will inject the information of database ",(0,r.kt)("strong",{parentName:"p"},"host address"),", ",(0,r.kt)("strong",{parentName:"p"},"username")," and ",(0,r.kt)("strong",{parentName:"p"},"password")," into the application container as environment variables with Kubernetes Secret. You can access the corresponding database in your application code through the relevant environment variables. The naming conventions of the environment variables are more detailed explained ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/model/naming-conventions#sensitive-database-information"},"here")),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds#prerequisites"},"prerequisites")," in the guide for delivering the WordPress application on Kubernetes and clouds. "),(0,r.kt)("p",null,"The example below also requires you to have ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/getting-started/usecases/deliver-the-wordpress-application-on-kubernetes-and-clouds#init-project"},"initialized the project")," using the ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion init")," command, which will generate a ",(0,r.kt)("a",{parentName:"p",href:"/docs/user_docs/guides/working-with-k8s/deploy-application#kclmod"},(0,r.kt)("inlineCode",{parentName:"a"},"kcl.mod"))," file under the stack directory. "),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Below shows you how to configure relational database service for your application provided by AWS or Alicloud. Note that if your application defines its own environment variables for accessing the database, you can export them with ",(0,r.kt)("inlineCode",{parentName:"p"},"$(KUSION_DB_HOST)"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"$(KUSION_DB_USERNAME)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"$(KUSION_DB_PASSWORD)"),", just like the example shown below. You can find more information about the attributes of database accessory ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/model/catalog_models/database/doc_database"},"here"),". "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import models.schema.v1 as ac\nimport models.schema.v1.trait as t\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.container as c\nimport models.schema.v1.workload.container.probe as p\nimport models.schema.v1.workload.secret as sec\nimport models.schema.v1.workload.network as n\nimport models.schema.v1.monitoring as m\nimport models.schema.v1.accessories.database as db\n\n# base.k declares reusable configurations for all stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:4.8-apache"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD)"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: db.Database {\n        type: "aws"\n        engine: "mysql"\n        version: "5.7"\n        instanceType: "db.t3.micro"\n    }\n}\n'))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import models.schema.v1 as ac\nimport models.schema.v1.trait as t\nimport models.schema.v1.workload as wl\nimport models.schema.v1.workload.container as c\nimport models.schema.v1.workload.container.probe as p\nimport models.schema.v1.workload.secret as sec\nimport models.schema.v1.workload.network as n\nimport models.schema.v1.monitoring as m\nimport models.schema.v1.accessories.database as db\n\n# base.k declares reusable configurations for all stacks.\nwordpress: ac.AppConfiguration {\n    workload: wl.Service {\n        containers: {\n            "wordpress": c.Container {\n                image: "wordpress:4.8-apache"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD)"\n                }\n                resources: {\n                    "cpu": "1"\n                    "memory": "2Gi"\n                }\n            }\n        }\n        replicas: 2\n        ports: [\n            n.Port {\n                port: 80\n            }\n        ]\n    }\n    database: db.Database {\n        type: "alicloud"\n        engine: "MySQL"\n        version: "5.7"\n        size: 20\n        instanceType: "mysql.n2.serverless.1c"\n        category: "serverless_basic"\n        privateRouting: False\n\n        # SubnetID defines the virtual subnet ID associated with the VPC that the rds \n        # instance will be created in. The rds instance won\'t be created in user\'s own VPC \n        # if this field is not provided. \n        subnetID: "your_subnet_id"\n    }\n}\n')))),(0,r.kt)("h2",{id:"applying"},"Applying"),(0,r.kt)("p",null,"Before applying the resources, you need to configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"AccessKey")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"SecretKey")," as environment variables, along with the region if you are using certain cloud provider. "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_ACCESS_KEY_ID="AKIAQZDxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="oE/xxxx" # replace it with your SecretKey\nexport AWS_PROVIDER_REGION="xx-xxxx-x" # replace it with your AWS Region\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws iam account",src:a(4838).Z,width:"2874",height:"1398"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export ALICLOUD_ACCESS_KEY="LTAI5txxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="nxuowIxxx" # replace it with your SecretKey\nexport ALICLOUD_PROVIDER_REGION="xx-xxxxxxx" # replace it with your AliCloud Region\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud iam account",src:a(3725).Z,width:"1500",height:"629"})))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion apply")," to apply the database resources."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kusion apply\n")),(0,r.kt)("p",null,"The output is similar to: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with aws rds",src:a(7103).Z,width:"2276",height:"766"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"apply the wordpress application with alicloud rds",src:a(263).Z,width:"2504",height:"1996"})))),(0,r.kt)("h2",{id:"validation"},"Validation"),(0,r.kt)("p",null,"We can now verify the relational database service through logging into the cloud console page to view the RDS instance we just created. "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"AWS",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"aws rds instance",src:a(8678).Z,width:"2876",height:"964"}),"\n",(0,r.kt)("img",{alt:"aws rds instance detailed information",src:a(6915).Z,width:"1224",height:"274"}))),(0,r.kt)(s.Z,{value:"Alicloud",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alicloud rds instance",src:a(4811).Z,width:"1500",height:"748"})))))}m.isMDXComponent=!0},4811:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/alicloud-rds-instance-88d560e7fdab77f7d83592ae1ded6866.png"},7103:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-wordpress-application-with-aws-rds-580915491e85e04d050cf19bbf0f96cd.png"},263:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apply-wordpress-application-b757aedd0d5513207e0bd65019d7a4c2.png"},4838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-iam-account-2216105e7fa18fb2f7bf4be7e19f98bd.png"},6915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-rds-instance-detail-e0f1e737f54491f738769b152de96806.png"},8678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/aws-rds-instance-12f87b94fbc4a76319d8d9d39fd465d2.png"},3725:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/set-rds-access-9347ae09377aeb94d9f6d1e5d8688ab5.png"}}]);