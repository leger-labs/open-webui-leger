import{d as a}from"./index.9eb23429.js";const c=async n=>await fetch(`${a}/utils/gravatar?email=${n}`,{method:"GET",headers:{"Content-Type":"application/json"}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),null)),s=async n=>{await fetch(`${a}/utils/db/download`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`}}).then(o=>{if(!o.ok)throw new Error("Network response was not ok");return o.blob()}).then(o=>{const t=window.URL.createObjectURL(o),e=document.createElement("a");e.href=t,e.download="webui.db",document.body.appendChild(e),e.click(),window.URL.revokeObjectURL(t)}).catch(o=>(console.log(o),null))};export{s as d,c as g};
