let asc,db,snap,player,auth,logedIn=null,capture=!1,ref={svr:"https://element-remover.herokuapp.com"};window.location.href.split(/[&?]/).filter((e=>e.match("="))).map((e=>(o=e.split("="),ref[o[0]]=o[1])));const svr=ref.svr,$=e=>"string"==typeof e?document.querySelector(e):e,$Arr=e=>document.querySelectorAll(e),$i=e=>$("#"+e),$p=(e,t)=>0==t?e:$p($(e).parentNode,t-1),cl=(e,t,i=1)=>$(e)&&(l=$(e).classList,l&&t.replace(/ +/g," ").split(" ").map((e=>i?l.add(e):l.remove(e)))),evt=(t,i,a,n=1)=>(e=$(t),n?e.addEventListener(i,a):e.removeEventListener(i,a)),reveal=(e,t=400,i=" ")=>$Arr(e+i+".ff").forEach(((e,i)=>setTimeout((()=>{cl(e,"fg"),cl(e,"ff",0),setTimeout((()=>cl(e,"fg",0)),500)}),t*i))),hide=e=>e.map((e=>$Arr(`${e}>*`).forEach((e=>cl(e,"ff"))))),none=(e,t=1)=>cl(e,"ac",t),vanish=(e,t=1)=>{let i=$(e);cl(i,"fg",!t),cl(i,"ff",t),i.style.height=i.height+"px",setTimeout((()=>cl(i,"fw",t)|(i.style.height=0)|i.removeAttribute("style")),500)},promote=()=>!app.pro&&app.tasks.promo()|evt("#nao","click",promote,0),create=(e,t,i="",a=!1,n,s)=>(el=document.createElement(e),el.setAttribute("class",t),a?el.innerHTML=i:el.innerText=i,n&&evt(el,n,s),el),cS=(t,i,a=null)=>{e=document.createElement("script"),e.id=t,e.src=a||`https://element-remover.github.io/assets/js/${t}.js`,e.onload=i,$("head").appendChild(e)},toggle=(e,t)=>cl(e,t,!$(e).classList.contains(t)),time=[864e5,2592e5,72576e5],inh=e=>`<div class='b'><span class='h'></span><div class='c'>${r=e.r||0,r?e.r:"Redirecting to"}<br><a ${e.l?`href="${e.l}"`:""}>${e.n}</a></div>\n  <div class='d'>${e.i}</div></div>`,log=(e,t="",i=0,a=0)=>{},popup=(e,t)=>{if(!$(".gg")){let t=create("div","gf"),i=create("div","k q gg ez",e);evt(t,"mouseover",(()=>setTimeout((()=>cl(".gg","fa",0)),50))),t.appendChild(i),$("main").appendChild(t)}let i=$(".gg");i.innerHTML=`<span>${e}</span>`,t&&(i.style.background=t),cl(i,"ez fa",0),setTimeout((()=>cl(i,"ez fa")),50)},title=e=>e.split(/-|\/| /).map((e=>e.replace(/(\w)(?=\w{2,})/,(e=>e.toUpperCase())))).join(" "),eh=e=>void 0|popup(title(e.code)),cursor={d:9,x:0,y:0,ex:window.innerWidth/2,ey:window.innerHeight/2,dot:$("#es"),back:$("#et"),init:function(){this.events(),this.animate()},events:function(){var e=this;["a","button",".bi",".fy","img"].map((t=>$Arr(t).forEach((t=>evt(t,"mouseover",(()=>cl(t,"czk")|e.toggleCS()))|evt(t,"mouseout",(()=>cl(t,"czk",0)|e.toggleCS(0))))))),evt(document,"mousemove",(function(t){e.toggleCV(),e.ex=t.clientX,e.ey=t.clientY,e.dot.style.top=e.ey+"px",e.dot.style.left=e.ex+"px"})),evt(document,"click",(()=>$(".czk")&&e.toggleCV(0))),evt(document,"mousedown",(()=>e.toggleCS())),evt(document,"mouseup",(()=>e.toggleCS(0))),evt(document,"mouseenter",(()=>e.toggleCV())),evt(document,"mouseover",(t=>"IFRAME"==t.target.nodeName&&e.toggleCV(0))),evt(document,"mouseleave",(()=>e.toggleCV(0)))},animate:function(){var e=this;const t=(e,t)=>((e+"").match(/e/)?t:e)+"px";e.x+=(e.ex-e.x)/e.d,e.y+=(e.ey-e.y)/e.d,e.back.style.top=t(e.y,e.ey),e.back.style.left=t(e.x,e.ex),requestAnimationFrame(this.animate.bind(e))},toggleCS:function(e=1){cl(this.dot,"ge",e),cl(this.back,"ge",e)},toggleCV:function(e=1){cl(this.dot,"gd",e),cl(this.back,"gd",e)}},data=e=>{const t=db.doc("data");return{get:async()=>await t.get(),update:()=>t.update({tools:e}).catch((e=>eh(e)))}},ccc=()=>app.pro&&cl($p("#ci",4),"fm",0==[...app.tools.get()].splice(0,2).map((e=>parseInt(e))).reduce(((e,t)=>e+t))),ppt=e=>cl($p(e.target,4),"fm",!app.pro),tsu=()=>data(app.tools.get()).update(),wfi=async(e,t="Something Got!",i="Something",a=500)=>(r=await new Promise((e=>setTimeout(e,a))),res=e(),res||wfi(e,t,i,a)),app={su:null,ads:null,user:null,data:null,pro:0,whole:!0,init:function(e,t){e=e||this.user,t=t||this.data,this.pro=t.plan,this.account.init(e,t),this.tools.init(t.tools),this.tasks.init(this.ads)},setUser:function(e){this.user=e,this.account.set(e),this.su=[e.card,e.id].join(":")},update:function(e){-1!=Object.keys(e).indexOf("ad")?(this.ads=e,!this.whole&&this.tasks.init(e)):(this.data&&!this.whole&&(this.data.plan!=e.plan?app.init(null,e):this.tools.init(e.tools)),this.data=e),this.ads&&this.data&&this.whole&&(this.init(),this.whole=!1)},account:{keys:["id","email"],arr:["ay","ba"],init:function(e,t){this.set(e),this.timer.stop(),setTimeout((()=>app.pro&&this.timer.init(t)),1300)},set:function(e){this.arr.map(((t,i)=>$(`.ax.${t}`).innerText=e[this.keys[i]])),none(".av.ba",!e.email),none(".ae.bb",!e.trust),$Arr(".bc .bd .bi").forEach(((e,t)=>{cl(e.parentNode,"bm",t==app.pro),text=t<app.pro?"Unlocked":t>app.pro?"Get":"",e.innerText=t?text:"Unlocked"}))},timer:{plan:null,from:null,button:null,member:null,s:0,init:function(e){this.button=$(".bc .bd.bm .bi"),this.member=$("#dt"),this.plan=e.plan,this.from=e.from,this.start(),this.s=0},start:function(){let e=this;if(0!=this.plan&&null!=this.from){let t,i=Math.abs(new Date(this.from)-new Date),a=1==this.plan?time[1]:time[2];if(i<a){if(t=this.getms(a-i),this.s)return void(e.s=0);setTimeout((()=>this.start()),1e3)}else t="Expired",app.send("");this.button.innerText=t,this.member.innerHTML="E"===t[0]?"<no class='fs'>Expired</no>":t.replace(/ /g,"").split(":").reverse().map(((e,t)=>`<no>${e}</no><span>${["second","minute","hour","day"][t]+(ep=parseInt(e),1!=ep&&ep?"s":"")}</span> `)).reverse().reduce(((e,t)=>e+t))}},stop:function(){let e=this;e.s=1,setTimeout((()=>e.s=0),1150)},getms:e=>{let t=[86400,3600,60,1,0].map((e=>1e3*e)),i=[];const a=(e,n)=>{let s=parseInt(e),o=t[n];return o?s>=o||i.length?(i.push(1==(ei=parseInt(s/o)+"",ei).length?"0"+ei:ei),a(s%o,++n)):a(s,++n):0};return a(e,0),i.length?i.join(" : "):"00"}}},tools:{arr:["#cc","#ce","#cf","#cg","#ch","#ci"],values:"000000",init:function(e){this.setupEvents(0),this.setupEvents(1),this.set(e)},set:function(e){return("string"==typeof e?e:this.values).split("").splice(0,6).map(((e,t)=>(c=parseInt(e),$(app.tools.arr[t]).checked=t<4||app.pro?c:0))).reduce(((e,t)=>e.toString()+t))},get:function(){return this.arr.map((e=>$(e).checked?"1":"0")).reduce(((e,t)=>e+t))},setupEvents:function(e){let t=[...this.arr];t.splice(0,2).map((t=>evt(t,"click",ccc,e))),t.splice(2).map((t=>evt(t,"click",ppt,e))),this.arr.map((t=>(e&&$(t).click())|evt(t,"click",tsu,e)))}},tasks:{keys:["ad","watch","surf"],values:[3,15,30],div:["#ea","#eb","#ec"],con:["di","dk","dq"],init:function(e){this.blocks(),this.set(e),0===Object.values(e).reduce(((e,t)=>e+t))&&app.send("")},set:function(e){return this.keys.map(((t,i)=>{let a=null!=e[t]?e[t]:this.values[i];return(1!=i||!$(".ft"))&&vanish(`.${this.con[i]}`,!a),this.values[i]=a,$(this.div[i]).innerText=app.pro?"":a?a+(i?"s":"")+" left":"",cl($(this.div[i]).parentNode,"gb",!a||app.pro),a}))},blocks:function(){cl(".dg","fr",app.pro),none("#df .ds",!app.pro),none(".dh",app.pro),none(".du",2==app.pro),$(".dg").innerHTML=app.pro?`<span class='av'>Pr${1==app.pro?"o":"emium"} Membership Activated</span>`:`Complete Tasks to Become Pro Member for ${"member"===app.user.card?"3 Days":"1 Day"}.`},rid:(e,t=1)=>{let i=e.length,a=[];return t<i?(Array.from({length:t},((e,t)=>t)).map((()=>{let e,t=!0;for(;t;)e=parseInt(Math.random()*i),!a.toString().match(e)&&(a.push(e),t=!1)})),a.map((t=>e[t]))):e},promo:async function(){let e=app.ads.watch,t=app.ads.surf;if(e||t){let i=await app.send("promo");if(e){let e=i.watch[0];cl(".dk","fw ff",0),$("#dl iframe").src=`https://www.youtube.com/embed/${e.src}?enablejsapi=1&modestbranding=1`,$("#dl .dn").innerText=e.views,$("#dl .do").innerText=e.by,$("#dl .dp").innerText=e.paid,this.watchBox.init(e.id)}t&&(cl(".dq","fw ff",0),$("#dr").innerHTML="",i.webs.map((e=>$("#dr").appendChild(create("div","fx",`<div class='fy'><img data-src="https://element-remover.github.io/assets/static/svg/mui.svg" src="https://${e.img}" alt="${e.info}"></div><a href="https://${e.link}/?ref=element-remover-${app.su}&svr=${svr}&id=${e.id}" target="_blank"class='fz'></a><div class='bg'><div class='df'><div class='ab'>${e.title}</div></div>${e.paid?"<div class='ga'><span class='dp'></span></div>":""}</div>`,!0)))))}},watchBox:{evt:["unstarted","fv","ft","fu","buffering","cued"],state:"ac",wc:0,key:"",init:function(e){this.id=e,cS("iframe-demo",(()=>{}),"https://www.youtube.com/iframe_api")},ready:function(e){new YT.Player("dm",{events:{onReady:()=>void 0|this.watch(),onStateChange:e=>(w=this.evt[e.data+1],(this.state=w)|cl("#dl",w)|cl("#dl",this.evt.filter((e=>e!=w)).join(" "),0)),onError:()=>cl("#dl","error")}})},watch:async function(){let e=this;if("ft"==e.state){if(!e.key&&(e.key=app.send("pro",`1:${e.id}`)),!(e.wc<16))return e.none();{let t=15-e.wc;++e.wc,0==t&&await app.send("pro",`1:${e.id}:${(await Promise.all([e.key]))[0].key}`),app.tasks.set({watch:t})}}setTimeout((()=>e.watch()),1e3)},none:function(){return"fu"==this.state?vanish(".dk"):setTimeout((()=>this.none()),2e3)}}},statistics:function(){!$("script#stats")&&cS("stats",(()=>design&&design.init(stats)))},privacy:async function(){!$("script#privacy")&&cS("privacy",(()=>privacy&&($("#am .as").innerHTML=privacy)))},info:async function(){let e,t=this,a="#d .n .as",n=$(`${a} .fk`),s=$(`${a} .bj`),o=["cv","cw","cx","cz","cy","dc","dd","de"],r=[],c="#gp";if(!capture){let e=await wfi((()=>!capture&&(el=$("#fn"),!!el&&(capture=!0,el))),"Exarea Got!","User Click");e&&(s.insertBefore(e,$(`${a} .at`)),cl(a,"fj",0),n.remove())}if(!$(c)&&await new Promise((e=>setTimeout(e,1200))),$(c)&&$("#d .at").setAttribute("style",`height : ${window.getComputedStyle($(c)).height}; margin: 1em 0 0`),$Arr("#fn [id]").forEach((e=>!c.match(e.id)&&r.push(e.id))),r.map((e=>(i=o.indexOf(e),-1!=i&&o.splice(i,1)))),o.map((e=>none(`${a} .at .${e}`))),e=$("#cz"),cl(s,"fq",$("#dd")||e),cl(`${a} .cm .cn`,"fg",e),e){let[t,i]="Submit"==e.querySelector(".gu").innerText?["da","db"]:["db","da"];cl(`${a} .at .${t}`,"fg",0),none(`${a} .at .${t}`,0),cl(`${a} .at .${i}`,"fg",0),none(`${a} .at .${i}`),setTimeout((()=>cl(`${a} .at .${t}`,"fg")),600);let n=[["gk","gj","gl"],["gn","gm","go"]],s=n["da"==t?0:1],o=n["da"!=t?0:1];["co","cp","bm"].map(((e,t)=>cl(`${a} .cm .cn .${e}`,o[t],0)|cl(`${a} .cm .cn .${e}`,s[t])))}r.map((e=>none(`${a} .at .${e}`,0)|(el=$(`#fn #${e}`),el&&evt(el,"mouseover",(()=>cl(s,`fo ${e}`)))|evt(el,"click",(()=>(/(i|e)m/i.test(e)&&cl(s,"fq"))|cl(s,`fo ${e}`,0)|t.info()))|evt(el,"mouseleave",(()=>cl(s,`fo ${e}`,0))))))},auth:async()=>{asc=auth.onAuthStateChanged((async e=>{let t=e?{card:"member",id:e.uid,email:e.email,trust:e.emailVerified}:{card:"user",id:(await app.send("id",!0,0)).id,email:null,trust:!1};if(cl("main","a",0),ref.s||"member"===t.card||($(".e").remove(),setTimeout((()=>none("#j",0)),100),reveal(["#i"]),await wfi((()=>null!=logedIn),"User Loged In","User to Login"))){none("#i"),db=firebase.firestore().collection("account").doc(t.card).collection(t.id),app.setUser(t),"boolean"!=typeof await app.send("")&&none(".z .ac",0);let i="user"!==t.card,a=(new Date).getHours();i&&popup(`${a>22||a<5?"It's time to Sleep":a<12?"Good Morning":a<18?"Good Afternoon":"Good Evening"}, ${title(e.displayName)}`,"#e2bcb7"),snap=db.onSnapshot((e=>e.docChanges().forEach((e=>void 0|app.update(e.doc.data())))),(e=>{})),await wfi((()=>!app.whole),"User Data Got!","User Data"),app.activate()}}))},activate:()=>{let t=["aj","ak","al","am","d","ao","ap"],i=["account","statistics","tools","privacy","info","pro","dev"],n=".ad .ah",s=".aq .l .ar";const o=()=>setTimeout((()=>none(".z")|reveal(n,200)|setTimeout((()=>$("#n"+(a=i.reduce(((e,t,i)=>t==ref.s?i:e+0),-1),t[a>0?a:0])).click()),200*t.length)),500);hide([n,s+">*"]),hide([s,s+">*"]),$Arr(`${s}`).forEach(((e,i)=>e.id=t[i])),$Arr(`${n}>*`).forEach(((e,i)=>e.id="n"+t[i])),app.extension(),evt(".az","click",(e=>(cl(e.target,"eu"),setTimeout((()=>cl(e.target,"eu",0)),400)|navigator.clipboard.writeText(e.target.parentNode.firstElementChild.innerText)))),$Arr(".bc .bd .bi").forEach(((e,t)=>t&&evt(e,"click",(e=>"Get"==e.target.innerText&&$(`.ad button:nth-child(${5+t})`).click())))),evt("#nam","click",(()=>app.privacy())),evt("#ap .eq","click",(()=>toggle("#ap .l","gc"))),$Arr(`${n}>*`).forEach((e=>evt(e,"click",(e=>{let t=e.target,i=Array.from(t.parentNode.children).indexOf(t),a=$(`${n} .bm`);if((a&&Array.from(t.parentNode.children).indexOf(a))!=i){a&&cl(`${n} .bm`,"bm",0),cl(t,"bm");let e=window.innerHeight;$("style#f").innerHTML=`:root {--ty : translateY(${e*-i}px); --ih:${e}px;}`,hide([s,s+">*"]),reveal(`${s}:nth-child(${++i})`)}})))),e=$(".e"),e&&e.remove(),ref.s?o():(evt(".aa","click",(()=>{$(".aa").style=`transform: translateY(${-window.innerHeight}px);`,o()})),reveal(".z .n",500))},extension:()=>{let e=["ak","d"];evt("#nao","click",promote),$("html.exinstalled")?e.map(((e,t)=>(el=$(`#${e} .n>.as`),cl(el,"fj")|evt("#n"+e,"click",t?()=>app.info():()=>app.statistics())|el.appendChild(create("div","fk",inh({l:"",r:["Fetching Statistics From","Waiting For"][t],n:["Extension","User to click on Element Remover Extension Icon"][t],i:["Currently in Development!","To Start Live Demo Do a Click on the Icon"][t]}),!0))))):e.map((e=>(el=$(`#${e} .n>.as`),cl(el,"fi")|(el.innerHTML+=inh({l:"https://chrome-extension.com/",n:"www.chrome-extension.com",i:"Please Install the Element Remover Extension First"}))))),$Arr(".b").forEach((e=>evt(e,"mouseover",(()=>setTimeout((()=>e.querySelector("a").click()),3e3))))),$("html").removeAttribute("class")},start:function(){$("style#f").innerHTML=`:root {--ty : translateY(0px); --ih:${window.innerHeight}px;}`,evt(".v","click",(()=>(null==logedIn&&(logedIn=!0))|cl("#j","ff")|setTimeout((()=>none("#i")),500))),evt("#p","click",(()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((()=>(logedIn=!1)|$(".v").click())).catch((e=>eh(e))))),evt("#t","click",(()=>$(".v").click())),hide(["#i",".z .n"]),this.auth()},send:async(e,t=1,i=1)=>{let a={[e]:t};return i&&(a.user=app.su),await fetch(`${svr}/?d=${JSON.stringify(a)}`,{method:"POST"}).then((e=>e.json()||e.text())).then((e=>e))},logout:()=>auth.signOut().then((()=>popup("You loged Out!","#fca3cc")|asc()|snap()|window.location.reload())).catch((e=>eh(e)))},adClicked=()=>app.send("pro","0");function onYouTubeIframeAPIReady(){app.tasks.watchBox.ready(player)}async function online(){cursor.init();try{let t=(e=$(".e .d"),e||null);navigator&&!navigator.onLine&&(t.innerText="Waiting for Internet..."),await wfi((()=>navigator&&navigator.onLine&&(t.innerText="Initializing...")),"User is Online Now!","Internet"),firebase.initializeApp({apiKey:"AIzaSyA502RgJsNCKAtznHm6SX-C5IvQsyWaqNI",authDomain:"element-remover.firebaseapp.com",projectId:"element-remover",databaseURL:"https://element-remover.firebaseio.com",storageBucket:"element-remover.appspot.com",messagingSenderId:"524051898519",appId:"1:524051898519:web:9e8f4351873618e97309d2",measurementId:"G-BC94E76T5Z"}),auth=firebase.auth(),navigator.userAgentData&&!navigator.userAgentData.mobile?cS("body",(()=>($("main").innerHTML=body,void 0|app.start()))):popup("Web Extension is Not Supported")}catch(e){popup(e)}}online();