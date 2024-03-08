"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6821],{4256:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var t=s(4848),c=s(8453);const i={title:"Metadata",slug:"/metadata"},r="ink! Metadata",o={id:"basics/metadata",title:"Metadata",description:"The ink! metadata is used to describe a contract in a language agnostic way. It is",source:"@site/versioned_docs/version-3.x/basics/metadata.md",sourceDirName:"basics",slug:"/metadata",permalink:"/3.x/metadata",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/metadata.md",tags:[],version:"3.x",frontMatter:{title:"Metadata",slug:"/metadata"},sidebar:"reference",previous:{title:"Environment Functions",permalink:"/3.x/basics/environment-functions"},next:{title:"Overview",permalink:"/3.x/macros-attributes"}},d={},a=[{value:"metadata.json",id:"metadatajson",level:2},{value:"<code>source</code>",id:"source",level:3},{value:"<code>contract</code>",id:"contract",level:3},{value:"ABI",id:"abi",level:3},{value:"<code>spec</code>",id:"spec",level:4},{value:"<code>storage</code>",id:"storage",level:4},{value:"<code>types</code>",id:"types",level:4},{value:"<code>user</code>",id:"user",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"ink-metadata",children:"ink! Metadata"}),"\n",(0,t.jsx)(n.p,{children:"The ink! metadata is used to describe a contract in a language agnostic way. It is\nintended to be used by third party tools (e.g UIs, block explorers) in order to correctly\ncall contract functions and interpret events."}),"\n",(0,t.jsxs)(n.p,{children:["The ink! metadata is generated when a contract is built using ",(0,t.jsx)(n.code,{children:"cargo-contract"}),", e.g\n",(0,t.jsx)(n.code,{children:"cargo +nightly contract build"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The metadata can be found in your contract's target directory under the name\n",(0,t.jsx)(n.code,{children:"metadata.json"}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["The metadata is also contained in your ",(0,t.jsx)(n.code,{children:"$contract_name.contract"})," file. The difference is\nthat the ",(0,t.jsx)(n.code,{children:".contract"})," file also contains the Wasm binary of your contract."]})}),"\n",(0,t.jsx)(n.h2,{id:"metadatajson",children:"metadata.json"}),"\n",(0,t.jsxs)(n.p,{children:["The metadata is defined by the following ",(0,t.jsx)(n.strong,{children:"required"})," keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"source"}),": Information about the contract's Wasm code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"contract"}),": Metadata about the contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"abi"}),": Raw JSON of the contract's abi metadata, generated during contract compilation."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It may ",(0,t.jsx)(n.em,{children:"optionally"})," contain the following keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"user"}),": Additional user-defined metadata."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "source": {\n    "hash": "...",\n    "language": "...",\n    "compiler": "..."\n  },\n  "contract": {\n    "name": "...",\n    "version": "...",\n    "authors": [\n      "..."\n    ]\n  },\n  "V3": {\n    "spec": {...},\n    "storage": {...},\n    "types": {...}\n  }\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Notice that we don't have an ",(0,t.jsx)(n.code,{children:"abi"})," key, but we instead use the metadata version as the name\nof the key (",(0,t.jsx)(n.code,{children:"V3"})," in this case). You can read more about that in the ",(0,t.jsx)(n.a,{href:"#abi",children:"ABI documentation"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:"The following sections will dive deeper into how these sections are made up."}),"\n",(0,t.jsx)(n.h3,{id:"source",children:(0,t.jsx)(n.code,{children:"source"})}),"\n",(0,t.jsx)(n.p,{children:"This object contains information about how the contract was built."}),"\n",(0,t.jsxs)(n.p,{children:["It consists of the following ",(0,t.jsx)(n.strong,{children:"required"})," keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hash"}),": The hash of the contract's Wasm code."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"language"}),": The language used to write the contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"compiler"}),": The compiler used to compile the contract."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It may ",(0,t.jsx)(n.em,{children:"optionally"})," include the following keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"wasm"}),": The actual Wasm code of the contract, for optionally bundling the code with the metadata."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"source": {\n  "hash": "0x157014494527fee27a82e49bbd9eea10c0713bb0566f6def37f4595db86236ff",\n  "language": "ink! 3.1.0",\n  "compiler": "rustc 1.63.0-nightly"\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you're interested in the code reference from ",(0,t.jsx)(n.code,{children:"cargo-contract"}),"\nsee ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L127",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"contract",children:(0,t.jsx)(n.code,{children:"contract"})}),"\n",(0,t.jsx)(n.p,{children:"This object contains extra metadata about the contract."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"required"})," keys include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"name"}),": The name of the smart contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"version"}),": The version of the smart contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"authors"}),": The authors of the smart contract."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It can ",(0,t.jsx)(n.em,{children:"optionally"})," include the following keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"description"}),": The description of the smart contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"documentation"}),": Link to the documentation of the smart contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"repository"}),": Link to the code repository of the smart contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"homepage"}),": Link to the homepage of the smart contract."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"license"}),": The license of the smart contract."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"contract": {\n  "name": "flipper",\n  "version": "3.1.0",\n  "authors": [\n    "Parity Technologies <admin@parity.io>"\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you're interested in the code reference from ",(0,t.jsx)(n.code,{children:"cargo-contract"}),"\nsee ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/cargo-contract/blob/45fbc0b43ac9e676107ad9a03f8d7a0a01d84c50/metadata/lib.rs#L395",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"abi",children:"ABI"}),"\n",(0,t.jsx)(n.p,{children:"This is the specification of the contract."}),"\n",(0,t.jsx)(n.p,{children:"Unlike the previous metadata sections the structure of the object stored here is not\ndefined. Instead, it is up to each programming language (e.g ink!, ask!, Solidity) to\ndefine their own metadata format which will then be stored here."}),"\n",(0,t.jsx)(n.p,{children:"In this document we will focus on the ink! ABI."}),"\n",(0,t.jsxs)(n.p,{children:["The ABI starts with the version number of the ink! metadata. In our example below we are\nusing the ink! version 3 metadata, denoted by the ",(0,t.jsx)(n.code,{children:"V3"})," key."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"The version of the ABI is distinct from any concept of Rust's crate versioning."})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"V3": {\n  "spec": { ... },\n  "storage": { ... },\n  "types": { ... }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The ink! metadata consists of the following ",(0,t.jsx)(n.strong,{children:"required"})," sections"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"spec"}),": The description of the contract (e.g constructors, messages, events, etc.)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"storage"}),": The layout of the storage data structure"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"types"}),": A read-only registry containing types in their portable form for\nserialization."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If you're interested in the code reference from ",(0,t.jsx)(n.code,{children:"ink!"}),"\nsee ",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/ink/blob/80d302eb9b9cddb726200a9a86c71ae344d1b042/crates/metadata/src/lib.rs#L91",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"spec",children:(0,t.jsx)(n.code,{children:"spec"})}),"\n",(0,t.jsxs)(n.p,{children:["The contract ",(0,t.jsx)(n.code,{children:"spec"})," consists of the following ",(0,t.jsx)(n.strong,{children:"required"})," keys:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"constructors"}),": The set of constructors of the contract.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"label"}),": The label of the constructor. In case of a trait provided constructor the\nlabel is prefixed with the trait label."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selector"}),": The selector hash of the message."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payable"}),": If the constructor accepts any ",(0,t.jsx)(n.code,{children:"value"})," from the caller."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"args"}),": The parameters of the deployment handler."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"}),": The deployment handler documentation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"messages"}),": The external messages of the contract.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"label"}),": The label of the message. In case of trait provided messages and\nconstructors the prefix by convention in ink! is the label of the trait."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"selector"}),": The selector hash of the message."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mutates"}),": If the message is allowed to mutate the contract state."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"payable"}),": If the message accepts any ",(0,t.jsx)(n.code,{children:"value"})," from the caller."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"args"}),": The parameters of the message."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"return_type"}),": The return type of the message."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"}),": The message documentation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"events"}),": The events of the contract.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"label"}),": The label of the event."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"args"}),": The event arguments."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"}),": The event documentation."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"}),": The contract documentation."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["While all these keys are required, they may be empty. For example, if a contract does not\ndefine any events then the ",(0,t.jsx)(n.code,{children:"events"})," key would contain an empty array ",(0,t.jsx)(n.code,{children:"[]"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"spec": {\n  "constructors": [\n    {\n      "args": [\n        { ... }\n      ],\n      "docs": [\n        "Creates a new flipper smart contract initialized with the given value."\n      ],\n      "label": "new",\n      "payable": false,\n      "selector": "0x9bae9d5e"\n    }\n  ],\n  "docs": [],\n  "events": [],\n  "messages": [\n    {\n      "args": [],\n      "docs": [\n        " Flips the current value of the Flipper\'s boolean."\n      ],\n      "label": "flip",\n      "mutates": true,\n      "payable": false,\n      "returnType": null,\n      "selector": "0x633aa551"\n    }\n  ]\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"storage",children:(0,t.jsx)(n.code,{children:"storage"})}),"\n",(0,t.jsx)(n.p,{children:"This key describes the storage layout of an ink! contract. It tracks some of the\ndifferent structures which can be placed in storage."}),"\n",(0,t.jsxs)(n.p,{children:["It consists of the following\n",(0,t.jsx)(n.em,{children:"optional"})," keys (depending on what data structures are used by the contract):"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cell"}),": An encoded cell.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"key"}),": The offset key into the storage."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ty"}),": The type of the encoded entity."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"hash"}),": A layout that hashes values into the entire storage key space.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"offset"}),": The key offset used by the strategy."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"strategy"}),": The hashing strategy to layout the underlying elements."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"layout"}),": The storage layout of the unbounded layout elements."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"array"}),": An array of associated storage cells encoded with a given type.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"offset"}),": The offset key of the array layout. This is the same key as the element\nat index 0 of the array layout."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"len"}),": The number of elements in the array layout."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"cells_per_elem"}),": The number of cells each element in the array layout consists of."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"layout"}),": The layout of the elements stored in the array layout."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"struct"}),": A struct layout with fields of different types.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fields"}),": The fields of the struct layout."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"enum"}),": An enum layout with a discriminant telling which variant is layed out.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"dispatch_key"}),": The key where the discriminant is stored to dispatch the variants."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"variants"}),": The variants of the enum."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"storage": {\n  "struct": {\n    "fields": [\n      {\n        "layout": {\n          "cell": {\n            "key": "0x0000000000000000000000000000000000000000000000000000000000000000",\n            "ty": 0\n          }\n        },\n        "name": "value"\n      }\n    ]\n  }\n}\n'})}),"\n",(0,t.jsx)(n.h4,{id:"types",children:(0,t.jsx)(n.code,{children:"types"})}),"\n",(0,t.jsx)(n.p,{children:"This object contains the type registry for the smart contract. It consists of an array of\ntype objects, each of which is defined as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"id"}),": Numerical ID for referencing the type."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"ty"}),": The definition of the type.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"path"}),": The unique path to the type. Can be empty for built-in types."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"params"}),": The generic type parameters of the type in use. Empty for non generic\ntypes."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"def"}),": The actual type definition."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"}),": Documentation."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The type definition object (",(0,t.jsx)(n.code,{children:"def"}),") supports the following ",(0,t.jsx)(n.code,{children:"primitive"})," types:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"bool"}),", ",(0,t.jsx)(n.code,{children:"char"}),", ",(0,t.jsx)(n.code,{children:"str"}),", ",(0,t.jsx)(n.code,{children:"u8"}),", ",(0,t.jsx)(n.code,{children:"u16"}),", ",(0,t.jsx)(n.code,{children:"u32"}),", ",(0,t.jsx)(n.code,{children:"u64"}),", ",(0,t.jsx)(n.code,{children:"u128"}),", ",(0,t.jsx)(n.code,{children:"i8"}),", ",(0,t.jsx)(n.code,{children:"i16"}),", ",(0,t.jsx)(n.code,{children:"i32"}),", ",(0,t.jsx)(n.code,{children:"i64"}),", ",(0,t.jsx)(n.code,{children:"i128"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["It also supports a variety of complex built-in and user-defined types. However, we will\nnot dig into them here. If you are interested in learning more take a look at the\n",(0,t.jsx)(n.a,{href:"https://github.com/paritytech/scale-info",children:(0,t.jsx)(n.code,{children:"scale-info"})})," crate."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"types": [\n  {\n    "id": 0,\n    "type": {\n      "def": {\n        "primitive": "bool"\n      }\n    }\n  }\n]\n'})}),"\n",(0,t.jsxs)(n.p,{children:["Other parts of the metadata, such as the ",(0,t.jsx)(n.code,{children:"storage"})," object, will reference individual\ntypes from this type registry using the ",(0,t.jsx)(n.code,{children:"id"})," key."]}),"\n",(0,t.jsx)(n.h3,{id:"user",children:(0,t.jsx)(n.code,{children:"user"})}),"\n",(0,t.jsxs)(n.p,{children:["This is an ",(0,t.jsx)(n.em,{children:"optional"})," field used to add user-defined metadata. Some examples of things\nyou may want to include here:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"moon_phase"}),": Phase of the moon during which the smart contract works."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"favorite_blockchain"}),": The favorite blockchain of the contract authors (answer: Polkadot!)."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var t=s(6540);const c={},i=t.createContext(c);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);