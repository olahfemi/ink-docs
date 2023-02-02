"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[1987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4273:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"#[ink(constructor)]",slug:"/macros-attributes/constructor"},c=void 0,i={unversionedId:"macros-attributes/constructor",id:"version-4.0.0-alpha.1/macros-attributes/constructor",title:"#[ink(constructor)]",description:"Aplicable a un m\xe9todo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-4.0.0-alpha.1/macros-attributes/constructor.md",sourceDirName:"macros-attributes",slug:"/macros-attributes/constructor",permalink:"/es/4.0.0-alpha.1/macros-attributes/constructor",draft:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/versioned_docs/version-4.0.0-alpha.1/macros-attributes/constructor.md",tags:[],version:"4.0.0-alpha.1",frontMatter:{title:"#[ink(constructor)]",slug:"/macros-attributes/constructor"},sidebar:"reference",previous:{title:"#[ink(anonymous)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/anonymous"},next:{title:"#[ink(event)]",permalink:"/es/4.0.0-alpha.1/macros-attributes/event"}},s={},l=[{value:"Ejemplo",id:"ejemplo",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Aplicable a un m\xe9todo."),(0,o.kt)("p",null,"Marca un m\xe9todo (o m\xfaltiples m\xe9todos) para el struc del ink! storage como contructor haciendo que este disponible\npara la API de instanciaci\xf3n del contrato."),(0,o.kt)("p",null,"Tiene que haber al menos un m\xe9todo ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," definido."),(0,o.kt)("p",null,"Los m\xe9todos marcados con ",(0,o.kt)("inlineCode",{parentName:"p"},"#[ink(constructor)]")," son especiales ya que son dispatacble en el momento\nde la instanciaci\xf3n del contrato. Un contrato puede definir m\xfaltiples constructores que permite al\nlos usuarios del contrato inicializar el contrato de diferentes maneras."),(0,o.kt)("h2",{id:"ejemplo"},"Ejemplo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink::contract]\nmod erc20 {\n    #[ink(storage)]\n    pub struct Erc20 { ... }\n\n    impl Erc20 {\n        #[ink(constructor)]\n        pub fn new(initial_supply: Balance) -> Self { .. }\n\n        #[ink(constructor)]\n        pub fn total_supply(&self) -> Balance { .. }\n\n        // etc.\n    }\n}\n")))}p.isMDXComponent=!0}}]);