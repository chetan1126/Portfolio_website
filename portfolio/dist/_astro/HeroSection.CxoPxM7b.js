import{o as e,t}from"./react.Ca03aNmg.js";import{i as n,t as r}from"./jsx-runtime.Cgb9VPIP.js";import{n as i,r as a,t as o}from"./features-animation.DuLTHPLo.js";import{t as s}from"./use-reduced-motion.n0mPKde6.js";import{n as c,r as l,t as u}from"./Mail01Icon.D98dpDw3.js";import{t as d}from"./DocumentAttachmentIcon.BjA_wcYh.js";import{t as f}from"./HugeiconsIcon.DbpLfZSc.js";var p=e(t(),1),m=r(),h=`#version 300 es
in vec2 position;

void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`,g=`#version 300 es
precision highp float;

uniform vec2 resolution;
uniform vec2 pointer;
uniform float pointerStrength;
uniform float time;
uniform float scroll;
uniform float darkMode;

out vec4 color;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

void main() {
  vec2 uv = gl_FragCoord.xy / resolution.xy;
  float aspect = resolution.x / resolution.y;
  vec2 p = vec2((uv.x - 0.5) * aspect, uv.y - 0.5);
  vec2 cursor = vec2((pointer.x / resolution.x - 0.5) * aspect, pointer.y / resolution.y - 0.5);

  float t = time * 0.22 + scroll * 0.35;
  float bands = sin((p.x * 4.0 + sin(p.y * 5.0 - t) * 0.65 + t) * 3.1);
  float fold = sin((p.y * 5.5 + cos(p.x * 4.0 + t * 0.8) * 0.7 - t * 0.6) * 2.4);

  vec2 orbA = vec2(sin(t * 0.9) * 0.42, cos(t * 0.7) * 0.3);
  vec2 orbB = vec2(cos(t * 0.55 + 2.0) * 0.5, sin(t * 0.85 + 1.0) * 0.36);
  float glowA = exp(-3.8 * length(p - orbA));
  float glowB = exp(-4.6 * length(p - orbB));

  float cursorDistance = length(p - cursor);
  float ripple = sin(cursorDistance * 34.0 - time * 8.0)
    * exp(-cursorDistance * 5.0)
    * pointerStrength;
  float cursorGlow = exp(-cursorDistance * 5.5) * pointerStrength;

  vec3 mist = vec3(0.95, 0.95, 0.92);
  vec3 ember = vec3(0.95, 0.055, 0.015);
  vec3 orange = vec3(1.0, 0.30, 0.015);
  vec3 acid = vec3(0.62, 0.98, 0.02);
  vec3 sun = vec3(1.0, 0.72, 0.04);
  vec3 ink = vec3(0.035, 0.018, 0.008);

  float emberField = smoothstep(-0.75, 0.9, bands + glowA * 1.8);
  float orangeField = smoothstep(-0.45, 1.25, fold + glowB * 1.4);
  vec3 lightColor = mix(mist, ember, emberField * 0.62);
  lightColor = mix(lightColor, orange, orangeField * 0.5);
  lightColor = mix(lightColor, sun, glowA * 0.42);
  lightColor = mix(lightColor, orange, glowB * 0.28);
  lightColor += mix(sun, ember, uv.x) * (ripple * 0.16 + cursorGlow * 0.1);

  vec3 darkColor = mix(ink, ember, emberField * 0.72);
  darkColor = mix(darkColor, orange, orangeField * 0.52);
  darkColor += acid * glowA * 0.44;
  darkColor += sun * glowB * 0.36;
  darkColor += mix(sun, acid, uv.x) * (ripple * 0.32 + cursorGlow * 0.28);

  float vignette = smoothstep(0.95, 0.18, length(p * vec2(0.8, 1.0)));
  lightColor = mix(mist, lightColor, 0.94 + vignette * 0.05);
  darkColor *= 0.62 + vignette * 0.55;
  vec3 finalColor = mix(lightColor, darkColor, darkMode);
  finalColor += (hash(gl_FragCoord.xy + time) - 0.5) * 0.025;

  color = vec4(finalColor, 1.0);
}`;function _(e,t,n){let r=e.createShader(t);return r?(e.shaderSource(r,n),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS)?r:(console.warn(e.getShaderInfoLog(r)),e.deleteShader(r),null)):null}function v(){let e=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let t=e.current;if(!t)return;let n=t.getContext(`webgl2`,{alpha:!1,antialias:!1,powerPreference:`high-performance`});if(!n)return;let r=_(n,n.VERTEX_SHADER,h),i=_(n,n.FRAGMENT_SHADER,g);if(!r||!i)return;let a=n.createProgram();if(!a)return;if(n.attachShader(a,r),n.attachShader(a,i),n.linkProgram(a),n.deleteShader(r),n.deleteShader(i),!n.getProgramParameter(a,n.LINK_STATUS)){console.warn(n.getProgramInfoLog(a)),n.deleteProgram(a);return}let o=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,o),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let s=n.getAttribLocation(a,`position`);n.enableVertexAttribArray(s),n.vertexAttribPointer(s,2,n.FLOAT,!1,0,0),n.useProgram(a);let c={resolution:n.getUniformLocation(a,`resolution`),pointer:n.getUniformLocation(a,`pointer`),pointerStrength:n.getUniformLocation(a,`pointerStrength`),time:n.getUniformLocation(a,`time`),scroll:n.getUniformLocation(a,`scroll`),darkMode:n.getUniformLocation(a,`darkMode`)},l=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,u=window.matchMedia(`(pointer: coarse)`).matches,d={x:0,y:0,strength:0,targetStrength:0},f=0,p=0,m=0,v=!0,y=0,b=+!!document.documentElement.classList.contains(`dark`),x=b,S=()=>{let e=t.getBoundingClientRect(),r=Math.min(window.devicePixelRatio||1,u?1.5:2);f=Math.max(1,Math.round(e.width*r)),p=Math.max(1,Math.round(e.height*r)),(t.width!==f||t.height!==p)&&(t.width=f,t.height=p,n.viewport(0,0,f,p)),d.x===0&&d.y===0&&(d.x=f*.72,d.y=p*.52)},C=e=>{let n=t.getBoundingClientRect();d.x=(e.clientX-n.left)*(t.width/n.width),d.y=(n.bottom-e.clientY)*(t.height/n.height)},w=e=>{C(e),d.targetStrength=1},T=e=>{C(e),d.targetStrength=e.pointerType===`mouse`?.9:1},E=()=>{d.targetStrength=u?.18:0},D=e=>{if(!v)return;let t=u?1e3/30:1e3/60;if(e-y>=t||l){y=e;let t=l?2.5:e/1e3;u&&d.targetStrength<.3&&(d.x=f*(.5+Math.sin(t*.55)*.28),d.y=p*(.52+Math.cos(t*.42)*.24)),d.strength+=(d.targetStrength-d.strength)*(u?.1:.14),b+=(x-b)*(l?1:.08),n.uniform2f(c.resolution,f,p),n.uniform2f(c.pointer,d.x,d.y),n.uniform1f(c.pointerStrength,d.strength),n.uniform1f(c.time,t),n.uniform1f(c.scroll,window.scrollY/Math.max(p,1)),n.uniform1f(c.darkMode,b),n.drawArrays(n.TRIANGLES,0,3)}l||(m=requestAnimationFrame(D))},O=()=>{cancelAnimationFrame(m),v=!0,m=requestAnimationFrame(D)},k=()=>{v=!1,cancelAnimationFrame(m)},A=new ResizeObserver(()=>{S(),l&&D(0)}),j=new IntersectionObserver(([e])=>{e?.isIntersecting&&!document.hidden?O():k()}),M=()=>{document.hidden?k():O()},N=new MutationObserver(()=>{x=+!!document.documentElement.classList.contains(`dark`),l&&D(0)});return A.observe(t),j.observe(t),N.observe(document.documentElement,{attributes:!0,attributeFilter:[`class`]}),u||(window.addEventListener(`pointerdown`,w,{passive:!0}),window.addEventListener(`pointermove`,T,{passive:!0}),window.addEventListener(`pointerup`,E,{passive:!0}),window.addEventListener(`pointercancel`,E,{passive:!0}),window.addEventListener(`pointerleave`,E,{passive:!0})),document.addEventListener(`visibilitychange`,M),S(),D(0),()=>{k(),A.disconnect(),j.disconnect(),N.disconnect(),u||(window.removeEventListener(`pointerdown`,w),window.removeEventListener(`pointermove`,T),window.removeEventListener(`pointerup`,E),window.removeEventListener(`pointercancel`,E),window.removeEventListener(`pointerleave`,E)),document.removeEventListener(`visibilitychange`,M),n.deleteBuffer(o),n.deleteProgram(a)}},[]),(0,m.jsx)(`canvas`,{ref:e,className:`pointer-events-none absolute inset-0 h-full w-full bg-hero-background opacity-80`,"aria-hidden":`true`})}var y=40,b=1600,x=900,S=[`oklch(0.83 0.11 35)`,`oklch(0.92 0.09 122)`,`oklch(0.83 0.18 75)`];function C(e){return Math.round(e/y)*y}function w(e,t){return Math.random()*(t-e)+e}function T(e){return e[Math.floor(Math.random()*e.length)]}function E(e){return e.map((e,t)=>`${t===0?`M`:`L`}${e[0]},${e[1]}`).join(` `)}function D(e,t){let n=document.createElementNS(`http://www.w3.org/2000/svg`,e);for(let e in t)n.setAttribute(e,t[e]);return n}function O(e,t,n){let r=C(e),i=C(t),a=[[r,i]],o=Math.random()<.5?`h`:`v`;for(let e=0;e<n;e+=1){let e=o===`h`?`v`:`h`,t=T([1,2,3])*y*T([-1,1]);e===`h`?r=Math.min(Math.max(r+t,40),b-40):i=Math.min(Math.max(i+t,40),x-40),a.push([r,i]),o=e}return a}function k(){let e=(0,p.useRef)(null);return(0,p.useEffect)(()=>{let t=e.current;if(!t)return;t.innerHTML=``;let n=D(`defs`,{});n.innerHTML=`<filter id="glow" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="4" result="blur" /><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>`,t.appendChild(n);let r=[],i=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;for(let e=0;e<24;e+=1){let n=O(w(0,b),w(0,x),Math.floor(w(3,7))),i=E(n),a=`trace-${e}`,o=D(`path`,{d:i,class:`trace`,id:a});t.appendChild(o);let s=n[0],c=n[n.length-1];t.appendChild(D(`circle`,{cx:`${s[0]}`,cy:`${s[1]}`,r:`3`,class:`pad`})),t.appendChild(D(`circle`,{cx:`${c[0]}`,cy:`${c[1]}`,r:`3`,class:`pad`})),r.push({id:a,length:o.getTotalLength()})}for(let e=0;e<5;e+=1){let e=C(w(160,b-160)),n=C(w(120,x-120)),r=T([80,100,120]),i=T([60,80]),a=D(`g`,{});a.appendChild(D(`rect`,{x:`${e-r/2}`,y:`${n-i/2}`,width:`${r}`,height:`${i}`,rx:`4`,class:`chip`}));for(let t=0;t<4;t+=1){let o=e-r/2+(t+1)*r/5;a.appendChild(D(`line`,{x1:`${o}`,y1:`${n-i/2-8}`,x2:`${o}`,y2:`${n-i/2}`,class:`chip-pin`})),a.appendChild(D(`line`,{x1:`${o}`,y1:`${n+i/2}`,x2:`${o}`,y2:`${n+i/2+8}`,class:`chip-pin`}))}let o=D(`circle`,{cx:`${e+r/2-10}`,cy:`${n-i/2+10}`,r:`3`,fill:T(S),class:`led`,style:`animation-delay: ${w(0,3)}s`});a.appendChild(o),t.appendChild(a)}let a=D(`g`,{});t.appendChild(a),i||[...r].sort(()=>Math.random()-.5).slice(0,10).forEach((e,t)=>{let n=S[t%S.length],r=D(`circle`,{r:`3.2`,fill:n,class:`pulse`,filter:`url(#glow)`});a.appendChild(r);let i=D(`animateMotion`,{dur:`${w(3.5,7).toFixed(2)}s`,repeatCount:`indefinite`,begin:`${w(0,4).toFixed(2)}s`}),o=D(`mpath`,{});o.setAttributeNS(`http://www.w3.org/1999/xlink`,`href`,`#${e.id}`),i.appendChild(o),r.appendChild(i);let s=D(`animate`,{attributeName:`opacity`,values:`0;1;1;0`,keyTimes:`0;0.05;0.9;1`,dur:i.getAttribute(`dur`)??`5s`,repeatCount:`indefinite`,begin:i.getAttribute(`begin`)??`0s`});r.appendChild(s)})},[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`style`,{children:`
        .circuit-bg {
          position: absolute;
          inset: 0;
          background: var(--ink);
          overflow: hidden;
          pointer-events: none;
          z-index: 0;
        }

        .circuit-bg::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(oklch(1 0 0 / 0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          background-position: -4px -4px;
        }

        .circuit-bg svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        .trace {
          fill: none;
          stroke: oklch(1 0 0 / 0.14);
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .pad {
          fill: oklch(1 0 0 / 0.16);
        }

        .chip {
          fill: oklch(1 0 0 / 0.045);
          stroke: oklch(1 0 0 / 0.16);
          stroke-width: 1.4;
        }

        .chip-pin {
          stroke: oklch(1 0 0 / 0.16);
          stroke-width: 1.4;
        }

        .led {
          animation: blink 3.6s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 18% { opacity: 0.15; }
          9% { opacity: 1; }
          100% { opacity: 0.15; }
        }

        .vignette {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 40%, transparent 0%, oklch(0.15 0 0 / 0.55) 62%, oklch(0.15 0 0 / 0.92) 100%);
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          .pulse,
          .led {
            animation: none !important;
          }
          .pulse {
            display: none;
          }
        }
      `}),(0,m.jsxs)(`div`,{className:`circuit-bg`,"aria-hidden":`true`,children:[(0,m.jsx)(`svg`,{ref:e,viewBox:`0 0 1600 900`,preserveAspectRatio:`xMidYMid slice`}),(0,m.jsx)(`div`,{className:`vignette`})]})]})}var A=[.22,1,.36,1],j=[{label:`Resume`,href:n.resume,icon:d,isResume:!0,primary:!0},{label:`Email`,href:`mailto:${n.email}`,icon:u},{label:`Call`,href:`tel:${n.phone.replace(/\s+/g,``)}`,icon:l},{label:`LinkedIn`,href:n.linkedin,icon:c,external:!0}],M=e=>{e.metaKey||e.ctrlKey||e.shiftKey||e.button!==0||(e.preventDefault(),window.dispatchEvent(new CustomEvent(`open-resume-modal`)))},N=e=>{let t=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty(`--reveal-opacity`,`1`),e.currentTarget.style.setProperty(`--reveal-x`,`${e.clientX-t.left}px`),e.currentTarget.style.setProperty(`--reveal-y`,`${e.clientY-t.top}px`)},P=e=>{e.currentTarget.style.setProperty(`--reveal-opacity`,`0`)};function F(){let e=s(),t={hidden:{opacity:0,y:e?0:28},visible:{opacity:1,y:0,transition:{duration:e?.15:.75,ease:A}}};return(0,m.jsx)(a,{features:o,children:(0,m.jsxs)(`section`,{className:`relative isolate min-h-[calc(100svh-3.5rem)] overflow-hidden text-hero-foreground`,children:[(0,m.jsx)(k,{}),(0,m.jsx)(v,{}),(0,m.jsx)(`div`,{className:`hero-scrim absolute inset-0`,"aria-hidden":`true`}),(0,m.jsxs)(i.div,{className:`relative mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-6xl items-center gap-9 px-6 py-10 md:grid-cols-[1.3fr_0.7fr] md:gap-14 md:px-8 md:py-16`,initial:`hidden`,animate:`visible`,transition:{staggerChildren:e?0:.09,delayChildren:e?0:.08},children:[(0,m.jsxs)(`div`,{className:`min-w-0`,children:[(0,m.jsxs)(i.div,{className:`mb-5 flex items-center gap-3 text-sm font-semibold text-hero-foreground/80`,variants:t,children:[(0,m.jsx)(`span`,{className:`h-3 w-3 bg-coral`,"aria-hidden":`true`}),n.role]}),(0,m.jsxs)(i.h1,{className:`font-display whitespace-nowrap text-[clamp(2.5rem,11vw,5.5rem)] leading-[0.88] tracking-[0.01em] md:text-[clamp(3.8rem,6.5vw,5.5rem)]`,variants:t,children:[n.firstName,` `,(0,m.jsx)(`span`,{className:`text-hero-foreground`,children:n.lastName})]}),(0,m.jsx)(i.p,{className:`mt-6 max-w-[55ch] text-base leading-relaxed text-hero-foreground/82 md:text-lg`,variants:t,children:n.heroDescription}),(0,m.jsx)(i.div,{className:`mt-7 flex flex-wrap gap-2.5`,variants:t,children:j.map(({label:e,href:t,icon:n,external:r,isResume:i,primary:a})=>(0,m.jsxs)(`a`,{href:t,...r?{target:`_blank`,rel:`noopener noreferrer`}:{},...i?{onClick:M}:{},className:`group inline-flex min-h-11 items-center gap-2 px-4 py-2.5 text-sm font-bold transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground ${a?`bg-coral text-ink`:`border border-hero-foreground/45 bg-hero-background/30 text-hero-foreground hover:border-hero-foreground hover:bg-hero-foreground hover:text-hero-background`}`,children:[(0,m.jsx)(f,{icon:n,className:`h-4 w-4`,strokeWidth:2,"aria-hidden":`true`}),e]},e))})]}),(0,m.jsxs)(i.div,{className:`relative mx-auto w-44 md:w-full md:max-w-[330px]`,variants:t,children:[(0,m.jsx)(`div`,{className:`absolute -inset-3 translate-x-5 translate-y-5 bg-coral/85`,"aria-hidden":`true`}),(0,m.jsx)(`div`,{className:`absolute -inset-3 -translate-x-5 -translate-y-5 border border-hero-foreground/45`,"aria-hidden":`true`}),(0,m.jsxs)(`div`,{className:`portrait-reveal relative aspect-square overflow-hidden`,onPointerMove:N,onPointerLeave:P,children:[(0,m.jsx)(`img`,{src:n.profilePicture,alt:`Portrait of ${n.name}`,width:`460`,height:`460`,decoding:`async`,fetchPriority:`high`,draggable:!1,className:`pointer-events-none h-full w-full select-none object-cover grayscale contrast-110`}),(0,m.jsx)(`img`,{src:n.profilePicture,alt:``,width:`460`,height:`460`,decoding:`async`,"aria-hidden":`true`,draggable:!1,className:`portrait-reveal-color pointer-events-none absolute inset-0 h-full w-full select-none object-cover`})]})]})]})]})})}export{F as default};