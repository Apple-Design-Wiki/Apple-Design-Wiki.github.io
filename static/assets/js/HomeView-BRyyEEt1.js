import{_ as m,r as k,o as v,c,F as d,a as u,d as w,b as n,e as i,t as _,u as b}from"./index-B5vq-J9v.js";const y={class:"content"},x=["onClick"],B={class:"left"},j={class:"title"},C={class:"desc"},E=["src"],P=w({name:"homes"}),D=Object.assign(P,{setup(F){const h=b(),a=k([]);async function p(){function o(s){return fetch(s).then(e=>{if(!e.ok)throw new Error("网络请求错误");return e.json()}).catch(e=>{console.error("请求错误:",e)})}const t=["iBook1999","iMac1999"].map(s=>o(`https://apple-design-wiki.github.io/${s}/index.json`));Promise.all(t).then(s=>{s.forEach((e,l)=>{a.push({folder:e[0],title:e[1],desc:e[2],imgs:window.isPc?e.slice(3).filter(r=>!r.includes("mobile")):e.slice(3).filter(r=>r.includes("mobile"))})})}).catch(s=>{console.error("请求错误:",s)})}const f=o=>{console.log("page",o),h.push({path:"/detail",query:{folder:o.folder}})};return v(()=>{p()}),(o,g)=>(n(),c("div",y,[(n(!0),c(d,null,u(a,(t,s)=>(n(),c("div",{class:"item",key:s,onClick:e=>f(t)},[i("div",B,[i("div",j,_(t.title),1),i("div",C,_(t.desc),1)]),(n(!0),c(d,null,u(t.imgs,(e,l)=>(n(),c("div",{key:s+"+"+l},[i("img",{class:"img",src:"https://apple-design-wiki.github.io"+e},null,8,E)]))),128))],8,x))),128))]))}}),V=m(D,[["__scopeId","data-v-0e61dc4a"]]);export{V as default};
