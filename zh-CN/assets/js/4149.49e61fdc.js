"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4149],{3746:(t,e,r)=>{r.d(e,{ZP:()=>y,lG:()=>i});var n=r(7410);const a={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var o=r(7294),i={Prism:n.Z,theme:a};function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(){return c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},c.apply(this,arguments)}var s=/\r\n|\r|\n/,p=function(t){0===t.length?t.push({types:["plain"],content:"\n",empty:!0}):1===t.length&&""===t[0].content&&(t[0].content="\n",t[0].empty=!0)},u=function(t,e){var r=t.length;return r>0&&t[r-1]===e?t:t.concat(e)},h=function(t,e){var r=t.plain,n=Object.create(null),a=t.styles.reduce((function(t,r){var n=r.languages,a=r.style;return n&&!n.includes(e)||r.types.forEach((function(e){var r=c({},t[e],a);t[e]=r})),t}),n);return a.root=r,a.plain=c({},r,{backgroundColor:null}),a};function g(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&-1===e.indexOf(n)&&(r[n]=t[n]);return r}const y=function(t){function e(){for(var e=this,r=[],n=arguments.length;n--;)r[n]=arguments[n];t.apply(this,r),l(this,"getThemeDict",(function(t){if(void 0!==e.themeDict&&t.theme===e.prevTheme&&t.language===e.prevLanguage)return e.themeDict;e.prevTheme=t.theme,e.prevLanguage=t.language;var r=t.theme?h(t.theme,t.language):void 0;return e.themeDict=r})),l(this,"getLineProps",(function(t){var r=t.key,n=t.className,a=t.style,o=c({},g(t,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),i=e.getThemeDict(e.props);return void 0!==i&&(o.style=i.plain),void 0!==a&&(o.style=void 0!==o.style?c({},o.style,a):a),void 0!==r&&(o.key=r),n&&(o.className+=" "+n),o})),l(this,"getStyleForToken",(function(t){var r=t.types,n=t.empty,a=r.length,o=e.getThemeDict(e.props);if(void 0!==o){if(1===a&&"plain"===r[0])return n?{display:"inline-block"}:void 0;if(1===a&&!n)return o[r[0]];var i=n?{display:"inline-block"}:{},l=r.map((function(t){return o[t]}));return Object.assign.apply(Object,[i].concat(l))}})),l(this,"getTokenProps",(function(t){var r=t.key,n=t.className,a=t.style,o=t.token,i=c({},g(t,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:e.getStyleForToken(o),key:void 0});return void 0!==a&&(i.style=void 0!==i.style?c({},i.style,a):a),void 0!==r&&(i.key=r),n&&(i.className+=" "+n),i})),l(this,"tokenize",(function(t,e,r,n){var a={code:e,grammar:r,language:n,tokens:[]};t.hooks.run("before-tokenize",a);var o=a.tokens=t.tokenize(a.code,a.grammar,a.language);return t.hooks.run("after-tokenize",a),o}))}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.render=function(){var t=this.props,e=t.Prism,r=t.language,n=t.code,a=t.children,o=this.getThemeDict(this.props),i=e.languages[r];return a({tokens:function(t){for(var e=[[]],r=[t],n=[0],a=[t.length],o=0,i=0,l=[],c=[l];i>-1;){for(;(o=n[i]++)<a[i];){var h=void 0,g=e[i],y=r[i][o];if("string"==typeof y?(g=i>0?g:["plain"],h=y):(g=u(g,y.type),y.alias&&(g=u(g,y.alias)),h=y.content),"string"==typeof h){var f=h.split(s),d=f.length;l.push({types:g,content:f[0]});for(var v=1;v<d;v++)p(l),c.push(l=[]),l.push({types:g,content:f[v]})}else i++,e.push(g),r.push(h),n.push(0),a.push(h.length)}i--,e.pop(),r.pop(),n.pop(),a.pop()}return p(l),c}(void 0!==i?this.tokenize(e,n,i,r):[n]),className:"prism-code language-"+r,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},e}(o.Component)},8550:(t,e,r)=>{r.d(e,{pl2:()=>u,twc:()=>h,omf:()=>g});var n=r(7294),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=n.createContext&&n.createContext(a),i=function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var a in e=arguments[r])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},i.apply(this,arguments)},l=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(t);a<n.length;a++)e.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(t,n[a])&&(r[n[a]]=t[n[a]])}return r};function c(t){return t&&t.map((function(t,e){return n.createElement(t.tag,i({key:e},t.attr),c(t.child))}))}function s(t){return function(e){return n.createElement(p,i({attr:i({},t.attr)},e),c(t.child))}}function p(t){var e=function(e){var r,a=t.attr,o=t.size,c=t.title,s=l(t,["attr","size","title"]),p=o||e.size||"1em";return e.className&&(r=e.className),t.className&&(r=(r?r+" ":"")+t.className),n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,a,s,{className:r,style:i(i({color:t.color||e.color},e.style),t.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),t.children)};return void 0!==o?n.createElement(o.Consumer,null,(function(t){return e(t)})):e(a)}function u(t){return s({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"polygon",attr:{fill:"#8BC34A",points:"24,3 28.7,6.6 34.5,5.8 36.7,11.3 42.2,13.5 41.4,19.3 45,24 41.4,28.7 42.2,34.5 36.7,36.7 34.5,42.2 28.7,41.4 24,45 19.3,41.4 13.5,42.2 11.3,36.7 5.8,34.5 6.6,28.7 3,24 6.6,19.3 5.8,13.5 11.3,11.3 13.5,5.8 19.3,6.6"}},{tag:"polygon",attr:{fill:"#CCFF90",points:"34.6,14.6 21,28.2 15.4,22.6 12.6,25.4 21,33.8 37.4,17.4"}}]})(t)}function h(t){return s({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#B0BEC5",d:"M37,42H5V32h32c2.8,0,5,2.2,5,5v0C42,39.8,39.8,42,37,42z"}},{tag:"path",attr:{fill:"#37474F",d:"M10,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S11.7,34,10,34z M10,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C11,37.6,10.6,38,10,38z"}},{tag:"path",attr:{fill:"#37474F",d:"M19,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S20.7,34,19,34z M19,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C20,37.6,19.6,38,19,38z"}},{tag:"path",attr:{fill:"#37474F",d:"M37,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S38.7,34,37,34z M37,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C38,37.6,37.6,38,37,38z"}},{tag:"path",attr:{fill:"#37474F",d:"M28,34c-1.7,0-3,1.3-3,3s1.3,3,3,3s3-1.3,3-3S29.7,34,28,34z M28,38c-0.6,0-1-0.4-1-1c0-0.6,0.4-1,1-1 s1,0.4,1,1C29,37.6,28.6,38,28,38z"}},{tag:"path",attr:{fill:"#FF9800",d:"M35,31H11c-1.1,0-2-0.9-2-2V7c0-1.1,0.9-2,2-2h24c1.1,0,2,0.9,2,2v22C37,30.1,36.1,31,35,31z"}},{tag:"path",attr:{fill:"#8A5100",d:"M26.5,13h-7c-0.8,0-1.5-0.7-1.5-1.5v0c0-0.8,0.7-1.5,1.5-1.5h7c0.8,0,1.5,0.7,1.5,1.5v0 C28,12.3,27.3,13,26.5,13z"}},{tag:"path",attr:{fill:"#607D8B",d:"M37,31H5v2h32c2.2,0,4,1.8,4,4s-1.8,4-4,4H5v2h32c3.3,0,6-2.7,6-6S40.3,31,37,31z"}}]})(t)}function g(t){return s({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#FFC107",d:"M44,36H30V16c0-1.1,0.9-2,2-2h8c0.6,0,1.2,0.3,1.6,0.8l6,7.7c0.3,0.4,0.4,0.8,0.4,1.2V32 C48,34.2,46.2,36,44,36z"}},{tag:"g",attr:{fill:"#9575CD"},child:[{tag:"path",attr:{d:"M8,36h22V13c0-2.2-1.8-4-4-4H4v23C4,34.2,5.8,36,8,36z"}},{tag:"rect",attr:{y:"9",width:"10",height:"2"}},{tag:"rect",attr:{y:"14",width:"10",height:"2"}},{tag:"rect",attr:{y:"19",width:"10",height:"2"}},{tag:"rect",attr:{y:"24",width:"10",height:"2"}}]},{tag:"g",attr:{fill:"#7E57C2"},child:[{tag:"rect",attr:{x:"4",y:"11",width:"16",height:"2"}},{tag:"rect",attr:{x:"4",y:"16",width:"12",height:"2"}},{tag:"rect",attr:{x:"4",y:"21",width:"8",height:"2"}},{tag:"rect",attr:{x:"4",y:"26",width:"4",height:"2"}}]},{tag:"g",attr:{fill:"#37474F"},child:[{tag:"circle",attr:{cx:"39",cy:"36",r:"5"}},{tag:"circle",attr:{cx:"16",cy:"36",r:"5"}}]},{tag:"g",attr:{fill:"#78909C"},child:[{tag:"circle",attr:{cx:"39",cy:"36",r:"2.5"}},{tag:"circle",attr:{cx:"16",cy:"36",r:"2.5"}}]},{tag:"path",attr:{fill:"#455A64",d:"M44,26h-3.6c-0.3,0-0.5-0.1-0.7-0.3l-1.4-1.4c-0.2-0.2-0.4-0.3-0.7-0.3H34c-0.6,0-1-0.4-1-1v-6 c0-0.6,0.4-1,1-1h5.5c0.3,0,0.6,0.1,0.8,0.4l4.5,5.4c0.1,0.2,0.2,0.4,0.2,0.6V25C45,25.6,44.6,26,44,26z"}}]})(t)}},7856:(t,e,r)=>{function n(t,e,r,n){var a,o=!1,i=0;function l(){a&&clearTimeout(a)}function c(){for(var c=arguments.length,s=new Array(c),p=0;p<c;p++)s[p]=arguments[p];var u=this,h=Date.now()-i;function g(){i=Date.now(),r.apply(u,s)}function y(){a=void 0}o||(n&&!a&&g(),l(),void 0===n&&h>t?g():!0!==e&&(a=setTimeout(n?y:g,void 0===n?t-h:t)))}return"boolean"!=typeof e&&(n=r,r=e,e=void 0),c.cancel=function(){l(),o=!0},c}r.d(e,{P:()=>n})}}]);