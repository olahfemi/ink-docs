"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4944],{950:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(4848),s=n(8453);const i={title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous"},r=void 0,a={id:"macros-attributes/anonymous",title:"#[ink(anonymous)]",description:"Applicable to ink! events.",source:"@site/versioned_docs/version-3.x/macros-attributes/anonymous.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/anonymous",permalink:"/3.x/macros-attributes/anonymous",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/macros-attributes/anonymous.md",tags:[],version:"3.x",frontMatter:{title:"#[ink(anonymous)]",slug:"/macros-attributes/anonymous"},sidebar:"reference",previous:{title:"#[ink::contract]",permalink:"/3.x/macros-attributes/contract"},next:{title:"#[ink(constructor)]",permalink:"/3.x/macros-attributes/constructor"}},c={},u=[];function m(t){const e={code:"code",p:"p",...(0,s.R)(),...t.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.p,{children:"Applicable to ink! events."}),"\n",(0,o.jsx)(e.p,{children:"Tells the ink! codegen to treat the ink! event as anonymous which omits the event signature as topic upon emitting. Very similar to anonymous events in Solidity."}),"\n",(0,o.jsx)(e.p,{children:"Anonymous events have similar semantics as in Solidity in that their\nevent signature won't be included in their event topics serialization\nto reduce event emitting overhead. This is especially useful for user\ndefined events."}),"\n",(0,o.jsxs)(e.p,{children:["The signature of the event is by default one of the topics of the event, except\nif you annotate the event with ",(0,o.jsx)(e.code,{children:"#[ink(anonymous)]"}),".\nThe attribute implies that it is not possible to filter for specific anonymous events by name."]})]})}function l(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(m,{...t})}):m(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>r,x:()=>a});var o=n(6540);const s={},i=o.createContext(s);function r(t){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:r(t.components),o.createElement(i.Provider,{value:e},t.children)}}}]);