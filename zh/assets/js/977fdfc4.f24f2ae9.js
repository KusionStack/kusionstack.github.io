"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[20135],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const o="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>S});var n=a(87462),r=a(67294),o=a(86010),i=a(72957),s=a(76775),l=a(75238),u=a(33609),c=a(92560);function p(e){return function(e){var t;return(null==(t=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=d(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[l,u]=h({queryString:a,groupId:n}),[p,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),k=(()=>{const e=l??p;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{k&&s(k)}),[k]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var k=a(51048);const g="tabList__CuJ",b="tabItem_LNqP";function y(e){let{className:t,block:a,selectedValue:s,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==s&&(p(t),l(n))},m=e=>{var t;let a=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",b,null==i?void 0:i.className,{"tabs__item--active":s===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",g)},r.createElement(y,(0,n.Z)({},e,t)),r.createElement(v,(0,n.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return r.createElement(w,(0,n.Z)({key:String(t)},e))}},39854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),o=a(73992),i=a(18679);const s={id:"databse"},l="Managed Databases",u={unversionedId:"configuration-walkthrough/databse",id:"configuration-walkthrough/databse",title:"Managed Databases",description:"You could also specify a database needed for the application. That can be achieved via a mysql or a postgres module (or bring-your-own-module) in the accessories field in AppConfiguration to achieve that.",source:"@site/docs/kusion/4-configuration-walkthrough/6-database.md",sourceDirName:"4-configuration-walkthrough",slug:"/configuration-walkthrough/databse",permalink:"/zh/docs/next/configuration-walkthrough/databse",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/kusion/4-configuration-walkthrough/6-database.md",tags:[],version:"current",lastUpdatedBy:"ruquanzhao",lastUpdatedAt:1720086218,formattedLastUpdatedAt:"2024\u5e747\u67084\u65e5",sidebarPosition:6,frontMatter:{id:"databse"},sidebar:"kusion",previous:{title:"Application Networking",permalink:"/zh/docs/next/configuration-walkthrough/networking"},next:{title:"Secrets",permalink:"/zh/docs/next/configuration-walkthrough/secret"}},c={},p=[{value:"Import",id:"import",level:2},{value:"Types of Database offerings",id:"types-of-database-offerings",level:2},{value:"Cloud Credentials and Permissions",id:"cloud-credentials-and-permissions",level:2},{value:"Configure Database",id:"configure-database",level:2},{value:"Provision a Cloud Database",id:"provision-a-cloud-database",level:3},{value:"AWS RDS Instance",id:"aws-rds-instance",level:4},{value:"AliCloud RDS Instance",id:"alicloud-rds-instance",level:4},{value:"Local Database",id:"local-database",level:3},{value:"Database Credentials",id:"database-credentials",level:2},{value:"Configure Network Access",id:"configure-network-access",level:2},{value:"Subnet ID",id:"subnet-id",level:3},{value:"Private Routing",id:"private-routing",level:3}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"managed-databases"},"Managed Databases"),(0,r.kt)("p",null,"You could also specify a database needed for the application. That can be achieved via a ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," or a ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," module (or bring-your-own-module) in the ",(0,r.kt)("inlineCode",{parentName:"p"},"accessories")," field in ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration")," to achieve that."),(0,r.kt)("p",null,"You can currently have several databases with ",(0,r.kt)("strong",{parentName:"p"},"different database names")," for an application at the same time."),(0,r.kt)("h2",{id:"import"},"Import"),(0,r.kt)("p",null,"In the examples below, we are using schemas defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"kam")," package and the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," Kusion Module. For more details on KCL package and module import, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/configuration-walkthrough/overview#configuration-file-overview"},"Configuration File Overview"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"import")," statements needed for the following walkthrough:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"import kam.v1.app_configuration as ac\nimport service\nimport service.container as c\nimport mysql\nimport postgres\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kcl.mod")," must contain reference to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql")," module or ",(0,r.kt)("inlineCode",{parentName:"p"},"postgres")," module:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#...\n\n[dependencies]\nmysql = { oci = "oci://ghcr.io/kusionstack/mysql", tag = "0.2.0" }\npostgres = { oci = "oci://ghcr.io/kusionstack/postgres", tag = "0.2.0" }\n#...\n')),(0,r.kt)("h2",{id:"types-of-database-offerings"},"Types of Database offerings"),(0,r.kt)("p",null,"As of version 0.11.0, Kusion supports the following database offerings on the cloud:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MySQL and PostgreSQL Relational Database Service (RDS) on ",(0,r.kt)("a",{parentName:"li",href:"https://aws.amazon.com/rds/"},"AWS")),(0,r.kt)("li",{parentName:"ul"},"MySQL and PostgreSQL Relational Database Service (RDS) on ",(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/product/databases"},"AliCloud"))),(0,r.kt)("p",null,"More database types on more cloud vendors will be added in the future."),(0,r.kt)("p",null,"Alternatively, Kusion also supports creating a database at ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost")," for local testing needs. A local database is quicker to stand up and easier to manage. It also eliminates the need for an account and any relevant costs with the cloud providers in the case that a local testing environment is sufficient."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You do need a local Kubernetes cluster to run the local database workloads. You can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube")," or ",(0,r.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"Kind")," to get started.\nTo see an end-to-end use case for standing up a local testing environment including a local database, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/getting-started/deliver-quickstart"},"Kusion Quickstart"),".")),(0,r.kt)("h2",{id:"cloud-credentials-and-permissions"},"Cloud Credentials and Permissions"),(0,r.kt)("p",null,"Kusion provisions databases on the cloud via ",(0,r.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"terraform")," providers. For it to create ",(0,r.kt)("em",{parentName:"p"},"any")," cloud resources, it requires a set of credentials that belongs to an account that has the appropriate write access so the terraform provider can be initialized properly."),(0,r.kt)("p",null,"For AWS, the environment variables needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export AWS_REGION=us-east-1            # replace it with your region\nexport AWS_ACCESS_KEY_ID="xxxxxxxxxxx" # replace it with your AccessKey\nexport AWS_SECRET_ACCESS_KEY="xxxxxxx" # replace it with your SecretKey\n')),(0,r.kt)("p",null,"For AliCloud, the environment variables needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'export ALICLOUD_REGION=cn-shanghai     # replace it with your region\nexport ALICLOUD_ACCESS_KEY="xxxxxxxxx" # replace it with your AccessKey\nexport ALICLOUD_SECRET_KEY="xxxxxxxxx" # replace it with your SecretKey\n')),(0,r.kt)("p",null,"The user account that owns these credentials would need to have the proper permission policies attached to create databases and security groups. If you are using the cloud-managed policies, the policies needed to provision a database and configure firewall rules are listed below."),(0,r.kt)("p",null,"For AWS:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AmazonVPCFullAccess")," for creating and managing database firewall rules via security group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AmazonRDSFullAccess")," for creating and managing RDS instances")),(0,r.kt)("p",null,"For AliCloud:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunVPCFullAccess")," for creating and managing database firewall rules via security group"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AliyunRDSFullAccess")," for creating and managing RDS instances")),(0,r.kt)("p",null,"Alternatively, you can use customer managed policies if the cloud provider built-in policies don't meet your needs. The list of permissions needed are in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonRDSFullAccess.html#AmazonRDSFullAccess-json"},"AmazonRDSFullAccess Policy Document")," and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/aws-managed-policy/latest/reference/AmazonVPCFullAccess.html"},"AmazonVPCFullAccess Policy Document"),". It will most likely be a subset of the permissions in the policy documents."),(0,r.kt)("h2",{id:"configure-database"},"Configure Database"),(0,r.kt)("h3",{id:"provision-a-cloud-database"},"Provision a Cloud Database"),(0,r.kt)("p",null,"Assuming the steps in the ",(0,r.kt)("a",{parentName:"p",href:"#cloud-credentials-and-permissions"},"Cloud Credentials and Permissions")," section is setup properly, you can now provision cloud databases via Kusion."),(0,r.kt)("h4",{id:"aws-rds-instance"},"AWS RDS Instance"),(0,r.kt)("p",null,"To provision an AWS RDS instance with MySQL v8.0 or PostgreSQL v14.0, you can append the following YAML file to your own workspace configurations and update the corresponding workspace with command ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion workspace update"),". "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"MySQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    aws: \n      version: 5.0.1\n      source: hashicorp/aws\n      region: us-east-1 # Please replace with your own aws provider region\n\n# MySQL configurations for AWS RDS\nmodules: \n  kusionstack/mysql@0.1.0:\n    default: \n      cloud: aws\n      size: 20\n      instanceType: db.t3.micro\n      securityIPs: \n        - 0.0.0.0/0\n      suffix: "-mysql"\n'))),(0,r.kt)(i.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    aws: \n      version: 5.0.1\n      source: hashicorp/aws\n      region: us-east-1 # Please replace with your own aws provider region\n\n# PostgreSQL configurations for AWS RDS\nmodules: \n  kusionstack/postgres@0.1.0:\n    default: \n      cloud: aws\n      size: 20\n      instanceType: db.t3.micro\n      securityIPs: \n        - 0.0.0.0/0\n      suffix: "-postgres"\n')))),(0,r.kt)("p",null,"For KCL configuration file declarations: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"MySQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'wordpress: ac.AppConfiguration {\n    # ...\n    accessories: {\n        "mysql": mysql.MySQL {\n            type:   "cloud"\n            version: "8.0"\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pgadmin: ac.AppConfiguration {\n    # ...\n    accessories: {\n        "postgres": postgres.PostgreSQL {\n            type:   "cloud"\n            version: "14.0"\n        }\n    }\n}\n')))),(0,r.kt)("p",null,"It's highly recommended to replace ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0")," and closely manage the whitelist of IPs that can access the database for security purposes. The ",(0,r.kt)("inlineCode",{parentName:"p"},"0.0.0.0/0")," in the example above or if ",(0,r.kt)("inlineCode",{parentName:"p"},"securityIPs")," is omitted altogether will allow connections from anywhere which would typically be a security bad practice."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceType")," field determines the computation and memory capacity of the RDS instance. The ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.micro")," instance type in the example above represents the ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3")," instance class with a size of ",(0,r.kt)("inlineCode",{parentName:"p"},"micro"),". In the same ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3")," instance family there are also ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.small"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.medium"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"db.t3.2xlarge"),", etc."),(0,r.kt)("p",null,"The full list of supported ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceType")," values can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html#Concepts.DBInstanceClass.Support"},"here"),"."),(0,r.kt)("p",null,"You can also adjust the storage capacity for the database instance by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," field which is storage size measured in gigabytes. The minimum is 20. More details can be found ",(0,r.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#Concepts.Storage.GeneralSSD"},"here"),"."),(0,r.kt)("h4",{id:"alicloud-rds-instance"},"AliCloud RDS Instance"),(0,r.kt)("p",null,"To provision an Alicloud RDS instance with MySQL or PostgreSQL, you can append the following YAML file to your own workspace configurations and update the corresponding workspace with command ",(0,r.kt)("inlineCode",{parentName:"p"},"kusion workspace update"),". Note that AliCloud RDS has several additional fields such as ",(0,r.kt)("inlineCode",{parentName:"p"},"category"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"MySQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    alicloud:\n      version: 1.209.1\n      source: aliyun/alicloud\n      region: cn-beijing # Please replace with your own alicloud provider region\n\n# MySQL configurations for Alicloud RDS\nmodules: \n  kusionstack/mysql@0.1.0: \n    default: \n      cloud: alicloud\n      size: 20\n      instanceType: mysql.n2.serverless.1c\n      category: serverless_basic\n      privateRouting: false\n      subnetID: [your-subnet-id]\n      securityIPs: \n        - 0.0.0.0/0\n      suffix: "-mysql"\n'))),(0,r.kt)(i.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'runtimes: \n  terraform: \n    random: \n      version: 3.5.1\n      source: hashicorp/random\n    alicloud:\n      version: 1.209.1\n      source: aliyun/alicloud\n      region: cn-beijing # Please replace with your own alicloud provider region\n\n# PostgreSQL configurations for Alicloud RDS\nmodules: \n  kusionstack/postgres@0.1.0:\n    default:\n      cloud: alicloud\n      size: 20\n      instanceType: pg.n2.serverless.1c\n      category: serverless_basic\n      privateRouting: false\n      subnetID: [your-subnet-id]\n      securityIPs: \n        - 0.0.0.0/0\n      suffix: "-postgres"\n')))),(0,r.kt)("p",null,"For KCL configuration file declarations: "),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"MySQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'wordpress: ac.AppConfiguration {\n    # ...\n    accessories: {\n        "mysql": mysql.MySQL {\n            type:   "cloud"\n            version: "8.0"\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pgadmin: ac.AppConfiguration {\n    # ...\n    accessories: {\n        "postgres": postgres.PostgreSQL {\n            type:   "cloud"\n            version: "14.0"\n        }\n    }\n}\n')))),(0,r.kt)("p",null,"We will walkthrough ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting")," in the ",(0,r.kt)("a",{parentName:"p",href:"#configure-network-access"},"Configure Network Access")," section."),(0,r.kt)("p",null,"The full list of supported ",(0,r.kt)("inlineCode",{parentName:"p"},"instanceType")," values can be found in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-mysql/primary-apsaradb-rds-for-mysql-instance-types#concept-2096487"},"MySQL instance types(x86)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#concept-2096578"},"PostgreSQL instance types"))),(0,r.kt)("h3",{id:"local-database"},"Local Database"),(0,r.kt)("p",null,"To deploy a local database with MySQL v8.0 or PostgreSQL v14.0:"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"MySQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'wordpress: ac.AppConfiguration {\n    # ...\n    accessories: {\n        "mysql": mysql.MySQL {\n            type: "local"\n            version: "8.0"\n        }\n    }\n}\n'))),(0,r.kt)(i.Z,{value:"PostgreSQL",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'pgadmin: ac.AppConfiguration {\n    # ...\n    accessories: {\n        "postgres": postgres.PostgreSQL {\n            type:   "local"\n            version: "14.0"\n        }\n    }\n}\n')))),(0,r.kt)("h2",{id:"database-credentials"},"Database Credentials"),(0,r.kt)("p",null,"There is no need to manage the database credentials manually. Kusion will automatically generate a random password, set it as the credential when creating the database, and then inject the hostname, username and password into the application runtime."),(0,r.kt)("p",null,"You have the option to BYO (Bring Your Own) username for the database credential by specifying the ",(0,r.kt)("inlineCode",{parentName:"p"},"username")," attribute in the ",(0,r.kt)("inlineCode",{parentName:"p"},"workspace.yaml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'modules:\n  kusionstack/mysql@0.1.0:\n    default:\n      # ...\n      username: "my_username"\n')),(0,r.kt)("p",null,"You ",(0,r.kt)("strong",{parentName:"p"},"cannot")," bring your own password. The password will always be managed by Kusion automatically."),(0,r.kt)("p",null,"The database credentials are injected into the environment variables of the application container. You can access them via the following env vars:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# env | grep KUSION_DB\nKUSION_DB_HOST_WORDPRESS_MYSQL=wordpress.xxxxxxxx.us-east-1.rds.amazonaws.com\nKUSION_DB_USERNAME_WORDPRESS_MYSQL=xxxxxxxxx\nKUSION_DB_PASSWORD_WORDPRESS_MYSQL=xxxxxxxxx\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"More details about the environment of database credentials injected by Kusion can be found at ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/reference/modules/developer-schemas/database/mysql#credentials-and-connectivity"},"mysql credentials and connectivity")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/reference/modules/developer-schemas/database/postgres#credentials-and-connectivity"},"postgres credentials and connectivity"))),(0,r.kt)("p",null,"You can use these environment variables out of the box. Or most likely, your application might retrieve the connection details from a different set of environment variables. In that case, you can map the kusion environment variables to the ones expected by your application using the ",(0,r.kt)("inlineCode",{parentName:"p"},"$()")," expression. "),(0,r.kt)("p",null,"This example below will assign the value of ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_HOST_WORDPRESS_MYSQL")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_HOST"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_USERNAME_WORDPRESS_MYSQL")," into ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_USER"),", likewise for ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_PASSWORD_WORDPRESS_MYSQL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"WORDPRESS_DB_PASSWORD"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'wordpress: ac.AppConfiguration {\n    workload: service.Service {\n        containers: {\n            wordpress: c.Container {\n                image = "wordpress:6.3-apache"\n                env: {\n                    "WORDPRESS_DB_HOST": "$(KUSION_DB_HOST_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_USER": "$(KUSION_DB_USERNAME_WORDPRESS_MYSQL)"\n                    "WORDPRESS_DB_PASSWORD": "$(KUSION_DB_PASSWORD_WORDPRESS_MYSQL)"\n                }\n                # ...\n            }\n        }\n        # ...\n    }\n    accessories: {\n        # ...\n    }\n}\n')),(0,r.kt)("h2",{id:"configure-network-access"},"Configure Network Access"),(0,r.kt)("p",null,"You can also optionally configure the network access to the database as part of the ",(0,r.kt)("inlineCode",{parentName:"p"},"AppConfiguration"),". This is highly recommended because it dramatically increases the security posture of your cloud environment in the means of least privilege principle."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"securityIPs")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Database")," schema declares the list of network addresses that are allowed to access the database. The network addresses are in the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/what-is/cidr/"},"CIDR notation")," and can be either a private IP range (",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc1918"},"RFC-1918")," and ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc6598"},"RFC-6598")," address) or a public one."),(0,r.kt)("p",null,"If the database need to be accessed from a public location (which should most likely not be the case in a production environment), ",(0,r.kt)("inlineCode",{parentName:"p"},"securityIPs")," need to include the public IP address of the traffic source (For instance, if the RDS database needs to be accessed from your computer)."),(0,r.kt)("p",null,"To configure AWS RDS to restrict network access from a VPC with a CIDR of ",(0,r.kt)("inlineCode",{parentName:"p"},"10.0.1.0/24")," and a public IP of ",(0,r.kt)("inlineCode",{parentName:"p"},"103.192.227.125"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'modules: \n  kusionstack/mysql@0.1.0: \n    default: \n      cloud: aws\n      # ...\n      securityIPs: \n        - "10.0.1.0/24"\n        - "103.192.227.125/32"\n')),(0,r.kt)("p",null,"Depending on the cloud provider, the default behavior of the database firewall settings may differ if omitted."),(0,r.kt)("h3",{id:"subnet-id"},"Subnet ID"),(0,r.kt)("p",null,"On AWS, you have the option to launch the RDS instance inside a specific VPC if a ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," is present in the application configuration. By default, if ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," is not provided, the RDS will be created in the default VPC for that account. However, the recommendation is to self-manage your VPCs to provider better isolation from a network security perspective."),(0,r.kt)("p",null,"On AliCloud, the ",(0,r.kt)("inlineCode",{parentName:"p"},"subnetID")," is required. The concept of subnet maps to VSwitch in AliCloud."),(0,r.kt)("p",null,"To place the RDS instance into a specific VPC on Alicloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'modules: \n  kusionstack/mysql@0.1.0: \n    default: \n      cloud: alicloud\n      # ...\n      subnetID: "subnet-xxxxxxxxxxxxxxxx"\n')),(0,r.kt)("h3",{id:"private-routing"},"Private Routing"),(0,r.kt)("p",null,"There is an option to enforce private routing on certain cloud providers if both the workload and the database are running on the cloud."),(0,r.kt)("p",null,"On AliCloud, you can set the ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"True"),". The database host generated will be a private FQDN that is only resolvable and accessible from within the AliCloud VPCs. Setting ",(0,r.kt)("inlineCode",{parentName:"p"},"privateRouting")," flag to ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"aws")," is a no-op."),(0,r.kt)("p",null,"To enforce private routing on AliCloud:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"modules: \n  kusionstack/mysql@0.1.0: \n    default: \n      cloud: alicloud\n      # ...\n      privateRouting: true\n")),(0,r.kt)("p",null,"Kusion will then generate a private FQDN and inject it into the application runtime as the environment variable ",(0,r.kt)("inlineCode",{parentName:"p"},"KUSION_DB_HOST_<DATABASE_NAME>")," for the application to use. A complete list of Kusion-managed environment variables for mysql database can be found ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/next/reference/modules/developer-schemas/database/mysql#credentials-and-connectivity"},"here"),"."),(0,r.kt)("p",null,"Otherwise when using the public FQDN to connect to a database from the workload, the route will depend on cloud provider's routing preference. The options are generally either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Travel as far as possible on the cloud provider's global backbone network, or also referred to as cold potato routing, or"),(0,r.kt)("li",{parentName:"ul"},"Egress as early as possible to the public Internet and re-enter the cloud provider's datacenter later, or also referred to as hot potato routing")),(0,r.kt)("p",null,"The prior generally has better performance but is also more expensive."),(0,r.kt)("p",null,"You can find a good read on the ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/blogs/architecture/internet-routing-and-traffic-engineering/"},"AWS Blog")," or the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/virtual-network/ip-services/routing-preference-overview"},"Microsoft Learn"),"."))}m.isMDXComponent=!0}}]);