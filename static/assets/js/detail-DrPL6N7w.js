import{o as a,c,e as d,d as i,b as l,f as m}from"./index-B5vq-J9v.js";const u={class:"detail"},p=i({name:"homes"}),_=Object.assign(p,{setup(f){const o=m();async function s(e){const t=document.getElementById("contentInner");fetch(`https://apple-design-wiki.github.io/${e}/index.md`||"https://raw.githubusercontent.com/markdown-it/markdown-it/master/README.md").then(n=>n.text()).then(n=>{const r=new showdown.Converter().makeHtml(n);t.innerHTML=r})}return a(()=>{let{query:e}=o;console.log("query",e.folder),s(e.folder)}),(e,t)=>(l(),c("div",u,t[0]||(t[0]=[d("div",{id:"contentInner"},null,-1)])))}});export{_ as default};