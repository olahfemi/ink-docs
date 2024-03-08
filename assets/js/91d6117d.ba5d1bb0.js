"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[356],{6590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>o});var a=n(4848),s=n(8453);const r={title:"#[ink(payable)]",slug:"/macros-attributes/payable",hide_title:!0},l=void 0,i={id:"macros-attributes/payable",title:"#[ink(payable)]",description:"Applicable to ink! messages.",source:"@site/docs/macros-attributes/payable.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/payable",permalink:"/macros-attributes/payable",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/macros-attributes/payable.md",tags:[],version:"current",frontMatter:{title:"#[ink(payable)]",slug:"/macros-attributes/payable",hide_title:!0},sidebar:"reference",previous:{title:'#[ink(namespace = "\u2026")]',permalink:"/macros-attributes/namespace"},next:{title:"#[ink(selector = S:u32)]",permalink:"/macros-attributes/selector"}},c={},o=[{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:"/img/title/text/payable.svg",className:"titlePic"}),"\n",(0,a.jsx)(t.p,{children:"Applicable to ink! messages."}),"\n",(0,a.jsx)(t.p,{children:"Allows receiving value as part of the call of the ink! message.\nink! constructors are implicitly payable, due to the initial endowment which a contract requires."}),"\n",(0,a.jsxs)(t.p,{children:["An ink! message by default will reject calls that additional fund the smart contract.\nAuthors of ink! smart contracts can make an ink! message payable by adding the ",(0,a.jsx)(t.code,{children:"payable"}),"\nflag to it. An example below:"]}),"\n",(0,a.jsx)(t.p,{children:"Note that ink! constructors are always implicitly payable and thus cannot be flagged\nas such."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn new(initial_value: bool) -> Self {\n            Flipper { value: false }\n        }\n\n        /// Flips the current value.\n        #[ink(message)]\n        #[ink(payable)] // You can either specify payable out-of-line.\n        pub fn flip(&mut self) {\n            self.value = !self.value;\n        }\n\n        /// Returns the current value.\n        #[ink(message, payable)] // or specify payable inline.\n        pub fn get(&self) -> bool {\n            self.value\n        }\n    }\n}\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-rust",children:"#[ink(message, payable)]\npub fn pay_me(&self) {\n    let _transferred = self.env().transferred_value();\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/blob/main/contract-transfer/lib.rs",children:(0,a.jsx)(t.code,{children:"examples/contract-transfer"})})," contract for a more extensive example."]})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(6540);const s={},r=a.createContext(s);function l(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);