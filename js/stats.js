let drawarr=[],lineCount=3,dura=1;const arr={create:(t=5,e=200,r=0)=>Array.from({length:t},((t,n)=>({count:parseInt(Math.random()*e)+2,time:arr.random(parseInt((new Date).getTime()-1e3*[86400,604800,2592e3,31536e3][r]),(new Date).getTime())}))),random:(t,e)=>new Date(t+Math.random()*(e-t))},design={stats:{day:arr.create(25,25),week:arr.create(105,200,1),month:arr.create(175,500,2),year:arr.create(375,1e3,3),all:arr.create(675,2e3,4)},init:function(t){},events:function(){evt(".nav button:nth-child(2)","click",(()=>[this.stats.website,this.stats.ads,this.stats.colors].map(((t,e)=>function(t,e){let r=Object.keys(t),n=[];t=t[r[1]].concat(t[r[2]]),document.querySelector(`.bl .block:nth-child(${e+1}) .bo`).innerText=t.length>1?[[...new Set(t.map((t=>t.host+">"+t.dir)))].length,t.map((t=>t.count)).reduce(((t,e)=>t+e),0),(2==e&&t.map((t=>n.push(...t.color))),[...new Set(n.map((t=>t.c)))].length)][e]:0}(t,e)))|$(".snav .block").click())),$Arr(".bl .bm").forEach((t=>evt(t,"click",(t=>{let e=t.target,r=Array.from(e.parentNode.children).indexOf(e);if($(".bl .bm.bn")&&cl(".bl .bm.bn","selected",0),cl(e,"selected"),r>=0&&r<3){let t=0==r?this.stats.website:1==r?this.stats.ads:this.stats.colors,e=Object.keys(t);drawarr=t,$(".stats .switcher .switch").click(),$Arr(".stats .divider .divide").forEach(((t,r)=>1!=r&&(t.innerText=e[[1,0,2][r]])))}})))),$Arr(".bp .by .bz").forEach((t=>evt(t,"click",(t=>{let e=t.target,r=Array.from(e.parentNode.children).indexOf(e);$(".by .bz.bn")&&cl(".by .bz.bn","selected",0),cl(e,"selected"),r>=0&&r<5&&(dura=++r),$(".stats .divider .divide").click()})))),$Arr(".bp .bq .br").forEach((t=>evt(t,"click",(t=>{let e=t.target,r=Array.from(e.parentNode.children).indexOf(e);$(".bp .bq .br.bn")&&cl(".bp .bq .br.bn","selected",0),cl(e,"selected"),r>=0&&r<3&&draw(drawarr,lineCount,dura,[1,0,2][r])}))))}};function $tm(t,e){let[r,n,i,a,l,o]=t.toString().match(/\S+/g),[c,s]=l.match(/\d+(?=:)/g);return[r,n,i,a,c,s][e]}function wd(t,e=1){let r=JSON.parse(JSON.stringify(t)).map((t=>(t.time=new Date(t.time),t))).map((t=>(t.time=function(t){return v=[2,5,1,3,6][e-1],e<=2?t.setMinutes(Math.round(t.getMinutes()/v)*v,0,0):((5==e||4==e)&&t.setDate(Math.round(t.getDate()/v)*v),t.setHours(0,0,0,0))}(t.time),t)));return[...new Set(r.map((t=>t.time)))].map((t=>({time:new Date(t),count:r.filter((e=>e.time==t)).map((t=>t.count)).reduce(((t,e)=>t+e))})))}function shrink(t){let e=new Date((new Date).setHours(0,0,0,0)),r=[];return[e.setHours(0,0,0,0),e.setDate(e.getDate()-6),e.setMonth(e.getMonth()-1),e.setYear(e.getYear()-1)].map(((e,n)=>{r.push(...t.filter((t=>t.time>e))),t=wd(t.filter((t=>t.time<e)),n+2)})),r}let f=1,prearr=[];function draw(e,r,n,a){let l,o,s=1.5*$(".draw").clientWidth,d=1.5*$(".draw").clientHeight,h=.15*d,u=h/2,x=u/2,y=s;const b=(t,e,r,n)=>t.fillText(e,r,n),g=t=>t.sort(((t,e)=>t.x-e.x)),p=(t,e,r,n,i)=>{t.beginPath(e,r),t.moveTo(e,r),t.lineTo(e,r),t.lineTo(n,i),t.stroke()},w=(t,e,r,n=0,i=0)=>{t.setLineDash([n,i]),t.strokeStyle=e,t.lineWidth=r},v=t=>{let e=$(t);return e.width=s,e.height=d,e};function S(t,e,r=16,n=0){t.font="normal "+e+" "+r+"px sans-serif",t.textAlign=n?1==n?"bh":"left":"center",t.textBaseline="middle"}function D(t,e,r,n,i){t.beginPath(e,r),t.fillStyle=n,t.arc(e,r,i,0,180,!1),t.fill()}const M=t=>window.getComputedStyle($(t));function k(t,e,r,n){let i=$(".bv"),a=h/y,l=(s-h)/y;i.querySelector(".count").innerText=t,i.querySelector(".time").innerText=e,width=Math.abs(parseFloat(M(i).width)/2),left=r/y,f&&(i.style.top=n*y/4+"px",f=0),i.style.left=(left-width<a?width:left+width<l?left-width:l-2*width)+"px",cl(i,"bw",0)}function A(t,e,r=0,n=0){return{x:(t.x+e.x)/2+r,y:(t.y+e.y)/2+n}}function T(t){let e=$(t);c=e.getContext("2d"),e.onmousemove=()=>{},c.clearRect(0,0,e.width,e.height)}T("#graph"),T("#points"),function(t,e,r){let n=t.getContext("2d");t.onmousemove=function(i){let a=this.getBoundingClientRect(),{x:c,y:s,c:d,t:h}=function(t,e){let n={x:0,y:0,c:0,t:0};return t.map(((i,a)=>{let o=t[a-1]?t[a-1]:{x:r},c=t[a+1]?t[a+1]:{x:l};o.x<=e&&e<=i.x?n=(o.x+i.x)/2<=e?i:o:i.x<=e&&e<=c.x&&(n=(i.x+c)/2>=e?i:c)})),n}(e,(i.clientX-a.left)*y),m=(i.clientY-a.top)*y;n.clearRect(0,0,t.width,t.height),cl(".bv","bw",1),r<=c&&c<=l&&r<=m&&m<=o+u?(w(n,"rgba(255,255,255,0.5)",2),p(n,c,r,c,o),D(n,c,s,"rgba(255, 255, 255, 0.5)",11),D(n,c,s,"rgba(150, 255, 150, 1)",8),S(n,"Normal",24,0),k(d,h,c,r-.85*r),$Arr('[id*="cursor-"]').forEach((t=>cl(t,"hidden")))):$Arr('[id*="cursor-"]').forEach((t=>cl(t,"hidden",0)))}}(v("#points"),function(e,r,n,a=1,c=1,s){let d=e.getContext("2d"),h=n,u=n,$=l=e.width-n,v=o=e.height-n;f=1;let D=Object.keys(r),k=s?r[D[s]]:r[D[1]].concat(r[D[2]]);if(k.length>2){y/=parseFloat(M(e).width),m=5*a,d.fillStyle="rgba(255,255,255,0.4)",S(d,"bold",16,1);let r=new Date;r.setHours(0,0,0,0),1!=c&&r.setDate(r.getDate()+1),2==c&&r.setDate(r.getDate()-7),3==c&&r.setMonth(r.getMonth()-1),4==c&&r.setYear(r.getFullYear()-1),5!=c&&(k=k.filter((t=>t.time>=r)));let s=wd(k,c);if(s.length>2){let e=s.map((t=>t.count)),r=Math.ceil([...e].sort(((t,e)=>t-e)).reverse()[0]/m)*m,f=r/a,y=(u-v)/a;w(d,"rgba(255, 255, 255, 0.2)",1,9,13),[...Array(a+1).keys()].map(((e,r)=>{let n=v+y*r;gi=2,t=Math.round(f*r),b(d,t,h-25,n),p(d,h,n,$,n)}));const D=s.map((t=>t.time)).sort(((t,e)=>t-e)),M=($-h)/(D.length-1),k=[];let T=function(t,e){let r=JSON.parse(JSON.stringify(t)).map((t=>new Date(t))).map((t=>{switch(t){case 5:t.setMonth(0);case 4:t.setDate(1);case 3:t.setHours(0,0,0,0)}return t.setMinutes(0,0,0)})),n=r.filter(((t,e,r)=>r.indexOf(t)==e)).map((t=>({time:$tm(new Date(t),[4,0,2,1,3][e-1]),count:r.filter((e=>e==t)).length})));return[...new Set(n.map((t=>t.time)))].map((t=>({time:t,count:n.filter((e=>e.time==t)).map((t=>t.count)).reduce(((t,e)=>t+e))}))).sort(((t,e)=>t.count-e.count)).reverse().splice(0,[3,7,31,12,7][e-1])}(D,c);if(ix=[1,2,3,4].indexOf(c),ix>=0&&(T=T.filter(((t,e)=>e%[1,2,7,3][ix]==0))),S(d,"bold",16,0),D.map(((t,i)=>{let a,s={x:h+M*i,y:v-(v-u)*(e[i]/r),c:e[i]},[m,f,y,g,p,w]=t.toString().match(/\S+/g),[$,S]=p.match(/\d+(?=:)/g),D=[$,m,y,f,g][c-1];T.filter(((t,e)=>t.time==D&&(T.splice(e,1),a=!0,!0))),ap=$>11?(12==$||($-=12),$<10&&($="0"+$),"PM"):"AM",s.t=c<=2?`${2==c?`${m} `:""}${$}:${S} ${ap}`:`${f} ${y}${c>3?`, ${g}`:""}`,a&&b(d,[`${$}:00 ${ap}`,m,`${f} ${y}`,`${f} ${g}`,g][c-1],s.x==n?s.x+x:s.x==l?s.x-x:s.x,o+25),k.push(s)})),d.lineCap="round",w(d,"rgba(0, 0, 0, 0.3)"),k.length>2)return function(t,e,r,n){let a=[];t.map(((e,r)=>{t[r+1]&&t[r+2]&&a.push(...function(t,e){let r=e[1],n=[],i=[],a=A(e[0],r),l=A(r,e[2]),o=a,c=l,s=a.y>r.y,d=l.y>r.y,h=s&&d,u=!s&&!d,m=a.y==r.y,f=l.y==r.y,x=!h&&!u,y=0,b=0;xd1=Math.abs(a.x-r.x),xd2=Math.abs(l.x-r.x),xin=.03*(xd1>xd2?xd2:xd1),yd1=Math.abs(a.y-r.y),yd2=Math.abs(l.y-r.y),yin=.03*(yd1>yd2?yd2:yd1);for(;y!=o.x&&b!=c.x;)y=o.x,t2=c.x,o=A(o,r,m||x?0:-xin,m?0:h?yin:u?-yin:0),c=A(r,c,f||x?0:xin,f?0:h?yin:u?-yin:0),n.push(o),i.push(c);return[a,...g(n),r,...g(i),l]}(0,[e,t[r+1],t[r+2]]))}));let l=[t[0],...a,t[t.length-1]];for(e.strokeStyle=r,e.lineWidth=n,e.lineCap="round",e.beginPath(l[0].x,l[0].y),e.moveTo(l[0].x,l[0].y),i=1;i<l.length-2;i++)e.quadraticCurveTo(l[i].x,l[i].y,(l[i].x+l[i+1].x)/2,(l[i].y+l[i+1].y)/2);e.quadraticCurveTo(l[i].x,l[i].y,l[i+1].x,l[i+1].y),e.stroke()}(k,d,"lightgreen",3.5),k}else T("More Data Needed to Show Stats")}else T("Not Enough Data to Show Stats");function T(t){d.fillStyle="rgba(255,255,255,0.3)",S(d,"500",24,0),b(d,t,($+h)/2,(v+u)/2)}return[]}(v("#bt"),e,h,r,n,a),h)}