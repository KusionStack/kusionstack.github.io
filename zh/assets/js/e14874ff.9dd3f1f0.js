"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76272],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(k,r(r({ref:t},c),{},{components:n})):i.createElement(k,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={id:"configuration",sidebar_label:"Configuration"},r="Configuration",s={unversionedId:"concepts/configuration",id:"version-v0.11/concepts/configuration",title:"Configuration",description:"Kusion can be configured with some global settings, which are separate from the AppConfiguration written by the application developers and the workspace configurations written by the platform engineers.",source:"@site/docs_versioned_docs/version-v0.11/3-concepts/8-configuration.md",sourceDirName:"3-concepts",slug:"/concepts/configuration",permalink:"/zh/docs/v0.11/concepts/configuration",draft:!1,editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs_versioned_docs/version-v0.11/3-concepts/8-configuration.md",tags:[],version:"v0.11",lastUpdatedBy:"elliotxx",lastUpdatedAt:1736733008,formattedLastUpdatedAt:"2025\u5e741\u670813\u65e5",sidebarPosition:8,frontMatter:{id:"configuration",sidebar_label:"Configuration"},sidebar:"kusion",previous:{title:"Backend",permalink:"/zh/docs/v0.11/concepts/backend"},next:{title:"How Kusion Works?",permalink:"/zh/docs/v0.11/concepts/how-kusion-works"}},l={},p=[{value:"Configuration Management",id:"configuration-management",level:2},{value:"Get a Specified Configuration Item",id:"get-a-specified-configuration-item",level:3},{value:"List the Configuration Items",id:"list-the-configuration-items",level:3},{value:"Set a Specified Configuration Item",id:"set-a-specified-configuration-item",level:3},{value:"Unset a Specified Configuration Item",id:"unset-a-specified-configuration-item",level:3},{value:"Backend Configurations",id:"backend-configurations",level:2},{value:"Available Configuration Items",id:"available-configuration-items",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Kusion can be configured with some global settings, which are separate from the AppConfiguration written by the application developers and the workspace configurations written by the platform engineers. "),(0,a.kt)("p",null,"The configurations are only relevant to the Kusion itself, and can be managed by command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion config"),". The configuration items are specified, which are in the hierarchical format with full stop for segmentation, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"backends.current"),". For now, only the backend configurations are included."),(0,a.kt)("p",null,"The configuration is stored in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"${KUSION_HOME}/config.yaml"),". For sensitive data, such as password, access key id and secret, setting them in the configuration file is not recommended, using the corresponding environment variables is safer.  "),(0,a.kt)("h2",{id:"configuration-management"},"Configuration Management"),(0,a.kt)("p",null,"Kusion provides the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion config"),", and its sub-commands ",(0,a.kt)("inlineCode",{parentName:"p"},"get"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"set"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"unset")," to manage the configuration. The usages are shown as below:"),(0,a.kt)("h3",{id:"get-a-specified-configuration-item"},"Get a Specified Configuration Item"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion config get")," to get the value of a specified configuration item, only the registered item can be obtained correctly. The example is as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# get a configuration item\nkusion config get backends.current\n")),(0,a.kt)("h3",{id:"list-the-configuration-items"},"List the Configuration Items"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion config list")," to list all the Kusion configurations, where the result is in the YAML format. The example is as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# list all the Kusion configurations\nkusion config list\n")),(0,a.kt)("h3",{id:"set-a-specified-configuration-item"},"Set a Specified Configuration Item"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion config set")," to set the value of a specified configuration item, where the type of the value of is also determinate. Kusion supports ",(0,a.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"int"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"bool"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"array")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"map")," as the value type, which should be conveyed in the following format through CLI."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"string"),": the original format, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"local-dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"oss-pre"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"int"),": convert to string, such as ",(0,a.kt)("inlineCode",{parentName:"li"},"3306"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"80"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool"),": convert to string, only support ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"array"),": convert to string with JSON marshal, such as ",(0,a.kt)("inlineCode",{parentName:"li"},'\'["mysql","oss"]\''),". To preserve the format, enclosing the string content in single quotes is a good idea, or there may be unexpected errors;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"map"),": convert to string with JSON marshal, such as ",(0,a.kt)("inlineCode",{parentName:"li"},'\'{"path":"\\etc"}\''),".")),(0,a.kt)("p",null,"Besides the type, some configuration items have more setting requirements. The configuration item dependency may exist, that is, a configuration item must be set after another item. And there may exist more restrictions for the configuration values themselves. For example, the valid keys for the map type value, the data range for the int type value. For detailed configuration item information, please refer to the following content of this article."),(0,a.kt)("p",null,"The example of setting configuration item is as blow."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# set a configuration item of type string\nkusion config set backends.pre.type mysql\n\n# set a configuration item of type int\nkusion config set backends.pre.configs.port 3306\n\n# set a configuration item of type map\nkusion config set backends.prod `{"configs":{"bucket":"kusion"},"type":"s3"}`\n')),(0,a.kt)("h3",{id:"unset-a-specified-configuration-item"},"Unset a Specified Configuration Item"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"kusion config unset")," to unset a specified configuration item. Be attention, some items have dependencies, which must be unset in a correct order. The example is as below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# unset a specified configuration item\nkusion config unset backends.pre\n")),(0,a.kt)("h2",{id:"backend-configurations"},"Backend Configurations"),(0,a.kt)("p",null,"The backend configurations define the place to store Workspace, Spec and State files. Multiple backends and current backend are supported to set."),(0,a.kt)("h3",{id:"available-configuration-items"},"Available Configuration Items"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.current"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the current used backend name. It can be set as the configured backend name. If not set, the default local backend will be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"map"),", a total backend configuration, contains type and config items, whose format is as below. It can be unset when the backend is not the current.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "type": "${backend_type}", # type string, required, support local, mysql, oss, s3.\n  "configs": ${backend_configs} # type map, optional for type local, required for the others, the specific keys depend on the type, refer to the description of backends.${name}.configs.\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.type"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the backend type, support ",(0,a.kt)("inlineCode",{parentName:"li"},"local"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"s3")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"oss"),". It can be unset when the backend is not the current, and the corresponding ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.configs")," are empty."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"map"),", the backend config items, whose format depends on the backend type and is as below. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# type local\n{\n  "path": "${local_path}" # type string, optional, the directory to store the files. If not set, use the default path ${KUSION_HOME}.\n}\n\n# type mysql\n  {\n    "dbName": "${mysql_db_name}", # type string, required, the database name.\n    "user": "${mysql_user}", # type string, required, the database user.\n    "password": "${mysql_password}", # type string, optional, the database password, which can be also obtained by environment variable KUSION_BACKEND_MYSQL_PASSWORD.\n    "host": "${mysql_host}", # type string, required, the database host.\n    "port": "${mysql_port}" # type string, optional, the database port. If not set, use the default port 3306.\n  }\n\n# type oss\n  {\n    "endpoint": "${oss_endpoint}", # type string, required, the oss endpoint.\n    "accessKeyID": "${oss_access_key_id}", # type string, optional, the oss access key id, which can be also obtained by environment variable OSS_ACCESS_KEY_ID.\n    "accessKeySecret": "${oss_access_key_secret}", # type string, optional, the oss access key secret, which can be also obtained by environment variable OSS_ACCESS_KEY_SECRET\n    "bucket": "${oss_bucket}", # type string, required, the oss bucket.\n    "prefix": "${oss_prefix}" # type string, optional, the prefix to store the files.\n  }\n\n  # type s3\n  {\n    "region": "${s3_region}", # type string, optional, the aws region, which can be also obtained by environment variables AWS_REGION and AWS_DEFAULT_REGION.\n    "endpoint": "${s3_endpoint}", # type string, optional, the aws endpoint.   \n    "accessKeyID": "${s3_access_key_id}", # type string, optional, the aws access key id, which can be also obtained by environment variable AWS_ACCESS_KEY_ID.\n    "accessKeySecret": "${s3_access_key_secret}", # type string, optional, the aws access key secret, which can be also obtained by environment variable AWS_SECRET_ACCESS_KEY\n    "bucket": "${s3_bucket}", # type string, required, the s3 bucket.\n    "prefix": "${s3_prefix}" # type string, optional, the prefix to store the files.\n  }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.path"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the path of local type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"local"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.dbName"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the database name of mysql type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.user"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the database user of mysql type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.password"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the database password of mysql type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),". It can be also obtained by environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"KUSION_BACKEND_MYSQL_PASSWORD"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.host"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the database host of mysql type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.port"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"int"),", the database port of mysql type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"mysql"),". If not set, the default value ",(0,a.kt)("inlineCode",{parentName:"li"},"3306")," will be used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.endpoint"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the endpoint of oss or s3 type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"oss")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"s3"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.accessKeyID"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the access key id of oss or s3 type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"oss")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"s3"),". For ",(0,a.kt)("inlineCode",{parentName:"li"},"oss"),", it can be also obtained by environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"OSS_ACCESS_KEY_ID"),"; while for s3, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_ACCESS_KEY_ID"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.accessKeySecret"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the access key secret of oss or s3 type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"oss")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"s3"),". For ",(0,a.kt)("inlineCode",{parentName:"li"},"oss"),", it can be also obtained by environment variable ",(0,a.kt)("inlineCode",{parentName:"li"},"OSS_ACCESS_KEY_SECRET"),"; while for s3, it is ",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_SECRET_ACCESS_KEY"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.bucket"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the bucket of oss or s3 type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"oss")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"s3"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.prefix"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the prefix to store the files of oss or s3 type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"oss")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"s3"),". "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"backends.${name}.configs.region"),": type ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),", the aws region of s3 type backend. It must be set after ",(0,a.kt)("inlineCode",{parentName:"li"},"backends.${name}.type")," and which must be ",(0,a.kt)("inlineCode",{parentName:"li"},"s3"),". It can be also obtained by environment variables ",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_REGION")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"AWS_DEFAULT_REGION"),", where the former is priority.")))}d.isMDXComponent=!0}}]);