import{s as Ke,p as Y,a as ke,f as fe,M as Qe,d as F,c as Me,g as pe,h as ge,j as x,i as De,r as $,u as Xe,V as ee,w as te,o as Ze,t as j}from"../chunks/scheduler.67abc04a.js";import{S as xe,i as $e,f as oe,b as Ie,d as Ce,m as Te,a as Ee,t as Pe,e as Ne}from"../chunks/index.89481181.js";import{g as et}from"../chunks/globals.7f7f1b26.js";import{a as R}from"../chunks/Toaster.svelte_svelte_type_style_lang.9328e92b.js";import"../chunks/singletons.9164d752.js";import{p as tt}from"../chunks/stores.347d817f.js";import{h as Ae,f as qe,e as me,a as He,L as ot,O as st,g as Le,m as nt,c as at,j as lt,W as rt}from"../chunks/index.9eb23429.js";import{v as Ge,s as Je,c as je}from"../chunks/index.496e36ff.js";import{e as it,f as ct,h as Ve}from"../chunks/index.f336c7fe.js";import{c as ut,b as de,p as he,w as ft,v as We,x as pt,y as gt}from"../chunks/Tooltip.aaea65fd.js";import{q as mt,a as dt}from"../chunks/index.3c366d73.js";import{d as ht}from"../chunks/index.9ef00845.js";import{N as _t,M as wt,a as yt,b as St,R as bt}from"../chunks/index.72f91f08.js";const{document:ve}=et;function kt(s){var Se;let z,t,o,m,G,b,T,E,N,q,M,K,I,y,h,A,se,B,k,Q,V,O,r,a,ie;ve.title=z=`
		`+(s[8]?`${s[8].length>30?`${s[8].slice(0,30)}...`:s[8]} | ${s[15]}`:`${s[15]}`)+`
	`,m=new _t({props:{title:s[8],shareEnabled:s[11].length>0,initNewChat:s[16],tags:s[7],addTag:s[22],deleteTag:s[23]}});function W(n){s[25](n)}let _e={};s[0]!==void 0&&(_e.selectedModels=s[0]),N=new wt({props:_e}),Y.push(()=>oe(N,"selectedModels",W));function ce(n){s[26](n)}function we(n){s[27](n)}function ye(n){s[28](n)}let ne={chatId:s[13],selectedModels:s[0],selectedModelfiles:s[6],processing:s[3],bottomPadding:s[10].length>0,sendPrompt:s[18],continueGeneration:s[21],regenerateResponse:s[20]};s[1]!==void 0&&(ne.history=s[1]),s[11]!==void 0&&(ne.messages=s[11]),s[2]!==void 0&&(ne.autoScroll=s[2]),y=new yt({props:ne}),Y.push(()=>oe(y,"history",ce)),Y.push(()=>oe(y,"messages",we)),Y.push(()=>oe(y,"autoScroll",ye));function Oe(n){s[31](n)}function Re(n){s[32](n)}function Be(n){s[33](n)}let X={suggestionPrompts:((Se=s[5])==null?void 0:Se.suggestionPrompts)??s[14].default_prompt_suggestions,messages:s[11],submitPrompt:s[17],stopResponse:s[19]};return s[10]!==void 0&&(X.files=s[10]),s[9]!==void 0&&(X.prompt=s[9]),s[2]!==void 0&&(X.autoScroll=s[2]),k=new St({props:X}),Y.push(()=>oe(k,"files",Oe)),Y.push(()=>oe(k,"prompt",Re)),Y.push(()=>oe(k,"autoScroll",Be)),{c(){t=ke(),o=fe("div"),Ie(m.$$.fragment),G=ke(),b=fe("div"),T=fe("div"),E=fe("div"),Ie(N.$$.fragment),K=ke(),I=fe("div"),Ie(y.$$.fragment),B=ke(),Ie(k.$$.fragment),this.h()},l(n){Qe("svelte-1123lr8",ve.head).forEach(F),t=Me(n),o=pe(n,"DIV",{class:!0});var U=ge(o);Ce(m.$$.fragment,U),G=Me(U),b=pe(U,"DIV",{class:!0});var J=ge(b);T=pe(J,"DIV",{class:!0,id:!0});var C=ge(T);E=pe(C,"DIV",{class:!0});var v=ge(E);Ce(N.$$.fragment,v),v.forEach(F),K=Me(C),I=pe(C,"DIV",{class:!0});var Z=ge(I);Ce(y.$$.fragment,Z),Z.forEach(F),C.forEach(F),B=Me(J),Ce(k.$$.fragment,J),J.forEach(F),U.forEach(F),this.h()},h(){var n;x(E,"class",M=(((n=s[12])==null?void 0:n.fullScreenMode)??null?"max-w-full":"max-w-2xl md:px-0")+" mx-auto w-full px-4"),x(I,"class","h-full w-full flex flex-col py-8"),x(T,"class","pb-2.5 flex flex-col justify-between w-full flex-auto overflow-auto h-0"),x(T,"id","messages-container"),x(b,"class","flex flex-col flex-auto"),x(o,"class","h-screen max-h-[100dvh] w-full flex flex-col")},m(n,p){De(n,t,p),De(n,o,p),Te(m,o,null),$(o,G),$(o,b),$(b,T),$(T,E),Te(N,E,null),$(T,K),$(T,I),Te(y,I,null),s[29](T),$(b,B),Te(k,b,null),r=!0,a||(ie=Xe(T,"scroll",s[30]),a=!0)},p(n,p){var Z,be;(!r||p[0]&33024)&&z!==(z=`
		`+(n[8]?`${n[8].length>30?`${n[8].slice(0,30)}...`:n[8]} | ${n[15]}`:`${n[15]}`)+`
	`)&&(ve.title=z);const U={};p[0]&256&&(U.title=n[8]),p[0]&2048&&(U.shareEnabled=n[11].length>0),p[0]&128&&(U.tags=n[7]),m.$set(U);const J={};!q&&p[0]&1&&(q=!0,J.selectedModels=n[0],ee(()=>q=!1)),N.$set(J),(!r||p[0]&4096&&M!==(M=(((Z=n[12])==null?void 0:Z.fullScreenMode)??null?"max-w-full":"max-w-2xl md:px-0")+" mx-auto w-full px-4"))&&x(E,"class",M);const C={};p[0]&8192&&(C.chatId=n[13]),p[0]&1&&(C.selectedModels=n[0]),p[0]&64&&(C.selectedModelfiles=n[6]),p[0]&8&&(C.processing=n[3]),p[0]&1024&&(C.bottomPadding=n[10].length>0),!h&&p[0]&2&&(h=!0,C.history=n[1],ee(()=>h=!1)),!A&&p[0]&2048&&(A=!0,C.messages=n[11],ee(()=>A=!1)),!se&&p[0]&4&&(se=!0,C.autoScroll=n[2],ee(()=>se=!1)),y.$set(C);const v={};p[0]&16416&&(v.suggestionPrompts=((be=n[5])==null?void 0:be.suggestionPrompts)??n[14].default_prompt_suggestions),p[0]&2048&&(v.messages=n[11]),!Q&&p[0]&1024&&(Q=!0,v.files=n[10],ee(()=>Q=!1)),!V&&p[0]&512&&(V=!0,v.prompt=n[9],ee(()=>V=!1)),!O&&p[0]&4&&(O=!0,v.autoScroll=n[2],ee(()=>O=!1)),k.$set(v)},i(n){r||(Ee(m.$$.fragment,n),Ee(N.$$.fragment,n),Ee(y.$$.fragment,n),Ee(k.$$.fragment,n),r=!0)},o(n){Pe(m.$$.fragment,n),Pe(N.$$.fragment,n),Pe(y.$$.fragment,n),Pe(k.$$.fragment,n),r=!1},d(n){n&&(F(t),F(o)),Ne(m),Ne(N),Ne(y),s[29](null),Ne(k),a=!1,ie()}}}function Mt(s,z,t){let o,m,G,b,T,E,N;te(s,qe,e=>t(12,o=e)),te(s,Ae,e=>t(13,m=e)),te(s,nt,e=>t(37,G=e)),te(s,at,e=>t(14,b=e)),te(s,tt,e=>t(38,T=e)),te(s,lt,e=>t(24,E=e)),te(s,rt,e=>t(15,N=e));let q=!1,M=!0,K="",I,y=null,h=[""],A=null,se={},B=null,k=[],Q="",V="",O=[],r=[],a={messages:{},currentId:null};Ze(async()=>{await ie()});const ie=async()=>{var c;y!==null&&(await Ve(localStorage.token,y),y=null),window.history.replaceState(a.state,"","/"),await Ae.set(""),t(2,M=!0),t(8,Q=""),t(11,r=[]),t(1,a={messages:{},currentId:null}),T.url.searchParams.get("models")?t(0,h=(c=T.url.searchParams.get("models"))==null?void 0:c.split(",")):o!=null&&o.models?t(0,h=o==null?void 0:o.models):b!=null&&b.default_models?t(0,h=b==null?void 0:b.default_models.split(",")):t(0,h=[""]),t(0,h=h.map(d=>G.map(l=>l.id).includes(d)?d:""));let e=JSON.parse(localStorage.getItem("settings")??"{}");qe.set({...e});const i=document.getElementById("chat-textarea");setTimeout(()=>i==null?void 0:i.focus(),0)},W=()=>{t(4,I.scrollTop=I.scrollHeight,I)},_e=async(e,i=null)=>{if(console.log("submitPrompt",m),t(0,h=h.map(c=>G.map(d=>d.id).includes(c)?c:"")),h.includes(""))R.error("Model not selected");else if(r.length!=0&&r.at(-1).done!=!0)console.log("wait");else if(O.length>0&&O.filter(c=>c.upload_status===!1).length>0)R.error("Oops! Hold tight! Your files are still in the processing oven. We're cooking them up to perfection. Please be patient and we'll let you know once they're ready.");else{document.getElementById("chat-textarea").style.height="";let c=Ge(),d={id:c,parentId:r.length!==0?r.at(-1).id:null,childrenIds:[],role:"user",user:i??void 0,content:e,files:O.length>0?O:void 0,timestamp:Math.floor(Date.now()/1e3)};t(1,a.messages[c]=d,a),t(1,a.currentId=c,a),r.length!==0&&a.messages[r.at(-1).id].childrenIds.push(c),await j(),r.length==1&&(o.saveChatHistory??!0?(B=await ut(localStorage.token,{id:m,title:"New Chat",models:h,system:o.system??void 0,options:{...o.options??{}},messages:r,history:a,tags:[],timestamp:Date.now()}),await me.set(await de(localStorage.token)),await Ae.set(B.id)):await Ae.set("local"),await j()),t(9,V=""),t(10,O=[]),await ce(e,c)}},ce=async(e,i)=>{const c=JSON.parse(JSON.stringify(m)),d=r.filter(l=>(l==null?void 0:l.files)??null).map(l=>l.files.filter(f=>f.type==="doc"||f.type==="collection")).flat(1);if(console.log(d),d.length>0){t(3,K="Reading");const l=a.messages[i].content;let f=await Promise.all(d.map(async S=>S.type==="collection"?await mt(localStorage.token,S.collection_names,l).catch(D=>(console.log(D),null)):await dt(localStorage.token,S.collection_name,l).catch(D=>(console.log(D),null))));f=f.filter(S=>S);const w=f.reduce((S,D,ae,g)=>`${S}${D.documents.join(" ")}
`,"");console.log(w),t(1,a.messages[i].raContent=await bt(localStorage.token,w,l),a),t(1,a.messages[i].contexts=f,a),await j(),t(3,K="")}await Promise.all(h.map(async l=>{const f=G.filter(w=>w.id===l).at(0);if(f){let w=Ge(),S={parentId:i,id:w,childrenIds:[],role:"assistant",content:"",model:f.id,timestamp:Math.floor(Date.now()/1e3)};t(1,a.messages[w]=S,a),t(1,a.currentId=w,a),i!==null&&t(1,a.messages[i].childrenIds=[...a.messages[i].childrenIds,w],a),f!=null&&f.external?await ye(f,e,w,c):f&&await we(f,e,w,c)}else R.error(`Model ${l} not found`)})),await me.set(await de(localStorage.token))},we=async(e,i,c,d)=>{var ae;e=e.id;const l=a.messages[c];await j(),W();const f=[o.system?{role:"system",content:o.system}:void 0,...r].filter(g=>g).map((g,H,le)=>({role:g.role,content:le.length-2!==H?g.content:(g==null?void 0:g.raContent)??g.content,...g.files&&{images:g.files.filter(P=>P.type==="image").map(P=>P.url.slice(P.url.indexOf(",")+1))}}));let w=-1;f.forEach((g,H)=>{g.images&&(w=H)}),f.forEach((g,H)=>{H!==w&&delete g.images});const[S,D]=await it(localStorage.token,{model:e,messages:f,options:{...o.options??{}},format:o.requestFormat??void 0,keep_alive:o.keepAlive??void 0});if(S&&S.ok){console.log("controller",D);const g=S.body.pipeThrough(new TextDecoderStream).pipeThrough(Je(`
`)).getReader();for(;;){const{value:H,done:le}=await g.read();if(le||q||d!==m){l.done=!0,t(11,r),t(1,a),q&&(D.abort("User: Stop Response"),await Ve(localStorage.token,y)),y=null;break}try{let P=H.split(`
`);for(const u of P)if(u!==""){console.log(u);let _=JSON.parse(u);if("detail"in _)throw _;if("id"in _)console.log(_),y=_.id;else if(_.done==!1){if(l.content==""&&_.message.content==`
`)continue;l.content+=_.message.content,t(11,r),t(1,a)}else{if(l.done=!0,l.content==""&&(l.error=!0,l.content="Oops! No text generated from Ollama, Please try again."),l.context=_.context??null,l.info={total_duration:_.total_duration,load_duration:_.load_duration,sample_count:_.sample_count,sample_duration:_.sample_duration,prompt_eval_count:_.prompt_eval_count,prompt_eval_duration:_.prompt_eval_duration,eval_count:_.eval_count,eval_duration:_.eval_duration},t(11,r),t(1,a),o.notificationEnabled&&!document.hasFocus()){const ue=new Notification(A?`${A.title.charAt(0).toUpperCase()+A.title.slice(1)}`:`${e}`,{body:l.content,icon:(A==null?void 0:A.imageUrl)??`${He}/static/favicon.png`})}o.responseAutoCopy&&je(l.content),o.responseAutoPlayback&&(await j(),(ae=document.getElementById(`speak-button-${l.id}`))==null||ae.click())}}}catch(P){console.log(P),"detail"in P&&R.error(P.detail);break}M&&W()}m==d&&(o.saveChatHistory??!0)&&(B=await he(localStorage.token,d,{messages:r,history:a}),await me.set(await de(localStorage.token)))}else{if(S!==null){const g=await S.json();console.log(g),"detail"in g?(R.error(g.detail),l.content=g.detail):(R.error(g.error),l.content=g.error)}else R.error("Uh-oh! There was an issue connecting to Ollama."),l.content="Uh-oh! There was an issue connecting to Ollama.";l.error=!0,l.content="Uh-oh! There was an issue connecting to Ollama.",l.done=!0,t(11,r),t(1,a)}q=!1,await j(),M&&W(),r.length==2&&r.at(1).content!==""&&(window.history.replaceState(a.state,"",`/c/${d}`),await Be(d,i))},ye=async(e,i,c,d)=>{var w,S,D,ae,g,H,le,P;const l=a.messages[c];W();const f=await ht(localStorage.token,{model:e.id,stream:!0,messages:[o.system?{role:"system",content:o.system}:void 0,...r].filter(u=>u).map((u,_,ue)=>{var re;return{role:u.role,...((re=u.files)==null?void 0:re.filter(L=>L.type==="image").length)>0?{content:[{type:"text",text:ue.length-1!==_?u.content:(u==null?void 0:u.raContent)??u.content},...u.files.filter(L=>L.type==="image").map(L=>({type:"image_url",image_url:{url:L.url}}))]}:{content:ue.length-1!==_?u.content:(u==null?void 0:u.raContent)??u.content}}}),seed:((w=o==null?void 0:o.options)==null?void 0:w.seed)??void 0,stop:((S=o==null?void 0:o.options)==null?void 0:S.stop)??void 0,temperature:((D=o==null?void 0:o.options)==null?void 0:D.temperature)??void 0,top_p:((ae=o==null?void 0:o.options)==null?void 0:ae.top_p)??void 0,num_ctx:((g=o==null?void 0:o.options)==null?void 0:g.num_ctx)??void 0,frequency_penalty:((H=o==null?void 0:o.options)==null?void 0:H.repeat_penalty)??void 0,max_tokens:((le=o==null?void 0:o.options)==null?void 0:le.num_predict)??void 0},e.source==="litellm"?`${ot}/v1`:`${st}`);if(f&&f.ok){const u=f.body.pipeThrough(new TextDecoderStream).pipeThrough(Je(`
`)).getReader();for(;;){const{value:_,done:ue}=await u.read();if(ue||q||d!==m){l.done=!0,t(11,r),t(1,a);break}try{let re=_.split(`
`);for(const L of re)if(L!=="")if(console.log(L),L==="data: [DONE]")l.done=!0,t(11,r),t(1,a);else{let Ue=JSON.parse(L.replace(/^data: /,""));if(console.log(Ue),l.content==""&&Ue.choices[0].delta.content==`
`)continue;l.content+=Ue.choices[0].delta.content??"",t(11,r),t(1,a)}}catch(re){console.log(re)}o.notificationEnabled&&!document.hasFocus()&&new Notification(`OpenAI ${e}`,{body:l.content,icon:`${He}/static/favicon.png`}),o.responseAutoCopy&&je(l.content),o.responseAutoPlayback&&(await j(),(P=document.getElementById(`speak-button-${l.id}`))==null||P.click()),M&&W()}m==d&&(o.saveChatHistory??!0)&&(B=await he(localStorage.token,d,{messages:r,history:a}),await me.set(await de(localStorage.token)))}else{if(f!==null){const u=await f.json();console.log(u),"detail"in u?(R.error(u.detail),l.content=u.detail):"message"in u.error?(R.error(u.error.message),l.content=u.error.message):(R.error(u.error),l.content=u.error)}else R.error(`Uh-oh! There was an issue connecting to ${e}.`),l.content=`Uh-oh! There was an issue connecting to ${e}.`;l.error=!0,l.content=`Uh-oh! There was an issue connecting to ${e}.`,l.done=!0,t(11,r),t(1,a)}q=!1,await j(),M&&W(),r.length==2&&(window.history.replaceState(a.state,"",`/c/${d}`),await p(d,i))},ne=()=>{q=!0,console.log("stopResponse")},Oe=async()=>{if(console.log("regenerateResponse"),r.length!=0&&r.at(-1).done==!0){r.splice(r.length-1,1),t(11,r),t(1,a);let e=r.at(-1),i=e.content;await ce(i,e.id)}},Re=async()=>{console.log("continueGeneration");const e=JSON.parse(JSON.stringify(m));if(r.length!=0&&r.at(-1).done==!0){const i=a.messages[a.currentId];i.done=!1,await j();const c=G.filter(d=>d.id===i.model).at(0);c&&(c!=null&&c.external?await ye(c,a.messages[i.parentId].content,i.id,e):await we(c,a.messages[i.parentId].content,i.id,e))}else R.error(`Model ${modelId} not found`)},Be=async(e,i)=>{if(o.titleAutoGenerate??!0){const c=await ct(localStorage.token,(o==null?void 0:o.titleGenerationPrompt)??"Create a concise, 3-5 word phrase as a header for the following query, strictly adhering to the 3-5 word limit and avoiding the use of the word 'title': {{prompt}}",(o==null?void 0:o.titleAutoGenerateModel)??h[0],i);c&&await p(e,c)}else await p(e,`${i}`)},X=async()=>await gt(localStorage.token,m).catch(async e=>[]),Se=async e=>{await ft(localStorage.token,m,e),t(7,k=await X()),B=await he(localStorage.token,m,{tags:k}),Le.set(await We(localStorage.token))},n=async e=>{await pt(localStorage.token,m,e),t(7,k=await X()),B=await he(localStorage.token,m,{tags:k}),Le.set(await We(localStorage.token))},p=async(e,i)=>{e===m&&t(8,Q=i),(o.saveChatHistory??!0)&&(B=await he(localStorage.token,e,{title:i}),await me.set(await de(localStorage.token)))};function U(e){h=e,t(0,h)}function J(e){a=e,t(1,a)}function C(e){r=e,t(11,r),t(1,a)}function v(e){M=e,t(2,M)}function Z(e){Y[e?"unshift":"push"](()=>{I=e,t(4,I)})}const be=e=>{t(2,M=I.scrollHeight-I.scrollTop<=I.clientHeight+50)};function Fe(e){O=e,t(10,O)}function Ye(e){V=e,t(9,V)}function ze(e){M=e,t(2,M)}return s.$$.update=()=>{if(s.$$.dirty[0]&16777217&&t(5,A=h.length===1&&E.filter(e=>e.tagName===h[0]).length>0?E.filter(e=>e.tagName===h[0])[0]:null),s.$$.dirty[0]&16777217&&t(6,se=h.reduce((e,i,c,d)=>{var f;const l=((f=E.filter(w=>w.tagName===i))==null?void 0:f.at(0))??void 0;return{...e,...l&&{[i]:l}}},{})),s.$$.dirty[0]&2)if(a.currentId!==null){let e=[],i=a.messages[a.currentId];for(;i!==null;)e.unshift({...i}),i=i.parentId!==null?a.messages[i.parentId]:null;t(11,r=e)}else t(11,r=[])},[h,a,M,K,I,A,se,k,Q,V,O,r,o,m,b,N,ie,_e,ce,ne,Oe,Re,Se,n,E,U,J,C,v,Z,be,Fe,Ye,ze]}class qt extends xe{constructor(z){super(),$e(this,z,Mt,kt,Ke,{},null,[-1,-1])}}export{qt as component};
