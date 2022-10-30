"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9559],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},_={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=s(i),d=l,k=u["".concat(p,".").concat(d)]||u[d]||_[d]||r;return i?n.createElement(k,o(o({ref:t},c),{},{components:i})):n.createElement(k,o({ref:t},c))}));function d(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,o=new Array(r);o[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,o[1]=a;for(var s=2;s<r;s++)o[s]=i[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},71500:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>_,frontMatter:()=>r,metadata:()=>a,toc:()=>s});var n=i(87462),l=(i(67294),i(3905));const r={title:"net",linkTitle:"net",type:"docs",description:"net \u5305 - \u7f51\u7edcIP\u5904\u7406",weight:100},o=void 0,a={unversionedId:"reference/lang/model/net",id:"reference/lang/model/net",title:"net",description:"net \u5305 - \u7f51\u7edcIP\u5904\u7406",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/reference/lang/model/net.md",sourceDirName:"reference/lang/model",slug:"/reference/lang/model/net",permalink:"/zh-CN/docs/reference/lang/model/net",editUrl:"https://github.com/KusionStack/kusionstack.io/blob/main/docs/reference/lang/model/net.md",tags:[],version:"current",lastUpdatedBy:"Dayuan",lastUpdatedAt:1667102269,formattedLastUpdatedAt:"2022/10/30",frontMatter:{title:"net",linkTitle:"net",type:"docs",description:"net \u5305 - \u7f51\u7edcIP\u5904\u7406",weight:100},sidebar:"reference",previous:{title:"math",permalink:"/zh-CN/docs/reference/lang/model/math"},next:{title:"regex",permalink:"/zh-CN/docs/reference/lang/model/regex"}},p={},s=[{value:"split_host_port",id:"split_host_port",level:2},{value:"join_host_port",id:"join_host_port",level:2},{value:"fqdn",id:"fqdn",level:2},{value:"parse_IP",id:"parse_ip",level:2},{value:"to_IP4",id:"to_ip4",level:2},{value:"to_IP16",id:"to_ip16",level:2},{value:"IP_string",id:"ip_string",level:2},{value:"is_IPv4",id:"is_ipv4",level:2},{value:"is_IP",id:"is_ip",level:2},{value:"is_loopback_IP",id:"is_loopback_ip",level:2},{value:"is_multicast_IP",id:"is_multicast_ip",level:2},{value:"is_interface_local_multicast_IP",id:"is_interface_local_multicast_ip",level:2},{value:"is_link_local_multicast_IP",id:"is_link_local_multicast_ip",level:2},{value:"is_link_local_unicast_IP",id:"is_link_local_unicast_ip",level:2},{value:"is_global_unicast_IP",id:"is_global_unicast_ip",level:2},{value:"is_unspecified_IP",id:"is_unspecified_ip",level:2}],c={toc:s};function _(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"split_host_port"},"split_host_port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"split_host_port(ip_end_point: str) -> List[str]")),(0,l.kt)("p",null,"Split the 'host' and 'port' from the ip end point."),(0,l.kt)("h2",{id:"join_host_port"},"join_host_port"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"join_host_port(host, port) -> str")),(0,l.kt)("p",null,"Merge the 'host' and 'port'."),(0,l.kt)("h2",{id:"fqdn"},"fqdn"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"fqdn(name: str = '') -> str")),(0,l.kt)("p",null,"Return Fully Qualified Domain Name (FQDN)."),(0,l.kt)("h2",{id:"parse_ip"},"parse_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"parse_IP(ip) -> str")),(0,l.kt)("p",null,"Parse 'ip' to a real IP address"),(0,l.kt)("h2",{id:"to_ip4"},"to_IP4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"to_IP4(ip) -> str")),(0,l.kt)("p",null,"Get the IP4 form of 'ip'."),(0,l.kt)("h2",{id:"to_ip16"},"to_IP16"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"to_IP16(ip) -> int")),(0,l.kt)("p",null,"Get the IP16 form of 'ip'."),(0,l.kt)("h2",{id:"ip_string"},"IP_string"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"IP_string(ip: str | int) -> str")),(0,l.kt)("p",null,"Get the IP string."),(0,l.kt)("h2",{id:"is_ipv4"},"is_IPv4"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_IPv4(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a IPv4 one."),(0,l.kt)("h2",{id:"is_ip"},"is_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether ip is a valid ip address."),(0,l.kt)("h2",{id:"is_loopback_ip"},"is_loopback_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_loopback_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a loopback one."),(0,l.kt)("h2",{id:"is_multicast_ip"},"is_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a multicast one."),(0,l.kt)("h2",{id:"is_interface_local_multicast_ip"},"is_interface_local_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_interface_local_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a interface, local and multicast one."),(0,l.kt)("h2",{id:"is_link_local_multicast_ip"},"is_link_local_multicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_link_local_multicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a link local and multicast one."),(0,l.kt)("h2",{id:"is_link_local_unicast_ip"},"is_link_local_unicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_link_local_unicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a link local and unicast one."),(0,l.kt)("h2",{id:"is_global_unicast_ip"},"is_global_unicast_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_global_unicast_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a global and unicast one."),(0,l.kt)("h2",{id:"is_unspecified_ip"},"is_unspecified_IP"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"is_unspecified_IP(ip: str) -> bool")),(0,l.kt)("p",null,"Whether 'ip' is a unspecified one."))}_.isMDXComponent=!0}}]);