"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[459],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},h=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(n),h=r,g=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s[p]="string"==typeof t?t:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},13148:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Setup",slug:"/getting-started/setup",hide_title:!0},i=void 0,s={unversionedId:"getting-started/setup",id:"getting-started/setup",title:"Setup",description:"In case you are looking for a guided tutorial directed",source:"@site/docs/getting-started/setup.md",sourceDirName:"getting-started",slug:"/getting-started/setup",permalink:"/getting-started/setup",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/getting-started/setup.md",tags:[],version:"current",frontMatter:{title:"Setup",slug:"/getting-started/setup",hide_title:!0},sidebar:"reference",previous:{title:"Migrating an ink! contract to a Parachain Runtime",permalink:"/migrate-ink-contracts-to-polkadot-frame-parachain"},next:{title:"Creating an ink! Project",permalink:"/getting-started/creating-an-ink-project"}},c={},l=[{value:"Rust &amp; Cargo",id:"rust--cargo",level:2},{value:"ink! CLI",id:"ink-cli",level:2},{value:"Installation",id:"installation",level:3},{value:"Installing <code>substrate-contracts-node</code>",id:"installing-substrate-contracts-node",level:2},{value:"(1) Download the Binary",id:"1-download-the-binary",level:3},{value:"(2) Build it yourself",id:"2-build-it-yourself",level:3}],u={toc:l},p="wrapper";function d(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("img",{src:"/img/title/setup.svg",className:"titlePic"}),(0,r.kt)("h1",{id:"setup"},"Setup"),(0,r.kt)("p",null,"In case you are looking for a guided tutorial directed\ntowards beginners please check out our ",(0,r.kt)("a",{parentName:"p",href:"https://docs.substrate.io/tutorials/smart-contracts/"},"Guided Tutorial"),"."),(0,r.kt)("h2",{id:"rust--cargo"},"Rust & Cargo"),(0,r.kt)("p",null,"A pre-requisite for compiling smart contracts is to have a stable Rust version and Cargo installed. Here's ",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"an installation guide"),"."),(0,r.kt)("h2",{id:"ink-cli"},"ink! CLI"),(0,r.kt)("p",null,"The first tool we will be installing is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},(0,r.kt)("inlineCode",{parentName:"a"},"cargo-contract")),",\na CLI tool for helping setting up and managing WebAssembly smart contracts written with ink!."),(0,r.kt)("p",null,"You can find it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract"},"here on GitHub"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/cargo-contract"},"here on crates.io"),"."),(0,r.kt)("p",null,"The tool has a number of handy capabilities:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cargo contract       \nUtilities to develop Wasm smart contracts\n\nUsage: cargo contract <COMMAND>\n\nCommands:\n  new          Setup and create a new smart contract project\n  build        Compiles the contract, generates metadata, bundles both together in a `<name>.contract` file\n  check        Check that the code builds as Wasm; does not output any `<name>.contract` artifact to the `target/` directory\n  test         Test the smart contract off-chain\n  upload       Upload contract code\n  instantiate  Instantiate a contract\n  call         Call a contract\n  decode       Decodes a contracts input or output data (supplied in hex-encoding)\n  help         Print this message or the help of the given subcommand(s)\n\nOptions:\n  -h, --help     Print help information\n  -V, --version  Print version information\n")),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Please see the installation instructions in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo-contract")," repository ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/cargo-contract#installation"},"here"),"."),(0,r.kt)("p",null,"If everything worked, ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo contract --help")," should show you the above list of available commands."),(0,r.kt)("h2",{id:"installing-substrate-contracts-node"},"Installing ",(0,r.kt)("inlineCode",{parentName:"h2"},"substrate-contracts-node")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node"},"substrate-contracts-node")," is\na simple Substrate blockchain which is configured to include the Substrate module for\nsmart contract functionality \u2013 the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," pallet (see ",(0,r.kt)("a",{parentName:"p",href:"/how-it-works"},"How it Works")," for more).\nIt's a comfortable option if you want to get a quickstart."),(0,r.kt)("p",null,"There are two ways of installing the node:"),(0,r.kt)("h3",{id:"1-download-the-binary"},"(1) Download the Binary"),(0,r.kt)("p",null,"This is the recommended method, you can\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/paritytech/substrate-contracts-node/releases"},"download a binary from our releases page"),"\n(Linux and Mac). "),(0,r.kt)("h3",{id:"2-build-it-yourself"},"(2) Build it yourself"),(0,r.kt)("p",null,"Alternatively you can build the node by yourself.\nThis can take quite a while though!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install contracts-node\n")))}d.isMDXComponent=!0}}]);