"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8968],{2421:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var s=t(4848),r=t(8453);const o={title:"Working with StorageVec",slug:"/datastructures/storagevec",hide_title:!0},i="Working with StorageVec",a={id:"datastructures/storagevec",title:"Working with StorageVec",description:"In this section we demonstrate how to work with ink!'s",source:"@site/versioned_docs/version-5.x/datastructures/storagevec.md",sourceDirName:"datastructures",slug:"/datastructures/storagevec",permalink:"/5.x/datastructures/storagevec",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-5.x/datastructures/storagevec.md",tags:[],version:"5.x",frontMatter:{title:"Working with StorageVec",slug:"/datastructures/storagevec",hide_title:!0},sidebar:"reference",previous:{title:"Overview",permalink:"/5.x/datastructures/overview"},next:{title:"Working with Mapping",permalink:"/5.x/datastructures/mapping"}},c={},l=[{value:"Example: Using a <code>StorageVec</code>",id:"example-using-a-storagevec",level:2},{value:"Difference between <code>StorageVec</code> and Rusts <code>Vec</code> type",id:"difference-between-storagevec-and-rusts-vec-type",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Storage Layout",id:"storage-layout",level:3},{value:"Considerations when using the <code>StorageVec</code> type",id:"considerations-when-using-the-storagevec-type",level:2},{value:"Rust Docs",id:"rust-docs",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("img",{src:"/img/title/storage.svg",className:"titlePic"}),"\n",(0,s.jsxs)(n.h1,{id:"working-with-storagevec",children:["Working with ",(0,s.jsx)(n.code,{children:"StorageVec"})]}),"\n",(0,s.jsxs)(n.p,{children:["In this section we demonstrate how to work with ink!'s\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_storage/5.0.0/ink_storage/struct.StorageVec.html",children:(0,s.jsx)(n.code,{children:"StorageVec"})}),"."]}),"\n",(0,s.jsxs)(n.h2,{id:"example-using-a-storagevec",children:["Example: Using a ",(0,s.jsx)(n.code,{children:"StorageVec"})]}),"\n",(0,s.jsx)(n.p,{children:"Here is an example of an append-only on-chain log:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[ink(storage)]\npub struct MyContract {\n    /// Assign a balance to every account.\n    on_chain_log: ink::storage::StorageVec<String>,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The following example contract utilizes a ",(0,s.jsx)(n.code,{children:"StorageVec"})," to log each operation on chain (similar to emitting events but the contract can access them)."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#![cfg_attr(not(feature = "std"), no_std, no_main)]\n\n#[ink::contract]\nmod mycontract {\n    use ink::prelude::{format, string::String};\n    use ink::storage::StorageVec;\n\n    #[ink(storage)]\n    pub struct MyContract {\n        /// Assign a balance to every account.\n        on_chain_log: StorageVec<String>,\n    }\n\n    impl MyContract {\n        #[ink(constructor)]\n        pub fn new() -> Self {\n            Self {\n                on_chain_log: Default::default(),\n            }\n        }\n\n        /// Donate money to the contract.\n        #[ink(message, payable)]\n        pub fn donate(&mut self) {\n            let caller = self.env().caller();\n            let endowment = self.env().transferred_value();\n\n            let log_message = format!("{caller:?} donated {endowment}");\n\n            self.on_chain_log.push(&log_message);\n        }\n\n        /// How many donations had the contract so far?\n        #[ink(message)]\n        pub fn log_length(&self) -> u32 {\n            self.on_chain_log.len()\n        }\n\n        /// What was the last donation to the contract?\n        #[ink(message)]\n        pub fn last_donation(&self) -> Option<String> {\n            self.on_chain_log.peek()\n        }\n    }\n}\n\n'})}),"\n",(0,s.jsxs)(n.h2,{id:"difference-between-storagevec-and-rusts-vec-type",children:["Difference between ",(0,s.jsx)(n.code,{children:"StorageVec"})," and Rusts ",(0,s.jsx)(n.code,{children:"Vec"})," type"]}),"\n",(0,s.jsxs)(n.p,{children:["Any Rust ",(0,s.jsx)(n.code,{children:"Vec<T>"})," will exhibit ",(0,s.jsx)(n.code,{children:"Packed"})," storage layout; where\n",(0,s.jsx)(n.code,{children:"StorageVec"})," stores each value under it's own storage key."]}),"\n",(0,s.jsxs)(n.p,{children:["Hence, any read or write from or to a ",(0,s.jsx)(n.code,{children:"Vec"})," on storage will load\nor store ",(0,s.jsx)(n.em,{children:"all"})," of its elements."]}),"\n",(0,s.jsxs)(n.p,{children:["This can be undesirable:\nThe cost of reading or writing a ",(0,s.jsx)(n.em,{children:"single"})," element grows linearly\ncorresponding to the number of elements in the vector (its length).\nAdditionally, the maximum capacity of the ",(0,s.jsx)(n.em,{children:"whole"})," vector is limited by\nthe size of ",(0,s.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/master/ARCHITECTURE.md#communication-with-the-pallet",children:"ink!'s static buffer"}),"\nused during ABI encoding and decoding (default 16 KiB)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"StorageVec"})," on the other hand allows to access each element individually.\nThus, it can theoretically grow to infinite size.\nHowever, we currently limit the length at 2 ^ 32 elements. In practice,\neven if the vector elements are single bytes, it'll allow to store\nmore than 4 GB data in blockchain storage."]}),"\n",(0,s.jsx)(n.h3,{id:"caveats",children:"Caveats"}),"\n",(0,s.jsxs)(n.p,{children:["Iterators are not provided. ",(0,s.jsx)(n.code,{children:"StorageVec"})," is expected to be used to\nstore a lot elements, where iterating through the elements would be\nrather inefficient. Manually iterating over the elements using a loop\nis possible but considered an anti-pattern for most cases."]}),"\n",(0,s.jsx)(n.p,{children:"For the same reason, operations which would require re-ordering\nstored elements are not supported. Examples include inserting and\ndeleting elements at arbitrary positions or sorting elements."}),"\n",(0,s.jsxs)(n.p,{children:["The decision whether to use ",(0,s.jsx)(n.code,{children:"Vec<T>"})," or ",(0,s.jsx)(n.code,{children:"StorageVec"})," can be seen as an\noptimization problem with several factors:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"How large you expect the vector to grow"}),"\n",(0,s.jsx)(n.li,{children:"The size of individual elements being stored"}),"\n",(0,s.jsx)(n.li,{children:"How frequently reads, writes and iterations happen"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if a vector is expected to stay small but is frequently\niterated over. Choosing a ",(0,s.jsx)(n.code,{children:"Vec<T>"})," instead of ",(0,s.jsx)(n.code,{children:"StorageVec"})," will be\npreferred as individual storage reads are much more expensive as\nopposed to retrieving and decoding the whole collection with a single\nstorage read."]}),"\n",(0,s.jsx)(n.h3,{id:"storage-layout",children:"Storage Layout"}),"\n",(0,s.jsxs)(n.p,{children:["At given ",(0,s.jsx)(n.code,{children:"StorageKey"})," ",(0,s.jsx)(n.code,{children:"K"}),", the length of the ",(0,s.jsx)(n.code,{children:"StorageVec"})," is hold.\nEach element ",(0,s.jsx)(n.code,{children:"E"})," is then stored under a combination of the ",(0,s.jsx)(n.code,{children:"StorageVec"}),"\nkey ",(0,s.jsx)(n.code,{children:"K"})," and the elements index."]}),"\n",(0,s.jsxs)(n.p,{children:["Given ",(0,s.jsx)(n.code,{children:"StorageVec"})," under key ",(0,s.jsx)(n.code,{children:"K"}),", the storage key ",(0,s.jsx)(n.code,{children:"E"})," of the ",(0,s.jsx)(n.code,{children:"N"}),"th\nelement is calculated as follows:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"E = scale::Encode((K, N))"})}),"\n",(0,s.jsxs)(n.h2,{id:"considerations-when-using-the-storagevec-type",children:["Considerations when using the ",(0,s.jsx)(n.code,{children:"StorageVec"})," type"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"StorageVec"})," is a ",(0,s.jsx)(n.code,{children:"Lazy"})," type similar to ",(0,s.jsx)(n.code,{children:"Mapping"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Hence, the same considerations apply to ",(0,s.jsx)(n.code,{children:"StorageVec"})," too:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://use.ink/datastructures/mapping#storage-loading-behavior",children:"Storage loading behavior"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://use.ink/datastructures/mapping#use-fallible-storage-methods-for-dynamically-sized-values",children:"Use fallible storage methods for dynamically sized values"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://use.ink/datastructures/mapping#updating-values",children:"Updating values"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"rust-docs",children:"Rust Docs"}),"\n",(0,s.jsxs)(n.p,{children:["See here for the Rust documentation of this data structure:\n",(0,s.jsx)(n.a,{href:"https://docs.rs/ink_storage/5.0.0/ink_storage/struct.StorageVec.html",children:(0,s.jsx)(n.code,{children:"StorageVec"})}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>a});var s=t(6540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);