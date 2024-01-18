"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},c),{},{components:a})):r.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22468:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Overview",slug:"/frontend/overview",hide_title:!0},i=void 0,l={unversionedId:"frontend/overview",id:"version-5.x/frontend/overview",title:"Overview",description:"Now after you wrote, compiled and deployed your smart contract, it is time to craft a user experience around it.",source:"@site/versioned_docs/version-5.x/frontend/overview.md",sourceDirName:"frontend",slug:"/frontend/overview",permalink:"/5.x/frontend/overview",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/frontend/overview.md",tags:[],version:"5.x",frontMatter:{title:"Overview",slug:"/frontend/overview",hide_title:!0},sidebar:"reference",previous:{title:"non_fallible_api",permalink:"/5.x/linter/rules/non_fallible_api"},next:{title:"Smart Contract Examples",permalink:"/5.x/examples/smart-contracts"}},s={},p=[{value:"JavaScript/TypeScript Tools",id:"javascripttypescript-tools",level:2},{value:"Using no libraries",id:"using-no-libraries",level:3},{value:"Low level libraries",id:"low-level-libraries",level:3},{value:"React",id:"react",level:3},{value:"React and Next.js",id:"react-and-nextjs",level:3},{value:"Examples",id:"examples",level:3},{value:"Other Languages",id:"other-languages",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("img",{src:"/img/title/frontend.svg",className:"titlePic"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Now after you ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/creating-an-ink-project"},"wrote"),", ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/building-your-contract"},"compiled")," and ",(0,n.kt)("a",{parentName:"p",href:"/getting-started/deploy-your-contract"},"deployed your smart contract"),", it is time to craft a user experience around it."),(0,n.kt)("p",null,"This experience can take many shapes from mobile app to interactive terminal applications. In this section we are focusing on the most prominent shape in web3 right now, web apps."),(0,n.kt)("p",null,"Although we love Rust, the native language of the web is JavaScript. Thereby naturally the best tools for creating web experiences are available for JavaScript. Hence, the tools for smart contract interaction with JavaScript are the most advanced as well. To be precise all JavaScript tools mentioned here, actually leverage TypeScript to offer a JavaScript and a typesafe TypeScript experience."),(0,n.kt)("h2",{id:"javascripttypescript-tools"},"JavaScript/TypeScript Tools"),(0,n.kt)("p",null,"There are several levels of abstraction where you can start your journey creating a web frontend for your contracts. Each levels offers different advantages and disadvantages. The following list is of tools. They are sorted from the most generic no third party library way to interact with Polkadot's smart contracts to the most opinionated template using libraries and proven frontend frameworks."),(0,n.kt)("h3",{id:"using-no-libraries"},"Using no libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.polkadot.network/docs/build-node-interaction"},"RPC Interface")," ",(0,n.kt)("strong",{parentName:"li"},"(not recommended)"),": nodes participating in the blockchain network offer an ",(0,n.kt)("a",{parentName:"li",href:"https://www.jsonrpc.org/"},"JSON RPC interface")," to interact with the blockchains state and capabilities.")),(0,n.kt)("h3",{id:"low-level-libraries"},"Low level libraries"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api"},(0,n.kt)("inlineCode",{parentName:"a"},"@polkadot/api"))," ",(0,n.kt)("strong",{parentName:"p"},"(not recommended)"),": allows for most general interaction with Polkadot-SDK based blockchains from JavaScript. In order to talk to smart-contracts, one would use the ",(0,n.kt)("inlineCode",{parentName:"p"},"pallet-contracts")," runtime calls.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://polkadot.js.org/docs/api-contract"},(0,n.kt)("inlineCode",{parentName:"a"},"@polkadot/api-contract"))," ",(0,n.kt)("strong",{parentName:"p"},"(recommended)"),": abstraction on top of ",(0,n.kt)("inlineCode",{parentName:"p"},"@polkadot/api")," for the ",(0,n.kt)("inlineCode",{parentName:"p"},"pallet-contracts"),". Makes interaction with smart contracts more comfortable and type safe."))),(0,n.kt)("h3",{id:"react"},"React"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/scio-labs/use-inkathon"},(0,n.kt)("inlineCode",{parentName:"a"},"useInkathon"))," ",(0,n.kt)("strong",{parentName:"li"},"(recommended)"),": A hooks library for the popular frontend javascript framework React with focus on smart-contract interactions. Built using ",(0,n.kt)("inlineCode",{parentName:"li"},"@polkadot/api")," & ",(0,n.kt)("inlineCode",{parentName:"li"},"@polkadot/api-contract"),".")),(0,n.kt)("h3",{id:"react-and-nextjs"},"React and Next.js"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/scio-labs/inkathon"},(0,n.kt)("inlineCode",{parentName:"a"},"inkathon"))," ",(0,n.kt)("strong",{parentName:"li"},"(recommended)"),": Full Stack web app template using the popular full stack template ",(0,n.kt)("inlineCode",{parentName:"li"},"Nextjs"),". Itself is using ",(0,n.kt)("inlineCode",{parentName:"li"},"useInkathon"),". The fastest way to get up and running with a smart contract and a corresponding web app.")),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("p",null,"For inspiration how to get started building your full stack dApp. Make sure to visit our ",(0,n.kt)("a",{parentName:"p",href:"/examples/smart-contracts"},"Smart Contracts Examples section")," or ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/ink-examples"},"repository directly"),". These examples not only offer the smart contract code but also have an accompanied frontend project. Checkout the ",(0,n.kt)("inlineCode",{parentName:"p"},"README.md")," for details how to setup and run these frontend examples."),(0,n.kt)("h2",{id:"other-languages"},"Other Languages"),(0,n.kt)("p",null,"Of course the browser and JavaScript should not be the one and only platform for smart contract frontends. It's just the most mature for smart contract frontend tooling."),(0,n.kt)("p",null,"The following is a list of libraries which could be used to craft smart-contract dApps on other platforms than the web."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/novasamatech/substrate-sdk-ios"},"novasamatech/substrate-sdk-ios"),": low level generic iOS SDK for substrate.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/novasamatech/substrate-sdk-android"},"novasamatech/substrate-sdk-android"),": low level Android SDK for substrate.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/paritytech/subxt"},"paritytech/subxt"),": Rust library to submit extrinsics (transactions) to a substrate node via RPC.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/polkascan/py-substrate-interface/blob/master/docs/usage/ink-contract-interfacing.md"},"polkascan/py-substrate-interface"),": Python library to interface with Substrate nodes."))))}u.isMDXComponent=!0}}]);