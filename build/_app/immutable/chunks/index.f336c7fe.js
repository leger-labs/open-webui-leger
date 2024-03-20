import{n as r}from"./index.9eb23429.js";const c=async(a="")=>{let n=null;const e=await fetch(`${r}/urls`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return e.OLLAMA_BASE_URLS},h=async(a="",n)=>{let e=null;const t=await fetch(`${r}/urls/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({urls:n})}).then(async i=>{if(!i.ok)throw await i.json();return i.json()}).catch(i=>(console.log(i),"detail"in i?e=i.detail:e="Server connection failed",null));if(e)throw e;return t.OLLAMA_BASE_URLS},p=async(a="")=>{let n=null;const e=await fetch(`${r}/api/version`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return(e==null?void 0:e.version)??""},u=async(a="")=>{let n=null;const e=await fetch(`${r}/api/tags`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),"detail"in t?n=t.detail:n="Server connection failed",null));if(n)throw n;return((e==null?void 0:e.models)??[]).map(t=>({id:t.model,name:t.name??t.model,...t})).sort((t,i)=>t.name.localeCompare(i.name))},d=async(a="",n,e,t)=>{let i=null;n=n.replace(/{{prompt}}/g,t),console.log(n);const o=await fetch(`${r}/api/generate`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({model:e,prompt:n,stream:!1})}).then(async l=>{if(!l.ok)throw await l.json();return l.json()}).catch(l=>(console.log(l),"detail"in l&&(i=l.detail),null));if(i)throw i;return(o==null?void 0:o.response)??"New Chat"},f=async(a="",n,e)=>{let t=null;e===""&&(e="[no existing conversation]");const i=await fetch(`${r}/api/generate`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({model:n,prompt:`Conversation:
			${e}

			As USER in the conversation above, your task is to continue the conversation. Remember, Your responses should be crafted as if you're a human conversing in a natural, realistic manner, keeping in mind the context and flow of the dialogue. Please generate a fitting response to the last message in the conversation, or if there is no existing conversation, initiate one as a normal person would.
			
			Response:
			`})}).catch(o=>(console.log(o),"detail"in o&&(t=o.detail),null));if(t)throw t;return i},y=async(a="",n)=>{let e=new AbortController,t=null;const i=await fetch(`${r}/api/chat`,{signal:e.signal,method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(n)}).catch(o=>(t=o,null));if(t)throw t;return[i,e]},m=async(a="",n)=>{let e=null;const t=await fetch(`${r}/cancel/${n}`,{method:"GET",headers:{"Content-Type":"text/event-stream",Authorization:`Bearer ${a}`}}).catch(i=>(e=i,null));if(e)throw e;return t},g=async(a,n,e)=>{let t=null;const i=await fetch(`${r}/api/create`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({name:n,modelfile:e})}).catch(o=>(t=o,null));if(t)throw t;return i},w=async(a,n,e=null)=>{let t=null;const i=await fetch(`${r}/api/delete${e!==null?`/${e}`:""}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({name:n})}).then(async o=>{if(!o.ok)throw await o.json();return o.json()}).then(o=>(console.log(o),!0)).catch(o=>(console.log(o),t=o,"detail"in o&&(t=o.detail),null));if(t)throw t;return i},j=async(a,n,e=null)=>{let t=null;const i=await fetch(`${r}/api/pull${e!==null?`/${e}`:""}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({name:n})}).catch(o=>(console.log(o),t=o,"detail"in o&&(t=o.detail),null));if(t)throw t;return i};export{c as a,u as b,g as c,w as d,y as e,d as f,p as g,m as h,f as i,j as p,h as u};
