const aob=t=>(obj={},t.map((t=>(i=Object.keys(t)[0],obj[i]=t[i]))),obj),sort=(t,e)=>t.sort(((t,i)=>e?t[e]-i[e]:t-i)),$ws=t=>window.getComputedStyle($(t)),$tm=(t,e=-1)=>{let[i,s,n,c,a]=new Date(t).toString().match(/\S+/g),[r,o]=a.match(/\d+(?=:)/g),l=[r,i,s,c,o,n];return-1!=e?l[e]:l},$cs={init:function(t){let e=$(t);this.el=t,this.e=e,this.c=e.getContext("2d"),this.e.width=this.width,this.e.height=this.height},area:function(t,e){this.width=t,this.height=e},clean:function(){this.e.onmousemove=()=>{},this.c.clearRect(0,0,this.e.width,this.e.height)},text:function(t,e,i){this.c.fillText(t,e,i)},line:function(t,e,i,s){this.c.beginPath(t,e),this.c.moveTo(t,e),this.c.lineTo(t,e),this.c.lineTo(i,s),this.c.stroke()},props:function(t,e,i=0,s=0){this.c.setLineDash([i,s]),this.c.strokeStyle=t,this.c.lineWidth=e},font:function(t,e=16,i=0){this.c.font="normal "+t+" "+e+"px sans-serif",this.c.textAlign=i?1==i?"right":"left":"center",this.c.textBaseline="middle"},point:function(t,e,i,s){this.c.beginPath(t,e),this.c.fillStyle=i,this.c.arc(t,e,s,0,180,!1),this.c.fill()}};let boxTop=1;const design={stats:{},selectedArr:[],keys:["day","week","month","year","all"],dates:[0,5184e5,24192e5,31536e6,189216e6].map((t=>(new Date).setHours(0,0,0,0)-t)),init:function(t){let e=t.day,s=t.counter||[],n=t.counter||["rgb(255, 255, 255)","rgb(0, 0, 0)"];e=e.map((t=>(t.stay=(t.end-t.begin)/1e3,delete t.end,t.at=t.begin,delete t.begin,m=t.mes,t.mes="Storage"==m?2:0,t))),e=e.map((t=>(w=t.web,i=s.indexOf(w),t.web=-1!=i?i:(s.push(w),s.length-1),t))),e=e.map((t=>(c=t.cor,i=n.indexOf(c),t.cor=-1!=i?i:(n.push(c),n.length-1),t))),ads=e.map((t=>t.seenAds)).reduce(((t,e)=>t+e));let a=JSON.parse(JSON.stringify(e)).map((t=>(t.at=new Date(t.at).setHours(0,0,0,0),t)));function r(t,e=0){let i=JSON.parse(JSON.stringify(t)).map((t=>(t.at=function(t){return v=[2,5,1,3,6][e],e<=2?t.setMinutes(Math.round(t.getMinutes()/v)*v,0,0):((5==e||4==e)&&t.setDate(Math.round(t.getDate()/v)*v),t.setHours(0,0,0,0))}(new Date(t.at)),t)));return[...new Set(i.map((t=>t.at)))].map((t=>(ft=i.filter((e=>e.at==t)),{at:t,ad:ft.map((t=>t.ad)).reduce(((t,e)=>t+e)),seenAds:ft.map((t=>t.seenAds)).reduce(((t,e)=>t+e)),web:ft.map((t=>t.web)),cor:ft.map((t=>t.cor))})))}s=s.map(((t,e)=>(warr=a.filter((t=>t.web==e)),{site:t,stay:aob([...new Set(warr.map((t=>t.at)))].map((t=>(ft=warr.filter((e=>e.at==t)),{[t]:ft.map((t=>t.stay)).reduce(((t,e)=>t+e))}))))})));let o=aob(this.dates.map(((t,i)=>{let s=r(e.filter((e=>e.at>=t)),i);return e=e.filter((e=>e.at<t)),{[this.keys[i]]:s}})));o.counter={webs:s,cors:n,ads:ads},this.stats=o,this.events(),$(".bl .bm").click()},events:async function(){evt("#nak","click",(()=>(t=>Object.keys(t).map(((e,i)=>$(`.bl .block:nth-child(${i+1}) .bo`).innerText=(ar=t[e],"number"==typeof ar?t[e]:t[e].length))))(this.stats.counter))),["bm","bz","br"].map((t=>this[t]=0)),[".bl .bm",".bp .by .bz",".bp .bq .br"].map(((t,e)=>$Arr(t).forEach((i=>evt(i,"click",(i=>{let s=i.target;cl(`${t}.bn`,"bn",0),cl(s,"bn");let n=Array.from(s.parentNode.children).indexOf(s),c=["bm","bz","br"][e];this[c]!=n&&(this[c]=Array.from(s.parentNode.children).indexOf(s),this.canvas(this.bm,this.bz,this.br))})))))),await new Promise((t=>setTimeout((()=>cl("#ak .n .as","fj",0)|$("#ak .fk").remove()|t()),4e3))),$("#nak").click(),this.canvas(this.bm,this.bz,this.br)},canvas:async function(e=0,s=0,n=0){let c,a,r=this.stats[this.keys[s]],o=1.5*$(".bs").clientWidth,l=1.5*$(".bs").clientHeight,h=.15*l,b=h/2,f=b/2,p=o;function u(t,e,i,s){let n=$(".bv"),c=h/p,a=(o-h)/p;n.querySelector(".bo").innerText=t,n.querySelector(".bx").innerText=e,width=Math.abs(parseFloat($ws(n).width)/2),left=i/p,boxTop&&(n.style.top=s*p/4+"px",boxTop=0),n.style.left=(left-width<c?width:left+width<a?left-width:a-2*width)+"px",cl(n,"bw",0)}$cs.area(o,l),function(t,e,i){$cs.init(t),$cs.clean(),$cs.e.onmousemove=function(t){let s=this.getBoundingClientRect(),{x:n,y:r,c:o,t:l}=function(t,e){let s={x:0,y:0,c:0,t:0};return t.map(((n,a)=>{let r=t[a-1]?t[a-1]:{x:i},o=t[a+1]?t[a+1]:{x:c};r.x<=e&&e<=n.x?s=(r.x+n.x)/2<=e?n:r:n.x<=e&&e<=o.x&&(s=(n.x+o)/2>=e?n:o)})),s}(e,(t.clientX-s.left)*p),h=(t.clientY-s.top)*p;$cs.c.clearRect(0,0,$cs.e.width,$cs.e.height),cl(".bv","bw",1),i<=n&&n<=c&&i<=h&&h<=a+b&&($cs.props("rgba(255, 255, 255, 0.5)",2),$cs.line(n,i,n,a,0,0),$cs.point(n,r,"rgba(255, 255, 255, 0.5)",11),$cs.point(n,r,"rgba(150, 255, 150, 1)",8),$cs.font("Normal",24,0),u(o,l,n,i-.85*i))}}("#bu",await async function(e,s,n,r=1,h=0){let b=n,u=n,d=c=o-n,g=a=l-n;if(boxTop=1,$cs.init(e),$cs.clean(),s.length>=2)if(p/=parseFloat($ws($(e)).width),m=5*r,$cs.c.fillStyle="rgba(255,255,255,0.4)",$cs.font("bold",16,1),s){let e=s.map((t=>t.web.length)),o=Math.ceil(sort([...e]).reverse()[0]/m)*m,l=o/r,p=(u-g)/r;$cs.props("rgba(255, 255, 255, 0.2)",1,9,13),[...Array(r+1).keys()].map(((e,i)=>{let s=g+p*i;gi=2,t=Math.round(l*i),$cs.text(t,b-25,s),$cs.line(b,s,d,s)}));const $=sort(s.map((t=>t.at))),w=(d-b)/($.length-1),x=[];let y=function(t,e){let i=JSON.parse(JSON.stringify(t)).map((t=>new Date(t))).map((t=>{switch(t){case 4:t.setMonth(0);case 3:t.setDate(1);case 2:t.setHours(0,0,0,0)}return t.setMinutes(0,0,0)})),s=[...new Set(i)].map((t=>({time:$tm(t,e),count:i.filter((e=>e==t)).length})));return sort([...new Set(s.map((t=>t.time)))].map((t=>({time:t,count:s.filter((e=>e.time==t)).map((t=>t.count)).reduce(((t,e)=>t+e))}))),"count").reverse().splice(0,[3,5,21,12,7][e])}($,h);if(ix=[1,2,3,4,5].indexOf(h),ix>=0&&(y=y.length>ix?y.filter(((t,e)=>e%[1,2,7,3][ix]==0)):y),$cs.font("bold",16,0),$.map(((t,i)=>{let s,r={x:b+w*i,y:g-(g-u)*(e[i]/o),c:e[i]},[l,m,p,$,d,S]=$tm(t),k=[l,m,S,p,$][h];y.filter(((t,e)=>t.time==k&&y.splice(e,1)|(s=!0))),ap=l>11?(12==l||(l-=12),l<10&&(l="0"+l),"PM"):"AM",r.t=h<=2?`${2==h?`${m} `:""}${l}:${d} ${ap}`:`${p} ${S}${h>3?`, ${$}`:""}`,s&&$cs.text([`${l}:00 ${ap}`,m,`${p} ${S}`,`${p} ${$}`,$][h],r.x==n?r.x+f:r.x==c?r.x-f:r.x,a+25),x.push(r)})),$cs.c.lineCap="round",$cs.props("rgba(0, 0, 0, 0.3)"),x.length>2)return await async function(t,e,s){let n=[];n=t;let c=[t[0],...n,t[t.length-1]];for($cs.c.strokeStyle=e,$cs.c.lineWidth=s,$cs.c.lineCap="round",$cs.c.beginPath(c[0].x,c[0].y),$cs.c.moveTo(c[0].x,c[0].y),i=1;i<c.length-2;i++)$cs.c.strokeStyle=e,await new Promise((t=>setTimeout((()=>$cs.c.quadraticCurveTo(c[i].x,c[i].y,(c[i].x+c[i+1].x)/2,(c[i].y+c[i+1].y)/2)|t()),5))),$cs.c.stroke();$cs.c.quadraticCurveTo(c[i].x,c[i].y,c[i+1].x,c[i+1].y),$cs.c.stroke()}(x,"lightgreen",3),x}else w("More Data Needed to Show Stats");else w("Not Enough Data to Show Stats");function w(t){$cs.c.fillStyle="rgba(255,255,255,0.3)",$cs.font("500",24,0),$cs.text(t,(d+b)/2,(g+u)/2)}return[]}("#bt",r,h,3,s),h)}};