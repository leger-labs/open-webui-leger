import{s as Zt,f as n,a as w,g as o,h as _,c as k,N as j,d as c,j as s,i as q,r as l,P as Q,u as Y,O as Gt,K as Rt,v as nt,w as Kt,o as Qt,t as Nt,l as Se,m as Le,n as pt,k as ht,p as Wt,z as St,A as Lt,C as mt,Q as Ut,e as Bt,V as $t}from"../chunks/scheduler.db7150c1.js";import{S as el,i as tl,t as ze,c as Xt,a as Ue,g as Jt,f as ll,b as sl,d as rl,m as al,e as nl}from"../chunks/index.b1cd4f75.js";import{e as rt}from"../chunks/each.53f911cf.js";import{a as at}from"../chunks/Toaster.svelte_svelte_type_style_lang.447a0fc4.js";import{g as ol}from"../chunks/navigation.9b0464c0.js";import{m as il,j as cl}from"../chunks/index.4420118e.js";import{A as ul}from"../chunks/AdvancedParams.27a3780e.js";import{s as dl}from"../chunks/index.496e36ff.js";import{c as fl}from"../chunks/index.062aeb6f.js";import{a as hl,c as pl,g as ml}from"../chunks/index.4f17d054.js";function jt(r,e,t){const a=r.slice();return a[44]=e[t],a[45]=e,a[46]=t,a}function Ot(r,e,t){const a=r.slice();return a[47]=e[t],a[48]=e,a[49]=t,a}function vl(r){let e,t;return{c(){e=St("svg"),t=St("path"),this.h()},l(a){e=Lt(a,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var u=_(e);t=Lt(u,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),_(t).forEach(c),u.forEach(c),this.h()},h(){s(t,"fill-rule","evenodd"),s(t,"d","M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"),s(t,"clip-rule","evenodd"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"viewBox","0 0 24 24"),s(e,"fill","currentColor"),s(e,"class","w-8")},m(a,u){q(a,e,u),l(e,t)},p:mt,d(a){a&&c(e)}}}function _l(r){let e,t;return{c(){e=n("img"),this.h()},l(a){e=o(a,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){Ut(e.src,t=r[9])||s(e,"src",t),s(e,"alt","modelfile profile"),s(e,"class","rounded-full w-20 h-20 object-cover")},m(a,u){q(a,e,u)},p(a,u){u[0]&512&&!Ut(e.src,t=a[9])&&s(e,"src",t)},d(a){a&&c(e)}}}function gl(r){let e,t="Builder Mode";return{c(){e=n("span"),e.textContent=t,this.h()},l(a){e=o(a,"SPAN",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-18ufwz9"&&(e.textContent=t),this.h()},h(){s(e,"class","ml-2 self-center")},m(a,u){q(a,e,u)},d(a){a&&c(e)}}}function bl(r){let e,t="Raw Format";return{c(){e=n("span"),e.textContent=t,this.h()},l(a){e=o(a,"SPAN",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-12smnai"&&(e.textContent=t),this.h()},h(){s(e,"class","ml-2 self-center")},m(a,u){q(a,e,u)},d(a){a&&c(e)}}}function yl(r){let e,t,a="From (Base Model)*",u,y,i,D,b,C='To access the available model names for downloading, <a class="text-gray-500 dark:text-gray-300 font-medium" href="https://ollama.com/library" target="_blank">click here.</a>',I,p,f,g="System Prompt",m,S,E,V,P,O,d="Modelfile Advanced Settings",L,M,U,$,ae,Z,be;function ne(x,A){return x[14]?kl:wl}let le=ne(r),se=le(r),B=r[14]&&zt(r);return{c(){e=n("div"),t=n("div"),t.textContent=a,u=w(),y=n("div"),i=n("input"),D=w(),b=n("div"),b.innerHTML=C,I=w(),p=n("div"),f=n("div"),f.textContent=g,m=w(),S=n("div"),E=n("textarea"),V=w(),P=n("div"),O=n("div"),O.textContent=d,L=w(),M=n("button"),se.c(),U=w(),B&&B.c(),$=Bt(),this.h()},l(x){e=o(x,"DIV",{class:!0});var A=_(e);t=o(A,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-y4byq"&&(t.textContent=a),u=k(A),y=o(A,"DIV",{});var ye=_(y);i=o(ye,"INPUT",{class:!0,placeholder:!0}),ye.forEach(c),D=k(A),b=o(A,"DIV",{class:!0,"data-svelte-h":!0}),j(b)!=="svelte-krrfmx"&&(b.innerHTML=C),A.forEach(c),I=k(x),p=o(x,"DIV",{class:!0});var ee=_(p);f=o(ee,"DIV",{class:!0,"data-svelte-h":!0}),j(f)!=="svelte-14d711c"&&(f.textContent=g),m=k(ee),S=o(ee,"DIV",{});var ce=_(S);E=o(ce,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),_(E).forEach(c),ce.forEach(c),ee.forEach(c),V=k(x),P=o(x,"DIV",{class:!0});var ve=_(P);O=o(ve,"DIV",{class:!0,"data-svelte-h":!0}),j(O)!=="svelte-1j6yy4a"&&(O.textContent=d),L=k(ve),M=o(ve,"BUTTON",{class:!0,type:!0});var xe=_(M);se.l(xe),xe.forEach(c),ve.forEach(c),U=k(x),B&&B.l(x),$=Bt(),this.h()},h(){s(t,"class","text-xs font-semibold mb-2"),s(i,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),s(i,"placeholder","Write a modelfile base model name (e.g. llama2, mistral)"),i.required=!0,s(b,"class","mt-1 text-xs text-gray-400 dark:text-gray-500"),s(e,"class","my-2"),s(f,"class","text-xs font-semibold mb-2"),s(E,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg -mb-1"),s(E,"placeholder",`Write your modelfile system prompt content here
e.g.) You are Mario from Super Mario Bros, acting as an assistant.`),s(E,"rows","4"),s(p,"class","my-1"),s(O,"class","self-center text-sm font-semibold"),s(M,"class","p-1 px-3 text-xs flex rounded transition"),s(M,"type","button"),s(P,"class","flex w-full justify-between")},m(x,A){q(x,e,A),l(e,t),l(e,u),l(e,y),l(y,i),Q(i,r[2]),l(e,D),l(e,b),q(x,I,A),q(x,p,A),l(p,f),l(p,m),l(p,S),l(S,E),Q(E,r[3]),q(x,V,A),q(x,P,A),l(P,O),l(P,L),l(P,M),se.m(M,null),q(x,U,A),B&&B.m(x,A),q(x,$,A),ae=!0,Z||(be=[Y(i,"input",r[30]),Y(E,"input",r[31]),Y(M,"click",r[32])],Z=!0)},p(x,A){A[0]&4&&i.value!==x[2]&&Q(i,x[2]),A[0]&8&&Q(E,x[3]),le!==(le=ne(x))&&(se.d(1),se=le(x),se&&(se.c(),se.m(M,null))),x[14]?B?(B.p(x,A),A[0]&16384&&Ue(B,1)):(B=zt(x),B.c(),Ue(B,1),B.m($.parentNode,$)):B&&(Jt(),ze(B,1,1,()=>{B=null}),Xt())},i(x){ae||(Ue(B),ae=!0)},o(x){ze(B),ae=!1},d(x){x&&(c(e),c(I),c(p),c(V),c(P),c(U),c($)),se.d(),B&&B.d(x),Z=!1,nt(be)}}}function xl(r){let e,t,a="Content*",u,y,i,D,b,C,I,p="Builder Mode",f,g,m="Click here to check other Legerfiles.",S,E;return{c(){e=n("div"),t=n("div"),t.textContent=a,u=w(),y=n("div"),i=n("textarea"),D=w(),b=n("div"),C=Se("Not sure what to write? Switch to "),I=n("button"),I.textContent=p,f=Se(`
								or
								`),g=n("a"),g.textContent=m,this.h()},l(V){e=o(V,"DIV",{class:!0});var P=_(e);t=o(P,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-2imxe0"&&(t.textContent=a),u=k(P),y=o(P,"DIV",{});var O=_(y);i=o(O,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),_(i).forEach(c),O.forEach(c),D=k(P),b=o(P,"DIV",{class:!0});var d=_(b);C=Le(d,"Not sure what to write? Switch to "),I=o(d,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),j(I)!=="svelte-1pkgkfe"&&(I.textContent=p),f=Le(d,`
								or
								`),g=o(d,"A",{class:!0,href:!0,target:!0,"data-svelte-h":!0}),j(g)!=="svelte-1l7k26x"&&(g.textContent=m),d.forEach(c),P.forEach(c),this.h()},h(){s(t,"class","text-xs font-semibold mb-2"),s(i,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),s(i,"placeholder",`FROM llama2
PARAMETER temperature 1
SYSTEM """
You are Mario from Super Mario Bros, acting as an assistant.
"""`),s(i,"rows","6"),i.required=!0,s(I,"class","text-gray-500 dark:text-gray-300 font-medium cursor-pointer"),s(I,"type","button"),s(g,"class","text-gray-500 dark:text-gray-300 font-medium"),s(g,"href","https://legerlabs.com"),s(g,"target","_blank"),s(b,"class","text-xs text-gray-400 dark:text-gray-500"),s(e,"class","mt-2")},m(V,P){q(V,e,P),l(e,t),l(e,u),l(e,y),l(y,i),Q(i,r[15]),l(e,D),l(e,b),l(b,C),l(b,I),l(b,f),l(b,g),S||(E=[Y(i,"input",r[28]),Y(I,"click",r[29])],S=!0)},p(V,P){P[0]&32768&&Q(i,V[15])},i:mt,o:mt,d(V){V&&c(e),S=!1,nt(E)}}}function wl(r){let e,t="Default";return{c(){e=n("span"),e.textContent=t,this.h()},l(a){e=o(a,"SPAN",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-h5d9m4"&&(e.textContent=t),this.h()},h(){s(e,"class","ml-2 self-center")},m(a,u){q(a,e,u)},d(a){a&&c(e)}}}function kl(r){let e,t="Custom";return{c(){e=n("span"),e.textContent=t,this.h()},l(a){e=o(a,"SPAN",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-3v6m8g"&&(e.textContent=t),this.h()},h(){s(e,"class","ml-2 self-center")},m(a,u){q(a,e,u)},d(a){a&&c(e)}}}function zt(r){let e,t,a="Template",u,y,i,D,b,C,I="Parameters",p,f,g,m,S,E,V;function P(d){r[34](d)}let O={};return r[5]!==void 0&&(O.options=r[5]),g=new ul({props:O}),Wt.push(()=>ll(g,"options",P)),{c(){e=n("div"),t=n("div"),t.textContent=a,u=w(),y=n("div"),i=n("textarea"),D=w(),b=n("div"),C=n("div"),C.textContent=I,p=w(),f=n("div"),sl(g.$$.fragment),this.h()},l(d){e=o(d,"DIV",{class:!0});var L=_(e);t=o(L,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-11zflut"&&(t.textContent=a),u=k(L),y=o(L,"DIV",{});var M=_(y);i=o(M,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),_(i).forEach(c),M.forEach(c),L.forEach(c),D=k(d),b=o(d,"DIV",{class:!0});var U=_(b);C=o(U,"DIV",{class:!0,"data-svelte-h":!0}),j(C)!=="svelte-1vs8i8f"&&(C.textContent=I),p=k(U),f=o(U,"DIV",{});var $=_(f);rl(g.$$.fragment,$),$.forEach(c),U.forEach(c),this.h()},h(){s(t,"class","text-xs font-semibold mb-2"),s(i,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg -mb-1"),s(i,"placeholder","Write your modelfile template content here"),s(i,"rows","4"),s(e,"class","my-2"),s(C,"class","text-xs font-semibold mb-2"),s(b,"class","my-2")},m(d,L){q(d,e,L),l(e,t),l(e,u),l(e,y),l(y,i),Q(i,r[4]),q(d,D,L),q(d,b,L),l(b,C),l(b,p),l(b,f),al(g,f,null),S=!0,E||(V=Y(i,"input",r[33]),E=!0)},p(d,L){L[0]&16&&Q(i,d[4]);const M={};!m&&L[0]&32&&(m=!0,M.options=d[5],$t(()=>m=!1)),g.$set(M)},i(d){S||(Ue(g.$$.fragment,d),S=!0)},o(d){ze(g.$$.fragment,d),S=!1},d(d){d&&(c(e),c(D),c(b)),nl(g),E=!1,V()}}}function Ht(r){let e,t,a,u,y='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',i,D,b;function C(){r[36].call(t,r[48],r[49])}function I(){return r[37](r[49])}return{c(){e=n("div"),t=n("input"),a=w(),u=n("button"),u.innerHTML=y,i=w(),this.h()},l(p){e=o(p,"DIV",{class:!0});var f=_(e);t=o(f,"INPUT",{class:!0,placeholder:!0}),a=k(f),u=o(f,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),j(u)!=="svelte-1tpj1wu"&&(u.innerHTML=y),i=k(f),f.forEach(c),this.h()},h(){s(t,"class","px-3 py-1.5 text-sm w-full bg-transparent outline-none border-r dark:border-gray-600"),s(t,"placeholder","Write a prompt suggestion (e.g. Who are you?)"),s(u,"class","px-2"),s(u,"type","button"),s(e,"class","flex border dark:border-gray-600 rounded-lg")},m(p,f){q(p,e,f),l(e,t),Q(t,r[47].content),l(e,a),l(e,u),l(e,i),D||(b=[Y(t,"input",C),Y(u,"click",I)],D=!0)},p(p,f){r=p,f[0]&65536&&t.value!==r[47].content&&Q(t,r[47].content)},d(p){p&&c(e),D=!1,nt(b)}}}function qt(r){let e,t,a,u,y=r[44]+"",i,D,b,C;function I(){r[38].call(t,r[44])}return{c(){e=n("div"),t=n("input"),a=w(),u=n("div"),i=Se(y),D=w(),this.h()},l(p){e=o(p,"DIV",{class:!0});var f=_(e);t=o(f,"INPUT",{type:!0}),a=k(f),u=o(f,"DIV",{class:!0});var g=_(u);i=Le(g,y),g.forEach(c),D=k(f),f.forEach(c),this.h()},h(){s(t,"type","checkbox"),s(u,"class","capitalize"),s(e,"class","flex space-x-2 text-sm")},m(p,f){q(p,e,f),l(e,t),t.checked=r[17][r[44]],l(e,a),l(e,u),l(u,i),l(e,D),b||(C=Y(t,"change",I),b=!0)},p(p,f){r=p,f[0]&131072&&(t.checked=r[17][r[44]]),f[0]&131072&&y!==(y=r[44]+"")&&pt(i,y)},d(p){p&&c(e),b=!1,C()}}}function Ft(r){let e,t,a="Pull Progress",u,y,i,D=(r[11]??0)+"",b,C,I,p,f;return{c(){e=n("div"),t=n("div"),t.textContent=a,u=w(),y=n("div"),i=n("div"),b=Se(D),C=Se("%"),I=w(),p=n("div"),f=Se(r[10]),this.h()},l(g){e=o(g,"DIV",{class:!0});var m=_(e);t=o(m,"DIV",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-13fvdnm"&&(t.textContent=a),u=k(m),y=o(m,"DIV",{class:!0});var S=_(y);i=o(S,"DIV",{class:!0,style:!0});var E=_(i);b=Le(E,D),C=Le(E,"%"),E.forEach(c),S.forEach(c),I=k(m),p=o(m,"DIV",{class:!0,style:!0});var V=_(p);f=Le(V,r[10]),V.forEach(c),m.forEach(c),this.h()},h(){s(t,"class","text-sm font-semibold mb-2"),s(i,"class","dark:bg-gray-600 bg-gray-500 text-xs font-medium text-gray-100 text-center p-0.5 leading-none rounded-full"),ht(i,"width",Math.max(15,r[11]??0)+"%"),s(y,"class","w-full rounded-full dark:bg-gray-800"),s(p,"class","mt-1 text-xs dark:text-gray-500"),ht(p,"font-size","0.5rem"),s(e,"class","my-2")},m(g,m){q(g,e,m),l(e,t),l(e,u),l(e,y),l(y,i),l(i,b),l(i,C),l(e,I),l(e,p),l(p,f)},p(g,m){m[0]&2048&&D!==(D=(g[11]??0)+"")&&pt(b,D),m[0]&2048&&ht(i,"width",Math.max(15,g[11]??0)+"%"),m[0]&1024&&pt(f,g[10])},d(g){g&&c(e)}}}function Yt(r){let e,t=`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
											transform-origin: center;
											animation: spinner_AtaB 0.75s infinite linear;
										}
										@keyframes spinner_AtaB {
											100% {
												transform: rotate(360deg);
											}
										}
									</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg>`;return{c(){e=n("div"),e.innerHTML=t,this.h()},l(a){e=o(a,"DIV",{class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1gf8wym"&&(e.innerHTML=t),this.h()},h(){s(e,"class","ml-1.5 self-center")},m(a,u){q(a,e,u)},d(a){a&&c(e)}}}function El(r){let e,t,a,u,y,i,D="My Legerfiles",b,C,I='<div class="self-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg></div> <div class="self-center font-medium text-sm">Back</div>',p,f,g,m,S,E,V,P,O,d,L,M,U="Name*",$,ae,Z,be,ne,le,se="Model Tag Name*",B,x,A,ye,ee,ce,ve="Description*",xe,Ee,ue,Be,fe,me,_e,He="Legerfile",je,v,R,W,F,oe,re,N,de,Ce="Prompt suggestions",Oe,he,qe='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path></svg>',ot,Ie,it,we,Te,vt="Categories",ct,De,ut,Fe,Pe,ie,Ve,_t="Save & Create",dt,Ye,Me,ft,gt;function bt(h,z){return h[9]?_l:vl}let We=bt(r),pe=We(r);function yt(h,z){return h[1]?bl:gl}let Xe=yt(r),ge=Xe(r);const xt=[xl,yl],ke=[];function wt(h,z){return h[1]?0:1}W=wt(r),F=ke[W]=xt[W](r);let Re=rt(r[16]),X=[];for(let h=0;h<Re.length;h+=1)X[h]=Ht(Ot(r,Re,h));let Ne=rt(Object.keys(r[17])),J=[];for(let h=0;h<Ne.length;h+=1)J[h]=qt(jt(r,Ne,h));let G=r[11]!==null&&Ft(r),te=r[6]&&Yt();return{c(){e=n("div"),t=n("div"),a=n("div"),u=n("input"),y=w(),i=n("div"),i.textContent=D,b=w(),C=n("button"),C.innerHTML=I,p=w(),f=n("hr"),g=w(),m=n("form"),S=n("div"),E=n("div"),V=n("button"),pe.c(),O=w(),d=n("div"),L=n("div"),M=n("div"),M.textContent=U,$=w(),ae=n("div"),Z=n("input"),be=w(),ne=n("div"),le=n("div"),le.textContent=se,B=w(),x=n("div"),A=n("input"),ye=w(),ee=n("div"),ce=n("div"),ce.textContent=ve,xe=w(),Ee=n("div"),ue=n("input"),Be=w(),fe=n("div"),me=n("div"),_e=n("div"),_e.textContent=He,je=w(),v=n("button"),ge.c(),R=w(),F.c(),oe=w(),re=n("div"),N=n("div"),de=n("div"),de.textContent=Ce,Oe=w(),he=n("button"),he.innerHTML=qe,ot=w(),Ie=n("div");for(let h=0;h<X.length;h+=1)X[h].c();it=w(),we=n("div"),Te=n("div"),Te.textContent=vt,ct=w(),De=n("div");for(let h=0;h<J.length;h+=1)J[h].c();ut=w(),G&&G.c(),Fe=w(),Pe=n("div"),ie=n("button"),Ve=n("div"),Ve.textContent=_t,dt=w(),te&&te.c(),this.h()},l(h){e=o(h,"DIV",{class:!0});var z=_(e);t=o(z,"DIV",{class:!0});var K=_(t);a=o(K,"DIV",{class:!0});var T=_(a);u=o(T,"INPUT",{type:!0,accept:!0}),y=k(T),i=o(T,"DIV",{class:!0,"data-svelte-h":!0}),j(i)!=="svelte-1bg08fa"&&(i.textContent=D),b=k(T),C=o(T,"BUTTON",{class:!0,"data-svelte-h":!0}),j(C)!=="svelte-undlmf"&&(C.innerHTML=I),p=k(T),f=o(T,"HR",{class:!0}),g=k(T),m=o(T,"FORM",{class:!0});var H=_(m);S=o(H,"DIV",{class:!0});var kt=_(S);E=o(kt,"DIV",{class:!0});var Et=_(E);V=o(Et,"BUTTON",{class:!0,type:!0});var Ct=_(V);pe.l(Ct),Ct.forEach(c),Et.forEach(c),kt.forEach(c),O=k(H),d=o(H,"DIV",{class:!0});var Je=_(d);L=o(Je,"DIV",{class:!0});var Ze=_(L);M=o(Ze,"DIV",{class:!0,"data-svelte-h":!0}),j(M)!=="svelte-7d74a3"&&(M.textContent=U),$=k(Ze),ae=o(Ze,"DIV",{});var It=_(ae);Z=o(It,"INPUT",{class:!0,placeholder:!0}),It.forEach(c),Ze.forEach(c),be=k(Je),ne=o(Je,"DIV",{class:!0});var Ge=_(ne);le=o(Ge,"DIV",{class:!0,"data-svelte-h":!0}),j(le)!=="svelte-adac66"&&(le.textContent=se),B=k(Ge),x=o(Ge,"DIV",{});var Tt=_(x);A=o(Tt,"INPUT",{class:!0,placeholder:!0}),Tt.forEach(c),Ge.forEach(c),Je.forEach(c),ye=k(H),ee=o(H,"DIV",{class:!0});var Ke=_(ee);ce=o(Ke,"DIV",{class:!0,"data-svelte-h":!0}),j(ce)!=="svelte-17hu182"&&(ce.textContent=ve),xe=k(Ke),Ee=o(Ke,"DIV",{});var Dt=_(Ee);ue=o(Dt,"INPUT",{class:!0,placeholder:!0}),Dt.forEach(c),Ke.forEach(c),Be=k(H),fe=o(H,"DIV",{class:!0});var Qe=_(fe);me=o(Qe,"DIV",{class:!0});var $e=_(me);_e=o($e,"DIV",{class:!0,"data-svelte-h":!0}),j(_e)!=="svelte-zs8vbt"&&(_e.textContent=He),je=k($e),v=o($e,"BUTTON",{class:!0,type:!0});var Vt=_(v);ge.l(Vt),Vt.forEach(c),$e.forEach(c),R=k(Qe),F.l(Qe),Qe.forEach(c),oe=k(H),re=o(H,"DIV",{class:!0});var et=_(re);N=o(et,"DIV",{class:!0});var tt=_(N);de=o(tt,"DIV",{class:!0,"data-svelte-h":!0}),j(de)!=="svelte-cktctz"&&(de.textContent=Ce),Oe=k(tt),he=o(tt,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),j(he)!=="svelte-5pubto"&&(he.innerHTML=qe),tt.forEach(c),ot=k(et),Ie=o(et,"DIV",{class:!0});var Mt=_(Ie);for(let Ae=0;Ae<X.length;Ae+=1)X[Ae].l(Mt);Mt.forEach(c),et.forEach(c),it=k(H),we=o(H,"DIV",{class:!0});var lt=_(we);Te=o(lt,"DIV",{class:!0,"data-svelte-h":!0}),j(Te)!=="svelte-1w33zjy"&&(Te.textContent=vt),ct=k(lt),De=o(lt,"DIV",{class:!0});var At=_(De);for(let Ae=0;Ae<J.length;Ae+=1)J[Ae].l(At);At.forEach(c),lt.forEach(c),ut=k(H),G&&G.l(H),Fe=k(H),Pe=o(H,"DIV",{class:!0});var Pt=_(Pe);ie=o(Pt,"BUTTON",{class:!0,type:!0});var st=_(ie);Ve=o(st,"DIV",{class:!0,"data-svelte-h":!0}),j(Ve)!=="svelte-1ck96ld"&&(Ve.textContent=_t),dt=k(st),te&&te.l(st),st.forEach(c),Pt.forEach(c),H.forEach(c),T.forEach(c),K.forEach(c),z.forEach(c),this.h()},h(){s(u,"type","file"),u.hidden=!0,s(u,"accept","image/*"),s(i,"class","text-2xl font-semibold mb-6"),s(C,"class","flex space-x-1"),s(f,"class","my-3 dark:border-gray-700"),s(V,"class",P=(r[9]?"":"p-6")+" rounded-full dark:bg-gray-700 border border-dashed border-gray-200"),s(V,"type","button"),s(E,"class","self-center"),s(S,"class","flex justify-center my-4"),s(M,"class","text-sm font-semibold mb-2"),s(Z,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),s(Z,"placeholder","Name your Legerfile"),Z.required=!0,s(L,"class","flex-1"),s(le,"class","text-sm font-semibold mb-2"),s(A,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),s(A,"placeholder","Add a model tag name"),A.required=!0,s(ne,"class","flex-1"),s(d,"class","my-2 flex space-x-2"),s(ce,"class","text-sm font-semibold mb-2"),s(ue,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),s(ue,"placeholder","Add a short description about what this Legerfile does"),ue.required=!0,s(ee,"class","my-2"),s(_e,"class","self-center text-sm font-semibold"),s(v,"class","p-1 px-3 text-xs flex rounded transition"),s(v,"type","button"),s(me,"class","flex w-full justify-between"),s(fe,"class","my-2"),s(de,"class","self-center text-sm font-semibold"),s(he,"class","p-1 px-3 text-xs flex rounded transition"),s(he,"type","button"),s(N,"class","flex w-full justify-between mb-2"),s(Ie,"class","flex flex-col space-y-1"),s(re,"class","my-2"),s(Te,"class","text-sm font-semibold mb-2"),s(De,"class","grid grid-cols-4"),s(we,"class","my-2"),s(Ve,"class","self-center font-medium"),s(ie,"class",Ye="text-sm px-3 py-2 transition rounded-xl "+(r[6]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex"),s(ie,"type","submit"),ie.disabled=r[6],s(Pe,"class","my-2 flex justify-end"),s(m,"class","flex flex-col"),s(a,"class","max-w-2xl mx-auto w-full px-3 md:px-0 my-10"),s(t,"class","flex flex-col justify-between w-full overflow-y-auto"),s(e,"class","min-h-screen max-h-[100dvh] w-full flex justify-center dark:text-white")},m(h,z){q(h,e,z),l(e,t),l(t,a),l(a,u),r[19](u),l(a,y),l(a,i),l(a,b),l(a,C),l(a,p),l(a,f),l(a,g),l(a,m),l(m,S),l(S,E),l(E,V),pe.m(V,null),l(m,O),l(m,d),l(d,L),l(L,M),l(L,$),l(L,ae),l(ae,Z),Q(Z,r[0]),l(d,be),l(d,ne),l(ne,le),l(ne,B),l(ne,x),l(x,A),Q(A,r[12]),l(m,ye),l(m,ee),l(ee,ce),l(ee,xe),l(ee,Ee),l(Ee,ue),Q(ue,r[13]),l(m,Be),l(m,fe),l(fe,me),l(me,_e),l(me,je),l(me,v),ge.m(v,null),l(fe,R),ke[W].m(fe,null),l(m,oe),l(m,re),l(re,N),l(N,de),l(N,Oe),l(N,he),l(re,ot),l(re,Ie);for(let K=0;K<X.length;K+=1)X[K]&&X[K].m(Ie,null);l(m,it),l(m,we),l(we,Te),l(we,ct),l(we,De);for(let K=0;K<J.length;K+=1)J[K]&&J[K].m(De,null);l(m,ut),G&&G.m(m,null),l(m,Fe),l(m,Pe),l(Pe,ie),l(ie,Ve),l(ie,dt),te&&te.m(ie,null),Me=!0,ft||(gt=[Y(u,"change",r[20]),Y(u,"change",r[21]),Y(C,"click",r[22]),Y(V,"click",r[23]),Y(Z,"input",r[24]),Y(A,"input",r[25]),Y(ue,"input",r[26]),Y(v,"click",r[27]),Y(he,"click",r[35]),Y(m,"submit",Gt(r[39]))],ft=!0)},p(h,z){We===(We=bt(h))&&pe?pe.p(h,z):(pe.d(1),pe=We(h),pe&&(pe.c(),pe.m(V,null))),(!Me||z[0]&512&&P!==(P=(h[9]?"":"p-6")+" rounded-full dark:bg-gray-700 border border-dashed border-gray-200"))&&s(V,"class",P),z[0]&1&&Z.value!==h[0]&&Q(Z,h[0]),z[0]&4096&&A.value!==h[12]&&Q(A,h[12]),z[0]&8192&&ue.value!==h[13]&&Q(ue,h[13]),Xe!==(Xe=yt(h))&&(ge.d(1),ge=Xe(h),ge&&(ge.c(),ge.m(v,null)));let K=W;if(W=wt(h),W===K?ke[W].p(h,z):(Jt(),ze(ke[K],1,1,()=>{ke[K]=null}),Xt(),F=ke[W],F?F.p(h,z):(F=ke[W]=xt[W](h),F.c()),Ue(F,1),F.m(fe,null)),z[0]&65536){Re=rt(h[16]);let T;for(T=0;T<Re.length;T+=1){const H=Ot(h,Re,T);X[T]?X[T].p(H,z):(X[T]=Ht(H),X[T].c(),X[T].m(Ie,null))}for(;T<X.length;T+=1)X[T].d(1);X.length=Re.length}if(z[0]&131072){Ne=rt(Object.keys(h[17]));let T;for(T=0;T<Ne.length;T+=1){const H=jt(h,Ne,T);J[T]?J[T].p(H,z):(J[T]=qt(H),J[T].c(),J[T].m(De,null))}for(;T<J.length;T+=1)J[T].d(1);J.length=Ne.length}h[11]!==null?G?G.p(h,z):(G=Ft(h),G.c(),G.m(m,Fe)):G&&(G.d(1),G=null),h[6]?te||(te=Yt(),te.c(),te.m(ie,null)):te&&(te.d(1),te=null),(!Me||z[0]&64&&Ye!==(Ye="text-sm px-3 py-2 transition rounded-xl "+(h[6]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex"))&&s(ie,"class",Ye),(!Me||z[0]&64)&&(ie.disabled=h[6])},i(h){Me||(Ue(F),Me=!0)},o(h){ze(F),Me=!1},d(h){h&&c(e),r[19](null),pe.d(),ge.d(),ke[W].d(),Rt(X,h),Rt(J,h),G&&G.d(),te&&te.d(),ft=!1,nt(gt)}}}function Cl(r,e,t){let a;Kt(r,il,v=>t(42,a=v));let u=!1,y,i,D=null,b="",C=null,I=!1,p="",f="",g="",m=!0,S=!1,E="",V="",P="",O="",d={seed:0,stop:"",temperature:"",repeat_penalty:"",repeat_last_n:"",mirostat:"",mirostat_eta:"",mirostat_tau:"",top_k:"",top_p:"",tfs_z:"",num_ctx:"",num_predict:""},L=null,M=[{content:""}],U={character:!1,assistant:!1,writing:!1,productivity:!1,programming:!1,"data analysis":!1,lifestyle:!1,education:!1,business:!1};const $=async v=>{await pl(localStorage.token,v),await cl.set(await ml(localStorage.token))},ae=async()=>{if(t(6,u=!0),Object.keys(U).filter(v=>U[v]).length==0)return at.error("Uh-oh! It looks like you missed selecting a category. Please choose one to complete your modelfile."),t(6,u=!1),I=!1,I;if(a.map(v=>v.name).includes(f)||await hl(localStorage.token,f).catch(()=>!1))return at.error(`Uh-oh! It looks like you already have a model named '${f}'. Please choose a different name to complete your modelfile.`),t(6,u=!1),I=!1,I;if(p!==""&&g!==""&&E!==""&&Object.keys(U).filter(v=>U[v]).length>0&&!a.includes(f)){const v=await fl(localStorage.token,f,E);if(v){const R=v.body.pipeThrough(new TextDecoderStream).pipeThrough(dl(`
`)).getReader();for(;;){const{value:W,done:F}=await R.read();if(F)break;try{let oe=W.split(`
`);for(const re of oe)if(re!==""){console.log(re);let N=JSON.parse(re);if(console.log(N),N.error)throw N.error;if(N.detail)throw N.detail;N.status&&(!N.digest&&!N.status.includes("writing")&&!N.status.includes("sha256")?(at.success(N.status),N.status==="success"&&(I=!0)):N.digest&&(t(10,b=N.digest),N.completed?t(11,C=Math.round(N.completed/N.total*1e3)/10):t(11,C=100)))}}catch(oe){console.log(oe),at.error(oe)}}}I&&(await $({tagName:f,imageUrl:D,title:p,desc:g,content:E,suggestionPrompts:M.filter(R=>R.content!==""),categories:Object.keys(U).filter(R=>U[R]),user:L!==null?L:void 0}),await ol("/modelfiles"))}t(6,u=!1),I=!1};Qt(async()=>{if(window.addEventListener("message",async v=>{if(!["https://ollamahub.com","https://www.ollamahub.com","https://openwebui.com","https://www.openwebui.com","http://localhost:5173"].includes(v.origin))return;const R=JSON.parse(v.data);console.log(R),t(9,D=R.imageUrl),t(0,p=R.title),await Nt(),t(12,f=`${R.user.username==="hub"?"":"hub/"}${R.user.username}/${R.tagName}`),t(13,g=R.desc),t(15,E=R.content),t(16,M=R.suggestionPrompts.length!=0?R.suggestionPrompts:[{content:""}]),L={username:R.user.username,name:R.user.name};for(const W of R.categories)t(17,U[W.toLowerCase()]=!0,U)}),(window.opener??!1)&&window.opener.postMessage("loaded","*"),sessionStorage.modelfile){const v=JSON.parse(sessionStorage.modelfile);console.log(v),t(9,D=v.imageUrl),t(0,p=v.title),await Nt(),t(12,f=v.tagName),t(13,g=v.desc),t(15,E=v.content),t(16,M=v.suggestionPrompts.length!=0?v.suggestionPrompts:[{content:""}]);for(const R of v.categories)t(17,U[R.toLowerCase()]=!0,U);sessionStorage.removeItem("modelfile")}});function Z(v){Wt[v?"unshift":"push"](()=>{y=v,t(7,y)})}function be(){i=this.files,t(8,i)}const ne=()=>{let v=new FileReader;v.onload=R=>{let W=`${R.target.result}`;const F=new Image;F.src=W,F.onload=function(){const oe=document.createElement("canvas"),re=oe.getContext("2d"),N=F.width/F.height;let de,Ce;N>1?(de=100*N,Ce=100):(de=100,Ce=100/N),oe.width=100,oe.height=100;const Oe=(100-de)/2,he=(100-Ce)/2;re.drawImage(F,Oe,he,de,Ce);const qe=oe.toDataURL("image/jpeg");t(9,D=qe),t(8,i=null)}},i&&i.length>0&&["image/gif","image/jpeg","image/png"].includes(i[0].type)?v.readAsDataURL(i[0]):(console.log(`Unsupported File Type '${i[0].type}'.`),t(8,i=null))},le=()=>{history.back()},se=()=>{y.click()};function B(){p=this.value,t(0,p)}function x(){f=this.value,t(12,f),t(0,p)}function A(){g=this.value,t(13,g)}const ye=()=>{t(1,m=!m)};function ee(){E=this.value,t(15,E),t(1,m),t(2,V),t(4,O),t(5,d),t(3,P)}const ce=()=>{t(1,m=!m)};function ve(){V=this.value,t(2,V)}function xe(){P=this.value,t(3,P)}const Ee=()=>{t(14,S=!S)};function ue(){O=this.value,t(4,O)}function Be(v){d=v,t(5,d)}const fe=()=>{(M.length===0||M.at(-1).content!=="")&&t(16,M=[...M,{content:""}])};function me(v,R){v[R].content=this.value,t(16,M)}const _e=v=>{M.splice(v,1),t(16,M)};function He(v){U[v]=this.checked,t(17,U)}const je=()=>{ae()};return r.$$.update=()=>{r.$$.dirty[0]&1&&t(12,f=p!==""?`${p.replace(/\s+/g,"-").toLowerCase()}:latest`:""),r.$$.dirty[0]&62&&(m||t(15,E=`FROM ${V}
${O!==""?`TEMPLATE """${O}"""`:""}
${d.seed!==0?`PARAMETER seed ${d.seed}`:""}
${d.stop!==""?`PARAMETER stop ${d.stop}`:""}
${d.temperature!==""?`PARAMETER temperature ${d.temperature}`:""}
${d.repeat_penalty!==""?`PARAMETER repeat_penalty ${d.repeat_penalty}`:""}
${d.repeat_last_n!==""?`PARAMETER repeat_last_n ${d.repeat_last_n}`:""}
${d.mirostat!==""?`PARAMETER mirostat ${d.mirostat}`:""}
${d.mirostat_eta!==""?`PARAMETER mirostat_eta ${d.mirostat_eta}`:""}
${d.mirostat_tau!==""?`PARAMETER mirostat_tau ${d.mirostat_tau}`:""}
${d.top_k!==""?`PARAMETER top_k ${d.top_k}`:""}
${d.top_p!==""?`PARAMETER top_p ${d.top_p}`:""}
${d.tfs_z!==""?`PARAMETER tfs_z ${d.tfs_z}`:""}
${d.num_ctx!==""?`PARAMETER num_ctx ${d.num_ctx}`:""}
${d.num_predict!==""?`PARAMETER num_predict ${d.num_predict}`:""}
SYSTEM """${P}"""`.replace(/^\s*\n/gm,"")))},[p,m,V,P,O,d,u,y,i,D,b,C,f,g,S,E,M,U,ae,Z,be,ne,le,se,B,x,A,ye,ee,ce,ve,xe,Ee,ue,Be,fe,me,_e,He,je]}class Ll extends el{constructor(e){super(),tl(this,e,Cl,El,Zt,{},null,[-1,-1])}}export{Ll as component};