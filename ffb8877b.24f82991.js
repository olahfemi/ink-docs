(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{107:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return c})),n.d(e,"metadata",(function(){return s})),n.d(e,"rightToc",(function(){return i})),n.d(e,"default",(function(){return u}));var o=n(2),r=n(6),a=(n(0),n(110)),c={title:"Troubleshooting",slug:"/getting-started/troubleshooting"},s={unversionedId:"getting-started/troubleshooting",id:"getting-started/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Here are solutions to some of the common problem you may come across:",source:"@site/docs/getting-started/troubleshooting.md",slug:"/getting-started/troubleshooting",permalink:"/ink-docs/getting-started/troubleshooting",editUrl:"https://github.com/ink-docs/edit/master/docs/getting-started/troubleshooting.md",version:"current",sidebar:"reference",previous:{title:"Call Your Contract",permalink:"/ink-docs/getting-started/calling-your-contract"},next:{title:"Contract Template",permalink:"/ink-docs/basics/contract-template"}},i=[{value:"Unexpected Epoch Change",id:"unexpected-epoch-change",children:[]},{value:"Old Contracts in Local Storage",id:"old-contracts-in-local-storage",children:[]},{value:"Transaction vs RPC",id:"transaction-vs-rpc",children:[]},{value:"Contract State Rent",id:"contract-state-rent",children:[]},{value:"Other Issues",id:"other-issues",children:[]}],l={rightToc:i};function u(t){var e=t.components,c=Object(r.a)(t,["components"]);return Object(a.b)("wrapper",Object(o.a)({},l,c,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Here are solutions to some of the common problem you may come across:"),Object(a.b)("h3",{id:"unexpected-epoch-change"},"Unexpected Epoch Change"),Object(a.b)("p",null,"There is a known issue with the Substrate block production (BABE) on a running chain. If you stop your node for too long (closing the terminal, putting your computer to sleep, etc.), you will get the following error:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'ClientImport("Unexpected epoch change")\n')),Object(a.b)("p",null,"To solve this you will need to restart your node with: ",Object(a.b)("inlineCode",{parentName:"p"},"canvas --dev --tmp"),". At that point, you will need to re-deploy any contracts and re-do any steps that you may have done before on your node. As long as you keep your node running, you should face no issues."),Object(a.b)("h3",{id:"old-contracts-in-local-storage"},"Old Contracts in Local Storage"),Object(a.b)("p",null,"The Polkadot UI uses its own local storage to track the contracts that you have deployed. This means that if you deploy a contract using the UI, and then purge your Canvas node, you will still see the old contracts in the UI even though they do not exist on-chain!"),Object(a.b)("p",null,"You can simply remove any old artifacts from the UI or reset your local storage. So remember, when you start a new chain with the ",Object(a.b)("inlineCode",{parentName:"p"},"--tmp")," flag or use the ",Object(a.b)("inlineCode",{parentName:"p"},"purge-chain")," subcommand, you will need to re-deploy any contracts and re-do any steps that you may have done before on your node."),Object(a.b)("h3",{id:"transaction-vs-rpc"},"Transaction vs RPC"),Object(a.b)("p",null,"When interacting with contracts using the Canvas UI, you have the option to submit your calls as a transaction or via the RPC:"),Object(a.b)("p",null,Object(a.b)("img",{alt:"An image of submitting with transaction or RPC",src:n(169).default})),Object(a.b)("p",null,'When you send as a transaction, it should be exactly as you expect. A transaction is submitted to contract, a fee is deducted from your account, and the state of your blockchain can change. In these situations, no value is returned from your contract calls, only a "Success" or "Failed" extrinsic message along with any events you emit.'),Object(a.b)("p",null,'However, there may be some calls that you want to "test", rather than actually submit a transaction. Or you may want to peek at the value that ',Object(a.b)("em",{parentName:"p"},"would"),' be returned if you called the contract function. For these scenarios, you can submit an RPC call, which will run all of your contract logic, but not actually submit a transaction or update the state of your chain. However, you will still need to specify the right amount of gas to cover your "virtual fee", but don\'t worry, nothing will be charged when making a call this way. :)'),Object(a.b)("h3",{id:"contract-state-rent"},"Contract State Rent"),Object(a.b)("p",null,"The Substrate contracts pallet has a state rent system that forces contracts to stay funded if they want to stay on the blockchain. This means that the more you use a contract, the more fees are taken from it, and at some point, the contract will run out of fees and turn into a non-functioning tombstone. We try to avoid this by giving the contract a large endowment when we initially deploy it. However, if your contract does become a tombstone, for the purposes of this tutorial, the best solution is to just redeploy your contract to the chain."),Object(a.b)("p",null,"The best way to prevent this in general is to make sure your contract stays well funded. In real world scenarios, there is a process that you can go through to recover a tombstone contract and get it functioning again, however this is beyond the scope of this tutorial."),Object(a.b)("h3",{id:"other-issues"},"Other Issues"),Object(a.b)("p",null,"If you run into any other issues during this tutorial, please ",Object(a.b)("a",{parentName:"p",href:"https://github.com/substrate-developer-hub/substrate-contracts-workshop/issues"},"report an issue"),"!"))}u.isMDXComponent=!0},110:function(t,e,n){"use strict";n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return b}));var o=n(0),r=n.n(o);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function c(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?c(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=r.a.createContext({}),u=function(t){var e=r.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},h=function(t){var e=u(t.components);return r.a.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},d=r.a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),h=u(n),d=o,b=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return n?r.a.createElement(b,s(s({ref:e},l),{},{components:n})):r.a.createElement(b,s({ref:e},l))}));function b(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,c=new Array(a);c[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,c[1]=s;for(var l=2;l<a;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},169:function(t,e,n){"use strict";n.r(e),e.default=n.p+"assets/images/send-as-c374f34ef9a7ae06db2ca9c3a4dc80aa.png"}}]);