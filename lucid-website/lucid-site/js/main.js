(function(){
var $=function(i){return document.getElementById(i)};
document.documentElement.classList.add('js');
/* no text selection or ghost-image dragging anywhere */
document.addEventListener('selectstart',function(e){e.preventDefault()});
document.addEventListener('dragstart',function(e){e.preventDefault()});
var reduce=matchMedia('(prefers-reduced-motion: reduce)');

/* Spring: response (s) + damping ratio. Re-targets from live value AND live velocity, so it is always interruptible. */
function spring(x0,onUpdate,o){
  var x=x0,v=0,t=x0,raf=0,last=0,resp=o.response,z=o.damping;
  function step(now){
    var dt=Math.min((now-last)/1000,1/50);last=now;
    var k=Math.pow(2*Math.PI/resp,2),c=4*Math.PI*z/resp;
    v+=(-k*(x-t)-c*v)*dt;x+=v*dt;onUpdate(x);
    if(Math.abs(v)<.5&&Math.abs(x-t)<.3){x=t;v=0;onUpdate(x);raf=0;return}
    raf=requestAnimationFrame(step);
  }
  return{
    get x(){return x},
    set:function(n){x=n;onUpdate(x)},
    stop:function(){cancelAnimationFrame(raf);raf=0;v=0},
    to:function(target,vel){
      t=target;if(vel!==undefined)v=vel;
      if(reduce.matches){this.stop();x=t;onUpdate(x);return}
      if(!raf){last=performance.now();raf=requestAnimationFrame(step)}
    }
  };
}
function rubber(o,d){return(o*d*.55)/(d+.55*o)}                 /* progressive resistance */
function project(v){return(v/1000)*.998/(1-.998)}                 /* where the flick is heading */

/* ---------- Bottom sheet: 1:1 drag, momentum projection, velocity handoff ---------- */
var screen=$('screen'),sheet=$('sheet'),hnd=$('hnd'),player=$('player');
var H=0,closedY=0,openY=56,drag=null,hist=[];
function paint(y){
  sheet.style.transform='translateY('+y+'px)';
  var p=Math.max(0,Math.min(1,(closedY-y)/(closedY-openY)));   /* background steps back as the sheet rises */
  player.style.transform='scale('+(1-.05*p)+')';player.style.opacity=1-.35*p;
}
var sp=spring(0,paint,{response:.3,damping:.8});
function measure(){H=screen.clientHeight;closedY=H-64;if(!drag){sp.stop();sp.set(isOpen()?openY:closedY)}}
function isOpen(){return hnd.getAttribute('aria-expanded')==='true'}
function setOpen(o,v){hnd.setAttribute('aria-expanded',o);sp.to(o?openY:closedY,v)}
hnd.addEventListener('pointerdown',function(e){
  hnd.setPointerCapture(e.pointerId);sp.stop();                 /* grab it mid-flight: start from the live value */
  drag={off:e.clientY-sp.x,y0:e.clientY,moved:false};hist=[[e.timeStamp,e.clientY]];
});
hnd.addEventListener('pointermove',function(e){
  if(!drag)return;
  if(Math.abs(e.clientY-drag.y0)>6)drag.moved=true;
  var y=e.clientY-drag.off;
  if(y<openY)y=openY-rubber(openY-y,200);
  else if(y>closedY)y=closedY+rubber(y-closedY,200);
  sp.set(y);hist.push([e.timeStamp,e.clientY]);if(hist.length>5)hist.shift();
});
function release(e){
  if(!drag)return;var d=drag;drag=null;
  if(!d.moved){setOpen(!isOpen());return}
  var a=hist[0],b=hist[hist.length-1],dt=b[0]-a[0],v=dt>0?(b[1]-a[1])/dt*1000:0;
  var end=sp.x+project(v);
  setOpen(Math.abs(end-openY)<Math.abs(end-closedY),v);        /* choose from projection, then hand off velocity */
}
hnd.addEventListener('pointerup',release);hnd.addEventListener('pointercancel',release);
hnd.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();setOpen(!isOpen())}});
sheet.style.transform='';measure();addEventListener('resize',measure);

/* ---------- Player ---------- */
var DUR=225,prog=0,playing=true,scrub=false,lastT=0;
var seek=$('seek'),fill=$('fill'),thumb=$('thumb'),tn=$('tn'),pp=$('pp'),ico=$('ico'),cover=$('cover');
var lines=[].slice.call($('lines').children);
function fmt(s){s=Math.floor(s);return Math.floor(s/60)+':'+('0'+s%60).slice(-2)}
function render(){
  var pc=prog*100+'%';fill.style.width=pc;thumb.style.left=pc;tn.textContent=fmt(prog*DUR);
  seek.setAttribute('aria-valuenow',Math.round(prog*DUR));
  var i=Math.min(lines.length-1,Math.floor(prog*DUR/(DUR/lines.length)));
  lines.forEach(function(l,n){l.classList.toggle('a',n===i)});
}
function tick(now){
  var dt=(now-lastT)/1000;lastT=now;
  if(playing&&!scrub){prog+=dt/DUR;if(prog>=1)prog=0;render()}
  requestAnimationFrame(tick);
}
function setPlaying(p){
  playing=p;pp.setAttribute('aria-label',p?'Pause':'Play');
  ico.innerHTML=p?'<path d="M6 5h4v14H6zm8 0h4v14h-4z"/>':'<path d="M8 5v14l11-7z"/>';
  cover.className='cover '+(p?'playing':'paused');
  if(navigator.vibrate)try{navigator.vibrate(8)}catch(e){}      /* haptic only on the meaningful commit */
}
pp.addEventListener('click',function(){setPlaying(!playing)});
$('prev').addEventListener('click',function(){prog=0;render()});
$('next').addEventListener('click',function(){prog=0;render()});
function seekTo(e){var r=seek.getBoundingClientRect();prog=Math.max(0,Math.min(1,(e.clientX-r.left)/r.width));render()}
seek.addEventListener('pointerdown',function(e){seek.setPointerCapture(e.pointerId);scrub=true;seek.classList.add('on');seekTo(e)}); /* responds on press, tracks 1:1 */
seek.addEventListener('pointermove',function(e){if(scrub)seekTo(e)});
function endScrub(){scrub=false;seek.classList.remove('on')}
seek.addEventListener('pointerup',endScrub);seek.addEventListener('pointercancel',endScrub);
seek.addEventListener('keydown',function(e){
  var d=e.key==='ArrowRight'?5:e.key==='ArrowLeft'?-5:0;
  if(d){e.preventDefault();prog=Math.max(0,Math.min(1,prog+d/DUR));render()}
});
cover.className='cover playing';render();lastT=performance.now();requestAnimationFrame(tick);

/* ---------- Release: change VERSION when a new release is out ---------- */
var VERSION='1.0.0',BASE='https://github.com/mahie-cs/Lucid/releases/download/v'+VERSION+'/';
[].forEach.call(document.querySelectorAll('[data-arch]'),function(a){
  var f='lucid-'+VERSION+'-'+a.dataset.arch+'.apk';a.href=BASE+f;a.title=f;
});
[].forEach.call(document.querySelectorAll('[data-ver]'),function(e){e.textContent=VERSION});

/* ---------- ASCII background: warped noise field, rings, pointer ripple ---------- */
(function(){
  var cv=$('ascii'),cx=cv.getContext('2d'),RAMP=' .,:;-=+*#%@',FS=12,cw=7.2,ch=13.5,cols=0,rows=0;
  var px=-1e4,py=-1e4,rgb='92,255,150',dark=true,lastD=0,n=0;
  function h(x,y){var q=Math.sin(x*127.1+y*311.7)*43758.5453;return q-Math.floor(q)}
  function vn(x,y){
    var xi=Math.floor(x),yi=Math.floor(y),xf=x-xi,yf=y-yi,u=xf*xf*(3-2*xf),v=yf*yf*(3-2*yf);
    var a=h(xi,yi),b=h(xi+1,yi),c=h(xi,yi+1),d=h(xi+1,yi+1);
    return a+(b-a)*u+((c+(d-c)*u)-(a+(b-a)*u))*v;
  }
  function fbm(x,y){return vn(x,y)*.55+vn(x*2,y*2)*.28+vn(x*4,y*4)*.14}
  function size(){
    var dpr=Math.min(2,window.devicePixelRatio||1);
    cv.width=innerWidth*dpr;cv.height=innerHeight*dpr;cx.setTransform(dpr,0,0,dpr,0,0);
    cx.font=FS+'px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace';cx.textBaseline='top';
    cw=cx.measureText('M').width;ch=FS+1.5;cols=Math.ceil(innerWidth/cw)+1;rows=Math.ceil(innerHeight/ch)+1;
  }
  function color(){
    var c=getComputedStyle(document.documentElement).getPropertyValue('--accent').trim(),m=/^#?([0-9a-f]{6})$/i.exec(c);
    if(m){var q=parseInt(m[1],16),r=q>>16,g=(q>>8)&255,b=q&255;rgb=r+','+g+','+b;dark=(r*.3+g*.6+b*.1)>140}
  }
  function draw(t){
    if(n++%30===0)color();
    var W=innerWidth,Hh=innerHeight,sc=window.scrollY/700,ccu=W*.74/600,ccw=Hh*.36/600;
    cx.clearRect(0,0,W,Hh);
    var base='rgba('+rgb+','+(dark?.15:.12)+')',bright='rgba('+rgb+','+(dark?.34:.26)+')';
    for(var j=0;j<rows;j++){
      var w=j*ch/600+sc*.35,b='',hi='',ddy=j*ch-py;
      for(var i=0;i<cols;i++){
        var u=i*cw/600,qx=vn(u*2+t*.12,w*2),qy=vn(u*2+5.2,w*2+1.3-t*.1);
        var v=fbm(u*3+qx*2,w*3+qy*2+t*.07)*1.05;
        var dx=u-ccu,dy=w-ccw,r=Math.sqrt(dx*dx+dy*dy);
        v=v*.7+(.5+.5*Math.sin(r*20-t*1.4))*Math.max(0,1-r*.85)*.5;
        var ddx=i*cw-px,d=Math.sqrt(ddx*ddx+ddy*ddy)/600;
        v+=.4*Math.exp(-d*4)*(.5+.5*Math.sin(d*40-t*5));
        v=(v-.25)*1.5;if(v<0)v=0;else if(v>.999)v=.999;
        var k=(v*RAMP.length)|0;
        b+=RAMP.charAt(k);hi+=k>=9?RAMP.charAt(k):' ';
      }
      cx.fillStyle=base;cx.fillText(b,0,j*ch);cx.fillStyle=bright;cx.fillText(hi,0,j*ch);
    }
  }
  function frame(now){
    if(reduce.matches)return;
    if(now-lastD>=33){lastD=now;draw(now/1000)}
    requestAnimationFrame(frame);
  }
  addEventListener('pointermove',function(e){px=e.clientX;py=e.clientY},{passive:true});
  addEventListener('resize',function(){size();if(reduce.matches)draw(3)});
  size();
  if(reduce.matches)draw(3);else requestAnimationFrame(frame);   /* reduced motion: one still frame */
})();

/* ---------- Download popup ---------- */
var dlg=$('dlg'),panel=$('panel'),trig=null;
function openDl(t){
  trig=t;var r=t.getBoundingClientRect(),p=panel.getBoundingClientRect();
  panel.style.setProperty('--ox',(r.left+r.width/2-p.left)+'px');            /* grows from the button that opened it */
  panel.style.setProperty('--oy',(r.top+r.height/2-p.top)+'px');
  dlg.classList.add('open');dlg.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';$('dclose').focus();
}
function closeDl(){
  if(!dlg.classList.contains('open'))return;
  dlg.classList.remove('open');dlg.setAttribute('aria-hidden','true');document.body.style.overflow='';
  if(trig)try{trig.focus()}catch(e){}
}
[].forEach.call(document.querySelectorAll('[data-open-dl]'),function(b){b.addEventListener('click',function(e){e.preventDefault();openDl(b)})});
$('scrim').addEventListener('click',closeDl);$('dclose').addEventListener('click',closeDl);
[].forEach.call(panel.querySelectorAll('.opt'),function(a){a.addEventListener('click',function(){setTimeout(closeDl,300)})});
addEventListener('keydown',function(e){
  if(!dlg.classList.contains('open'))return;
  if(e.key==='Escape'){closeDl();return}
  if(e.key==='Tab'){
    var f=panel.querySelectorAll('button,a[href]'),first=f[0],last=f[f.length-1];
    if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}
    else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}
  }
});

/* ---------- Mobile menu ---------- */
var hdr=document.querySelector('header'),mbtn=$('menu');
function setMenu(o){hdr.classList.toggle('open',o);mbtn.setAttribute('aria-expanded',o);mbtn.setAttribute('aria-label',o?'Close menu':'Menu')}
function closeMenu(){setMenu(false)}
mbtn.addEventListener('click',function(){setMenu(!hdr.classList.contains('open'))});
$('mnav').addEventListener('click',function(e){if(e.target.closest('a'))closeMenu()});
document.addEventListener('pointerdown',function(e){if(hdr.classList.contains('open')&&!hdr.contains(e.target))closeMenu()});
addEventListener('keydown',function(e){if(e.key==='Escape'&&hdr.classList.contains('open')){closeMenu();mbtn.focus()}});
addEventListener('resize',function(){if(innerWidth>700)closeMenu()});

/* ---------- Pages, routed on the hash ---------- */
var pages=['home','features','get','about'],titles={home:'Lucid: Ad-free YouTube Music for Android',features:'Features | Lucid',get:'Download | Lucid',about:'About | Lucid'};
function route(){
  closeDl();closeMenu();
  var h=location.hash.slice(1);if(pages.indexOf(h)<0)h='home';
  pages.forEach(function(p){$('p-'+p).hidden=p!==h});
  [].forEach.call(document.querySelectorAll('[data-p]'),function(a){if(a.dataset.p===h)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')});
  document.title=titles[h];window.scrollTo(0,0);
  if(h==='home')measure();
}
addEventListener('hashchange',route);route();

/* ---------- Scroll reveal ---------- */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
[].forEach.call(document.querySelectorAll('.rv'),function(el){io.observe(el)});
})();
