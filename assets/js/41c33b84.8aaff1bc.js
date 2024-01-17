"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[9482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={title:"planckToDecimalFormatted",description:"Convert an integer (planck) number to a decimal and format the value."},i="planckToDecimalFormatted",l={unversionedId:"frontend/utils/helpers/planck-to-decimal-formatted",id:"frontend/utils/helpers/planck-to-decimal-formatted",title:"planckToDecimalFormatted",description:"Convert an integer (planck) number to a decimal and format the value.",source:"@site/docs/frontend/utils/helpers/planck-to-decimal-formatted.md",sourceDirName:"frontend/utils/helpers",slug:"/frontend/utils/helpers/planck-to-decimal-formatted",permalink:"/frontend/utils/helpers/planck-to-decimal-formatted",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/helpers/planck-to-decimal-formatted.md",tags:[],version:"current",frontMatter:{title:"planckToDecimalFormatted",description:"Convert an integer (planck) number to a decimal and format the value."},sidebar:"reference",previous:{title:"planckToDecimal",permalink:"/frontend/utils/helpers/planck-to-decimal"},next:{title:"decimalToPlanck",permalink:"/frontend/utils/helpers/decimal-to-planck"}},c={},s=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Returns",id:"returns",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plancktodecimalformatted"},"planckToDecimalFormatted"),(0,a.kt)("p",null,"This function takes a large planck number, a decimal count for the chain, and converts it\nto a string containing a formatted string with the token symbol if the chain has it\nconfigured in their runtime. See\n",(0,a.kt)("a",{parentName:"p",href:"/frontend/utils/helpers/planck-to-decimal"},"planckToDecimal")," for more details."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { planckToDecimalFormatted } from 'useink/utils';\nimport { getBalance } from 'useink/core';\n\nconst bal = await getBalance(apiPromise, address); // e.g. 1_500_000_000_000\n\nconst floatingPointVersion = planckToDecimalFormatted(apiPromise, bn);\nconsole.log(floatingPointVersion); // e.g. 1.500000000000 ROC\n\nconst withFourDecimals = planckToDecimalFormatted(apiPromise, bn, { decimals: 4 });\nconsole.log(withFourDecimals); // e.g. 1.5000 ROC\n")),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"string | undefined\n")))}d.isMDXComponent=!0}}]);