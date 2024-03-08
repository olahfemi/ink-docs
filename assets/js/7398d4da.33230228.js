"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5479],{2857:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=o(4848),n=o(8453);const r={title:"How it Works \u2012 Substrate",slug:"/how-it-works"},i=void 0,a={id:"intro/how-it-works",title:"How it Works \u2012 Substrate",description:"Substrate's Framework for Runtime Aggregation of Modularized Entities (FRAME) contains",source:"@site/versioned_docs/version-3.x/intro/how-it-works.md",sourceDirName:"intro",slug:"/how-it-works",permalink:"/3.x/how-it-works",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/intro/how-it-works.md",tags:[],version:"3.x",frontMatter:{title:"How it Works \u2012 Substrate",slug:"/how-it-works"},sidebar:"reference",previous:{title:"Why WebAssembly for Smart Contracts?",permalink:"/3.x/why-webassembly-for-smart-contracts"},next:{title:"ink! vs. Solidity",permalink:"/3.x/ink-vs-solidity"}},c={},d=[];function l(t){const e={a:"a",code:"code",p:"p",...(0,n.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{class:"schema",children:(0,s.jsx)("img",{src:"/img/how-it-works.svg",alt:"How it Works"})}),"\n",(0,s.jsxs)(e.p,{children:["Substrate's ",(0,s.jsx)(e.a,{href:"https://docs.substrate.io/v3/runtime/frame/",children:"Framework for Runtime Aggregation of Modularized Entities (FRAME)"})," contains\na module  which implements an API for typical functions smart contracts need (storage, querying information about accounts, \u2026).\nThis module is called the ",(0,s.jsx)(e.code,{children:"contracts"})," pallet,\nyou can find its repository ",(0,s.jsx)(e.a,{href:"https://github.com/paritytech/substrate/blob/master/frame/contracts/README.md",children:"here"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"contracts"})," pallet requires smart contracts to be uploaded to the blockchain as a Wasm blob."]}),"\n",(0,s.jsxs)(e.p,{children:["ink! is a smart contract language which targets the API exposed by ",(0,s.jsx)(e.code,{children:"contracts"}),".\nHence ink! contracts are compiled to Wasm."]}),"\n",(0,s.jsxs)(e.p,{children:["When executing ",(0,s.jsx)(e.code,{children:"cargo contract build"})," an additional file ",(0,s.jsx)(e.code,{children:"metadata.json"})," is created.\nIt contains information about e.g. what methods the contract provides for others to call."]})]})}function h(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},8453:(t,e,o)=>{o.d(e,{R:()=>i,x:()=>a});var s=o(6540);const n={},r=s.createContext(n);function i(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);