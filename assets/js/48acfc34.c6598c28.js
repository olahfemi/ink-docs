"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1031],{669:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var s=r(4848),a=r(8453);const n={title:"Custom Data Structures",slug:"/datastructures/custom-datastructure"},o=void 0,u={id:"datastructures/custom",title:"Custom Data Structures",description:"While the inkstorage crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core SpreadLayout/PackedLayout traits (and the StorageLayout trait for supporting the metadata generated for the .contract bundle) users are able to define their very own custom storage data structures with their own set of requirement and features that work along the inkstorage data structures as long as they fulfill the mere requirements stated by those two traits.",source:"@site/versioned_docs/version-3.x/datastructures/custom.md",sourceDirName:"datastructures",slug:"/datastructures/custom-datastructure",permalink:"/3.x/datastructures/custom-datastructure",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/datastructures/custom.md",tags:[],version:"3.x",frontMatter:{title:"Custom Data Structures",slug:"/datastructures/custom-datastructure"},sidebar:"reference",previous:{title:"Spread Storage Layout",permalink:"/3.x/datastructures/spread-storage-layout"},next:{title:"Overview",permalink:"/3.x/examples"}},i={},c=[];function d(t){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,a.R)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["While the ",(0,s.jsx)(e.code,{children:"ink_storage"})," crate provides tons of useful utilities and data structures to organize and manipulate the contract's storage contract authors are not limited by its capabilities. By implementing the core ",(0,s.jsx)(e.code,{children:"SpreadLayout"}),"/",(0,s.jsx)(e.code,{children:"PackedLayout"})," traits (and the ",(0,s.jsx)(e.code,{children:"StorageLayout"})," trait for supporting the metadata generated for the ",(0,s.jsx)(e.code,{children:".contract"})," bundle) users are able to define their very own custom storage data structures with their own set of requirement and features that work along the ",(0,s.jsx)(e.code,{children:"ink_storage"})," data structures as long as they fulfill the mere requirements stated by those two traits."]}),"\n",(0,s.jsx)(e.p,{children:"A basic example of a custom struct is shown below:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"struct Inner {\n    value: bool\n}\n\n#[ink(storage)]\npub struct MyContract {\n    inner: Inner\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"Compiling the above will result in errors. While having an inner struct which holds only a boolean might not be the best idea, it serves well to illustrate how to implement the trait:"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:"impl SpreadLayout for Inner {\n    const FOOTPRINT: u64 = 1;\n\n    fn pull_spread(ptr: &mut KeyPtr) -> Self {\n        Self {\n            value: SpreadLayout::pull_spread(ptr),\n        }\n    }\n\n    fn push_spread(&self, ptr: &mut KeyPtr) {\n        SpreadLayout::push_spread(&self.value, ptr);\n    }\n\n    fn clear_spread(&self, ptr: &mut KeyPtr) {\n        SpreadLayout::clear_spread(&self.value, ptr);\n    }\n}\n\n"})}),"\n",(0,s.jsxs)(e.p,{children:["You can check what each method does in the ",(0,s.jsx)(e.a,{href:"https://docs.rs/ink_storage/3.3.1/ink_storage/traits/trait.SpreadLayout.html",children:"trait's docs"}),". Check how some data structures are implemented, such as ",(0,s.jsx)(e.a,{href:"https://docs.rs/ink_storage/3.3.1/src/ink_storage/lazy/mapping.rs.html#113",children:"Mapping"}),"."]})]})}function l(t={}){const{wrapper:e}={...(0,a.R)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},8453:(t,e,r)=>{r.d(e,{R:()=>o,x:()=>u});var s=r(6540);const a={},n=s.createContext(a);function o(t){const e=s.useContext(n);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function u(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),s.createElement(n.Provider,{value:e},t.children)}}}]);