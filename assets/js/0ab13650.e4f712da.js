"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[5934],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),l=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},u=function(t){var e=l(t.components);return n.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),f=l(r),m=a,h=f["".concat(c,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(h,s(s({ref:e},u),{},{components:r})):n.createElement(h,s({ref:e},u))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9387:function(t,e,r){r.r(e),r.d(e,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Why Rust for Smart Contracts?",slug:"/why-rust-for-smart-contracts"},c=void 0,l={unversionedId:"intro/why-rust",id:"intro/why-rust",title:"Why Rust for Smart Contracts?",description:"ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.",source:"@site/docs/intro/why-rust.md",sourceDirName:"intro",slug:"/why-rust-for-smart-contracts",permalink:"/why-rust-for-smart-contracts",draft:!1,editUrl:"https://github.com/ink-docs/edit/master/docs/intro/why-rust.md",tags:[],version:"current",frontMatter:{title:"Why Rust for Smart Contracts?",slug:"/why-rust-for-smart-contracts"},sidebar:"reference",previous:{title:"Overview",permalink:"/"},next:{title:"Why WebAssembly for Smart Contracts?",permalink:"/why-webassembly-for-smart-contracts"}},u={},p=[],f={toc:p};function m(t){var e=t.components,r=(0,a.Z)(t,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ink! chooses not to invent a new programming language, but rather adapt a subset of Rust to serve our purpose.\nIf this doesn't already convince you, you find many more good reasons here:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Rust is an ideal smart contract language:")," It is type safe, memory safe, and free of undefined behaviors. It generates small binaries because it doesn\u2019t include extra bloat, like a garbage collector, and advanced optimizations and tree shaking remove dead code. Through compiler flags, Rust can automatically protect against integer overflow."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Rust ecosystem:")," You gain from all of support available to the Rust ecosystem for free. As the language develops, ink! will automatically gain access to new features and functionality, improving how you can write smart contracts in the future."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Tooling:")," Because ink! follows Rust standards, tools like rustfmt, clippy and rust-analyzer already work out of the box. Same goes for code formatting and syntax highlighting in most modern text editors. Also Rust has an integrated test and benchmark runner,"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"No overhead:")," Minimal runtime."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Safe & Efficient:")," Zero-cost & safe abstractions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Productive:")," Cargo + ",(0,o.kt)("a",{href:"https://crates.io"},"crates.io")," Ecosystem."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"1st class Wasm:")," Rust provides the first class support for the WebAssembly."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("span",{class:"highlight"},"Small Size:")," In the space-constrained blockchain world size is important. The Rust compiler is a great help for that, since it reorders struct fields in order to make each type as small as possible. Thus Rust data structures are very compact, in many cases even more compact than in C.")))}m.isMDXComponent=!0}}]);