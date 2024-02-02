"use strict";(self.webpackChunkink_docs=self.webpackChunkink_docs||[]).push([[4552],{19700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=n(17624),a=n(4552);const s={title:"useSalter",description:"A React hook for generating random salt hex values and validating them."},o="useSalter",l={id:"frontend/react/hooks/contracts/use-salter",title:"useSalter",description:"A React hook for generating random salt hex values and validating them.",source:"@site/docs/frontend/react/hooks/contracts/use-salter.md",sourceDirName:"frontend/react/hooks/contracts",slug:"/frontend/react/hooks/contracts/use-salter",permalink:"/es/frontend/react/hooks/contracts/use-salter",draft:!1,unlisted:!1,editUrl:"https://github.com/paritytech/ink-docs/edit/master/docs/frontend/react/hooks/contracts/use-salter.md",tags:[],version:"current",frontMatter:{title:"useSalter",description:"A React hook for generating random salt hex values and validating them."},sidebar:"reference",previous:{title:"useMetadata",permalink:"/es/frontend/react/hooks/contracts/use-metadata"},next:{title:"useTx",permalink:"/es/frontend/react/hooks/contracts/use-tx"}},c={},i=[{value:"Usage",id:"usage",level:2},{value:"Return Value",id:"return-value",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"usesalter",children:"useSalter"}),"\n",(0,r.jsx)(t.p,{children:"A React hook for generating random salt hex values and validating them."}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:["See ",(0,r.jsx)(t.a,{href:"https://github.com/paritytech/useink/blob/main/playground/src/components/pg-deploy/DeployPage.tsx",children:"example in the playground dApp"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"import { useSalter } from 'useink'\n\nexport const DeployPage: React.FC = () => {\n  const S = useSalter();\n\n  return (\n    <div>\n      <label htmlFor='salt'>Salt</label>\n      <input\n        value={S.salt}\n        onChange={(e) => S.set(e.target.value)}\n      />\n\n      {S.error && <p>{S.error}</p>\n\n      <button\n        type='button'\n        onClick={S.regenerate}\n      >\n        Regenerate\n      </button>\n    </div>\n  )\n};\n"})}),"\n",(0,r.jsx)(t.h2,{id:"return-value",children:"Return Value"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"{\n  salt: string;\n  regenerate: () => void;\n  set: (salt: string) => void;\n  error?: SalterError;\n  resetState: () => void;\n}\n\nexport enum SalterError {\n  InvalidHash = 'Invalid salt hash value.',\n}\n"})})]})}function u(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>o});var r=n(11504);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);