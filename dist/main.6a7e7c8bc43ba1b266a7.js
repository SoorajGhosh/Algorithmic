(()=>{"use strict";var t={623:(t,e,i)=>{const s=document.querySelector("#canvas"),h=()=>{s.width=window.innerWidth,s.height=window.innerHeight<850?window.innerWidth:window.innerHeight};h(),window.addEventListener("resize",h);const d=new class{constructor(t){this.width=t.width,this.height=t.height,this.ctx=t.getContext("2d")}}(s),n=new class{constructor({w:t,h:e,x:i,y:s,speed:h,canvas:d}){this.width=t,this.height=e,this.speed=h,this.x=i,this.dx=this.speed+2,this.y=s,this.dy=this.speed+1,this.canvas=d}move(){this.x+this.width>d.width?this.dx=-this.speed:this.x<0&&(this.dx=this.speed),this.y+this.height>d.height?this.dy=-this.speed:this.y<0&&(this.dy=this.speed),this.x+=this.dx,this.y+=this.dy}draw(){this.move(),this.canvas.ctx.fillStyle="red",this.canvas.ctx.fillRect(this.x,this.y,this.width,this.height)}}({w:3,h:3,x:0,y:0,speed:1,canvas:d});t=i.hmd(t);const r=()=>{d.ctx.clearRect(0,0,d.width,d.height),n.draw(),window.requestAnimationFrame(r)};r(),t&&t.hot&&t.hot.accept()}},e={};function i(s){var h=e[s];if(void 0!==h)return h.exports;var d=e[s]={id:s,loaded:!1,exports:{}};return t[s](d,d.exports,i),d.loaded=!0,d.exports}i.hmd=t=>((t=Object.create(t)).children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t),i(623)})();