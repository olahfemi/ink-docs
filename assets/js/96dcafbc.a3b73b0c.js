"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4089],{8837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=n(4848),s=n(8453);const a={title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},r="Chain Environment Types",o={id:"basics/environment",title:"Chain Environment Types",description:"If you write a contract for a chain that deviates from the default",source:"@site/docs/basics/environment.md",sourceDirName:"basics",slug:"/basics/chain-environment-types",permalink:"/basics/chain-environment-types",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/basics/environment.md",tags:[],version:"current",frontMatter:{title:"Chain Environment Types",slug:"/basics/chain-environment-types",hide_title:!0},sidebar:"reference",previous:{title:"Environment Functions",permalink:"/basics/environment-functions"},next:{title:"Metadata",permalink:"/basics/metadata"}},c={},h=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/environment.svg",className:"titlePic"}),"\n",(0,i.jsx)(t.h1,{id:"chain-environment-types",children:"Chain Environment Types"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsxs)(t.p,{children:["If you write a contract for a chain that deviates from the default\nSubstrate types, you have to make sure to configure that chain's\n",(0,i.jsx)(t.code,{children:"Environment"})," for your contract!"]})}),"\n",(0,i.jsxs)(t.p,{children:["ink! defines a trait ",(0,i.jsx)(t.a,{href:"https://paritytech.github.io/ink/ink_env/trait.Environment.html",children:(0,i.jsx)(t.code,{children:"Environment"})}),"\nand also a default implementation of that trait \u2012 ",(0,i.jsx)(t.a,{href:"https://paritytech.github.io/ink/ink_env/enum.DefaultEnvironment.html",children:(0,i.jsx)(t.code,{children:"DefaultEnvironment"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"These are the types that ink! uses, if no explicit steps are taken:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:'/// The fundamental types of the default configuration.\n#[derive(Debug, Clone, PartialEq, Eq)]\n#[cfg_attr(feature = "std", derive(TypeInfo))]\npub enum DefaultEnvironment {}\n\nimpl Environment for DefaultEnvironment {\n    const MAX_EVENT_TOPICS: usize = 4;\n\n    type AccountId = ink_primitives::AccountId;\n    type Balance = u128;\n    type Hash = ink_primitives::Hash;\n    type Timestamp = u64;\n    type BlockNumber = u32;\n    type ChainExtension = NoChainExtension;\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The context here is that you can use ink! on any blockchain that was built with\nthe ",(0,i.jsx)(t.a,{href:"https://substrate.io",children:"Substrate"})," framework and includes the\n",(0,i.jsx)(t.a,{href:"https://github.com/paritytech/substrate/tree/master/frame/contracts",children:(0,i.jsx)(t.code,{children:"pallet-contracts"})}),"\nmodule."]}),"\n",(0,i.jsxs)(t.p,{children:["Chains built on Substrate can decide on their own which types they want\nto use for e.g. the chain's block number or account id's. For example,\nchains that intend to be compatible to Ethereum typically use the same\ntype as Ethereum for their ",(0,i.jsx)(t.code,{children:"AccountId"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Most Substrate chains stay with the default Substrate types though and\nink! just uses those by default as well. It is possible to configure\na different environment in the contract macro (",(0,i.jsx)(t.a,{href:"https://paritytech.github.io/ink/ink/attr.contract.html#header-arguments",children:"documentation here"}),")\nthough:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"#[ink::contract(env = MyCustomTypes)]\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);