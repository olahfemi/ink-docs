"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[250],{3425:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=n(4848),r=n(8453);const o={title:"#[ink(storage)]",slug:"/macros-attributes/storage"},i=void 0,a={id:"macros-attributes/storage",title:"#[ink(storage)]",description:"Applicable on struct definitions.",source:"@site/versioned_docs/version-3.x/macros-attributes/storage.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/storage",permalink:"/3.x/macros-attributes/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/macros-attributes/storage.md",tags:[],version:"3.x",frontMatter:{title:"#[ink(storage)]",slug:"/macros-attributes/storage"},sidebar:"reference",previous:{title:"#[ink(selector = S:u32)]",permalink:"/3.x/macros-attributes/selector"},next:{title:"#[ink(topic)]",permalink:"/3.x/macros-attributes/topic"}},c={},l=[{value:"Example",id:"example",level:2}];function u(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Applicable on ",(0,s.jsx)(t.code,{children:"struct"})," definitions."]}),"\n",(0,s.jsxs)(t.p,{children:["Applied on ",(0,s.jsx)(t.code,{children:"struct"})," types in order to flag them for being\nthe contract's storage definition.\nThere can only be one ink! storage definition per contract."]}),"\n",(0,s.jsxs)(t.p,{children:["There must be exactly one ",(0,s.jsx)(t.code,{children:"#[ink(storage)]"})," struct."]}),"\n",(0,s.jsx)(t.p,{children:"This struct defines the layout of the storage that the ink! smart contract operates on.\nThe user is able to use a variety of built-in facilities, combine them in various ways\nor even provide their own implementations of storage data structures."}),"\n",(0,s.jsxs)(t.p,{children:["For more information visit the ",(0,s.jsx)(t.code,{children:"ink_storage"})," crate documentation."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"use ink_lang as ink;\n\n#[ink::contract]\nmod flipper {\n\n    #[ink(storage)]\n    pub struct Flipper {\n        value: bool,\n    }\n\n    impl Flipper {\n        #[ink(constructor)]\n        pub fn construct() -> Self { Flipper { value: false } }\n\n        #[ink(message)]\n        pub fn message(&self) {}\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>a});var s=n(6540);const r={},o=s.createContext(r);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);