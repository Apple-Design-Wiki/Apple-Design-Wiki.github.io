import{_ as g,r as m,o as k,c,F as d,a as u,d as v,b as n,e as i,t as _,u as w}from"./index-05Iw_lPN.js";const b={class:"content"},y=["onClick"],x={class:"left"},j={class:"title"},B={class:"desc"},C=["src"],E=v({name:"homes"}),P=Object.assign(E,{setup(D){const h=w(),a=m([]);async function p(){function t(s){return fetch(s).then(e=>{if(!e.ok)throw new Error("网络请求错误");return e.json()}).catch(e=>{console.error("请求错误:",e)})}const l=window.arr.map(s=>t(`https://apple-design-wiki.github.io/${s}/index.json`));Promise.all(l).then(s=>{s.forEach((e,r)=>{a.push({folder:e[0],title:e[1],desc:e[2],imgs:window.isPc?e.slice(3).filter(o=>!o.includes("mobile")):e.slice(3).filter(o=>o.includes("mobile"))})})}).catch(s=>{console.error("请求错误:",s)})}const f=t=>{console.log("page",t),h.push({path:"/detail",query:{folder:t.folder}})};return k(()=>{p()}),(t,l)=>(n(),c("div",b,[(n(!0),c(d,null,u(a,(s,e)=>(n(),c("div",{class:"item",key:e,onClick:r=>f(s)},[i("div",x,[i("div",j,_(s.title),1),i("div",B,_(s.desc),1)]),(n(!0),c(d,null,u(s.imgs,(r,o)=>(n(),c("div",{key:e+"+"+o},[i("img",{class:"img",src:"https://apple-design-wiki.github.io"+r},null,8,C)]))),128))],8,y))),128))]))}}),V=g(P,[["__scopeId","data-v-1babe4fc"]]);export{V as default};
