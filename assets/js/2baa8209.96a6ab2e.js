"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[8188],{78408:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=n(17624),i=n(4552);const o={title:"Call Your Contract",slug:"/getting-started/calling-your-contract"},c=void 0,r={id:"getting-started/calling",title:"Call Your Contract",description:"Now that your contract has been fully deployed, we can start interacting with it! Flipper only has",source:"@site/versioned_docs/version-3.x/getting-started/calling.md",sourceDirName:"getting-started",slug:"/getting-started/calling-your-contract",permalink:"/3.x/getting-started/calling-your-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-3.x/getting-started/calling.md",tags:[],version:"3.x",frontMatter:{title:"Call Your Contract",slug:"/getting-started/calling-your-contract"},sidebar:"reference",previous:{title:"Deploy Your Contract",permalink:"/3.x/getting-started/deploy-your-contract"},next:{title:"Troubleshooting",permalink:"/3.x/getting-started/troubleshooting"}},a={},l=[{value:"1. get() function",id:"1-get-function",level:3},{value:"2. flip() function",id:"2-flip-function",level:3}];function d(t){const e={code:"code",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.M)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Now that your contract has been fully deployed, we can start interacting with it! Flipper only has\ntwo functions, ",(0,s.jsx)(e.code,{children:"flip()"})," and ",(0,s.jsx)(e.code,{children:"get()"})," so we will show you what it's like to play with both of them."]}),"\n",(0,s.jsx)(e.h3,{id:"1-get-function",children:"1. get() function"}),"\n",(0,s.jsxs)(e.p,{children:["We set the initial value of the Flipper contract\n",(0,s.jsx)(e.code,{children:"value"})," to ",(0,s.jsx)(e.code,{children:"false"})," when we instantiated the contract. Let's check that this is the case."]}),"\n",(0,s.jsxs)(e.p,{children:["In the ",(0,s.jsx)(e.strong,{children:"Message to Send"}),' section, select the "',(0,s.jsx)(e.strong,{children:"get(): bool"}),'" message and accept the default\nvalues for the other options.']}),"\n",(0,s.jsxs)(e.p,{children:["Press ",(0,s.jsx)(e.strong,{children:'"Read"'})," and confirm that it returns the value ",(0,s.jsx)(e.code,{children:"false"}),":"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"An image of Flipper RPC call with false",src:n(68180).c+"",width:"2379",height:"1442"})}),"\n",(0,s.jsx)(e.h3,{id:"2-flip-function",children:"2. flip() function"}),"\n",(0,s.jsxs)(e.p,{children:["So let's make the value turn ",(0,s.jsx)(e.code,{children:"true"})," now!"]}),"\n",(0,s.jsxs)(e.p,{children:["The alternative message to send with the UI is ",(0,s.jsx)(e.code,{children:"flip()"}),". Again, accept the default values for the other options and click ",(0,s.jsx)(e.strong,{children:"Call"})]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"An image of a Flipper transaction",src:n(33420).c+"",width:"2212",height:"1448"})}),"\n",(0,s.jsxs)(e.p,{children:["If the transaction was successful, we should then be able to go back to the ",(0,s.jsx)(e.code,{children:"get()"})," function and see our updated storage:"]}),"\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.img,{alt:"An image of Flipper RPC call with true",src:n(16228).c+"",width:"2367",height:"1441"})}),"\n",(0,s.jsx)(e.p,{children:"Woohoo! You deployed your first smart contract!"})]})}function h(t={}){const{wrapper:e}={...(0,i.M)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(d,{...t})}):d(t)}},68180:(t,e,n)=>{n.d(e,{c:()=>s});const s=n.p+"assets/images/flipper-false-43f1db9996ab4f0962983033eeec0d0d.png"},16228:(t,e,n)=>{n.d(e,{c:()=>s});const s=n.p+"assets/images/flipper-true-15a74eb2a5f9653cf1438056d9b11cd1.png"},33420:(t,e,n)=>{n.d(e,{c:()=>s});const s=n.p+"assets/images/send-as-transaction-25c96f27b353d7e9f3021cfa1ff68f46.png"},4552:(t,e,n)=>{n.d(e,{I:()=>r,M:()=>c});var s=n(11504);const i={},o=s.createContext(i);function c(t){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:c(t.components),s.createElement(o.Provider,{value:e},t.children)}}}]);