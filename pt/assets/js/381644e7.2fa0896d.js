"use strict";(self.webpackChunktwo=self.webpackChunktwo||[]).push([[401],{8668:(e,a,s)=>{s.d(a,{Z:()=>o});var t=s(7294);const o=e=>{let{children:a}=e;return t.createElement("div",{id:"tip",style:{margin:"24px 0"}},t.createElement("section",{className:"bg-[#E8F0FE] p-6 rounded-md dark:bg-[#E8F0FEDB] grid grid-flow-col gap-x-2 items-center justify-start"},t.createElement("div",{className:"text-[#005FEE]"},t.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t.createElement("path",{d:"M9 13H11V15H9V13ZM9 5H11V11H9V5ZM9.99 0C4.47 0 0 4.48 0 10C0 15.52 4.47 20 9.99 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 9.99 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z",fill:"currentColor"}))),t.createElement("span",{className:"text-[#005FEE] text-base"},a)))}},3036:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>c,contentTitle:()=>u,default:()=>b,frontMatter:()=>m,metadata:()=>p,toc:()=>g});var t=s(7462),o=(s(7294),s(3905)),i=s(4178),d=s(8668),n=s(1610),r=s(8683),l=s(9246);const m={authors:"ouweiya",date:new Date("2021-12-16T00:00:00.000Z")},u="Notas de atualiza\xe7\xe3o do YouTube\u2122 Dual Caption 3.6.0",p={permalink:"/pt/3_6_0",source:"@site/i18n/pt/docusaurus-plugin-content-blog/3_6_0/index.mdx",title:"Notas de atualiza\xe7\xe3o do YouTube\u2122 Dual Caption 3.6.0",description:"Corrigir a mesclagem de instru\xe7\xf5es \ud83c\udf89",date:"2021-12-16T00:00:00.000Z",formattedDate:"16 de dezembro de 2021",tags:[],hasTruncateMarker:!1,authors:[{name:"ouweiya",title:"Web Development",url:"https://github.com/ouweiya",imageURL:"img/avatar.png",key:"ouweiya"}],frontMatter:{authors:"ouweiya",date:"2021-12-16T00:00:00.000Z"},prevItem:{title:"Notas de atualiza\xe7\xe3o do YouTube\u2122 Dual Caption 3.6.5",permalink:"/pt/3_6_5"},nextItem:{title:"Notas de atualiza\xe7\xe3o do YouTube\u2122 Dual Caption 3.5.0",permalink:"/pt/3_5_0"}},c={authorsImageUrls:[void 0]},g=[{value:"Corrigir a mesclagem de instru\xe7\xf5es \ud83c\udf89",id:"corrigir-a-mesclagem-de-instru\xe7\xf5es-",level:3},{value:"Legendas duplas d\xe3o prioridade \xe0s legendas de v\xeddeo",id:"legendas-duplas-d\xe3o-prioridade-\xe0s-legendas-de-v\xeddeo",level:3},{value:"Desativar estilos personalizados",id:"desativar-estilos-personalizados",level:3},{value:"Baixe as legendas na mesma ordem em que s\xe3o exibidas",id:"baixe-as-legendas-na-mesma-ordem-em-que-s\xe3o-exibidas",level:3}],v={toc:g};function b(e){let{components:a,...s}=e;return(0,o.kt)("wrapper",(0,t.Z)({},v,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"corrigir-a-mesclagem-de-instru\xe7\xf5es-"},"Corrigir a mesclagem de instru\xe7\xf5es \ud83c\udf89"),(0,o.kt)("p",null," Na vers\xe3o anterior, a mesclagem de declara\xe7\xf5es n\xe3o era feita para seguir o pr\xf3prio comportamento do YouTube."),(0,o.kt)("p",null,"Isso fez com que as frases ficassem entrecortadas ao reproduzir o v\xeddeo, e o download de legendas tamb\xe9m fez com que a linha do tempo ficasse desordenada."),(0,o.kt)("p",null,"Na vers\xe3o 3.6.0, esse problema foi corrigido e mais detalhes foram otimizados."),(0,o.kt)("p",null,"Espa\xe7os extras removidos nas instru\xe7\xf5es de mesclagem."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," 1\n 00:00:03,678 --\x3e 00:00:05,960\n means that many aspects  of our lives\n \u610f\u5473\u7740 \u6211\u4eec\u751f\u6d3b\u7684\u8bb8\u591a\u65b9\u9762\n\n 2\n 00:00:05,960 --\x3e 00:00:08,214are regulated  by a weird entity.\n \u90fd \u53d7\u5230\u4e00\u4e2a\u5947\u602a\u7684\u5b9e\u4f53\u7684\u76d1\u7ba1\u3002\n\n 3\n 00:00:09,050 --\x3e 00:00:13,453It feels like a huge bureaucracy is making decisions over our heads.\n \u611f\u89c9\u5c31\u50cf\u4e00\u4e2a\u5de8\u5927\u7684\u5b98\u50da\u673a\u6784 \u6b63\u5728\u6211\u4eec\u7684\u5934\u8111\u4e2d\u505a\u51fa\u51b3\u5b9a\u3002\n")),(0,o.kt)("p",null,"Removida a linha do tempo em branco para baixar legendas."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," 1\n 00:00:00,000 --\x3e 00:00:00,500\n\n\n\n 2\n 00:00:00,500 --\x3e 00:00:03,090\n PETE LEPAGE: You can now upload extensions using Manifest\n PETE LEPAGE: \u60a8\u73b0\u5728\u53ef\u4ee5 \u4f7f\u7528 Manifest V3 \u5c06\u6269\u5c55\u7a0b\u5e8f\u4e0a\u4f20\n\n 3\n 00:00:03,090 --\x3e 00:00:05,100\n V3 to the Chrome Web Store.\n \u5230 Chrome \u7f51\u4e0a\u5e94\u7528\u5e97\u3002\n")),(0,o.kt)("h3",{id:"legendas-duplas-d\xe3o-prioridade-\xe0s-legendas-de-v\xeddeo"},"Legendas duplas d\xe3o prioridade \xe0s legendas de v\xeddeo"),(0,o.kt)("p",null," Antigamente, as legendas bil\xedngues eram sempre traduzidas automaticamente, agora as legendas existentes do v\xeddeo ser\xe3o usadas primeiro e a tradu\xe7\xe3o autom\xe1tica ser\xe1 usada se n\xe3o houver legenda."),(0,o.kt)("p",null," Se o v\xeddeo bil\xedngue j\xe1 tiver legendas, um indicador de otimiza\xe7\xe3o ser\xe1 exibido."),(0,o.kt)("p",null," O download de legendas tamb\xe9m ter\xe1 a mesma otimiza\xe7\xe3o, com uma marca no meio do nome do arquivo."),(0,o.kt)(d.Z,{mdxType:"Tip"},"O logotipo indica que as legendas bil\xedngues atuais usam as legendas existentes do v\xeddeo, n\xe3o a tradu\xe7\xe3o autom\xe1tica."),(0,o.kt)("img",{src:n.Z,alt:"mark.png",width:"891",height:"262"}),(0,o.kt)("h3",{id:"desativar-estilos-personalizados"},"Desativar estilos personalizados"),(0,o.kt)("p",null," Esta vers\xe3o oferece a op\xe7\xe3o de desativar o estilo personalizado e pode definir a ordem e o espa\xe7amento das legendas de forma independente."),(0,o.kt)(d.Z,{mdxType:"Tip"},"Dica: A premissa dessa otimiza\xe7\xe3o \xe9 que as duas legendas devem corresponder exatamente."),(0,o.kt)("img",{src:r.Z,alt:"disableStyle.gif",width:"340",height:"585"}),(0,o.kt)("h3",{id:"baixe-as-legendas-na-mesma-ordem-em-que-s\xe3o-exibidas"},"Baixe as legendas na mesma ordem em que s\xe3o exibidas"),(0,o.kt)("img",{src:l.Z,alt:"order.gif",width:"340",height:"585"}),(0,o.kt)(i.Z,{mdxType:"WebStore"}))}b.isMDXComponent=!0},8683:(e,a,s)=>{s.d(a,{Z:()=>t});const t=s.p+"assets/images/disableStyle-5a584fb5346bb8ae46e78e9045523ed3.gif"},1610:(e,a,s)=>{s.d(a,{Z:()=>t});const t=s.p+"assets/images/mark-744331fde4a668b8e5dee726c5e5c257.png"},9246:(e,a,s)=>{s.d(a,{Z:()=>t});const t=s.p+"assets/images/order-82c7b2aafc836f5bc3709e8c1bc33f7c.gif"}}]);