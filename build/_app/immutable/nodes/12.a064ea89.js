import{s as Gt,f as a,a as v,l as N,g as s,h as u,N as T,c as h,d as o,m as O,j as e,i as Xt,r as t,P as K,u as at,O as Kt,n as Qt,C as Ft,v as $t,o as te,t as Jt}from"../chunks/scheduler.db7150c1.js";import{S as ee,i as ae}from"../chunks/index.b1cd4f75.js";import{a as Yt}from"../chunks/Toaster.svelte_svelte_type_style_lang.447a0fc4.js";import{g as se}from"../chunks/navigation.c3f2cded.js";import{p as re}from"../chunks/index.b30409fa.js";import{c as le,g as ne}from"../chunks/index.2c1068f6.js";function Wt(c){let i,r=`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
											transform-origin: center;
											animation: spinner_AtaB 0.75s infinite linear;
										}
										@keyframes spinner_AtaB {
											100% {
												transform: rotate(360deg);
											}
										}
									</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg>`;return{c(){i=a("div"),i.innerHTML=r,this.h()},l(l){i=s(l,"DIV",{class:!0,"data-svelte-h":!0}),T(i)!=="svelte-1gf8wym"&&(i.innerHTML=r),this.h()},h(){e(i,"class","ml-1.5 self-center")},m(l,d){Xt(l,i,d)},d(l){l&&o(i)}}}function oe(c){let i,r,l,d,x="My Prompts",_,y,st='<div class="self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg></div> <div class="self-center font-medium text-sm">Back</div>',Q,F,$,m,k,n,C="Title*",mt,tt,I,pt,D,B,Pt="Command*",ft,M,q,St="/",vt,E,ht,V,gt,U,Ht="alphanumeric characters and hyphens",xt,P,yt,rt,bt,wt,_t,S,z,Lt='<div class="self-center text-sm font-semibold">Prompt Content*</div>',kt,A,et,b,Ct,R,jt=`ⓘ Format your variables using square brackets like this: <span class="text-gray-600 dark:text-gray-300 font-medium">[variable]</span>
							. Make sure to enclose them with
							<span class="text-gray-600 dark:text-gray-300 font-medium">&#39;[&#39;</span>
							and <span class="text-gray-600 dark:text-gray-300 font-medium">&#39;]&#39;</span>.`,It,H,Dt,J,Nt="{{CLIPBOARD}}",Et,Vt,At,Y,g,Z,Ot="Save & Create",Tt,lt,Mt,Bt,p=c[1]&&Wt();return{c(){i=a("div"),r=a("div"),l=a("div"),d=a("div"),d.textContent=x,_=v(),y=a("button"),y.innerHTML=st,Q=v(),F=a("hr"),$=v(),m=a("form"),k=a("div"),n=a("div"),n.textContent=C,mt=v(),tt=a("div"),I=a("input"),pt=v(),D=a("div"),B=a("div"),B.textContent=Pt,ft=v(),M=a("div"),q=a("div"),q.textContent=St,vt=v(),E=a("input"),ht=v(),V=a("div"),gt=N("Only "),U=a("span"),U.textContent=Ht,xt=N(`
						are allowed; Activate this command by typing "`),P=a("span"),yt=N("/"),rt=N(c[2]),bt=v(),wt=N('" to chat input.'),_t=v(),S=a("div"),z=a("div"),z.innerHTML=Lt,kt=v(),A=a("div"),et=a("div"),b=a("textarea"),Ct=v(),R=a("div"),R.innerHTML=jt,It=v(),H=a("div"),Dt=N("Utilize "),J=a("span"),Et=N(Nt),Vt=N(" variable to have them replaced with clipboard content."),At=v(),Y=a("div"),g=a("button"),Z=a("div"),Z.textContent=Ot,Tt=v(),p&&p.c(),this.h()},l(f){i=s(f,"DIV",{class:!0});var w=u(i);r=s(w,"DIV",{class:!0});var qt=u(r);l=s(qt,"DIV",{class:!0});var L=u(l);d=s(L,"DIV",{class:!0,"data-svelte-h":!0}),T(d)!=="svelte-6vsag5"&&(d.textContent=x),_=h(L),y=s(L,"BUTTON",{class:!0,"data-svelte-h":!0}),T(y)!=="svelte-undlmf"&&(y.innerHTML=st),Q=h(L),F=s(L,"HR",{class:!0}),$=h(L),m=s(L,"FORM",{class:!0});var j=u(m);k=s(j,"DIV",{class:!0});var nt=u(k);n=s(nt,"DIV",{class:!0,"data-svelte-h":!0}),T(n)!=="svelte-joqjd6"&&(n.textContent=C),mt=h(nt),tt=s(nt,"DIV",{});var Ut=u(tt);I=s(Ut,"INPUT",{class:!0,placeholder:!0}),Ut.forEach(o),nt.forEach(o),pt=h(j),D=s(j,"DIV",{class:!0});var W=u(D);B=s(W,"DIV",{class:!0,"data-svelte-h":!0}),T(B)!=="svelte-1ocrkul"&&(B.textContent=Pt),ft=h(W),M=s(W,"DIV",{class:!0});var ot=u(M);q=s(ot,"DIV",{class:!0,"data-svelte-h":!0}),T(q)!=="svelte-1rk109"&&(q.textContent=St),vt=h(ot),E=s(ot,"INPUT",{class:!0,placeholder:!0}),ot.forEach(o),ht=h(W),V=s(W,"DIV",{class:!0});var X=u(V);gt=O(X,"Only "),U=s(X,"SPAN",{class:!0,"data-svelte-h":!0}),T(U)!=="svelte-7hmyj"&&(U.textContent=Ht),xt=O(X,`
						are allowed; Activate this command by typing "`),P=s(X,"SPAN",{class:!0});var it=u(P);yt=O(it,"/"),rt=O(it,c[2]),bt=h(it),it.forEach(o),wt=O(X,'" to chat input.'),X.forEach(o),W.forEach(o),_t=h(j),S=s(j,"DIV",{class:!0});var dt=u(S);z=s(dt,"DIV",{class:!0,"data-svelte-h":!0}),T(z)!=="svelte-8r8jfp"&&(z.innerHTML=Lt),kt=h(dt),A=s(dt,"DIV",{class:!0});var G=u(A);et=s(G,"DIV",{});var zt=u(et);b=s(zt,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),u(b).forEach(o),zt.forEach(o),Ct=h(G),R=s(G,"DIV",{class:!0,"data-svelte-h":!0}),T(R)!=="svelte-1ofh4d2"&&(R.innerHTML=jt),It=h(G),H=s(G,"DIV",{class:!0});var ct=u(H);Dt=O(ct,"Utilize "),J=s(ct,"SPAN",{class:!0});var Rt=u(J);Et=O(Rt,Nt),Rt.forEach(o),Vt=O(ct," variable to have them replaced with clipboard content."),ct.forEach(o),G.forEach(o),dt.forEach(o),At=h(j),Y=s(j,"DIV",{class:!0});var Zt=u(Y);g=s(Zt,"BUTTON",{class:!0,type:!0});var ut=u(g);Z=s(ut,"DIV",{class:!0,"data-svelte-h":!0}),T(Z)!=="svelte-1ck96ld"&&(Z.textContent=Ot),Tt=h(ut),p&&p.l(ut),ut.forEach(o),Zt.forEach(o),j.forEach(o),L.forEach(o),qt.forEach(o),w.forEach(o),this.h()},h(){e(d,"class","text-2xl font-semibold mb-6"),e(y,"class","flex space-x-1"),e(F,"class","my-3 dark:border-gray-700"),e(n,"class","text-sm font-semibold mb-2"),e(I,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),e(I,"placeholder","Add a short title for this prompt"),I.required=!0,e(k,"class","my-2"),e(B,"class","text-sm font-semibold mb-2"),e(q,"class","bg-gray-200 dark:bg-gray-600 font-bold px-3 py-1 border border-r-0 dark:border-gray-600 rounded-l-lg"),e(E,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-r-lg"),e(E,"placeholder","short-summary"),E.required=!0,e(M,"class","flex items-center mb-1"),e(U,"class","text-gray-600 dark:text-gray-300 font-medium"),e(P,"class","text-gray-600 dark:text-gray-300 font-medium"),e(V,"class","text-xs text-gray-400 dark:text-gray-500"),e(D,"class","my-2"),e(z,"class","flex w-full justify-between"),e(b,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),e(b,"placeholder","Write a summary in 50 words that summarizes [topic or keyword]."),e(b,"rows","6"),b.required=!0,e(R,"class","text-xs text-gray-400 dark:text-gray-500"),e(J,"class","text-gray-600 dark:text-gray-300 font-medium"),e(H,"class","text-xs text-gray-400 dark:text-gray-500"),e(A,"class","mt-2"),e(S,"class","my-2"),e(Z,"class","self-center font-medium"),e(g,"class",lt="text-sm px-3 py-2 transition rounded-xl "+(c[1]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex"),e(g,"type","submit"),g.disabled=c[1],e(Y,"class","my-2 flex justify-end"),e(m,"class","flex flex-col"),e(l,"class","max-w-2xl mx-auto w-full px-3 md:px-0 my-10"),e(r,"class","flex flex-col justify-between w-full overflow-y-auto"),e(i,"class","min-h-screen max-h-[100dvh] w-full flex justify-center dark:text-white")},m(f,w){Xt(f,i,w),t(i,r),t(r,l),t(l,d),t(l,_),t(l,y),t(l,Q),t(l,F),t(l,$),t(l,m),t(m,k),t(k,n),t(k,mt),t(k,tt),t(tt,I),K(I,c[0]),t(m,pt),t(m,D),t(D,B),t(D,ft),t(D,M),t(M,q),t(M,vt),t(M,E),K(E,c[2]),t(D,ht),t(D,V),t(V,gt),t(V,U),t(V,xt),t(V,P),t(P,yt),t(P,rt),t(P,bt),t(V,wt),t(m,_t),t(m,S),t(S,z),t(S,kt),t(S,A),t(A,et),t(et,b),K(b,c[3]),t(A,Ct),t(A,R),t(A,It),t(A,H),t(H,Dt),t(H,J),t(J,Et),t(H,Vt),t(m,At),t(m,Y),t(Y,g),t(g,Z),t(g,Tt),p&&p.m(g,null),Mt||(Bt=[at(y,"click",c[5]),at(I,"input",c[6]),at(E,"input",c[7]),at(b,"input",c[8]),at(m,"submit",Kt(c[9]))],Mt=!0)},p(f,[w]){w&1&&I.value!==f[0]&&K(I,f[0]),w&4&&E.value!==f[2]&&K(E,f[2]),w&4&&Qt(rt,f[2]),w&8&&K(b,f[3]),f[1]?p||(p=Wt(),p.c(),p.m(g,null)):p&&(p.d(1),p=null),w&2&&lt!==(lt="text-sm px-3 py-2 transition rounded-xl "+(f[1]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex")&&e(g,"class",lt),w&2&&(g.disabled=f[1])},i:Ft,o:Ft,d(f){f&&o(i),p&&p.d(),Mt=!1,$t(Bt)}}}function ie(c,i,r){let l=!1,d="",x="",_="";const y=async()=>{r(1,l=!0),st(x)?await le(localStorage.token,x,d,_).catch(C=>(Yt.error(C),null))&&(await re.set(await ne(localStorage.token)),await se("/prompts")):Yt.error("Only alphanumeric characters and hyphens are allowed in the command string."),r(1,l=!1)},st=n=>/^[a-zA-Z0-9-]+$/.test(n);te(async()=>{if(window.addEventListener("message",async n=>{if(!["https://ollamahub.com","https://www.ollamahub.com","https://openwebui.com","https://www.openwebui.com","http://localhost:5173"].includes(n.origin))return;const C=JSON.parse(n.data);console.log(C),r(0,d=C.title),await Jt(),r(3,_=C.content),r(2,x=C.command)}),(window.opener??!1)&&window.opener.postMessage("loaded","*"),sessionStorage.prompt){const n=JSON.parse(sessionStorage.prompt);console.log(n),r(0,d=n.title),await Jt(),r(3,_=n.content),r(2,x=n.command.at(0)==="/"?n.command.slice(1):n.command),sessionStorage.removeItem("prompt")}});const Q=()=>{history.back()};function F(){d=this.value,r(0,d)}function $(){x=this.value,r(2,x),r(0,d)}function m(){_=this.value,r(3,_)}const k=()=>{y()};return c.$$.update=()=>{c.$$.dirty&1&&r(2,x=d!==""?`${d.replace(/\s+/g,"-").toLowerCase()}`:"")},[d,l,x,_,y,Q,F,$,m,k]}class ve extends ee{constructor(i){super(),ae(this,i,ie,oe,Gt,{})}}export{ve as component};
