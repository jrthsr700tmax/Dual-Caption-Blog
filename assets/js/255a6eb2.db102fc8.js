"use strict";(self.webpackChunktwo=self.webpackChunktwo||[]).push([[510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),g=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=g(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=g(r),u=o,h=d["".concat(c,".").concat(u)]||d[u]||s[u]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var g=2;g<a;g++)i[g]=r[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4178:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294);const o=()=>n.createElement("section",{id:"webStore"},n.createElement("a",{href:"https://chrome.google.com/webstore/detail/youtube-dual-subtitles/hkbdddpiemdeibjoknnofflfgbgnebcm",target:"_blank",rel:"noreferrer",className:"bg-[#E8F0FE] p-4 rounded-md grid grid-flow-col items-center gap-x-3 max-w-max"},n.createElement("img",{src:"data:image/png;base64,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",alt:"webstore.png",width:"206",height:"58",className:"w-[206px] h-[58px] bg-white"}),n.createElement("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},n.createElement("path",{d:"M25.3333 12H20V4H12V12H6.66667L16 21.3333L25.3333 12ZM6.66667 24V26.6667H25.3333V24H6.66667Z",fill:"#3485FF"}))))},4641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>f,frontMatter:()=>p,metadata:()=>d,toc:()=>h});var n=r(7462),o=(r(7294),r(3905)),a=r(4178),i=r(2571),l=r(8912),c=r(1341),g=r(4501);const p={authors:"ouweiya",date:new Date("2022-04-07T00:00:00.000Z")},s="YouTube\u2122 \u53cc\u5b57\u5e55 3.6.5 \u66f4\u65b0\u8bf4\u660e",d={permalink:"/3_6_5",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-blog/3_6_5/index.mdx",title:"YouTube\u2122 \u53cc\u5b57\u5e55 3.6.5 \u66f4\u65b0\u8bf4\u660e",description:"### \u4fee\u590d\u5b57\u5e55\u4e0d\u6362\u884c",date:"2022-04-07T00:00:00.000Z",formattedDate:"2022\u5e744\u67087\u65e5",tags:[],hasTruncateMarker:!1,authors:[{name:"ouweiya",title:"Web Development",url:"https://github.com/ouweiya",imageURL:"img/avatar.png",key:"ouweiya"}],frontMatter:{authors:"ouweiya",date:"2022-04-07T00:00:00.000Z"},prevItem:{title:"YouTube\u2122 \u53cc\u5b57\u5e55 3.6.6 \u66f4\u65b0\u8bf4\u660e",permalink:"/3_6_6"},nextItem:{title:"YouTube\u2122 \u53cc\u5b57\u5e55 3.6.0 \u66f4\u65b0\u8bf4\u660e",permalink:"/3_6_0"}},u={authorsImageUrls:[void 0]},h=[{value:"\u4fee\u590d\u5b57\u5e55\u4e0d\u6362\u884c",id:"\u4fee\u590d\u5b57\u5e55\u4e0d\u6362\u884c",level:3},{value:"\u4fee\u590d\u5b57\u5e55\u63d0\u793a",id:"\u4fee\u590d\u5b57\u5e55\u63d0\u793a",level:3},{value:"\u6539\u5584\u624b\u67c4",id:"\u6539\u5584\u624b\u67c4",level:3},{value:"\u5b57\u5e55\u53f3\u952e\u83dc\u5355",id:"\u5b57\u5e55\u53f3\u952e\u83dc\u5355",level:3}],m={toc:h};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"\u4fee\u590d\u5b57\u5e55\u4e0d\u6362\u884c"},"\u4fee\u590d\u5b57\u5e55\u4e0d\u6362\u884c"),(0,o.kt)("p",null," \u5728\u4e0a\u4e00\u4e2a\u7248\u672c\u4e2d\u5f53\u5b57\u4f53\u592a\u5927\u65f6\u4f1a\u5bfc\u81f4\u5b57\u5e55\u6ea2\u51fa\u800c\u65e0\u6cd5\u6362\u884c\uff0c\u73b0\u5728\u4fee\u590d\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("img",{src:g.Z,alt:"subtitleWrap.png",width:"600",height:"698"}),(0,o.kt)("h3",{id:"\u4fee\u590d\u5b57\u5e55\u63d0\u793a"},"\u4fee\u590d\u5b57\u5e55\u63d0\u793a"),(0,o.kt)("p",null,"\u5728\u4ee5\u5f80\u7248\u672c\u4e2d\u5b57\u5e55\u63d0\u793a\u4e5f\u4f1a\u8fd0\u7528\u4e0a\u6837\u5f0f\uff0c\u73b0\u5728\u89c4\u907f\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("img",{src:c.Z,alt:"subtitleTips.png",width:"600",height:"682"}),(0,o.kt)("h3",{id:"\u6539\u5584\u624b\u67c4"},"\u6539\u5584\u624b\u67c4"),(0,o.kt)("p",null,"\u4ee5\u5f80\u5f53\u5b57\u5e55\u62d6\u52a8\u5230\u8fb9\u754c\u65f6\u624b\u67c4\u6309\u94ae\u96be\u4ee5\u62d6\u62fd\uff0c\u73b0\u5728\u901a\u8fc7\u6539\u53d8\u624b\u67c4\u4f4d\u7f6e\u66f4\u65b9\u4fbf\u4f7f\u7528\u3002"),(0,o.kt)("img",{src:i.Z,alt:"improveHandle.gif",width:"600",height:"338"}),(0,o.kt)("h3",{id:"\u5b57\u5e55\u53f3\u952e\u83dc\u5355"},"\u5b57\u5e55\u53f3\u952e\u83dc\u5355"),(0,o.kt)("p",null,"\u4ee5\u5f80\u5b57\u5e55\u53ef\u4ee5\u590d\u5236\uff0c\u4f46\u662f\u65e0\u6cd5\u8fdb\u884c\u53f3\u952e\u64cd\u4f5c\uff0c\u73b0\u5728\u6539\u5584\u4e86\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,o.kt)("img",{src:l.Z,alt:"subtitleRightClickMenu.gif",width:"600",height:"313"}),(0,o.kt)(a.Z,{mdxType:"WebStore"}))}f.isMDXComponent=!0},2571:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/improveHandle-9703fa973974d0e5d65d2cb00bca5635.gif"},8912:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subtitleRightClickMenu-7495fd993b1b635f131324275bfb1e29.gif"},1341:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subtitleTips-b01e33bad302bd578ed3a3be43525c13.png"},4501:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/subtitleWrap-95fd10fe71c17d7976e2529831faebae.png"}}]);