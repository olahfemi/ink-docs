"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[3355],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),k=o,f=d["".concat(s,".").concat(k)]||d[k]||u[k]||a;return t?r.createElement(f,i(i({ref:n},p),{},{components:t})):r.createElement(f,i({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},6473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={title:"\u26cf\ufe0f Pick Helpers",description:'Utility functions to easily "pick" deeply nested values or undefined'},i="Pick Helpers",l={unversionedId:"frontend/utils/pick",id:"frontend/utils/pick",title:"\u26cf\ufe0f Pick Helpers",description:'Utility functions to easily "pick" deeply nested values or undefined',source:"@site/docs/frontend/utils/pick.mdx",sourceDirName:"frontend/utils",slug:"/frontend/utils/pick",permalink:"/es/frontend/utils/pick",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/utils/pick.mdx",tags:[],version:"current",frontMatter:{title:"\u26cf\ufe0f Pick Helpers",description:'Utility functions to easily "pick" deeply nested values or undefined'},sidebar:"reference",previous:{title:"Getting Started",permalink:"/es/frontend/utils"},next:{title:"tx Helpers",permalink:"/es/frontend/utils/tx-utils"}},s={},c=[{value:"pickDecoded",id:"pickdecoded",level:2},{value:"pickError",id:"pickerror",level:2},{value:"pickDecodedError",id:"pickdecodederror",level:2},{value:"pickResultOk",id:"pickresultok",level:2},{value:"pickResultErr",id:"pickresulterr",level:2},{value:"pickCallInfo",id:"pickcallinfo",level:2},{value:"pickTxInfo",id:"picktxinfo",level:2}],p={toc:c},d="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pick-helpers"},"Pick Helpers"),(0,o.kt)("p",null,'Utility functions to easily "pick" deeply nested values or undefined'),(0,o.kt)("h2",{id:"pickdecoded"},"pickDecoded"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickDecoded")," picks a decoded value or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"DecodedContractResult")," returned\nby ",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-call"},"useCall"),", and similar hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const get = useCall<number>(flipper, 'get')\n\npickDecoded(get) // returns number or `undefined`\n")),(0,o.kt)("h2",{id:"pickerror"},"pickError"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickError")," picks a ",(0,o.kt)("inlineCode",{parentName:"p"},"DispatchError")," (thrown in one of many possible pallets) or undefined\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"DecodedContractResult")," returned by\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-call"},"useCall"),", and similar hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const get = useCall<number>(flipper, 'get')\n\npickError(get) // returns a Dispatch Error or `undefined`\n")),(0,o.kt)("h2",{id:"pickdecodederror"},"pickDecodedError"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickDecodedError")," picks a ",(0,o.kt)("inlineCode",{parentName:"p"},"DispatchError")," (thrown in one of many possible pallets) or\nundefined from ",(0,o.kt)("inlineCode",{parentName:"p"},"DecodedContractResult")," and returns a string error message. This is a\nwrapper around ",(0,o.kt)("a",{parentName:"p",href:"/frontend/core/contracts/decode-error"},"decodeError"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const get = useCall<number>(flipper, 'get')\n\nconst errMessage = pickDecodedError(\n  get,\n  flipper, \n  { ContractTrapped: 'This is a custom message. There was a panic in the contract!' }, \n  'Something went wrong... This is a default error message',\n);\n\nconsole.error(errMessage); // string or undefined\n")),(0,o.kt)("p",null,"// export function pickDecodedError(\n//   call: CallResult | undefined,\n//   contract: Contract,\n//   moduleMessages?: Record<RegistryErrorMethod, string>,\n//   defaultMessage?: string,\n// ): string | undefined {"),(0,o.kt)("h2",{id:"pickresultok"},"pickResultOk"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickResultOk")," picks the decoded Ok value or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if a contract returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Result<T,\nE>"),". Can be used with ",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-call"},"useCall")," and similar\nhooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface SuccessStructInContract {\n  Cool: string;\n}\n\ninterface SomeErrorEnumInContract {\n  NotCool: string;\n}\n\ninterface Response = { Ok?: SuccessStructInContract, Err?: SomeErrorEnumInContract }\n\nconst get = useCall<Response>(flipper, 'get')\n\npickResultOk(get)?.Cool // returns a SuccessStructInContract object or `undefined`\n")),(0,o.kt)("h2",{id:"pickresulterr"},"pickResultErr"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickResultErr")," picks the decoded Err value or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," if a contract returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"Result<T,\nE>"),". Can be used with ",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-call"},"useCall")," and similar\nhooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"interface SuccessStructInContract {\n  Cool: string;\n}\n\ninterface SomeErrorEnumInContract {\n  NotCool: string;\n}\n\ninterface Response = { Ok?: SuccessStructInContract, Err?: SomeErrorEnumInContract }\n\nconst get = useCall<Response>(flipper, 'get')\n\npickResultErr(get)?.NotCool // returns a SomeErrorEnumInContract object or `undefined`\n")),(0,o.kt)("h2",{id:"pickcallinfo"},"pickCallInfo"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickCallInfo")," picks the ",(0,o.kt)("inlineCode",{parentName:"p"},"CallInfo")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," from a message result. Can be used with\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-call"},"useCall")," and similar hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const get = useCall(flipper, 'get')\n\npickCallInfo(get.result)\n\n// Returns undefined or CallInfo\ninterface CallInfo {\n  gasRequired: Weight;\n  gasConsumed: Weight;\n  storageDeposit: StorageDeposit;\n}\n")),(0,o.kt)("h2",{id:"picktxinfo"},"pickTxInfo"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"pickTxInfo")," picks the ",(0,o.kt)("inlineCode",{parentName:"p"},"TxInfo")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," from a tx or dry run result. Can be used with\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-tx"},"useTx"),",\n",(0,o.kt)("a",{parentName:"p",href:"/frontend/react/hooks/contracts/use-dry-run"},"useDryRun"),", and similar hooks."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const flip = useTx(flipper, 'flip')\n\npickTxInfo(flip.result)\n\n// Returns undefined or Info\ninterface TxInfo {\n  gasRequired: Weight;\n  gasConsumed: Weight;\n  storageDeposit: StorageDeposit;\n  partialFee: Balance;\n}\n")))}u.isMDXComponent=!0}}]);