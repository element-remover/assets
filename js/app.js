let asc,db,snap,player,auth,logedIn=null,capture=!1,ref={svr:"https://element-remover.herokuapp.com"};window.location.href.split(/[&?]/).filter((e=>e.match("="))).map((e=>(o=e.split("="),ref[o[0]]=o[1])));const svr=ref.svr,$=e=>"string"==typeof e?document.querySelector(e):e,$Arr=e=>document.querySelectorAll(e),$i=e=>$("#"+e),$p=(e,t)=>0==t?e:$p($(e).parentNode,t-1),cl=(e,t,i=1)=>$(e)&&(l=$(e).classList,l&&t.replace(/ +/g," ").split(" ").map((e=>i?l.add(e):l.remove(e)))),evt=(t,i,a,n=1)=>(e=$(t),n?e.addEventListener(i,a):e.removeEventListener(i,a)),reveal=(e,t=400,i=" ")=>$Arr(e+i+".fg").forEach(((e,i)=>setTimeout((()=>{cl(e,"fh"),cl(e,"fg",0),setTimeout((()=>cl(e,"fh",0)),500)}),t*i))),hide=e=>e.map((e=>$Arr(`${e}>*`).forEach((e=>cl(e,"fg"))))),none=(e,t=1)=>cl(e,"ac",t),vanish=(e,t=1)=>{let i=$(e);cl(i,"fh",!t),cl(i,"fg",t),i.style.height=i.height+"px",setTimeout((()=>cl(i,"fx",t)|(i.style.height=0)|i.removeAttribute("style")),500)},promote=()=>!app.pro&&app.tasks.promo()|evt("#nao","click",promote,0),create=(e,t,i="",a=!1,n,s)=>(el=document.createElement(e),el.setAttribute("class",t),a?el.innerHTML=i:el.innerText=i,n&&evt(el,n,s),el),cS=(t,i,a=null)=>{e=document.createElement("script"),e.id=t,e.src=a||`https://element-remover.github.io/assets/js/${t}.js`,e.onload=i,$("head").appendChild(e)},toggle=(e,t)=>cl(e,t,!$(e).classList.contains(t)),time=[2592e5,5184e5,72576e5],inh=e=>`<div class='b'><span class='h'></span><div class='c'>${r=e.r||0,r?e.r:"Redirecting to"}<br><a ${e.l?`href="${e.l}"`:""}>${e.n}</a></div>\n  <div class='d'>${e.i}</div></div>`,log=(e,t="",i=0,a=0)=>{},popup=(e,t)=>{if(!$(".gh")){let t=create("div","gg"),i=create("div","k q gh fa",e);evt(t,"mouseover",(()=>setTimeout((()=>cl(".gh","fb",0)),50))),t.appendChild(i),$("main").appendChild(t)}let i=$(".gh");i.innerHTML=`<span>${e}</span>`,t&&(i.style.background=t),cl(i,"fa fb",0),setTimeout((()=>cl(i,"fa fb")),50)},title=e=>e.split(/-|\/| /).map((e=>e.replace(/(\w)(?=\w{2,})/,(e=>e.toUpperCase())))).join(" "),eh=e=>void 0|popup(title(e.code)),cursor={d:9,x:0,y:0,ex:window.innerWidth/2,ey:window.innerHeight/2,dot:$("#et"),back:$("#eu"),init:function(){this.events(),this.animate()},events:function(){var e=this;["a","button",".bi",".fz","img"].map((t=>$Arr(t).forEach((t=>evt(t,"mouseover",(()=>cl(t,"czk")|e.toggleCS()))|evt(t,"mouseout",(()=>cl(t,"czk",0)|e.toggleCS(0))))))),evt(document,"mousemove",(function(t){e.toggleCV(),e.ex=t.clientX,e.ey=t.clientY,e.dot.style.top=e.ey+"px",e.dot.style.left=e.ex+"px"})),evt(document,"click",(()=>$(".czk")&&e.toggleCV(0))),evt(document,"mousedown",(()=>e.toggleCS())),evt(document,"mouseup",(()=>e.toggleCS(0))),evt(document,"mouseenter",(()=>e.toggleCV())),evt(document,"mouseover",(t=>"IFRAME"==t.target.nodeName&&e.toggleCV(0))),evt(document,"mouseleave",(()=>e.toggleCV(0)))},animate:function(){var e=this;const t=(e,t)=>((e+"").match(/e/)?t:e)+"px";e.x+=(e.ex-e.x)/e.d,e.y+=(e.ey-e.y)/e.d,e.back.style.top=t(e.y,e.ey),e.back.style.left=t(e.x,e.ex),requestAnimationFrame(this.animate.bind(e))},toggleCS:function(e=1){cl(this.dot,"gf",e),cl(this.back,"gf",e)},toggleCV:function(e=1){cl(this.dot,"ge",e),cl(this.back,"ge",e)}},data=e=>{const t=db.doc("data");return{get:async()=>await t.get(),update:()=>t.update({tools:e}).catch((e=>eh(e)))}},ccc=()=>app.pro&&cl($p("#cj",4),"fn",0==[...app.tools.get()].splice(0,2).map((e=>parseInt(e))).reduce(((e,t)=>e+t))),ppt=e=>cl($p(e.target,4),"fn",!app.pro),wfi=async(e,t="Something Got!",i="Something",a=500)=>(r=await new Promise((e=>setTimeout(e,a))),res=e(),res||wfi(e,t,i,a)),tsu=async()=>(await internetChecker(),data(app.tools.get()).update()),app={su:null,ads:null,user:null,data:null,pro:0,whole:!0,init:function(e,t){e=e||this.user,t=t||this.data,this.pro=t.plan,this.account.init(e,t),this.tools.init(t.tools),this.tasks.init(this.ads)},setUser:function(e){this.user=e,this.account.set(e),this.su=[e.card,e.id].join(":")},update:function(e){-1!=Object.keys(e).indexOf("ad")?(this.ads=e,!this.whole&&this.tasks.init(e)):(this.data&&!this.whole&&(this.data.plan!=e.plan?app.init(null,e):this.tools.init(e.tools)),this.data=e),this.ads&&this.data&&this.whole&&(this.init(),this.whole=!1)},account:{keys:["id","email"],arr:["ay","ba"],init:function(e,t){this.set(e),this.timer.stop(),setTimeout((()=>app.pro&&this.timer.init(t)),1300)},set:function(e){this.arr.map(((t,i)=>$(`.ax.${t}`).innerText=e[this.keys[i]])),none(".av.ba",!e.email),none(".ae.bb",!e.trust),$Arr(".bc .bd .bi").forEach(((e,t)=>{cl(e.parentNode,"bn",t==app.pro),text=t<app.pro?"Unlocked":t>app.pro?"Get":"",e.innerText=t?text:"Unlocked"})),$(".bj").innerText="Ends in "+(("member"===app.user.card?6:3)+" Days")},timer:{plan:null,from:null,button:null,member:null,s:0,init:function(e){this.button=$(".bc .bd.bn .bi"),this.member=$("#du"),this.plan=e.plan,this.from=e.from,this.start(),this.s=0},start:function(){let e=this;if(0!=this.plan&&null!=this.from){let t,i=Math.abs(new Date(this.from)-new Date),a=time[this.plan];if(i<a){if(t=this.getms(a-i),this.s)return void(e.s=0);setTimeout((()=>this.start()),1e3)}else t="Expired",app.send("");this.button.innerText=t,this.member.innerHTML="E"===t[0]?"<no class='ft'>Expired</no>":t.replace(/ /g,"").split(":").reverse().map(((e,t)=>`<no>${e}</no><span>${["second","minute","hour","day"][t]+(ep=parseInt(e),1!=ep&&ep?"s":"")}</span> `)).reverse().reduce(((e,t)=>e+t))}},stop:function(){let e=this;e.s=1,setTimeout((()=>e.s=0),1150)},getms:e=>{let t=[86400,3600,60,1,0].map((e=>1e3*e)),i=[];const a=(e,n)=>{let s=parseInt(e),o=t[n];return o?s>=o||i.length?(i.push(1==(ei=parseInt(s/o)+"",ei).length?"0"+ei:ei),a(s%o,++n)):a(s,++n):0};return a(e,0),i.length?i.join(" : "):"00"}}},tools:{arr:["#cd","#cf","#cg","#ch","#ci","#cj"],values:"000000",init:function(e){this.setupEvents(0),this.setupEvents(1),this.set(e)},set:function(e){return("string"==typeof e?e:this.values).split("").splice(0,6).map(((e,t)=>(c=parseInt(e),$(app.tools.arr[t]).checked=t<4||app.pro?c:0))).reduce(((e,t)=>e.toString()+t))},get:function(){return this.arr.map((e=>$(e).checked?"1":"0")).reduce(((e,t)=>e+t))},setupEvents:function(e){let t=[...this.arr];t.splice(0,2).map((t=>evt(t,"click",ccc,e))),t.splice(2).map((t=>evt(t,"click",ppt,e))),this.arr.map((t=>(e&&$(t).click())|evt(t,"click",tsu,e)))}},tasks:{keys:["ad","watch","surf"],values:[3,15,30],div:["#eb","#ec","#ed"],con:["dj","dl","dr"],init:async function(e){await internetChecker(),this.blocks(),this.set(e),0===Object.values(e).reduce(((e,t)=>e+t))&&app.send("")},set:function(e){return this.keys.map(((t,i)=>{let a=null!=e[t]?e[t]:this.values[i];return(1!=i||!$(".fu"))&&vanish(`.${this.con[i]}`,!a),this.values[i]=a,$(this.div[i]).innerText=app.pro?"":a?a+(i?"s":"")+" left":"",cl($(this.div[i]).parentNode,"gc",!a||app.pro),a}))},blocks:function(){cl(".dh","fs",app.pro),none("#dg .dt",!app.pro),none(".di",app.pro),none(".dv",2==app.pro),$(".dh").innerHTML=app.pro?`<span class='av'>Pr${1==app.pro?"o":"emium"} Membership Activated</span>`:`Complete Tasks to Become Pro Member for ${("member"===app.user.card?6:3)+" Days"}.`},rid:(e,t=1)=>{let i=e.length,a=[];return t<i?(Array.from({length:t},((e,t)=>t)).map((()=>{let e,t=!0;for(;t;)e=parseInt(Math.random()*i),!a.toString().match(e)&&(a.push(e),t=!1)})),a.map((t=>e[t]))):e},promo:async function(){let e=app.ads.watch,t=app.ads.surf;if(e||t){let i=await app.send("promo");if(e){let e=i.watch[0];cl(".dl","fx fg",0),$("#dm iframe").src=`https://www.youtube.com/embed/${e.src}?enablejsapi=1&modestbranding=1`,$("#dm .do").innerText=e.views,$("#dm .dp").innerText=e.by,$("#dm .dq").innerText=e.paid,this.watchBox.init(e.id)}t&&(cl(".dr","fx fg",0),$("#ds").innerHTML="",i.webs.map((e=>$("#ds").appendChild(create("div","fy",`<div class='fz'><img data-src="https://element-remover.github.io/assets/static/svg/mui.svg" src="https://${e.img}" alt="${e.info}"></div><a href="https://${e.link}/?ref=element-remover-${app.su}&svr=${svr}&id=${e.id}" target="_blank"class='ga'></a><div class='bg'><div class='dg'><div class='ab'>${e.title}</div></div>${e.paid?"<div class='gb'><span class='dq'></span></div>":""}</div>`,!0)))))}},watchBox:{evt:["unstarted","fw","fu","fv","buffering","cued"],state:"ac",wc:0,key:"",init:function(e){this.id=e,cS("iframe-demo",(()=>{}),"https://www.youtube.com/iframe_api")},ready:function(e){new YT.Player("dn",{events:{onReady:()=>void 0|this.watch(),onStateChange:e=>(w=this.evt[e.data+1],(this.state=w)|cl("#dm",w)|cl("#dm",this.evt.filter((e=>e!=w)).join(" "),0)),onError:()=>cl("#dm","error")}})},watch:async function(){let e=this;if("fu"==e.state){if(!e.key&&(e.key=app.send("pro",`1:${e.id}`)),!(e.wc<16))return e.none();{let t=15-e.wc;++e.wc,0==t&&await app.send("pro",`1:${e.id}:${(await Promise.all([e.key]))[0].key}`),app.tasks.set({watch:t})}}setTimeout((()=>e.watch()),1e3)},none:function(){return"fv"==this.state?vanish(".dl"):setTimeout((()=>this.none()),2e3)}}},statistics:function(){!$("script#stats")&&cS("stats",(()=>design&&design.init(stats)))},privacy:async function(){!$("script#privacy")&&cS("privacy",(()=>privacy&&($("#am .as").innerHTML=privacy)))},info:async function(){let e,t=this,a="#d .n .as",n=$(`${a} .fl`),s=$(`${a} .bk`),o=["cw","cx","cy","da","cz","dd","de","df"],r=[],c="#gq";if(!capture){let e=await wfi((()=>!capture&&(el=$("#fo"),!!el&&(capture=!0,el))),"Exarea Got!","User Click");e&&(s.insertBefore(e,$(`${a} .at`)),cl(a,"fk",0),n.remove())}if(!$(c)&&await new Promise((e=>setTimeout(e,1200))),$(c)&&$("#d .at").setAttribute("style",`height : ${window.getComputedStyle($(c)).height}; margin: 1em 0 0`),$Arr("#fo [id]").forEach((e=>!c.match(e.id)&&r.push(e.id))),r.map((e=>(i=o.indexOf(e),-1!=i&&o.splice(i,1)))),o.map((e=>none(`${a} .at .${e}`))),e=$("#da"),cl(s,"fr",$("#de")||e),cl(`${a} .cn .co`,"fh",e),e){let[t,i]="Submit"==e.querySelector(".gv").innerText?["db","dc"]:["dc","db"];cl(`${a} .at .${t}`,"fh",0),none(`${a} .at .${t}`,0),cl(`${a} .at .${i}`,"fh",0),none(`${a} .at .${i}`),setTimeout((()=>cl(`${a} .at .${t}`,"fh")),600);let n=[["gl","gk","gm"],["go","gn","gp"]],s=n["db"==t?0:1],o=n["db"!=t?0:1];["cp","cq","bn"].map(((e,t)=>cl(`${a} .cn .co .${e}`,o[t],0)|cl(`${a} .cn .co .${e}`,s[t])))}r.map((e=>none(`${a} .at .${e}`,0)|(el=$(`#fo #${e}`),el&&evt(el,"mouseover",(()=>cl(s,`fp ${e}`)))|evt(el,"click",(()=>(/(i|e)m/i.test(e)&&cl(s,"fr"))|cl(s,`fp ${e}`,0)|t.info()))|evt(el,"mouseleave",(()=>cl(s,`fp ${e}`,0))))))},auth:async()=>{asc=auth.onAuthStateChanged((async e=>{let t=e?{card:"member",id:e.uid,email:e.email,trust:e.emailVerified}:{card:"user",id:(await app.send("id",!0,0)).id,email:null,trust:!1};if(cl("main","a",0),ref.s||"member"===t.card||($(".e").remove(),setTimeout((()=>none("#j",0)),100),reveal(["#i"]),await wfi((()=>null!=logedIn&&logedIn),"User Loged In","User to Login"))){none("#i"),db=firebase.firestore().collection("account").doc(t.card).collection(t.id),app.setUser(t),el=$(".e .d"),el&&(el.innerText="Getting User Data..."),"boolean"!=typeof await app.send("")&&none(".z .ac",0);let i="user"!==t.card,a=(new Date).getHours();i&&popup(`${a>22||a<5?"It's time to Sleep":a<12?"Good Morning":a<18?"Good Afternoon":"Good Evening"}, ${title(e.displayName)}`,"#e2bcb7"),snap=db.onSnapshot((e=>e.docChanges().forEach((e=>void 0|app.update(e.doc.data())))),(e=>{})),await wfi((()=>(el=$(".e .d"),el&&(el.innerText="Getting User Data..."),!app.whole)),"User Data Got!","User Data"),app.activate()}}))},activate:()=>{let t=["aj","ak","al","am","d","ao","ap"],i=["account","statistics","tools","privacy","info","pro","dev"],n=".ad .ah",s=".aq .l .ar";const o=()=>setTimeout((()=>none(".z")|reveal(n,200)|setTimeout((()=>$("#n"+(a=i.reduce(((e,t,i)=>t==ref.s?i:e+0),-1),t[a>0?a:0])).click()),200*t.length)),500);hide([n,s+">*"]),hide([s,s+">*"]),$Arr(`${s}`).forEach(((e,i)=>e.id=t[i])),$Arr(`${n}>*`).forEach(((e,i)=>e.id="n"+t[i])),app.extension(),evt(".az","click",(e=>(cl(e.target,"ew"),setTimeout((()=>cl(e.target,"ew",0)),400)|navigator.clipboard.writeText(e.target.parentNode.firstElementChild.innerText)))),$Arr(".bc .bd .bi").forEach(((e,t)=>t&&evt(e,"click",(e=>"Get"==e.target.innerText&&$(`.ad button:nth-child(${5+t})`).click())))),evt("#nam","click",(()=>app.privacy())),evt("#ap .er","click",(()=>toggle("#ap .l","gd"))),$Arr(`${n}>*`).forEach((e=>evt(e,"click",(e=>{let t=e.target,i=Array.from(t.parentNode.children).indexOf(t),a=$(`${n} .bn`);if((a&&Array.from(t.parentNode.children).indexOf(a))!=i){a&&cl(`${n} .bn`,"bn",0),cl(t,"bn");let e=window.innerHeight;$("style#f").innerHTML=`:root {--ty : translateY(${e*-i}px); --ih:${e}px;}`,hide([s,s+">*"]),reveal(`${s}:nth-child(${++i})`)}})))),e=$(".e"),e&&e.remove(),ref.s?o():(evt(".aa","click",(()=>{$(".aa").style=`transform: translateY(${-window.innerHeight}px);`,o()})),reveal(".z .n",500))},extension:()=>{let e=["ak","d"];evt("#nao","click",promote),$("html.exinstalled")?e.map(((e,t)=>(el=$(`#${e} .n>.as`),cl(el,"fk")|evt("#n"+e,"click",t?()=>app.info():()=>app.statistics())|el.appendChild(create("div","fl",inh({l:"",r:["Fetching Statistics From","Waiting For"][t],n:["Extension","User to click on Element Remover Extension Icon"][t],i:["Currently in Development!","To Start Live Demo Do a Click on the Icon"][t]}),!0))))):e.map((e=>(el=$(`#${e} .n>.as`),cl(el,"fj")|(el.innerHTML+=inh({l:"",n:"extension-store/element-remover",i:"Would you Please Install the Element Remover Extension First"}))))),$Arr(".b").forEach((e=>evt(e,"mouseover",(()=>setTimeout((()=>e.querySelector("a").click()),3e3))))),$("html").removeAttribute("class")},start:function(){evt(".v","click",(()=>(null==logedIn&&(logedIn=!0))|cl("#j","fg")|setTimeout((()=>none("#i")),500))),evt("#p","click",(()=>auth.signInWithPopup(new firebase.auth.GoogleAuthProvider).then((()=>(logedIn=!1)|$(".v").click())).catch((e=>eh(e))))),evt("#t","click",(()=>$(".v").click())),hide(["#i",".z .n"]),this.auth()},send:async(e,t=1,i=1)=>{let a={[e]:t};return i&&(a.user=app.su),await internetChecker(),await fetch(`${svr}/?d=${JSON.stringify(a)}`,{method:"POST"}).then((e=>e.json()||e.text())).then((e=>e))},logout:()=>auth.signOut().then((()=>popup("You loged Out!","#fca3cc")|asc()|snap()|window.location.reload())).catch((e=>eh(e)))},adClicked=()=>app.send("pro","0");function onYouTubeIframeAPIReady(){app.tasks.watchBox.ready(player)}async function internetChecker(e=0,t=0){return navigator&&!navigator.onLine?await wfi((()=>navigator&&navigator.onLine&&(e&&t&&(e.innerText=t),!0)),"User is Online Now!",(e&&(e.innerText="Waiting for Internet..."),"Internet"),1e3):(e&&t&&(e.innerText=t),!0)}async function online(){$("style#f").innerHTML=`:root {--ty : translateY(0px); --ih:${window.innerHeight}px;}`,cursor.init();try{await internetChecker($(".e .d"),"Initializing..."),firebase.initializeApp({apiKey:"AIzaSyA502RgJsNCKAtznHm6SX-C5IvQsyWaqNI",authDomain:"element-remover.firebaseapp.com",projectId:"element-remover",databaseURL:"https://element-remover.firebaseio.com",storageBucket:"element-remover.appspot.com",messagingSenderId:"524051898519",appId:"1:524051898519:web:9e8f4351873618e97309d2",measurementId:"G-BC94E76T5Z"}),auth=firebase.auth(),navigator.userAgentData&&!navigator.userAgentData.mobile?cS("body",(()=>($("main").innerHTML=body,void 0|app.start()))):popup("Web Extension is Not Supported")}catch(e){popup(e)}}online();