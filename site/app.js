(()=>{var Yy=Object.defineProperty;var qy=(s,t,e)=>t in s?Yy(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Zt=(s,t,e)=>qy(s,typeof t!="symbol"?t+"":t,e);function Ds(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function rg(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var fi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ka={duration:.5,overwrite:!1,delay:0},Jf,Mn,Ve,Ni=1e8,Ie=1/Ni,zf=Math.PI*2,Zy=zf/4,$y=0,og=Math.sqrt,Jy=Math.cos,Ky=Math.sin,hn=function(t){return typeof t=="string"},Ze=function(t){return typeof t=="function"},Us=function(t){return typeof t=="number"},Bc=function(t){return typeof t>"u"},fs=function(t){return typeof t=="object"},ui=function(t){return t!==!1},Kf=function(){return typeof window<"u"},Rc=function(t){return Ze(t)||hn(t)},ag=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,jy=/random\([^)]+\)/g,Qy=/,\s*/g,Km=/(?:-?\.?\d|\.)+/gi,jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,qr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Df=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qf=/[+-]=-?[.\d]+/,tv=/[^,'"\[\]\s]+/gi,ev=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,We,hs,Vf,td,_i={},Dc={},lg,cg=function(t){return(Dc=Do(t,_i))&&Un},kc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ja=function(t,e){return!e&&console.warn(t)},hg=function(t,e){return t&&(_i[t]=e)&&Dc&&(Dc[t]=e)||_i},Qa=function(){return 0},nv={suppressEvents:!0,isStart:!0,kill:!1},Pc={suppressEvents:!0,kill:!1},iv={suppressEvents:!0},ed={},or=[],Hf={},ug,ci={},Nf={},jm=30,Ic=[],nd="",id=function(t){var e=t[0],n,i;if(fs(e)||Ze(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ic.length;i--&&!Ic[i].targetTest(e););n=Ic[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ad(t[i],n)))||t.splice(i,1);return t},ar=function(t){return t._gsap||id(Ui(t))[0]._gsap},sd=function(t,e,n){return(n=t[e])&&Ze(n)?t[e]():Bc(n)&&t.getAttribute&&t.getAttribute(e)||n},Yn=function(t,e){return(t=t.split(",")).forEach(e)||t},$e=function(t){return Math.round(t*1e5)/1e5||0},Ge=function(t){return Math.round(t*1e7)/1e7||0},Zr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},sv=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Nc=function(){var t=or.length,e=or.slice(0),n,i;for(Hf={},or.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},rd=function(t){return!!(t._initted||t._startAt||t.add)},fg=function(t,e,n,i){or.length&&!Mn&&Nc(),t.render(e,n,i||!!(Mn&&e<0&&rd(t))),or.length&&!Mn&&Nc()},dg=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(tv).length<2?e:hn(t)?t.trim():t},pg=function(t){return t},xi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rv=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Do=function(t,e){for(var n in e)t[n]=e[n];return t},Qm=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=fs(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Uc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Za=function(t){var e=t.parent||We,n=t.keyframes?rv(Nn(t.keyframes)):xi;if(ui(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},ov=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},mg=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},zc=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},lr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Wr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},av=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Gf=function(t,e,n,i){return t._startAt&&(Mn?t._startAt.revert(Pc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},lv=function s(t){return!t||t._ts&&s(t.parent)},tg=function(t){return t._repeat?No(t._tTime,t=t.duration()+t._rDelay)*t:0},No=function(t,e){var n=Math.floor(t=Ge(t/e));return t&&n===t?n-1:n},Oc=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Vc=function(t){return t._end=Ge(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ie)||0))},Hc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ge(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Vc(t),n._dirty||Wr(n,t)),t},gg=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Oc(t.rawTime(),e),(!e._dur||nl(0,e.totalDuration(),n)-e._tTime>Ie)&&e.render(n,!0)),Wr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ie}},us=function(t,e,n,i){return e.parent&&lr(e),e._start=Ge((Us(n)?n:n||t!==We?Di(t,n,e):t._time)+e._delay),e._end=Ge(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),mg(t,e,"_first","_last",t._sort?"_start":0),Wf(e)||(t._recent=e),i||gg(t,e),t._ts<0&&Hc(t,t._tTime),t},_g=function(t,e){return(_i.ScrollTrigger||kc("scrollTrigger",e))&&_i.ScrollTrigger.create(e,t)},xg=function(t,e,n,i,r){if(hd(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Mn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&ug!==hi.frame)return or.push(t),t._lazy=[r,i],1},cv=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Wf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},hv=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&cv(t)&&!(!t._initted&&Wf(t))||(t._ts<0||t._dp._ts<0)&&!Wf(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=nl(0,t._tDur,e),h=No(l,a),t._yoyo&&h&1&&(o=1-o),h!==No(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Mn||i||t._zTime===Ie||!e&&t._zTime){if(!t._initted&&xg(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Ie:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Gf(t,e,n,!0),t._onUpdate&&!n&&gi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&gi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&lr(t,1),!n&&!Mn&&(gi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},uv=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Uo=function(t,e,n,i){var r=t._repeat,o=Ge(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ge(o*(r+1)+t._rDelay*r):o,a>0&&!i&&Hc(t,t._tTime=t._tDur*a),t.parent&&Vc(t),n||Wr(t.parent,t),t},eg=function(t){return t instanceof Dn?Wr(t):Uo(t,t._dur)},fv={_start:0,endTime:Qa,totalDuration:Qa},Di=function s(t,e,n){var i=t.labels,r=t._recent||fv,o=t.duration()>=Ni?r.endTime(!1):t._dur,a,l,c;return hn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Nn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},$a=function(t,e,n){var i=Us(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ui(l.vars.inherit)&&l.parent;o.immediateRender=ui(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Qe(e[0],o,e[r+1])},cr=function(t,e){return t||t===0?e(t):e},nl=function(t,e,n){return n<t?t:n>e?e:n},bn=function(t,e){return!hn(t)||!(e=ev.exec(t))?"":e[1]},dv=function(t,e,n){return cr(n,function(i){return nl(t,e,i)})},Xf=[].slice,yg=function(t,e){return t&&fs(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&fs(t[0]))&&!t.nodeType&&t!==hs},pv=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return hn(i)&&!e||yg(i,1)?(r=n).push.apply(r,Ui(i)):n.push(i)})||n},Ui=function(t,e,n){return Ve&&!e&&Ve.selector?Ve.selector(t):hn(t)&&!n&&(Vf||!Oo())?Xf.call((e||td).querySelectorAll(t),0):Nn(t)?pv(t,n):yg(t)?Xf.call(t,0):t?[t]:[]},Yf=function(t){return t=Ui(t)[0]||ja("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ui(e,n.querySelectorAll?n:n===t?ja("Invalid scope")||td.createElement("div"):t)}},vg=function(t){return t.sort(function(){return .5-Math.random()})},Sg=function(t){if(Ze(t))return t;var e=fs(t)?t:{each:t},n=Xr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return hn(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var _=(p||e).length,g=o[_],m,M,S,x,b,T,A,y,E;if(!g){if(E=e.grid==="auto"?0:(e.grid||[1,Ni])[1],!E){for(A=-Ni;A<(A=p[E++].getBoundingClientRect().left)&&E<_;);E<_&&E--}for(g=o[_]=[],m=l?Math.min(E,_)*h-.5:i%E,M=E===Ni?0:l?_*d/E-.5:i/E|0,A=0,y=Ni,T=0;T<_;T++)S=T%E-m,x=M-(T/E|0),g[T]=b=c?Math.abs(c==="y"?x:S):og(S*S+x*x),b>A&&(A=b),b<y&&(y=b);i==="random"&&vg(g),g.max=A-y,g.min=y,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(E>_?_-1:c?c==="y"?_/E:E:Math.max(E,_/E))||0)*(i==="edges"?-1:1),g.b=_<0?r-_:r,g.u=bn(e.amount||e.each)||0,n=n&&_<0?Av(n):n}return _=(g[u]-g.min)/g.max||0,Ge(g.b+(n?n(_):_)*g.v)+g.u}},qf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ge(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Us(n)?0:bn(n))}},Mg=function(t,e){var n=Nn(t),i,r;return!n&&fs(t)&&(i=n=t.radius||Ni,t.values?(t=Ui(t.values),(r=!Us(t[0]))&&(i*=i)):t=qf(t.increment)),cr(e,n?Ze(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Ni,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Us(o)?h:h+bn(o)}:qf(t))},bg=function(t,e,n,i){return cr(Nn(t)?!e:n===!0?!!(n=0):!i,function(){return Nn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},mv=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},gv=function(t,e){return function(n){return t(parseFloat(n))+(e||bn(n))}},_v=function(t,e,n){return Tg(t,e,0,1,n)},wg=function(t,e,n){return cr(n,function(i){return t[~~e(i)]})},xv=function s(t,e,n){var i=e-t;return Nn(t)?wg(t,s(0,t.length),e):cr(n,function(r){return(i+(r-t)%i)%i+t})},yv=function s(t,e,n){var i=e-t,r=i*2;return Nn(t)?wg(t,s(0,t.length-1),e):cr(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Fo=function(t){return t.replace(jy,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(Qy);return bg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Tg=function(t,e,n,i,r){var o=e-t,a=i-n;return cr(r,function(l){return n+((l-t)/o*a||0)})},vv=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=hn(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Nn(t)&&!Nn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var _=Math.min(u,~~p);return h[_](p-_)},n=e}else i||(t=Do(Nn(t)?[]:{},t));if(!h){for(l in e)ld.call(a,t,l,"get",e[l]);r=function(p){return dd(p,a)||(o?t.p:t)}}}return cr(n,r)},ng=function(t,e,n){var i=t.labels,r=Ni,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},gi=function(t,e,n){var i=t.vars,r=i[e],o=Ve,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&or.length&&Nc(),a&&(Ve=a),h=l?r.apply(c,l):r.call(c),Ve=o,h},Ya=function(t){return lr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Mn),t.progress()<1&&gi(t,"onInterrupt"),t},Lo,Eg=[],Ag=function(t){if(t)if(t=!t.name&&t.default||t,Kf()||t.headless){var e=t.name,n=Ze(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Qa,render:dd,add:ld,kill:Fv,modifier:Ov,rawVars:0},o={targetTest:0,get:0,getSetter:Gc,aliases:{},register:0};if(Oo(),t!==i){if(ci[e])return;xi(i,xi(Uc(t,r),o)),Do(i.prototype,Do(r,Uc(t,o))),ci[i.prop=e]=i,t.targetTest&&(Ic.push(i),ed[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}hg(e,i),t.register&&t.register(Un,i,qn)}else Eg.push(t)},Pe=255,qa={aqua:[0,Pe,Pe],lime:[0,Pe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Pe],navy:[0,0,128],white:[Pe,Pe,Pe],olive:[128,128,0],yellow:[Pe,Pe,0],orange:[Pe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Pe,0,0],pink:[Pe,192,203],cyan:[0,Pe,Pe],transparent:[Pe,Pe,Pe,0]},Uf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Pe+.5|0},Cg=function(t,e,n){var i=t?Us(t)?[t>>16,t>>8&Pe,t&Pe]:0:qa.black,r,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),qa[t])i=qa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Pe,i&Pe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Pe,t&Pe]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(Km),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=Uf(l+1/3,r,o),i[1]=Uf(l,r,o),i[2]=Uf(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(jf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Km)||qa.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Pe,o=i[1]/Pe,a=i[2]/Pe,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Rg=function(t){var e=[],n=[],i=-1;return t.split(Ns).forEach(function(r){var o=r.match(qr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},ig=function(t,e,n){var i="",r=(t+i).match(Ns),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Cg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Rg(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Ns,"1").split(qr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(Ns),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},Ns=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in qa)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),Sv=/hsl[a]?\(/,od=function(t){var e=t.join(" "),n;if(Ns.lastIndex=0,Ns.test(e))return n=Sv.test(e),t[1]=ig(t[1],n),t[0]=ig(t[0],n,Rg(t[1])),!0},tl,hi=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function _(g){var m=s()-i,M=g===!0,S,x,b,T;if((m>t||m<0)&&(n+=m-e),i+=m,b=i-n,S=b-o,(S>0||M)&&(T=++d.frame,u=b-d.time*1e3,d.time=b=b/1e3,o+=S+(S>=r?4:r-S),x=1),M||(l=c(_)),x)for(f=0;f<a.length;f++)a[f](b,u,T,g)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){lg&&(!Vf&&Kf()&&(hs=Vf=window,td=hs.document||{},_i.gsap=Un,(hs.gsapVersions||(hs.gsapVersions=[])).push(Un.version),cg(Dc||hs.GreenSockGlobals||!hs.gsap&&hs||{}),Eg.forEach(Ag)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},tl=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),tl=0,c=Qa},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){r=1e3/(g||240),o=d.time*1e3+r},add:function(g,m,M){var S=m?function(x,b,T,A){g(x,b,T,A),d.remove(S)}:g;return d.remove(g),a[M?"unshift":"push"](S),Oo(),S},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d})(),Oo=function(){return!tl&&hi.wake()},xe={},Mv=/^[\d.\-M][\d.\-,\s]/,bv=/["']/g,wv=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(bv,"").trim():+c,i=l.substr(a+1).trim();return e},Tv=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Ev=function(t){var e=(t+"").split("("),n=xe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wv(e[1])]:Tv(t).split(",").map(dg)):xe._CE&&Mv.test(t)?xe._CE("",t):n},Av=function(t){return function(e){return 1-t(1-e)}},Xr=function(t,e){return t&&(Ze(t)?t:xe[t]||Ev(t))||e},$r=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Yn(t,function(a){xe[a]=_i[a]=r,xe[o=a.toLowerCase()]=n;for(var l in r)xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xe[a+"."+l]=r[l]}),r},Pg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Of=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/zf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*Ky((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Pg(a);return r=zf/r,l.config=function(c,h){return s(t,c,h)},l},Ff=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Pg(n);return i.config=function(r){return s(t,r)},i};Yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;$r(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});xe.Linear.easeNone=xe.none=xe.Linear.easeIn;$r("Elastic",Of("in"),Of("out"),Of());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};$r("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);$r("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});$r("Circ",function(s){return-(og(1-s*s)-1)});$r("Sine",function(s){return s===1?1:-Jy(s*Zy)+1});$r("Back",Ff("in"),Ff("out"),Ff());xe.SteppedEase=xe.steps=_i.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ie;return function(a){return((i*nl(0,o,a)|0)+r)*n}}};Ka.ease=xe["quad.out"];Yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return nd+=s+","+s+"Params,"});var ad=function(t,e){this.id=$y++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:sd,this.set=e?e.getSetter:Gc},el=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Uo(this,+e.duration,1,1),this.data=e.data,Ve&&(this._ctx=Ve,Ve.data.push(this)),tl||hi.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Uo(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Oo(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Hc(this,n),!r._dp||r.parent||gg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&us(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ie||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),fg(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+tg(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+tg(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?No(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ie?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Oc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ie?0:this._rts,this.totalTime(nl(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Vc(this),av(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ie&&(this._tTime-=Ie)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ge(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&us(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ui(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Oc(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=iv);var i=Mn;return Mn=n,rd(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,eg(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,eg(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Di(this,n),ui(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ui(i)),this._dur||(this._zTime=-Ie),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ie:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ie,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ie)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ze(n)?n:pg,l=function(){var h=i.then;i.then=null,r&&r(),Ze(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ya(this)},s})();xi(el.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ie,_prom:0,_ps:!1,_rts:1});var Dn=(function(s){rg(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ui(n.sortChildren),We&&us(n.parent||We,Ds(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&_g(Ds(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return $a(0,arguments,this),this},e.from=function(i,r,o){return $a(1,arguments,this),this},e.fromTo=function(i,r,o,a){return $a(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,Za(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Qe(i,r,Di(this,o),1),this},e.call=function(i,r,o){return us(this,Qe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qe(i,o,Di(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,Za(o).immediateRender=ui(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,Za(a).immediateRender=ui(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ge(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,_,g,m,M,S,x,b,T,A;if(this!==We&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,S=this._ts,m=!S,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(u=Ge(h%g),h===l?(_=this._repeat,u=c):(b=Ge(h/g),_=~~b,_&&_===b&&(u=c,_--),u>c&&(u=c)),b=No(this._tTime,g),!a&&this._tTime&&b!==_&&this._tTime-b*g-this._dur<=0&&(b=_),T&&_&1&&(u=c-u,A=1),_!==b&&!this._lock){var y=T&&b&1,E=y===(T&&_&1);if(_<b&&(y=!y),a=y?0:h%c?c:h,this._lock=1,this.render(a||(A?0:Ge(_*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&gi(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,b=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,E&&(this._lock=2,a=y?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=uv(this,Ge(a),Ge(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!b&&(gi(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=-Ie);break}}f=p}else{f=this._last;for(var I=i<0?i:u;f;){if(p=f._prev,(f._act||I<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(I-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(I-f._start)*f._ts,r,o||Mn&&rd(f)),u!==this._time||!this._ts&&!m){M=0,p&&(h+=this._zTime=I?-Ie:Ie);break}}f=p}}if(M&&!r&&(this.pause(),M.render(u>=a?0:-Ie)._zTime=u>=a?1:-1,this._ts))return this._start=x,Vc(this),this.render(i,r,o);this._onUpdate&&!r&&gi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&lr(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(gi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Us(r)||(r=Di(this,r,i)),!(i instanceof el)){if(Nn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(hn(i))return this.addLabel(i,r);if(Ze(i))i=Qe.delayedCall(0,i);else return this}return this!==i?us(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ni);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return hn(i)?this.removeLabel(i):Ze(i)?this.killTweensOf(i):(i.parent===this&&zc(this,i),i===this._recent&&(this._recent=this._last),Wr(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ge(hi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Di(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Qe.delayedCall(0,r||Qa,o);return a.data="isPause",this._hasPause=1,us(this,a,Di(this,i))},e.removePause=function(i){var r=this._first;for(i=Di(this,i);r;)r._start===i&&r.data==="isPause"&&lr(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)rr!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Ui(i),l=this._first,c=Us(r),h;l;)l instanceof Qe?sv(l._targets,a)&&(c?(!rr||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Di(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=Qe.to(o,xi({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ie,onStart:function(){if(o.pause(),!f){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==g&&Uo(p,g,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,xi({startAt:{time:Di(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ng(this,Di(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ng(this,Di(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ie)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ge(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Wr(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Wr(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Ni,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,us(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ge(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Uo(o,o===We&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(We._ts&&(fg(We,Oc(i,We)),ug=hi.frame),hi.frame>=jm){jm+=fi.autoSleep||120;var r=We._first;if((!r||!r._ts)&&fi.autoSleep&&hi._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||hi.sleep()}}},t})(el);xi(Dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Cv=function(t,e,n,i,r,o,a){var l=new qn(this._pt,t,e,0,1,fd,null,r),c=0,h=0,d,u,f,p,_,g,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Fo(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(Df)||[];d=Df.exec(i);)p=d[0],_=i.substring(c,d.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:p.charAt(1)==="="?Zr(g,p)-g:parseFloat(p)-g,m:f&&f<4?Math.round:0},c=Df.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Qf.test(i)||m)&&(l.e=0),this._pt=l,l},ld=function(t,e,n,i,r,o,a,l,c,h){Ze(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ze(d)?c?t[e.indexOf("set")||!Ze(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Ze(d)?c?Dv:Dg:ud,p;if(hn(i)&&(~i.indexOf("random(")&&(i=Fo(i)),i.charAt(1)==="="&&(p=Zr(u,i)+(bn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Zf)return!isNaN(u*i)&&i!==""?(p=new qn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Uv:Ng,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&kc(e,i),Cv.call(this,t,e,u,i,f,l||fi.stringFilter,c))},Rv=function(t,e,n,i,r){if(Ze(t)&&(t=Ja(t,r,e,n,i)),!fs(t)||t.style&&t.nodeType||Nn(t)||ag(t))return hn(t)?Ja(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=Ja(t[a],r,e,n,i);return o},cd=function(t,e,n,i,r,o){var a,l,c,h;if(ci[t]&&(a=new ci[t]).init(r,a.rawVars?e[t]:Rv(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new qn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Lo))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},rr,Zf,hd=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,_=t._startAt,g=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:g,S=t._overwrite==="auto"&&!Jf,x=t.timeline,b=i.easeReverse||d,T,A,y,E,I,H,O,j,z,q,nt,X,Y;if(x&&(!u||!r)&&(r="none"),t._ease=Xr(r,Ka.ease),t._rEase=b&&(Xr(b)||t._ease),t._from=!x&&!!i.runBackwards,t._from&&(t.ratio=1),!x||u&&!i.stagger){if(j=g[0]?ar(g[0]).harness:0,X=j&&i[j.prop],T=Uc(i,ed),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!f?_.render(-1,!0):_.revert(h&&p?Pc:nv),_._lazy=0),o){if(lr(t._startAt=Qe.set(g,xi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&ui(l),startAt:null,delay:0,onUpdate:c&&function(){return gi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn||!a&&!f)&&t._startAt.revert(Pc),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!_){if(e&&(a=!1),y=xi({overwrite:!1,data:"isFromStart",lazy:a&&!_&&ui(l),immediateRender:a,stagger:0,parent:m},T),X&&(y[j.prop]=X),lr(t._startAt=Qe.set(g,y)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Mn?t._startAt.revert(Pc):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ie,Ie);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ui(l)||l&&!p,A=0;A<g.length;A++){if(I=g[A],O=I._gsap||id(g)[A]._gsap,t._ptLookup[A]=q={},Hf[O.id]&&or.length&&Nc(),nt=M===g?A:M.indexOf(I),j&&(z=new j).init(I,X||T,t,nt,M)!==!1&&(t._pt=E=new qn(t._pt,I,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(it){q[it]=E}),z.priority&&(H=1)),!j||X)for(y in T)ci[y]&&(z=cd(y,T,t,nt,I,M))?z.priority&&(H=1):q[y]=E=ld.call(t,I,y,"get",T[y],nt,M,0,i.stringFilter);t._op&&t._op[A]&&t.kill(I,t._op[A]),S&&t._pt&&(rr=t,We.killTweensOf(I,q,t.globalTime(e)),Y=!t.parent,rr=0),t._pt&&l&&(Hf[O.id]=1)}H&&pd(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,u&&e<=0&&x.render(Ni,!0,!0)},Pv=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Zf=1,t.vars[e]="+=0",hd(t,a),Zf=0,l?ja(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=$e(n)+bn(d.e)),d.b&&(d.b=h.s+bn(d.b))},Iv=function(t,e){var n=t[0]?ar(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Do({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},Lv=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(Nn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},Ja=function(t,e,n,i,r){return Ze(t)?t.call(e,n,i,r):hn(t)&&~t.indexOf("random(")?Fo(t):t},Ig=nd+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Lg={};Yn(Ig+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Lg[s]=1});var Qe=(function(s){rg(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:Za(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=i.parent||We,M=(Nn(n)||ag(n)?Us(n[0]):"length"in i)?[n]:Ui(n),S,x,b,T,A,y,E,I;if(a._targets=M.length?id(M):ja("GSAP target "+n+" not found. https://gsap.com",!fi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||Rc(c)||Rc(h)){i=a.vars;var H=i.easeReverse||i.yoyoEase;if(S=a.timeline=new Dn({data:"nested",defaults:_||{},targets:m&&m.data==="nested"?m.vars.targets:M}),S.kill(),S.parent=S._dp=Ds(a),S._start=0,u||Rc(c)||Rc(h)){if(T=M.length,E=u&&Sg(u),fs(u))for(A in u)~Ig.indexOf(A)&&(I||(I={}),I[A]=u[A]);for(x=0;x<T;x++)b=Uc(i,Lg),b.stagger=0,H&&(b.easeReverse=H),I&&Do(b,I),y=M[x],b.duration=+Ja(c,Ds(a),x,y,M),b.delay=(+Ja(h,Ds(a),x,y,M)||0)-a._delay,!u&&T===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),S.to(y,b,E?E(x,y,M):0),S._ease=xe.none;S.duration()?c=h=0:a.timeline=0}else if(p){Za(xi(S.vars.defaults,{ease:"none"})),S._ease=Xr(p.ease||i.ease||"none");var O=0,j,z,q;if(Nn(p))p.forEach(function(nt){return S.to(M,nt,">")}),S.duration();else{b={};for(A in p)A==="ease"||A==="easeEach"||Lv(A,p[A],b,p.easeEach);for(A in b)for(j=b[A].sort(function(nt,X){return nt.t-X.t}),O=0,x=0;x<j.length;x++)z=j[x],q={ease:z.e,duration:(z.t-(x?j[x-1].t:0))/100*c},q[A]=z.v,S.to(M,q,O),O+=q.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Jf&&(rr=Ds(a),We.killTweensOf(M),rr=0),us(m,Ds(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ge(m._time)&&ui(d)&&lv(Ds(a))&&m.data!=="nested")&&(a._tTime=-Ie,a.render(Math.max(0,-h)||0)),g&&_g(Ds(a),g),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Ie&&!h?l:i<Ie?0:i,u,f,p,_,g,m,M,S;if(!c)hv(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,S=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Ge(d%_),d===l?(p=this._repeat,u=c):(g=Ge(d/_),p=~~g,p&&p===g?(u=c,p--):u>c&&(u=c)),m=this._yoyo&&p&1,m&&(u=c-u),g=No(this._tTime,_),u===a&&!o&&this._initted&&p===g)return this._tTime=d,this;p!==g&&this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ge(_*p),!0).invalidate()._lock=0)}if(!this._initted){if(xg(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var x=u<a;if(x!==this._inv){var b=x?a:c-a;this._inv=x,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=b?(x?-1:1)/b:0,this._invScale=x?-this.ratio:1-this.ratio,this._invEase=x?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(u/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!g&&(gi(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Gf(this,i,r,o),gi(this,"onUpdate")),this._repeat&&p!==g&&this.vars.onRepeat&&!r&&this.parent&&gi(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Gf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&lr(this,1),!r&&!(h&&!a)&&(d||a||m)&&(gi(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){tl||hi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||hd(this,c),h=this._ease(c/this._dur),Pv(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(Hc(this,0),this.parent||mg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ya(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,rr&&rr.vars.overwrite!==!0)._first||Ya(this),this.parent&&o!==this.timeline.totalDuration()&&Uo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ui(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,_,g,m;if((!r||r==="all")&&ov(a,l))return r==="all"&&(this._pt=0),Ya(this);for(d=this._op=this._op||[],r!=="all"&&(hn(r)&&(_={},Yn(r,function(M){return _[M]=1}),r=_),r=Iv(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],r==="all"?(d[m]=r,p=u,f={}):(f=d[m]=d[m]||{},p=r);for(_ in p)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&zc(this,g,"_pt"),delete u[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&h&&Ya(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return $a(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return $a(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return We.killTweensOf(i,r,o)},t})(el);xi(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Yn("staggerTo,staggerFrom,staggerFromTo",function(s){Qe[s]=function(){var t=new Dn,e=Xf.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var ud=function(t,e,n){return t[e]=n},Dg=function(t,e,n){return t[e](n)},Dv=function(t,e,n,i){return t[e](i.fp,n)},Nv=function(t,e,n){return t.setAttribute(e,n)},Gc=function(t,e){return Ze(t[e])?Dg:Bc(t[e])&&t.setAttribute?Nv:ud},Ng=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Uv=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},fd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},dd=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Ov=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},Fv=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?zc(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Bv=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},pd=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},qn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Ng,this.d=l||this,this.set=c||ud,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Bv,this.m=n,this.mt=r,this.tween=i},s})();Yn(nd+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return ed[s]=1});_i.TweenMax=_i.TweenLite=Qe;_i.TimelineLite=_i.TimelineMax=Dn;We=new Dn({sortChildren:!1,defaults:Ka,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});fi.stringFilter=od;var Yr=[],Lc={},kv=[],sg=0,zv=0,Bf=function(t){return(Lc[t]||kv).map(function(e){return e()})},$f=function(){var t=Date.now(),e=[];t-sg>2&&(Bf("matchMediaInit"),Yr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=hs.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Bf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),sg=t,Bf("matchMedia"))},Ug=(function(){function s(e,n){this.selector=n&&Yf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zv++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ze(n)&&(r=i,i=n,n=Ze);var o=this,a=function(){var c=Ve,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Yf(r)),Ve=o,d=i.apply(o,arguments),Ze(d)&&o._r.push(d),Ve=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ze?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ve;Ve=null,n(this),Ve=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof Dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Yr.length;o--;)Yr[o].id===this.id&&Yr.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),Vv=(function(){function s(e){this.contexts=[],this.scope=e,Ve&&Ve.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){fs(n)||(n={matches:n});var o=new Ug(0,r||this.scope),a=o.conditions={},l,c,h;Ve&&!o.selector&&(o.selector=Ve.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=hs.matchMedia(n[c]),l&&(Yr.indexOf(o)<0&&Yr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener($f):l.addEventListener("change",$f)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Fc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Ag(i)})},timeline:function(t){return new Dn(t)},getTweensOf:function(t,e){return We.getTweensOf(t,e)},getProperty:function(t,e,n,i){hn(t)&&(t=Ui(t)[0]);var r=ar(t||{}).get,o=n?pg:dg;return n==="native"&&(n=""),t&&(e?o((ci[e]&&ci[e].get||r)(t,e,n,i)):function(a,l,c){return o((ci[a]&&ci[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ui(t),t.length>1){var i=t.map(function(h){return Un.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=ci[e],a=ar(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Lo._pt=0,d.init(t,n?h+n:h,Lo,0,[t]),d.render(1,d),Lo._pt&&dd(1,Lo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Un.to(t,xi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return We.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Xr(t.ease,Ka.ease)),Qm(Ka,t||{})},config:function(t){return Qm(fi,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ci[a]&&!_i[a]&&ja(e+" effect requires "+a+" plugin.")}),Nf[e]=function(a,l,c){return n(Ui(a),xi(l||{},r),c)},o&&(Dn.prototype[e]=function(a,l,c){return this.add(Nf[e](a,fs(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){xe[t]=Xr(e)},parseEase:function(t,e){return arguments.length?Xr(t,e):xe},getById:function(t){return We.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Dn(t),i,r;for(n.smoothChildTiming=ui(t.smoothChildTiming),We.remove(n),n._dp=0,n._time=n._tTime=We._time,i=We._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Qe&&i.vars.onComplete===i._targets[0]))&&us(n,i,i._start-i._delay),i=r;return us(We,n,0),n},context:function(t,e){return t?new Ug(t,e):Ve},matchMedia:function(t){return new Vv(t)},matchMediaRefresh:function(){return Yr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||$f()},addEventListener:function(t,e){var n=Lc[t]||(Lc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Lc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:xv,wrapYoyo:yv,distribute:Sg,random:bg,snap:Mg,normalize:_v,getUnit:bn,clamp:dv,splitColor:Cg,toArray:Ui,selector:Yf,mapRange:Tg,pipe:mv,unitize:gv,interpolate:vv,shuffle:vg},install:cg,effects:Nf,ticker:hi,updateRoot:Dn.updateRoot,plugins:ci,globalTimeline:We,core:{PropTween:qn,globals:hg,Tween:Qe,Timeline:Dn,Animation:el,getCache:ar,_removeLinkedListItem:zc,reverting:function(){return Mn},context:function(t){return t&&Ve&&(Ve.data.push(t),t._ctx=Ve),Ve},suppressOverwrites:function(t){return Jf=t}}};Yn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Fc[s]=Qe[s]});hi.add(Dn.updateRoot);Lo=Fc.to({},{duration:0});var Hv=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Gv=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Hv(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},kf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(hn(r)&&(l={},Yn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Gv(a,r)}}}},Un=Fc.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},kf("roundProps",qf),kf("modifiers"),kf("snap",Mg))||Fc;Qe.version=Dn.version=Un.version="3.15.0";lg=1;Kf()&&Oo();var Wv=xe.Power0,Xv=xe.Power1,Yv=xe.Power2,qv=xe.Power3,Zv=xe.Power4,$v=xe.Linear,Jv=xe.Quad,Kv=xe.Cubic,jv=xe.Quart,Qv=xe.Quint,tS=xe.Strong,eS=xe.Elastic,nS=xe.Back,iS=xe.SteppedEase,sS=xe.Bounce,rS=xe.Sine,oS=xe.Expo,aS=xe.Circ;var Og,hr,ko,vd,Qr,lS,Fg,Sd,cS=function(){return typeof window<"u"},Fs={},jr=180/Math.PI,zo=Math.PI/180,Bo=Math.atan2,Bg=1e8,Md=/([A-Z])/g,hS=/(left|right|width|margin|padding|x)/i,uS=/[\s,\(]\S/,ds={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gd=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},fS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},pS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Yg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},qg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},gS=function(t,e,n){return t.style[e]=n},_S=function(t,e,n){return t.style.setProperty(e,n)},xS=function(t,e,n){return t._gsap[e]=n},yS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},vS=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},SS=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Xe="transform",di=Xe+"Origin",MS=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Fs&&r){if(this.tfm=this.tfm||{},t!=="transform")t=ds[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Os(i,a)}):this.tfm[t]=o.x?o[t]:Os(i,t),t===di&&(this.tfm.zOrigin=o.zOrigin);else return ds.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Xe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(di,e,"")),t=Xe}(r||e)&&this.props.push(t,e,r[t])},Zg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},bS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(Md,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=Sd(),(!r||!r.isStart)&&!n[Xe]&&(Zg(n),i.zOrigin&&n[di]&&(n[di]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},$g=function(t,e){var n={target:t,props:[],revert:bS,save:MS};return t._gsap||Un.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Jg,_d=function(t,e){var n=hr.createElementNS?hr.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):hr.createElement(t);return n&&n.style?n:hr.createElement(t)},yi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Md,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Vo(e)||e,1)||""},kg="O,Moz,ms,Ms,Webkit".split(","),Vo=function(t,e,n){var i=e||Qr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(kg[o]+t in r););return o<0?null:(o===3?"ms":o>=0?kg[o]:"")+t},xd=function(){cS()&&window.document&&(Og=window,hr=Og.document,ko=hr.documentElement,Qr=_d("div")||{style:{}},lS=_d("div"),Xe=Vo(Xe),di=Xe+"Origin",Qr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Jg=!!Vo("perspective"),Sd=Un.core.reverting,vd=1)},zg=function(t){var e=t.ownerSVGElement,n=_d("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ko.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ko.removeChild(n),r},Vg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Kg=function(t){var e,n;try{e=t.getBBox()}catch{e=zg(t),n=1}return e&&(e.width||e.height)||n||(e=zg(t)),e&&!e.width&&!e.x&&!e.y?{x:+Vg(t,["x","cx","x1"])||0,y:+Vg(t,["y","cy","y1"])||0,width:0,height:0}:e},jg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Kg(t))},fr=function(t,e){if(e){var n=t.style,i;e in Fs&&e!==di&&(e=Xe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Md,"-$1").toLowerCase())):n.removeAttribute(e)}},ur=function(t,e,n,i,r,o){var a=new qn(t._pt,e,n,0,1,o?qg:Yg);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Hg={deg:1,rad:1,turn:1},wS={grid:1,flex:1},dr=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Qr.style,l=hS.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,_,g,m;if(i===o||!r||Hg[i]||Hg[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),m=t.getCTM&&jg(t),(f||o==="%")&&(Fs[e]||~e.indexOf("adius")))return p=m?t.getBBox()[l?"width":"height"]:t[h],$e(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===hr||!_.appendChild)&&(_=hr.body),g=_._gsap,g&&f&&g.width&&l&&g.time===hi.time&&!g.uncache)return $e(r/g.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,p=t[h],M?t.style[e]=M:fr(t,e)}else(f||o==="%")&&!wS[yi(_,"display")]&&(a.position=yi(t,"position")),_===t&&(a.position="static"),_.appendChild(Qr),p=Qr[h],_.removeChild(Qr),a.position="absolute";return l&&f&&(g=ar(_),g.time=hi.time,g.width=_[h]),$e(u?p*r/d:p&&r?d/p*r:0)},Os=function(t,e,n,i){var r;return vd||xd(),e in ds&&e!=="transform"&&(e=ds[e],~e.indexOf(",")&&(e=e.split(",")[0])),Fs[e]&&e!=="transform"?(r=rl(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Xc(yi(t,di))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Wc[e]&&Wc[e](t,e,n)||yi(t,e)||sd(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?dr(t,e,r,n)+n:r},TS=function(t,e,n,i){if(!n||n==="none"){var r=Vo(e,t,1),o=r&&yi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=yi(t,"borderTopColor"))}var a=new qn(this._pt,t.style,e,0,1,fd),l=0,c=0,h,d,u,f,p,_,g,m,M,S,x,b;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=yi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=yi(t,e)||i,_?t.style[e]=_:fr(t,e)),h=[n,i],od(h),n=h[0],i=h[1],u=n.match(qr)||[],b=i.match(qr)||[],b.length){for(;d=qr.exec(i);)g=d[0],M=i.substring(l,d.index),p?p=(p+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(p=1),g!==(_=u[c++]||"")&&(f=parseFloat(_)||0,x=_.substr((f+"").length),g.charAt(1)==="="&&(g=Zr(f,g)+x),m=parseFloat(g),S=g.substr((m+"").length),l=qr.lastIndex-S.length,S||(S=S||fi.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(f=dr(t,e,_,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:m-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?qg:Yg;return Qf.test(i)&&(a.e=0),this._pt=a,a},Gg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ES=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Gg[n]||n,e[1]=Gg[i]||i,e.join(" ")},AS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Fs[a]&&(l=1,a=a==="transformOrigin"?di:Xe),fr(n,a);l&&(fr(n,Xe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",rl(n,1),o.uncache=1,Zg(i)))}},Wc={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new qn(t._pt,e,n,0,0,AS);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},sl=[1,0,0,1,0,0],Qg={},t0=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Wg=function(t){var e=yi(t,Xe);return t0(e)?sl:e.substr(7).match(jf).map($e)},bd=function(t,e){var n=t._gsap||ar(t),i=t.style,r=Wg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?sl:r):(r===sl&&!t.offsetParent&&t!==ko&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ko.appendChild(t)),r=Wg(t),l?i.display=l:fr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ko.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},yd=function(t,e,n,i,r,o){var a=t._gsap,l=r||bd(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],_=l[2],g=l[3],m=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,b=parseFloat(S[1])||0,T,A,y,E;n?l!==sl&&(A=f*g-p*_)&&(y=x*(g/A)+b*(-_/A)+(_*M-g*m)/A,E=x*(-p/A)+b*(f/A)-(f*M-p*m)/A,x=y,b=E):(T=Kg(t),x=T.x+(~S[0].indexOf("%")?x/100*T.width:x),b=T.y+(~(S[1]||S[0]).indexOf("%")?b/100*T.height:b)),i||i!==!1&&a.smooth?(m=x-c,M=b-h,a.xOffset=d+(m*f+M*_)-m,a.yOffset=u+(m*p+M*g)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=b,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[di]="0px 0px",o&&(ur(o,a,"xOrigin",c,x),ur(o,a,"yOrigin",h,b),ur(o,a,"xOffset",d,a.xOffset),ur(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+b)},rl=function(t,e){var n=t._gsap||new ad(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=yi(t,di)||"0",h,d,u,f,p,_,g,m,M,S,x,b,T,A,y,E,I,H,O,j,z,q,nt,X,Y,it,D,ct,Pt,Ct,kt,Bt;return h=d=u=_=g=m=M=S=x=0,f=p=1,n.svg=!!(t.getCTM&&jg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Xe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Xe]!=="none"?l[Xe]:"")),i.scale=i.rotate=i.translate="none"),A=bd(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",X=""):X=!e&&t.getAttribute("data-svg-origin"),yd(t,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,A)),b=n.xOrigin||0,T=n.yOrigin||0,A!==sl&&(H=A[0],O=A[1],j=A[2],z=A[3],h=q=A[4],d=nt=A[5],A.length===6?(f=Math.sqrt(H*H+O*O),p=Math.sqrt(z*z+j*j),_=H||O?Bo(O,H)*jr:0,M=j||z?Bo(j,z)*jr+_:0,M&&(p*=Math.abs(Math.cos(M*zo))),n.svg&&(h-=b-(b*H+T*j),d-=T-(b*O+T*z))):(Bt=A[6],Ct=A[7],D=A[8],ct=A[9],Pt=A[10],kt=A[11],h=A[12],d=A[13],u=A[14],y=Bo(Bt,Pt),g=y*jr,y&&(E=Math.cos(-y),I=Math.sin(-y),X=q*E+D*I,Y=nt*E+ct*I,it=Bt*E+Pt*I,D=q*-I+D*E,ct=nt*-I+ct*E,Pt=Bt*-I+Pt*E,kt=Ct*-I+kt*E,q=X,nt=Y,Bt=it),y=Bo(-j,Pt),m=y*jr,y&&(E=Math.cos(-y),I=Math.sin(-y),X=H*E-D*I,Y=O*E-ct*I,it=j*E-Pt*I,kt=z*I+kt*E,H=X,O=Y,j=it),y=Bo(O,H),_=y*jr,y&&(E=Math.cos(y),I=Math.sin(y),X=H*E+O*I,Y=q*E+nt*I,O=O*E-H*I,nt=nt*E-q*I,H=X,q=Y),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),f=$e(Math.sqrt(H*H+O*O+j*j)),p=$e(Math.sqrt(nt*nt+Bt*Bt)),y=Bo(q,nt),M=Math.abs(y)>2e-4?y*jr:0,x=kt?1/(kt<0?-kt:kt):0),n.svg&&(X=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!t0(yi(t,Xe)),X&&t.setAttribute("transform",X))),Math.abs(M)>90&&Math.abs(M)<270&&(r?(f*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(p*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=$e(f),n.scaleY=$e(p),n.rotation=$e(_)+a,n.rotationX=$e(g)+a,n.rotationY=$e(m)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[di]=Xc(c)),n.xOffset=n.yOffset=0,n.force3D=fi.force3D,n.renderTransform=n.svg?RS:Jg?e0:CS,n.uncache=0,n},Xc=function(t){return(t=t.split(" "))[0]+" "+t[1]},md=function(t,e,n){var i=bn(e);return $e(parseFloat(e)+parseFloat(dr(t,"x",n+"px",i)))+i},CS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,e0(t,e)},Jr="0deg",il="0px",Kr=") ",e0=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,M=n.target,S=n.zOrigin,x="",b=m==="auto"&&t&&t!==1||m===!0;if(S&&(d!==Jr||h!==Jr)){var T=parseFloat(h)*zo,A=Math.sin(T),y=Math.cos(T),E;T=parseFloat(d)*zo,E=Math.cos(T),o=md(M,o,A*E*-S),a=md(M,a,-Math.sin(T)*-S),l=md(M,l,y*E*-S+S)}g!==il&&(x+="perspective("+g+Kr),(i||r)&&(x+="translate("+i+"%, "+r+"%) "),(b||o!==il||a!==il||l!==il)&&(x+=l!==il||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Kr),c!==Jr&&(x+="rotate("+c+Kr),h!==Jr&&(x+="rotateY("+h+Kr),d!==Jr&&(x+="rotateX("+d+Kr),(u!==Jr||f!==Jr)&&(x+="skew("+u+", "+f+Kr),(p!==1||_!==1)&&(x+="scale("+p+", "+_+Kr),M.style[Xe]=x||"translate(0, 0)"},RS=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),b,T,A,y,E;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=zo,c*=zo,b=Math.cos(l)*d,T=Math.sin(l)*d,A=Math.sin(l-c)*-u,y=Math.cos(l-c)*u,c&&(h*=zo,E=Math.tan(c-h),E=Math.sqrt(1+E*E),A*=E,y*=E,h&&(E=Math.tan(h),E=Math.sqrt(1+E*E),b*=E,T*=E)),b=$e(b),T=$e(T),A=$e(A),y=$e(y)):(b=d,y=u,T=A=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=dr(f,"x",o,"px"),x=dr(f,"y",a,"px")),(p||_||g||m)&&(S=$e(S+p-(p*b+_*A)+g),x=$e(x+_-(p*T+_*y)+m)),(i||r)&&(E=f.getBBox(),S=$e(S+i/100*E.width),x=$e(x+r/100*E.height)),E="matrix("+b+","+T+","+A+","+y+","+S+","+x+")",f.setAttribute("transform",E),M&&(f.style[Xe]=E)},PS=function(t,e,n,i,r){var o=360,a=hn(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?jr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Bg)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Bg)%o-~~(c/o)*o)),t._pt=u=new qn(t._pt,e,n,i,c,fS),u.e=h,u.u="deg",t._props.push(n),u},Xg=function(t,e){for(var n in e)t[n]=e[n];return t},IS=function(t,e,n){var i=Xg({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Xe]=e,a=rl(n,1),fr(n,Xe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Xe],o[Xe]=e,a=rl(n,1),o[Xe]=c);for(l in Fs)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=bn(c),p=bn(h),d=f!==p?dr(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new qn(t._pt,a,l,d,u-d,gd),t._pt.u=p||0,t._props.push(l));Xg(a,i)};Yn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Wc[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return Os(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,_){return f[p]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,f,d)}});var wd={name:"css",register:xd,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,_,g,m,M,S,x,b,T,A,y,E;vd||xd(),this.styles=this.styles||$g(t),y=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(ci[_]&&cd(_,e,n,i,t,r)))){if(f=typeof h,p=Wc[_],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Fo(h)),p)p(this,t,_,h,n)&&(A=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",Ns.lastIndex=0,Ns.test(c)||(g=bn(c),m=bn(h),m?g!==m&&(c=dr(t,_,c,m)+m):g&&(h+=g)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),y.push(_,0,a[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],hn(c)&&~c.indexOf("random(")&&(c=Fo(c)),bn(c+"")||c==="auto"||(c+=fi.units[_]||bn(Os(t,_))||""),(c+"").charAt(1)==="="&&(c=Os(t,_))):c=Os(t,_),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),_ in ds&&(_==="autoAlpha"&&(u===1&&Os(t,"visibility")==="hidden"&&d&&(u=0),y.push("visibility",0,a.visibility),ur(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=ds[_],~_.indexOf(",")&&(_=_.split(",")[0]))),S=_ in Fs,S){if(this.styles.save(_),E=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=yi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var I=t.style.perspective;t.style.perspective=h,h=yi(t,"perspective"),I?t.style.perspective=I:fr(t,"perspective")}d=parseFloat(h)}if(x||(b=t._gsap,b.renderTransform&&!e.parseTransform||rl(t,e.parseTransform),T=e.smoothOrigin!==!1&&b.smooth,x=this._pt=new qn(this._pt,a,Xe,0,1,b.renderTransform,b,0,-1),x.dep=1),_==="scale")this._pt=new qn(this._pt,b,"scaleY",b.scaleY,(M?Zr(b.scaleY,M+d):d)-b.scaleY||0,gd),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){y.push(di,0,a[di]),h=ES(h),b.svg?yd(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==b.zOrigin&&ur(this,b,"zOrigin",b.zOrigin,m),ur(this,a,_,Xc(c),Xc(h)));continue}else if(_==="svgOrigin"){yd(t,h,1,T,0,this);continue}else if(_ in Qg){PS(this,b,_,u,M?Zr(u,M+h):h);continue}else if(_==="smoothOrigin"){ur(this,b,"smooth",b.smooth,h);continue}else if(_==="force3D"){b[_]=h;continue}else if(_==="transform"){IS(this,h,t);continue}}else _ in a||(_=Vo(_)||_);if(S||(d||d===0)&&(u||u===0)&&!uS.test(h)&&_ in a)g=(c+"").substr((u+"").length),d||(d=0),m=bn(h)||(_ in fi.units?fi.units[_]:g),g!==m&&(u=dr(t,_,c,m)),this._pt=new qn(this._pt,S?b:a,_,u,(M?Zr(u,M+d):d)-u,!S&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?mS:gd),this._pt.u=m||0,S&&E!==h?(this._pt.b=c,this._pt.e=E,this._pt.r=pS):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=dS);else if(_ in a)TS.call(this,t,_,c,M?M+h:h);else if(_ in t)this.add(t,_,c||t[_],M?M+h:h,i,r);else if(_!=="parseTransform"){kc(_,h);continue}S||(_ in a?y.push(_,0,a[_]):typeof t[_]=="function"?y.push(_,2,t[_]()):y.push(_,1,c||t[_])),o.push(_)}}A&&pd(this)},render:function(t,e){if(e.tween._time||!Sd())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Os,aliases:ds,getSetter:function(t,e,n){var i=ds[e];return i&&i.indexOf(",")<0&&(e=i),e in Fs&&e!==di&&(t._gsap.x||Os(t,"x"))?n&&Fg===n?e==="scale"?yS:xS:(Fg=n||{})&&(e==="scale"?vS:SS):t.style&&!Bc(t.style[e])?gS:~e.indexOf("-")?_S:Gc(t,e)},core:{_removeProperty:fr,_getMatrix:bd}};Un.utils.checkPrefix=Vo;Un.core.getStyleSaver=$g;(function(s,t,e,n){var i=Yn(s+","+t+","+e,function(r){Fs[r]=1});Yn(t,function(r){fi.units[r]="deg",Qg[r]=1}),ds[i[13]]=s+","+t,Yn(n,function(r){var o=r.split(":");ds[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){fi.units[s]="px"});Un.registerPlugin(wd);var Zn=Un.registerPlugin(wd)||Un,rC=Zn.core.Tween;function n0(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function LS(s,t,e){return t&&n0(s.prototype,t),e&&n0(s,e),s}var wn,Zc,DS,vi,pr,mr,Go,s0,to,Wo,r0,Bs,Gi,o0,a0=function(){return wn||typeof window<"u"&&(wn=window.gsap)&&wn.registerPlugin&&wn},l0=1,Ho=[],ce=[],Wi=[],al=Date.now,Td=function(t,e){return e},NS=function(){var t=Wo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ce),i.push.apply(i,Wi),ce=n,Wi=i,Td=function(o,a){return e[o](a)}},zs=function(t,e){return~Wi.indexOf(t)&&Wi[Wi.indexOf(t)+1][e]},ll=function(t){return!!~r0.indexOf(t)},Jn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},$n=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Yc="scrollLeft",qc="scrollTop",Ed=function(){return Bs&&Bs.isPressed||ce.cache++},$c=function(t,e){var n=function i(r){if(r||r===0){l0&&(vi.history.scrollRestoration="manual");var o=Bs&&Bs.isPressed;r=i.v=Math.round(r)||(Bs&&Bs.iOS?1:0),t(r),i.cacheID=ce.cache,o&&Td("ss",r)}else(e||ce.cache!==i.cacheID||Td("ref"))&&(i.cacheID=ce.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},On={s:Yc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:$c(function(s){return arguments.length?vi.scrollTo(s,sn.sc()):vi.pageXOffset||pr[Yc]||mr[Yc]||Go[Yc]||0})},sn={s:qc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:On,sc:$c(function(s){return arguments.length?vi.scrollTo(On.sc(),s):vi.pageYOffset||pr[qc]||mr[qc]||Go[qc]||0})},Kn=function(t,e){return(e&&e._ctx&&e._ctx.selector||wn.utils.toArray)(t)[0]||(typeof t=="string"&&wn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},US=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ks=function(t,e){var n=e.s,i=e.sc;ll(t)&&(t=pr.scrollingElement||mr);var r=ce.indexOf(t),o=i===sn.sc?1:2;!~r&&(r=ce.push(t)-1),ce[r+o]||Jn(t,"scroll",Ed);var a=ce[r+o],l=a||(ce[r+o]=$c(zs(t,n),!0)||(ll(t)?i:$c(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=wn.getProperty(t,"scrollBehavior")==="smooth"),l},Jc=function(t,e,n){var i=t,r=t,o=al(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,_){var g=al();_||g-o>l?(r=i,i=p,a=o,o=g):n?i+=p:i=r+(p-r)/(g-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(p){var _=a,g=r,m=al();return(p||p===0)&&p!==i&&h(p),o===a||m-a>c?0:(i+(n?g:-g))/((n?m:o)-_)*1e3};return{update:h,reset:d,getVelocity:u}},ol=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},i0=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},c0=function(){Wo=wn.core.globals().ScrollTrigger,Wo&&Wo.core&&NS()},h0=function(t){return wn=t||a0(),!Zc&&wn&&typeof document<"u"&&document.body&&(vi=window,pr=document,mr=pr.documentElement,Go=pr.body,r0=[vi,pr,mr,Go],DS=wn.utils.clamp,o0=wn.core.context||function(){},to="onpointerenter"in Go?"pointer":"mouse",s0=Je.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Gi=Je.eventTypes=("ontouchstart"in mr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in mr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return l0=0},500),Zc=1),Wo||c0(),Zc};On.op=sn;ce.cache=0;var Je=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Zc||h0(wn)||console.warn("Please gsap.registerPlugin(Observer)"),Wo||c0();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,_=n.event,g=n.onDragStart,m=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,b=n.onRight,T=n.onLeft,A=n.onUp,y=n.onDown,E=n.onChangeX,I=n.onChangeY,H=n.onChange,O=n.onToggleX,j=n.onToggleY,z=n.onHover,q=n.onHoverEnd,nt=n.onMove,X=n.ignoreCheck,Y=n.isNormalizer,it=n.onGestureStart,D=n.onGestureEnd,ct=n.onWheel,Pt=n.onEnable,Ct=n.onDisable,kt=n.onClick,Bt=n.scrollSpeed,qt=n.capture,k=n.allowClicks,F=n.lockAxis,U=n.onLockAxis;this.target=a=Kn(a)||mr,this.vars=n,f&&(f=wn.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,Bt=Bt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(vi.getComputedStyle(Go).lineHeight)||22);var N,V,st,ft,R,G,B,P=this,Q=0,ut=0,gt=n.passive||!h&&n.passive!==!1,dt=ks(a,On),J=ks(a,sn),w=dt(),Rt=J(),It=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Gi[0]==="pointerdown",L=ll(a),v=a.ownerDocument||pr,Z=[0,0,0],et=[0,0,0],ht=0,bt=function(){return ht=al()},yt=function(xt,Jt){return(P.event=xt)&&f&&US(xt.target,f)||Jt&&It&&xt.pointerType!=="touch"||X&&X(xt,Jt)},tt=function(){P._vx.reset(),P._vy.reset(),V.pause(),d&&d(P)},rt=function(){var xt=P.deltaX=i0(Z),Jt=P.deltaY=i0(et),St=Math.abs(xt)>=i,Qt=Math.abs(Jt)>=i;H&&(St||Qt)&&H(P,xt,Jt,Z,et),St&&(b&&P.deltaX>0&&b(P),T&&P.deltaX<0&&T(P),E&&E(P),O&&P.deltaX<0!=Q<0&&O(P),Q=P.deltaX,Z[0]=Z[1]=Z[2]=0),Qt&&(y&&P.deltaY>0&&y(P),A&&P.deltaY<0&&A(P),I&&I(P),j&&P.deltaY<0!=ut<0&&j(P),ut=P.deltaY,et[0]=et[1]=et[2]=0),(ft||st)&&(nt&&nt(P),st&&(g&&st===1&&g(P),M&&M(P),st=0),ft=!1),G&&!(G=!1)&&U&&U(P),R&&(ct(P),R=!1),N=0},vt=function(xt,Jt,St){Z[St]+=xt,et[St]+=Jt,P._vx.update(xt),P._vy.update(Jt),c?N||(N=requestAnimationFrame(rt)):rt()},Lt=function(xt,Jt){F&&!B&&(P.axis=B=Math.abs(xt)>Math.abs(Jt)?"x":"y",G=!0),B!=="y"&&(Z[2]+=xt,P._vx.update(xt,!0)),B!=="x"&&(et[2]+=Jt,P._vy.update(Jt,!0)),c?N||(N=requestAnimationFrame(rt)):rt()},Mt=function(xt){if(!yt(xt,1)){xt=ol(xt,h);var Jt=xt.clientX,St=xt.clientY,Qt=Jt-P.x,Wt=St-P.y,se=P.isDragging;P.x=Jt,P.y=St,(se||(Qt||Wt)&&(Math.abs(P.startX-Jt)>=r||Math.abs(P.startY-St)>=r))&&(st||(st=se?2:1),se||(P.isDragging=!0),Lt(Qt,Wt))}},Et=P.onPress=function(Tt){yt(Tt,1)||Tt&&Tt.button||(P.axis=B=null,V.pause(),P.isPressed=!0,Tt=ol(Tt),Q=ut=0,P.startX=P.x=Tt.clientX,P.startY=P.y=Tt.clientY,P._vx.reset(),P._vy.reset(),Jn(Y?a:v,Gi[1],Mt,gt,!0),P.deltaX=P.deltaY=0,S&&S(P))},wt=P.onRelease=function(Tt){if(!yt(Tt,1)){$n(Y?a:v,Gi[1],Mt,!0);var xt=!isNaN(P.y-P.startY),Jt=P.isDragging,St=Jt&&(Math.abs(P.x-P.startX)>3||Math.abs(P.y-P.startY)>3),Qt=ol(Tt);!St&&xt&&(P._vx.reset(),P._vy.reset(),h&&k&&wn.delayedCall(.08,function(){if(al()-ht>300&&!Tt.defaultPrevented){if(Tt.target.click)Tt.target.click();else if(v.createEvent){var Wt=v.createEvent("MouseEvents");Wt.initMouseEvent("click",!0,!0,vi,1,Qt.screenX,Qt.screenY,Qt.clientX,Qt.clientY,!1,!1,!1,!1,0,null),Tt.target.dispatchEvent(Wt)}}})),P.isDragging=P.isGesturing=P.isPressed=!1,d&&Jt&&!Y&&V.restart(!0),st&&rt(),m&&Jt&&m(P),x&&x(P,St)}},zt=function(xt){return xt.touches&&xt.touches.length>1&&(P.isGesturing=!0)&&it(xt,P.isDragging)},Kt=function(){return(P.isGesturing=!1)||D(P)},$=function(xt){if(!yt(xt)){var Jt=dt(),St=J();vt((Jt-w)*Bt,(St-Rt)*Bt,1),w=Jt,Rt=St,d&&V.restart(!0)}},At=function(xt){if(!yt(xt)){xt=ol(xt,h),ct&&(R=!0);var Jt=(xt.deltaMode===1?l:xt.deltaMode===2?vi.innerHeight:1)*p;vt(xt.deltaX*Jt,xt.deltaY*Jt,0),d&&!Y&&V.restart(!0)}},pt=function(xt){if(!yt(xt)){var Jt=xt.clientX,St=xt.clientY,Qt=Jt-P.x,Wt=St-P.y;P.x=Jt,P.y=St,ft=!0,d&&V.restart(!0),(Qt||Wt)&&Lt(Qt,Wt)}},Dt=function(xt){P.event=xt,z(P)},Ut=function(xt){P.event=xt,q(P)},_t=function(xt){return yt(xt)||ol(xt,h)&&kt(P)};V=P._dc=wn.delayedCall(u||.25,tt).pause(),P.deltaX=P.deltaY=0,P._vx=Jc(0,50,!0),P._vy=Jc(0,50,!0),P.scrollX=dt,P.scrollY=J,P.isDragging=P.isGesturing=P.isPressed=!1,o0(this),P.enable=function(Tt){return P.isEnabled||(Jn(L?v:a,"scroll",Ed),o.indexOf("scroll")>=0&&Jn(L?v:a,"scroll",$,gt,qt),o.indexOf("wheel")>=0&&Jn(a,"wheel",At,gt,qt),(o.indexOf("touch")>=0&&s0||o.indexOf("pointer")>=0)&&(Jn(a,Gi[0],Et,gt,qt),Jn(v,Gi[2],wt),Jn(v,Gi[3],wt),k&&Jn(a,"click",bt,!0,!0),kt&&Jn(a,"click",_t),it&&Jn(v,"gesturestart",zt),D&&Jn(v,"gestureend",Kt),z&&Jn(a,to+"enter",Dt),q&&Jn(a,to+"leave",Ut),nt&&Jn(a,to+"move",pt)),P.isEnabled=!0,P.isDragging=P.isGesturing=P.isPressed=ft=st=!1,P._vx.reset(),P._vy.reset(),w=dt(),Rt=J(),Tt&&Tt.type&&Et(Tt),Pt&&Pt(P)),P},P.disable=function(){P.isEnabled&&(Ho.filter(function(Tt){return Tt!==P&&ll(Tt.target)}).length||$n(L?v:a,"scroll",Ed),P.isPressed&&(P._vx.reset(),P._vy.reset(),$n(Y?a:v,Gi[1],Mt,!0)),$n(L?v:a,"scroll",$,qt),$n(a,"wheel",At,qt),$n(a,Gi[0],Et,qt),$n(v,Gi[2],wt),$n(v,Gi[3],wt),$n(a,"click",bt,!0),$n(a,"click",_t),$n(v,"gesturestart",zt),$n(v,"gestureend",Kt),$n(a,to+"enter",Dt),$n(a,to+"leave",Ut),$n(a,to+"move",pt),P.isEnabled=P.isPressed=P.isDragging=!1,Ct&&Ct(P))},P.kill=P.revert=function(){P.disable();var Tt=Ho.indexOf(P);Tt>=0&&Ho.splice(Tt,1),Bs===P&&(Bs=0)},Ho.push(P),Y&&ll(a)&&(Bs=P),P.enable(_)},LS(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();Je.version="3.15.0";Je.create=function(s){return new Je(s)};Je.register=h0;Je.getAll=function(){return Ho.slice()};Je.getById=function(s){return Ho.filter(function(t){return t.vars.id===s})[0]};a0()&&wn.registerPlugin(Je);var Gt,Zo,de,we,bi,Se,zd,fh,Ml,ml,hl,Kc,Fn,mh,Dd,Qn,u0,f0,$o,C0,Ad,R0,jn,Nd,P0,I0,gr,Ud,Vd,Jo,Hd,gl,Od,Cd,jc=1,Bn=Date.now,Rd=Bn(),Bi=0,ul=0,d0=function(t,e,n){var i=Mi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},p0=function(t,e){return e&&(!Mi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},OS=function s(){return ul&&requestAnimationFrame(s)},m0=function(){return mh=1},g0=function(){return mh=0},ps=function(t){return t},fl=function(t){return Math.round(t*1e5)/1e5||0},L0=function(){return typeof window<"u"},D0=function(){return Gt||L0()&&(Gt=window.gsap)&&Gt.registerPlugin&&Gt},oo=function(t){return!!~zd.indexOf(t)},N0=function(t){return(t==="Height"?Hd:de["inner"+t])||bi["client"+t]||Se["client"+t]},U0=function(t){return zs(t,"getBoundingClientRect")||(oo(t)?function(){return uh.width=de.innerWidth,uh.height=Hd,uh}:function(){return Vs(t)})},FS=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=zs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?N0(r):t["client"+r])||0}},BS=function(t,e){return!e||~Wi.indexOf(t)?U0(t):function(){return uh}},ms=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=zs(t,n))?o()-U0(t)()[r]:oo(t)?(bi[n]||Se[n])-N0(i):t[n]-t["offset"+i])},Qc=function(t,e){for(var n=0;n<$o.length;n+=3)(!e||~e.indexOf($o[n+1]))&&t($o[n],$o[n+1],$o[n+2])},Mi=function(t){return typeof t=="string"},kn=function(t){return typeof t=="function"},dl=function(t){return typeof t=="number"},eo=function(t){return typeof t=="object"},cl=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Xo=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},Yo=Math.abs,O0="left",F0="top",Gd="right",Wd="bottom",io="width",so="height",_l="Right",xl="Left",yl="Top",vl="Bottom",rn="padding",Oi="margin",jo="Width",Xd="Height",un="px",Fi=function(t){return de.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},kS=function(t){var e=Fi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},_0=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Vs=function(t,e){var n=e&&Fi(t)[Dd]!=="matrix(1, 0, 0, 1, 0, 0)"&&Gt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},dh=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},B0=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},zS=function(t){return function(e){return Gt.utils.snap(B0(t),e)}},Yd=function(t){var e=Gt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},VS=function(t){return function(e,n){return Yd(B0(t))(e,n.direction)}},th=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},_n=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},eh=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},x0={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},nh={toggleActions:"play",anticipatePin:0},ph={top:0,left:0,center:.5,bottom:1,right:1},ah=function(t,e){if(Mi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in ph?ph[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ih=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=we.createElement("div"),_=oo(n)||zs(n,"pinType")==="fixed",g=t.indexOf("scroller")!==-1,m=_?Se:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,S=M?c:h,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((g||l)&&_?"fixed;":"absolute;"),(g||l||!_)&&(x+=(i===sn?Gd:Wd)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=M,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=x,p.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(p,m.children[0]):m.appendChild(p),p._offset=p["offset"+i.op.d2],lh(p,0,i,M),p},lh=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+jo]=1,r["border"+a+jo]=0,r[n.p]=e+"px",Gt.set(t,r)},he=[],Fd={},bl,y0=function(){return Bn()-Bi>34&&(bl||(bl=requestAnimationFrame(Hs)))},qo=function(){(!jn||!jn.isPressed||jn.startX>Se.clientWidth)&&(ce.cache++,jn?bl||(bl=requestAnimationFrame(Hs)):Hs(),Bi||lo("scrollStart"),Bi=Bn())},Pd=function(){I0=de.innerWidth,P0=de.innerHeight},pl=function(t){ce.cache++,(t===!0||!Fn&&!R0&&!we.fullscreenElement&&!we.webkitFullscreenElement&&(!Nd||I0!==de.innerWidth||Math.abs(de.innerHeight-P0)>de.innerHeight*.25))&&fh.restart(!0)},ao={},HS=[],k0=function s(){return gn(ie,"scrollEnd",s)||no(!0)},lo=function(t){return ao[t]&&ao[t].map(function(e){return e()})||HS},Si=[],z0=function(t){for(var e=0;e<Si.length;e+=5)(!t||Si[e+4]&&Si[e+4].query===t)&&(Si[e].style.cssText=Si[e+1],Si[e].getBBox&&Si[e].setAttribute("transform",Si[e+2]||""),Si[e+3].uncache=1)},V0=function(){return ce.forEach(function(t){return kn(t)&&++t.cacheID&&(t.rec=t())})},qd=function(t,e){var n;for(Qn=0;Qn<he.length;Qn++)n=he[Qn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));gl=!0,e&&z0(e),e||lo("revert")},H0=function(t,e){ce.cache++,(e||!ti)&&ce.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),Mi(t)&&(de.history.scrollRestoration=Vd=t)},ti,ro=0,v0,GS=function(){if(v0!==ro){var t=v0=ro;requestAnimationFrame(function(){return t===ro&&no(!0)})}},G0=function(){Se.appendChild(Jo),Hd=!jn&&Jo.offsetHeight||de.innerHeight,Se.removeChild(Jo)},S0=function(t){return Ml(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},no=function(t,e){if(bi=we.documentElement,Se=we.body,zd=[de,we,bi,Se],Bi&&!t&&!gl){_n(ie,"scrollEnd",k0);return}G0(),ti=ie.isRefreshing=!0,gl||V0();var n=lo("refreshInit");C0&&ie.sort(),e||qd(),ce.forEach(function(i){kn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),he.slice(0).forEach(function(i){return i.refresh()}),gl=!1,he.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),Od=1,S0(!0),he.forEach(function(i){var r=ms(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),S0(!1),Od=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ce.forEach(function(i){kn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),H0(Vd,1),fh.pause(),ro++,ti=2,Hs(2),he.forEach(function(i){return kn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ti=ie.isRefreshing=!1,lo("refresh")},Bd=0,ch=1,Sl,Hs=function(t){if(t===2||!ti&&!gl){ie.isUpdating=!0,Sl&&Sl.update(0);var e=he.length,n=Bn(),i=n-Rd>=50,r=e&&he[0].scroll();if(ch=Bd>r?-1:1,ti||(Bd=r),i&&(Bi&&!mh&&n-Bi>200&&(Bi=0,lo("scrollEnd")),hl=Rd,Rd=n),ch<0){for(Qn=e;Qn-- >0;)he[Qn]&&he[Qn].update(0,i);ch=1}else for(Qn=0;Qn<e;Qn++)he[Qn]&&he[Qn].update(0,i);ie.isUpdating=!1}bl=0},kd=[O0,F0,Wd,Gd,Oi+vl,Oi+_l,Oi+yl,Oi+xl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],hh=kd.concat([io,so,"boxSizing","max"+jo,"max"+Xd,"position",Oi,rn,rn+yl,rn+_l,rn+vl,rn+xl]),WS=function(t,e,n){Ko(n);var i=t._gsap;if(i.spacerIsNative)Ko(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},Id=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=kd.length,o=e.style,a=t.style,l;r--;)l=kd[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Wd]=a[Gd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[io]=dh(t,On)+un,o[so]=dh(t,sn)+un,o[rn]=a[Oi]=a[F0]=a[O0]="0",Ko(i),a[io]=a["max"+jo]=n[io],a[so]=a["max"+Xd]=n[so],a[rn]=n[rn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},XS=/([A-Z])/g,Ko=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Gt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(XS,"-$1").toLowerCase())}},sh=function(t){for(var e=hh.length,n=t.style,i=[],r=0;r<e;r++)i.push(hh[r],n[hh[r]]);return i.t=t,i},YS=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},uh={left:0,top:0},M0=function(t,e,n,i,r,o,a,l,c,h,d,u,f,p){kn(t)&&(t=t(l)),Mi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?ah("0"+t.substr(3),n):0));var _=f?f.time():0,g,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),dl(t))f&&(t=Gt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&lh(a,n,i,!0);else{kn(e)&&(e=e(l));var S=(t||"0").split(" "),x,b,T,A;M=Kn(e,l)||Se,x=Vs(M)||{},(!x||!x.left&&!x.top)&&Fi(M).display==="none"&&(A=M.style.display,M.style.display="block",x=Vs(M),A?M.style.display=A:M.style.removeProperty("display")),b=ah(S[0],x[i.d]),T=ah(S[1]||"0",n),t=x[i.p]-c[i.p]-h+b+r-T,a&&lh(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var y=t+n,E=o._isStart;g="scroll"+i.d2,lh(o,y,i,E&&y>20||!E&&(d?Math.max(Se[g],bi[g]):o.parentNode[g])<=y+1),d&&(c=Vs(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+un))}return f&&M&&(g=Vs(M),f.seek(u),m=Vs(M),f._caScrollDist=g[i.p]-m[i.p],t=t/f._caScrollDist*u),f&&f.seek(_),f?t:Math.round(t)},qS=/(webkit|moz|length|cssText|inset)/i,b0=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Se){t._stOrig=r.cssText,a=Fi(t);for(o in a)!+o&&!qS.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Gt.core.getCache(t).uncache=1,e.appendChild(t)}},W0=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},rh=function(t,e,n){var i={};i[e.p]="+="+n,Gt.set(t,i)},w0=function(t,e){var n=ks(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var _=W0(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return _(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ce.cache++,o.tween&&Hs()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Gt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},_n(t,"wheel",n.wheelHandler),ie.isTouch&&_n(t,"touchmove",n.wheelHandler),r},ie=(function(){function s(e,n){Zo||s.register(Gt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ud(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ul){this.update=this.refresh=this.kill=ps;return}n=_0(Mi(n)||dl(n)||n.nodeType?{trigger:n}:n,nh);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,_=r.invalidateOnRefresh,g=r.anticipatePin,m=r.onScrubComplete,M=r.onSnapComplete,S=r.once,x=r.snap,b=r.pinReparent,T=r.pinSpacer,A=r.containerAnimation,y=r.fastScrollEnd,E=r.preventOverlaps,I=n.horizontal||n.containerAnimation&&n.horizontal!==!1?On:sn,H=!d&&d!==0,O=Kn(n.scroller||de),j=Gt.core.getCache(O),z=oo(O),q=("pinType"in n?n.pinType:zs(O,"pinType")||z&&"fixed")==="fixed",nt=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=H&&n.toggleActions.split(" "),Y="markers"in n?n.markers:nh.markers,it=z?0:parseFloat(Fi(O)["border"+I.p2+jo])||0,D=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(D)},Pt=FS(O,z,I),Ct=BS(O,z),kt=0,Bt=0,qt=0,k=ks(O,I),F,U,N,V,st,ft,R,G,B,P,Q,ut,gt,dt,J,w,Rt,It,L,v,Z,et,ht,bt,yt,tt,rt,vt,Lt,Mt,Et,wt,zt,Kt,$,At,pt,Dt,Ut;if(D._startClamp=D._endClamp=!1,D._dir=I,g*=45,D.scroller=O,D.scroll=A?A.time.bind(A):k,V=k(),D.vars=n,i=i||n.animation,"refreshPriority"in n&&(C0=1,n.refreshPriority===-9999&&(Sl=D)),j.tweenScroll=j.tweenScroll||{top:w0(O,sn),left:w0(O,On)},D.tweenTo=F=j.tweenScroll[I.p],D.scrubDuration=function(St){zt=dl(St)&&St,zt?wt?wt.duration(St):wt=Gt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:zt,paused:!0,onComplete:function(){return m&&m(D)}}):(wt&&wt.progress(1).kill(),wt=0)},i&&(i.vars.lazy=!1,i._initted&&!D.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),D.animation=i.pause(),i.scrollTrigger=D,D.scrubDuration(d),Mt=0,l||(l=i.vars.id)),x&&((!eo(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Se.style&&Gt.set(z?[Se,bi]:O,{scrollBehavior:"auto"}),ce.forEach(function(St){return kn(St)&&St.target===(z?we.scrollingElement||bi:O)&&(St.smooth=!1)}),N=kn(x.snapTo)?x.snapTo:x.snapTo==="labels"?zS(i):x.snapTo==="labelsDirectional"?VS(i):x.directional!==!1?function(St,Qt){return Yd(x.snapTo)(St,Bn()-Bt<500?0:Qt.direction)}:Gt.utils.snap(x.snapTo),Kt=x.duration||{min:.1,max:2},Kt=eo(Kt)?ml(Kt.min,Kt.max):ml(Kt,Kt),$=Gt.delayedCall(x.delay||zt/2||.1,function(){var St=k(),Qt=Bn()-Bt<500,Wt=F.tween;if((Qt||Math.abs(D.getVelocity())<10)&&!Wt&&!mh&&kt!==St){var se=(St-ft)/dt,tn=i&&!H?i.totalProgress():se,fe=Qt?0:(tn-Et)/(Bn()-hl)*1e3||0,Fe=Gt.utils.clamp(-se,1-se,Yo(fe/2)*fe/.185),pn=se+(x.inertia===!1?0:Fe),Be,Ce,_e=x,Gn=_e.onStart,De=_e.onInterrupt,In=_e.onComplete;if(Be=N(pn,D),dl(Be)||(Be=pn),Ce=Math.max(0,Math.round(ft+Be*dt)),St<=R&&St>=ft&&Ce!==St){if(Wt&&!Wt._initted&&Wt.data<=Yo(Ce-St))return;x.inertia===!1&&(Fe=Be-se),F(Ce,{duration:Kt(Yo(Math.max(Yo(pn-tn),Yo(Be-tn))*.185/fe/.05||0)),ease:x.ease||"power3",data:Yo(Ce-St),onInterrupt:function(){return $.restart(!0)&&De&&Xo(D,De)},onComplete:function(){D.update(),kt=k(),i&&!H&&(wt?wt.resetTo("totalProgress",Be,i._tTime/i._tDur):i.progress(Be)),Mt=Et=i&&!H?i.totalProgress():D.progress,M&&M(D),In&&Xo(D,In)}},St,Fe*dt,Ce-St-Fe*dt),Gn&&Xo(D,Gn,F.tween)}}else D.isActive&&kt!==St&&$.restart(!0)}).pause()),l&&(Fd[l]=D),u=D.trigger=Kn(u||f!==!0&&f),Ut=u&&u._gsap&&u._gsap.stRevert,Ut&&(Ut=Ut(D)),f=f===!0?u:Kn(f),Mi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===Oi||(p=!p&&f.parentNode&&f.parentNode.style&&Fi(f.parentNode).display==="flex"?!1:rn),D.pin=f,U=Gt.core.getCache(f),U.spacer?J=U.pinState:(T&&(T=Kn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),U.spacerIsNative=!!T,T&&(U.spacerState=sh(T))),U.spacer=It=T||we.createElement("div"),It.classList.add("pin-spacer"),l&&It.classList.add("pin-spacer-"+l),U.pinState=J=sh(f)),n.force3D!==!1&&Gt.set(f,{force3D:!0}),D.spacer=It=U.spacer,Lt=Fi(f),bt=Lt[p+I.os2],v=Gt.getProperty(f),Z=Gt.quickSetter(f,I.a,un),Id(f,It,Lt),Rt=sh(f)),Y){ut=eo(Y)?_0(Y,x0):x0,P=ih("scroller-start",l,O,I,ut,0),Q=ih("scroller-end",l,O,I,ut,0,P),L=P["offset"+I.op.d2];var _t=Kn(zs(O,"content")||O);G=this.markerStart=ih("start",l,_t,I,ut,L,0,A),B=this.markerEnd=ih("end",l,_t,I,ut,L,0,A),A&&(Dt=Gt.quickSetter([G,B],I.a,un)),!q&&!(Wi.length&&zs(O,"fixedMarkers")===!0)&&(kS(z?Se:O),Gt.set([P,Q],{force3D:!0}),tt=Gt.quickSetter(P,I.a,un),vt=Gt.quickSetter(Q,I.a,un))}if(A){var Tt=A.vars.onUpdate,xt=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){D.update(0,0,1),Tt&&Tt.apply(A,xt||[])})}if(D.previous=function(){return he[he.indexOf(D)-1]},D.next=function(){return he[he.indexOf(D)+1]},D.revert=function(St,Qt){if(!Qt)return D.kill(!0);var Wt=St!==!1||!D.enabled,se=Fn;Wt!==D.isReverted&&(Wt&&(At=Math.max(k(),D.scroll.rec||0),qt=D.progress,pt=i&&i.progress()),G&&[G,B,P,Q].forEach(function(tn){return tn.style.display=Wt?"none":"block"}),Wt&&(Fn=D,D.update(Wt)),f&&(!b||!D.isActive)&&(Wt?WS(f,It,J):Id(f,It,Fi(f),yt)),Wt||D.update(Wt),Fn=se,D.isReverted=Wt)},D.refresh=function(St,Qt,Wt,se){if(!((Fn||!D.enabled)&&!Qt)){if(f&&St&&Bi){_n(s,"scrollEnd",k0);return}!ti&&ct&&ct(D),Fn=D,F.tween&&!Wt&&(F.tween.kill(),F.tween=0),wt&&wt.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Nt){return Nt.vars.immediateRender&&Nt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),D.isReverted||D.revert(!0,!0),D._subPinOffset=!1;var tn=Pt(),fe=Ct(),Fe=A?A.duration():ms(O,I),pn=dt<=.01||!dt,Be=0,Ce=se||0,_e=eo(Wt)?Wt.end:n.end,Gn=n.endTrigger||u,De=eo(Wt)?Wt.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),In=D.pinnedContainer=n.pinnedContainer&&Kn(n.pinnedContainer,D),Wn=u&&Math.max(0,he.indexOf(D))||0,en=Wn,qe,cn,ls,Co,mn,Ke,Ii,Ro,C,K,lt,ot,at;for(Y&&eo(Wt)&&(ot=Gt.getProperty(P,I.p),at=Gt.getProperty(Q,I.p));en-- >0;)Ke=he[en],Ke.end||Ke.refresh(0,1)||(Fn=D),Ii=Ke.pin,Ii&&(Ii===u||Ii===f||Ii===In)&&!Ke.isReverted&&(K||(K=[]),K.unshift(Ke),Ke.revert(!0,!0)),Ke!==he[en]&&(Wn--,en--);for(kn(De)&&(De=De(D)),De=d0(De,"start",D),ft=M0(De,u,tn,I,k(),G,P,D,fe,it,q,Fe,A,D._startClamp&&"_startClamp")||(f?-.001:0),kn(_e)&&(_e=_e(D)),Mi(_e)&&!_e.indexOf("+=")&&(~_e.indexOf(" ")?_e=(Mi(De)?De.split(" ")[0]:"")+_e:(Be=ah(_e.substr(2),tn),_e=Mi(De)?De:(A?Gt.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,ft):ft)+Be,Gn=u)),_e=d0(_e,"end",D),R=Math.max(ft,M0(_e||(Gn?"100% 0":Fe),Gn,tn,I,k()+Be,B,Q,D,fe,it,q,Fe,A,D._endClamp&&"_endClamp"))||-.001,Be=0,en=Wn;en--;)Ke=he[en]||{},Ii=Ke.pin,Ii&&Ke.start-Ke._pinPush<=ft&&!A&&Ke.end>0&&(qe=Ke.end-(D._startClamp?Math.max(0,Ke.start):Ke.start),(Ii===u&&Ke.start-Ke._pinPush<ft||Ii===In)&&isNaN(De)&&(Be+=qe*(1-Ke.progress)),Ii===f&&(Ce+=qe));if(ft+=Be,R+=Be,D._startClamp&&(D._startClamp+=Be),D._endClamp&&!ti&&(D._endClamp=R||-.001,R=Math.min(R,ms(O,I))),dt=R-ft||(ft-=.01)&&.001,pn&&(qt=Gt.utils.clamp(0,1,Gt.utils.normalize(ft,R,At))),D._pinPush=Ce,G&&Be&&(qe={},qe[I.a]="+="+Be,In&&(qe[I.p]="-="+k()),Gt.set([G,B],qe)),f&&!(Od&&D.end>=ms(O,I)))qe=Fi(f),Co=I===sn,ls=k(),et=parseFloat(v(I.a))+Ce,!Fe&&R>1&&(lt=(z?we.scrollingElement||bi:O).style,lt={style:lt,value:lt["overflow"+I.a.toUpperCase()]},z&&Fi(Se)["overflow"+I.a.toUpperCase()]!=="scroll"&&(lt.style["overflow"+I.a.toUpperCase()]="scroll")),Id(f,It,qe),Rt=sh(f),cn=Vs(f,!0),Ro=q&&ks(O,Co?On:sn)(),p?(yt=[p+I.os2,dt+Ce+un],yt.t=It,en=p===rn?dh(f,I)+dt+Ce:0,en&&(yt.push(I.d,en+un),It.style.flexBasis!=="auto"&&(It.style.flexBasis=en+un)),Ko(yt),In&&he.forEach(function(Nt){Nt.pin===In&&Nt.vars.pinSpacing!==!1&&(Nt._subPinOffset=!0)}),q&&k(At)):(en=dh(f,I),en&&It.style.flexBasis!=="auto"&&(It.style.flexBasis=en+un)),q&&(mn={top:cn.top+(Co?ls-ft:Ro)+un,left:cn.left+(Co?Ro:ls-ft)+un,boxSizing:"border-box",position:"fixed"},mn[io]=mn["max"+jo]=Math.ceil(cn.width)+un,mn[so]=mn["max"+Xd]=Math.ceil(cn.height)+un,mn[Oi]=mn[Oi+yl]=mn[Oi+_l]=mn[Oi+vl]=mn[Oi+xl]="0",mn[rn]=qe[rn],mn[rn+yl]=qe[rn+yl],mn[rn+_l]=qe[rn+_l],mn[rn+vl]=qe[rn+vl],mn[rn+xl]=qe[rn+xl],w=YS(J,mn,b),ti&&k(0)),i?(C=i._initted,Ad(1),i.render(i.duration(),!0,!0),ht=v(I.a)-et+dt+Ce,rt=Math.abs(dt-ht)>1,q&&rt&&w.splice(w.length-2,2),i.render(0,!0,!0),C||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ad(0)):ht=dt,lt&&(lt.value?lt.style["overflow"+I.a.toUpperCase()]=lt.value:lt.style.removeProperty("overflow-"+I.a));else if(u&&k()&&!A)for(cn=u.parentNode;cn&&cn!==Se;)cn._pinOffset&&(ft-=cn._pinOffset,R-=cn._pinOffset),cn=cn.parentNode;K&&K.forEach(function(Nt){return Nt.revert(!1,!0)}),D.start=ft,D.end=R,V=st=ti?At:k(),!A&&!ti&&(V<At&&k(At),D.scroll.rec=0),D.revert(!1,!0),Bt=Bn(),$&&(kt=-1,$.restart(!0)),Fn=0,i&&H&&(i._initted||pt)&&i.progress()!==pt&&i.progress(pt||0,!0).render(i.time(),!0,!0),(pn||qt!==D.progress||A||_||i&&!i._initted)&&(i&&!H&&(i._initted||qt||i.vars.immediateRender!==!1)&&i.totalProgress(A&&ft<-.001&&!qt?Gt.utils.normalize(ft,R,0):qt,!0),D.progress=pn||(V-ft)/dt===qt?0:qt),f&&p&&(It._pinOffset=Math.round(D.progress*ht)),wt&&wt.invalidate(),isNaN(ot)||(ot-=Gt.getProperty(P,I.p),at-=Gt.getProperty(Q,I.p),rh(P,I,ot),rh(G,I,ot-(se||0)),rh(Q,I,at),rh(B,I,at-(se||0))),pn&&!ti&&D.update(),h&&!ti&&!gt&&(gt=!0,h(D),gt=!1)}},D.getVelocity=function(){return(k()-st)/(Bn()-hl)*1e3||0},D.endAnimation=function(){cl(D.callbackAnimation),i&&(wt?wt.progress(1):i.paused()?H||cl(i,D.direction<0,1):cl(i,i.reversed()))},D.labelToScroll=function(St){return i&&i.labels&&(ft||D.refresh()||ft)+i.labels[St]/i.duration()*dt||0},D.getTrailing=function(St){var Qt=he.indexOf(D),Wt=D.direction>0?he.slice(0,Qt).reverse():he.slice(Qt+1);return(Mi(St)?Wt.filter(function(se){return se.vars.preventOverlaps===St}):Wt).filter(function(se){return D.direction>0?se.end<=ft:se.start>=R})},D.update=function(St,Qt,Wt){if(!(A&&!Wt&&!St)){var se=ti===!0?At:D.scroll(),tn=St?0:(se-ft)/dt,fe=tn<0?0:tn>1?1:tn||0,Fe=D.progress,pn,Be,Ce,_e,Gn,De,In,Wn;if(Qt&&(st=V,V=A?k():se,x&&(Et=Mt,Mt=i&&!H?i.totalProgress():fe)),g&&f&&!Fn&&!jc&&Bi&&(!fe&&ft<se+(se-st)/(Bn()-hl)*g?fe=1e-4:fe===1&&R>se+(se-st)/(Bn()-hl)*g&&(fe=.9999)),fe!==Fe&&D.enabled){if(pn=D.isActive=!!fe&&fe<1,Be=!!Fe&&Fe<1,De=pn!==Be,Gn=De||!!fe!=!!Fe,D.direction=fe>Fe?1:-1,D.progress=fe,Gn&&!Fn&&(Ce=fe&&!Fe?0:fe===1?1:Fe===1?2:3,H&&(_e=!De&&X[Ce+1]!=="none"&&X[Ce+1]||X[Ce],Wn=i&&(_e==="complete"||_e==="reset"||_e in i))),E&&(De||Wn)&&(Wn||d||!i)&&(kn(E)?E(D):D.getTrailing(E).forEach(function(ls){return ls.endAnimation()})),H||(wt&&!Fn&&!jc?(wt._dp._time-wt._start!==wt._time&&wt.render(wt._dp._time-wt._start),wt.resetTo?wt.resetTo("totalProgress",fe,i._tTime/i._tDur):(wt.vars.totalProgress=fe,wt.invalidate().restart())):i&&i.totalProgress(fe,!!(Fn&&(Bt||St)))),f){if(St&&p&&(It.style[p+I.os2]=bt),!q)Z(fl(et+ht*fe));else if(Gn){if(In=!St&&fe>Fe&&R+1>se&&se+1>=ms(O,I),b)if(!St&&(pn||In)){var en=Vs(f,!0),qe=se-ft;b0(f,Se,en.top+(I===sn?qe:0)+un,en.left+(I===sn?0:qe)+un)}else b0(f,It);Ko(pn||In?w:Rt),rt&&fe<1&&pn||Z(et+(fe===1&&!In?ht:0))}}x&&!F.tween&&!Fn&&!jc&&$.restart(!0),a&&(De||S&&fe&&(fe<1||!Cd))&&Ml(a.targets).forEach(function(ls){return ls.classList[pn||S?"add":"remove"](a.className)}),o&&!H&&!St&&o(D),Gn&&!Fn?(H&&(Wn&&(_e==="complete"?i.pause().totalProgress(1):_e==="reset"?i.restart(!0).pause():_e==="restart"?i.restart(!0):i[_e]()),o&&o(D)),(De||!Cd)&&(c&&De&&Xo(D,c),nt[Ce]&&Xo(D,nt[Ce]),S&&(fe===1?D.kill(!1,1):nt[Ce]=0),De||(Ce=fe===1?1:3,nt[Ce]&&Xo(D,nt[Ce]))),y&&!pn&&Math.abs(D.getVelocity())>(dl(y)?y:2500)&&(cl(D.callbackAnimation),wt?wt.progress(1):cl(i,_e==="reverse"?1:!fe,1))):H&&o&&!Fn&&o(D)}if(vt){var cn=A?se/A.duration()*(A._caScrollDist||0):se;tt(cn+(P._isFlipped?1:0)),vt(cn)}Dt&&Dt(-se/A.duration()*(A._caScrollDist||0))}},D.enable=function(St,Qt){D.enabled||(D.enabled=!0,_n(O,"resize",pl),z||_n(O,"scroll",qo),ct&&_n(s,"refreshInit",ct),St!==!1&&(D.progress=qt=0,V=st=kt=k()),Qt!==!1&&D.refresh())},D.getTween=function(St){return St&&F?F.tween:wt},D.setPositions=function(St,Qt,Wt,se){if(A){var tn=A.scrollTrigger,fe=A.duration(),Fe=tn.end-tn.start;St=tn.start+Fe*St/fe,Qt=tn.start+Fe*Qt/fe}D.refresh(!1,!1,{start:p0(St,Wt&&!!D._startClamp),end:p0(Qt,Wt&&!!D._endClamp)},se),D.update()},D.adjustPinSpacing=function(St){if(yt&&St){var Qt=yt.indexOf(I.d)+1;yt[Qt]=parseFloat(yt[Qt])+St+un,yt[1]=parseFloat(yt[1])+St+un,Ko(yt)}},D.disable=function(St,Qt){if(St!==!1&&D.revert(!0,!0),D.enabled&&(D.enabled=D.isActive=!1,Qt||wt&&wt.pause(),At=0,U&&(U.uncache=1),ct&&gn(s,"refreshInit",ct),$&&($.pause(),F.tween&&F.tween.kill()&&(F.tween=0)),!z)){for(var Wt=he.length;Wt--;)if(he[Wt].scroller===O&&he[Wt]!==D)return;gn(O,"resize",pl),z||gn(O,"scroll",qo)}},D.kill=function(St,Qt){D.disable(St,Qt),wt&&!Qt&&wt.kill(),l&&delete Fd[l];var Wt=he.indexOf(D);Wt>=0&&he.splice(Wt,1),Wt===Qn&&ch>0&&Qn--,Wt=0,he.forEach(function(se){return se.scroller===D.scroller&&(Wt=1)}),Wt||ti||(D.scroll.rec=0),i&&(i.scrollTrigger=null,St&&i.revert({kill:!1}),Qt||i.kill()),G&&[G,B,P,Q].forEach(function(se){return se.parentNode&&se.parentNode.removeChild(se)}),Sl===D&&(Sl=0),f&&(U&&(U.uncache=1),Wt=0,he.forEach(function(se){return se.pin===f&&Wt++}),Wt||(U.spacer=0)),n.onKill&&n.onKill(D)},he.push(D),D.enable(!1,!1),Ut&&Ut(D),i&&i.add&&!dt){var Jt=D.update;D.update=function(){D.update=Jt,ce.cache++,ft||R||D.refresh()},Gt.delayedCall(.01,D.update),dt=.01,ft=R=0}else D.refresh();f&&GS()},s.register=function(n){return Zo||(Gt=n||D0(),L0()&&window.document&&s.enable(),Zo=ul),Zo},s.defaults=function(n){if(n)for(var i in n)nh[i]=n[i];return nh},s.disable=function(n,i){ul=0,he.forEach(function(o){return o[i?"kill":"disable"](n)}),gn(de,"wheel",qo),gn(we,"scroll",qo),clearInterval(Kc),gn(we,"touchcancel",ps),gn(Se,"touchstart",ps),th(gn,we,"pointerdown,touchstart,mousedown",m0),th(gn,we,"pointerup,touchend,mouseup",g0),fh.kill(),Qc(gn);for(var r=0;r<ce.length;r+=3)eh(gn,ce[r],ce[r+1]),eh(gn,ce[r],ce[r+2])},s.enable=function(){if(de=window,we=document,bi=we.documentElement,Se=we.body,Gt){if(Ml=Gt.utils.toArray,ml=Gt.utils.clamp,Ud=Gt.core.context||ps,Ad=Gt.core.suppressOverwrites||ps,Vd=de.history.scrollRestoration||"auto",Bd=de.pageYOffset||0,Gt.core.globals("ScrollTrigger",s),Se){ul=1,Jo=document.createElement("div"),Jo.style.height="100vh",Jo.style.position="absolute",G0(),OS(),Je.register(Gt),s.isTouch=Je.isTouch,gr=Je.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nd=Je.isTouch===1,_n(de,"wheel",qo),zd=[de,we,bi,Se],Gt.matchMedia?(s.matchMedia=function(h){var d=Gt.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Gt.addEventListener("matchMediaInit",function(){V0(),qd()}),Gt.addEventListener("matchMediaRevert",function(){return z0()}),Gt.addEventListener("matchMedia",function(){no(0,1),lo("matchMedia")}),Gt.matchMedia().add("(orientation: portrait)",function(){return Pd(),Pd})):console.warn("Requires GSAP 3.11.0 or later"),Pd(),_n(we,"scroll",qo);var n=Se.hasAttribute("style"),i=Se.style,r=i.borderTopStyle,o=Gt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Vs(Se),sn.m=Math.round(a.top+sn.sc())||0,On.m=Math.round(a.left+On.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Se.setAttribute("style",""),Se.removeAttribute("style")),Kc=setInterval(y0,250),Gt.delayedCall(.5,function(){return jc=0}),_n(we,"touchcancel",ps),_n(Se,"touchstart",ps),th(_n,we,"pointerdown,touchstart,mousedown",m0),th(_n,we,"pointerup,touchend,mouseup",g0),Dd=Gt.utils.checkPrefix("transform"),hh.push(Dd),Zo=Bn(),fh=Gt.delayedCall(.2,no).pause(),$o=[we,"visibilitychange",function(){var h=de.innerWidth,d=de.innerHeight;we.hidden?(u0=h,f0=d):(u0!==h||f0!==d)&&pl()},we,"DOMContentLoaded",no,de,"load",no,de,"resize",pl],Qc(_n),he.forEach(function(h){return h.enable(0,1)}),l=0;l<ce.length;l+=3)eh(gn,ce[l],ce[l+1]),eh(gn,ce[l],ce[l+2])}else if(we){var c=function h(){s.enable(),we.removeEventListener("DOMContentLoaded",h)};we.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(Cd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Kc)||(Kc=i)&&setInterval(y0,i),"ignoreMobileResize"in n&&(Nd=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Qc(gn)||Qc(_n,n.autoRefreshEvents||"none"),R0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Kn(n),o=ce.indexOf(r),a=oo(r);~o&&ce.splice(o,a?6:2),i&&(a?Wi.unshift(de,i,Se,i,bi,i):Wi.unshift(r,i))},s.clearMatchMedia=function(n){he.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(Mi(n)?Kn(n):n).getBoundingClientRect(),a=o[r?io:so]*i||0;return r?o.right-a>0&&o.left+a<de.innerWidth:o.bottom-a>0&&o.top+a<de.innerHeight},s.positionInViewport=function(n,i,r){Mi(n)&&(n=Kn(n));var o=n.getBoundingClientRect(),a=o[r?io:so],l=i==null?a/2:i in ph?ph[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/de.innerWidth:(o.top+l)/de.innerHeight},s.killAll=function(n){if(he.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=ao.killAll||[];ao={},i.forEach(function(r){return r()})}},s})();ie.version="3.15.0";ie.saveStyles=function(s){return s?Ml(s).forEach(function(t){if(t&&t.style){var e=Si.indexOf(t);e>=0&&Si.splice(e,5),Si.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Gt.core.getCache(t),Ud())}}):Si};ie.revert=function(s,t){return qd(!s,t)};ie.create=function(s,t){return new ie(s,t)};ie.refresh=function(s){return s?pl(!0):(Zo||ie.register())&&no(!0)};ie.update=function(s){return++ce.cache&&Hs(s===!0?2:0)};ie.clearScrollMemory=H0;ie.maxScroll=function(s,t){return ms(s,t?On:sn)};ie.getScrollFunc=function(s,t){return ks(Kn(s),t?On:sn)};ie.getById=function(s){return Fd[s]};ie.getAll=function(){return he.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ie.isScrolling=function(){return!!Bi};ie.snapDirectional=Yd;ie.addEventListener=function(s,t){var e=ao[s]||(ao[s]=[]);~e.indexOf(t)||e.push(t)};ie.removeEventListener=function(s,t){var e=ao[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};ie.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Gt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&kn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return kn(r)&&(r=r(),_n(ie,"refresh",function(){return r=t.batchMax()})),Ml(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(ie.create(c))}),e};var T0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Ld=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Je.isTouch?" pinch-zoom":""):"none",t===bi&&s(Se,e)},oh={auto:1,scroll:1},ZS=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Gt.core.getCache(r),a=Bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Se&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(oh[(l=Fi(r)).overflowY]||oh[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!oo(r)&&(oh[(l=Fi(r)).overflowY]||oh[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},X0=function(t,e,n,i){return Je.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&ZS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(we,Je.eventTypes[0],A0,!1,!0)},onDisable:function(){return gn(we,Je.eventTypes[0],A0,!0)}})},$S=/(input|label|select|textarea)/i,E0,A0=function(t){var e=$S.test(t.target.tagName);(e||E0)&&(t._gsapAllow=!0,E0=e)},JS=function(t){eo(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Kn(t.target)||bi,h=Gt.core.globals().ScrollSmoother,d=h&&h.get(),u=gr&&(t.content&&Kn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ks(c,sn),p=ks(c,On),_=1,g=(Je.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,m=0,M=kn(i)?function(){return i(a)}:function(){return i||2.8},S,x,b=X0(c,t.type,!0,r),T=function(){return x=!1},A=ps,y=ps,E=function(){l=ms(c,sn),y=ml(gr?1:0,l),n&&(A=ml(0,ms(c,On))),S=ro},I=function(){u._gsap.y=fl(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},H=function(){if(x){requestAnimationFrame(T);var Y=fl(a.deltaY/2),it=y(f.v-Y);if(u&&it!==f.v+f.offset){f.offset=it-f.v;var D=fl((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+D+", 0, 1)",u._gsap.y=D+"px",f.cacheID=ce.cache,Hs()}return!0}f.offset&&I(),x=!0},O,j,z,q,nt=function(){E(),O.isActive()&&O.vars.scrollY>l&&(f()>l?O.progress(1)&&f(l):O.resetTo("scrollY",l))};return u&&Gt.set(u,{y:"+=0"}),t.ignoreCheck=function(X){return gr&&X.type==="touchmove"&&H(X)||_>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},t.onPress=function(){x=!1;var X=_;_=fl((de.visualViewport&&de.visualViewport.scale||1)/g),O.pause(),X!==_&&Ld(c,_>1.01?!0:n?!1:"x"),j=p(),z=f(),E(),S=ro},t.onRelease=t.onGestureStart=function(X,Y){if(f.offset&&I(),!Y)q.restart(!0);else{ce.cache++;var it=M(),D,ct;n&&(D=p(),ct=D+it*.05*-X.velocityX/.227,it*=T0(p,D,ct,ms(c,On)),O.vars.scrollX=A(ct)),D=f(),ct=D+it*.05*-X.velocityY/.227,it*=T0(f,D,ct,ms(c,sn)),O.vars.scrollY=y(ct),O.invalidate().duration(it).play(.01),(gr&&O.vars.scrollY>=l||D>=l-1)&&Gt.to({},{onUpdate:nt,duration:it})}o&&o(X)},t.onWheel=function(){O._ts&&O.pause(),Bn()-m>1e3&&(S=0,m=Bn())},t.onChange=function(X,Y,it,D,ct){if(ro!==S&&E(),Y&&n&&p(A(D[2]===Y?j+(X.startX-X.x):p()+Y-D[1])),it){f.offset&&I();var Pt=ct[2]===it,Ct=Pt?z+X.startY-X.y:f()+it-ct[1],kt=y(Ct);Pt&&Ct!==kt&&(z+=kt-Ct),f(kt)}(it||Y)&&Hs()},t.onEnable=function(){Ld(c,n?!1:"x"),ie.addEventListener("refresh",nt),_n(de,"resize",nt),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),b.enable()},t.onDisable=function(){Ld(c,!0),gn(de,"resize",nt),ie.removeEventListener("refresh",nt),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new Je(t),a.iOS=gr,gr&&!f()&&f(1),gr&&Gt.ticker.add(ps),q=a._dc,O=Gt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:W0(f,f(),function(){return O.pause()})},onUpdate:Hs,onComplete:q.vars.onComplete}),a};ie.sort=function(s){if(kn(s))return he.sort(s);var t=de.pageYOffset||0;return ie.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),he.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ie.observe=function(s){return new Je(s)};ie.normalizeScroll=function(s){if(typeof s>"u")return jn;if(s===!0&&jn)return jn.enable();if(s===!1){jn&&jn.kill(),jn=s;return}var t=s instanceof Je?s:JS(s);return jn&&jn.target===t.target&&jn.kill(),oo(t.target)&&(jn=t),t};ie.core={_getVelocityProp:Jc,_inputObserver:X0,_scrollers:ce,_proxies:Wi,bridge:{ss:function(){Bi||lo("scrollStart"),Bi=Bn()},ref:function(){return Fn}}};D0()&&Gt.registerPlugin(ie);var Y0="1.3.26";function $0(s,t,e){return Math.max(s,Math.min(t,e))}function KS(s,t,e){return(1-e)*s+e*t}function jS(s,t,e,n){return KS(s,t,1-Math.exp(-e*n))}function QS(s,t){return(s%t+t)%t}var tM=class{constructor(){Zt(this,"isRunning",!1);Zt(this,"value",0);Zt(this,"from",0);Zt(this,"to",0);Zt(this,"currentTime",0);Zt(this,"lerp");Zt(this,"duration");Zt(this,"easing");Zt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=$0(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=jS(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function eM(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var nM=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Zt(this,"width",0);Zt(this,"height",0);Zt(this,"scrollHeight",0);Zt(this,"scrollWidth",0);Zt(this,"debouncedResize");Zt(this,"wrapperResizeObserver");Zt(this,"contentResizeObserver");Zt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Zt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Zt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=eM(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},J0=class{constructor(){Zt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},iM=100/6,_r={passive:!1};function q0(s,t){return s===1?iM:s===2?t:1}var sM=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Zt(this,"touchStart",{x:0,y:0});Zt(this,"lastDelta",{x:0,y:0});Zt(this,"window",{width:0,height:0});Zt(this,"emitter",new J0);Zt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Zt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Zt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Zt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=q0(n,this.window.width),r=q0(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Zt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,_r),this.element.addEventListener("touchstart",this.onTouchStart,_r),this.element.addEventListener("touchmove",this.onTouchMove,_r),this.element.addEventListener("touchend",this.onTouchEnd,_r)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,_r),this.element.removeEventListener("touchstart",this.onTouchStart,_r),this.element.removeEventListener("touchmove",this.onTouchMove,_r),this.element.removeEventListener("touchend",this.onTouchEnd,_r)}},Z0=s=>Math.min(1,1.001-2**(-10*s)),K0=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:_=!0,prevent:g,virtualScroll:m,overscroll:M=!0,autoRaf:S=!1,anchors:x=!1,autoToggle:b=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:A=!1,naiveDimensions:y=A,stopInertiaOnNavigate:E=!1,respectReducedMotion:I=!0}={}){Zt(this,"_isScrolling",!1);Zt(this,"_isStopped",!1);Zt(this,"_isLocked",!1);Zt(this,"_preventNextNativeScrollEvent",!1);Zt(this,"_resetVelocityTimeout",null);Zt(this,"_rafId",null);Zt(this,"_isDraggingSelection",!1);Zt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Zt(this,"isTouching");Zt(this,"isIos");Zt(this,"time",0);Zt(this,"userData",{});Zt(this,"lastVelocity",0);Zt(this,"velocity",0);Zt(this,"direction",0);Zt(this,"options");Zt(this,"targetScroll");Zt(this,"animatedScroll");Zt(this,"animate",new tM);Zt(this,"emitter",new J0);Zt(this,"dimensions");Zt(this,"virtualScroll");Zt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Zt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Zt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Zt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Zt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Zt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Zt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Zt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Y0,window.lenis||(window.lenis={}),window.lenis.version=Y0,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Z0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:_,prevent:g,virtualScroll:m,overscroll:M,autoRaf:S,anchors:x,autoToggle:b,allowNestedScroll:T,naiveDimensions:y,stopInertiaOnNavigate:E,respectReducedMotion:I},this.dimensions=new nM(s,t,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new sM(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof HTMLElement&&u?.nodeType&&(p=u),p){if(this.options.wrapper!==window){let x=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?x.left:x.top}let _=p.getBoundingClientRect(),g=getComputedStyle(p),m=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),M=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);u=(this.isHorizontal?_.left:_.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(S)?0:S)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=$0(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=Z0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();let T=window.getComputedStyle(s);if(i.computedStyle=T,r=["auto","overlay","scroll"].includes(T.overflowX),o=["auto","overlay","scroll"].includes(T.overflowY),c=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",g,m,M,S,x,b;if(_==="horizontal")g=Math.round(s.scrollLeft),m=d-f,M=t,S=r,x=a,b=c;else if(_==="vertical")g=Math.round(s.scrollTop),m=u-p,M=e,S=o,x=l,b=h;else return!1;return!b&&(g>=m||g<=0)?!0:(M>0?g<m:g>0)&&S&&x}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?QS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};var O_=0,Np=1,F_=2;var ac=1,B_=2,Ir=3,Lr=0,si=1,ri=2,ws=0,Na=1,Up=2,Op=3,Fp=4,k_=5;var Mo=100,z_=101,V_=102,H_=103,G_=104,W_=200,X_=201,Y_=202,q_=203,Bp=204,kp=205,Z_=206,$_=207,J_=208,K_=209,j_=210,Q_=211,tx=212,ex=213,nx=214,Wh=0,Xh=1,Yh=2,ma=3,qh=4,Zh=5,$h=6,Jh=7,zp=0,ix=1,sx=2,es=0,Vp=1,Hp=2,Gp=3,Wp=4,Xp=5,Yp=6,qp=7;var Zp=300,Dr=301,bo=302,Pu=303,Iu=304,lc=306,ys=1e3,zi=1001,ga=1002,vn=1003,rx=1004;var cc=1005;var En=1006,Lu=1007;var Nr=1008;var mi=1009,$p=1010,Jp=1011,Ua=1012,Du=1013,ns=1014,is=1015,ss=1016,Nu=1017,Uu=1018,Oa=1020,Kp=35902,jp=35899,Qp=1021,tm=1022,Hi=1023,vs=1026,Ur=1027,em=1028,Ou=1029,Or=1030,Fu=1031;var Bu=1033,hc=33776,uc=33777,fc=33778,dc=33779,ku=35840,zu=35841,Vu=35842,Hu=35843,Gu=36196,Wu=37492,Xu=37496,Yu=37488,qu=37489,pc=37490,Zu=37491,$u=37808,Ju=37809,Ku=37810,ju=37811,Qu=37812,tf=37813,ef=37814,nf=37815,sf=37816,rf=37817,of=37818,af=37819,lf=37820,cf=37821,hf=36492,uf=36494,ff=36495,df=36283,pf=36284,mc=36285,mf=36286;var Nl=2300,Kh=2301,Hh=2302,vp=2303,Sp=2400,Mp=2401,bp=2402;var ox=3200;var gf=0,ax=1,Qs="",ni="srgb",Ul="srgb-linear",Ol="linear",Me="srgb";var Gh=7680;var lx=519,cx=512,hx=513,ux=514,_f=515,fx=516,dx=517,xf=518,px=519,nm=35044;var im="300 es",Ji=2e3,_a=2001;function rM(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function oM(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Fl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mx(){let s=Fl("canvas");return s.style.display="block",s}var j0={},xa=null;function Bl(...s){let t="THREE."+s.shift();xa?xa("log",t,...s):console.log(t,...s)}function gx(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function te(...s){s=gx(s);let t="THREE."+s.shift();if(xa)xa("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function ee(...s){s=gx(s);let t="THREE."+s.shift();if(xa)xa("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function po(...s){let t=s.join(" ");t in j0||(j0[t]=!0,te(...s))}function _x(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var xx={[Wh]:Xh,[Yh]:$h,[qh]:Jh,[ma]:Zh,[Xh]:Wh,[$h]:Yh,[Jh]:qh,[Zh]:ma},Ss=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},zn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Q0=1234567,Pl=Math.PI/180,ya=180/Math.PI;function xs(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(zn[s&255]+zn[s>>8&255]+zn[s>>16&255]+zn[s>>24&255]+"-"+zn[t&255]+zn[t>>8&255]+"-"+zn[t>>16&15|64]+zn[t>>24&255]+"-"+zn[e&63|128]+zn[e>>8&255]+"-"+zn[e>>16&255]+zn[e>>24&255]+zn[n&255]+zn[n>>8&255]+zn[n>>16&255]+zn[n>>24&255]).toLowerCase()}function re(s,t,e){return Math.max(t,Math.min(e,s))}function sm(s,t){return(s%t+t)%t}function aM(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function lM(s,t,e){return s!==t?(e-s)/(t-s):0}function Il(s,t,e){return(1-e)*s+e*t}function cM(s,t,e,n){return Il(s,t,1-Math.exp(-e*n))}function hM(s,t=1){return t-Math.abs(sm(s,t*2)-t)}function uM(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function fM(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function dM(s,t){return s+Math.floor(Math.random()*(t-s+1))}function pM(s,t){return s+Math.random()*(t-s)}function mM(s){return s*(.5-Math.random())}function gM(s){s!==void 0&&(Q0=s);let t=Q0+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function _M(s){return s*Pl}function xM(s){return s*ya}function yM(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function vM(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function SM(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function MM(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),f=r((n-t)/2),p=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*p,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*p,a*c);break;case"ZYZ":s.set(l*p,l*f,a*h,a*c);break;default:te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function $i(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var rm={DEG2RAD:Pl,RAD2DEG:ya,generateUUID:xs,clamp:re,euclideanModulo:sm,mapLinear:aM,inverseLerp:lM,lerp:Il,damp:cM,pingpong:hM,smoothstep:uM,smootherstep:fM,randInt:dM,randFloat:pM,randFloatSpread:mM,seededRandom:gM,degToRad:_M,radToDeg:xM,isPowerOfTwo:yM,ceilPowerOfTwo:vM,floorPowerOfTwo:SM,setQuaternionFromProperEuler:MM,normalize:Te,denormalize:$i},um=class um{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};um.prototype.isVector2=!0;var mt=um,Ms=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],_=r[o+3];if(d!==_||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*_;g<0&&(u=-u,f=-f,p=-p,_=-_,g=-g);let m=1-a;if(g<.9995){let M=Math.acos(g),S=Math.sin(M);m=Math.sin(m*M)/S,a=Math.sin(a*M)/S,l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a}else{l=l*m+u*a,c=c*m+f*a,h=h*m+p*a,d=d*m+_*a;let M=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=M,c*=M,h*=M,d*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:te("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},fm=class fm{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(t_.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(t_.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zd.copy(this).projectOnVector(t),this.sub(Zd)}reflect(t){return this.sub(Zd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};fm.prototype.isVector3=!0;var W=fm,Zd=new W,t_=new Ms,dm=class dm{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],_=i[0],g=i[3],m=i[6],M=i[1],S=i[4],x=i[7],b=i[2],T=i[5],A=i[8];return r[0]=o*_+a*M+l*b,r[3]=o*g+a*S+l*T,r[6]=o*m+a*x+l*A,r[1]=c*_+h*M+d*b,r[4]=c*g+h*S+d*T,r[7]=c*m+h*x+d*A,r[2]=u*_+f*M+p*b,r[5]=u*g+f*S+p*T,r[8]=u*m+f*x+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/p;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($d.makeScale(t,e)),this}rotate(t){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($d.makeRotation(-t)),this}translate(t,e){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($d.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};dm.prototype.isMatrix3=!0;var jt=dm,$d=new jt,e_=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),n_=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function bM(){let s={enabled:!0,workingColorSpace:Ul,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Me&&(i.r=$s(i.r),i.g=$s(i.g),i.b=$s(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Me&&(i.r=pa(i.r),i.g=pa(i.g),i.b=pa(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Qs?Ol:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Ul]:{primaries:t,whitePoint:n,transfer:Ol,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:t,whitePoint:n,transfer:Me,toXYZ:e_,fromXYZ:n_,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}var ge=bM();function $s(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Qo,jh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Qo===void 0&&(Qo=Fl("canvas")),Qo.width=t.width,Qo.height=t.height;let i=Qo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=Qo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fl("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=$s(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor($s(e[n]/255)*255):e[n]=$s(e[n]);return{data:e,width:t.width,height:t.height}}else return te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wM=0,va=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Jd(i[o].image)):r.push(Jd(i[o]))}else r=Jd(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Jd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(te("Texture: Unable to serialize Texture."),{})}var TM=0,Kd=new W,ii=class s extends Ss{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=zi,i=zi,r=En,o=Nr,a=Hi,l=mi,c=s.DEFAULT_ANISOTROPY,h=Qs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=xs(),this.name="",this.source=new va(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new mt(0,0),this.repeat=new mt(1,1),this.center=new mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Kd).x}get height(){return this.source.getSize(Kd).y}get depth(){return this.source.getSize(Kd).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){te(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Zp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ys:t.x=t.x-Math.floor(t.x);break;case zi:t.x=t.x<0?0:1;break;case ga:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ys:t.y=t.y-Math.floor(t.y);break;case zi:t.y=t.y<0?0:1;break;case ga:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=Zp;ii.DEFAULT_ANISOTROPY=1;var pm=class pm{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(f+1)/2,b=(m+1)/2,T=(h+u)/4,A=(d+_)/4,y=(p+g)/4;return S>x&&S>b?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=T/n,r=A/n):x>b?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=T/i,r=y/i):b<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(b),n=A/r,i=y/r),this.set(n,i,r,e),this}let M=Math.sqrt((g-p)*(g-p)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(g-p)/M,this.y=(d-_)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};pm.prototype.isVector4=!0;var be=pm,Qh=class extends Ss{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let i={width:t,height:e,depth:n.depth},r=new ii(i),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new va(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},pi=class extends Qh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},kl=class extends ii{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tu=class extends ii{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ru=class Ru{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,_,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ru().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/ta.setFromMatrixColumn(t,0).length(),r=1/ta.setFromMatrixColumn(t,1).length(),o=1/ta.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u+_*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,_=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-_*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(EM,t,AM)}lookAt(t,e,n){let i=this.elements;return wi.subVectors(t,e),wi.lengthSq()===0&&(wi.z=1),wi.normalize(),xr.crossVectors(n,wi),xr.lengthSq()===0&&(Math.abs(n.z)===1?wi.x+=1e-4:wi.z+=1e-4,wi.normalize(),xr.crossVectors(n,wi)),xr.normalize(),gh.crossVectors(wi,xr),i[0]=xr.x,i[4]=gh.x,i[8]=wi.x,i[1]=xr.y,i[5]=gh.y,i[9]=wi.y,i[2]=xr.z,i[6]=gh.z,i[10]=wi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],_=n[6],g=n[10],m=n[14],M=n[3],S=n[7],x=n[11],b=n[15],T=i[0],A=i[4],y=i[8],E=i[12],I=i[1],H=i[5],O=i[9],j=i[13],z=i[2],q=i[6],nt=i[10],X=i[14],Y=i[3],it=i[7],D=i[11],ct=i[15];return r[0]=o*T+a*I+l*z+c*Y,r[4]=o*A+a*H+l*q+c*it,r[8]=o*y+a*O+l*nt+c*D,r[12]=o*E+a*j+l*X+c*ct,r[1]=h*T+d*I+u*z+f*Y,r[5]=h*A+d*H+u*q+f*it,r[9]=h*y+d*O+u*nt+f*D,r[13]=h*E+d*j+u*X+f*ct,r[2]=p*T+_*I+g*z+m*Y,r[6]=p*A+_*H+g*q+m*it,r[10]=p*y+_*O+g*nt+m*D,r[14]=p*E+_*j+g*X+m*ct,r[3]=M*T+S*I+x*z+b*Y,r[7]=M*A+S*H+x*q+b*it,r[11]=M*y+S*O+x*nt+b*D,r[15]=M*E+S*j+x*X+b*ct,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],_=t[7],g=t[11],m=t[15],M=l*f-c*u,S=a*f-c*d,x=a*u-l*d,b=o*f-c*h,T=o*u-l*h,A=o*d-a*h;return e*(_*M-g*S+m*x)-n*(p*M-g*b+m*T)+i*(p*S-_*b+m*A)-r*(p*x-_*T+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],_=t[13],g=t[14],m=t[15],M=e*a-n*o,S=e*l-i*o,x=e*c-r*o,b=n*l-i*a,T=n*c-r*a,A=i*c-r*l,y=h*_-d*p,E=h*g-u*p,I=h*m-f*p,H=d*g-u*_,O=d*m-f*_,j=u*m-f*g,z=M*j-S*O+x*H+b*I-T*E+A*y;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/z;return t[0]=(a*j-l*O+c*H)*q,t[1]=(i*O-n*j-r*H)*q,t[2]=(_*A-g*T+m*b)*q,t[3]=(u*T-d*A-f*b)*q,t[4]=(l*I-o*j-c*E)*q,t[5]=(e*j-i*I+r*E)*q,t[6]=(g*x-p*A-m*S)*q,t[7]=(h*A-u*x+f*S)*q,t[8]=(o*O-a*I+c*y)*q,t[9]=(n*I-e*O-r*y)*q,t[10]=(p*T-_*x+m*M)*q,t[11]=(d*x-h*T-f*M)*q,t[12]=(a*E-o*H-l*y)*q,t[13]=(e*H-n*E+i*y)*q,t[14]=(_*S-p*b-g*M)*q,t[15]=(h*b-d*S+u*M)*q,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,_=o*h,g=o*d,m=a*d,M=l*c,S=l*h,x=l*d,b=n.x,T=n.y,A=n.z;return i[0]=(1-(_+m))*b,i[1]=(f+x)*b,i[2]=(p-S)*b,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+m))*T,i[6]=(g+M)*T,i[7]=0,i[8]=(p+S)*A,i[9]=(g-M)*A,i[10]=(1-(u+_))*A,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ta.set(i[0],i[1],i[2]).length(),a=ta.set(i[4],i[5],i[6]).length(),l=ta.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Xi.copy(this);let c=1/o,h=1/a,d=1/l;return Xi.elements[0]*=c,Xi.elements[1]*=c,Xi.elements[2]*=c,Xi.elements[4]*=h,Xi.elements[5]*=h,Xi.elements[6]*=h,Xi.elements[8]*=d,Xi.elements[9]*=d,Xi.elements[10]*=d,e.setFromRotationMatrix(Xi),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Ji,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,_;if(l)p=r/(o-r),_=o*r/(o-r);else if(a===Ji)p=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===_a)p=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ji,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,_;if(l)p=1/(o-r),_=o/(o-r);else if(a===Ji)p=-2/(o-r),_=-(o+r)/(o-r);else if(a===_a)p=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ru.prototype.isMatrix4=!0;var Ae=Ru,ta=new W,Xi=new Ae,EM=new W(0,0,0),AM=new W(1,1,1),xr=new W,gh=new W,wi=new W,i_=new Ae,s_=new Ms,Js=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:te("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return i_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(i_,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return s_.setFromEuler(this),this.setFromQuaternion(s_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Js.DEFAULT_ORDER="XYZ";var zl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},CM=0,r_=new W,ea=new Ms,Gs=new Ae,_h=new W,wl=new W,RM=new W,PM=new Ms,o_=new W(1,0,0),a_=new W(0,1,0),l_=new W(0,0,1),c_={type:"added"},IM={type:"removed"},na={type:"childadded",child:null},jd={type:"childremoved",child:null},Sn=class s extends Ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new W,e=new Js,n=new Ms,i=new W(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new jt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ea.setFromAxisAngle(t,e),this.quaternion.multiply(ea),this}rotateOnWorldAxis(t,e){return ea.setFromAxisAngle(t,e),this.quaternion.premultiply(ea),this}rotateX(t){return this.rotateOnAxis(o_,t)}rotateY(t){return this.rotateOnAxis(a_,t)}rotateZ(t){return this.rotateOnAxis(l_,t)}translateOnAxis(t,e){return r_.copy(t).applyQuaternion(this.quaternion),this.position.add(r_.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(o_,t)}translateY(t){return this.translateOnAxis(a_,t)}translateZ(t){return this.translateOnAxis(l_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gs.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?_h.copy(t):_h.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),wl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gs.lookAt(wl,_h,this.up):Gs.lookAt(_h,wl,this.up),this.quaternion.setFromRotationMatrix(Gs),i&&(Gs.extractRotation(i.matrixWorld),ea.setFromRotationMatrix(Gs),this.quaternion.premultiply(ea.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ee("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(c_),na.child=t,this.dispatchEvent(na),na.child=null):ee("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(IM),jd.child=t,this.dispatchEvent(jd),jd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gs.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(c_),na.child=t,this.dispatchEvent(na),na.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,t,RM),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wl,PM,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Sn.DEFAULT_UP=new W(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ei=class extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}},LM={type:"move"},Sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let _ of t.hand.values()){let g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(LM)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},yx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},xh={h:0,s:0,l:0};function Qd(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ni){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=sm(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Qd(o,r,t+1/3),this.g=Qd(o,r,t),this.b=Qd(o,r,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=ni){function n(r){r!==void 0&&parseFloat(r)<1&&te("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:te("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);te("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ni){let n=yx[t.toLowerCase()];return n!==void 0?this.setHex(n,e):te("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$s(t.r),this.g=$s(t.g),this.b=$s(t.b),this}copyLinearToSRGB(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ni){return ge.workingToColorSpace(Vn.copy(this),t),Math.round(re(Vn.r*255,0,255))*65536+Math.round(re(Vn.g*255,0,255))*256+Math.round(re(Vn.b*255,0,255))}getHexString(t=ni){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Vn.copy(this),e);let n=Vn.r,i=Vn.g,r=Vn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Vn.copy(this),e),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=ni){ge.workingToColorSpace(Vn.copy(this),t);let e=Vn.r,n=Vn.g,i=Vn.b;return t!==ni?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yr),this.setHSL(yr.h+t,yr.s+e,yr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yr),t.getHSL(xh);let n=Il(yr.h,xh.h,e),i=Il(yr.s,xh.s,e),r=Il(yr.l,xh.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new ne;ne.NAMES=yx;var Ks=class extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Js,this.environmentIntensity=1,this.environmentRotation=new Js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yi=new W,Ws=new W,tp=new W,Xs=new W,ia=new W,sa=new W,h_=new W,ep=new W,np=new W,ip=new W,sp=new be,rp=new be,op=new be,br=class s{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Yi.subVectors(t,e),i.cross(Yi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Yi.subVectors(i,e),Ws.subVectors(n,e),tp.subVectors(t,e);let o=Yi.dot(Yi),a=Yi.dot(Ws),l=Yi.dot(tp),c=Ws.dot(Ws),h=Ws.dot(tp),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Xs)===null?!1:Xs.x>=0&&Xs.y>=0&&Xs.x+Xs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Xs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Xs.x),l.addScaledVector(o,Xs.y),l.addScaledVector(a,Xs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return sp.setScalar(0),rp.setScalar(0),op.setScalar(0),sp.fromBufferAttribute(t,e),rp.fromBufferAttribute(t,n),op.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(sp,r.x),o.addScaledVector(rp,r.y),o.addScaledVector(op,r.z),o}static isFrontFacing(t,e,n,i){return Yi.subVectors(n,e),Ws.subVectors(t,e),Yi.cross(Ws).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Yi.subVectors(this.c,this.b),Ws.subVectors(this.a,this.b),Yi.cross(Ws).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;ia.subVectors(i,n),sa.subVectors(r,n),ep.subVectors(t,n);let l=ia.dot(ep),c=sa.dot(ep);if(l<=0&&c<=0)return e.copy(n);np.subVectors(t,i);let h=ia.dot(np),d=sa.dot(np);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ia,o);ip.subVectors(t,r);let f=ia.dot(ip),p=sa.dot(ip);if(p>=0&&f<=p)return e.copy(r);let _=f*c-l*p;if(_<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(sa,a);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return h_.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(h_,a);let m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(ia,o).addScaledVector(sa,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ai=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(qi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(qi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=qi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,qi):qi.fromBufferAttribute(r,o),qi.applyMatrix4(t.matrixWorld),this.expandByPoint(qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yh.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yh.copy(n.boundingBox)),yh.applyMatrix4(t.matrixWorld),this.union(yh)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,qi),qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Tl),vh.subVectors(this.max,Tl),ra.subVectors(t.a,Tl),oa.subVectors(t.b,Tl),aa.subVectors(t.c,Tl),vr.subVectors(oa,ra),Sr.subVectors(aa,oa),co.subVectors(ra,aa);let e=[0,-vr.z,vr.y,0,-Sr.z,Sr.y,0,-co.z,co.y,vr.z,0,-vr.x,Sr.z,0,-Sr.x,co.z,0,-co.x,-vr.y,vr.x,0,-Sr.y,Sr.x,0,-co.y,co.x,0];return!ap(e,ra,oa,aa,vh)||(e=[1,0,0,0,1,0,0,0,1],!ap(e,ra,oa,aa,vh))?!1:(Sh.crossVectors(vr,Sr),e=[Sh.x,Sh.y,Sh.z],ap(e,ra,oa,aa,vh))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ys),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Ys=[new W,new W,new W,new W,new W,new W,new W,new W],qi=new W,yh=new Ai,ra=new W,oa=new W,aa=new W,vr=new W,Sr=new W,co=new W,Tl=new W,vh=new W,Sh=new W,ho=new W;function ap(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ho.fromArray(s,r);let a=i.x*Math.abs(ho.x)+i.y*Math.abs(ho.y)+i.z*Math.abs(ho.z),l=t.dot(ho),c=e.dot(ho),h=n.dot(ho);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new W,Mh=new mt,DM=0,Tn=class extends Ss{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:DM++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=nm,this.updateRanges=[],this.gpuType=is,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Mh.fromBufferAttribute(this,e),Mh.applyMatrix3(t),this.setXY(e,Mh.x,Mh.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$i(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$i(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$i(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$i(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vl=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Hl=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},NM=new Ai,El=new W,lp=new W,Vi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):NM.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);let e=El.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(El,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(lp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(lp)),this.expandByPoint(El.copy(t.center).sub(lp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},UM=0,ki=new Ae,cp=new Sn,la=new W,Ti=new Ai,Al=new Ai,xn=new W,Ue=class s extends Ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UM++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(rM(t)?Hl:Vl)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,e,n){return ki.makeTranslation(t,e,n),this.applyMatrix4(ki),this}scale(t,e,n){return ki.makeScale(t,e,n),this.applyMatrix4(ki),this}lookAt(t){return cp.lookAt(t),cp.updateMatrix(),this.applyMatrix4(cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(la).negate(),this.translate(la.x,la.y,la.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Ti.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,Ti.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,Ti.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(Ti.min),this.boundingBox.expandByPoint(Ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ee('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ee("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(Ti.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Al.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(Ti.min,Al.min),Ti.expandByPoint(xn),xn.addVectors(Ti.max,Al.max),Ti.expandByPoint(xn)):(Ti.expandByPoint(Al.min),Ti.expandByPoint(Al.max))}Ti.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)xn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(xn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(la.fromBufferAttribute(t,c),xn.add(la)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&ee('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ee("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let y=0;y<n.count;y++)a[y]=new W,l[y]=new W;let c=new W,h=new W,d=new W,u=new mt,f=new mt,p=new mt,_=new W,g=new W;function m(y,E,I){c.fromBufferAttribute(n,y),h.fromBufferAttribute(n,E),d.fromBufferAttribute(n,I),u.fromBufferAttribute(r,y),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,I),h.sub(c),d.sub(c),f.sub(u),p.sub(u);let H=1/(f.x*p.y-p.x*f.y);isFinite(H)&&(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-f.y).multiplyScalar(H),g.copy(d).multiplyScalar(f.x).addScaledVector(h,-p.x).multiplyScalar(H),a[y].add(_),a[E].add(_),a[I].add(_),l[y].add(g),l[E].add(g),l[I].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let y=0,E=M.length;y<E;++y){let I=M[y],H=I.start,O=I.count;for(let j=H,z=H+O;j<z;j+=3)m(t.getX(j+0),t.getX(j+1),t.getX(j+2))}let S=new W,x=new W,b=new W,T=new W;function A(y){b.fromBufferAttribute(i,y),T.copy(b);let E=a[y];S.copy(E),S.sub(b.multiplyScalar(b.dot(E))).normalize(),x.crossVectors(T,E);let H=x.dot(l[y])<0?-1:1;o.setXYZW(y,S.x,S.y,S.z,H)}for(let y=0,E=M.length;y<E;++y){let I=M[y],H=I.start,O=I.count;for(let j=H,z=H+O;j<z;j+=3)A(t.getX(j+0)),A(t.getX(j+1)),A(t.getX(j+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new W,r=new W,o=new W,a=new W,l=new W,c=new W,h=new W,d=new W;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Tn(u,h,d)}if(this.index===null)return te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},eu=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=nm,this.updateRanges=[],this.version=0,this.uuid=xs()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xs()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},ei=new W,Ki=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.applyMatrix4(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.applyNormalMatrix(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ei.fromBufferAttribute(this,e),ei.transformDirection(t),this.setXYZ(e,ei.x,ei.y,ei.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=$i(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Te(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=$i(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=$i(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=$i(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=$i(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Bl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Tn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Bl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hp=new W,OM=new W,FM=new jt,Zi=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=hp.subVectors(n,e).cross(OM.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(hp),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||FM.getNormalMatrix(t),i=this.coplanarPoint(hp).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},BM=0,ji=class extends Ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:BM++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Na,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bp,this.blendDst=kp,this.blendEquation=Mo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=ma,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gh,this.stencilZFail=Gh,this.stencilZPass=Gh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){te(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){te(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new ne().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Zi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new mt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new mt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var qs=new W,up=new W,bh=new W,wh=new W,Ma=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qs)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qs.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qs.copy(this.origin).addScaledVector(this.direction,e),qs.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){up.copy(t).add(e).multiplyScalar(.5),bh.copy(e).sub(t).normalize(),wh.copy(this.origin).sub(up);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bh),a=wh.dot(this.direction),l=-wh.dot(bh),c=wh.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let _=1/h;d*=_,u*=_,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(up).addScaledVector(bh,u),f}intersectSphere(t,e){if(t.radius<0)return null;qs.subVectors(t.center,this.origin);let n=qs.dot(this.direction),i=qs.dot(qs)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qs)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,_=e.y-o.y,g=e.z-o.z,m=n.x-o.x,M=n.y-o.y,S=n.z-o.z,x=Math.abs(l),b=Math.abs(c),T=Math.abs(h),A,y,E,I,H,O,j,z,q,nt,X,Y;if(x>=b&&x>=T?(E=l,O=d,q=p,Y=m,l>=0?(A=c,y=h,I=u,H=f,j=_,z=g,nt=M,X=S):(A=h,y=c,I=f,H=u,j=g,z=_,nt=S,X=M)):b>=T?(E=c,O=u,q=_,Y=M,c>=0?(A=h,y=l,I=f,H=d,j=g,z=p,nt=S,X=m):(A=l,y=h,I=d,H=f,j=p,z=g,nt=m,X=S)):(E=h,O=f,q=g,Y=S,h>=0?(A=l,y=c,I=d,H=u,j=p,z=_,nt=m,X=M):(A=c,y=l,I=u,H=d,j=_,z=p,nt=M,X=m)),E===0)return null;let it=A/E,D=y/E,ct=1/E,Pt=I-it*O,Ct=H-D*O,kt=j-it*q,Bt=z-D*q,qt=nt-it*Y,k=X-D*Y,F=qt*Bt-k*kt,U=Pt*k-Ct*qt,N=kt*Ct-Bt*Pt;if(i){if(F<0||U<0||N<0)return null}else if((F<0||U<0||N<0)&&(F>0||U>0||N>0))return null;let V=F+U+N;if(V===0)return null;let st=ct*(F*O+U*q+N*Y);return(V>0?st<0:st>0)?null:this.at(st/V,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wr=class extends ji{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Js,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},u_=new Ae,uo=new Ma,Th=new Vi,f_=new W,Eh=new W,Ah=new W,Ch=new W,fp=new W,Rh=new W,d_=new W,Ph=new W,Le=class extends Sn{constructor(t=new Ue,e=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Rh.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(fp.fromBufferAttribute(d,t),o?Rh.addScaledVector(fp,h):Rh.addScaledVector(fp.sub(e),h))}e.add(Rh)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Th.copy(n.boundingSphere),Th.applyMatrix4(r),uo.copy(t.ray).recast(t.near),!(Th.containsPoint(uo.origin)===!1&&(uo.intersectSphere(Th,f_)===null||uo.origin.distanceToSquared(f_)>(t.far-t.near)**2))&&(u_.copy(r).invert(),uo.copy(t.ray).applyMatrix4(u_),!(n.boundingBox!==null&&uo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,uo)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,b=S;x<b;x+=3){let T=a.getX(x),A=a.getX(x+1),y=a.getX(x+2);i=Ih(this,m,t,n,c,h,d,T,A,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);i=Ih(this,o,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,_=u.length;p<_;p++){let g=u[p],m=o[g.materialIndex],M=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let x=M,b=S;x<b;x+=3){let T=x,A=x+1,y=x+2;i=Ih(this,m,t,n,c,h,d,T,A,y),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=p,m=_;g<m;g+=3){let M=g,S=g+1,x=g+2;i=Ih(this,o,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}};function kM(s,t,e,n,i,r,o,a){let l;if(t.side===si?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===Lr,a),l===null)return null;Ph.copy(a),Ph.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Ph);return c<e.near||c>e.far?null:{distance:c,point:Ph.clone(),object:s}}function Ih(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Eh),s.getVertexPosition(l,Ah),s.getVertexPosition(c,Ch);let h=kM(s,t,e,n,Eh,Ah,Ch,d_);if(h){let d=new W;br.getBarycoord(d_,Eh,Ah,Ch,d),i&&(h.uv=br.getInterpolatedAttribute(i,a,l,c,d,new mt)),r&&(h.uv1=br.getInterpolatedAttribute(r,a,l,c,d,new mt)),o&&(h.normal=br.getInterpolatedAttribute(o,a,l,c,d,new W),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new W,materialIndex:0};br.getNormal(Eh,Ah,Ch,u.normal),h.face=u,h.barycoord=d}return h}var nu=class extends ii{constructor(t=null,e=1,n=1,i,r,o,a,l,c=vn,h=vn,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ba=class extends Tn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}};var fo=new Vi,zM=new mt(.5,.5),Lh=new W,wa=class{constructor(t=new Zi,e=new Zi,n=new Zi,i=new Zi,r=new Zi,o=new Zi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ji,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],_=r[9],g=r[10],m=r[11],M=r[12],S=r[13],x=r[14],b=r[15];if(i[0].setComponents(c-o,f-h,m-p,b-M).normalize(),i[1].setComponents(c+o,f+h,m+p,b+M).normalize(),i[2].setComponents(c+a,f+d,m+_,b+S).normalize(),i[3].setComponents(c-a,f-d,m-_,b-S).normalize(),n)i[4].setComponents(l,u,g,x).normalize(),i[5].setComponents(c-l,f-u,m-g,b-x).normalize();else if(i[4].setComponents(c-l,f-u,m-g,b-x).normalize(),e===Ji)i[5].setComponents(c+l,f+u,m+g,b+x).normalize();else if(e===_a)i[5].setComponents(l,u,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fo.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fo.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fo)}intersectsSprite(t){fo.center.set(0,0,0);let e=zM.distanceTo(t.center);return fo.radius=.7071067811865476+e,fo.applyMatrix4(t.matrixWorld),this.intersectsSphere(fo)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Lh.x=i.normal.x>0?t.max.x:t.min.x,Lh.y=i.normal.y>0?t.max.y:t.min.y,Lh.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lh)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ta=class extends ji{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},iu=new W,su=new W,p_=new Ae,Cl=new Ma,Dh=new Vi,dp=new W,m_=new W,ru=class extends Sn{constructor(t=new Ue,e=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)iu.fromBufferAttribute(e,i-1),su.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=iu.distanceTo(su);t.setAttribute("lineDistance",new pe(n,1))}else te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dh.copy(n.boundingSphere),Dh.applyMatrix4(i),Dh.radius+=r,t.ray.intersectsSphere(Dh)===!1)return;p_.copy(i).invert(),Cl.copy(t.ray).applyMatrix4(p_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=h.getX(_),M=h.getX(_+1),S=Nh(this,t,Cl,l,m,M,_);S&&e.push(S)}if(this.isLineLoop){let _=h.getX(p-1),g=h.getX(f),m=Nh(this,t,Cl,l,_,g,p-1);m&&e.push(m)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=f,g=p-1;_<g;_+=c){let m=Nh(this,t,Cl,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){let _=Nh(this,t,Cl,l,p-1,f,p-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nh(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(iu.fromBufferAttribute(a,i),su.fromBufferAttribute(a,r),e.distanceSqToSegment(iu,su,dp,m_)>n)return;dp.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(dp);if(!(c<t.near||c>t.far))return{distance:c,point:m_.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var g_=new W,__=new W,Gl=class extends ru{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)g_.fromBufferAttribute(e,i),__.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+g_.distanceTo(__);t.setAttribute("lineDistance",new pe(n,1))}else te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ou=class extends ji{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},x_=new Ae,wp=new Ma,Uh=new Vi,Oh=new W,Wl=class extends Sn{constructor(t=new Ue,e=new ou){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uh.copy(n.boundingSphere),Uh.applyMatrix4(i),Uh.radius+=r,t.ray.intersectsSphere(Uh)===!1)return;x_.copy(i).invert(),wp.copy(t.ray).applyMatrix4(x_);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,_=f;p<_;p++){let g=c.getX(p);Oh.fromBufferAttribute(d,g),y_(Oh,g,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,_=f;p<_;p++)Oh.fromBufferAttribute(d,p),y_(Oh,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function y_(s,t,e,n,i,r,o){let a=wp.distanceSqToPoint(s);if(a<e){let l=new W;wp.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Xl=class extends ii{constructor(t=[],e=Dr,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},js=class extends ii{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Tr=class extends ii{constructor(t,e,n=ns,i,r,o,a=vn,l=vn,c,h=vs,d=1){if(h!==vs&&h!==Ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new va(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},au=class extends Tr{constructor(t,e=ns,n=Dr,i,r,o=vn,a=vn,l,c=vs){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Yl=class extends ii{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ea=class s extends Ue{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function p(_,g,m,M,S,x,b,T,A,y,E){let I=x/A,H=b/y,O=x/2,j=b/2,z=T/2,q=A+1,nt=y+1,X=0,Y=0,it=new W;for(let D=0;D<nt;D++){let ct=D*H-j;for(let Pt=0;Pt<q;Pt++){let Ct=Pt*I-O;it[_]=Ct*M,it[g]=ct*S,it[m]=z,c.push(it.x,it.y,it.z),it[_]=0,it[g]=0,it[m]=T>0?1:-1,h.push(it.x,it.y,it.z),d.push(Pt/A),d.push(1-D/y),X+=1}}for(let D=0;D<y;D++)for(let ct=0;ct<A;ct++){let Pt=u+ct+q*D,Ct=u+ct+q*(D+1),kt=u+(ct+1)+q*(D+1),Bt=u+(ct+1)+q*D;l.push(Pt,Ct,Bt),l.push(Ct,kt,Bt),Y+=6}a.addGroup(f,Y,E),f+=Y,u+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ql=class s extends Ue{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,_=[],g=n/2,m=0;M(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function M(){let x=new W,b=new W,T=0,A=(e-t)/n;for(let y=0;y<=r;y++){let E=[],I=y/r,H=I*(e-t)+t;for(let O=0;O<=i;O++){let j=O/i,z=j*l+a,q=Math.sin(z),nt=Math.cos(z);b.x=H*q,b.y=-I*n+g,b.z=H*nt,d.push(b.x,b.y,b.z),x.set(q,A,nt).normalize(),u.push(x.x,x.y,x.z),f.push(j,1-I),E.push(p++)}_.push(E)}for(let y=0;y<i;y++)for(let E=0;E<r;E++){let I=_[E][y],H=_[E+1][y],O=_[E+1][y+1],j=_[E][y+1];(t>0||E!==0)&&(h.push(I,H,j),T+=3),(e>0||E!==r-1)&&(h.push(H,O,j),T+=3)}c.addGroup(m,T,0),m+=T}function S(x){let b=p,T=new mt,A=new W,y=0,E=x===!0?t:e,I=x===!0?1:-1;for(let O=1;O<=i;O++)d.push(0,g*I,0),u.push(0,I,0),f.push(.5,.5),p++;let H=p;for(let O=0;O<=i;O++){let z=O/i*l+a,q=Math.cos(z),nt=Math.sin(z);A.x=E*nt,A.y=g*I,A.z=E*q,d.push(A.x,A.y,A.z),u.push(0,I,0),T.x=q*.5+.5,T.y=nt*.5*I+.5,f.push(T.x,T.y),p++}for(let O=0;O<i;O++){let j=b+O,z=H+O;x===!0?h.push(z,z+1,j):h.push(z+1,z,j),y+=3}c.addGroup(m,y,x===!0?1:2),m+=y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){te("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new mt:new W);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new W,i=[],r=[],o=[],a=new W,l=new Ae;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new W)}r[0]=new W,o[0]=new W;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(re(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(re(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Aa=class extends Ci{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new mt){let n=e,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lu=class extends Aa{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function om(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var v_=new W,S_=new W,pp=new om,mp=new om,gp=new om,cu=class extends Ci{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new W){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(S_.subVectors(i[0],i[1]).add(i[0]),c=S_);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(v_.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=v_),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),p<1e-4&&(p=_),g<1e-4&&(g=_),pp.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,_,g),mp.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,_,g),gp.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,_,g)}else this.curveType==="catmullrom"&&(pp.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),mp.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),gp.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(pp.calc(l),mp.calc(l),gp.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new W().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function M_(s,t,e,n,i){let r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function VM(s,t){let e=1-s;return e*e*t}function HM(s,t){return 2*(1-s)*s*t}function GM(s,t){return s*s*t}function Ll(s,t,e,n){return VM(s,t)+HM(s,e)+GM(s,n)}function WM(s,t){let e=1-s;return e*e*e*t}function XM(s,t){let e=1-s;return 3*e*e*s*t}function YM(s,t){return 3*(1-s)*s*s*t}function qM(s,t){return s*s*s*t}function Dl(s,t,e,n,i){return WM(s,t)+XM(s,e)+YM(s,n)+qM(s,i)}var Zl=class extends Ci{constructor(t=new mt,e=new mt,n=new mt,i=new mt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dl(t,i.x,r.x,o.x,a.x),Dl(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},hu=class extends Ci{constructor(t=new W,e=new W,n=new W,i=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new W){let n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Dl(t,i.x,r.x,o.x,a.x),Dl(t,i.y,r.y,o.y,a.y),Dl(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$l=class extends Ci{constructor(t=new mt,e=new mt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new mt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new mt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},uu=class extends Ci{constructor(t=new W,e=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new W){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new W){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Jl=class extends Ci{constructor(t=new mt,e=new mt,n=new mt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new mt){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ll(t,i.x,r.x,o.x),Ll(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fu=class extends Ci{constructor(t=new W,e=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new W){let n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(Ll(t,i.x,r.x,o.x),Ll(t,i.y,r.y,o.y),Ll(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Kl=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new mt){let n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(M_(a,l.x,c.x,h.x,d.x),M_(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new mt().fromArray(i))}return this}},Tp=Object.freeze({__proto__:null,ArcCurve:lu,CatmullRomCurve3:cu,CubicBezierCurve:Zl,CubicBezierCurve3:hu,EllipseCurve:Aa,LineCurve:$l,LineCurve3:uu,QuadraticBezierCurve:Jl,QuadraticBezierCurve3:fu,SplineCurve:Kl}),du=class extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Tp[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Tp[i.type]().fromJSON(i))}return this}},bs=class extends du{constructor(t){super(),this.type="Path",this.currentPoint=new mt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new $l(this.currentPoint.clone(),new mt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let r=new Jl(this.currentPoint.clone(),new mt(t,e),new mt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){let a=new Zl(this.currentPoint.clone(),new mt(t,e),new mt(n,i),new mt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Kl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){let c=new Aa(t,e,n,i,r,o,a,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mo=class extends bs{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new bs().fromJSON(i))}return this}};function ZM(s,t,e=2){let n=t&&t.length,i=n?t[0]*e:s.length,r=vx(s,0,i,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=QM(s,t,r,e)),s.length>80*e){a=s[0],l=s[1];let h=a,d=l;for(let u=e;u<i;u+=e){let f=s[u],p=s[u+1];f<a&&(a=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-a,d-l),c=c!==0?32767/c:0}return jl(r,o,e,a,l,c,0),o}function vx(s,t,e,n,i){let r;if(i===hb(s,t,e,n)>0)for(let o=t;o<e;o+=n)r=b_(o/n|0,s[o],s[o+1],r);else for(let o=e-n;o>=t;o-=n)r=b_(o/n|0,s[o],s[o+1],r);return r&&Ca(r,r.next)&&(tc(r),r=r.next),r}function go(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(Ca(e,e.next)||Ye(e.prev,e,e.next)===0)){if(tc(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function jl(s,t,e,n,i,r,o){if(!s)return;!o&&r&&sb(s,n,i,r);let a=s;for(;s.prev!==s.next;){let l=s.prev,c=s.next;if(r?JM(s,n,i,r):$M(s)){t.push(l.i,s.i,c.i),tc(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=KM(go(s),t),jl(s,t,e,n,i,r,2)):o===2&&jM(s,t,e,n,i,r):jl(go(s),t,e,n,i,r,1);break}}}function $M(s){let t=s.prev,e=s,n=s.next;if(Ye(t,e,n)>=0)return!1;let i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(i,r,o),d=Math.min(a,l,c),u=Math.max(i,r,o),f=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Rl(i,a,r,l,o,c,p.x,p.y)&&Ye(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function JM(s,t,e,n){let i=s.prev,r=s,o=s.next;if(Ye(i,r,o)>=0)return!1;let a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,f=Math.min(a,l,c),p=Math.min(h,d,u),_=Math.max(a,l,c),g=Math.max(h,d,u),m=Ep(f,p,t,e,n),M=Ep(_,g,t,e,n),S=s.prevZ,x=s.nextZ;for(;S&&S.z>=m&&x&&x.z<=M;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&Rl(a,h,l,d,c,u,S.x,S.y)&&Ye(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Rl(a,h,l,d,c,u,x.x,x.y)&&Ye(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=p&&S.y<=g&&S!==i&&S!==o&&Rl(a,h,l,d,c,u,S.x,S.y)&&Ye(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=_&&x.y>=p&&x.y<=g&&x!==i&&x!==o&&Rl(a,h,l,d,c,u,x.x,x.y)&&Ye(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function KM(s,t){let e=s;do{let n=e.prev,i=e.next.next;!Ca(n,i)&&Mx(n,e,e.next,i)&&Ql(n,i)&&Ql(i,n)&&(t.push(n.i,e.i,i.i),tc(e),tc(e.next),e=s=i),e=e.next}while(e!==s);return go(e)}function jM(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ab(o,a)){let l=bx(o,a);o=go(o,o.next),l=go(l,l.next),jl(o,t,e,n,i,r,0),jl(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function QM(s,t,e,n){let i=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=vx(s,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(ob(c))}i.sort(tb);for(let r=0;r<i.length;r++)e=eb(i[r],e);return e}function tb(s,t){let e=s.x-t.x;if(e===0&&(e=s.y-t.y,e===0)){let n=(s.next.y-s.y)/(s.next.x-s.x),i=(t.next.y-t.y)/(t.next.x-t.x);e=n-i}return e}function eb(s,t){let e=nb(s,t);if(!e)return t;let n=bx(e,s);return go(n,n.next),go(e,e.next)}function nb(s,t){let e=t,n=s.x,i=s.y,r=-1/0,o;if(Ca(s,e))return e;do{if(Ca(s,e.next))return e.next;if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){let d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Sx(i<c?n:r,i,l,c,i<c?r:n,i,e.x,e.y)){let d=Math.abs(i-e.y)/(n-e.x);Ql(e,s)&&(d<h||d===h&&(e.x>o.x||e.x===o.x&&ib(o,e)))&&(o=e,h=d)}e=e.next}while(e!==a);return o}function ib(s,t){return Ye(s.prev,s,t.prev)<0&&Ye(t.next,s,s.next)<0}function sb(s,t,e,n){let i=s;do i.z===0&&(i.z=Ep(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,rb(i)}function rb(s){let t,e=1;do{let n=s,i;s=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;n=o}r.nextZ=null,e*=2}while(t>1);return s}function Ep(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function ob(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function Sx(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Rl(s,t,e,n,i,r,o,a){return!(s===o&&t===a)&&Sx(s,t,e,n,i,r,o,a)}function ab(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!lb(s,t)&&(Ql(s,t)&&Ql(t,s)&&cb(s,t)&&(Ye(s.prev,s,t.prev)||Ye(s,t.prev,t))||Ca(s,t)&&Ye(s.prev,s,s.next)>0&&Ye(t.prev,t,t.next)>0)}function Ye(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function Ca(s,t){return s.x===t.x&&s.y===t.y}function Mx(s,t,e,n){let i=Bh(Ye(s,t,e)),r=Bh(Ye(s,t,n)),o=Bh(Ye(e,n,s)),a=Bh(Ye(e,n,t));return!!(i!==r&&o!==a||i===0&&Fh(s,e,t)||r===0&&Fh(s,n,t)||o===0&&Fh(e,s,n)||a===0&&Fh(e,t,n))}function Fh(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function Bh(s){return s>0?1:s<0?-1:0}function lb(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Mx(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function Ql(s,t){return Ye(s.prev,s,s.next)<0?Ye(s,t,s.next)>=0&&Ye(s,s.prev,t)>=0:Ye(s,t,s.prev)<0||Ye(s,s.next,t)<0}function cb(s,t){let e=s,n=!1,i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function bx(s,t){let e=Ap(s.i,s.x,s.y),n=Ap(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function b_(s,t,e,n){let i=Ap(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tc(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Ap(s,t,e){return{i:s,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hb(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Cp=class{static triangulate(t,e,n=2){return ZM(t,e,n)}},_s=class s{static area(t){let e=t.length,n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return s.area(t)<0}static triangulateShape(t,e){let n=[],i=[],r=[];w_(t),T_(n,t);let o=t.length;e.forEach(w_);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,T_(n,e[l]);let a=Cp.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function w_(s){let t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function T_(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}var Ra=class s extends Ue{constructor(t=new mo([new mt(.5,.5),new mt(-.5,.5),new mt(-.5,-.5),new mt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],r=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new pe(i,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:ub,S,x=!1,b,T,A,y;if(m){S=m.getSpacedPoints(h),x=!0,u=!1;let R=m.isCatmullRomCurve3?m.closed:!1;b=m.computeFrenetFrames(h,R),T=new W,A=new W,y=new W}u||(g=0,f=0,p=0,_=0);let E=a.extractPoints(c),I=E.shape,H=E.holes;if(!_s.isClockWise(I)){I=I.reverse();for(let R=0,G=H.length;R<G;R++){let B=H[R];_s.isClockWise(B)&&(H[R]=B.reverse())}}function j(R){let B=10000000000000001e-36,P=R[0];for(let Q=1;Q<=R.length;Q++){let ut=Q%R.length,gt=R[ut],dt=gt.x-P.x,J=gt.y-P.y,w=dt*dt+J*J,Rt=Math.max(Math.abs(gt.x),Math.abs(gt.y),Math.abs(P.x),Math.abs(P.y)),It=B*Rt*Rt;if(w<=It){R.splice(ut,1),Q--;continue}P=gt}}j(I),H.forEach(j);let z=H.length,q=I;for(let R=0;R<z;R++){let G=H[R];I=I.concat(G)}function nt(R,G,B){return G||ee("ExtrudeGeometry: vec does not exist"),R.clone().addScaledVector(G,B)}let X=I.length;function Y(R,G,B){let P,Q,ut,gt=R.x-G.x,dt=R.y-G.y,J=B.x-R.x,w=B.y-R.y,Rt=gt*gt+dt*dt,It=gt*w-dt*J;if(Math.abs(It)>Number.EPSILON){let L=Math.sqrt(Rt),v=Math.sqrt(J*J+w*w),Z=G.x-dt/L,et=G.y+gt/L,ht=B.x-w/v,bt=B.y+J/v,yt=((ht-Z)*w-(bt-et)*J)/(gt*w-dt*J);P=Z+gt*yt-R.x,Q=et+dt*yt-R.y;let tt=P*P+Q*Q;if(tt<=2)return new mt(P,Q);ut=Math.sqrt(tt/2)}else{let L=!1;gt>Number.EPSILON?J>Number.EPSILON&&(L=!0):gt<-Number.EPSILON?J<-Number.EPSILON&&(L=!0):Math.sign(dt)===Math.sign(w)&&(L=!0),L?(P=-dt,Q=gt,ut=Math.sqrt(Rt)):(P=gt,Q=dt,ut=Math.sqrt(Rt/2))}return new mt(P/ut,Q/ut)}let it=[];for(let R=0,G=q.length,B=G-1,P=R+1;R<G;R++,B++,P++)B===G&&(B=0),P===G&&(P=0),it[R]=Y(q[R],q[B],q[P]);let D=[],ct,Pt=it.concat();for(let R=0,G=z;R<G;R++){let B=H[R];ct=[];for(let P=0,Q=B.length,ut=Q-1,gt=P+1;P<Q;P++,ut++,gt++)ut===Q&&(ut=0),gt===Q&&(gt=0),ct[P]=Y(B[P],B[ut],B[gt]);D.push(ct),Pt=Pt.concat(ct)}let Ct;if(g===0)Ct=_s.triangulateShape(q,H);else{let R=[],G=[];for(let B=0;B<g;B++){let P=B/g,Q=f*Math.cos(P*Math.PI/2),ut=p*Math.sin(P*Math.PI/2)+_;for(let gt=0,dt=q.length;gt<dt;gt++){let J=nt(q[gt],it[gt],ut);U(J.x,J.y,-Q),P===0&&R.push(J)}for(let gt=0,dt=z;gt<dt;gt++){let J=H[gt];ct=D[gt];let w=[];for(let Rt=0,It=J.length;Rt<It;Rt++){let L=nt(J[Rt],ct[Rt],ut);U(L.x,L.y,-Q),P===0&&w.push(L)}P===0&&G.push(w)}}Ct=_s.triangulateShape(R,G)}let kt=Ct.length,Bt=p+_;for(let R=0;R<X;R++){let G=u?nt(I[R],Pt[R],Bt):I[R];x?(A.copy(b.normals[0]).multiplyScalar(G.x),T.copy(b.binormals[0]).multiplyScalar(G.y),y.copy(S[0]).add(A).add(T),U(y.x,y.y,y.z)):U(G.x,G.y,0)}for(let R=1;R<=h;R++)for(let G=0;G<X;G++){let B=u?nt(I[G],Pt[G],Bt):I[G];x?(A.copy(b.normals[R]).multiplyScalar(B.x),T.copy(b.binormals[R]).multiplyScalar(B.y),y.copy(S[R]).add(A).add(T),U(y.x,y.y,y.z)):U(B.x,B.y,d/h*R)}for(let R=g-1;R>=0;R--){let G=R/g,B=f*Math.cos(G*Math.PI/2),P=p*Math.sin(G*Math.PI/2)+_;for(let Q=0,ut=q.length;Q<ut;Q++){let gt=nt(q[Q],it[Q],P);U(gt.x,gt.y,d+B)}for(let Q=0,ut=H.length;Q<ut;Q++){let gt=H[Q];ct=D[Q];for(let dt=0,J=gt.length;dt<J;dt++){let w=nt(gt[dt],ct[dt],P);x?U(w.x,w.y+S[h-1].y,S[h-1].x+B):U(w.x,w.y,d+B)}}}qt(),k();function qt(){let R=i.length/3;if(u){let G=0,B=X*G;for(let P=0;P<kt;P++){let Q=Ct[P];N(Q[2]+B,Q[1]+B,Q[0]+B)}G=h+g*2,B=X*G;for(let P=0;P<kt;P++){let Q=Ct[P];N(Q[0]+B,Q[1]+B,Q[2]+B)}}else{for(let G=0;G<kt;G++){let B=Ct[G];N(B[2],B[1],B[0])}for(let G=0;G<kt;G++){let B=Ct[G];N(B[0]+X*h,B[1]+X*h,B[2]+X*h)}}n.addGroup(R,i.length/3-R,0)}function k(){let R=i.length/3,G=0;F(q,G),G+=q.length;for(let B=0,P=H.length;B<P;B++){let Q=H[B];F(Q,G),G+=Q.length}n.addGroup(R,i.length/3-R,1)}function F(R,G){let B=R.length;for(;--B>=0;){let P=B,Q=B-1;Q<0&&(Q=R.length-1);for(let ut=0,gt=h+g*2;ut<gt;ut++){let dt=X*ut,J=X*(ut+1),w=G+P+dt,Rt=G+Q+dt,It=G+Q+J,L=G+P+J;V(w,Rt,It,L)}}}function U(R,G,B){l.push(R),l.push(G),l.push(B)}function N(R,G,B){st(R),st(G),st(B);let P=i.length/3,Q=M.generateTopUV(n,i,P-3,P-2,P-1);ft(Q[0]),ft(Q[1]),ft(Q[2])}function V(R,G,B,P){st(R),st(G),st(P),st(G),st(B),st(P);let Q=i.length/3,ut=M.generateSideWallUV(n,i,Q-6,Q-3,Q-2,Q-1);ft(ut[0]),ft(ut[1]),ft(ut[3]),ft(ut[1]),ft(ut[2]),ft(ut[3])}function st(R){i.push(l[R*3+0]),i.push(l[R*3+1]),i.push(l[R*3+2])}function ft(R){r.push(R.x),r.push(R.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fb(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Tp[i.type]().fromJSON(i)),new s(n,t.options)}},ub={generateTopUV:function(s,t,e,n,i){let r=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new mt(r,o),new mt(a,l),new mt(c,h)]},generateSideWallUV:function(s,t,e,n,i,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[i*3],f=t[i*3+1],p=t[i*3+2],_=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new mt(o,1-l),new mt(c,1-d),new mt(u,1-p),new mt(_,1-m)]:[new mt(a,1-l),new mt(h,1-d),new mt(f,1-p),new mt(g,1-m)]}};function fb(s,t,e){if(e.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];e.shapes.push(r.uuid)}else e.shapes.push(s.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Pa=class s extends Ue{constructor(t=[new mt(0,-.5),new mt(.5,0),new mt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=re(i,0,Math.PI*2);let r=[],o=[],a=[],l=[],c=[],h=1/e,d=new W,u=new mt,f=new W,p=new W,_=new W,g=0,m=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:g=t[M+1].x-t[M].x,m=t[M+1].y-t[M].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(p)}for(let M=0;M<=e;M++){let S=n+M*h*i,x=Math.sin(S),b=Math.cos(S);for(let T=0;T<=t.length-1;T++){d.x=t[T].x*x,d.y=t[T].y,d.z=t[T].x*b,o.push(d.x,d.y,d.z),u.x=M/e,u.y=T/(t.length-1),a.push(u.x,u.y);let A=l[3*T+0]*x,y=l[3*T+1],E=l[3*T+0]*b;c.push(A,y,E)}}for(let M=0;M<e;M++)for(let S=0;S<t.length-1;S++){let x=S+M*t.length,b=x,T=x+t.length,A=x+t.length+1,y=x+1;r.push(b,T,y),r.push(A,y,T)}this.setIndex(r),this.setAttribute("position",new pe(o,3)),this.setAttribute("uv",new pe(a,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.points,t.segments,t.phiStart,t.phiLength)}};var Er=class s extends Ue{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],_=[],g=[];for(let m=0;m<h;m++){let M=m*u-o;for(let S=0;S<c;S++){let x=S*d-r;p.push(x,-M,0),_.push(0,0,1),g.push(S/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){let S=M+c*m,x=M+c*(m+1),b=M+1+c*(m+1),T=M+1+c*m;f.push(S,x,T),f.push(x,b,T)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(_,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Ia=class s extends Ue{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),i=Math.floor(i);let l=[],c=[],h=[],d=[],u=new W,f=new W,p=new W;for(let _=0;_<=n;_++){let g=o+_/n*a;for(let m=0;m<=i;m++){let M=m/i*r;f.x=(t+e*Math.cos(g))*Math.cos(M),f.y=(t+e*Math.cos(g))*Math.sin(M),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(M),u.y=t*Math.sin(M),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/i),d.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=i;g++){let m=(i+1)*_+g-1,M=(i+1)*(_-1)+g-1,S=(i+1)*(_-1)+g,x=(i+1)*_+g;l.push(m,M,x),l.push(M,S,x)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var ec=class extends Ue{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new W,r=new W;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,_=u+f;p<_;p+=3)for(let g=0;g<3;g++){let m=a.getX(p+g),M=a.getX(p+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,M),E_(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),E_(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new pe(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function E_(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}var nc=class extends ji{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ne(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function wo(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(A_(i))i.isRenderTargetTexture?(te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(A_(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function Hn(s){let t={};for(let e=0;e<s.length;e++){let n=wo(s[e]);for(let i in n)t[i]=n[i]}return t}function A_(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function db(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function am(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var gc={clone:wo,merge:Hn},pb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends ji{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pb,this.fragmentShader=mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=wo(t.uniforms),this.uniformsGroups=db(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new ne().setHex(i.value);break;case"v2":this.uniforms[n].value=new mt().fromArray(i.value);break;case"v3":this.uniforms[n].value=new W().fromArray(i.value);break;case"v4":this.uniforms[n].value=new be().fromArray(i.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new Ae().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},pu=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qi=class extends ji{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gf,this.normalScale=new mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Js,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var mu=class extends ji{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ox,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},gu=class extends ji{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function ca(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function _p(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Ar=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_u=class extends Ar{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sp,endingEnd:Sp}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Mp:r=t,a=2*e-n;break;case bp:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Mp:o=t,l=2*n-e;break;case bp:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),_=p*p,g=_*p,m=-u*g+2*u*_-u*p,M=(1+u)*g+(-1.5-2*u)*_+(-.5+u)*p+1,S=(-1-f)*g+(1.5+f)*_+.5*p,x=f*g-f*_;for(let b=0;b!==a;++b)r[b]=m*o[h+b]+M*o[c+b]+S*o[l+b]+x*o[d+b];return r}},xu=class extends Ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},yu=class extends Ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},vu=class extends Ar{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),_=1-p;for(let g=0;g!==a;++g)r[g]=o[c+g]*_+o[l+g]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let _=o[c+p],g=o[l+p],m=f*u+p*2,M=d[m],S=d[m+1],x=t*u+p*2,b=h[x],T=h[x+1],A=_b(n,e,M,b,i);r[p]=wx(A,_,S,T,g)}return r}};function wx(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function gb(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function _b(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=wx(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=gb(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var Ri=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ca(e,this.TimeBufferType),this.values=ca(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ca(t.times,Array),values:ca(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),_p(t.settings)&&(n.settings={inTangents:ca(t.settings.inTangents,Array),outTangents:ca(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new yu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new _u(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vu(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Nl:e=this.InterpolantFactoryMethodDiscrete;break;case Kh:e=this.InterpolantFactoryMethodLinear;break;case Hh:e=this.InterpolantFactoryMethodSmooth;break;case vp:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return te("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nl;case this.InterpolantFactoryMethodLinear:return Kh;case this.InterpolantFactoryMethodSmooth:return Hh;case this.InterpolantFactoryMethodBezier:return vp}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;_p(this.settings)&&(C_(this.settings.inTangents,t),C_(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ee("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(ee("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){ee("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){ee("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&oM(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){ee("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hh,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let _=e[d+p];if(_!==e[u+p]||_!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,_p(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function C_(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}Ri.prototype.ValueTypeName="";Ri.prototype.TimeBufferType=Float32Array;Ri.prototype.ValueBufferType=Float32Array;Ri.prototype.DefaultInterpolation=Kh;var Cr=class extends Ri{constructor(t,e,n){super(t,e,n)}};Cr.prototype.ValueTypeName="bool";Cr.prototype.ValueBufferType=Array;Cr.prototype.DefaultInterpolation=Nl;Cr.prototype.InterpolantFactoryMethodLinear=void 0;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Su=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}};Su.prototype.ValueTypeName="color";var Mu=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}};Mu.prototype.ValueTypeName="number";var bu=class extends Ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ms.slerpFlat(r,0,o,c-a,o,c,l);return r}},ic=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new bu(this.times,this.values,this.getValueSize(),t)}};ic.prototype.ValueTypeName="quaternion";ic.prototype.InterpolantFactoryMethodSmooth=void 0;var Rr=class extends Ri{constructor(t,e,n){super(t,e,n)}};Rr.prototype.ValueTypeName="string";Rr.prototype.ValueBufferType=Array;Rr.prototype.DefaultInterpolation=Nl;Rr.prototype.InterpolantFactoryMethodLinear=void 0;Rr.prototype.InterpolantFactoryMethodSmooth=void 0;var wu=class extends Ri{constructor(t,e,n,i){super(t,e,n,i)}};wu.prototype.ValueTypeName="vector";var Rp={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(R_(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!R_(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function R_(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Tu=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tx=new Tu,_o=class{constructor(t){this.manager=t!==void 0?t:Tx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};_o.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs={},Pp=class extends Error{constructor(t,e){super(t),this.response=e}},sc=class extends _o{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Rp.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(Zs[t]!==void 0){Zs[t].push({onLoad:e,onProgress:n,onError:i});return}Zs[t]=[],Zs[t].push({onLoad:e,onProgress:n,onError:i});let o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Zs[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,p=f!==0,_=0,g=new ReadableStream({start(m){M();function M(){d.read().then(({done:S,value:x})=>{if(S)m.close();else{_+=x.byteLength;let b=new ProgressEvent("progress",{lengthComputable:p,loaded:_,total:f});for(let T=0,A=h.length;T<A;T++){let y=h[T];y.onProgress&&y.onProgress(b)}m.enqueue(x),M()}},S=>{m.error(S)})}}});return new Response(g)}else throw new Pp(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let d=/charset="?([^;"\s]*)"?/i.exec(a),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Rp.add(`file:${t}`,c);let h=Zs[t];delete Zs[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=Zs[t];if(h===void 0)throw this.manager.itemError(t),c;delete Zs[t];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var rc=class extends Sn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},xo=class extends rc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ne(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},xp=new Ae,P_=new W,I_=new W,Eu=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new mt(512,512),this.mapType=mi,this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new mt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;P_.setFromMatrixPosition(t.matrixWorld),e.position.copy(P_),I_.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(I_),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){xp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(xp,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=i?i.z/r.x:1,a=i?i.w/r.y:1,l=i?i.x/r.x:0,c=i?i.y/r.y:0;t.coordinateSystem===_a||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+c,0,0,.5,.5,0,0,0,1),e.multiply(xp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},kh=new W,zh=new Ms,gs=new W,yo=class extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Ji,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(kh,zh,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kh,zh,gs.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(kh,zh,gs),gs.x===1&&gs.y===1&&gs.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kh,zh,gs.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mr=new W,L_=new mt,D_=new mt,yn=class extends yo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ya*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ya*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-t/Mr.z)}getViewSize(t,e){return this.getViewBounds(t,L_,D_),e.subVectors(D_,L_)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Pl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var La=class extends yo{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ip=class extends Eu{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},vo=class extends rc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new Ip}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var So=class extends Ue{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var ha=-90,ua=1,Au=class extends Sn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new yn(ha,ua,t,e);i.layers=this.layers,this.add(i);let r=new yn(ha,ua,t,e);r.layers=this.layers,this.add(r);let o=new yn(ha,ua,t,e);o.layers=this.layers,this.add(o);let a=new yn(ha,ua,t,e);a.layers=this.layers,this.add(a);let l=new yn(ha,ua,t,e);l.layers=this.layers,this.add(l);let c=new yn(ha,ua,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ji)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===_a)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Cu=class extends yn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var lm="\\[\\]\\.:\\/",xb=new RegExp("["+lm+"]","g"),cm="[^"+lm+"]",yb="[^"+lm.replace("\\.","")+"]",vb=/((?:WC+[\/:])*)/.source.replace("WC",cm),Sb=/(WCOD+)?/.source.replace("WCOD",yb),Mb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",cm),bb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",cm),wb=new RegExp("^"+vb+Sb+Mb+bb+"$"),Tb=["material","materials","bones","map"],Lp=class{constructor(t,e,n){let i=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xb,"")}static parseTrackName(t){let e=wb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Tb.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ee("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ee("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ee("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ee("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ee("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ee("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;ee("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ee("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Lp;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _C=new Float32Array(1);var Pr=class extends eu{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var mm=class mm{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};mm.prototype.isMatrix2=!0;var Dp=mm,N_=new mt,Da=class{constructor(t=new mt(1/0,1/0),e=new mt(-1/0,-1/0)){this.isBox2=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=N_.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(t){return this.isEmpty()?t.set(0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,N_).distanceTo(t)}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},U_=new W,Vh=new W,fa=new W,da=new W,yp=new W,Eb=new W,Ab=new W,oc=class{constructor(t=new W,e=new W){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){U_.subVectors(t,this.start),Vh.subVectors(this.end,this.start);let n=Vh.dot(Vh);if(n===0)return 0;let r=Vh.dot(U_)/n;return e&&(r=re(r,0,1)),r}closestPointToPoint(t,e,n){let i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}distanceSqToLine3(t,e=Eb,n=Ab){let i=10000000000000001e-32,r,o,a=this.start,l=t.start,c=this.end,h=t.end;fa.subVectors(c,a),da.subVectors(h,l),yp.subVectors(a,l);let d=fa.dot(fa),u=da.dot(da),f=da.dot(yp);if(d<=i&&u<=i)return e.copy(a),n.copy(l),e.sub(n),e.dot(e);if(d<=i)r=0,o=f/u,o=re(o,0,1);else{let p=fa.dot(yp);if(u<=i)o=0,r=re(-p/d,0,1);else{let _=fa.dot(da),g=d*u-_*_;g!==0?r=re((_*f-p*u)/g,0,1):r=0,o=(_*r+f)/u,o<0?(o=0,r=re(-p/d,0,1)):o>1&&(o=1,r=re((_-p)/d,0,1))}}return e.copy(a).addScaledVector(fa,r),n.copy(l).addScaledVector(da,o),e.distanceToSquared(n)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};var ts=class{constructor(){this.type="ShapePath",this.color=new ne,this.subPaths=[],this.currentPath=null,this.userData={}}moveTo(t,e){return this.currentPath=new bs,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,r,o){return this.currentPath.bezierCurveTo(t,e,n,i,r,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(){function t(l,c){let h=!1,d=c.length;for(let u=0,f=d-1;u<d;f=u++){let p=c[u],_=c[f];p.y>l.y!=_.y>l.y&&l.x<(_.x-p.x)*(l.y-p.y)/(_.y-p.y)+p.x&&(h=!h)}return h}function e(l,c){let h=c.getCenter(new mt);if(t(h,l))return h;let d=h.y,u=[],f=l.length;for(let p=0;p<f;p++){let _=l[p],g=l[(p+1)%f];if(_.y>d!=g.y>d){let m=_.x+(d-_.y)*(g.x-_.x)/(g.y-_.y);u.push(m)}}return u.length>1&&(u.sort((p,_)=>p-_),h.x=(u[0]+u[1])/2),h}let n=this.userData.style&&this.userData.style.fillRule||"nonzero";n!=="nonzero"&&n!=="evenodd"&&(te('Fill-rule "'+n+'" is not supported, falling back to "nonzero".'),n="nonzero");let i=n==="nonzero"?(l=>l!==0):(l=>(l&1)!==0),r=[];for(let l of this.subPaths){let c=l.getPoints();if(c.length<3)continue;let h=_s.area(c);if(h===0)continue;let d=new Da;for(let u=0;u<c.length;u++)d.expandByPoint(c[u]);r.push({subPath:l,points:c,boundingBox:d,interiorPoint:e(c,d),absArea:Math.abs(h),winding:h<0?-1:1,container:null,exclude:!1,role:null})}r.sort((l,c)=>c.absArea-l.absArea);for(let l=0;l<r.length;l++){let c=r[l],h=0;for(let d=l-1;d>=0;d--){let u=r[d];if(u.boundingBox.containsBox(c.boundingBox)&&t(c.interiorPoint,u.points)){c.container=u.exclude?u.container:u,h=u.winding,c.winding+=h;break}}i(c.winding)===i(h)&&(c.exclude=!0)}for(let l of r)l.exclude||(l.role=l.container===null||l.container.role==="hole"?"outer":"hole");let o=[],a=new Map;for(let l of r){if(l.exclude||l.role!=="outer")continue;let c=new mo;c.curves=l.subPath.curves,o.push(c),a.set(l,c)}for(let l of r){if(l.exclude||l.role!=="hole")continue;let c=a.get(l.container);if(!c)continue;let h=new bs;h.curves=l.subPath.curves,c.holes.push(h)}return o}};function hm(s,t,e,n){let i=Cb(n);switch(e){case Qp:return s*t;case em:return s*t/i.components*i.byteLength;case Ou:return s*t/i.components*i.byteLength;case Or:return s*t*2/i.components*i.byteLength;case Fu:return s*t*2/i.components*i.byteLength;case tm:return s*t*3/i.components*i.byteLength;case Hi:return s*t*4/i.components*i.byteLength;case Bu:return s*t*4/i.components*i.byteLength;case hc:case uc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case fc:case dc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case zu:case Hu:return Math.max(s,16)*Math.max(t,8)/4;case ku:case Vu:return Math.max(s,8)*Math.max(t,8)/2;case Gu:case Wu:case Yu:case qu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xu:case pc:case Zu:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case $u:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ju:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ku:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ju:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Qu:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case ef:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case nf:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case rf:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case af:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case lf:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case hf:case uf:case ff:return Math.ceil(s/4)*Math.ceil(t/4)*16;case df:case pf:return Math.ceil(s/4)*Math.ceil(t/4)*8;case mc:case mf:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cb(s){switch(s){case mi:case $p:return{byteLength:1,components:1};case Ua:case Jp:case ss:return{byteLength:2,components:1};case Nu:case Uu:return{byteLength:2,components:4};case ns:case Du:case is:return{byteLength:4,components:1};case Kp:case jp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qx(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Pb(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],_=d[f];_.start<=p.start+p.count+1?p.count=Math.max(p.count,_.start+_.count-p.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let _=d[f];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ib=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Db=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ob=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,t1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,e1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,n1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,i1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a1="gl_FragColor = linearToOutputTexel( gl_FragColor );",l1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,h1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,u1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,f1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,p1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,x1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,y1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,b1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,w1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,R1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,P1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,I1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D1=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,k1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,V1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,H1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,X1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Z1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,J1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,j1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ew=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ow=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,aw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,pw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,mw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_w=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ww=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ew=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Iw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ow=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Bw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,zw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$w=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Jw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,le={alphahash_fragment:Ib,alphahash_pars_fragment:Lb,alphamap_fragment:Db,alphamap_pars_fragment:Nb,alphatest_fragment:Ub,alphatest_pars_fragment:Ob,aomap_fragment:Fb,aomap_pars_fragment:Bb,batching_pars_vertex:kb,batching_vertex:zb,begin_vertex:Vb,beginnormal_vertex:Hb,bsdfs:Gb,iridescence_fragment:Wb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:Zb,clipping_planes_vertex:$b,color_fragment:Jb,color_pars_fragment:Kb,color_pars_vertex:jb,color_vertex:Qb,common:t1,cube_uv_reflection_fragment:e1,defaultnormal_vertex:n1,displacementmap_pars_vertex:i1,displacementmap_vertex:s1,emissivemap_fragment:r1,emissivemap_pars_fragment:o1,colorspace_fragment:a1,colorspace_pars_fragment:l1,envmap_fragment:c1,envmap_common_pars_fragment:h1,envmap_pars_fragment:u1,envmap_pars_vertex:f1,envmap_physical_pars_fragment:b1,envmap_vertex:d1,fog_vertex:p1,fog_pars_vertex:m1,fog_fragment:g1,fog_pars_fragment:_1,gradientmap_pars_fragment:x1,lightmap_pars_fragment:y1,lights_lambert_fragment:v1,lights_lambert_pars_fragment:S1,lights_pars_begin:M1,lights_toon_fragment:w1,lights_toon_pars_fragment:T1,lights_phong_fragment:E1,lights_phong_pars_fragment:A1,lights_physical_fragment:C1,lights_physical_pars_fragment:R1,lights_fragment_begin:P1,lights_fragment_maps:I1,lights_fragment_end:L1,lightprobes_pars_fragment:D1,logdepthbuf_fragment:N1,logdepthbuf_pars_fragment:U1,logdepthbuf_pars_vertex:O1,logdepthbuf_vertex:F1,map_fragment:B1,map_pars_fragment:k1,map_particle_fragment:z1,map_particle_pars_fragment:V1,metalnessmap_fragment:H1,metalnessmap_pars_fragment:G1,morphinstance_vertex:W1,morphcolor_vertex:X1,morphnormal_vertex:Y1,morphtarget_pars_vertex:q1,morphtarget_vertex:Z1,normal_fragment_begin:$1,normal_fragment_maps:J1,normal_pars_fragment:K1,normal_pars_vertex:j1,normal_vertex:Q1,normalmap_pars_fragment:tw,clearcoat_normal_fragment_begin:ew,clearcoat_normal_fragment_maps:nw,clearcoat_pars_fragment:iw,iridescence_pars_fragment:sw,opaque_fragment:rw,packing:ow,premultiplied_alpha_fragment:aw,project_vertex:lw,dithering_fragment:cw,dithering_pars_fragment:hw,roughnessmap_fragment:uw,roughnessmap_pars_fragment:fw,shadowmap_pars_fragment:dw,shadowmap_pars_vertex:pw,shadowmap_vertex:mw,shadowmask_pars_fragment:gw,skinbase_vertex:_w,skinning_pars_vertex:xw,skinning_vertex:yw,skinnormal_vertex:vw,specularmap_fragment:Sw,specularmap_pars_fragment:Mw,tonemapping_fragment:bw,tonemapping_pars_fragment:ww,transmission_fragment:Tw,transmission_pars_fragment:Ew,uv_pars_fragment:Aw,uv_pars_vertex:Cw,uv_vertex:Rw,worldpos_vertex:Pw,background_vert:Iw,background_frag:Lw,backgroundCube_vert:Dw,backgroundCube_frag:Nw,cube_vert:Uw,cube_frag:Ow,depth_vert:Fw,depth_frag:Bw,distance_vert:kw,distance_frag:zw,equirect_vert:Vw,equirect_frag:Hw,linedashed_vert:Gw,linedashed_frag:Ww,meshbasic_vert:Xw,meshbasic_frag:Yw,meshlambert_vert:qw,meshlambert_frag:Zw,meshmatcap_vert:$w,meshmatcap_frag:Jw,meshnormal_vert:Kw,meshnormal_frag:jw,meshphong_vert:Qw,meshphong_frag:tT,meshphysical_vert:eT,meshphysical_frag:nT,meshtoon_vert:iT,meshtoon_frag:sT,points_vert:rT,points_frag:oT,shadow_vert:aT,shadow_frag:lT,sprite_vert:cT,sprite_frag:hT},Ot={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},oi={basic:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Hn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Hn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Hn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new ne(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Hn([Ot.points,Ot.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Hn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Hn([Ot.common,Ot.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Hn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Hn([Ot.sprite,Ot.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Hn([Ot.common,Ot.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Hn([Ot.lights,Ot.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};oi.physical={uniforms:Hn([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};var yf={r:0,b:0,g:0},uT=new Ae,Zx=new jt;Zx.set(-1,0,0,0,1,0,0,0,1);function fT(s,t,e,n,i,r){let o=new ne(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(M){let S=M.isScene===!0?M.background:null;if(S&&S.isTexture){let x=M.backgroundBlurriness>0;S=t.get(S,x)}return S}function p(M){let S=!1,x=f(M);x===null?g(o,a):x&&x.isColor&&(g(x,1),S=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function _(M,S){let x=f(S);x&&(x.isCubeTexture||x.mapping===lc)?(c===void 0&&(c=new Le(new Ea(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:wo(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uT.makeRotationFromEuler(S.backgroundRotation)).transpose(),x.isCubeTexture&&x.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zx),c.material.toneMapped=ge.getTransfer(x.colorSpace)!==Me,(h!==x||d!==x.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Le(new Er(2,2),new an({name:"BackgroundMaterial",uniforms:wo(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ge.getTransfer(x.colorSpace)!==Me,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,d=x.version,u=s.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function g(M,S){M.getRGB(yf,am(s)),e.buffers.color.setClear(yf.r,yf.g,yf.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(M,S=1){o.set(M),a=S,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(o,a)},render:p,addToRenderList:_,dispose:m}}function dT(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(H,O,j,z,q){let nt=!1,X=d(H,z,j,O);r!==X&&(r=X,c(r.object)),nt=f(H,z,j,q),nt&&p(H,z,j,q),q!==null&&t.update(q,s.ELEMENT_ARRAY_BUFFER),(nt||o)&&(o=!1,x(H,O,j,z),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return s.createVertexArray()}function c(H){return s.bindVertexArray(H)}function h(H){return s.deleteVertexArray(H)}function d(H,O,j,z){let q=z.wireframe===!0,nt=n[O.id];nt===void 0&&(nt={},n[O.id]=nt);let X=H.isInstancedMesh===!0?H.id:0,Y=nt[X];Y===void 0&&(Y={},nt[X]=Y);let it=Y[j.id];it===void 0&&(it={},Y[j.id]=it);let D=it[q];return D===void 0&&(D=u(l()),it[q]=D),D}function u(H){let O=[],j=[],z=[];for(let q=0;q<e;q++)O[q]=0,j[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:j,attributeDivisors:z,object:H,attributes:{},index:null}}function f(H,O,j,z){let q=r.attributes,nt=O.attributes,X=0,Y=j.getAttributes();for(let it in Y)if(Y[it].location>=0){let ct=q[it],Pt=nt[it];if(Pt===void 0&&(it==="instanceMatrix"&&H.instanceMatrix&&(Pt=H.instanceMatrix),it==="instanceColor"&&H.instanceColor&&(Pt=H.instanceColor)),ct===void 0||ct.attribute!==Pt||Pt&&ct.data!==Pt.data)return!0;X++}return r.attributesNum!==X||r.index!==z}function p(H,O,j,z){let q={},nt=O.attributes,X=0,Y=j.getAttributes();for(let it in Y)if(Y[it].location>=0){let ct=nt[it];ct===void 0&&(it==="instanceMatrix"&&H.instanceMatrix&&(ct=H.instanceMatrix),it==="instanceColor"&&H.instanceColor&&(ct=H.instanceColor));let Pt={};Pt.attribute=ct,ct&&ct.data&&(Pt.data=ct.data),q[it]=Pt,X++}r.attributes=q,r.attributesNum=X,r.index=z}function _(){let H=r.newAttributes;for(let O=0,j=H.length;O<j;O++)H[O]=0}function g(H){m(H,0)}function m(H,O){let j=r.newAttributes,z=r.enabledAttributes,q=r.attributeDivisors;j[H]=1,z[H]===0&&(s.enableVertexAttribArray(H),z[H]=1),q[H]!==O&&(s.vertexAttribDivisor(H,O),q[H]=O)}function M(){let H=r.newAttributes,O=r.enabledAttributes;for(let j=0,z=O.length;j<z;j++)O[j]!==H[j]&&(s.disableVertexAttribArray(j),O[j]=0)}function S(H,O,j,z,q,nt,X){X===!0?s.vertexAttribIPointer(H,O,j,q,nt):s.vertexAttribPointer(H,O,j,z,q,nt)}function x(H,O,j,z){_();let q=z.attributes,nt=j.getAttributes(),X=O.defaultAttributeValues;for(let Y in nt){let it=nt[Y];if(it.location>=0){let D=q[Y];if(D===void 0&&(Y==="instanceMatrix"&&H.instanceMatrix&&(D=H.instanceMatrix),Y==="instanceColor"&&H.instanceColor&&(D=H.instanceColor)),D!==void 0){let ct=D.normalized,Pt=D.itemSize,Ct=t.get(D);if(Ct===void 0)continue;let kt=Ct.buffer,Bt=Ct.type,qt=Ct.bytesPerElement,k=Bt===s.INT||Bt===s.UNSIGNED_INT||D.gpuType===Du;if(D.isInterleavedBufferAttribute){let F=D.data,U=F.stride,N=D.offset;if(F.isInstancedInterleavedBuffer){for(let V=0;V<it.locationSize;V++)m(it.location+V,F.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let V=0;V<it.locationSize;V++)g(it.location+V);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let V=0;V<it.locationSize;V++)S(it.location+V,Pt/it.locationSize,Bt,ct,U*qt,(N+Pt/it.locationSize*V)*qt,k)}else{if(D.isInstancedBufferAttribute){for(let F=0;F<it.locationSize;F++)m(it.location+F,D.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=D.meshPerAttribute*D.count)}else for(let F=0;F<it.locationSize;F++)g(it.location+F);s.bindBuffer(s.ARRAY_BUFFER,kt);for(let F=0;F<it.locationSize;F++)S(it.location+F,Pt/it.locationSize,Bt,ct,Pt*qt,Pt/it.locationSize*F*qt,k)}}else if(X!==void 0){let ct=X[Y];if(ct!==void 0)switch(ct.length){case 2:s.vertexAttrib2fv(it.location,ct);break;case 3:s.vertexAttrib3fv(it.location,ct);break;case 4:s.vertexAttrib4fv(it.location,ct);break;default:s.vertexAttrib1fv(it.location,ct)}}}}M()}function b(){E();for(let H in n){let O=n[H];for(let j in O){let z=O[j];for(let q in z){let nt=z[q];for(let X in nt)h(nt[X].object),delete nt[X];delete z[q]}}delete n[H]}}function T(H){if(n[H.id]===void 0)return;let O=n[H.id];for(let j in O){let z=O[j];for(let q in z){let nt=z[q];for(let X in nt)h(nt[X].object),delete nt[X];delete z[q]}}delete n[H.id]}function A(H){for(let O in n){let j=n[O];for(let z in j){let q=j[z];if(q[H.id]===void 0)continue;let nt=q[H.id];for(let X in nt)h(nt[X].object),delete nt[X];delete q[H.id]}}}function y(H){for(let O in n){let j=n[O],z=H.isInstancedMesh===!0?H.id:0,q=j[z];if(q!==void 0){for(let nt in q){let X=q[nt];for(let Y in X)h(X[Y].object),delete X[Y];delete q[nt]}delete j[z],Object.keys(j).length===0&&delete n[O]}}}function E(){I(),o=!0,r!==i&&(r=i,c(r.object))}function I(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:T,releaseStatesOfObject:y,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function pT(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function mT(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Hi&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let y=A===ss&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==mi&&A!==is&&!y&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(te("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),M=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),T=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:p,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,maxSamples:b,samples:T}}function gT(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Zi,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||p===null||p.length===0||r&&!g)r?h(null):c();else{let M=r?0:n,S=M*4,x=m.clippingState||null;l.value=x,x=h(p,u,S,f);for(let b=0;b!==S;++b)x[b]=e[b];m.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let _=d!==null?d.length:0,g=null;if(_!==0){if(g=l.value,p!==!0||g===null){let m=f+_*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(g,x),g[x+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}var Ba=4,_T=6,xT=20,yT=256,_c=new La,Ex=new ne,gm=null,_m=0,xm=0,ym=!1,vT=new W,To=new W,Sf=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=vT}=r;gm=this._renderer.getRenderTarget(),_m=this._renderer.getActiveCubeFace(),xm=this._renderer.getActiveMipmapLevel(),ym=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(gm,_m,xm),this._renderer.xr.enabled=ym,t.scissorTest=!1,Fa(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Dr||t.mapping===bo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),gm=this._renderer.getRenderTarget(),_m=this._renderer.getActiveCubeFace(),xm=this._renderer.getActiveMipmapLevel(),ym=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ss,format:Hi,colorSpace:Ul,depthBuffer:!1},i=Ax(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ax(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ST(r)),this._blurMaterial=bT(r,t,e),this._ggxMaterial=MT(r,t,e)}return i}_compileMaterial(t){let e=new Le(new Ue,t);this._renderer.compile(e,_c)}_sceneToCubeUV(t,e,n,i,r){let l=new yn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Ex),d.toneMapping=es,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Le(new Ea,new wr({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,m=!1,M=t.background;M?M.isColor&&(g.color.copy(M),t.background=null,m=!0):(g.color.copy(Ex),m=!0);for(let S=0;S<6;S++){let x=S%3;x===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):x===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let b=this._cubeSize;Fa(i,x*b,S>2?b:0,b,b),d.setRenderTarget(i),m&&d.render(_,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Dr||t.mapping===bo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());let r=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Fa(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,_c)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let r=1;r<i;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:p}=this,_=this._sizeLods[n],g=3*_*(n>p-Ba?n-p+Ba:0),m=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=p-e,Fa(r,g,m,3*_,2*_),i.setRenderTarget(r),i.render(a,_c),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,Fa(t,g,m,3*_,2*_),i.setRenderTarget(t),i.render(a,_c)}_blur(t,e,n,i){let r=this._pingPongRenderTarget,o=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,i,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[i],d=3*h*(i>this._lodMax-Ba?i-this._lodMax+Ba:0),u=4*(this._cubeSize-h);Fa(e,d,u,3*h,2*h),o.setRenderTarget(e),o.render(l,_c)}};function ST(s){let t=[],e=[],n=s,i=s-Ba+1+_T;for(let r=0;r<i;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,p=new Float32Array(f*u*d),_=new Float32Array(f*u*d);for(let m=0;m<d;m++){let M=m%3*2/3-1,S=m>2?0:-1,x=[M,S,0,M+2/3,S,0,M+2/3,S+1,0,M,S,0,M+2/3,S+1,0,M,S+1,0];p.set(x,f*u*m);for(let b=0;b<u;b++){let T=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?To.set(1,A,T):m===1?To.set(-T,1,-A):m===2?To.set(-T,A,1):m===3?To.set(-1,A,-T):m===4?To.set(-T,-1,A):To.set(T,A,-1),To.toArray(_,(m*u+b)*f)}}let g=new Ue;g.setAttribute("position",new Tn(p,f)),g.setAttribute("outputDirection",new Tn(_,f)),e.push(new Le(g,null)),n>Ba&&n--}return{lodMeshes:e,sizeLods:t}}function Ax(s,t,e){let n=new pi(s,t,e);return n.texture.mapping=lc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fa(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function MT(s,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function bT(s,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:xT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:bf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Cx(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function Rx(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ws,depthTest:!1,depthWrite:!1})}function bf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Mf=class extends pi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xl(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ea(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:wo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:si,blending:ws});r.uniforms.tEquirect.value=e;let o=new Le(i,r),a=e.minFilter;return e.minFilter===Nr&&(e.minFilter=En),new Au(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}};function wT(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Pu||f===Iu)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let _=new Mf(p.height);return _.fromEquirectangularTexture(s,u),t.set(u,_),u.addEventListener("dispose",c),a(_.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,p=f===Pu||f===Iu,_=f===Dr||f===bo;if(p||_){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Sf(s)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let M=u.image;return p&&M&&M.height>0||_&&M&&l(M)?(n===null&&(n=new Sf(s)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function a(u,f){return f===Pu?u.mapping=Dr:f===Iu&&(u.mapping=bo),u}function l(u){let f=0,p=6;for(let _=0;_<p;_++)u[_]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function TT(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&po("WebGLRenderer: "+n+" extension not supported."),i}}}function ET(s,t,e,n){let i={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete i[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,p=d.attributes.position,_=0;if(p===void 0)return;if(f!==null){let M=f.array;_=f.version;for(let S=0,x=M.length;S<x;S+=3){let b=M[S+0],T=M[S+1],A=M[S+2];u.push(b,T,T,A,A,b)}}else{let M=p.array;_=p.version;for(let S=0,x=M.length/3-1;S<x;S+=3){let b=S+0,T=S+1,A=S+2;u.push(b,T,T,A,A,b)}}let g=new(p.count>=65535?Hl:Vl)(u,1);g.version=_;let m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function AT(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];e.update(_,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function CT(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:ee("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function RT(s,t,e){let n=new WeakMap,i=new be;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let E=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),_===!0&&(S=3);let x=a.attributes.position.count*S,b=1;x>t.maxTextureSize&&(b=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*b*4*d),A=new kl(T,x,b,d);A.type=is,A.needsUpdate=!0;let y=S*4;for(let I=0;I<d;I++){let H=g[I],O=m[I],j=M[I],z=x*b*4*I;for(let q=0;q<H.count;q++){let nt=q*y;f===!0&&(i.fromBufferAttribute(H,q),T[z+nt+0]=i.x,T[z+nt+1]=i.y,T[z+nt+2]=i.z,T[z+nt+3]=0),p===!0&&(i.fromBufferAttribute(O,q),T[z+nt+4]=i.x,T[z+nt+5]=i.y,T[z+nt+6]=i.z,T[z+nt+7]=0),_===!0&&(i.fromBufferAttribute(j,q),T[z+nt+8]=i.x,T[z+nt+9]=i.y,T[z+nt+10]=i.z,T[z+nt+11]=j.itemSize===4?i.w:1)}}u={count:d,texture:A,size:new mt(x,b)},n.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function PT(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var IT={[Vp]:"LINEAR_TONE_MAPPING",[Hp]:"REINHARD_TONE_MAPPING",[Gp]:"CINEON_TONE_MAPPING",[Wp]:"ACES_FILMIC_TONE_MAPPING",[Yp]:"AGX_TONE_MAPPING",[qp]:"NEUTRAL_TONE_MAPPING",[Xp]:"CUSTOM_TONE_MAPPING"};function LT(s,t,e,n,i,r){let o=new pi(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Ue;c.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new pe([0,2,0,0,2,0],2));let h=new pu({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Le(c,h),u=new La(-1,1,1,-1,0,1),f=null,p=null,_=!1,g,m=null,M=[],S=!1;this.setSize=function(x,b){o.setSize(x,b),a!==null&&a.setSize(x,b),l!==null&&l.setSize(x,b);for(let T=0;T<M.length;T++){let A=M[T];A.setSize&&A.setSize(x,b)}},this.setEffects=function(x){M=x,S=M.length>0&&M[0].isRenderPass===!0;let b=o.width,T=o.height;M.length>0&&a===null&&(a=new pi(b,T,{type:ss,depthBuffer:!1,stencilBuffer:!1}),l=new pi(b,T,{type:ss,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){let y=M[A];y.setSize&&y.setSize(b,T)}},this.begin=function(x,b){if(_||x.toneMapping===es&&M.length===0)return!1;if(m=b,b!==null){let T=b.width,A=b.height;(o.width!==T||o.height!==A)&&this.setSize(T,A)}return S===!1&&x.setRenderTarget(o),g=x.toneMapping,x.toneMapping=es,!0},this.hasRenderPass=function(){return S},this.end=function(x,b){x.toneMapping=g,_=!0;let T=o,A=a;for(let y=0;y<M.length;y++){let E=M[y];E.enabled!==!1&&(E.render(x,A,T,b),E.needsSwap!==!1&&(T=A,A=A===a?l:a))}if(f!==x.outputColorSpace||p!==x.toneMapping){f=x.outputColorSpace,p=x.toneMapping,h.defines={},ge.getTransfer(f)===Me&&(h.defines.SRGB_TRANSFER="");let y=IT[p];y&&(h.defines[y]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,x.setRenderTarget(m),x.render(d,u),m=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var $x=new ii,Mm=new Tr(1,1),Jx=new kl,Kx=new tu,jx=new Xl,Px=[],Ix=[],Lx=new Float32Array(16),Dx=new Float32Array(9),Nx=new Float32Array(4);function za(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Px[i];if(r===void 0&&(r=new Float32Array(i),Px[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function fn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function dn(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function wf(s,t){let e=Ix[t];e===void 0&&(e=new Int32Array(t),Ix[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function DT(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function NT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2fv(this.addr,t),dn(e,t)}}function UT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;s.uniform3fv(this.addr,t),dn(e,t)}}function OT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4fv(this.addr,t),dn(e,t)}}function FT(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Nx.set(n),s.uniformMatrix2fv(this.addr,!1,Nx),dn(e,n)}}function BT(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Dx.set(n),s.uniformMatrix3fv(this.addr,!1,Dx),dn(e,n)}}function kT(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Lx.set(n),s.uniformMatrix4fv(this.addr,!1,Lx),dn(e,n)}}function zT(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function VT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2iv(this.addr,t),dn(e,t)}}function HT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3iv(this.addr,t),dn(e,t)}}function GT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4iv(this.addr,t),dn(e,t)}}function WT(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function XT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;s.uniform2uiv(this.addr,t),dn(e,t)}}function YT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;s.uniform3uiv(this.addr,t),dn(e,t)}}function qT(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;s.uniform4uiv(this.addr,t),dn(e,t)}}function ZT(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Mm.compareFunction=e.isReversedDepthBuffer()?xf:_f,r=Mm):r=$x,e.setTexture2D(t||r,i)}function $T(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Kx,i)}function JT(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jx,i)}function KT(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Jx,i)}function jT(s){switch(s){case 5126:return DT;case 35664:return NT;case 35665:return UT;case 35666:return OT;case 35674:return FT;case 35675:return BT;case 35676:return kT;case 5124:case 35670:return zT;case 35667:case 35671:return VT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return WT;case 36294:return XT;case 36295:return YT;case 36296:return qT;case 35678:case 36198:case 36298:case 36306:case 35682:return ZT;case 35679:case 36299:case 36307:return $T;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return KT}}function QT(s,t){s.uniform1fv(this.addr,t)}function tE(s,t){let e=za(t,this.size,2);s.uniform2fv(this.addr,e)}function eE(s,t){let e=za(t,this.size,3);s.uniform3fv(this.addr,e)}function nE(s,t){let e=za(t,this.size,4);s.uniform4fv(this.addr,e)}function iE(s,t){let e=za(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function sE(s,t){let e=za(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function rE(s,t){let e=za(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function oE(s,t){s.uniform1iv(this.addr,t)}function aE(s,t){s.uniform2iv(this.addr,t)}function lE(s,t){s.uniform3iv(this.addr,t)}function cE(s,t){s.uniform4iv(this.addr,t)}function hE(s,t){s.uniform1uiv(this.addr,t)}function uE(s,t){s.uniform2uiv(this.addr,t)}function fE(s,t){s.uniform3uiv(this.addr,t)}function dE(s,t){s.uniform4uiv(this.addr,t)}function pE(s,t,e){let n=this.cache,i=t.length,r=wf(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=Mm:o=$x;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function mE(s,t,e){let n=this.cache,i=t.length,r=wf(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Kx,r[o])}function gE(s,t,e){let n=this.cache,i=t.length,r=wf(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||jx,r[o])}function _E(s,t,e){let n=this.cache,i=t.length,r=wf(e,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Jx,r[o])}function xE(s){switch(s){case 5126:return QT;case 35664:return tE;case 35665:return eE;case 35666:return nE;case 35674:return iE;case 35675:return sE;case 35676:return rE;case 5124:case 35670:return oE;case 35667:case 35671:return aE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return hE;case 36294:return uE;case 36295:return fE;case 36296:return dE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return gE;case 36289:case 36303:case 36311:case 36292:return _E}}var bm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=jT(e.type)}},wm=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xE(e.type)}},Tm=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},vm=/(\w+)(\])?(\[|\.)?/g;function Ux(s,t){s.seq.push(t),s.map[t.id]=t}function yE(s,t,e){let n=s.name,i=n.length;for(vm.lastIndex=0;;){let r=vm.exec(n),o=vm.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ux(e,c===void 0?new bm(a,s,t):new wm(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Tm(a),Ux(e,d)),e=d}}}var ka=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);yE(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Ox(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var vE=37297,SE=0;function ME(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Fx=new jt;function bE(s){ge._getMatrix(Fx,ge.workingColorSpace,s);let t=`mat3( ${Fx.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case Ol:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return te("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Bx(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+ME(s.getShaderSource(t),a)}else return r}function wE(s,t){let e=bE(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var TE={[Vp]:"Linear",[Hp]:"Reinhard",[Gp]:"Cineon",[Wp]:"ACESFilmic",[Yp]:"AgX",[qp]:"Neutral",[Xp]:"Custom"};function EE(s,t){let e=TE[t];return e===void 0?(te("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var vf=new W;function AE(){ge.getLuminanceCoefficients(vf);let s=vf.x.toFixed(4),t=vf.y.toFixed(4),e=vf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yc).join(`
`)}function RE(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function PE(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function yc(s){return s!==""}function kx(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zx(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(s){return s.replace(IE,DE)}var LE=new Map;function DE(s,t){let e=le[t];if(e===void 0){let n=LE.get(t);if(n!==void 0)e=le[n],te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Em(e)}var NE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(s){return s.replace(NE,UE)}function UE(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Hx(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var OE={[ac]:"SHADOWMAP_TYPE_PCF",[Ir]:"SHADOWMAP_TYPE_VSM"};function FE(s){return OE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var BE={[Dr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE",[lc]:"ENVMAP_TYPE_CUBE_UV"};function kE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var zE={[bo]:"ENVMAP_MODE_REFRACTION"};function VE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var HE={[zp]:"ENVMAP_BLENDING_MULTIPLY",[ix]:"ENVMAP_BLENDING_MIX",[sx]:"ENVMAP_BLENDING_ADD"};function GE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":HE[s.combine]||"ENVMAP_BLENDING_NONE"}function WE(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function XE(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=FE(e),c=kE(e),h=VE(e),d=GE(e),u=WE(e),f=CE(e),p=RE(r),_=i.createProgram(),g,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(yc).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(yc).join(`
`),m.length>0&&(m+=`
`)):(g=[Hx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yc).join(`
`),m=[Hx(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?le.tonemapping_pars_fragment:"",e.toneMapping!==es?EE("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,wE("linearToOutputTexel",e.outputColorSpace),AE(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(yc).join(`
`)),o=Em(o),o=kx(o,e),o=zx(o,e),a=Em(a),a=kx(a,e),a=zx(a,e),o=Vx(o),a=Vx(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===im?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===im?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let S=M+g+o,x=M+m+a,b=Ox(i,i.VERTEX_SHADER,S),T=Ox(i,i.FRAGMENT_SHADER,x);i.attachShader(_,b),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(H){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(_)||"",j=i.getShaderInfoLog(b)||"",z=i.getShaderInfoLog(T)||"",q=O.trim(),nt=j.trim(),X=z.trim(),Y=!0,it=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,b,T);else{let D=Bx(i,b,"vertex"),ct=Bx(i,T,"fragment");ee("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+q+`
`+D+`
`+ct)}else q!==""?te("WebGLProgram: Program Info Log:",q):(nt===""||X==="")&&(it=!1);it&&(H.diagnostics={runnable:Y,programLog:q,vertexShader:{log:nt,prefix:g},fragmentShader:{log:X,prefix:m}})}i.deleteShader(b),i.deleteShader(T),y=new ka(i,_),E=PE(i,_)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let I=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=i.getProgramParameter(_,vE)),I},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=SE++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=T,this}var YE=0,Am=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Cm(t),e.set(t,n)),n}},Cm=class{constructor(t){this.id=YE++,this.code=t,this.usedTimes=0}};function qE(s){return s===Or||s===pc||s===mc}function ZE(s,t,e,n,i,r){let o=new zl,a=new Am,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return l.add(y),y===0?"uv":`uv${y}`}function _(y,E,I,H,O,j){let z=H.fog,q=O.geometry,nt=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?H.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,Y=t.get(y.envMap||nt,X),it=Y&&Y.mapping===lc?Y.image.height:null,D=f[y.type];y.precision!==null&&(u=n.getMaxPrecision(y.precision),u!==y.precision&&te("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));let ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pt=ct!==void 0?ct.length:0,Ct=0;q.morphAttributes.position!==void 0&&(Ct=1),q.morphAttributes.normal!==void 0&&(Ct=2),q.morphAttributes.color!==void 0&&(Ct=3);let kt,Bt,qt,k;if(D){let Jt=oi[D];kt=Jt.vertexShader,Bt=Jt.fragmentShader}else{kt=y.vertexShader,Bt=y.fragmentShader;let Jt=a.getVertexShaderStage(y),St=a.getFragmentShaderStage(y);a.update(y,Jt,St),qt=Jt.id,k=St.id}let F=s.getRenderTarget(),U=s.state.buffers.depth.getReversed(),N=O.isInstancedMesh===!0,V=O.isBatchedMesh===!0,st=!!y.map,ft=!!y.matcap,R=!!Y,G=!!y.aoMap,B=!!y.lightMap,P=!!y.bumpMap&&y.wireframe===!1,Q=!!y.normalMap,ut=!!y.displacementMap,gt=!!y.emissiveMap,dt=!!y.metalnessMap,J=!!y.roughnessMap,w=y.anisotropy>0,Rt=y.clearcoat>0,It=y.dispersion>0,L=y.retroreflectivity>0,v=y.iridescence>0,Z=y.sheen>0,et=y.transmission>0,ht=w&&!!y.anisotropyMap,bt=Rt&&!!y.clearcoatMap,yt=Rt&&!!y.clearcoatNormalMap,tt=Rt&&!!y.clearcoatRoughnessMap,rt=v&&!!y.iridescenceMap,vt=v&&!!y.iridescenceThicknessMap,Lt=Z&&!!y.sheenColorMap,Mt=Z&&!!y.sheenRoughnessMap,Et=!!y.specularMap,wt=!!y.specularColorMap,zt=!!y.specularIntensityMap,Kt=et&&!!y.transmissionMap,$=et&&!!y.thicknessMap,At=!!y.gradientMap,pt=!!y.alphaMap,Dt=y.alphaTest>0,Ut=!!y.alphaHash,_t=!!y.extensions,Tt=es;y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Tt=s.toneMapping);let xt={shaderID:D,shaderType:y.type,shaderName:y.name,vertexShader:kt,fragmentShader:Bt,defines:y.defines,customVertexShaderID:qt,customFragmentShaderID:k,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:V,batchingColor:V&&O._colorsTexture!==null,instancing:N,instancingColor:N&&O.instanceColor!==null,instancingMorph:N&&O.morphTexture!==null,outputColorSpace:F===null?s.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:st,matcap:ft,envMap:R,envMapMode:R&&Y.mapping,envMapCubeUVHeight:it,aoMap:G,lightMap:B,bumpMap:P,normalMap:Q,displacementMap:ut,emissiveMap:gt,normalMapObjectSpace:Q&&y.normalMapType===ax,normalMapTangentSpace:Q&&y.normalMapType===gf,packedNormalMap:Q&&y.normalMapType===gf&&qE(y.normalMap.format),metalnessMap:dt,roughnessMap:J,anisotropy:w,anisotropyMap:ht,clearcoat:Rt,clearcoatMap:bt,clearcoatNormalMap:yt,clearcoatRoughnessMap:tt,dispersion:It,retroreflection:L,iridescence:v,iridescenceMap:rt,iridescenceThicknessMap:vt,sheen:Z,sheenColorMap:Lt,sheenRoughnessMap:Mt,specularMap:Et,specularColorMap:wt,specularIntensityMap:zt,transmission:et,transmissionMap:Kt,thicknessMap:$,gradientMap:At,opaque:y.transparent===!1&&y.blending===Na&&y.alphaToCoverage===!1,alphaMap:pt,alphaTest:Dt,alphaHash:Ut,combine:y.combine,mapUv:st&&p(y.map.channel),aoMapUv:G&&p(y.aoMap.channel),lightMapUv:B&&p(y.lightMap.channel),bumpMapUv:P&&p(y.bumpMap.channel),normalMapUv:Q&&p(y.normalMap.channel),displacementMapUv:ut&&p(y.displacementMap.channel),emissiveMapUv:gt&&p(y.emissiveMap.channel),metalnessMapUv:dt&&p(y.metalnessMap.channel),roughnessMapUv:J&&p(y.roughnessMap.channel),anisotropyMapUv:ht&&p(y.anisotropyMap.channel),clearcoatMapUv:bt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:yt&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&p(y.sheenRoughnessMap.channel),specularMapUv:Et&&p(y.specularMap.channel),specularColorMapUv:wt&&p(y.specularColorMap.channel),specularIntensityMapUv:zt&&p(y.specularIntensityMap.channel),transmissionMapUv:Kt&&p(y.transmissionMap.channel),thicknessMapUv:$&&p(y.thicknessMap.channel),alphaMapUv:pt&&p(y.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Q||w),vertexNormals:!!q.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!q.attributes.uv&&(st||pt),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||q.attributes.normal===void 0&&Q===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:U,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Pt,morphTextureStride:Ct,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Tt,decodeVideoTexture:st&&y.map.isVideoTexture===!0&&ge.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:gt&&y.emissiveMap.isVideoTexture===!0&&ge.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ri,flipSided:y.side===si,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:_t&&y.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&y.extensions.multiDraw===!0||V)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function g(y){let E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(let I in y.defines)E.push(I),E.push(y.defines[I]);return y.isRawShaderMaterial===!1&&(m(E,y),M(E,y),E.push(s.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function m(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function M(y,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),y.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),y.push(o.mask)}function S(y){let E=f[y.type],I;if(E){let H=oi[E];I=gc.clone(H.uniforms)}else I=y.uniforms;return I}function x(y,E){let I=h.get(E);return I!==void 0?++I.usedTimes:(I=new XE(s,E,y,i),c.push(I),h.set(E,I)),I}function b(y){if(--y.usedTimes===0){let E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),h.delete(y.cacheKey),y.destroy()}}function T(y){a.remove(y)}function A(){a.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:S,acquireProgram:x,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function $E(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function JE(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function Gx(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Wx(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,_,g,m){let M=s[t];return M===void 0?(M={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[t]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=p,M.materialVariant=o(u),M.groupOrder=_,M.renderOrder=u.renderOrder,M.z=g,M.group=m),t++,M}function l(u,f,p,_,g,m,M){M.reversedDepth===!0&&(g=-g);let S=a(u,f,p,_,g,m);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):e.push(S)}function c(u,f,p,_,g,m){let M=a(u,f,p,_,g,m);p.transmission>0?n.unshift(M):p.transparent===!0?i.unshift(M):e.unshift(M)}function h(u,f){e.length>1&&e.sort(u||JE),n.length>1&&n.sort(f||Gx),i.length>1&&i.sort(f||Gx)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function KE(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Wx,s.set(n,[o])):i>=r.length?(o=new Wx,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function jE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new ne};break;case"SpotLight":e={position:new W,direction:new W,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new W,halfWidth:new W,halfHeight:new W};break}return s[t.id]=e,e}}}function QE(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var tA=0;function eA(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function nA(s){let t=new jE,e=QE(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let i=new W,r=new Ae,o=new Ae;function a(c){let h=0,d=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let f=0,p=0,_=0,g=0,m=0,M=0,S=0,x=0,b=0,T=0,A=0,y=0,E=0,I=0;c.sort(eA);for(let O=0,j=c.length;O<j;O++){let z=c[O],q=z.color,nt=z.intensity,X=z.distance,Y=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Or?Y=z.shadow.map.texture:Y=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=q.r*nt,d+=q.g*nt,u+=q.b*nt;else if(z.isLightProbe){for(let it=0;it<9;it++)n.probe[it].addScaledVector(z.sh.coefficients[it],nt);I++}else if(z.isSunLight){let it=t.get(z);if(it.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let D=z.shadow,ct=e.get(z);ct.shadowIntensity=D.intensity,ct.shadowBias=D.bias,ct.shadowNormalBias=D.normalBias,ct.shadowRadius=D.radius,ct.shadowMapSize.copy(D.mapSize).multiply(D.getFrameExtents()),n.sunShadow[p]=ct,n.sunShadowMap[p]=Y;let Pt=D.getViewportCount();for(let Ct=0;Ct<Pt;Ct++)n.sunShadowMatrix[_+Ct]=D.getMatrix(Ct),n.sunShadowCascade[_+Ct]=D._cascadeData[Ct];_+=Pt,p++}n.sun[f]=it,f++}else if(z.isDirectionalLight){let it=t.get(z);if(it.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let D=z.shadow,ct=e.get(z);ct.shadowIntensity=D.intensity,ct.shadowBias=D.bias,ct.shadowNormalBias=D.normalBias,ct.shadowRadius=D.radius,ct.shadowMapSize=D.mapSize,n.directionalShadow[g]=ct,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=z.shadow.matrix,b++}n.directional[g]=it,g++}else if(z.isSpotLight){let it=t.get(z);it.position.setFromMatrixPosition(z.matrixWorld),it.color.copy(q).multiplyScalar(nt),it.distance=X,it.coneCos=Math.cos(z.angle),it.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),it.decay=z.decay,n.spot[M]=it;let D=z.shadow;if(z.map&&(n.spotLightMap[y]=z.map,y++,D.updateMatrices(z),z.castShadow&&E++),n.spotLightMatrix[M]=D.matrix,z.castShadow){let ct=e.get(z);ct.shadowIntensity=D.intensity,ct.shadowBias=D.bias,ct.shadowNormalBias=D.normalBias,ct.shadowRadius=D.radius,ct.shadowMapSize=D.mapSize,n.spotShadow[M]=ct,n.spotShadowMap[M]=Y,A++}M++}else if(z.isRectAreaLight){let it=t.get(z);it.color.copy(q).multiplyScalar(nt),it.halfWidth.set(z.width*.5,0,0),it.halfHeight.set(0,z.height*.5,0),n.rectArea[S]=it,S++}else if(z.isPointLight){let it=t.get(z);if(it.color.copy(z.color).multiplyScalar(z.intensity),it.distance=z.distance,it.decay=z.decay,z.castShadow){let D=z.shadow,ct=e.get(z);ct.shadowIntensity=D.intensity,ct.shadowBias=D.bias,ct.shadowNormalBias=D.normalBias,ct.shadowRadius=D.radius,ct.shadowMapSize=D.mapSize,ct.shadowCameraNear=D.camera.near,ct.shadowCameraFar=D.camera.far,n.pointShadow[m]=ct,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=z.shadow.matrix,T++}n.point[m]=it,m++}else if(z.isHemisphereLight){let it=t.get(z);it.skyColor.copy(z.color).multiplyScalar(nt),it.groundColor.copy(z.groundColor).multiplyScalar(nt),n.hemi[x]=it,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ot.LTC_FLOAT_1,n.rectAreaLTC2=Ot.LTC_FLOAT_2):(n.rectAreaLTC1=Ot.LTC_HALF_1,n.rectAreaLTC2=Ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let H=n.hash;(H.sunLength!==f||H.directionalLength!==g||H.pointLength!==m||H.spotLength!==M||H.rectAreaLength!==S||H.hemiLength!==x||H.numSunShadows!==p||H.numDirectionalShadows!==b||H.numPointShadows!==T||H.numSpotShadows!==A||H.numSpotMaps!==y||H.numLightProbes!==I)&&(n.sun.length=f,n.directional.length=g,n.spot.length=M,n.rectArea.length=S,n.point.length=m,n.hemi.length=x,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+y-E,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,H.sunLength=f,H.directionalLength=g,H.pointLength=m,H.spotLength=M,H.rectAreaLength=S,H.hemiLength=x,H.numSunShadows=p,H.numDirectionalShadows=b,H.numPointShadows=T,H.numSpotShadows=A,H.numSpotMaps=y,H.numLightProbes=I,n.version=tA++)}function l(c,h){let d=0,u=0,f=0,p=0,_=0,g=0,m=h.matrixWorldInverse;for(let M=0,S=c.length;M<S;M++){let x=c[M];if(x.isSunLight){let b=n.sun[d];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),d++}else if(x.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(x.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let b=n.rectArea[_];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){let b=n.point[f];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let b=n.hemi[g];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Xx(s){let t=new nA(s),e=[],n=[],i=[];function r(u){d.camera=u,e.length=0,n.length=0,i.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){i.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function iA(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Xx(s),t.set(i,[a])):r>=o.length?(a=new Xx(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var sA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oA=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],aA=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Yx=new Ae,xc=new W,Sm=new W;function lA(s,t,e){let n=new wa,i=new mt,r=new mt,o=new be,a=new mu,l=new gu,c={},h=e.maxTextureSize,d={[Lr]:si,[si]:Lr,[ri]:ri},u=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new mt},radius:{value:4}},vertexShader:sA,fragmentShader:rA}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ue;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Le(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let m=this.type;this.render=function(T,A,y){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===B_&&(te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);let E=s.getRenderTarget(),I=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ws),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let j=m!==this.type;j&&A.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(q=>q.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,q=T.length;z<q;z++){let nt=T[z],X=nt.shadow;if(X===void 0){te("WebGLShadowMap:",nt,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let Y=X.getFrameExtents();i.multiply(Y),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,X.mapSize.y=r.y));let it=s.state.buffers.depth.getReversed();if(X.camera._reversedDepth=it,X.map===null||j===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ir){if(nt.isPointLight){te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new pi(i.x,i.y,{format:Or,type:ss,minFilter:En,magFilter:En,generateMipmaps:!1}),X.map.texture.name=nt.name+".shadowMap",X.map.depthTexture=new Tr(i.x,i.y,is),X.map.depthTexture.name=nt.name+".shadowMapDepth",X.map.depthTexture.format=vs,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn}else nt.isPointLight?(X.map=new Mf(i.x),X.map.depthTexture=new au(i.x,ns)):(X.map=new pi(i.x,i.y),X.map.depthTexture=new Tr(i.x,i.y,ns)),X.map.depthTexture.name=nt.name+".shadowMap",X.map.depthTexture.format=vs,this.type===ac?(X.map.depthTexture.compareFunction=it?xf:_f,X.map.depthTexture.minFilter=En,X.map.depthTexture.magFilter=En):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==i.x||X.map.height!==i.y)&&X.map.setSize(i.x,i.y);let D=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();nt.isPointLight!==!0&&X.updateMatrices(nt,y);for(let ct=0;ct<D;ct++){let Pt=X.getCamera(ct);if(nt.isPointLight){let Ct=X.camera,kt=X.matrix,Bt=nt.distance||Ct.far;Bt!==Ct.far&&(Ct.far=Bt,Ct.updateProjectionMatrix()),xc.setFromMatrixPosition(nt.matrixWorld),Ct.position.copy(xc),Sm.copy(Ct.position),Sm.add(oA[ct]),Ct.up.copy(aA[ct]),Ct.lookAt(Sm),Ct.updateMatrixWorld(),kt.makeTranslation(-xc.x,-xc.y,-xc.z),Yx.multiplyMatrices(Ct.projectionMatrix,Ct.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Yx,Ct.coordinateSystem,Ct.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)s.setRenderTarget(X.map,ct),s.clear();else{ct===0&&(s.setRenderTarget(X.map),s.clear());let Ct=X.getViewport(ct);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),O.viewport(o)}n=X.getFrustum(ct),x(A,y,Pt,nt,this.type)}X.isPointLightShadow!==!0&&this.type===Ir&&M(X,y),X.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(E,I,H)};function M(T,A){let y=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new pi(i.x,i.y,{format:Or,type:ss}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,y,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,y,f,_,null)}function S(T,A,y,E){let I=null,H=y.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(H!==void 0)I=H;else if(I=y.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let O=I.uuid,j=A.uuid,z=c[O];z===void 0&&(z={},c[O]=z);let q=z[j];q===void 0&&(q=I.clone(),z[j]=q,A.addEventListener("dispose",b)),I=q}if(I.visible=A.visible,I.wireframe=A.wireframe,E===Ir?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,y.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=s.properties.get(I);O.light=y}return I}function x(T,A,y,E,I){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&I===Ir)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,T.matrixWorld);let j=t.update(T),z=T.material;if(Array.isArray(z)){let q=j.groups;for(let nt=0,X=q.length;nt<X;nt++){let Y=q[nt],it=z[Y.materialIndex];if(it&&it.visible){let D=S(T,it,E,I);T.onBeforeShadow(s,T,A,y,j,D,Y),s.renderBufferDirect(y,null,j,D,T,Y),T.onAfterShadow(s,T,A,y,j,D,Y)}}}else if(z.visible){let q=S(T,z,E,I);T.onBeforeShadow(s,T,A,y,j,q,null),s.renderBufferDirect(y,null,j,q,T,null),T.onAfterShadow(s,T,A,y,j,q,null)}}let O=T.children;for(let j=0,z=O.length;j<z;j++)x(O[j],A,y,E,I)}function b(T){T.target.removeEventListener("dispose",b);for(let y in c){let E=c[y],I=T.target.uuid;I in E&&(E[I].dispose(),delete E[I])}}}function cA(s,t){function e(){let $=!1,At=new be,pt=null,Dt=new be(0,0,0,0);return{setMask:function(Ut){pt!==Ut&&!$&&(s.colorMask(Ut,Ut,Ut,Ut),pt=Ut)},setLocked:function(Ut){$=Ut},setClear:function(Ut,_t,Tt,xt,Jt){Jt===!0&&(Ut*=xt,_t*=xt,Tt*=xt),At.set(Ut,_t,Tt,xt),Dt.equals(At)===!1&&(s.clearColor(Ut,_t,Tt,xt),Dt.copy(At))},reset:function(){$=!1,pt=null,Dt.set(-1,0,0,0)}}}function n(){let $=!1,At=!1,pt=null,Dt=null,Ut=null;return{setReversed:function(_t){if(At!==_t){let Tt=t.get("EXT_clip_control");_t?Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.ZERO_TO_ONE_EXT):Tt.clipControlEXT(Tt.LOWER_LEFT_EXT,Tt.NEGATIVE_ONE_TO_ONE_EXT),At=_t;let xt=Ut;Ut=null,this.setClear(xt)}},getReversed:function(){return At},setTest:function(_t){_t?F(s.DEPTH_TEST):U(s.DEPTH_TEST)},setMask:function(_t){pt!==_t&&!$&&(s.depthMask(_t),pt=_t)},setFunc:function(_t){if(At&&(_t=xx[_t]),Dt!==_t){switch(_t){case Wh:s.depthFunc(s.NEVER);break;case Xh:s.depthFunc(s.ALWAYS);break;case Yh:s.depthFunc(s.LESS);break;case ma:s.depthFunc(s.LEQUAL);break;case qh:s.depthFunc(s.EQUAL);break;case Zh:s.depthFunc(s.GEQUAL);break;case $h:s.depthFunc(s.GREATER);break;case Jh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Dt=_t}},setLocked:function(_t){$=_t},setClear:function(_t){Ut!==_t&&(Ut=_t,At&&(_t=1-_t),s.clearDepth(_t))},reset:function(){$=!1,pt=null,Dt=null,Ut=null,At=!1}}}function i(){let $=!1,At=null,pt=null,Dt=null,Ut=null,_t=null,Tt=null,xt=null,Jt=null;return{setTest:function(St){$||(St?F(s.STENCIL_TEST):U(s.STENCIL_TEST))},setMask:function(St){At!==St&&!$&&(s.stencilMask(St),At=St)},setFunc:function(St,Qt,Wt){(pt!==St||Dt!==Qt||Ut!==Wt)&&(s.stencilFunc(St,Qt,Wt),pt=St,Dt=Qt,Ut=Wt)},setOp:function(St,Qt,Wt){(_t!==St||Tt!==Qt||xt!==Wt)&&(s.stencilOp(St,Qt,Wt),_t=St,Tt=Qt,xt=Wt)},setLocked:function(St){$=St},setClear:function(St){Jt!==St&&(s.clearStencil(St),Jt=St)},reset:function(){$=!1,At=null,pt=null,Dt=null,Ut=null,_t=null,Tt=null,xt=null,Jt=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,S=null,x=null,b=null,T=null,A=null,y=new ne(0,0,0),E=0,I=!1,H=null,O=null,j=null,z=null,q=null,nt=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),X=!1,Y=0,it=s.getParameter(s.VERSION);it.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(it)[1]),X=Y>=1):it.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(it)[1]),X=Y>=2);let D=null,ct={},Pt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),kt=new be().fromArray(Pt),Bt=new be().fromArray(Ct);function qt($,At,pt,Dt){let Ut=new Uint8Array(4),_t=s.createTexture();s.bindTexture($,_t),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Tt=0;Tt<pt;Tt++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(At,0,s.RGBA,1,1,Dt,0,s.RGBA,s.UNSIGNED_BYTE,Ut):s.texImage2D(At+Tt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ut);return _t}let k={};k[s.TEXTURE_2D]=qt(s.TEXTURE_2D,s.TEXTURE_2D,1),k[s.TEXTURE_CUBE_MAP]=qt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[s.TEXTURE_2D_ARRAY]=qt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),k[s.TEXTURE_3D]=qt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(s.DEPTH_TEST),o.setFunc(ma),P(!1),Q(Np),F(s.CULL_FACE),G(ws);function F($){h[$]!==!0&&(s.enable($),h[$]=!0)}function U($){h[$]!==!1&&(s.disable($),h[$]=!1)}function N($,At){return u[$]!==At?(s.bindFramebuffer($,At),u[$]=At,$===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=At),$===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=At),!0):!1}function V($,At){let pt=p,Dt=!1;if($){pt=f.get(At),pt===void 0&&(pt=[],f.set(At,pt));let Ut=$.textures;if(pt.length!==Ut.length||pt[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,Tt=Ut.length;_t<Tt;_t++)pt[_t]=s.COLOR_ATTACHMENT0+_t;pt.length=Ut.length,Dt=!0}}else pt[0]!==s.BACK&&(pt[0]=s.BACK,Dt=!0);Dt&&s.drawBuffers(pt)}function st($){return _!==$?(s.useProgram($),_=$,!0):!1}let ft={[Mo]:s.FUNC_ADD,[z_]:s.FUNC_SUBTRACT,[V_]:s.FUNC_REVERSE_SUBTRACT};ft[H_]=s.MIN,ft[G_]=s.MAX;let R={[W_]:s.ZERO,[X_]:s.ONE,[Y_]:s.SRC_COLOR,[Bp]:s.SRC_ALPHA,[j_]:s.SRC_ALPHA_SATURATE,[J_]:s.DST_COLOR,[Z_]:s.DST_ALPHA,[q_]:s.ONE_MINUS_SRC_COLOR,[kp]:s.ONE_MINUS_SRC_ALPHA,[K_]:s.ONE_MINUS_DST_COLOR,[$_]:s.ONE_MINUS_DST_ALPHA,[Q_]:s.CONSTANT_COLOR,[tx]:s.ONE_MINUS_CONSTANT_COLOR,[ex]:s.CONSTANT_ALPHA,[nx]:s.ONE_MINUS_CONSTANT_ALPHA};function G($,At,pt,Dt,Ut,_t,Tt,xt,Jt,St){if($===ws){g===!0&&(U(s.BLEND),g=!1);return}if(g===!1&&(F(s.BLEND),g=!0),$!==k_){if($!==m||St!==I){if((M!==Mo||b!==Mo)&&(s.blendEquation(s.FUNC_ADD),M=Mo,b=Mo),St)switch($){case Na:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Up:s.blendFunc(s.ONE,s.ONE);break;case Op:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ee("WebGLState: Invalid blending: ",$);break}else switch($){case Na:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Up:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Op:ee("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fp:ee("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ee("WebGLState: Invalid blending: ",$);break}S=null,x=null,T=null,A=null,y.set(0,0,0),E=0,m=$,I=St}return}Ut=Ut||At,_t=_t||pt,Tt=Tt||Dt,(At!==M||Ut!==b)&&(s.blendEquationSeparate(ft[At],ft[Ut]),M=At,b=Ut),(pt!==S||Dt!==x||_t!==T||Tt!==A)&&(s.blendFuncSeparate(R[pt],R[Dt],R[_t],R[Tt]),S=pt,x=Dt,T=_t,A=Tt),(xt.equals(y)===!1||Jt!==E)&&(s.blendColor(xt.r,xt.g,xt.b,Jt),y.copy(xt),E=Jt),m=$,I=!1}function B($,At){$.side===ri?U(s.CULL_FACE):F(s.CULL_FACE);let pt=$.side===si;At&&(pt=!pt),P(pt),$.blending===Na&&$.transparent===!1?G(ws):G($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),o.setFunc($.depthFunc),o.setTest($.depthTest),o.setMask($.depthWrite),r.setMask($.colorWrite);let Dt=$.stencilWrite;a.setTest(Dt),Dt&&(a.setMask($.stencilWriteMask),a.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),a.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),gt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?F(s.SAMPLE_ALPHA_TO_COVERAGE):U(s.SAMPLE_ALPHA_TO_COVERAGE)}function P($){H!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),H=$)}function Q($){$!==O_?(F(s.CULL_FACE),$!==O&&($===Np?s.cullFace(s.BACK):$===F_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):U(s.CULL_FACE),O=$}function ut($){$!==j&&(X&&s.lineWidth($),j=$)}function gt($,At,pt){$?(F(s.POLYGON_OFFSET_FILL),(z!==At||q!==pt)&&(z=At,q=pt,o.getReversed()&&(At=-At),s.polygonOffset(At,pt))):U(s.POLYGON_OFFSET_FILL)}function dt($){$?F(s.SCISSOR_TEST):U(s.SCISSOR_TEST)}function J($){$===void 0&&($=s.TEXTURE0+nt-1),D!==$&&(s.activeTexture($),D=$)}function w($,At,pt){pt===void 0&&(D===null?pt=s.TEXTURE0+nt-1:pt=D);let Dt=ct[pt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ct[pt]=Dt),(Dt.type!==$||Dt.texture!==At)&&(D!==pt&&(s.activeTexture(pt),D=pt),s.bindTexture($,At||k[$]),Dt.type=$,Dt.texture=At)}function Rt(){let $=ct[D];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function It(){try{s.compressedTexImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function L(){try{s.compressedTexImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function v(){try{s.texSubImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function Z(){try{s.texSubImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function et(){try{s.compressedTexSubImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function ht(){try{s.compressedTexSubImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function bt(){try{s.texStorage2D(...arguments)}catch($){ee("WebGLState:",$)}}function yt(){try{s.texStorage3D(...arguments)}catch($){ee("WebGLState:",$)}}function tt(){try{s.texImage2D(...arguments)}catch($){ee("WebGLState:",$)}}function rt(){try{s.texImage3D(...arguments)}catch($){ee("WebGLState:",$)}}function vt($){return d[$]!==void 0?d[$]:s.getParameter($)}function Lt($,At){d[$]!==At&&(s.pixelStorei($,At),d[$]=At)}function Mt($){kt.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),kt.copy($))}function Et($){Bt.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),Bt.copy($))}function wt($,At){let pt=c.get(At);pt===void 0&&(pt=new WeakMap,c.set(At,pt));let Dt=pt.get($);Dt===void 0&&(Dt=s.getUniformBlockIndex(At,$.name),pt.set($,Dt))}function zt($,At){let Dt=c.get(At).get($);l.get(At)!==Dt&&(s.uniformBlockBinding(At,Dt,$.__bindingPointIndex),l.set(At,Dt))}function Kt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},D=null,ct={},u={},f=new WeakMap,p=[],_=null,g=!1,m=null,M=null,S=null,x=null,b=null,T=null,A=null,y=new ne(0,0,0),E=0,I=!1,H=null,O=null,j=null,z=null,q=null,kt.set(0,0,s.canvas.width,s.canvas.height),Bt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:F,disable:U,bindFramebuffer:N,drawBuffers:V,useProgram:st,setBlending:G,setMaterial:B,setFlipSided:P,setCullFace:Q,setLineWidth:ut,setPolygonOffset:gt,setScissorTest:dt,activeTexture:J,bindTexture:w,unbindTexture:Rt,compressedTexImage2D:It,compressedTexImage3D:L,texImage2D:tt,texImage3D:rt,pixelStorei:Lt,getParameter:vt,updateUBOMapping:wt,uniformBlockBinding:zt,texStorage2D:bt,texStorage3D:yt,texSubImage2D:v,texSubImage3D:Z,compressedTexSubImage2D:et,compressedTexSubImage3D:ht,scissor:Mt,viewport:Et,reset:Kt}}function hA(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new mt,h=new WeakMap,d=new Set,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(L,v){return p?new OffscreenCanvas(L,v):Fl("canvas")}function g(L,v,Z){let et=1,ht=It(L);if((ht.width>Z||ht.height>Z)&&(et=Z/Math.max(ht.width,ht.height)),et<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let bt=Math.floor(et*ht.width),yt=Math.floor(et*ht.height);u===void 0&&(u=_(bt,yt));let tt=v?_(bt,yt):u;return tt.width=bt,tt.height=yt,tt.getContext("2d").drawImage(L,0,0,bt,yt),te("WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+bt+"x"+yt+")."),tt}else return"data"in L&&te("WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function m(L){return L.generateMipmaps}function M(L){s.generateMipmap(L)}function S(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(L,v,Z,et,ht,bt=!1){if(L!==null){if(s[L]!==void 0)return s[L];te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let yt;et&&(yt=t.get("EXT_texture_norm16"),yt||te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=v;if(v===s.RED&&(Z===s.FLOAT&&(tt=s.R32F),Z===s.HALF_FLOAT&&(tt=s.R16F),Z===s.UNSIGNED_BYTE&&(tt=s.R8),Z===s.UNSIGNED_SHORT&&yt&&(tt=yt.R16_EXT),Z===s.SHORT&&yt&&(tt=yt.R16_SNORM_EXT)),v===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.R8UI),Z===s.UNSIGNED_SHORT&&(tt=s.R16UI),Z===s.UNSIGNED_INT&&(tt=s.R32UI),Z===s.BYTE&&(tt=s.R8I),Z===s.SHORT&&(tt=s.R16I),Z===s.INT&&(tt=s.R32I)),v===s.RG&&(Z===s.FLOAT&&(tt=s.RG32F),Z===s.HALF_FLOAT&&(tt=s.RG16F),Z===s.UNSIGNED_BYTE&&(tt=s.RG8),Z===s.UNSIGNED_SHORT&&yt&&(tt=yt.RG16_EXT),Z===s.SHORT&&yt&&(tt=yt.RG16_SNORM_EXT)),v===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.RG8UI),Z===s.UNSIGNED_SHORT&&(tt=s.RG16UI),Z===s.UNSIGNED_INT&&(tt=s.RG32UI),Z===s.BYTE&&(tt=s.RG8I),Z===s.SHORT&&(tt=s.RG16I),Z===s.INT&&(tt=s.RG32I)),v===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),Z===s.UNSIGNED_INT&&(tt=s.RGB32UI),Z===s.BYTE&&(tt=s.RGB8I),Z===s.SHORT&&(tt=s.RGB16I),Z===s.INT&&(tt=s.RGB32I)),v===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),Z===s.UNSIGNED_INT&&(tt=s.RGBA32UI),Z===s.BYTE&&(tt=s.RGBA8I),Z===s.SHORT&&(tt=s.RGBA16I),Z===s.INT&&(tt=s.RGBA32I)),v===s.RGB&&(Z===s.UNSIGNED_SHORT&&yt&&(tt=yt.RGB16_EXT),Z===s.SHORT&&yt&&(tt=yt.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(tt=s.R11F_G11F_B10F)),v===s.RGBA){let rt=bt?Ol:ge.getTransfer(ht);Z===s.FLOAT&&(tt=s.RGBA32F),Z===s.HALF_FLOAT&&(tt=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(tt=rt===Me?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&yt&&(tt=yt.RGBA16_EXT),Z===s.SHORT&&yt&&(tt=yt.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(L,v){let Z;return L?v===null||v===ns||v===Oa?Z=s.DEPTH24_STENCIL8:v===is?Z=s.DEPTH32F_STENCIL8:v===Ua&&(Z=s.DEPTH24_STENCIL8,te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ns||v===Oa?Z=s.DEPTH_COMPONENT24:v===is?Z=s.DEPTH_COMPONENT32F:v===Ua&&(Z=s.DEPTH_COMPONENT16),Z}function T(L,v){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==vn&&L.minFilter!==En?Math.log2(Math.max(v.width,v.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?v.mipmaps.length:1}function A(L){let v=L.target;v.removeEventListener("dispose",A),E(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&d.delete(v)}function y(L){let v=L.target;v.removeEventListener("dispose",y),H(v)}function E(L){let v=n.get(L);if(v.__webglInit===void 0)return;let Z=L.source,et=f.get(Z);if(et){let ht=et[v.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&I(L),Object.keys(et).length===0&&f.delete(Z)}n.remove(L)}function I(L){let v=n.get(L);s.deleteTexture(v.__webglTexture);let Z=L.source,et=f.get(Z);delete et[v.__cacheKey],o.memory.textures--}function H(L){let v=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(v.__webglFramebuffer[et]))for(let ht=0;ht<v.__webglFramebuffer[et].length;ht++)s.deleteFramebuffer(v.__webglFramebuffer[et][ht]);else s.deleteFramebuffer(v.__webglFramebuffer[et]);v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer[et])}else{if(Array.isArray(v.__webglFramebuffer))for(let et=0;et<v.__webglFramebuffer.length;et++)s.deleteFramebuffer(v.__webglFramebuffer[et]);else s.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&s.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&s.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let et=0;et<v.__webglColorRenderbuffer.length;et++)v.__webglColorRenderbuffer[et]&&s.deleteRenderbuffer(v.__webglColorRenderbuffer[et]);v.__webglDepthRenderbuffer&&s.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let Z=L.textures;for(let et=0,ht=Z.length;et<ht;et++){let bt=n.get(Z[et]);bt.__webglTexture&&(s.deleteTexture(bt.__webglTexture),o.memory.textures--),n.remove(Z[et])}n.remove(L)}let O=0;function j(){O=0}function z(){return O}function q(L){O=L}function nt(){let L=O;return L>=i.maxTextures&&te("WebGLTextures: Trying to use "+(L+1)+" texture units while this GPU supports only "+i.maxTextures),O+=1,L}function X(L){let v=[];return v.push(L.wrapS),v.push(L.wrapT),v.push(L.wrapR||0),v.push(L.magFilter),v.push(L.minFilter),v.push(L.anisotropy),v.push(L.internalFormat),v.push(L.format),v.push(L.type),v.push(L.generateMipmaps),v.push(L.premultiplyAlpha),v.push(L.flipY),v.push(L.unpackAlignment),v.push(L.colorSpace),v.join()}function Y(L,v){let Z=n.get(L);if(L.isVideoTexture&&w(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Z.__version!==L.version){let et=L.image;if(et===null)te("WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)te("WebGLRenderer: Texture marked for update but image is incomplete");else{U(Z,L,v);return}}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+v)}function it(L,v){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){U(Z,L,v);return}else L.isExternalTexture&&(Z.__webglTexture=L.sourceTexture?L.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+v)}function D(L,v){let Z=n.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){U(Z,L,v);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+v)}function ct(L,v){let Z=n.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Z.__version!==L.version){N(Z,L,v);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+v)}let Pt={[ys]:s.REPEAT,[zi]:s.CLAMP_TO_EDGE,[ga]:s.MIRRORED_REPEAT},Ct={[vn]:s.NEAREST,[rx]:s.NEAREST_MIPMAP_NEAREST,[cc]:s.NEAREST_MIPMAP_LINEAR,[En]:s.LINEAR,[Lu]:s.LINEAR_MIPMAP_NEAREST,[Nr]:s.LINEAR_MIPMAP_LINEAR},kt={[cx]:s.NEVER,[px]:s.ALWAYS,[hx]:s.LESS,[_f]:s.LEQUAL,[ux]:s.EQUAL,[xf]:s.GEQUAL,[fx]:s.GREATER,[dx]:s.NOTEQUAL};function Bt(L,v){if(v.type===is&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===En||v.magFilter===Lu||v.magFilter===cc||v.magFilter===Nr||v.minFilter===En||v.minFilter===Lu||v.minFilter===cc||v.minFilter===Nr)&&te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,Pt[v.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,Pt[v.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,Pt[v.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,Ct[v.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,Ct[v.minFilter]),v.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,kt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vn||v.minFilter!==cc&&v.minFilter!==Nr||v.type===is&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function qt(L,v){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,v.addEventListener("dispose",A));let et=v.source,ht=f.get(et);ht===void 0&&(ht={},f.set(et,ht));let bt=X(v);if(bt!==L.__cacheKey){ht[bt]===void 0&&(ht[bt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ht[bt].usedTimes++;let yt=ht[L.__cacheKey];yt!==void 0&&(ht[L.__cacheKey].usedTimes--,yt.usedTimes===0&&I(v)),L.__cacheKey=bt,L.__webglTexture=ht[bt].texture}return Z}function k(L,v,Z){return Math.floor(Math.floor(L/Z)/v)}function F(L,v,Z,et){let bt=L.updateRanges;if(bt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,v.width,v.height,Z,et,v.data);else{bt.sort((Lt,Mt)=>Lt.start-Mt.start);let yt=0;for(let Lt=1;Lt<bt.length;Lt++){let Mt=bt[yt],Et=bt[Lt],wt=Mt.start+Mt.count,zt=k(Et.start,v.width,4),Kt=k(Mt.start,v.width,4);Et.start<=wt+1&&zt===Kt&&k(Et.start+Et.count-1,v.width,4)===zt?Mt.count=Math.max(Mt.count,Et.start+Et.count-Mt.start):(++yt,bt[yt]=Et)}bt.length=yt+1;let tt=e.getParameter(s.UNPACK_ROW_LENGTH),rt=e.getParameter(s.UNPACK_SKIP_PIXELS),vt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,v.width);for(let Lt=0,Mt=bt.length;Lt<Mt;Lt++){let Et=bt[Lt],wt=Math.floor(Et.start/4),zt=Math.ceil(Et.count/4),Kt=wt%v.width,$=Math.floor(wt/v.width),At=zt,pt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(s.UNPACK_SKIP_ROWS,$),e.texSubImage2D(s.TEXTURE_2D,0,Kt,$,At,pt,Z,et,v.data)}L.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,tt),e.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(s.UNPACK_SKIP_ROWS,vt)}}function U(L,v,Z){let et=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=s.TEXTURE_3D);let ht=qt(L,v),bt=v.source;e.bindTexture(et,L.__webglTexture,s.TEXTURE0+Z);let yt=n.get(bt);if(bt.version!==yt.__version||ht===!0){if(e.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let pt=ge.getPrimaries(ge.workingColorSpace),Dt=v.colorSpace===Qs?null:ge.getPrimaries(v.colorSpace),Ut=v.colorSpace===Qs||pt===Dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut)}e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment);let rt=g(v.image,!1,i.maxTextureSize);rt=Rt(v,rt);let vt=r.convert(v.format,v.colorSpace),Lt=r.convert(v.type),Mt=x(v.internalFormat,vt,Lt,v.normalized,v.colorSpace,v.isVideoTexture);Bt(et,v);let Et,wt=v.mipmaps,zt=v.isVideoTexture!==!0,Kt=yt.__version===void 0||ht===!0,$=bt.dataReady,At=T(v,rt);if(v.isDepthTexture)Mt=b(v.format===Ur,v.type),Kt&&(zt?e.texStorage2D(s.TEXTURE_2D,1,Mt,rt.width,rt.height):e.texImage2D(s.TEXTURE_2D,0,Mt,rt.width,rt.height,0,vt,Lt,null));else if(v.isDataTexture)if(wt.length>0){zt&&Kt&&e.texStorage2D(s.TEXTURE_2D,At,Mt,wt[0].width,wt[0].height);for(let pt=0,Dt=wt.length;pt<Dt;pt++)Et=wt[pt],zt?$&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Et.width,Et.height,vt,Lt,Et.data):e.texImage2D(s.TEXTURE_2D,pt,Mt,Et.width,Et.height,0,vt,Lt,Et.data);v.generateMipmaps=!1}else zt?(Kt&&e.texStorage2D(s.TEXTURE_2D,At,Mt,rt.width,rt.height),$&&F(v,rt,vt,Lt)):e.texImage2D(s.TEXTURE_2D,0,Mt,rt.width,rt.height,0,vt,Lt,rt.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){zt&&Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Mt,wt[0].width,wt[0].height,rt.depth);for(let pt=0,Dt=wt.length;pt<Dt;pt++)if(Et=wt[pt],v.format!==Hi)if(vt!==null)if(zt){if($)if(v.layerUpdates.size>0){let Ut=hm(Et.width,Et.height,v.format,v.type);for(let _t of v.layerUpdates){let Tt=Et.data.subarray(_t*Ut/Et.data.BYTES_PER_ELEMENT,(_t+1)*Ut/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,_t,Et.width,Et.height,1,vt,Tt)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,rt.depth,vt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pt,Mt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?$&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,pt,0,0,0,Et.width,Et.height,rt.depth,vt,Lt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,pt,Mt,Et.width,Et.height,rt.depth,0,vt,Lt,Et.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{zt&&Kt&&e.texStorage2D(s.TEXTURE_2D,At,Mt,wt[0].width,wt[0].height);for(let pt=0,Dt=wt.length;pt<Dt;pt++)Et=wt[pt],v.format!==Hi?vt!==null?zt?$&&e.compressedTexSubImage2D(s.TEXTURE_2D,pt,0,0,Et.width,Et.height,vt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,pt,Mt,Et.width,Et.height,0,Et.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?$&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,Et.width,Et.height,vt,Lt,Et.data):e.texImage2D(s.TEXTURE_2D,pt,Mt,Et.width,Et.height,0,vt,Lt,Et.data)}else if(v.isDataArrayTexture)if(zt){if(Kt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,At,Mt,rt.width,rt.height,rt.depth),$)if(v.layerUpdates.size>0){let pt=hm(rt.width,rt.height,v.format,v.type);for(let Dt of v.layerUpdates){let Ut=rt.data.subarray(Dt*pt/rt.data.BYTES_PER_ELEMENT,(Dt+1)*pt/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Dt,rt.width,rt.height,1,vt,Lt,Ut)}v.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,vt,Lt,rt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Mt,rt.width,rt.height,rt.depth,0,vt,Lt,rt.data);else if(v.isData3DTexture)zt?(Kt&&e.texStorage3D(s.TEXTURE_3D,At,Mt,rt.width,rt.height,rt.depth),$&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,vt,Lt,rt.data)):e.texImage3D(s.TEXTURE_3D,0,Mt,rt.width,rt.height,rt.depth,0,vt,Lt,rt.data);else if(v.isFramebufferTexture){if(Kt)if(zt)e.texStorage2D(s.TEXTURE_2D,At,Mt,rt.width,rt.height);else{let pt=rt.width,Dt=rt.height;for(let Ut=0;Ut<At;Ut++)e.texImage2D(s.TEXTURE_2D,Ut,Mt,pt,Dt,0,vt,Lt,null),pt>>=1,Dt>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in s){let pt=s.canvas;if(pt.hasAttribute("layoutsubtree")||pt.setAttribute("layoutsubtree","true"),rt.parentNode!==pt){pt.appendChild(rt),d.add(v),pt.onpaint=Dt=>{let Ut=Dt.changedElements;for(let _t of d)Ut.includes(_t.image)&&(_t.needsUpdate=!0)},pt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,rt);else{let Ut=s.RGBA,_t=s.RGBA,Tt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ut,_t,Tt,rt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(wt.length>0){if(zt&&Kt){let pt=It(wt[0]);e.texStorage2D(s.TEXTURE_2D,At,Mt,pt.width,pt.height)}for(let pt=0,Dt=wt.length;pt<Dt;pt++)Et=wt[pt],zt?$&&e.texSubImage2D(s.TEXTURE_2D,pt,0,0,vt,Lt,Et):e.texImage2D(s.TEXTURE_2D,pt,Mt,vt,Lt,Et);v.generateMipmaps=!1}else if(zt){if(Kt){let pt=It(rt);e.texStorage2D(s.TEXTURE_2D,At,Mt,pt.width,pt.height)}$&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,vt,Lt,rt)}else e.texImage2D(s.TEXTURE_2D,0,Mt,vt,Lt,rt);m(v)&&M(et),yt.__version=bt.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function N(L,v,Z){if(v.image.length!==6)return;let et=qt(L,v),ht=v.source;e.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+Z);let bt=n.get(ht);if(ht.version!==bt.__version||et===!0){e.activeTexture(s.TEXTURE0+Z);let yt=ge.getPrimaries(ge.workingColorSpace),tt=v.colorSpace===Qs?null:ge.getPrimaries(v.colorSpace),rt=v.colorSpace===Qs||yt===tt?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let vt=v.isCompressedTexture||v.image[0].isCompressedTexture,Lt=v.image[0]&&v.image[0].isDataTexture,Mt=[];for(let _t=0;_t<6;_t++)!vt&&!Lt?Mt[_t]=g(v.image[_t],!0,i.maxCubemapSize):Mt[_t]=Lt?v.image[_t].image:v.image[_t],Mt[_t]=Rt(v,Mt[_t]);let Et=Mt[0],wt=r.convert(v.format,v.colorSpace),zt=r.convert(v.type),Kt=x(v.internalFormat,wt,zt,v.normalized,v.colorSpace),$=v.isVideoTexture!==!0,At=bt.__version===void 0||et===!0,pt=ht.dataReady,Dt=T(v,Et);Bt(s.TEXTURE_CUBE_MAP,v);let Ut;if(vt){$&&At&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,Kt,Et.width,Et.height);for(let _t=0;_t<6;_t++){Ut=Mt[_t].mipmaps;for(let Tt=0;Tt<Ut.length;Tt++){let xt=Ut[Tt];v.format!==Hi?wt!==null?$?pt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,0,0,xt.width,xt.height,wt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,Kt,xt.width,xt.height,0,xt.data):te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,0,0,xt.width,xt.height,wt,zt,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt,Kt,xt.width,xt.height,0,wt,zt,xt.data)}}}else{if(Ut=v.mipmaps,$&&At){Ut.length>0&&Dt++;let _t=It(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,Dt,Kt,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Lt){$?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Mt[_t].width,Mt[_t].height,wt,zt,Mt[_t].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Kt,Mt[_t].width,Mt[_t].height,0,wt,zt,Mt[_t].data);for(let Tt=0;Tt<Ut.length;Tt++){let Jt=Ut[Tt].image[_t].image;$?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,0,0,Jt.width,Jt.height,wt,zt,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,Kt,Jt.width,Jt.height,0,wt,zt,Jt.data)}}else{$?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,wt,zt,Mt[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,Kt,wt,zt,Mt[_t]);for(let Tt=0;Tt<Ut.length;Tt++){let xt=Ut[Tt];$?pt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,0,0,wt,zt,xt.image[_t]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Tt+1,Kt,wt,zt,xt.image[_t])}}}m(v)&&M(s.TEXTURE_CUBE_MAP),bt.__version=ht.version,v.onUpdate&&v.onUpdate(v)}L.__version=v.version}function V(L,v,Z,et,ht,bt){let yt=r.convert(Z.format,Z.colorSpace),tt=r.convert(Z.type),rt=x(Z.internalFormat,yt,tt,Z.normalized,Z.colorSpace),vt=n.get(v),Lt=n.get(Z);if(Lt.__renderTarget=v,!vt.__hasExternalTextures){let Mt=Math.max(1,v.width>>bt),Et=Math.max(1,v.height>>bt);ht===s.TEXTURE_3D||ht===s.TEXTURE_2D_ARRAY?e.texImage3D(ht,bt,rt,Mt,Et,v.depth,0,yt,tt,null):e.texImage2D(ht,bt,rt,Mt,Et,0,yt,tt,null)}e.bindFramebuffer(s.FRAMEBUFFER,L),J(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,et,ht,Lt.__webglTexture,0,dt(v)):(ht===s.TEXTURE_2D||ht>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,et,ht,Lt.__webglTexture,bt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(L,v,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,L),v.depthBuffer){let et=v.depthTexture,ht=et&&et.isDepthTexture?et.type:null,bt=b(v.stencilBuffer,ht),yt=v.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;J(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt(v),bt,v.width,v.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt(v),bt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,bt,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,yt,s.RENDERBUFFER,L)}else{let et=v.textures;for(let ht=0;ht<et.length;ht++){let bt=et[ht],yt=r.convert(bt.format,bt.colorSpace),tt=r.convert(bt.type),rt=x(bt.internalFormat,yt,tt,bt.normalized,bt.colorSpace);J(v)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt(v),rt,v.width,v.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt(v),rt,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,rt,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ft(L,v,Z){let et=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,L),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ht=n.get(v.depthTexture);if(ht.__renderTarget=v,(!ht.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),et){if(ht.__webglInit===void 0&&(ht.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),ht.__webglTexture===void 0){ht.__webglTexture=s.createTexture(),e.bindTexture(s.TEXTURE_CUBE_MAP,ht.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,v.depthTexture);let vt=r.convert(v.depthTexture.format),Lt=r.convert(v.depthTexture.type),Mt;v.depthTexture.format===vs?Mt=s.DEPTH_COMPONENT24:v.depthTexture.format===Ur&&(Mt=s.DEPTH24_STENCIL8);for(let Et=0;Et<6;Et++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0,Mt,v.width,v.height,0,vt,Lt,null)}}else Y(v.depthTexture,0);let bt=ht.__webglTexture,yt=dt(v),tt=et?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,rt=v.depthTexture.format===Ur?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(v.depthTexture.format===vs)J(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,tt,bt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,rt,tt,bt,0);else if(v.depthTexture.format===Ur)J(v)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,tt,bt,0,yt):s.framebufferTexture2D(s.FRAMEBUFFER,rt,tt,bt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function R(L){let v=n.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==L.depthTexture){let et=L.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),et){let ht=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,et.removeEventListener("dispose",ht)};et.addEventListener("dispose",ht),v.__depthDisposeCallback=ht}v.__boundDepthTexture=et}if(L.depthTexture&&!v.__autoAllocateDepthBuffer)if(Z)for(let et=0;et<6;et++)ft(v.__webglFramebuffer[et],L,et);else{let et=L.texture.mipmaps;et&&et.length>0?ft(v.__webglFramebuffer[0],L,0):ft(v.__webglFramebuffer,L,0)}else if(Z){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)if(e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]===void 0)v.__webglDepthbuffer[et]=s.createRenderbuffer(),st(v.__webglDepthbuffer[et],L,!1);else{let ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=v.__webglDepthbuffer[et];s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,bt)}}else{let et=L.texture.mipmaps;if(et&&et.length>0?e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=s.createRenderbuffer(),st(v.__webglDepthbuffer,L,!1);else{let ht=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,bt=v.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,bt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ht,s.RENDERBUFFER,bt)}}e.bindFramebuffer(s.FRAMEBUFFER,null)}function G(L,v,Z){let et=n.get(L);v!==void 0&&V(et.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&R(L)}function B(L){let v=L.texture,Z=n.get(L),et=n.get(v);L.addEventListener("dispose",y);let ht=L.textures,bt=L.isWebGLCubeRenderTarget===!0,yt=ht.length>1;if(yt||(et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture()),et.__version=v.version,o.memory.textures++),bt){Z.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer[tt]=[];for(let rt=0;rt<v.mipmaps.length;rt++)Z.__webglFramebuffer[tt][rt]=s.createFramebuffer()}else Z.__webglFramebuffer[tt]=s.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let tt=0;tt<v.mipmaps.length;tt++)Z.__webglFramebuffer[tt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(yt)for(let tt=0,rt=ht.length;tt<rt;tt++){let vt=n.get(ht[tt]);vt.__webglTexture===void 0&&(vt.__webglTexture=s.createTexture(),o.memory.textures++)}if(L.samples>0&&J(L)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let tt=0;tt<ht.length;tt++){let rt=ht[tt];Z.__webglColorRenderbuffer[tt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[tt]);let vt=r.convert(rt.format,rt.colorSpace),Lt=r.convert(rt.type),Mt=x(rt.internalFormat,vt,Lt,rt.normalized,rt.colorSpace,L.isXRRenderTarget===!0),Et=dt(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Et,Mt,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[tt])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),st(Z.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(bt){e.bindTexture(s.TEXTURE_CUBE_MAP,et.__webglTexture),Bt(s.TEXTURE_CUBE_MAP,v);for(let tt=0;tt<6;tt++)if(v.mipmaps&&v.mipmaps.length>0)for(let rt=0;rt<v.mipmaps.length;rt++)V(Z.__webglFramebuffer[tt][rt],L,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,rt);else V(Z.__webglFramebuffer[tt],L,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);m(v)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let tt=0,rt=ht.length;tt<rt;tt++){let vt=ht[tt],Lt=n.get(vt),Mt=s.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Mt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(Mt,Lt.__webglTexture),Bt(Mt,vt),V(Z.__webglFramebuffer,L,vt,s.COLOR_ATTACHMENT0+tt,Mt,0),m(vt)&&M(Mt)}e.unbindTexture()}else{let tt=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(tt=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(tt,et.__webglTexture),Bt(tt,v),v.mipmaps&&v.mipmaps.length>0)for(let rt=0;rt<v.mipmaps.length;rt++)V(Z.__webglFramebuffer[rt],L,v,s.COLOR_ATTACHMENT0,tt,rt);else V(Z.__webglFramebuffer,L,v,s.COLOR_ATTACHMENT0,tt,0);m(v)&&M(tt),e.unbindTexture()}L.depthBuffer&&R(L)}function P(L){let v=L.textures;for(let Z=0,et=v.length;Z<et;Z++){let ht=v[Z];if(m(ht)){let bt=S(L),yt=n.get(ht).__webglTexture;e.bindTexture(bt,yt),M(bt),e.unbindTexture()}}}let Q=[],ut=[];function gt(L){if(L.samples>0){if(J(L)===!1){let v=L.textures,Z=L.width,et=L.height,ht=s.COLOR_BUFFER_BIT,bt=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,yt=n.get(L),tt=v.length>1;if(tt)for(let vt=0;vt<v.length;vt++)e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let rt=L.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<v.length;vt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=s.STENCIL_BUFFER_BIT)),tt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Lt=n.get(v[vt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Lt,0)}s.blitFramebuffer(0,0,Z,et,0,0,Z,et,ht,s.NEAREST),l===!0&&(Q.length=0,ut.length=0,Q.push(s.COLOR_ATTACHMENT0+vt),L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&(Q.push(bt),ut.push(bt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),tt)for(let vt=0;vt<v.length;vt++){e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Lt=n.get(v[vt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,yt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+vt,s.TEXTURE_2D,Lt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.storeMultisampledDepthBuffer===!1&&l){let v=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[v])}}}function dt(L){return Math.min(i.maxSamples,L.samples)}function J(L){let v=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function w(L){let v=o.render.frame;h.get(L)!==v&&(h.set(L,v),L.update())}function Rt(L,v){let Z=L.colorSpace,et=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Ul&&Z!==Qs&&(ge.getTransfer(Z)===Me?(et!==Hi||ht!==mi)&&te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ee("WebGLTextures: Unsupported texture color space:",Z)),v}function It(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=nt,this.resetTextureUnits=j,this.getTextureUnits=z,this.setTextureUnits=q,this.setTexture2D=Y,this.setTexture2DArray=it,this.setTexture3D=D,this.setTextureCube=ct,this.rebindTextures=G,this.setupRenderTarget=B,this.updateRenderTargetMipmap=P,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=V,this.useMultisampledRTT=J,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function uA(s,t){function e(n,i=Qs){let r,o=ge.getTransfer(i);if(n===mi)return s.UNSIGNED_BYTE;if(n===Nu)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===jp)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===$p)return s.BYTE;if(n===Jp)return s.SHORT;if(n===Ua)return s.UNSIGNED_SHORT;if(n===Du)return s.INT;if(n===ns)return s.UNSIGNED_INT;if(n===is)return s.FLOAT;if(n===ss)return s.HALF_FLOAT;if(n===Qp)return s.ALPHA;if(n===tm)return s.RGB;if(n===Hi)return s.RGBA;if(n===vs)return s.DEPTH_COMPONENT;if(n===Ur)return s.DEPTH_STENCIL;if(n===em)return s.RED;if(n===Ou)return s.RED_INTEGER;if(n===Or)return s.RG;if(n===Fu)return s.RG_INTEGER;if(n===Bu)return s.RGBA_INTEGER;if(n===hc||n===uc||n===fc||n===dc)if(o===Me)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===fc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===uc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===fc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ku||n===zu||n===Vu||n===Hu)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ku)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zu)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gu||n===Wu||n===Xu||n===Yu||n===qu||n===pc||n===Zu)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gu||n===Wu)return o===Me?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Xu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yu)return r.COMPRESSED_R11_EAC;if(n===qu)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pc)return r.COMPRESSED_RG11_EAC;if(n===Zu)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$u||n===Ju||n===Ku||n===ju||n===Qu||n===tf||n===ef||n===nf||n===sf||n===rf||n===of||n===af||n===lf||n===cf)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$u)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ju)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ku)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ju)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qu)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tf)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ef)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nf)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sf)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rf)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===of)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===af)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===lf)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cf)return o===Me?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hf||n===uf||n===ff)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hf)return o===Me?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uf)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ff)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===df||n===pf||n===mc||n===mf)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===df)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pf)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mf)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var fA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Rm=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Yl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:fA,fragmentShader:dA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Le(new Er(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Pm=class extends Ss{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,_=typeof XRWebGLBinding<"u",g=new Rm,m={},M=e.getContextAttributes(),S=null,x=null,b=[],T=[],A=new mt,y=null,E=null,I=new yn;I.viewport=new be;let H=new yn;H.viewport=new be;let O=[I,H],j=new Cu,z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let F=b[k];return F===void 0&&(F=new Sa,b[k]=F),F.getTargetRaySpace()},this.getControllerGrip=function(k){let F=b[k];return F===void 0&&(F=new Sa,b[k]=F),F.getGripSpace()},this.getHand=function(k){let F=b[k];return F===void 0&&(F=new Sa,b[k]=F),F.getHandSpace()};function nt(k){let F=T.indexOf(k.inputSource);if(F===-1)return;let U=b[F];U!==void 0&&(U.update(k.inputSource,k.frame,c||o),U.dispatchEvent({type:k.type,data:k.inputSource}))}function X(){i.removeEventListener("select",nt),i.removeEventListener("selectstart",nt),i.removeEventListener("selectend",nt),i.removeEventListener("squeeze",nt),i.removeEventListener("squeezestart",nt),i.removeEventListener("squeezeend",nt),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",Y);for(let k=0;k<b.length;k++){let F=T[k];F!==null&&(T[k]=null,b[k].disconnect(F))}z=null,q=null,g.reset();for(let k in m)delete m[k];if(t.setRenderTarget(S),f=null,u=null,d=null,i=null,x=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(y),t.setSize(A.width,A.height,!1),E!==null){let k=E.camera;k.fov=E.fov,k.zoom=E.zoom,k.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",nt),i.addEventListener("selectstart",nt),i.addEventListener("selectend",nt),i.addEventListener("squeeze",nt),i.addEventListener("squeezestart",nt),i.addEventListener("squeezeend",nt),i.addEventListener("end",X),i.addEventListener("inputsourceschange",Y),M.xrCompatible!==!0&&await e.makeXRCompatible(),y=t.getPixelRatio(),t.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let U=null,N=null,V=null;M.depth&&(V=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,U=M.stencil?Ur:vs,N=M.stencil?Oa:ns);let st={colorFormat:e.RGBA8,depthFormat:V,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(st),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new pi(u.textureWidth,u.textureHeight,{format:Hi,type:mi,depthTexture:new Tr(u.textureWidth,u.textureHeight,N,void 0,void 0,void 0,void 0,void 0,void 0,U),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let U={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,U),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new pi(f.framebufferWidth,f.framebufferHeight,{format:Hi,type:mi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(k){for(let F=0;F<k.removed.length;F++){let U=k.removed[F],N=T.indexOf(U);N>=0&&(T[N]=null,b[N].disconnect(U))}for(let F=0;F<k.added.length;F++){let U=k.added[F],N=T.indexOf(U);if(N===-1){for(let st=0;st<b.length;st++)if(st>=T.length){T.push(U),N=st;break}else if(T[st]===null){T[st]=U,N=st;break}if(N===-1)break}let V=b[N];V&&V.connect(U)}}let it=new W,D=new W;function ct(k,F,U){it.setFromMatrixPosition(F.matrixWorld),D.setFromMatrixPosition(U.matrixWorld);let N=it.distanceTo(D),V=F.projectionMatrix.elements,st=U.projectionMatrix.elements,ft=V[14]/(V[10]-1),R=V[14]/(V[10]+1),G=(V[9]+1)/V[5],B=(V[9]-1)/V[5],P=(V[8]-1)/V[0],Q=(st[8]+1)/st[0],ut=ft*P,gt=ft*Q,dt=N/(-P+Q),J=dt*-P;if(F.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(J),k.translateZ(dt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),V[10]===-1)k.projectionMatrix.copy(F.projectionMatrix),k.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{let w=ft+dt,Rt=R+dt,It=ut-J,L=gt+(N-J),v=G*R/Rt*w,Z=B*R/Rt*w;k.projectionMatrix.makePerspective(It,L,v,Z,w,Rt),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Pt(k,F){F===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(F.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;let F=k.near,U=k.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(U=g.depthFar)),j.near=H.near=I.near=F,j.far=H.far=I.far=U,(z!==j.near||q!==j.far)&&(i.updateRenderState({depthNear:j.near,depthFar:j.far}),z=j.near,q=j.far),j.layers.mask=k.layers.mask|6,I.layers.mask=j.layers.mask&-5,H.layers.mask=j.layers.mask&-3;let N=k.parent,V=j.cameras;Pt(j,N);for(let st=0;st<V.length;st++)Pt(V[st],N);V.length===2?ct(j,I,H):j.projectionMatrix.copy(I.projectionMatrix),E===null&&k.isPerspectiveCamera&&(E={camera:k,fov:k.fov,zoom:k.zoom}),Ct(k,j,N)};function Ct(k,F,U){U===null?k.matrix.copy(F.matrixWorld):(k.matrix.copy(U.matrixWorld),k.matrix.invert(),k.matrix.multiply(F.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(F.projectionMatrix),k.projectionMatrixInverse.copy(F.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=ya*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(k){l=k,u!==null&&(u.fixedFoveation=k),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=k)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(j)},this.getCameraTexture=function(k){return m[k]};let kt=null;function Bt(k,F){if(h=F.getViewerPose(c||o),p=F,h!==null){let U=h.views;f!==null&&(t.setRenderTargetFramebuffer(x,f.framebuffer),t.setRenderTarget(x));let N=!1;U.length!==j.cameras.length&&(j.cameras.length=0,N=!0);for(let R=0;R<U.length;R++){let G=U[R],B=null;if(f!==null)B=f.getViewport(G);else{let Q=d.getViewSubImage(u,G);B=Q.viewport,R===0&&(t.setRenderTargetTextures(x,Q.colorTexture,Q.depthStencilTexture),t.setRenderTarget(x))}let P=O[R];P===void 0&&(P=new yn,P.layers.enable(R),P.viewport=new be,O[R]=P),P.matrix.fromArray(G.transform.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale),P.projectionMatrix.fromArray(G.projectionMatrix),P.projectionMatrixInverse.copy(P.projectionMatrix).invert(),P.viewport.set(B.x,B.y,B.width,B.height),R===0&&(j.matrix.copy(P.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),N===!0&&j.cameras.push(P)}let V=i.enabledFeatures;if(V&&V.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let R=d.getDepthInformation(U[0]);R&&R.isValid&&R.texture&&g.init(R,i.renderState)}if(V&&V.includes("camera-access")&&_){t.state.unbindTexture(),d=n.getBinding();for(let R=0;R<U.length;R++){let G=U[R].camera;if(G){let B=m[G];B||(B=new Yl,m[G]=B);let P=d.getCameraImage(G);B.sourceTexture=P}}}}for(let U=0;U<b.length;U++){let N=T[U],V=b[U];N!==null&&V!==void 0&&V.update(N,F,c||o)}kt&&kt(k,F),F.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:F}),p=null}let qt=new qx;qt.setAnimationLoop(Bt),this.setAnimationLoop=function(k){kt=k},this.dispose=function(){}}},pA=new Ae,Qx=new jt;Qx.set(-1,0,0,0,1,0,0,0,1);function mA(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,am(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,M,S,x){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,x)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,M,S):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===si&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===si&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let M=t.get(m),S=M.envMap,x=M.envMapRotation;S&&(g.envMap.value=S,g.envMapRotation.value.setFromMatrix4(pA.makeRotationFromEuler(x)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Qx),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===si&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){let M=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function gA(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,b){let T=b.program;n.uniformBlockBinding(x,T)}function c(x,b){let T=i[x.id];T===void 0&&(g(x),T=h(x),i[x.id]=T,x.addEventListener("dispose",M));let A=b.program;n.updateUBOMapping(x,A);let y=t.render.frame;r[x.id]!==y&&(u(x),r[x.id]=y)}function h(x){let b=d();x.__bindingPointIndex=b;let T=s.createBuffer(),A=x.__size,y=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,A,y),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,T),T}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return ee("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){let b=i[x.id],T=x.uniforms,A=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let y=0,E=T.length;y<E;y++){let I=T[y];if(Array.isArray(I))for(let H=0,O=I.length;H<O;H++)f(I[H],y,H,A);else f(I,y,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,b,T,A){if(_(x,b,T,A)===!0){let y=x.__offset,E=x.value;if(Array.isArray(E)){let I=0;for(let H=0;H<E.length;H++){let O=E[H],j=m(O);p(O,x.__data,I),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(I+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(E,x.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,y,x.__data)}}function p(x,b,T){typeof x=="number"||typeof x=="boolean"?b[0]=x:x.isMatrix3?(b[0]=x.elements[0],b[1]=x.elements[1],b[2]=x.elements[2],b[3]=0,b[4]=x.elements[3],b[5]=x.elements[4],b[6]=x.elements[5],b[7]=0,b[8]=x.elements[6],b[9]=x.elements[7],b[10]=x.elements[8],b[11]=0):ArrayBuffer.isView(x)?b.set(new x.constructor(x.buffer,x.byteOffset,b.length)):x.toArray(b,T)}function _(x,b,T,A){let y=x.value,E=b+"_"+T;if(A[E]===void 0)return typeof y=="number"||typeof y=="boolean"?A[E]=y:ArrayBuffer.isView(y)?A[E]=y.slice():A[E]=y.clone(),!0;{let I=A[E];if(typeof y=="number"||typeof y=="boolean"){if(I!==y)return A[E]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(I.equals(y)===!1)return I.copy(y),!0}}return!1}function g(x){let b=x.uniforms,T=0,A=16;for(let E=0,I=b.length;E<I;E++){let H=Array.isArray(b[E])?b[E]:[b[E]];for(let O=0,j=H.length;O<j;O++){let z=H[O],q=Array.isArray(z.value)?z.value:[z.value];for(let nt=0,X=q.length;nt<X;nt++){let Y=q[nt],it=m(Y),D=T%A,ct=D%it.boundary,Pt=D+ct;T+=ct,Pt!==0&&A-Pt<it.storage&&(T+=A-Pt),z.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=T,T+=it.storage}}}let y=T%A;return y>0&&(T+=A-y),x.__size=T,x.__cache={},this}function m(x){let b={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(b.boundary=4,b.storage=4):x.isVector2?(b.boundary=8,b.storage=8):x.isVector3||x.isColor?(b.boundary=16,b.storage=12):x.isVector4?(b.boundary=16,b.storage=16):x.isMatrix3?(b.boundary=48,b.storage=48):x.isMatrix4?(b.boundary=64,b.storage=64):x.isTexture?te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(b.boundary=16,b.storage=x.byteLength):te("WebGLRenderer: Unsupported uniform value type.",x),b}function M(x){let b=x.target;b.removeEventListener("dispose",M);let T=o.indexOf(b.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[b.id]),delete i[b.id],delete r[b.id]}function S(){for(let x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:S}}var _A=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ts=null;function xA(){return Ts===null&&(Ts=new nu(_A,16,16,Or,ss),Ts.name="DFG_LUT",Ts.minFilter=En,Ts.magFilter=En,Ts.wrapS=zi,Ts.wrapT=zi,Ts.generateMipmaps=!1,Ts.needsUpdate=!0),Ts}var Fr=class{constructor(t={}){let{canvas:e=mx(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=mi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let _=f,g=new Set([Bu,Fu,Ou]),m=new Set([mi,ns,Ua,Oa,Nu,Uu]),M=new Uint32Array(4),S=new Int32Array(4),x=new W,b=null,T=null,A=[],y=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=es,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,H=!1,O=null,j=null,z=null,q=null;this._outputColorSpace=ni;let nt=0,X=0,Y=null,it=-1,D=null,ct=new be,Pt=new be,Ct=null,kt=new ne(0),Bt=0,qt=e.width,k=e.height,F=1,U=null,N=null,V=new be(0,0,qt,k),st=new be(0,0,qt,k),ft=!1,R=new wa,G=!1,B=!1,P=new Ae,Q=new W,ut=new be,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dt=!1;function J(){return Y===null?F:1}let w=n;function Rt(C,K){return e.getContext(C,K)}let It,L,v,Z,et,ht,bt,yt,tt,rt,vt,Lt,Mt,Et,wt,zt,Kt,$,At,pt,Dt,Ut,_t;try{let C={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Jt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",Qt,!1),w===null){let K="webgl2";if(w=Rt(K,C),w===null)throw Rt(K)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Tt()}catch(C){throw e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),ee("WebGLRenderer: "+C.message),C}function Tt(){It=new TT(w),It.init(),Dt=new uA(w,It),L=new mT(w,It,t,Dt),v=new cA(w,It),L.reversedDepthBuffer&&u&&v.buffers.depth.setReversed(!0),j=w.createFramebuffer(),z=w.createFramebuffer(),q=w.createFramebuffer(),Z=new CT(w),et=new $E,ht=new hA(w,It,v,et,L,Dt,Z),bt=new wT(I),yt=new Pb(w),Ut=new dT(w,yt),tt=new ET(w,yt,Z,Ut),rt=new PT(w,tt,yt,Ut,Z),$=new RT(w,L,ht),wt=new gT(et),vt=new ZE(I,bt,It,L,Ut,wt),Lt=new mA(I,et),Mt=new KE,Et=new iA(It),Kt=new fT(I,bt,v,rt,p,l),zt=new lA(I,rt,L),_t=new gA(w,Z,L,v),At=new pT(w,It,Z),pt=new AT(w,It,Z),Z.programs=vt.programs,I.capabilities=L,I.extensions=It,I.properties=et,I.renderLists=Mt,I.shadowMap=zt,I.state=v,I.info=Z}_!==mi&&(E=new LT(_,e.width,e.height,a,i,r));let xt=new Pm(I,w);this.xr=xt,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){let C=It.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=It.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(C){C!==void 0&&(F=C,this.setSize(qt,k,!1))},this.getSize=function(C){return C.set(qt,k)},this.setSize=function(C,K,lt=!0){if(xt.isPresenting){te("WebGLRenderer: Can't change size while VR device is presenting.");return}qt=C,k=K,e.width=Math.floor(C*F),e.height=Math.floor(K*F),lt===!0&&(e.style.width=C+"px",e.style.height=K+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,C,K)},this.getDrawingBufferSize=function(C){return C.set(qt*F,k*F).floor()},this.setDrawingBufferSize=function(C,K,lt){qt=C,k=K,F=lt,e.width=Math.floor(C*lt),e.height=Math.floor(K*lt),this.setViewport(0,0,C,K)},this.setEffects=function(C){if(_===mi){ee("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let K=0;K<C.length;K++)if(C[K].isOutputPass===!0){te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(ct)},this.getViewport=function(C){return C.copy(V)},this.setViewport=function(C,K,lt,ot){C.isVector4?V.set(C.x,C.y,C.z,C.w):V.set(C,K,lt,ot),v.viewport(ct.copy(V).multiplyScalar(F).round())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,K,lt,ot){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,K,lt,ot),v.scissor(Pt.copy(st).multiplyScalar(F).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){v.setScissorTest(ft=C)},this.setOpaqueSort=function(C){U=C},this.setTransparentSort=function(C){N=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(C=!0,K=!0,lt=!0){let ot=0;if(C){let at=!1;if(Y!==null){let Nt=Y.texture.format;at=g.has(Nt)}if(at){let Nt=Y.texture.type,Ht=m.has(Nt),Ft=Kt.getClearColor(),Xt=Kt.getClearAlpha(),$t=Ft.r,ae=Ft.g,me=Ft.b;Ht?(M[0]=$t,M[1]=ae,M[2]=me,M[3]=Xt,w.clearBufferuiv(w.COLOR,0,M)):(S[0]=$t,S[1]=ae,S[2]=me,S[3]=Xt,w.clearBufferiv(w.COLOR,0,S))}else ot|=w.COLOR_BUFFER_BIT}K&&(ot|=w.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),lt&&(ot|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ot!==0&&w.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),O=C},this.dispose=function(){e.removeEventListener("webglcontextlost",Jt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",Qt,!1),Kt.dispose(),Mt.dispose(),Et.dispose(),et.dispose(),bt.dispose(),rt.dispose(),Ut.dispose(),_t.dispose(),vt.dispose(),xt.dispose(),xt.removeEventListener("sessionstart",Be),xt.removeEventListener("sessionend",Ce),_e.stop()};function Jt(C){C.preventDefault(),Bl("WebGLRenderer: Context Lost."),H=!0}function St(){Bl("WebGLRenderer: Context Restored."),H=!1;let C=Z.autoReset,K=zt.enabled,lt=zt.autoUpdate,ot=zt.needsUpdate,at=zt.type;Tt(),Z.autoReset=C,zt.enabled=K,zt.autoUpdate=lt,zt.needsUpdate=ot,zt.type=at}function Qt(C){ee("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Wt(C){let K=C.target;K.removeEventListener("dispose",Wt),se(K)}function se(C){tn(C),et.remove(C)}function tn(C){let K=et.get(C).programs;K!==void 0&&(K.forEach(function(lt){vt.releaseProgram(lt)}),C.isShaderMaterial&&vt.releaseShaderCache(C))}this.renderBufferDirect=function(C,K,lt,ot,at,Nt){K===null&&(K=gt);let Ht=at.isMesh&&at.matrixWorld.determinantAffine()<0,Ft=mn(C,K,lt,ot,at);v.setMaterial(ot,Ht);let Xt=lt.index,$t=1;if(ot.wireframe===!0){if(Xt=tt.getWireframeAttribute(lt),Xt===void 0)return;$t=2}let ae=lt.drawRange,me=lt.attributes.position,Yt=ae.start*$t,ve=(ae.start+ae.count)*$t;Nt!==null&&(Yt=Math.max(Yt,Nt.start*$t),ve=Math.min(ve,(Nt.start+Nt.count)*$t)),Xt!==null?(Yt=Math.max(Yt,0),ve=Math.min(ve,Xt.count)):me!=null&&(Yt=Math.max(Yt,0),ve=Math.min(ve,me.count));let nn=ve-Yt;if(nn<0||nn===1/0)return;Ut.setup(at,ot,Ft,lt,Xt);let ke,Re=At;if(Xt!==null&&(ke=yt.get(Xt),Re=pt,Re.setIndex(ke)),at.isMesh)ot.wireframe===!0?(v.setLineWidth(ot.wireframeLinewidth*J()),Re.setMode(w.LINES)):Re.setMode(w.TRIANGLES);else if(at.isLine){let Ln=ot.linewidth;Ln===void 0&&(Ln=1),v.setLineWidth(Ln*J()),at.isLineSegments?Re.setMode(w.LINES):at.isLineLoop?Re.setMode(w.LINE_LOOP):Re.setMode(w.LINE_STRIP)}else at.isPoints?Re.setMode(w.POINTS):at.isSprite&&Re.setMode(w.TRIANGLES);if(at.isBatchedMesh)if(It.get("WEBGL_multi_draw"))Re.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{let Ln=at._multiDrawStarts,Vt=at._multiDrawCounts,Xn=at._multiDrawCount,ye=Xt?yt.get(Xt).bytesPerElement:1,Li=et.get(ot).currentProgram.getUniforms();for(let cs=0;cs<Xn;cs++)Li.setValue(w,"_gl_DrawID",cs),Re.render(Ln[cs]/ye,Vt[cs])}else if(at.isInstancedMesh)Re.renderInstances(Yt,nn,at.count);else if(lt.isInstancedBufferGeometry){let Ln=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Vt=Math.min(lt.instanceCount,Ln);Re.renderInstances(Yt,nn,Vt)}else Re.render(Yt,nn)};function fe(C,K,lt,ot){O!==null&&C.isNodeMaterial&&O.setObject(ot,C),G===!0&&wt.setState(C,lt,!1),C.transparent===!0&&C.side===ri&&C.forceSinglePass===!1?(C.side=si,C.needsUpdate=!0,qe(C,K,ot),C.side=Lr,C.needsUpdate=!0,qe(C,K,ot),C.side=ri):qe(C,K,ot)}this.compile=function(C,K,lt=null){lt===null&&(lt=C),O!==null&&O.renderStart(C,K,lt),T=Et.get(lt),T.init(K),y.push(T),lt.traverseVisible(function(at){at.isLight&&at.layers.test(K.layers)&&(T.pushLight(at),at.castShadow&&T.pushShadow(at))}),C!==lt&&C.traverseVisible(function(at){at.isLight&&at.layers.test(K.layers)&&(T.pushLight(at),at.castShadow&&T.pushShadow(at))}),T.setupLights(),O!==null&&O.updateLights(T.state.lightsArray),B=this.localClippingEnabled,G=wt.init(this.clippingPlanes,B),G===!0&&wt.setGlobalState(this.clippingPlanes,K),O!==null&&zt.render(T.state.shadowsArray,lt,K);let ot=new Set;return C.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;let Nt=at.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){let Ft=Nt[Ht];fe(Ft,lt,K,at),ot.add(Ft)}else fe(Nt,lt,K,at),ot.add(Nt)}),T=y.pop(),O!==null&&O.renderEnd(),ot},this.compileAsync=function(C,K,lt=null){let ot=this.compile(C,K,lt);return new Promise(at=>{function Nt(){if(ot.forEach(function(Ht){let Xt=et.get(Ht).currentProgram;(Xt===void 0||Xt.isReady())&&ot.delete(Ht)}),ot.size===0){at(C);return}setTimeout(Nt,10)}It.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Fe=null;function pn(C){Fe&&Fe(C)}function Be(){_e.stop()}function Ce(){_e.start()}let _e=new qx;_e.setAnimationLoop(pn),typeof self<"u"&&_e.setContext(self),this.setAnimationLoop=function(C){Fe=C,xt.setAnimationLoop(C),C===null?_e.stop():_e.start()},xt.addEventListener("sessionstart",Be),xt.addEventListener("sessionend",Ce),this.render=function(C,K){if(K!==void 0&&K.isCamera!==!0){ee("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;O!==null&&O.renderStart(C,K);let lt=xt.enabled===!0&&xt.isPresenting===!0,ot=E!==null&&(Y===null||lt)&&E.begin(I,Y);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),xt.enabled===!0&&xt.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(xt.cameraAutoUpdate===!0&&xt.updateCamera(K),K=xt.getCamera()),C.isScene===!0&&C.onBeforeRender(I,C,K,Y),T=Et.get(C,y.length),T.init(K),T.state.textureUnits=ht.getTextureUnits(),y.push(T),P.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),R.setFromProjectionMatrix(P,Ji,K.reversedDepth),B=this.localClippingEnabled,G=wt.init(this.clippingPlanes,B),b=Mt.get(C,A.length),b.init(),A.push(b),xt.enabled===!0&&xt.isPresenting===!0){let Ht=I.xr.getDepthSensingMesh();Ht!==null&&Gn(Ht,K,-1/0,I.sortObjects)}Gn(C,K,0,I.sortObjects),b.finish(),O!==null&&O.updateLights(T.state.lightsArray),I.sortObjects===!0&&b.sort(U,N),dt=xt.enabled===!1||xt.isPresenting===!1||xt.hasDepthSensing()===!1,dt&&Kt.addToRenderList(b,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&wt.beginShadows();let at=T.state.shadowsArray;if(zt.render(at,C,K),G===!0&&wt.endShadows(),(ot&&E.hasRenderPass())===!1){let Ht=b.opaque,Ft=b.transmissive;if(T.setupLights(),K.isArrayCamera){let Xt=K.cameras;if(Ft.length>0)for(let $t=0,ae=Xt.length;$t<ae;$t++){let me=Xt[$t];In(Ht,Ft,C,me)}dt&&Kt.render(C);for(let $t=0,ae=Xt.length;$t<ae;$t++){let me=Xt[$t];De(b,C,me,me.viewport)}}else Ft.length>0&&In(Ht,Ft,C,K),dt&&Kt.render(C),De(b,C,K)}Y!==null&&X===0&&(ht.updateMultisampleRenderTarget(Y),ht.updateRenderTargetMipmap(Y)),ot&&E.end(I),C.isScene===!0&&C.onAfterRender(I,C,K),Ut.resetDefaultState(),it=-1,D=null,y.pop(),y.length>0?(T=y[y.length-1],ht.setTextureUnits(T.state.textureUnits),G===!0&&wt.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,O!==null&&O.renderEnd()};function Gn(C,K,lt,ot){if(C.visible===!1)return;if(C.layers.test(K.layers)){if(C.isGroup)lt=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(K);else if(C.isLightProbeGrid)T.pushLightProbeGrid(C);else if(C.isLight)T.pushLight(C),C.castShadow&&T.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(R)){ot&&ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(P);let Ht=rt.update(C),Ft=C.material;Ft.visible&&b.push(C,Ht,Ft,lt,ut.z,null,K)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(R))){let Ht=rt.update(C),Ft=C.material;if(ot&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),ut.copy(C.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),ut.copy(Ht.boundingSphere.center)),ut.applyMatrix4(C.matrixWorld).applyMatrix4(P)),Array.isArray(Ft)){let Xt=Ht.groups;for(let $t=0,ae=Xt.length;$t<ae;$t++){let me=Xt[$t],Yt=Ft[me.materialIndex];Yt&&Yt.visible&&b.push(C,Ht,Yt,lt,ut.z,me,K)}}else Ft.visible&&b.push(C,Ht,Ft,lt,ut.z,null,K)}}let Nt=C.children;for(let Ht=0,Ft=Nt.length;Ht<Ft;Ht++)Gn(Nt[Ht],K,lt,ot)}function De(C,K,lt,ot){let{opaque:at,transmissive:Nt,transparent:Ht}=C;T.setupLightsView(lt),G===!0&&wt.setGlobalState(I.clippingPlanes,lt),ot&&v.viewport(ct.copy(ot)),at.length>0&&Wn(at,K,lt),Nt.length>0&&Wn(Nt,K,lt),Ht.length>0&&Wn(Ht,K,lt),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function In(C,K,lt,ot){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[ot.id]===void 0){let Yt=It.has("EXT_color_buffer_half_float")||It.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[ot.id]=new pi(1,1,{generateMipmaps:!0,type:Yt?ss:mi,minFilter:Nr,samples:Math.max(4,L.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Nt=T.state.transmissionRenderTarget[ot.id],Ht=ot.viewport||ct;Nt.setSize(Ht.z*I.transmissionResolutionScale,Ht.w*I.transmissionResolutionScale);let Ft=I.getRenderTarget(),Xt=I.getActiveCubeFace(),$t=I.getActiveMipmapLevel();I.setRenderTarget(Nt),I.getClearColor(kt),Bt=I.getClearAlpha(),Bt<1&&I.setClearColor(16777215,.5),I.clear(),dt&&Kt.render(lt);let ae=I.toneMapping;I.toneMapping=es;let me=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),T.setupLightsView(ot),G===!0&&wt.setGlobalState(I.clippingPlanes,ot),Wn(C,lt,ot),ht.updateMultisampleRenderTarget(Nt),ht.updateRenderTargetMipmap(Nt),It.has("WEBGL_multisampled_render_to_texture")===!1){let Yt=!1;for(let ve=0,nn=K.length;ve<nn;ve++){let ke=K[ve],{object:Re,geometry:Ln,material:Vt,group:Xn}=ke;if(Vt.side===ri&&Re.layers.test(ot.layers)){let ye=Vt.side;Vt.side=si,Vt.needsUpdate=!0,en(Re,lt,ot,Ln,Vt,Xn),Vt.side=ye,Vt.needsUpdate=!0,Yt=!0}}Yt===!0&&(ht.updateMultisampleRenderTarget(Nt),ht.updateRenderTargetMipmap(Nt))}I.setRenderTarget(Ft,Xt,$t),I.setClearColor(kt,Bt),me!==void 0&&(ot.viewport=me),I.toneMapping=ae}function Wn(C,K,lt){let ot=K.isScene===!0?K.overrideMaterial:null;for(let at=0,Nt=C.length;at<Nt;at++){let Ht=C[at],{object:Ft,geometry:Xt,group:$t}=Ht,ae=Ht.material;ae.allowOverride===!0&&ot!==null&&(ae=ot),Ft.layers.test(lt.layers)&&en(Ft,K,lt,Xt,ae,$t)}}function en(C,K,lt,ot,at,Nt){O!==null&&at.isNodeMaterial&&O.setObject(C,at),C.onBeforeRender(I,K,lt,ot,at,Nt),C.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),at.onBeforeRender(I,K,lt,ot,C,Nt),at.transparent===!0&&at.side===ri&&at.forceSinglePass===!1?(at.side=si,at.needsUpdate=!0,I.renderBufferDirect(lt,K,ot,at,C,Nt),at.side=Lr,at.needsUpdate=!0,I.renderBufferDirect(lt,K,ot,at,C,Nt),at.side=ri):I.renderBufferDirect(lt,K,ot,at,C,Nt),C.onAfterRender(I,K,lt,ot,at,Nt)}function qe(C,K,lt){K.isScene!==!0&&(K=gt);let ot=et.get(C),at=T.state.lights,Nt=T.state.shadowsArray,Ht=at.state.version,Ft=vt.getParameters(C,at.state,Nt,K,lt,T.state.lightProbeGridArray),Xt=vt.getProgramCacheKey(Ft),$t=ot.programs;ot.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?K.environment:null,ot.fog=K.fog;let ae=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ot.envMap=bt.get(C.envMap||ot.environment,ae),ot.envMapRotation=ot.environment!==null&&C.envMap===null?K.environmentRotation:C.envMapRotation,$t===void 0&&(C.addEventListener("dispose",Wt),$t=new Map,ot.programs=$t);let me=$t.get(Xt);if(me!==void 0){if(ot.currentProgram===me&&ot.lightsStateVersion===Ht)return ls(C,Ft),me}else Ft.uniforms=vt.getUniforms(C),O!==null&&C.isNodeMaterial&&O.build(C,lt,Ft),C.onBeforeCompile(Ft,I),me=vt.acquireProgram(Ft,Xt),$t.set(Xt,me),ot.uniforms=Ft.uniforms;let Yt=ot.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Yt.clippingPlanes=wt.uniform),ls(C,Ft),ot.needsLights=Ii(C),ot.lightsStateVersion=Ht,ot.needsLights&&(Yt.ambientLightColor.value=at.state.ambient,Yt.lightProbe.value=at.state.probe,Yt.sunLights.value=at.state.sun,Yt.sunLightShadows.value=at.state.sunShadow,Yt.directionalLights.value=at.state.directional,Yt.directionalLightShadows.value=at.state.directionalShadow,Yt.spotLights.value=at.state.spot,Yt.spotLightShadows.value=at.state.spotShadow,Yt.rectAreaLights.value=at.state.rectArea,Yt.ltc_1.value=at.state.rectAreaLTC1,Yt.ltc_2.value=at.state.rectAreaLTC2,Yt.pointLights.value=at.state.point,Yt.pointLightShadows.value=at.state.pointShadow,Yt.hemisphereLights.value=at.state.hemi,Yt.sunShadowMatrix.value=at.state.sunShadowMatrix,Yt.sunShadowCascade.value=at.state.sunShadowCascade,Yt.directionalShadowMatrix.value=at.state.directionalShadowMatrix,Yt.spotLightMatrix.value=at.state.spotLightMatrix,Yt.spotLightMap.value=at.state.spotLightMap,Yt.pointShadowMatrix.value=at.state.pointShadowMatrix),ot.lightProbeGrid=T.state.lightProbeGridArray.length>0,ot.currentProgram=me,ot.uniformsList=null,me}function cn(C){if(C.uniformsList===null){let K=C.currentProgram.getUniforms();C.uniformsList=ka.seqWithValue(K.seq,C.uniforms)}return C.uniformsList}function ls(C,K){let lt=et.get(C);lt.outputColorSpace=K.outputColorSpace,lt.batching=K.batching,lt.batchingColor=K.batchingColor,lt.instancing=K.instancing,lt.instancingColor=K.instancingColor,lt.instancingMorph=K.instancingMorph,lt.skinning=K.skinning,lt.morphTargets=K.morphTargets,lt.morphNormals=K.morphNormals,lt.morphColors=K.morphColors,lt.morphTargetsCount=K.morphTargetsCount,lt.numClippingPlanes=K.numClippingPlanes,lt.numIntersection=K.numClipIntersection,lt.vertexAlphas=K.vertexAlphas,lt.vertexTangents=K.vertexTangents,lt.toneMapping=K.toneMapping}function Co(C,K){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;x.setFromMatrixPosition(K.matrixWorld);for(let lt=0,ot=C.length;lt<ot;lt++){let at=C[lt];if(at.texture!==null&&at.boundingBox.containsPoint(x))return at}return null}function mn(C,K,lt,ot,at){K.isScene!==!0&&(K=gt),ht.resetTextureUnits();let Nt=K.fog,Ht=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial?K.environment:null,Ft=Y===null?I.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ge.workingColorSpace,Xt=ot.isMeshStandardMaterial||ot.isMeshLambertMaterial&&!ot.envMap||ot.isMeshPhongMaterial&&!ot.envMap,$t=bt.get(ot.envMap||Ht,Xt),ae=ot.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,me=!!lt.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),Yt=!!lt.morphAttributes.position,ve=!!lt.morphAttributes.normal,nn=!!lt.morphAttributes.color,ke=es;ot.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(ke=I.toneMapping);let Re=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ln=Re!==void 0?Re.length:0,Vt=et.get(ot),Xn=T.state.lights;if(G===!0&&(B===!0||C!==D)){let Ne=C===D&&ot.id===it;wt.setState(ot,C,Ne)}let ye=!1;ot.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xn.state.version||Vt.outputColorSpace!==Ft||at.isBatchedMesh&&Vt.batching===!1||!at.isBatchedMesh&&Vt.batching===!0||at.isBatchedMesh&&Vt.batchingColor===!0&&at._colorsTexture===null||at.isBatchedMesh&&Vt.batchingColor===!1&&at._colorsTexture!==null||at.isInstancedMesh&&Vt.instancing===!1||!at.isInstancedMesh&&Vt.instancing===!0||at.isSkinnedMesh&&Vt.skinning===!1||!at.isSkinnedMesh&&Vt.skinning===!0||at.isInstancedMesh&&Vt.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&Vt.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&Vt.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&Vt.instancingMorph===!1&&at.morphTexture!==null||Vt.envMap!==$t||ot.fog===!0&&Vt.fog!==Nt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==wt.numPlanes||Vt.numIntersection!==wt.numIntersection)||Vt.vertexAlphas!==ae||Vt.vertexTangents!==me||Vt.morphTargets!==Yt||Vt.morphNormals!==ve||Vt.morphColors!==nn||Vt.toneMapping!==ke||Vt.morphTargetsCount!==Ln||!!Vt.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(ye=!0):(ye=!0,Vt.__version=ot.version);let Li=Vt.currentProgram;ye===!0&&(Li=qe(ot,K,at),O&&ot.isNodeMaterial&&O.onUpdateProgram(ot,Li,Vt));let cs=!1,nr=!1,Po=!1,Ee=Li.getUniforms(),je=Vt.uniforms;if(v.useProgram(Li.program)&&(cs=!0,nr=!0,Po=!0),ot.id!==it&&(it=ot.id,nr=!0),Vt.needsLights){let Ne=Co(T.state.lightProbeGridArray,at);Vt.lightProbeGrid!==Ne&&(Vt.lightProbeGrid=Ne,nr=!0)}if(cs||D!==C){v.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ee.setValue(w,"projectionMatrix",C.projectionMatrix),Ee.setValue(w,"viewMatrix",C.matrixWorldInverse);let sr=Ee.map.cameraPosition;sr!==void 0&&sr.setValue(w,Q.setFromMatrixPosition(C.matrixWorld)),L.logarithmicDepthBuffer&&Ee.setValue(w,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&Ee.setValue(w,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,nr=!0,Po=!0)}if(Vt.needsLights&&(Xn.state.sunShadowMap.length>0&&Ee.setValue(w,"sunShadowMap",Xn.state.sunShadowMap,ht),Xn.state.directionalShadowMap.length>0&&Ee.setValue(w,"directionalShadowMap",Xn.state.directionalShadowMap,ht),Xn.state.spotShadowMap.length>0&&Ee.setValue(w,"spotShadowMap",Xn.state.spotShadowMap,ht),Xn.state.pointShadowMap.length>0&&Ee.setValue(w,"pointShadowMap",Xn.state.pointShadowMap,ht)),at.isSkinnedMesh){Ee.setOptional(w,at,"bindMatrix"),Ee.setOptional(w,at,"bindMatrixInverse");let Ne=at.skeleton;Ne&&(Ne.boneTexture===null&&Ne.computeBoneTexture(),Ee.setValue(w,"boneTexture",Ne.boneTexture,ht))}at.isBatchedMesh&&(Ee.setOptional(w,at,"batchingTexture"),Ee.setValue(w,"batchingTexture",at._matricesTexture,ht),Ee.setOptional(w,at,"batchingIdTexture"),Ee.setValue(w,"batchingIdTexture",at._indirectTexture,ht),Ee.setOptional(w,at,"batchingColorTexture"),at._colorsTexture!==null&&Ee.setValue(w,"batchingColorTexture",at._colorsTexture,ht));let ir=lt.morphAttributes;if((ir.position!==void 0||ir.normal!==void 0||ir.color!==void 0)&&$.update(at,lt,Li),(nr||Vt.receiveShadow!==at.receiveShadow)&&(Vt.receiveShadow=at.receiveShadow,Ee.setValue(w,"receiveShadow",at.receiveShadow)),(ot.isMeshStandardMaterial||ot.isMeshLambertMaterial||ot.isMeshPhongMaterial)&&ot.envMap===null&&K.environment!==null&&(je.envMapIntensity.value=K.environmentIntensity),je.dfgLUT!==void 0&&(je.dfgLUT.value=xA()),nr){if(Ee.setValue(w,"toneMappingExposure",I.toneMappingExposure),Vt.needsLights&&Ke(je,Po),Nt&&ot.fog===!0&&Lt.refreshFogUniforms(je,Nt),Lt.refreshMaterialUniforms(je,ot,F,k,T.state.transmissionRenderTarget[C.id]),Vt.needsLights&&Vt.lightProbeGrid){let Ne=Vt.lightProbeGrid;je.probesSH.value=Ne.texture,je.probesMin.value.copy(Ne.boundingBox.min),je.probesMax.value.copy(Ne.boundingBox.max),je.probesResolution.value.copy(Ne.resolution)}ka.upload(w,cn(Vt),je,ht)}if(ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(ka.upload(w,cn(Vt),je,ht),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&Ee.setValue(w,"center",at.center),Ee.setValue(w,"modelViewMatrix",at.modelViewMatrix),Ee.setValue(w,"normalMatrix",at.normalMatrix),Ee.setValue(w,"modelMatrix",at.matrixWorld),ot.uniformsGroups!==void 0){let Ne=ot.uniformsGroups;for(let sr=0,Io=Ne.length;sr<Io;sr++){let Jm=Ne[sr];_t.update(Jm,Li),_t.bind(Jm,Li)}}return Li}function Ke(C,K){C.ambientLightColor.needsUpdate=K,C.lightProbe.needsUpdate=K,C.sunLights.needsUpdate=K,C.sunLightShadows.needsUpdate=K,C.directionalLights.needsUpdate=K,C.directionalLightShadows.needsUpdate=K,C.pointLights.needsUpdate=K,C.pointLightShadows.needsUpdate=K,C.spotLights.needsUpdate=K,C.spotLightShadows.needsUpdate=K,C.rectAreaLights.needsUpdate=K,C.hemisphereLights.needsUpdate=K}function Ii(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,K,lt){let ot=et.get(C);ot.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),et.get(C.texture).__webglTexture=K,et.get(C.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:lt,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,K){let lt=et.get(C);lt.__webglFramebuffer=K,lt.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(C,K=0,lt=0){Y=C,nt=K,X=lt;let ot=null,at=!1,Nt=!1;if(C){let Ft=et.get(C);if(Ft.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(w.FRAMEBUFFER,Ft.__webglFramebuffer),ct.copy(C.viewport),Pt.copy(C.scissor),Ct=C.scissorTest,v.viewport(ct),v.scissor(Pt),v.setScissorTest(Ct),it=-1;return}else if(Ft.__webglFramebuffer===void 0)ht.setupRenderTarget(C);else if(Ft.__hasExternalTextures)ht.rebindTextures(C,et.get(C.texture).__webglTexture,et.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ae=C.depthTexture;if(Ft.__boundDepthTexture!==ae){if(ae!==null&&et.has(ae)&&(C.width!==ae.image.width||C.height!==ae.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ht.setupDepthRenderbuffer(C)}}let Xt=C.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Nt=!0);let $t=et.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($t[K])?ot=$t[K][lt]:ot=$t[K],at=!0):C.samples>0&&ht.useMultisampledRTT(C)===!1?ot=et.get(C).__webglMultisampledFramebuffer:Array.isArray($t)?ot=$t[lt]:ot=$t,ct.copy(C.viewport),Pt.copy(C.scissor),Ct=C.scissorTest}else ct.copy(V).multiplyScalar(F).floor(),Pt.copy(st).multiplyScalar(F).floor(),Ct=ft;if(lt!==0&&(ot=j),v.bindFramebuffer(w.FRAMEBUFFER,ot)&&v.drawBuffers(C,ot),v.viewport(ct),v.scissor(Pt),v.setScissorTest(Ct),at){let Ft=et.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+K,Ft.__webglTexture,lt)}else if(Nt){let Ft=K;for(let Xt=0;Xt<C.textures.length;Xt++){let $t=et.get(C.textures[Xt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Xt,$t.__webglTexture,lt,Ft)}}else if(C!==null&&lt!==0){let Ft=et.get(C.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ft.__webglTexture,lt)}it=-1};function Ro(C){let K=et.get(C);return(K.__readFormat!==C.format||K.__readType!==C.type)&&(K.__readFormat=C.format,K.__readType=C.type,K.__formatReadable=L.textureFormatReadable(C.format),K.__typeReadable=L.textureTypeReadable(C.type)),K}this.readRenderTargetPixels=function(C,K,lt,ot,at,Nt,Ht,Ft=0){if(!(C&&C.isWebGLRenderTarget)){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Xt=Xt[Ht]),Xt){v.bindFramebuffer(w.FRAMEBUFFER,Xt);try{let $t=C.textures[Ft],ae=$t.format,me=$t.type;C.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ft);let Yt=Ro($t);if(Yt.__formatReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Yt.__typeReadable===!1){ee("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=C.width-ot&&lt>=0&&lt<=C.height-at&&w.readPixels(K,lt,ot,at,Dt.convert(ae),Dt.convert(me),Nt)}finally{let $t=Y!==null?et.get(Y).__webglFramebuffer:null;v.bindFramebuffer(w.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(C,K,lt,ot,at,Nt,Ht,Ft=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xt=et.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ht!==void 0&&(Xt=Xt[Ht]),Xt)if(K>=0&&K<=C.width-ot&&lt>=0&&lt<=C.height-at){v.bindFramebuffer(w.FRAMEBUFFER,Xt);let $t=C.textures[Ft],ae=$t.format,me=$t.type;C.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+Ft);let Yt=Ro($t);if(Yt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Yt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ve=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,ve),w.bufferData(w.PIXEL_PACK_BUFFER,Nt.byteLength,w.STREAM_READ),w.readPixels(K,lt,ot,at,Dt.convert(ae),Dt.convert(me),0),w.bindBuffer(w.PIXEL_PACK_BUFFER,null);let nn=Y!==null?et.get(Y).__webglFramebuffer:null;v.bindFramebuffer(w.FRAMEBUFFER,nn);let ke=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await _x(w,ke,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,ve),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Nt),w.bindBuffer(w.PIXEL_PACK_BUFFER,null),w.deleteBuffer(ve),w.deleteSync(ke),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,K=null,lt=0){let ot=Math.pow(2,-lt),at=Math.floor(C.image.width*ot),Nt=Math.floor(C.image.height*ot),Ht=K!==null?K.x:0,Ft=K!==null?K.y:0;ht.setTexture2D(C,0),w.copyTexSubImage2D(w.TEXTURE_2D,lt,0,0,Ht,Ft,at,Nt),v.unbindTexture()},this.copyTextureToTexture=function(C,K,lt=null,ot=null,at=0,Nt=0){let Ht,Ft,Xt,$t,ae,me,Yt,ve,nn,ke=C.isCompressedTexture?C.mipmaps[Nt]:C.image;if(lt!==null)Ht=lt.max.x-lt.min.x,Ft=lt.max.y-lt.min.y,Xt=lt.isBox3?lt.max.z-lt.min.z:1,$t=lt.min.x,ae=lt.min.y,me=lt.isBox3?lt.min.z:0;else{let je=Math.pow(2,-at);Ht=Math.floor(ke.width*je),Ft=Math.floor(ke.height*je),C.isDataArrayTexture?Xt=ke.depth:C.isData3DTexture?Xt=Math.floor(ke.depth*je):Xt=1,$t=0,ae=0,me=0}ot!==null?(Yt=ot.x,ve=ot.y,nn=ot.z):(Yt=0,ve=0,nn=0);let Re=Dt.convert(K.format),Ln=Dt.convert(K.type),Vt;K.isData3DTexture?(ht.setTexture3D(K,0),Vt=w.TEXTURE_3D):K.isDataArrayTexture||K.isCompressedArrayTexture?(ht.setTexture2DArray(K,0),Vt=w.TEXTURE_2D_ARRAY):(ht.setTexture2D(K,0),Vt=w.TEXTURE_2D),v.activeTexture(w.TEXTURE0),v.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,K.flipY),v.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),v.pixelStorei(w.UNPACK_ALIGNMENT,K.unpackAlignment);let Xn=v.getParameter(w.UNPACK_ROW_LENGTH),ye=v.getParameter(w.UNPACK_IMAGE_HEIGHT),Li=v.getParameter(w.UNPACK_SKIP_PIXELS),cs=v.getParameter(w.UNPACK_SKIP_ROWS),nr=v.getParameter(w.UNPACK_SKIP_IMAGES);v.pixelStorei(w.UNPACK_ROW_LENGTH,ke.width),v.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ke.height),v.pixelStorei(w.UNPACK_SKIP_PIXELS,$t),v.pixelStorei(w.UNPACK_SKIP_ROWS,ae),v.pixelStorei(w.UNPACK_SKIP_IMAGES,me);let Po=C.isDataArrayTexture||C.isData3DTexture,Ee=K.isDataArrayTexture||K.isData3DTexture;if(C.isDepthTexture){let je=et.get(C),ir=et.get(K),Ne=et.get(je.__renderTarget),sr=et.get(ir.__renderTarget);v.bindFramebuffer(w.READ_FRAMEBUFFER,Ne.__webglFramebuffer),v.bindFramebuffer(w.DRAW_FRAMEBUFFER,sr.__webglFramebuffer);for(let Io=0;Io<Xt;Io++)Po&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,et.get(C).__webglTexture,at,me+Io),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,et.get(K).__webglTexture,Nt,nn+Io)),w.blitFramebuffer($t,ae,Ht,Ft,Yt,ve,Ht,Ft,w.DEPTH_BUFFER_BIT,w.NEAREST);v.bindFramebuffer(w.READ_FRAMEBUFFER,null),v.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(at!==0||C.isRenderTargetTexture||et.has(C)){let je=et.get(C),ir=et.get(K);v.bindFramebuffer(w.READ_FRAMEBUFFER,z),v.bindFramebuffer(w.DRAW_FRAMEBUFFER,q);for(let Ne=0;Ne<Xt;Ne++)Po?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,je.__webglTexture,at,me+Ne):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,je.__webglTexture,at),Ee?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ir.__webglTexture,Nt,nn+Ne):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ir.__webglTexture,Nt),at!==0?w.blitFramebuffer($t,ae,Ht,Ft,Yt,ve,Ht,Ft,w.COLOR_BUFFER_BIT,w.NEAREST):Ee?w.copyTexSubImage3D(Vt,Nt,Yt,ve,nn+Ne,$t,ae,Ht,Ft):w.copyTexSubImage2D(Vt,Nt,Yt,ve,$t,ae,Ht,Ft);v.bindFramebuffer(w.READ_FRAMEBUFFER,null),v.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Ee?C.isDataTexture||C.isData3DTexture?w.texSubImage3D(Vt,Nt,Yt,ve,nn,Ht,Ft,Xt,Re,Ln,ke.data):K.isCompressedArrayTexture?w.compressedTexSubImage3D(Vt,Nt,Yt,ve,nn,Ht,Ft,Xt,Re,ke.data):w.texSubImage3D(Vt,Nt,Yt,ve,nn,Ht,Ft,Xt,Re,Ln,ke):C.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Nt,Yt,ve,Ht,Ft,Re,Ln,ke.data):C.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Nt,Yt,ve,ke.width,ke.height,Re,ke.data):w.texSubImage2D(w.TEXTURE_2D,Nt,Yt,ve,Ht,Ft,Re,Ln,ke);v.pixelStorei(w.UNPACK_ROW_LENGTH,Xn),v.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ye),v.pixelStorei(w.UNPACK_SKIP_PIXELS,Li),v.pixelStorei(w.UNPACK_SKIP_ROWS,cs),v.pixelStorei(w.UNPACK_SKIP_IMAGES,nr),Nt===0&&K.generateMipmaps&&w.generateMipmap(Vt),v.unbindTexture()},this.initRenderTarget=function(C){et.get(C).__webglFramebuffer===void 0&&ht.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ht.setTextureCube(C,0):C.isData3DTexture?ht.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ht.setTexture2DArray(C,0):ht.setTexture2D(C,0),v.unbindTexture()},this.resetState=function(){nt=0,X=0,Y=null,v.reset(),Ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var ty=new Ai,Tf=new W,Br=class extends So{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new pe(t,3)),this.setAttribute("uv",new pe(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Pr(e,6,1);return this.setAttribute("instanceStart",new Ki(n,3,0)),this.setAttribute("instanceEnd",new Ki(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let n=new Pr(e,6,1);return this.setAttribute("instanceColorStart",new Ki(n,3,0)),this.setAttribute("instanceColorEnd",new Ki(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new ec(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ai);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),ty.setFromBufferAttribute(e),this.boundingBox.union(ty))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Tf.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Tf)),Tf.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(Tf));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}};Ot.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new mt},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};oi.line={uniforms:gc.merge([Ot.common,Ot.fog,Ot.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		float trimSegmentAlpha( const in vec4 start, const in vec4 end ) {

			// compute the interpolation factor needed to trim the segment so it terminates
			// between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column

			// we need different nearEstimate formula for reversed and default depth buffer
			// a is positive with a reversed depth buffer so it can be used for controlling the code flow
			float nearEstimate = ( a > 0.0 ) ? ( - b / ( a + 1.0 ) ) : ( - 0.5 * b / a );

			return ( nearEstimate - start.z ) / ( end.z - start.z );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef USE_DASH

				float lineDistanceStart = dashScale * instanceDistanceStart;
				float lineDistanceEnd = dashScale * instanceDistanceEnd;

			#endif

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( start, end );
					end.xyz = mix( start.xyz, end.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceEnd = mix( lineDistanceStart, lineDistanceEnd, alpha );

					#endif

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					float alpha = trimSegmentAlpha( end, start );
					start.xyz = mix( end.xyz, start.xyz, alpha );

					#ifdef USE_DASH

						lineDistanceStart = mix( lineDistanceEnd, lineDistanceStart, alpha );

					#endif

				}

			}

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? lineDistanceStart : lineDistanceEnd;
				vUv = uv;

			#endif

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			float alpha = opacity;
			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var kr=class extends an{constructor(t){super({type:"LineMaterial",uniforms:gc.clone(oi.line.uniforms),vertexShader:oi.line.vertexShader,fragmentShader:oi.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0!==this.worldUnits&&(this.needsUpdate=!0),t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}};var Lm=new be,ey=new W,ny=new W,An=new be,Cn=new be,Es=new be,Dm=new W,Nm=new Ae,Rn=new oc,iy=new W,Ef=new Ai,Af=new Vi,As=new be,Cs,Eo;function sy(s,t,e){return As.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),As.multiplyScalar(1/As.w),As.x=Eo/e.width,As.y=Eo/e.height,As.applyMatrix4(s.projectionMatrixInverse),As.multiplyScalar(1/As.w),Math.abs(Math.max(As.x,As.y))}function yA(s,t){let e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Rn.start.fromBufferAttribute(i,a),Rn.end.fromBufferAttribute(r,a),Rn.applyMatrix4(e);let c=new W,h=new W;Cs.distanceSqToSegment(Rn.start,Rn.end,h,c),h.distanceTo(c)<Eo*.5&&t.push({point:h,pointOnLine:c,distance:Cs.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function vA(s,t,e){let n=t.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),d=-t.near;Cs.at(1,Es),Es.w=1,Es.applyMatrix4(t.matrixWorldInverse),Es.applyMatrix4(n),Es.multiplyScalar(1/Es.w),Es.x*=r.x/2,Es.y*=r.y/2,Es.z=0,Dm.copy(Es),Nm.multiplyMatrices(t.matrixWorldInverse,o);for(let u=0,f=h;u<f;u++){if(An.fromBufferAttribute(l,u),Cn.fromBufferAttribute(c,u),An.w=1,Cn.w=1,An.applyMatrix4(Nm),Cn.applyMatrix4(Nm),An.z>d&&Cn.z>d)continue;if(An.z>d){let S=An.z-Cn.z,x=(An.z-d)/S;An.lerp(Cn,x)}else if(Cn.z>d){let S=Cn.z-An.z,x=(Cn.z-d)/S;Cn.lerp(An,x)}An.applyMatrix4(n),Cn.applyMatrix4(n),An.multiplyScalar(1/An.w),Cn.multiplyScalar(1/Cn.w),An.x*=r.x/2,An.y*=r.y/2,Cn.x*=r.x/2,Cn.y*=r.y/2,Rn.start.copy(An),Rn.start.z=0,Rn.end.copy(Cn),Rn.end.z=0;let _=Rn.closestPointToPointParameter(Dm,!0);Rn.at(_,iy);let g=rm.lerp(An.z,Cn.z,_),m=g>=-1&&g<=1,M=Dm.distanceTo(iy)<Eo*.5;if(m&&M){Rn.start.fromBufferAttribute(l,u),Rn.end.fromBufferAttribute(c,u),Rn.start.applyMatrix4(o),Rn.end.applyMatrix4(o);let S=new W,x=new W;Cs.distanceSqToSegment(Rn.start,Rn.end,x,S),e.push({point:x,pointOnLine:S,distance:Cs.origin.distanceTo(x),object:s,face:null,faceIndex:u,uv:null,uv1:null})}}}var Va=class extends Le{constructor(t=new Br,e=new kr({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)ey.fromBufferAttribute(e,o),ny.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+ey.distanceTo(ny);let r=new Pr(i,2,1);return t.setAttribute("instanceDistanceStart",new Ki(r,1,0)),t.setAttribute("instanceDistanceEnd",new Ki(r,1,1)),this}raycast(t,e){let n=this.material.worldUnits,i=t.camera;if(i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.'),n===!1&&(this.material.resolution.x===0||this.material.resolution.y===0))return;let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Cs=t.ray;let o=this.matrixWorld,a=this.geometry,l=this.material;Eo=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),Af.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Eo*.5;else{let d=Math.max(i.near,Af.distanceToPoint(Cs.origin));c=sy(i,d,l.resolution)}if(Af.radius+=c,Cs.intersectsSphere(Af)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),Ef.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Eo*.5;else{let d=Math.max(i.near,Ef.distanceToPoint(Cs.origin));h=sy(i,d,l.resolution)}Ef.expandByScalar(h),Cs.intersectsBox(Ef)!==!1&&(n?yA(this,e):vA(this,i,e))}onBeforeRender(t){let e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Lm),this.material.uniforms.resolution.value.set(Lm.z,Lm.w))}};var Ha=class extends Br{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){let e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){let e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}setFromPoints(t){let e=t.length-1,n=new Float32Array(6*e);for(let i=0;i<e;i++)n[6*i]=t[i].x,n[6*i+1]=t[i].y,n[6*i+2]=t[i].z||0,n[6*i+3]=t[i+1].x,n[6*i+4]=t[i+1].y,n[6*i+5]=t[i+1].z||0;return super.setPositions(n),this}fromLine(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}};var Cf=class extends Va{constructor(t=new Ha,e=new kr({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}};var vc=ni,Rf=class s extends _o{constructor(t){super(t),this.defaultDPI=90,this.defaultUnit="px"}load(t,e,n,i){let r=this,o=new sc(r.manager);o.setPath(r.path),o.setRequestHeader(r.requestHeader),o.setWithCredentials(r.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(l){i?i(l):console.error(l),r.manager.itemError(t)}},n,i)}parse(t){let e=this;function n(F,U){if(F.nodeType!==1)return;F.hasAttribute("filter")&&console.warn("THREE.SVGLoader: Filters are not supported.");let N=b(F),V=!1,st=null;switch(F.nodeName){case"svg":U=_(F,U);break;case"style":r(F);break;case"g":U=_(F,U);break;case"path":U=_(F,U),F.hasAttribute("d")&&(st=i(F));break;case"rect":U=_(F,U),st=l(F);break;case"polygon":U=_(F,U),st=c(F);break;case"polyline":U=_(F,U),st=h(F);break;case"circle":U=_(F,U),st=d(F);break;case"ellipse":U=_(F,U),st=u(F);break;case"line":U=_(F,U),st=f(F);break;case"defs":V=!0;break;case"use":U=_(F,U);let G=(F.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),B=F.viewportElement.getElementById(G);B?n(B,U):console.warn("SVGLoader: 'use node' references non-existent node id: "+G);break;default:}if(st){U.fill!==void 0&&U.fill!=="none"&&!U.fill.startsWith("url")&&st.color.setStyle(U.fill,vc),y(st,Bt),q.push(st);let R=Object.assign({},U);R.strokeWidth=U.strokeWidth*j(Bt),st.userData={node:F,style:R,transform:Bt.clone(),gradients:X}}let ft=F.childNodes;for(let R=0;R<ft.length;R++){let G=ft[R];V&&G.nodeName!=="style"&&G.nodeName!=="defs"||n(G,U)}N&&(Y.pop(),Y.length>0?Bt.copy(Y[Y.length-1]):Bt.identity())}function i(F){let U=new ts,N=new mt,V=new mt,st=new mt,ft=!0,R=!1,G=F.getAttribute("d");if(G===""||G==="none")return null;let B=G.match(/[a-df-z][^a-df-z]*/ig);for(let P=0,Q=B.length;P<Q;P++){let ut=B[P],gt=ut.charAt(0),dt=ut.slice(1).trim();ft===!0&&(R=!0,ft=!1);let J;switch(gt){case"M":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=2)N.x=J[w+0],N.y=J[w+1],V.x=N.x,V.y=N.y,w===0?U.moveTo(N.x,N.y):U.lineTo(N.x,N.y),w===0&&st.copy(N);break;case"H":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w++)N.x=J[w],V.x=N.x,V.y=N.y,U.lineTo(N.x,N.y),w===0&&R===!0&&st.copy(N);break;case"V":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w++)N.y=J[w],V.x=N.x,V.y=N.y,U.lineTo(N.x,N.y),w===0&&R===!0&&st.copy(N);break;case"L":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=2)N.x=J[w+0],N.y=J[w+1],V.x=N.x,V.y=N.y,U.lineTo(N.x,N.y),w===0&&R===!0&&st.copy(N);break;case"C":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=6)U.bezierCurveTo(J[w+0],J[w+1],J[w+2],J[w+3],J[w+4],J[w+5]),V.x=J[w+2],V.y=J[w+3],N.x=J[w+4],N.y=J[w+5],w===0&&R===!0&&st.copy(N);break;case"S":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=4)U.bezierCurveTo(g(N.x,V.x),g(N.y,V.y),J[w+0],J[w+1],J[w+2],J[w+3]),V.x=J[w+0],V.y=J[w+1],N.x=J[w+2],N.y=J[w+3],w===0&&R===!0&&st.copy(N);break;case"Q":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=4)U.quadraticCurveTo(J[w+0],J[w+1],J[w+2],J[w+3]),V.x=J[w+0],V.y=J[w+1],N.x=J[w+2],N.y=J[w+3],w===0&&R===!0&&st.copy(N);break;case"T":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=2){let It=g(N.x,V.x),L=g(N.y,V.y);U.quadraticCurveTo(It,L,J[w+0],J[w+1]),V.x=It,V.y=L,N.x=J[w+0],N.y=J[w+1],w===0&&R===!0&&st.copy(N)}break;case"A":J=m(dt,[3,4],7);for(let w=0,Rt=J.length;w<Rt;w+=7){if(J[w+5]==N.x&&J[w+6]==N.y)continue;let It=N.clone();N.x=J[w+5],N.y=J[w+6],V.x=N.x,V.y=N.y,o(U,J[w],J[w+1],J[w+2],J[w+3],J[w+4],It,N),w===0&&R===!0&&st.copy(N)}break;case"m":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=2)N.x+=J[w+0],N.y+=J[w+1],V.x=N.x,V.y=N.y,w===0?U.moveTo(N.x,N.y):U.lineTo(N.x,N.y),w===0&&st.copy(N);break;case"h":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w++)N.x+=J[w],V.x=N.x,V.y=N.y,U.lineTo(N.x,N.y),w===0&&R===!0&&st.copy(N);break;case"v":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w++)N.y+=J[w],V.x=N.x,V.y=N.y,U.lineTo(N.x,N.y),w===0&&R===!0&&st.copy(N);break;case"l":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=2)N.x+=J[w+0],N.y+=J[w+1],V.x=N.x,V.y=N.y,U.lineTo(N.x,N.y),w===0&&R===!0&&st.copy(N);break;case"c":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=6)U.bezierCurveTo(N.x+J[w+0],N.y+J[w+1],N.x+J[w+2],N.y+J[w+3],N.x+J[w+4],N.y+J[w+5]),V.x=N.x+J[w+2],V.y=N.y+J[w+3],N.x+=J[w+4],N.y+=J[w+5],w===0&&R===!0&&st.copy(N);break;case"s":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=4)U.bezierCurveTo(g(N.x,V.x),g(N.y,V.y),N.x+J[w+0],N.y+J[w+1],N.x+J[w+2],N.y+J[w+3]),V.x=N.x+J[w+0],V.y=N.y+J[w+1],N.x+=J[w+2],N.y+=J[w+3],w===0&&R===!0&&st.copy(N);break;case"q":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=4)U.quadraticCurveTo(N.x+J[w+0],N.y+J[w+1],N.x+J[w+2],N.y+J[w+3]),V.x=N.x+J[w+0],V.y=N.y+J[w+1],N.x+=J[w+2],N.y+=J[w+3],w===0&&R===!0&&st.copy(N);break;case"t":J=m(dt);for(let w=0,Rt=J.length;w<Rt;w+=2){let It=g(N.x,V.x),L=g(N.y,V.y);U.quadraticCurveTo(It,L,N.x+J[w+0],N.y+J[w+1]),V.x=It,V.y=L,N.x=N.x+J[w+0],N.y=N.y+J[w+1],w===0&&R===!0&&st.copy(N)}break;case"a":J=m(dt,[3,4],7);for(let w=0,Rt=J.length;w<Rt;w+=7){if(J[w+5]==0&&J[w+6]==0)continue;let It=N.clone();N.x+=J[w+5],N.y+=J[w+6],V.x=N.x,V.y=N.y,o(U,J[w],J[w+1],J[w+2],J[w+3],J[w+4],It,N),w===0&&R===!0&&st.copy(N)}break;case"Z":case"z":U.currentPath.autoClose=!0,U.currentPath.curves.length>0&&(N.copy(st),U.currentPath.currentPoint.copy(N),ft=!0);break;default:console.warn(ut)}R=!1}return U}function r(F){if(!(!F.sheet||!F.sheet.cssRules||!F.sheet.cssRules.length))for(let U=0;U<F.sheet.cssRules.length;U++){let N=F.sheet.cssRules[U];if(N.type!==1)continue;let V=N.selectorText.split(/,/gm).filter(Boolean).map(st=>st.trim());for(let st=0;st<V.length;st++){let ft=Object.fromEntries(Object.entries(N.style).filter(([,R])=>R!==""));nt[V[st]]=Object.assign(nt[V[st]]||{},ft)}}}function o(F,U,N,V,st,ft,R,G){if(U==0||N==0){F.lineTo(G.x,G.y);return}V=V*Math.PI/180,U=Math.abs(U),N=Math.abs(N);let B=(R.x-G.x)/2,P=(R.y-G.y)/2,Q=Math.cos(V)*B+Math.sin(V)*P,ut=-Math.sin(V)*B+Math.cos(V)*P,gt=U*U,dt=N*N,J=Q*Q,w=ut*ut,Rt=J/gt+w/dt;if(Rt>1){let rt=Math.sqrt(Rt);U=rt*U,N=rt*N,gt=U*U,dt=N*N}let It=gt*w+dt*J,L=(gt*dt-It)/It,v=Math.sqrt(Math.max(0,L));st===ft&&(v=-v);let Z=v*U*ut/N,et=-v*N*Q/U,ht=Math.cos(V)*Z-Math.sin(V)*et+(R.x+G.x)/2,bt=Math.sin(V)*Z+Math.cos(V)*et+(R.y+G.y)/2,yt=a(1,0,(Q-Z)/U,(ut-et)/N),tt=a((Q-Z)/U,(ut-et)/N,(-Q-Z)/U,(-ut-et)/N)%(Math.PI*2);F.currentPath.absellipse(ht,bt,U,N,yt,yt+tt,ft===0,V)}function a(F,U,N,V){let st=F*N+U*V,ft=Math.sqrt(F*F+U*U)*Math.sqrt(N*N+V*V),R=Math.acos(Math.max(-1,Math.min(1,st/ft)));return F*V-U*N<0&&(R=-R),R}function l(F){let U=x(F.getAttribute("x")||0),N=x(F.getAttribute("y")||0),V=x(F.getAttribute("rx")||F.getAttribute("ry")||0),st=x(F.getAttribute("ry")||F.getAttribute("rx")||0),ft=x(F.getAttribute("width")),R=x(F.getAttribute("height")),G=1-.551915024494,B=new ts;return B.moveTo(U+V,N),B.lineTo(U+ft-V,N),(V!==0||st!==0)&&B.bezierCurveTo(U+ft-V*G,N,U+ft,N+st*G,U+ft,N+st),B.lineTo(U+ft,N+R-st),(V!==0||st!==0)&&B.bezierCurveTo(U+ft,N+R-st*G,U+ft-V*G,N+R,U+ft-V,N+R),B.lineTo(U+V,N+R),(V!==0||st!==0)&&B.bezierCurveTo(U+V*G,N+R,U,N+R-st*G,U,N+R-st),B.lineTo(U,N+st),(V!==0||st!==0)&&B.bezierCurveTo(U,N+st*G,U+V*G,N,U+V,N),B}function c(F){function U(ft,R,G){let B=x(R),P=x(G);st===0?V.moveTo(B,P):V.lineTo(B,P),st++}let N=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,V=new ts,st=0;return F.getAttribute("points").replace(N,U),V.currentPath.autoClose=!0,V}function h(F){function U(ft,R,G){let B=x(R),P=x(G);st===0?V.moveTo(B,P):V.lineTo(B,P),st++}let N=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,V=new ts,st=0;return F.getAttribute("points").replace(N,U),V.currentPath.autoClose=!1,V}function d(F){let U=x(F.getAttribute("cx")||0),N=x(F.getAttribute("cy")||0),V=x(F.getAttribute("r")||0),st=new bs;st.absarc(U,N,V,0,Math.PI*2);let ft=new ts;return ft.subPaths.push(st),ft}function u(F){let U=x(F.getAttribute("cx")||0),N=x(F.getAttribute("cy")||0),V=x(F.getAttribute("rx")||0),st=x(F.getAttribute("ry")||0),ft=new bs;ft.absellipse(U,N,V,st,0,Math.PI*2);let R=new ts;return R.subPaths.push(ft),R}function f(F){let U=x(F.getAttribute("x1")||0),N=x(F.getAttribute("y1")||0),V=x(F.getAttribute("x2")||0),st=x(F.getAttribute("y2")||0),ft=new ts;return ft.moveTo(U,N),ft.lineTo(V,st),ft.currentPath.autoClose=!1,ft}function p(F){let U="http://www.w3.org/1999/xlink",N=F.querySelectorAll("linearGradient, radialGradient"),V=["x1","y1","x2","y2","cx","cy","r","fx","fy","gradientUnits","gradientTransform","spreadMethod"],st={};for(let R of N){let G=R.getAttribute("id");if(!G)continue;let B={type:R.nodeName==="radialGradient"?"radialGradient":"linearGradient",attrs:{},stops:null,href:null},P=R.getAttributeNS(U,"href")||R.getAttribute("href")||"";P.startsWith("#")&&(B.href=P.substring(1));for(let ut of V)R.hasAttribute(ut)&&(B.attrs[ut]=R.getAttribute(ut));let Q=R.querySelectorAll("stop");if(Q.length>0){B.stops=[];for(let ut of Q){let gt=ut.getAttribute("stop-color");!gt&&ut.style&&(gt=ut.style["stop-color"]),gt||(gt="#000");let dt=ut.getAttribute("stop-opacity");(dt===null||dt==="")&&ut.style&&(dt=ut.style["stop-opacity"]),dt=dt===null||dt===""||dt===void 0?1:Math.max(0,Math.min(1,parseFloat(dt)));let J=Math.max(0,Math.min(1,parseFloat(ut.getAttribute("offset")||"0")));B.stops.push({offset:J,color:gt,opacity:dt})}}st[G]=B}function ft(R,G){let B=st[R];if(!B||G.has(R))return B;if(G.add(R),B.href&&st[B.href]){let P=ft(B.href,G);if(P){B.stops||(B.stops=P.stops);for(let Q in P.attrs)Q in B.attrs||(B.attrs[Q]=P.attrs[Q])}}return B}for(let R in st)ft(R,new Set);for(let R in st){let ut=function(gt){return typeof gt!="string"?0:gt.endsWith("%")?parseFloat(gt)/100:x(gt)},G=st[R],B=G.attrs,P=B.gradientUnits==="userSpaceOnUse"?"userSpaceOnUse":"objectBoundingBox",Q={type:G.type,gradientUnits:P,spreadMethod:B.spreadMethod==="reflect"||B.spreadMethod==="repeat"?B.spreadMethod:"pad",gradientTransform:null,stops:(G.stops||[]).slice().sort((gt,dt)=>gt.offset-dt.offset)};if(B.gradientTransform&&(Q.gradientTransform=new jt,A(B.gradientTransform,Q.gradientTransform)),G.type==="linearGradient")Q.x1=B.x1!==void 0?ut(B.x1):0,Q.y1=B.y1!==void 0?ut(B.y1):0,Q.x2=B.x2!==void 0?ut(B.x2):P==="objectBoundingBox"?1:0,Q.y2=B.y2!==void 0?ut(B.y2):0;else{let gt=P==="objectBoundingBox"?.5:0,dt=P==="objectBoundingBox"?.5:0;Q.cx=B.cx!==void 0?ut(B.cx):gt,Q.cy=B.cy!==void 0?ut(B.cy):gt,Q.r=B.r!==void 0?ut(B.r):dt,Q.fx=B.fx!==void 0?ut(B.fx):Q.cx,Q.fy=B.fy!==void 0?ut(B.fy):Q.cy}X[R]=Q}}function _(F,U){U=Object.assign({},U);let N={};if(F.hasAttribute("class")){let R=F.getAttribute("class").split(/\s/).filter(Boolean).map(G=>G.trim());for(let G=0;G<R.length;G++)N=Object.assign(N,nt["."+R[G]])}F.hasAttribute("id")&&(N=Object.assign(N,nt["#"+F.getAttribute("id")]));function V(R,G,B){B===void 0&&(B=function(Q){return Q}),F.hasAttribute(R)&&(U[G]=B(F.getAttribute(R))),N[G]&&(U[G]=B(N[G])),F.style&&F.style[R]!==""&&(U[G]=B(F.style[R]))}function st(R){return Math.max(0,Math.min(1,x(R)))}function ft(R){return Math.max(0,x(R))}return V("fill","fill"),V("fill-opacity","fillOpacity",st),V("fill-rule","fillRule"),V("opacity","opacity",st),V("stroke","stroke"),V("stroke-opacity","strokeOpacity",st),V("stroke-width","strokeWidth",ft),V("stroke-linejoin","strokeLineJoin"),V("stroke-linecap","strokeLineCap"),V("stroke-miterlimit","strokeMiterLimit",ft),V("visibility","visibility"),U}function g(F,U){return F-(U-F)}function m(F,U,N){if(typeof F!="string")throw new TypeError("Invalid input: "+typeof F);let V={SEPARATOR:/[ \t\r\n\,.\-+]/,WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},st=0,ft=1,R=2,G=3,B=st,P=!0,Q="",ut="",gt=[];function dt(It,L,v){let Z=new SyntaxError('Unexpected character "'+It+'" at index '+L+".");throw Z.partial=v,Z}function J(){Q!==""&&(ut===""?gt.push(Number(Q)):gt.push(Number(Q)*Math.pow(10,Number(ut)))),Q="",ut=""}let w,Rt=F.length;for(let It=0;It<Rt;It++){if(w=F[It],Array.isArray(U)&&U.includes(gt.length%N)&&V.FLAGS.test(w)){B=ft,Q=w,J();continue}if(B===st){if(V.WHITESPACE.test(w))continue;if(V.DIGIT.test(w)||V.SIGN.test(w)){B=ft,Q=w;continue}if(V.POINT.test(w)){B=R,Q=w;continue}V.COMMA.test(w)&&(P&&dt(w,It,gt),P=!0)}if(B===ft){if(V.DIGIT.test(w)){Q+=w;continue}if(V.POINT.test(w)){Q+=w,B=R;continue}if(V.EXP.test(w)){B=G;continue}V.SIGN.test(w)&&Q.length===1&&V.SIGN.test(Q[0])&&dt(w,It,gt)}if(B===R){if(V.DIGIT.test(w)){Q+=w;continue}if(V.EXP.test(w)){B=G;continue}V.POINT.test(w)&&Q[Q.length-1]==="."&&dt(w,It,gt)}if(B===G){if(V.DIGIT.test(w)){ut+=w;continue}if(V.SIGN.test(w)){if(ut===""){ut+=w;continue}ut.length===1&&V.SIGN.test(ut)&&dt(w,It,gt)}}V.WHITESPACE.test(w)?(J(),B=st,P=!1):V.COMMA.test(w)?(J(),B=st,P=!0):V.SIGN.test(w)?(J(),B=ft,Q=w):V.POINT.test(w)?(J(),B=R,Q=w):dt(w,It,gt)}return J(),gt}let M=["mm","cm","in","pt","pc","px"],S={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function x(F){let U="px";if(typeof F=="string"||F instanceof String)for(let V=0,st=M.length;V<st;V++){let ft=M[V];if(F.endsWith(ft)){U=ft,F=F.substring(0,F.length-ft.length);break}}let N;return U==="px"&&e.defaultUnit!=="px"?N=S.in[e.defaultUnit]/e.defaultDPI:(N=S[U][e.defaultUnit],N<0&&(N=S[U].in*e.defaultDPI)),N*parseFloat(F)}function b(F){if(!(F.hasAttribute("transform")||F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))))return null;let U=T(F);return Y.length>0&&U.premultiply(Y[Y.length-1]),Bt.copy(U),Y.push(U),U}function T(F){let U=new jt;if(F.nodeName==="use"&&(F.hasAttribute("x")||F.hasAttribute("y"))){let N=x(F.getAttribute("x")||0),V=x(F.getAttribute("y")||0);U.makeTranslation(N,V)}return F.hasAttribute("transform")&&A(F.getAttribute("transform"),U),U}function A(F,U){let N=it,V=F.split(")");for(let st=V.length-1;st>=0;st--){let ft=V[st].trim();if(ft==="")continue;let R=ft.indexOf("("),G=ft.length;if(R>0&&R<G){let B=ft.slice(0,R),P=m(ft.slice(R+1));switch(N.identity(),B){case"translate":if(P.length>=1){let Q=P[0],ut=0;P.length>=2&&(ut=P[1]),N.makeTranslation(Q,ut)}break;case"rotate":if(P.length>=1){let Q=0,ut=0,gt=0;Q=P[0]*Math.PI/180,P.length>=3&&(ut=P[1],gt=P[2]),D.makeTranslation(-ut,-gt),ct.makeRotation(Q),Pt.multiplyMatrices(ct,D),D.makeTranslation(ut,gt),N.multiplyMatrices(D,Pt)}break;case"scale":if(P.length>=1){let Q=P[0],ut=Q;P.length>=2&&(ut=P[1]),N.makeScale(Q,ut)}break;case"skewX":P.length===1&&N.set(1,Math.tan(P[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":P.length===1&&N.set(1,0,0,Math.tan(P[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":P.length===6&&N.set(P[0],P[2],P[4],P[1],P[3],P[5],0,0,1);break}U.premultiply(N)}}return U}function y(F,U){function N(R){kt.set(R.x,R.y,1).applyMatrix3(U),R.set(kt.x,kt.y)}function V(R){let G=R.xRadius,B=R.yRadius,P=Math.cos(R.aRotation),Q=Math.sin(R.aRotation),ut=new W(G*P,G*Q,0),gt=new W(-B*Q,B*P,0),dt=ut.applyMatrix3(U),J=gt.applyMatrix3(U),w=it.set(dt.x,J.x,0,dt.y,J.y,0,0,0,1),Rt=D.copy(w).invert(),v=ct.copy(Rt).transpose().multiply(Rt).elements,Z=z(v[0],v[1],v[4]),et=Math.sqrt(Z.rt1),ht=Math.sqrt(Z.rt2);if(R.xRadius=1/et,R.yRadius=1/ht,R.aRotation=Math.atan2(Z.sn,Z.cs),!((R.aEndAngle-R.aStartAngle)%(2*Math.PI)<Number.EPSILON)){let yt=D.set(et,0,0,0,ht,0,0,0,1),tt=ct.set(Z.cs,Z.sn,0,-Z.sn,Z.cs,0,0,0,1),rt=yt.multiply(tt).multiply(w),vt=Lt=>{let{x:Mt,y:Et}=new W(Math.cos(Lt),Math.sin(Lt),0).applyMatrix3(rt);return Math.atan2(Et,Mt)};R.aStartAngle=vt(R.aStartAngle),R.aEndAngle=vt(R.aEndAngle),E(U)&&(R.aClockwise=!R.aClockwise)}}function st(R){let G=H(U),B=O(U);R.xRadius*=G,R.yRadius*=B;let P=G>Number.EPSILON?Math.atan2(U.elements[1],U.elements[0]):Math.atan2(-U.elements[3],U.elements[4]);R.aRotation+=P,E(U)&&(R.aStartAngle*=-1,R.aEndAngle*=-1,R.aClockwise=!R.aClockwise)}let ft=F.subPaths;for(let R=0,G=ft.length;R<G;R++){let P=ft[R].curves;for(let Q=0;Q<P.length;Q++){let ut=P[Q];ut.isLineCurve?(N(ut.v1),N(ut.v2)):ut.isCubicBezierCurve?(N(ut.v0),N(ut.v1),N(ut.v2),N(ut.v3)):ut.isQuadraticBezierCurve?(N(ut.v0),N(ut.v1),N(ut.v2)):ut.isEllipseCurve&&(Ct.set(ut.aX,ut.aY),N(Ct),ut.aX=Ct.x,ut.aY=Ct.y,I(U)?V(ut):st(ut))}}}function E(F){let U=F.elements;return U[0]*U[4]-U[1]*U[3]<0}function I(F){let U=F.elements,N=U[0]*U[3]+U[1]*U[4];if(N===0)return!1;let V=H(F),st=O(F);return Math.abs(N/(V*st))>Number.EPSILON}function H(F){let U=F.elements;return Math.sqrt(U[0]*U[0]+U[1]*U[1])}function O(F){let U=F.elements;return Math.sqrt(U[3]*U[3]+U[4]*U[4])}function j(F){let U=F.elements,N=U[0]*U[4]-U[1]*U[3];return Math.sqrt(Math.abs(N))}function z(F,U,N){let V,st,ft,R,G,B=F+N,P=F-N,Q=Math.sqrt(P*P+4*U*U);return B>0?(V=.5*(B+Q),G=1/V,st=F*G*N-U*G*U):B<0?st=.5*(B-Q):(V=.5*Q,st=-.5*Q),P>0?ft=P+Q:ft=P-Q,Math.abs(ft)>2*Math.abs(U)?(G=-2*U/ft,R=1/Math.sqrt(1+G*G),ft=G*R):Math.abs(U)===0?(ft=1,R=0):(G=-.5*ft/U,ft=1/Math.sqrt(1+G*G),R=G*ft),P>0&&(G=ft,ft=-R,R=G),{rt1:V,rt2:st,cs:ft,sn:R}}let q=[],nt={},X={},Y=[],it=new jt,D=new jt,ct=new jt,Pt=new jt,Ct=new mt,kt=new W,Bt=new jt,qt=new DOMParser().parseFromString(t,"image/svg+xml");return p(qt),n(qt.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:q,gradients:X,xml:qt.documentElement}}static createFillMaterial(t){let e=t.userData.style;if(e.fill===void 0||e.fill==="none")return null;let n=t.color,i=null,r=ry.exec(e.fill);if(r){let a=t.userData.gradients&&t.userData.gradients[r[1]];i=SA(a,t)}let o=new wr({opacity:e.fillOpacity*(e.opacity||1),transparent:!0,side:ri,depthWrite:!1});return i!==null?o.map=i:o.color=n,o}static createStrokeMaterial(t){let e=t.userData.style;return e.stroke===void 0||e.stroke==="none"?null:(ry.test(e.stroke)&&console.warn("THREE.SVGLoader: Gradient strokes are not supported."),new wr({color:new ne().setStyle(e.stroke,vc),opacity:e.strokeOpacity*(e.opacity||1),transparent:!0,side:ri,depthWrite:!1}))}static createShapes(t){return console.warn("SVGLoader: createShapes() is deprecated. Use shapePath.toShapes() instead."),t.toShapes()}static getStrokeStyle(t,e,n,i,r){return t=t!==void 0?t:1,e=e!==void 0?e:"#000",n=n!==void 0?n:"miter",i=i!==void 0?i:"butt",r=r!==void 0?r:4,{strokeColor:e,strokeWidth:t,strokeLineJoin:n,strokeLineCap:i,strokeMiterLimit:r}}static pointsToStroke(t,e,n,i){let r=[],o=[],a=[];if(s.pointsToStrokeWithBuffers(t,e,n,i,r,o,a)===0)return null;let l=new Ue;return l.setAttribute("position",new pe(r,3)),l.setAttribute("normal",new pe(o,3)),l.setAttribute("uv",new pe(a,2)),l}static pointsToStrokeWithBuffers(t,e,n,i,r,o,a,l){let c=new mt,h=new mt,d=new mt,u=new mt,f=new mt,p=new mt,_=new mt,g=new mt,m=new mt,M=new mt,S=new mt,x=new mt,b=new mt,T=new mt,A=new mt,y=new mt,E=new mt;n=n!==void 0?n:12,i=i!==void 0?i:.001,l=l!==void 0?l:0,t=ft(t);let I=t.length;if(I<2)return 0;let H=t[0].equals(t[I-1]),O,j=t[0],z,q=e.strokeWidth/2,nt=1/(I-1),X=0,Y,it,D,ct,Pt=!1,Ct=0,kt=l*3,Bt=l*2;qt(t[0],t[1],c).multiplyScalar(q),g.copy(t[0]).sub(c),m.copy(t[0]).add(c),M.copy(g),S.copy(m);for(let R=1;R<I;R++){O=t[R],R===I-1?H?z=t[1]:z=void 0:z=t[R+1];let G=c;if(qt(j,O,G),d.copy(G).multiplyScalar(q),x.copy(O).sub(d),b.copy(O).add(d),Y=X+nt,it=!1,z!==void 0){qt(O,z,h),d.copy(h).multiplyScalar(q),T.copy(O).sub(d),A.copy(O).add(d),D=!0,d.subVectors(z,j),G.dot(d)<0&&(D=!1),R===1&&(Pt=D),d.subVectors(z,O),d.normalize();let B=Math.abs(G.dot(d));if(B>Number.EPSILON){let P=q/B;d.multiplyScalar(-P),u.subVectors(O,j),f.copy(u).setLength(P).add(d),y.copy(f).negate();let Q=f.length(),ut=u.length();u.divideScalar(ut),p.subVectors(z,O);let gt=p.length();if(p.divideScalar(gt),u.dot(y)<ut&&p.dot(y)<gt&&(it=!0),E.copy(f).add(O),y.add(O),it){let dt=D?m:g,J=(E.x-dt.x)*(y.y-dt.y)-(E.y-dt.y)*(y.x-dt.x);(D&&J<0||!D&&J>0)&&y.copy(dt)}switch(ct=!1,it?D?(A.copy(y),b.copy(y)):(T.copy(y),x.copy(y)):U(),e.strokeLineJoin){case"bevel":N(D,it,Y);break;case"round":V(D,it),D?F(O,x,T,Y,0):F(O,A,b,Y,1);break;default:let dt=q*e.strokeMiterLimit/Q;if(dt<1)if(e.strokeLineJoin!=="miter-clip"){N(D,it,Y);break}else V(D,it),D?(p.subVectors(E,x).multiplyScalar(dt).add(x),_.subVectors(E,T).multiplyScalar(dt).add(T),k(x,Y,0),k(p,Y,0),k(O,Y,.5),k(O,Y,.5),k(p,Y,0),k(_,Y,0),k(O,Y,.5),k(_,Y,0),k(T,Y,0)):(p.subVectors(E,b).multiplyScalar(dt).add(b),_.subVectors(E,A).multiplyScalar(dt).add(A),k(b,Y,1),k(p,Y,1),k(O,Y,.5),k(O,Y,.5),k(p,Y,1),k(_,Y,1),k(O,Y,.5),k(_,Y,1),k(A,Y,1));else it?(D?(k(m,X,1),k(g,X,0),k(E,Y,0),k(m,X,1),k(E,Y,0),k(y,Y,1)):(k(m,X,1),k(g,X,0),k(E,Y,1),k(g,X,0),k(y,Y,0),k(E,Y,1)),D?T.copy(E):A.copy(E)):D?(k(x,Y,0),k(E,Y,0),k(O,Y,.5),k(O,Y,.5),k(E,Y,0),k(T,Y,0)):(k(b,Y,1),k(E,Y,1),k(O,Y,.5),k(O,Y,.5),k(E,Y,1),k(A,Y,1)),ct=!0;break}}else U()}else U();!H&&R===I-1&&st(t[0],M,S,D,!0,X),X=Y,j=O,g.copy(T),m.copy(A)}if(!H)st(O,x,b,D,!1,Y);else if(it&&r){let R=E,G=y;Pt!==D&&(R=y,G=E),D?(ct||Pt)&&(G.toArray(r,0),G.toArray(r,9),ct&&R.toArray(r,3)):(ct||!Pt)&&(G.toArray(r,3),G.toArray(r,9),ct&&R.toArray(r,0))}if(r){let R=[new mt,new mt,new mt],G=l*3;for(let B=G;B<kt;B+=9)R[0].set(r[B],r[B+1]),R[1].set(r[B+3],r[B+4]),R[2].set(r[B+6],r[B+7]),_s.area(R)<0&&(r[B+3]=R[0].x,r[B+4]=R[0].y)}return Ct;function qt(R,G,B){return B.subVectors(G,R),B.set(-B.y,B.x).normalize()}function k(R,G,B){r&&(r[kt]=R.x,r[kt+1]=R.y,r[kt+2]=0,o&&(o[kt]=0,o[kt+1]=0,o[kt+2]=1),kt+=3,a&&(a[Bt]=G,a[Bt+1]=B,Bt+=2)),Ct+=3}function F(R,G,B,P,Q){c.copy(G).sub(R).normalize(),h.copy(B).sub(R).normalize();let ut=Math.PI,gt=c.dot(h);Math.abs(gt)<1&&(ut=Math.abs(Math.acos(gt))),ut/=n,d.copy(G);for(let dt=0,J=n-1;dt<J;dt++)u.copy(d).rotateAround(R,ut),k(d,P,Q),k(u,P,Q),k(R,P,.5),d.copy(u);k(d,P,Q),k(B,P,Q),k(R,P,.5)}function U(){k(m,X,1),k(g,X,0),k(x,Y,0),k(m,X,1),k(x,Y,0),k(b,Y,1)}function N(R,G,B){G?R?(k(m,X,1),k(g,X,0),k(x,Y,0),k(m,X,1),k(x,Y,0),k(y,Y,1),k(x,B,0),k(T,B,0),k(y,B,.5)):(k(m,X,1),k(g,X,0),k(b,Y,1),k(g,X,0),k(y,Y,0),k(b,Y,1),k(b,B,1),k(y,B,0),k(A,B,1)):R?(k(x,B,0),k(T,B,0),k(O,B,.5)):(k(b,B,1),k(A,B,0),k(O,B,.5))}function V(R,G){G&&(R?(k(m,X,1),k(g,X,0),k(x,Y,0),k(m,X,1),k(x,Y,0),k(y,Y,1),k(x,X,0),k(O,Y,.5),k(y,Y,1),k(O,Y,.5),k(T,X,0),k(y,Y,1)):(k(m,X,1),k(g,X,0),k(b,Y,1),k(g,X,0),k(y,Y,0),k(b,Y,1),k(b,X,1),k(y,Y,0),k(O,Y,.5),k(O,Y,.5),k(y,Y,0),k(A,X,1)))}function st(R,G,B,P,Q,ut){switch(e.strokeLineCap){case"round":Q?F(R,B,G,ut,.5):F(R,G,B,ut,.5);break;case"square":if(Q)c.subVectors(G,R),h.set(c.y,-c.x),d.addVectors(c,h).add(R),u.subVectors(h,c).add(R),P?(d.toArray(r,3),u.toArray(r,0),u.toArray(r,9)):(d.toArray(r,3),a[7]===1?u.toArray(r,9):d.toArray(r,9),u.toArray(r,0));else{c.subVectors(B,R),h.set(c.y,-c.x),d.addVectors(c,h).add(R),u.subVectors(h,c).add(R);let gt=r.length;P?(d.toArray(r,gt-3),u.toArray(r,gt-6),u.toArray(r,gt-12)):(u.toArray(r,gt-6),d.toArray(r,gt-3),u.toArray(r,gt-12))}break;default:break}}function ft(R){let G=!1;for(let P=1,Q=R.length-1;P<Q;P++)if(R[P].distanceTo(R[P+1])<i){G=!0;break}if(!G)return R;let B=[];B.push(R[0]);for(let P=1,Q=R.length-1;P<Q;P++)R[P].distanceTo(R[P+1])>=i&&B.push(R[P]);return B.push(R[R.length-1]),B}}},ry=/^\s*url\(\s*(?:["']\s*)?#([^)'"\s]+)(?:\s*["'])?\s*\)\s*$/;function SA(s,t,e=256){if(!s||!Array.isArray(s.stops)||s.stops.length===0)return null;let n=t.userData.transform,i=s.gradientUnits==="objectBoundingBox",r=null;if(i&&(r=MA(t,n),r===null))return null;function o(d,u,f){f.set(d,u,1),s.gradientTransform&&f.applyMatrix3(s.gradientTransform),i&&f.set(r.minX+f.x*r.width,r.minY+f.y*r.height,1),n&&f.applyMatrix3(n)}let a=document.createElement("canvas"),l;if(s.type==="linearGradient"){a.width=e,a.height=1;let d=a.getContext("2d"),u=d.createLinearGradient(0,0,e,0);oy(u,s.stops),d.fillStyle=u,d.fillRect(0,0,e,1);let f=new W,p=new W;o(s.x1,s.y1,f),o(s.x2,s.y2,p);let _=p.x-f.x,g=p.y-f.y,m=_*_+g*g||1e-20,M=_/m,S=g/m,x=-(M*f.x+S*f.y);l=new jt().set(M,S,x,0,0,.5,0,0,1)}else{let d=s.cx,u=s.cy,f=s.fx,p=s.fy,_=s.r;if(s.gradientTransform){let y=new W;y.set(d,u,1).applyMatrix3(s.gradientTransform),d=y.x,u=y.y,y.set(f,p,1).applyMatrix3(s.gradientTransform),f=y.x,p=y.y}if(i&&(d=r.minX+d*r.width,u=r.minY+u*r.height,f=r.minX+f*r.width,p=r.minY+p*r.height,_=_*Math.sqrt((r.width*r.width+r.height*r.height)/2)),_<=0)return null;a.width=e,a.height=e;let g=a.getContext("2d"),m=d-_,M=u-_,S=2*_,x=e/S;g.setTransform(x,0,0,x,-m*x,-M*x);let b=g.createRadialGradient(f,p,0,d,u,_);oy(b,s.stops),g.fillStyle=b,g.fillRect(m,M,S,S);let T=n?n.clone().invert():new jt;l=new jt().set(1/S,0,-m/S,0,1/S,-M/S,0,0,1).multiply(T)}let c=new js(a);c.colorSpace=vc,c.flipY=!1,c.matrixAutoUpdate=!1,c.matrix=l;let h=s.spreadMethod==="reflect"?ga:s.spreadMethod==="repeat"?ys:zi;return c.wrapS=h,c.wrapT=h,c}function MA(s,t){let e=t?t.clone().invert():null,n=new mt,i=new Da;for(let r of s.subPaths)for(let o of r.getPoints())n.copy(o),e&&n.applyMatrix3(e),i.expandByPoint(n);return i.isEmpty()?null:{minX:i.min.x,minY:i.min.y,width:i.max.x-i.min.x,height:i.max.y-i.min.y}}function oy(s,t){let e=new ne;for(let n of t){let i=n.color;if(n.opacity<1){e.setStyle(n.color,vc);let r=/rgb\(([^)]+)\)/.exec(e.getStyle(vc));r&&(i=`rgba(${r[1]},${n.opacity})`)}s.addColorStop(Math.max(0,Math.min(1,n.offset)),i)}}var ay=(()=>{let s;return()=>{if(s)return s;let t=document.createElement("canvas");t.width=1024,t.height=4;let e=t.getContext("2d");for(let n=0;n<t.width;n++){let i=90+Math.random()*150;e.fillStyle=`rgb(${i},${i},${i})`,e.fillRect(n,0,1,t.height)}return s=new js(t),s.wrapS=ys,s.repeat.set(2,1),s}})();function Um(){let s=new Ei,t=new Ei,e=new Ei;s.add(t),e.position.y=-60,t.add(e);let n=new Qi({color:"#e6b0ae",roughness:.55,bumpMap:ay(),bumpScale:1.2,emissive:"#e6b0ae",emissiveIntensity:.4}),i=new Qi({color:"#c98387",roughness:.6,emissive:"#c98387",emissiveIntensity:.35}),r=new Qi({color:"#e9b7b4",roughness:.5,bumpMap:ay(),bumpScale:2.2,side:ri,emissive:"#e9b7b4",emissiveIntensity:.45}),o=new Qi({color:"#c98f93",roughness:.6,emissive:"#c98f93",emissiveIntensity:.4}),a=new Le(new Ia(5,.9,8,28),o);a.scale.set(.75,2.4,1),a.position.y=-13,t.add(a);let l=[];for(let g=0;g<=28;g++){let m=g/28*Math.PI;l.push(new mt(Math.max(.01,15*Math.sin(m)),-(40-16*Math.cos(m))))}t.add(new Le(new Pa(l,40),n));let c=new Le(new ql(12.6,12.6,11,48,1),i);c.position.y=-57.5,t.add(c);for(let g=0;g<6;g++){let m=new Le(new Ia(12.9,.55,6,48),i);m.rotation.x=Math.PI/2,m.position.y=-53-g*1.8,t.add(m)}let h=g=>11.5+17.5*Math.pow((g-63)/103,.85),d=[];for(let g=0;g<=30;g++){let m=63+103*g/30;d.push(new mt(h(m),-(m-60)))}let u=new Le(new Pa(d,96),r);e.add(u);let f=[];for(let g=0;g<260;g++){let m=Math.random()*Math.PI*2,M=146+Math.random()*14,S=169+Math.random()*10,x=h(M)*(.97+Math.random()*.05),b=h(166)*(.98+Math.random()*.1)+(S-166)*.1;f.push(Math.cos(m)*x,-(M-60),Math.sin(m)*x,Math.cos(m)*b,-(S-60),Math.sin(m)*b)}let p=new Ue;p.setAttribute("position",new pe(f,3)),e.add(new Gl(p,new Ta({color:"#d39a9b",transparent:!0,opacity:.75}))),s.traverse(g=>{g.isMesh&&(g.castShadow=!0)});let _={th:0,om:0,th2:0,om2:0};return{root:s,kick(g){_.om+=g},tick(g,m,M=0,S=1.6){let x=M+S*Math.sin(m*1.05);_.om+=(-16*(_.th-x)-1.5*_.om)*g,_.th=Math.max(-28,Math.min(28,_.th+_.om*g)),_.om2+=(-9*(_.th2-_.th)-1.1*_.om2)*g,_.th2+=_.om2*g;let b=Math.PI/180;t.rotation.z=-_.th*b,t.rotation.x=.05*Math.sin(m*.8+1),e.rotation.z=-(_.th2-_.th)*.7*b}}}function ly(s){let t=new Fr({canvas:s,alpha:!0,antialias:!0});t.setClearColor(0,0);let e=new Ks,n=new yn(20,84/180,10,3e3);n.position.set(0,-102,640);let i=Um();e.add(i.root),e.add(new xo(16777215,15982039,1.5));let r=new vo(16774382,2.2);return r.position.set(-120,60,220),e.add(r),(()=>{let a=Math.min(window.devicePixelRatio||1,2);t.setPixelRatio(a),t.setSize(84,180,!1)})(),{kick:i.kick,render(a,l,c){i.tick(a,l,c),t.render(e,n)},dispose(){t.dispose()}}}var Pn=.006666666666666667,rs=150,Rs=225,cy="M150 4 C156 22 170 36 200 40 C228 44 256 58 262 84 C262 96 274 100 280 112 C292 140 292 190 286 214 C285 219 292 224 297 225 C292 226 285 231 286 236 C292 260 292 310 280 338 C274 350 262 354 262 366 C256 392 228 406 200 410 C170 414 156 428 150 446",hy=["M236 384 C246 366 262 346 258 318 C254 290 268 262 264 232 C260 200 270 170 262 140 C256 118 246 104 232 92","M250 378 C264 356 276 330 272 300 C269 280 277 262 275 240 M271 212 C277 194 277 172 270 152"],uy="M258 318 C246 306 238 296 234 282 M262 286 C270 276 274 262 272 250 M264 232 C252 222 244 210 242 196 M265 196 C272 186 274 174 272 164 M262 140 C250 134 240 124 236 112 M250 114 C240 100 226 90 212 86 M247 364 C238 366 228 362 222 356 M240 378 C230 384 218 388 208 392 M260 300 C268 306 272 316 270 326 M266 214 C258 214 250 220 246 228 M256 128 C262 124 264 116 262 108 M258 330 C250 330 242 336 238 344 M263 250 C256 256 252 264 252 274 M266 180 C258 176 252 168 250 158 M240 100 C234 92 226 78 222 68 M236 384 C228 376 222 372 214 372 M259 330 l6 -5 M257 306 l-7 -4 M262 274 l7 -3 M265 246 l-7 -5 M263 218 l7 -4 M266 186 l-6 -6 M264 158 l7 -5 M258 132 l-7 -3 M248 108 l6 -6",fy=[[0,0,3.4,1],[-5.5,-3,2.8,.7],[5.5,-4,2.6,1],[-1.5,-8.5,2.4,.7],[5,4.5,2.2,.7],[-6.5,4.5,2,1],[10.5,.5,1.7,.8],[-11,-1,1.5,.7],[1,9,1.6,.8],[9,-9,1.4,.7],[-9,-9,1.3,1],[-3,-14,1.2,.8]],dy=[[222,356,1.1],[208,392,1],[270,326,.85],[250,346,.7],[238,344,.8],[214,372,.75],[262,362,.6],[234,282,1.15],[272,250,1],[242,196,1.1],[246,228,.8],[262,268,.7],[252,274,.7],[275,238,.6],[258,300,.6],[272,164,1],[236,112,1.15],[212,86,1.1],[232,92,.85],[262,108,.8],[258,152,.7],[250,158,.85],[222,68,.8],[270,150,.6],[270,196,.7]],Om="M32 4 C36 4 38 7 38 10 C41 8 46 9 46 14 L46 36 C50 33 58 32 61 36 C63 40 60 44 55 46 C52 47 50 50 49 54 C47 63 40 68 32 68 C24 68 17 63 15 54 C14 50 12 47 9 46 C4 44 1 40 3 36 C6 32 14 33 18 36 L18 14 C18 9 23 8 26 10 C26 7 28 4 32 4 Z",py={x:127,y:44,s:.72},Fm=.00437;var gy=(s,t,e)=>Math.min(e,Math.max(t,s)),my=(s,t,e)=>{let n=gy((e-s)/(t-s),0,1);return n*n*(3-2*n)},bA=new Rf,_y=s=>bA.parse(`<svg xmlns="http://www.w3.org/2000/svg"><path d="${s}"/></svg>`).paths[0],Bm=(s,t=14)=>_y(s).subPaths.map(e=>e.getPoints(t)),Sc=s=>({x:2*rs-s.x,y:s.y}),wA=(s,t=0)=>s.flatMap(e=>[(e.x-rs)*Pn,(Rs-e.y)*Pn,t]);function TA(){let s=document.createElement("canvas");s.width=s.height=256;let t=s.getContext("2d"),e=t.createImageData(256,256);for(let i=0;i<e.data.length;i+=4){let r=128+(Math.random()-.5)*90;e.data[i]=e.data[i+1]=e.data[i+2]=r,e.data[i+3]=255}t.putImageData(e,0,0);let n=new js(s);return n.wrapS=n.wrapT=ys,n.repeat.set(3,3),n}function xy({canvas:s,frameEl:t,reduce:e}){let n=new Fr({canvas:s,alpha:!0,antialias:!0,powerPreference:"high-performance"});n.setClearColor(0,0),n.shadowMap.enabled=!0,n.shadowMap.type=Ir;let i=new Ks,r=30,o=new yn(r,1,.1,60),a=new Ei;i.add(a),i.add(new xo(16777215,15982039,1.3));let l=new vo(16774382,1.5);l.position.set(-1.8,2.8,4),l.castShadow=!0,l.shadow.mapSize.set(1024,1024),l.shadow.radius=10,l.shadow.blurSamples=16,l.shadow.bias=-6e-4,Object.assign(l.shadow.camera,{left:-3,right:3,top:4,bottom:-4,near:.5,far:12}),i.add(l);let c=new Le(new Er(16,20),new nc({color:8208973,opacity:.22,transparent:!0}));c.position.z=-.32,c.receiveShadow=!0,i.add(c);let h=Bm(cy,18)[0],d=h.map(tt=>({x:tt.x,y:tt.y})),u=h.map(Sc).reverse(),f=d.concat(u.slice(1,-1)),p=new mo(f.map(tt=>new mt((tt.x-rs)*Pn,(Rs-tt.y)*Pn))),_=.035,g=new Ra(p,{depth:_,bevelEnabled:!0,bevelThickness:.006,bevelSize:.006,bevelSegments:2,curveSegments:1}),m=new Qi({color:"#fbf0ec",roughness:.94,bumpMap:TA(),bumpScale:.35,transparent:!0,emissive:"#fbf0ec",emissiveIntensity:.28}),M=new Le(g,m);M.position.z=-(_+.006),M.castShadow=!0,a.add(M);let S=[],x=(tt,rt,vt=1)=>{let Lt=new kr({color:tt,linewidth:rt,transparent:!0,opacity:vt,worldUnits:!1});return Lt.userData.base=rt,S.push(Lt),Lt},b=(tt,rt,vt)=>{let Lt=new Ha;Lt.setPositions(wA(tt,vt));let Mt=new Cf(Lt,rt);return Mt.computeLineDistances(),Mt.userData.n=tt.length-1,Mt.geometry.instanceCount=0,Mt.renderOrder=2,a.add(Mt),Mt},T=x("#c98f93",1.6),A=x("#c98f93",1),y=x("#c4888d",1.15),E=x("#b0646e",1.7),I=x("#c4888d",.9),H=[b(h,T,.003),b(h.map(Sc),T,.003)],O=tt=>({x:rs+(tt.x-rs)*.93,y:Rs+(tt.y-Rs)*.93}),j=[b(h.map(O),A,.003),b(h.map(Sc).map(O),A,.003)],z=[],q=tt=>Bm(tt,14).forEach(rt=>{for(let vt=0;vt<rt.length-1;vt++)z.push([rt[vt],rt[vt+1]])});hy.forEach(q),q(uy);let nt=z.concat(z.map(([tt,rt])=>[Sc(tt),Sc(rt)]));nt.sort((tt,rt)=>rt[0].y+rt[1].y-(tt[0].y+tt[1].y));let X=new Float32Array(nt.length*6);nt.forEach(([tt,rt],vt)=>{X.set([(tt.x-rs)*Pn,(Rs-tt.y)*Pn,.012,(rt.x-rs)*Pn,(Rs-rt.y)*Pn,.012],vt*6)});let Y=new Br;Y.setPositions(X),Y.instanceCount=0;let it=new Va(Y,y);it.renderOrder=2,it.frustumCulled=!1,a.add(it);let D=nt.length,ct=[];for(let[tt,rt,vt]of dy)for(let Lt of[!1,!0]){let Mt=Lt?2*rs-tt:tt;fy.forEach(([Et,wt,zt,Kt],$)=>{ct.push([Mt+(Lt?-Et:Et)*vt,rt+wt*vt,zt*vt,Kt,$])})}let Pt=ct.length,Ct=new Float32Array(Pt*3),kt=new Float32Array(Pt*3);ct.forEach(([tt,rt,vt,Lt],Mt)=>{Ct.set([(tt-rs)*Pn,(Rs-rt)*Pn,.03+Math.random()*.01],Mt*3);let Et=gy((400-rt)/340,0,1)*.72+Math.random()*.22;kt.set([vt*Pn,Lt,Et],Mt*3)});let Bt=new So,qt=new Er(2,2);Bt.index=qt.index,Bt.setAttribute("position",qt.getAttribute("position")),Bt.setAttribute("iPos",new ba(Ct,3)),Bt.setAttribute("iData",new ba(kt,3)),Bt.instanceCount=Pt;let k=new an({transparent:!0,depthWrite:!1,uniforms:{uBloom:{value:0},uTime:{value:0},uColor:{value:new ne("#d99fa4")},uColor2:{value:new ne("#ebbcbc")}},vertexShader:`
      attribute vec3 iPos; attribute vec3 iData;
      uniform float uBloom, uTime;
      varying vec2 vUv; varying float vA;
      float backOut(float t){ float c1 = 1.70158, c3 = c1 + 1.; return 1. + c3 * pow(t - 1., 3.) + c1 * pow(t - 1., 2.); }
      void main() {
        float t = clamp((uBloom - iData.z) / 0.16, 0., 1.);
        float pop = t <= 0. ? 0. : backOut(t);
        vUv = position.xy;
        vA = iData.y * smoothstep(0., .4, t);
        vec3 p = iPos;
        p.xy += vec2(sin(uTime * .7 + iData.z * 37.), cos(uTime * .6 + iData.z * 23.)) * .002;
        p.xy += position.xy * iData.x * pop;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.);
      }`,fragmentShader:`
      uniform vec3 uColor, uColor2;
      varying vec2 vUv; varying float vA;
      void main() {
        float d = length(vUv);
        float a = smoothstep(1., .8, d) * vA;
        if (a < .01) discard;
        vec3 c = mix(uColor2, uColor, smoothstep(0., 1., d));
        gl_FragColor = vec4(c, a);
        #include <colorspace_fragment>
      }`}),F=new Le(Bt,k);F.frustumCulled=!1,F.renderOrder=3,a.add(F);let U=py,N=(tt,rt=1)=>({x:U.x+(32+(tt.x-32)*rt)*U.s,y:U.y+(40+(tt.y-40)*rt)*U.s}),V=Bm(Om,12)[0],st=b(V.map(tt=>N(tt)),E,.03),ft=b(V.map(tt=>N(tt,.8)),I,.03),R=_y(Om).toShapes(!0),G=new Ra(R,{depth:2.2,bevelEnabled:!0,bevelThickness:.9,bevelSize:.7,bevelSegments:3,curveSegments:12}),B=new Le(G,new Qi({color:"#fbf0ec",roughness:.94,emissive:"#fbf0ec",emissiveIntensity:.3})),P=Pn*U.s;B.scale.set(P,-P,1e-4),B.position.set((U.x-rs)*Pn,(Rs-U.y)*Pn,.004),B.castShadow=!0,B.visible=!1,a.add(B);let Q=Um(),ut=(Rs-446)*Pn;Q.root.scale.setScalar(Fm),Q.root.position.set(0,ut+5*Pn,.035),Q.root.visible=!1,a.add(Q.root);let gt=40,dt=new Float32Array(gt*3),J=new Float32Array(gt);for(let tt=0;tt<gt;tt++)dt.set([(Math.random()-.5)*3.6,(Math.random()-.5)*4.6,.12+Math.random()*.5],tt*3),J[tt]=Math.random();let w=new Ue;w.setAttribute("position",new Tn(dt,3)),w.setAttribute("seed",new Tn(J,1));let Rt=new an({transparent:!0,depthWrite:!1,uniforms:{uTime:{value:0},uAlpha:{value:0},uPx:{value:1},uColor:{value:new ne("#e3a9ae")}},vertexShader:`
      attribute float seed; uniform float uTime, uPx; varying float vS;
      void main() {
        vec3 p = position;
        p.y = mod(p.y + uTime * (.05 + seed * .06) + 2.3, 4.6) - 2.3;
        p.x += sin(uTime * .5 + seed * 30.) * .12;
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (3. + seed * 5.) * uPx / max(.5, -mv.z) * 3.5;
        vS = seed;
      }`,fragmentShader:`
      uniform vec3 uColor; uniform float uAlpha; varying float vS;
      void main() {
        float d = length(gl_PointCoord - .5) * 2.;
        float a = smoothstep(1., .7, d) * uAlpha * (.35 + vS * .35);
        if (a < .01) discard;
        gl_FragColor = vec4(uColor, a);
        #include <colorspace_fragment>
      }`}),It=new Wl(w,Rt);It.frustumCulled=!1,It.renderOrder=4,a.add(It);let L={outer:0,inner:0,trees:0,bloom:0,hamsaLine:0,hamsaRise:0,paper:0,tassel:0,petals:0,scroll:0},v={w:1,h:1,cx:0,cy:0,fw:340,d0:6,zoom:1.16},Z={tx:0,ty:0,tilt:0},et={rx:0,ry:0},ht=1,bt=()=>{let tt=s.getBoundingClientRect(),rt=t.getBoundingClientRect();v.w=Math.max(1,tt.width),v.h=Math.max(1,tt.height),v.fw=rt.width,v.cx=rt.left-tt.left+rt.width/2,v.cy=rt.top-tt.top+rt.height/2,ht=Math.min(window.devicePixelRatio||1,2),n.setPixelRatio(ht),n.setSize(v.w,v.h,!1),o.aspect=v.w/v.h;let vt=Math.tan(r*Math.PI/360);v.d0=v.h/(vt*v.fw),v.zoom=Math.min(1.16,v.w*.985/v.fw),S.forEach(Lt=>Lt.resolution.set(v.w,v.h)),Rt.uniforms.uPx.value=ht*v.h/800},yt=(tt,rt)=>{let vt=L.scroll,Lt=my(0,.4,vt),Mt=1+(v.zoom-1)*Lt;o.position.set(0,0,v.d0/Mt),o.lookAt(0,0,0),o.setViewOffset(v.w,v.h,v.w/2-v.cx,v.h/2-v.cy,v.w,v.h);let Et=e?0:Math.sin(rt*.45)*.6;et.ry=Z.tx*5+Et,et.rx=-Z.ty*3.5+Et*.5-Lt*2.5,a.rotation.y=et.ry*Math.PI/180,a.rotation.x=et.rx*Math.PI/180,H.forEach(zt=>{zt.geometry.instanceCount=Math.round(L.outer*zt.userData.n)}),j.forEach(zt=>{zt.geometry.instanceCount=Math.round(L.inner*zt.userData.n)}),Y.instanceCount=Math.round(L.trees*D),st.geometry.instanceCount=Math.round(L.hamsaLine*st.userData.n),ft.geometry.instanceCount=Math.round(L.hamsaLine*ft.userData.n),B.visible=L.hamsaRise>.001,B.scale.z=P*L.hamsaRise+1e-4,m.opacity=L.paper,c.material.opacity=.22*L.paper,k.uniforms.uBloom.value=L.bloom,k.uniforms.uTime.value=rt,Rt.uniforms.uTime.value=rt,Rt.uniforms.uAlpha.value=L.petals*(1-my(.3,.6,vt));let wt=1+.6*Lt;S.forEach(zt=>{zt.linewidth=zt.userData.base*wt}),Q.root.visible=L.tassel>.001,Q.root.scale.setScalar(Fm*Math.max(1e-4,L.tassel)),Q.tick(tt,rt,Z.tilt),n.render(i,o)};return bt(),{state:L,tiltOut:et,env:Z,view:v,layout:bt,frame:yt,kick:tt=>Q.kick(tt),dispose(){n.dispose()}}}var EA=["#e9b7b4","#dc9ea3","#f2cbc8","#f8dcd6","#cf8f96"],AA=["#d8ae8a","#e2a8a6","#ffffff","#f0c9a8"],Oe=(s,t)=>s+Math.random()*(t-s),yy=s=>s[Math.random()*s.length|0];function vy({canvas:s}){let t=s.getContext("2d");if(!t)throw new Error("2d unavailable");let e=0,n=0,i=1,r=[],o=scrollY,a={intensity:1},l=f=>{let p=Oe(.25,1);return{kind:"petal",z:p,x:Oe(-20,e+20),y:f?Oe(-60,-10):Oe(-20,n+20),s:5+p*9,rot:Oe(0,6.28),spin:Oe(-.9,.9),flip:Oe(0,6.28),flipV:Oe(1.2,2.8),fall:14+p*26,sway:Oe(10,26),ph:Oe(0,6.28),color:yy(EA),a:.36+p*.44}},c=()=>({kind:"dust",z:Oe(.2,1),x:Oe(0,e),y:Oe(0,n),r:Oe(.7,1.9),ph:Oe(0,6.28),tw:Oe(.6,1.6),vy:-Oe(3,9),color:yy(AA),a:Oe(.35,.8)}),h=()=>{let f=Math.max(9,Math.min(22,Math.round(e*n/3e4))),p=Math.max(18,Math.min(44,Math.round(e*n/14e3)));r=r.filter(_=>_.life);for(let _=0;_<f;_++)r.push(l(!1));for(let _=0;_<p;_++)r.push(c())},d=()=>{i=Math.min(window.devicePixelRatio||1,2),e=s.clientWidth||innerWidth,n=s.clientHeight||innerHeight,s.width=Math.round(e*i),s.height=Math.round(n*i),r=[],h()};d();let u=f=>{let p=Math.cos(f.flip),_=Math.max(.18,Math.abs(p));t.save(),t.translate(f.x,f.y),t.rotate(f.rot),t.scale(_,1),t.beginPath(),t.moveTo(0,-f.s),t.bezierCurveTo(f.s*.95,-f.s*.45,f.s*.7,f.s*.85,0,f.s),t.bezierCurveTo(-f.s*.7,f.s*.85,-f.s*.95,-f.s*.45,0,-f.s),t.fillStyle=f.color,t.globalAlpha=f.alpha*(p>0?1:.8),t.fill(),t.restore()};return a.burst=(f,p,_=30)=>{for(let g=0;g<_;g++){let m=l(!1),M=Oe(-Math.PI*.95,-Math.PI*.05),S=Oe(90,300);Object.assign(m,{x:f,y:p,z:1,s:Oe(4,9),a:Oe(.55,.9),vx:Math.cos(M)*S,vy:Math.sin(M)*S,life:Oe(2.4,4),age:0}),r.push(m)}},a.lighten=()=>{let f=0;r=r.filter(p=>p.life||(p.kind==="petal"?f++%2===0:Math.random()<.5))},a.resize=()=>{((s.clientWidth||innerWidth)!==e||Math.abs((s.clientHeight||innerHeight)-n)>120)&&d()},a.frame=(f,p)=>{let _=scrollY-o;o=scrollY;let g=Math.sin(p*.23)*14+Math.sin(p*.61+1.3)*6;t.setTransform(i,0,0,i,0,0),t.clearRect(0,0,e,n);let m=a.intensity;if(!(m<=.01)){for(let M=r.length-1;M>=0;M--){let S=r[M];if(S.kind==="dust"){S.ph+=f*S.tw,S.y+=S.vy*f-_*(.08+S.z*.3),S.x+=Math.sin(S.ph*.7)*5*f+g*.2*f,S.y<-6?(S.y=n+6,S.x=Oe(0,e)):S.y>n+6&&(S.y=-6,S.x=Oe(0,e)),t.globalAlpha=m*S.a*(.35+.65*(.5+.5*Math.sin(S.ph*2.2))),t.fillStyle=S.color,t.beginPath(),t.arc(S.x,S.y,S.r,0,6.283),t.fill();continue}if(S.flip+=S.flipV*f,S.rot+=S.spin*f,S.life){S.age+=f,S.vx*=1-Math.min(1,f*1.6),S.vy+=(60-S.vy)*Math.min(1,f*1.4),S.x+=S.vx*f+Math.sin(p*2+S.ph)*12*f,S.y+=S.vy*f;let x=1-S.age/S.life;if(x<=0||S.y>n+20){r.splice(M,1);continue}S.alpha=m*S.a*Math.min(1,x*2)}else S.y+=S.fall*f-_*(.12+S.z*.45),S.x+=(Math.sin(p*.9+S.ph)*S.sway+g*(.4+S.z*.6))*f,S.y>n+24?Object.assign(S,l(!0)):S.y<-60&&(S.y=n+20,S.x=Oe(0,e)),S.x<-40?S.x=e+30:S.x>e+40&&(S.x=-30),S.alpha=m*S.a;u(S)}t.globalAlpha=1}},a.dispose=()=>{r=[]},a}var CA="http://www.w3.org/2000/svg";var zr="#cf8f96",ai=(s,t={},e)=>{let n=document.createElementNS(CA,s);for(let i in t)n.setAttribute(i,t[i]);return e&&e.appendChild(n),n},RA=s=>()=>{s=s+1831565813|0;let t=Math.imul(s^s>>>15,1|s);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},Sy=(s,t,e)=>{ai("path",{d:`M0 0 C${t*.3} ${-e} ${t*.75} ${-e*.9} ${t} 0 C${t*.75} ${e*.9} ${t*.3} ${e} 0 0 Z`,fill:"rgba(233,183,180,.38)",stroke:zr,"stroke-width":.9,"stroke-linejoin":"round"},s),ai("path",{d:`M1 0 L${t*.78} 0`,fill:"none",stroke:zr,"stroke-width":.6,opacity:.8},s)},PA=s=>{ai("path",{d:"M0 0 C2 -5 9 -6 11 -1 C12.5 3 9 6.5 5.5 5 C3 4 3.5 1 5.5 1.3 C7 1.6 7.4 3.4 6.2 3.8",fill:"rgba(233,183,180,.3)",stroke:zr,"stroke-width":.9,"stroke-linecap":"round"},s),ai("circle",{cx:9,cy:-1.5,r:.9,fill:zr},s)},IA=s=>{for(let t=0;t<6;t++){let e=t/6*Math.PI*2;ai("circle",{cx:Math.cos(e)*3.6,cy:Math.sin(e)*3.6,r:1.9,fill:"rgba(233,183,180,.5)",stroke:zr,"stroke-width":.7},s)}ai("circle",{r:1.5,fill:zr},s)};function My(s,{reduce:t=!1}={}){let e=document.createElement("div");e.className="vine",e.setAttribute("aria-hidden","true"),s.prepend(e);let n=null,i=null,r=0,o=0,a=t?1:0,l=[],c=()=>{let d=Math.max(150,Math.round(s.offsetHeight-40));o=d/1.25,e.style.height=`${d}px`,e.textContent="",l=[],n=ai("svg",{width:28*1.25,height:d,viewBox:`0 0 28 ${o}`,overflow:"visible"},e);let u=RA(11),f=Math.max(2,Math.floor((o-24)/58)),p=[];for(let m=0;m<=f;m++)p.push({x:14+(m%2?3.5:-3.5),y:10+(o-20)*m/f,s:m%2?1:-1});let _=`M14 0 L${p[0].x} ${p[0].y}`;for(let m=0;m<f;m++){let M=p[m],S=p[m+1],x=(M.y+S.y)/2;_+=` C${M.x} ${x} ${S.x} ${x} ${S.x} ${S.y}`}i=ai("path",{d:_,fill:"none",stroke:zr,"stroke-width":1.1,"stroke-linecap":"round"},n),r=i.getTotalLength(),i.style.strokeDasharray=r,i.style.strokeDashoffset=r;let g=["leaf","leaf","paisley","leaf","flower","leaf"];p.forEach((m,M)=>{let S=g[M%g.length],x=ai("g",{transform:`translate(${m.x} ${m.y}) scale(0)`},n),b=ai("g",{class:"vine__sway"},x);b.style.animationDelay=`${-(u()*5).toFixed(2)}s`,b.style.animationDuration=`${(4+u()*2.5).toFixed(2)}s`;let T=m.s<0?180:0,A=(u()-.5)*16;if(S==="leaf"){let y=ai("g",{transform:`rotate(${T+(m.s<0?-1:1)*(28+A)})`},b);if(Sy(y,8+u()*2.5,2.6+u()*.8),M%2===0)for(let E=0;E<2;E++)ai("circle",{cx:14-m.x+(u()-.5)*2,cy:12+E*6,r:.9,fill:zr},b)}else S==="paisley"?PA(ai("g",{transform:`rotate(${T+(m.s<0?-1:1)*20})`},b)):(IA(ai("g",{transform:`translate(${(14-m.x)*.2} 0)`},b)),Sy(ai("g",{transform:`rotate(${T+(m.s<0?-1:1)*60})`},b),7,2.3));l.push({el:x,y:m.y,x:m.x,t:-1})}),h()},h=()=>{if(!i)return;let d=a*o;i.style.strokeDashoffset=(r*(1-Math.min(1,d/o))).toFixed(1);for(let u of l){let f=Math.max(0,Math.min(1,(d-u.y+8)/46)),p=f*f*(3-2*f);Math.abs(p-u.t)<.004||(u.t=p,u.el.setAttribute("transform",`translate(${u.x} ${u.y}) scale(${p.toFixed(3)})`))}};if(c(),typeof ResizeObserver<"u"){let d=0;new ResizeObserver(()=>{cancelAnimationFrame(d),d=requestAnimationFrame(()=>{Math.abs(s.offsetHeight-40-o*1.25)>6&&c()})}).observe(s)}return{set(d){a=Math.max(0,Math.min(1,d)),h()},get progress(){return a}}}var LA=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,DA=`
precision highp float;
varying vec2 vUv;
uniform vec2 uRes;
uniform float uT, uScroll, uWind;
uniform vec2 uTilt;

float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }
float vnoise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}

/* one panel of cloth: returns (height, slope) of the pleats at this point */
vec2 cloth(vec2 p, float yy, float t, float freq, float seed) {
  float free = smoothstep(0.0, 1.0, yy);                       /* fixed at the rod, free below */
  float x = p.x
    + free * (0.028 * sin(yy * 3.1 + t * 0.9 + seed) + 0.015 * sin(yy * 7.0 - t * 1.4 + seed * 1.7))
    + free * uWind * 0.02 * sin(yy * 5.0 - t * 2.2);
  float spread = 1.0 / (0.8 + 0.3 * yy);                        /* pleats open up toward the hem */
  float irregular = 0.55 * sin(x * 4.0 + seed * 3.0) + 0.25 * free * sin(yy * 4.0 - t * 0.8 + seed);
  float ph = freq * x * spread + seed + irregular;
  float h = sin(ph) + 0.3 * sin(2.0 * ph + 1.2);                /* round crests, tighter valleys */
  float dh = (cos(ph) + 0.6 * cos(2.0 * ph + 1.2)) * freq * spread;
  return vec2(h, dh);
}

/* colour and opacity of a panel; c.a is premultiplied later */
vec4 panel(vec2 p, float yy, float t, float freq, float seed, float sheer) {
  vec2 c = cloth(p, yy, t, freq, seed);
  vec3 n = normalize(vec3(-c.y * 0.03, 0.0, 1.0));
  float facing = dot(n, normalize(vec3(-0.6, 0.25, 0.75)));        /* +: toward the window */
  float flank = clamp(abs(c.y) / (freq * 1.5), 0.0, 1.0);          /* steep parts, where layers overlap */
  float valley = smoothstep(0.2, -1.0, c.x);

  vec3 lit = vec3(1.0, 0.995, 0.985);
  vec3 shade = vec3(0.90, 0.76, 0.75);
  float lightK = smoothstep(-0.25, 0.35, facing - 0.66 + 0.25);
  vec3 col = mix(shade, lit, lightK);
  col = mix(col, shade * 0.97, valley * 0.35);

  float a = (0.13 + 0.3 * flank + 0.1 * (1.0 - valley) * lightK) * sheer;
  a += valley * 0.06 * sheer;
  return vec4(col, a);
}

void main() {
  float asp = uRes.x / uRes.y;
  vec2 p = vec2((vUv.x - 0.5) * asp, vUv.y - 0.5) + vec2(uTilt.x * 0.015, 0.0);
  float yy = 1.0 - vUv.y;
  float t = uT * 0.5;
  float f = 30.0;

  vec4 back = panel(p + vec2(0.07, 0.0), yy, t * 0.85, f * 0.78, 2.4, 0.62);
  vec4 front = panel(p, yy, t, f, 0.0, 1.0);

  float a = front.a + back.a * (1.0 - front.a);
  vec3 col = (front.rgb * front.a + back.rgb * back.a * (1.0 - front.a)) / max(a, 0.001);

  /* the rod pocket: gathered, darker and denser at the very top */
  float rod = smoothstep(0.075, 0.0, yy);
  col = mix(col, vec3(0.86, 0.7, 0.7), rod * 0.55);
  a += rod * 0.32;

  /* the weave */
  a *= 0.94 + 0.09 * vnoise(gl_FragCoord.xy * 0.55);
  a = clamp(a, 0.0, 0.9);

  gl_FragColor = vec4(col * a, a);      /* premultiplied */
}
`;function by(s){let t=new Fr({canvas:s,antialias:!1,alpha:!0,premultipliedAlpha:!0,powerPreference:"low-power"});t.setClearColor(0,0);let e=new Ks,n=new yo,i={uRes:{value:new mt(1,1)},uT:{value:0},uScroll:{value:0},uWind:{value:0},uTilt:{value:new mt}},r=new an({vertexShader:LA,fragmentShader:DA,uniforms:i,depthTest:!1,depthWrite:!1}),o=new Ue;o.setAttribute("position",new pe([-1,-1,0,3,-1,0,-1,3,0],3)),o.setAttribute("uv",new pe([0,0,2,0,0,2],2));let a=new Le(o,r);a.frustumCulled=!1,e.add(a);let l=.75,c=()=>{let h=Math.min(window.devicePixelRatio||1,2);t.setPixelRatio(h*l),t.setSize(s.clientWidth||innerWidth,s.clientHeight||innerHeight,!1),t.getDrawingBufferSize(i.uRes.value)};return c(),{uniforms:i,resize(){c()},lighten(){l>.4&&(l=.4,c())},render(h){i.uT.value=h,t.render(e,n)},dispose(){t.dispose(),o.dispose(),r.dispose()}}}Zn.registerPlugin(ie);ie.config({ignoreMobileResize:!0});var Ec=window.SITE||{},oe=(s,t=document)=>t.querySelector(s),Ls=(s,t=document)=>Array.from(t.querySelectorAll(s)),Wa=(s,t,e)=>Math.min(e,Math.max(t,s)),er=(s,t,e)=>{let n=Wa((e-s)/(t-s),0,1);return n*n*(3-2*n)},li=matchMedia("(prefers-reduced-motion: reduce)").matches,NA=["localhost","127.0.0.1","[::1]",""].includes(location.hostname)||location.hostname.endsWith(".localhost"),Uy=s=>{try{navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(s)}catch{}},Oy={get(s){try{return JSON.parse(localStorage.getItem(s))}catch{return null}},set(s,t){try{localStorage.setItem(s,JSON.stringify(t))}catch{}}},Pi={tx:0,ty:0,tilt:0},Ps={tx:0,ty:0,tilt:0};li||(addEventListener("deviceorientation",s=>{typeof s.gamma=="number"&&(Ps.tx=Wa(s.gamma/25,-1,1),Ps.ty=Wa(((s.beta||50)-50)/25,-1,1),Ps.tilt=Wa(-s.gamma*.5,-14,14))},{passive:!0}),addEventListener("pointermove",s=>{s.pointerType==="mouse"&&(Ps.tx=(s.clientX/innerWidth-.5)*2,Ps.ty=(s.clientY/innerHeight-.5)*2,Ps.tilt=Ps.tx*4)},{passive:!0}));var Mc=null;li||(Mc=new K0({lerp:.09,smoothWheel:!0}),Mc.on("scroll",ie.update),Zn.ticker.add(s=>Mc.raf(s*1e3)),Zn.ticker.lagSmoothing(0));Ls('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=oe(s.getAttribute("href"));!e||!Mc||(t.preventDefault(),Mc.scrollTo(e,{duration:1.5,easing:n=>1-Math.pow(1-n,4)}))}));var as=oe("#hero"),ln={frame:oe(".frame"),tilt:oe(".tilt"),invite:oe(".invite"),count:oe(".count"),htassel:oe(".hero__tassel"),cue:oe(".cue"),blessing:oe(".blessing"),paper:oe(".hero__paper"),pre:oe(".a-pre"),name:oe(".a-name"),lines:Ls(".a-t1, .a-t2, .a-t3, .a-t4, .a-t5, .a-t6"),cueIn:oe(".a-cue")},He=null;as.classList.add("hero--3d");try{He=xy({canvas:oe(".hero__gl"),frameEl:ln.frame,reduce:li}),oe(".hero__gl").addEventListener("webglcontextlost",s=>{s.preventDefault(),UA()})}catch(s){console.warn("[hero] 3D unavailable, using the flat version",s),as.classList.remove("hero--3d")}function UA(){He=null,as.classList.remove("hero--3d"),as.classList.add("go","is-skip")}var Xa=null,Fy=10800,Ac=0,OA=()=>{let s=He.state;Zn.set(ln.lines,{y:14}),Zn.set(ln.name,{opacity:1,clipPath:"inset(-20% 100% -20% -5%)"});let t=Zn.timeline({paused:!0,defaults:{ease:"none"}});return t.to(ln.pre,{opacity:1,duration:1,ease:"sine.out"},.2).to(s,{outer:1,duration:2.2,ease:"power2.inOut"},.8).to(s,{inner:1,duration:2.2,ease:"power2.inOut"},1.3).to(s,{paper:1,duration:1.4,ease:"sine.inOut"},2.8).to(s,{trees:1,duration:2.4,ease:"power1.out"},3).to(s,{bloom:1,duration:2.2,ease:"sine.inOut"},4.1).to(s,{hamsaLine:1,duration:1.4,ease:"power2.inOut"},5.3).to(s,{hamsaRise:1,duration:1.1,ease:"power2.out"},6.3).to(ln.name,{clipPath:"inset(-20% -5% -20% -5%)",duration:1.3,ease:"power3.inOut"},6.4).to(ln.lines,{opacity:1,y:0,duration:.9,ease:"power2.out",stagger:.2},7.2).to(s,{tassel:1,duration:2,ease:"elastic.out(1, 0.45)"},8.4).to(s,{petals:1,duration:2},8.6).to(ln.cueIn,{opacity:1,duration:1},10),t},By=()=>{Xa&&performance.now()-Ac<Fy&&Xa.timeScale(14)},FA=()=>{Ac||(Ac=performance.now(),He?(Xa=OA(),scrollY>60||li?Xa.progress(1):Xa.play()):(as.classList.add("go"),(scrollY>60||li)&&as.classList.add("is-skip")))};Promise.race([document.fonts&&document.fonts.ready,new Promise(s=>setTimeout(s,1400))]).then(FA);["pointerdown","wheel","keydown","touchmove"].forEach(s=>as.addEventListener(s,()=>{He?By():performance.now()-Ac<Fy&&as.classList.add("is-skip")},{passive:!0}));addEventListener("scroll",()=>{scrollY>40&&Ac&&(He?By():as.classList.add("is-skip"))},{passive:!0});(()=>{let s=oe("[data-count-num]"),t=oe("[data-count-pre]"),e=oe("[data-count-unit]"),n=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jerusalem"}).format(new Date),[i,r,o]=n.split("-").map(Number),[a,l,c]=(Ec.EVENT_DATE||"2026-10-28").split("-").map(Number),h=Math.round((Date.UTC(a,l-1,c)-Date.UTC(i,r-1,o))/864e5);h>1?(s.textContent=h,t.textContent="\u05E2\u05D5\u05D3",e.textContent="\u05D9\u05DE\u05D9\u05DD \u05E2\u05D3 \u05D4\u05D7\u05D9\u05E0\u05D4"):h===1?(s.textContent="\u05DE\u05D7\u05E8",t.textContent="",e.textContent="\u05E0\u05E4\u05D2\u05E9\u05D5\u05EA \u05D1\u05D7\u05D9\u05E0\u05D4"):h===0?(s.textContent="\u05D4\u05D9\u05D5\u05DD",t.textContent="",e.textContent="\u05D4\u05D7\u05D9\u05E0\u05D4 \u05E9\u05DC \u05E9\u05D9\u05E8\u05D4. \u05E0\u05EA\u05E8\u05D0\u05D4 \u05D1\u05E2\u05E8\u05D1"):(s.textContent="\u05EA\u05D5\u05D3\u05D4",t.textContent="",e.textContent="\u05E9\u05D4\u05D9\u05D9\u05EA\u05DF \u05D0\u05D9\u05EA\u05D9")})();var If=0,tr=0,ky=!0,BA=0;ie.create({trigger:as,start:"top top",end:"bottom bottom",onUpdate:s=>{If=s.progress},onRefresh:s=>{If=s.progress,tr=s.progress}});new IntersectionObserver(s=>{ky=s[0].isIntersecting},{rootMargin:"120px"}).observe(as);var qm=()=>{BA=ln.frame.offsetTop+ln.frame.offsetHeight/2};qm();var wy=(s,t,e,n)=>{let i=er(0,.4,s),r=1+(n-1)*i;ln.tilt.style.transform=`perspective(900px) rotateX(${(-t).toFixed(2)}deg) rotateY(${e.toFixed(2)}deg) scale(${r.toFixed(4)})`;let o=er(.03,.22,s);ln.invite.style.opacity=(1-o).toFixed(3),ln.invite.style.transform=`translate3d(0, ${(-24*o).toFixed(1)}px, 0)`;let a=er(.22,.5,s);if(ln.count.style.opacity=a.toFixed(3),ln.count.style.transform=`translate3d(0, calc(-50% + ${((1-a)*18).toFixed(1)}px), 0)`,ln.cue.style.opacity=(1-er(.02,.1,s)).toFixed(3),ln.blessing.style.opacity=(1-er(.05,.2,s)).toFixed(3),!He){ln.frame.style.transform=`scale(${r.toFixed(4)})`;let l=er(0,.3,s);ln.htassel.style.opacity=(1-l).toFixed(3),ln.htassel.style.transform=`translate3d(0, ${(l*60).toFixed(1)}px, 0)`}},bc=oe(".threaded");li?bc.style.setProperty("--tp",1):(Zn.fromTo(bc,{"--tp":0},{"--tp":1,ease:"none",scrollTrigger:{trigger:bc,start:"top 60%",end:"bottom 60%",scrub:.3}}),ie.batch(Ls(".reveal"),{start:"top 90%",once:!0,onEnter:s=>Zn.to(s,{opacity:1,y:0,duration:1,stagger:.12,ease:"power3.out",overwrite:!0})}));Ls(".threaded .bead").forEach(s=>{if(!s.classList.contains("bead--full")){if(li){s.classList.add("on");return}ie.create({trigger:s,start:"top 60%",onEnter:()=>s.classList.add("on"),onLeaveBack:()=>s.classList.remove("on")})}});var zm=My(bc,{reduce:li});if(!li){let s={p:0};ie.create({trigger:bc,start:"top 62%",end:"bottom 62%",onUpdate:t=>Zn.to(s,{p:t.progress,duration:.5,ease:"power2.out",overwrite:!0,onUpdate:()=>zm.set(s.p)}),onRefresh:t=>{s.p=t.progress,zm.set(s.p)}})}var Ty=oe(".ambient"),kA=oe(".ambient__glows"),os=null;if(!li)try{os=vy({canvas:oe(".petals")})}catch(s){console.warn("[ambient] off",s)}var Ey=-1,Gr=null;try{Gr=by(oe(".ambient__gl")),document.documentElement.classList.add("has-bg")}catch(s){console.warn("[backdrop] off",s)}var km=0,Ay=scrollY,Cy=-1,zA=oe("#rsvp"),Lf=oe("[data-rsvp]"),Cc=oe("[data-form]"),Ry=Ls(".step",Cc),wc=oe("[data-status]"),Vm=oe("#guest-name"),Hr=oe("[data-pull]"),Vr=oe("[data-tassel]"),VA=oe("[data-sendhint]"),Ga=oe("[data-tapsend]"),HA=oe(".pull__cord"),GA=oe("[data-gm-fade]"),WA=oe("[data-gm-solid]"),Is=null;try{let s=oe(".pull__gl");Is=ly(s),s.hidden=!1,Hr.classList.add("pull--gl")}catch(s){console.warn("[rsvp] flat tassel",s)}var XA=()=>crypto.randomUUID?crypto.randomUUID():String(Date.now())+Math.random().toString(16).slice(2),Hm=Oy.get("shira-rsvp-ids")||{},zy=s=>s.replace(/\s+/g," ").trim().toLowerCase(),ue={id:"",name:"",going:null,count:1,busy:!1,step:"1"},Zm={1:350,2:260,3:150,done:-90,idle:480},Tc={y:Zm.idle},Gm=()=>{GA.setAttribute("y",Tc.y),WA.setAttribute("y",Tc.y+70)},Vy=(s,t=1.3)=>{if(Zn.killTweensOf(Tc),li||t===0){Tc.y=s,Gm();return}Zn.to(Tc,{y:s,duration:t,ease:"power3.out",onUpdate:Gm})};Gm();var Wm=!1;new IntersectionObserver(s=>{Wm||!s[0].isIntersecting||(Wm=!0,Vy(Zm[ue.step]))},{threshold:.3}).observe(Lf);var Hy=!1;new IntersectionObserver(s=>{Hy=s[0].isIntersecting},{rootMargin:"150px"}).observe(Lf);var YA=s=>s<=1?"\u05E8\u05E7 \u05D0\u05EA":s===2?"\u05D0\u05EA \u05D5\u05E2\u05D5\u05D3 \u05D0\u05D5\u05E8\u05D7\u05EA \u05D0\u05D7\u05EA":`\u05D0\u05EA \u05D5\u05E2\u05D5\u05D3 ${s-1} \u05D0\u05D5\u05E8\u05D7\u05D5\u05EA`,$m=()=>{Ls("[data-name]").forEach(s=>{s.textContent=ue.name.split(" ")[0]}),oe("[data-count]").textContent=ue.count,oe("[data-count-text]").textContent=YA(ue.count),Ls("[data-if]").forEach(s=>{s.hidden=s.dataset.if!==ue.going}),oe("[data-sendhint-text]").textContent="\u05DE\u05E9\u05DB\u05D9 \u05D0\u05EA \u05D4\u05D2\u05D3\u05D9\u05DC \u05DC\u05E9\u05DC\u05D9\u05D7\u05D4"},qA=s=>{Hr.classList.toggle("is-armed",s),Vr.tabIndex=s?0:-1,s&&(Ga.textContent="\u05D0\u05D5 \u05DC\u05D7\u05E6\u05D9 \u05DC\u05E9\u05DC\u05D9\u05D7\u05D4")},Ao=(s,{focus:t=!0,instant:e=!1}={})=>{if(ue.step=String(s),Ry.forEach(r=>{r.hidden=r.dataset.step!==ue.step}),Lf.dataset.stage=ue.step,$m(),qA(ue.step==="3"),wc.textContent="",(Wm||e)&&Vy(Zm[ue.step],e?0:1.3),!t)return;let n=Ry.find(r=>!r.hidden),i=ue.step==="done"?n:n.querySelector("input, button");i&&i.focus({preventScroll:!0})},Gy=(s,t)=>{wc.textContent="",t?wc.append(t):wc.textContent=s};Cc.addEventListener("submit",s=>{if(s.preventDefault(),ue.step!=="1")return;let t=Vm.value.trim().replace(/\s+/g," ");if(t.split(" ").filter(e=>e.length>1).length<2){Gy("\u05DB\u05EA\u05D1\u05D9 \u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 \u05D5\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 \u05DB\u05D3\u05D9 \u05E9\u05E0\u05D3\u05E2 \u05DE\u05D9 \u05D4\u05D2\u05D9\u05E2\u05D4"),Vm.focus();return}ue.name=t.slice(0,40),ue.id=Hm[zy(ue.name)]||XA(),Ao(2)});Ls("[data-going]",Cc).forEach(s=>s.addEventListener("click",()=>{ue.going=s.dataset.going,ue.going==="no"?ue.count=0:ue.count||(ue.count=1),Ao(3)}));oe("[data-inc]").addEventListener("click",()=>{ue.count=Math.min(9,ue.count+1),$m()});oe("[data-dec]").addEventListener("click",()=>{ue.count=Math.max(1,ue.count-1),$m()});Ls("[data-back]",Cc).forEach(s=>s.addEventListener("click",()=>Ao(Number(ue.step)-1)));oe("[data-edit]").addEventListener("click",()=>Ao(2));oe("[data-another]").addEventListener("click",()=>{Object.assign(ue,{id:"",name:"",going:null,count:1}),Vm.value="",Ao(1)});var ZA=async s=>{let t=Ec.RSVP_ENDPOINT;if(!t){if(NA){await new Promise(i=>setTimeout(i,700)),console.info("[RSVP demo] not sent, RSVP_ENDPOINT is empty:",s);return}throw new Error("no-endpoint")}let e=new AbortController,n=setTimeout(()=>e.abort(),12e3);try{if(Ec.RSVP_MODE==="webhook"){await fetch(t,{method:"POST",mode:"no-cors",body:new URLSearchParams(s),signal:e.signal});return}let i=await fetch(t,{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(s),signal:e.signal}),r=await i.json().catch(()=>null);if(!i.ok||!r||r.ok!==!0)throw new Error("bad-response")}finally{clearTimeout(n)}},$A=()=>{if(!li)for(let s=0;s<16;s++){let t=document.createElement("span");t.className="petal",t.style.setProperty("--x",`${20+Math.random()*60}%`),t.style.setProperty("--s",`${5+Math.random()*6}px`),t.style.setProperty("--dx",`${(Math.random()-.5)*120}px`),t.style.setProperty("--dy",`${260+Math.random()*300}px`),t.style.setProperty("--d",`${2.4+Math.random()*1.6}s`),t.style.setProperty("--dl",`${Math.random()*.9}s`),Lf.appendChild(t),setTimeout(()=>t.remove(),5200)}},Xm=async()=>{if(ue.busy||ue.step!=="3")return;ue.busy=!0,Ga.textContent="\u05E9\u05D5\u05DC\u05D7\u05EA\u2026",Ga.disabled=!0,wc.textContent="";let s={id:ue.id,name:ue.name,going:ue.going,count:ue.going==="yes"?ue.count:0,website:Cc.elements.website.value,sentAt:new Date().toISOString()};try{await ZA(s),Hm[zy(ue.name)]=ue.id,Oy.set("shira-rsvp-ids",Hm),Ao("done"),ue.going==="yes"&&($A(),os&&os.burst(innerWidth/2,innerHeight*.55),Uy(18))}catch(t){console.warn("[RSVP] failed",t);let e=null;if(Ec.WHATSAPP_URL){e=document.createElement("span"),e.append("\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7. \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1 \u05D0\u05D5 ");let n=document.createElement("a");n.href=Ec.WHATSAPP_URL,n.textContent="\u05DC\u05DB\u05EA\u05D5\u05D1 \u05DC\u05E9\u05D9\u05E8\u05D4 \u05D1\u05D5\u05D5\u05D0\u05D8\u05E1\u05D0\u05E4",e.append(n)}Gy("\u05DC\u05D0 \u05D4\u05E6\u05DC\u05D7\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D5\u05D7 \u05DB\u05E8\u05D2\u05E2, \u05D0\u05E4\u05E9\u05E8 \u05DC\u05E0\u05E1\u05D5\u05EA \u05E9\u05D5\u05D1.",e),Ga.textContent="\u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E0\u05D5\u05E1\u05E3"}finally{ue.busy=!1,Ga.disabled=!1}};Ga.addEventListener("click",Xm);var Wy=s=>{He&&He.kick(s),Is&&Is.kick(s)};(()=>{let e=0,n=0,i=!1,r=!1,o=l=>{n=l,Vr.style.transform=`translate3d(0, ${l.toFixed(1)}px, 0)`,HA.style.transform=`scaleY(${(l/120).toFixed(3)})`};Vr.addEventListener("pointerdown",l=>{!Hr.classList.contains("is-armed")||ue.busy||(i=!0,r=!1,e=l.clientY,Hr.classList.remove("is-spring"),Hr.classList.add("is-drag"),Vr.setPointerCapture(l.pointerId))}),Vr.addEventListener("pointermove",l=>{if(!i)return;let c=Math.max(0,l.clientY-e);c>6&&(r=!0),o(Math.min(110,c*.85)),Is&&Is.kick(c*.002)});let a=()=>{if(!i)return;i=!1,Hr.classList.remove("is-drag"),Hr.classList.add("is-spring");let l=n>=58;o(0),Is&&Is.kick(l?6:3),l&&(Uy(12),Xm())};Vr.addEventListener("pointerup",a),Vr.addEventListener("pointercancel",a),Vr.addEventListener("click",()=>{if(Hr.classList.contains("is-armed")){if(r){r=!1;return}if(event.detail===0){Xm();return}Wy(3),VA.animate([{opacity:1},{opacity:.35},{opacity:1}],{duration:700})}})})();Ao(1,{focus:!1,instant:!0});var Ym=class{constructor(t){this.el=t,this.th=0,this.om=0,this.ph=Math.random()*6}step(t,e){let n=-16*(this.th-(Pi.tilt+1.6*Math.sin(e*1.05+this.ph)))-1.5*this.om;this.om+=n*t,this.th=Wa(this.th+this.om*t,-28,28),this.el.style.transform=`rotate(${this.th.toFixed(2)}deg)`}kick(t){this.om+=t}},Xy=li?[]:Ls("[data-swing]").filter(s=>!(s.closest(".hero__tassel")&&He)&&!(s.closest(".pull")&&Is)).map(s=>new Ym(s)),Py=scrollY,JA=()=>{let s=scrollY-Py;if(Py=scrollY,li||!s)return;let t=Wa(s,-50,50)*.025*(Math.sin(scrollY/90)>0?1:-1);Wy(t),Xy.forEach(e=>e.kick(t))};addEventListener("scroll",JA,{passive:!0});var Pf=0,Iy=!1;Zn.ticker.add((s,t)=>{let e=Math.min(.033,t/1e3);!Iy&&s>4&&(Pf=t>26?Pf+1:Math.max(0,Pf-1),Pf>40&&(Iy=!0,Gr&&Gr.lighten(),os&&os.lighten()));let n=1-Math.exp(-e*6);Pi.tx+=(Ps.tx-Pi.tx)*n,Pi.ty+=(Ps.ty-Pi.ty)*n,Pi.tilt+=(Ps.tilt-Pi.tilt)*n,tr=li?If:tr+(If-tr)*(1-Math.exp(-e*9));let i=er(.3,.62,tr);Math.abs(i-Ey)>.002&&(Ey=i,Ty.style.setProperty("--wash",i.toFixed(3)));{let r=er(innerHeight,innerHeight*.2,zA.getBoundingClientRect().top);Math.abs(r-Cy)>.002&&(Cy=r,Ty.style.setProperty("--gm",r.toFixed(3)))}if(Gr){let r=Gr.uniforms;km+=(Math.min(1,Math.abs(scrollY-Ay)/Math.max(e*1e3,1)*.01)-km)*(1-Math.exp(-e*2.5)),Ay=scrollY,r.uWind.value=km,r.uScroll.value=scrollY/innerHeight,r.uTilt.value.set(Pi.tx,Pi.ty),Gr.render(s)}if(os&&(kA.style.transform=`translate3d(0, ${(Math.sin(scrollY/950)*7).toFixed(2)}vh, 0)`,os.intensity=.3+.7*er(.08,.5,tr),os.frame(e,s)),ky)if(He)He.env.tx=Pi.tx,He.env.ty=Pi.ty,He.env.tilt=Pi.tilt,He.state.scroll=tr,He.frame(e,s),wy(tr,He.tiltOut.rx,He.tiltOut.ry,He.view.zoom);else{let r=ln.frame.offsetWidth||340;wy(tr,0,0,Math.min(1.16,innerWidth*.985/r))}Hy&&Is&&Is.render(e,s,Pi.tilt);for(let r of Xy)r.step(e,s)});var Ly=0,Dy=innerWidth,Ny=innerHeight;addEventListener("resize",()=>{innerWidth===Dy&&Math.abs(innerHeight-Ny)<200&&matchMedia("(pointer: coarse)").matches||(Dy=innerWidth,Ny=innerHeight,cancelAnimationFrame(Ly),Ly=requestAnimationFrame(()=>{qm(),He&&He.layout(),os&&os.resize(),Gr&&Gr.resize(),ie.refresh()}))});document.fonts&&document.fonts.ready.then(()=>{qm(),He&&He.layout(),ie.refresh()});window.__shira={scene:He,gsap:Zn,ambient:os,vine:zm,get intro(){return Xa}};})();
