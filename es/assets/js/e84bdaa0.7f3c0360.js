"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[6956],{26092:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=e(17624),c=e(4552);const r={title:"Cross-Contract Calling",slug:"/basics/cross-contract-calling"},o=void 0,a={id:"basics/cross-contract-calling",title:"Cross-Contract Calling",description:"In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-3.x/basics/cross-contract-calling.md",sourceDirName:"basics",slug:"/basics/cross-contract-calling",permalink:"/es/3.x/basics/cross-contract-calling",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/basics/cross-contract-calling.md",tags:[],version:"3.x",frontMatter:{title:"Cross-Contract Calling",slug:"/basics/cross-contract-calling"},sidebar:"reference",previous:{title:"Trait Definitions",permalink:"/es/3.x/basics/trait-definitions"},next:{title:"Upgradeable Contracts",permalink:"/es/3.x/basics/upgradeable-contracts"}},i={},l=[{value:"How it Works",id:"how-it-works",level:3}];function h(n){const t={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.M)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In ink! contracts it is possible to call ink! messages and ink! constructors. So ink! constructors allow\ndelegation and ink! messages can easily call other ink! messages.\nGiven another ink! contract like, we can call any of its functions."}),"\n",(0,s.jsxs)(t.p,{children:["See our ",(0,s.jsx)(t.a,{href:"https://github.com/paritytech/ink-examples/blob/main/delegator/lib.rs",children:(0,s.jsx)(t.code,{children:"delegator example contract"})}),"\nfor an elaborate example which uses cross-contract calling."]}),"\n",(0,s.jsx)(t.h3,{id:"how-it-works",children:"How it Works"}),"\n",(0,s.jsx)(t.p,{children:"In order to deploy the delegator smart contract we first\nhave to manually put the code of the other contract, receive\nits code hash from the signalled event and put their code hash\ninto our calling smart contract."}),"\n",(0,s.jsx)(t.p,{children:"The calling contract looks like this:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'use other_contract::OtherContract;\n\n//--snip--\n#[ink(storage)]\nstruct MyContract {\n    /// The other contract.\n    other_contract: OtherContract,\n}\n\nimpl MyContract {\n    /// Instantiate `MyContract with the given\n    /// sub-contract codes and some initial value.\n    #[ink(constructor)]\n    pub fn new(\n        other_contract_code_hash: Hash,\n    ) -> Self {\n        let other_contract = OtherContract::new(1337)\n            .endowment(total_balance / 4)\n            .code_hash(other_contract_code_hash)\n            .instantiate()\n            .expect("failed at instantiating the `OtherContract` contract");\n        Self {\n            other_contract\n        }\n    }\n\n    /// Calls the other contract.\n    #[ink(message)]\n    pub fn call_other_contract(&self) -> i32 {\n        self.other_contract.get_value()\n    }\n}\n//--snip--\n'})}),"\n",(0,s.jsxs)(t.p,{children:["It's ",(0,s.jsx)(t.code,{children:"Cargo.toml"})," contains"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:'other_contract = { path = "other_contract", default-features = false, features = ["ink-as-dependency"] }\n'})}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"other_contract/Cargo.toml"})," contains this:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-toml",children:"[features]\nink-as-dependency = []\n"})}),"\n",(0,s.jsxs)(t.p,{children:["Tells the ink! code generator to ",(0,s.jsx)(t.strong,{children:"always"})," or ",(0,s.jsx)(t.strong,{children:"never"}),"\ncompile the smart contract as if it was used as a dependency of another ink!\nsmart contract."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"other_contract/lib.rs"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"#[ink::contract]\npub mod other_contract {\n    /// Storage for the other contract.\n    #[ink(storage)]\n    pub struct OtherContract {\n        value: i32,\n    }\n\n    impl OtherContract {\n        /// Initializes the contract.\n        #[ink(constructor)]\n        pub fn new(value: i32) -> Self {\n            Self { value }\n        }\n\n        /// Returns the current state.\n        #[ink(message)]\n        pub fn get_value(&self) -> i32 {\n            self.value\n        }\n    }\n}\n"})})]})}function d(n={}){const{wrapper:t}={...(0,c.M)(),...n.components};return t?(0,s.jsx)(t,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},4552:(n,t,e)=>{e.d(t,{I:()=>a,M:()=>o});var s=e(11504);const c={},r=s.createContext(c);function o(n){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function a(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(c):n.components||c:o(n.components),s.createElement(r.Provider,{value:t},n.children)}}}]);