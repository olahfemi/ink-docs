"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1469],{6955:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>m});var i=n(4848),s=n(8453);const o={title:"#[ink(impl)]",slug:"/macros-attributes/impl",hide_title:!0},r=void 0,a={id:"macros-attributes/implementation",title:"#[ink(impl)]",description:"This attribute supports a niche case that is rarely needed.",source:"@site/versioned_docs/version-5.x/macros-attributes/implementation.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/impl",permalink:"/5.x/macros-attributes/impl",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/macros-attributes/implementation.md",tags:[],version:"5.x",frontMatter:{title:"#[ink(impl)]",slug:"/macros-attributes/impl",hide_title:!0},sidebar:"reference",previous:{title:"#[ink::event]",permalink:"/5.x/macros-attributes/event"},next:{title:"#[ink(message)]",permalink:"/5.x/macros-attributes/message"}},c={},m=[{value:"Example",id:"example",level:2}];function l(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("img",{src:"/img/title/text/impl.svg",className:"titlePic"}),"\n",(0,i.jsx)(t.p,{children:"This attribute supports a niche case that is rarely needed."}),"\n",(0,i.jsxs)(t.p,{children:["Can be applied on ink! implementation blocks in order to make ink! aware\nof them. This is useful if such an implementation block doesn't contain\nany other ink! attributes, so it would be flagged by ink! as a Rust item.\nAdding ",(0,i.jsx)(t.code,{children:"#[ink(impl)]"})," on such implementation blocks makes them treated\nas ink! implementation blocks thus allowing to access the environment\netc."]}),"\n",(0,i.jsx)(t.p,{children:"Note that ink! messages and constructors still need to be explicitly\nflagged as such."}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(t.p,{children:["An implementation block can be defined as a trait implementation\nfor the ink! storage struct using the ",(0,i.jsx)(t.code,{children:"#[ink(impl)]"})," annotation \u2012 even\nif none of its interior items have any ink! specific attributes on them:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-rust",children:"use core::convert::TryFrom;\n\n#[ink::contract]\nmod my_module {\n    #[ink(storage)]\n    pub struct MyStorage {\n        /* storage fields */\n    }\n\n    #[ink(impl)]\n    impl MyStorage {\n        fn my_method(&self) -> i32 {\n            /* method implementation */\n        }\n    }\n\n    impl MyStorage {\n      #[ink(constructor)]\n      pub fn my_constructor() -> Self {\n          /* constructor implementation */\n      }\n\n      #[ink(message)]\n      pub fn my_message(&self) {\n          /* message implementation */\n      }\n    }\n}\n"})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);