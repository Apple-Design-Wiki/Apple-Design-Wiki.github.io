import{_ as g,r as m,o as k,c as n,F as d,a as u,d as b,b as c,n as v,e as r,t as _,u as w}from"./index-CWjaP6FE.js";const y={class:"content"},x=["onClick"],C={class:"left"},j={class:"title"},B={class:"desc"},E=["src"],P=b({name:"homes"}),D=Object.assign(P,{setup(F){const h=w(),l=m([]);async function p(){function o(s){return fetch(s).then(e=>{if(!e.ok)throw new Error("网络请求错误");return e.json()}).catch(e=>{console.error("请求错误:",e)})}const a=window.arr.map(s=>o(`https://apple-design-wiki.github.io/${s}/index.json`));Promise.all(a).then(s=>{s.forEach((e,i)=>{l.push({folder:e[0],bg:e[3],title:e[1],desc:e[2],imgs:window.isPc?e.slice(4).filter(t=>!t.includes("mobile")):e.slice(4).filter(t=>t.includes("mobile"))})})}).catch(s=>{console.error("请求错误:",s)})}const f=o=>{console.log("page",o),h.push({path:"/detail",query:{folder:o.folder}})};return k(()=>{p()}),(o,a)=>(c(),n("div",y,[(c(!0),n(d,null,u(l,(s,e)=>(c(),n("div",{class:"item",key:e,onClick:i=>f(s),style:v({backgroundColor:s.bg})},[r("div",C,[r("div",j,_(s.title),1),r("div",B,_(s.desc),1)]),(c(!0),n(d,null,u(s.imgs,(i,t)=>(c(),n("div",{key:e+"+"+t},[r("img",{class:"img",src:"https://apple-design-wiki.github.io"+i},null,8,E)]))),128))],12,x))),128))]))}}),V=g(D,[["__scopeId","data-v-24656432"]]);export{V as default};
