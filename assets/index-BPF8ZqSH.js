import{a as by,b as wy,u as nt,c as Yc,r as U,O as vy,d as _y,e as $y,R as ky}from"./react-vendor-xjxIsVwp.js";import{C as Xc,P as si,S as Sr,B as Zt,U as Qc,i as Fo,g as Sy,s as Jc,a as ep,b as Ko,c as tp,d as Ty,e as Iy,f as Ey,h as Cy,r as Ny,j as zy,k as rp,l as Ay,m as jy,n as My,o as Oy,p as Ry,H as Dy,F as _t,q as By,t as ip,u as oi,v as Py,w as Zo,x as Ye,y as np,z as Ly,A as Yo,D as Uy,E as li,G as Yn,I as Xo,J as qy,K as Wy,L as yt,M as Vy,N as Gy,O as Hy,Q as Qo,R as Fy,T as Ky,V as Jo,W as Zy,X as Yy,Y as ii,Z as Xy,_ as Qy,$ as ap,a0 as Jy,a1 as ex,a2 as tx,a3 as rx,a4 as ix,a5 as ma,a6 as Yt,a7 as Tr,a8 as nx,a9 as sp,aa as ga,ab as ya,ac as ax,ad as sx,ae as ox,af as lx,ag as Mt,ah as ux,ai as dx,aj as op,ak as cx,al as px,am as lp,an as up}from"./ui-vendor-rFVBmc88.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}})();var Hi={exports:{}},ar={};var el;function fx(){if(el)return ar;el=1;var e=by(),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,n=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function s(l,u,d){var p,f={},h=null,b=null;d!==void 0&&(h=""+d),u.key!==void 0&&(h=""+u.key),u.ref!==void 0&&(b=u.ref);for(p in u)i.call(u,p)&&!a.hasOwnProperty(p)&&(f[p]=u[p]);if(l&&l.defaultProps)for(p in u=l.defaultProps,u)f[p]===void 0&&(f[p]=u[p]);return{$$typeof:t,type:l,key:h,ref:b,props:f,_owner:n.current}}return ar.Fragment=r,ar.jsx=s,ar.jsxs=s,ar}var tl;function hx(){return tl||(tl=1,Hi.exports=fx()),Hi.exports}var m=hx(),Ur={},rl;function mx(){if(rl)return Ur;rl=1;var e=wy();return Ur.createRoot=e.createRoot,Ur.hydrateRoot=e.hydrateRoot,Ur}var gx=mx();function yx(){const e=nt(),t=Yc(),r=[{icon:Xc,label:"掃描",path:"/"},{icon:si,label:"冰箱",path:"/inventory"},{icon:Sr,label:"AI食譜",path:"/recipes"},{icon:Zt,label:"紀錄",path:"/saved"},{icon:Qc,label:"我的",path:"/profile"}];return m.jsx("nav",{className:"fixed bottom-0 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[430px] px-4 pb-6 pt-2 pointer-events-none",children:m.jsx("div",{className:"w-full mx-auto bg-[#0f2e24]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-3 flex justify-around items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)] pointer-events-auto",children:r.map(i=>{const n=i.icon,a=t.pathname===i.path||i.path!=="/"&&t.pathname.startsWith(i.path);return m.jsxs("button",{onClick:()=>e(i.path),className:`relative flex flex-col items-center gap-1.5 px-5 py-2.5 rounded-2xl transition-all duration-300 group ${a?"text-[#00ff88]":"text-gray-500 hover:text-white"}`,children:[a&&m.jsx("div",{className:"absolute inset-0 bg-[#00ff88]/5 rounded-2xl animate-in fade-in zoom-in duration-300"}),m.jsx(n,{size:20,strokeWidth:a?3:2,className:"relative z-10"}),m.jsx("span",{className:`text-[8px] font-black tracking-[0.2em] relative z-10 transition-all ${a?"opacity-100 translate-y-0":"opacity-0 translate-y-1 group-hover:opacity-40"}`,children:i.label}),a&&m.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#00ff88] rounded-full shadow-[0_0_8px_#00ff88]"})]},i.path)})})})}const xa=U.createContext({});function ba(e){const t=U.useRef(null);return t.current===null&&(t.current=e()),t.current}const xx=typeof window<"u",dp=xx?U.useLayoutEffect:U.useEffect,bi=U.createContext(null),wa=U.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function il(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function bx(...e){return t=>{let r=!1;const i=e.map(n=>{const a=il(n,t);return!r&&typeof a=="function"&&(r=!0),a});if(r)return()=>{for(let n=0;n<i.length;n++){const a=i[n];typeof a=="function"?a():il(e[n],null)}}}}function wx(...e){return U.useCallback(bx(...e),e)}class vx extends U.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=r.offsetParent,n=Fo(i)&&i.offsetWidth||0,a=Fo(i)&&i.offsetHeight||0,s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft,s.right=n-s.width-s.left,s.bottom=a-s.height-s.top}return null}componentDidUpdate(){}render(){return this.props.children}}function _x({children:e,isPresent:t,anchorX:r,anchorY:i,root:n,pop:a}){const s=U.useId(),l=U.useRef(null),u=U.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:d}=U.useContext(wa),p=e.props?.ref??e?.ref,f=wx(l,p);return U.useInsertionEffect(()=>{const{width:h,height:b,top:x,left:v,right:S,bottom:$}=u.current;if(t||a===!1||!l.current||!h||!b)return;const w=r==="left"?`left: ${v}`:`right: ${S}`,I=i==="bottom"?`bottom: ${$}`:`top: ${x}`;l.current.dataset.motionPopId=s;const T=document.createElement("style");d&&(T.nonce=d);const C=n??document.head;return C.appendChild(T),T.sheet&&T.sheet.insertRule(`
          [data-motion-pop-id="${s}"] {
            position: absolute !important;
            width: ${h}px !important;
            height: ${b}px !important;
            ${w}px !important;
            ${I}px !important;
          }
        `),()=>{C.contains(T)&&C.removeChild(T)}},[t]),m.jsx(vx,{isPresent:t,childRef:l,sizeRef:u,pop:a,children:a===!1?e:U.cloneElement(e,{ref:f})})}const $x=({children:e,initial:t,isPresent:r,onExitComplete:i,custom:n,presenceAffectsLayout:a,mode:s,anchorX:l,anchorY:u,root:d})=>{const p=ba(kx),f=U.useId();let h=!0,b=U.useMemo(()=>(h=!1,{id:f,initial:t,isPresent:r,custom:n,onExitComplete:x=>{p.set(x,!0);for(const v of p.values())if(!v)return;i&&i()},register:x=>(p.set(x,!1),()=>p.delete(x))}),[r,p,i]);return a&&h&&(b={...b}),U.useMemo(()=>{p.forEach((x,v)=>p.set(v,!1))},[r]),U.useEffect(()=>{!r&&!p.size&&i&&i()},[r]),e=m.jsx(_x,{pop:s==="popLayout",isPresent:r,anchorX:l,anchorY:u,root:d,children:e}),m.jsx(bi.Provider,{value:b,children:e})};function kx(){return new Map}function cp(e=!0){const t=U.useContext(bi);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:i,register:n}=t,a=U.useId();U.useEffect(()=>{if(e)return n(a)},[e]);const s=U.useCallback(()=>e&&i&&i(a),[a,i,e]);return!r&&i?[!1,s]:[!0]}const qr=e=>e.key||"";function nl(e){const t=[];return U.Children.forEach(e,r=>{U.isValidElement(r)&&t.push(r)}),t}const ui=({children:e,custom:t,initial:r=!0,onExitComplete:i,presenceAffectsLayout:n=!0,mode:a="sync",propagate:s=!1,anchorX:l="left",anchorY:u="top",root:d})=>{const[p,f]=cp(s),h=U.useMemo(()=>nl(e),[e]),b=s&&!p?[]:h.map(qr),x=U.useRef(!0),v=U.useRef(h),S=ba(()=>new Map),$=U.useRef(new Set),[w,I]=U.useState(h),[T,C]=U.useState(h);dp(()=>{x.current=!1,v.current=h;for(let _=0;_<T.length;_++){const j=qr(T[_]);b.includes(j)?(S.delete(j),$.current.delete(j)):S.get(j)!==!0&&S.set(j,!1)}},[T,b.length,b.join("-")]);const N=[];if(h!==w){let _=[...h];for(let j=0;j<T.length;j++){const R=T[j],H=qr(R);b.includes(H)||(_.splice(j,0,R),N.push(R))}return a==="wait"&&N.length&&(_=N),C(nl(_)),I(h),null}const{forceRender:z}=U.useContext(xa);return m.jsx(m.Fragment,{children:T.map(_=>{const j=qr(_),R=s&&!p?!1:h===T||b.includes(j),H=()=>{if($.current.has(j))return;if($.current.add(j),S.has(j))S.set(j,!0);else return;let W=!0;S.forEach(B=>{B||(W=!1)}),W&&(z?.(),C(v.current),s&&f?.(),i&&i())};return m.jsx($x,{isPresent:R,initial:!x.current||r?void 0:!1,custom:t,presenceAffectsLayout:n,mode:a,root:d,onExitComplete:R?void 0:H,anchorX:l,anchorY:u,children:_},j)})})},pp=U.createContext({strict:!1}),al={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let sl=!1;function Sx(){if(sl)return;const e={};for(const t in al)e[t]={isEnabled:r=>al[t].some(i=>!!r[i])};Jc(e),sl=!0}function fp(){return Sx(),Sy()}function Tx(e){const t=fp();for(const r in e)t[r]={...t[r],...e[r]};Jc(t)}const Ix=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function di(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Ix.has(e)}let hp=e=>!di(e);function Ex(e){typeof e=="function"&&(hp=t=>t.startsWith("on")?!di(t):e(t))}try{Ex(require("@emotion/is-prop-valid").default)}catch{}function Cx(e,t,r){const i={};for(const n in e)n==="values"&&typeof e.values=="object"||(hp(n)||r===!0&&di(n)||!t&&!di(n)||e.draggable&&n.startsWith("onDrag"))&&(i[n]=e[n]);return i}const wi=U.createContext({});function Nx(e,t){if(ep(e)){const{initial:r,animate:i}=e;return{initial:r===!1||Ko(r)?r:void 0,animate:Ko(i)?i:void 0}}return e.inherit!==!1?t:{}}function zx(e){const{initial:t,animate:r}=Nx(e,U.useContext(wi));return U.useMemo(()=>({initial:t,animate:r}),[ol(t),ol(r)])}function ol(e){return Array.isArray(e)?e.join(" "):e}const va=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mp(e,t,r){for(const i in t)!tp(t[i])&&!Ty(i,r)&&(e[i]=t[i])}function Ax({transformTemplate:e},t){return U.useMemo(()=>{const r=va();return Iy(r,t,e),Object.assign({},r.vars,r.style)},[t])}function jx(e,t){const r=e.style||{},i={};return mp(i,r,e),Object.assign(i,Ax(e,t)),i}function Mx(e,t){const r={},i=jx(e,t);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(r.tabIndex=0),r.style=i,r}const gp=()=>({...va(),attrs:{}});function Ox(e,t,r,i){const n=U.useMemo(()=>{const a=gp();return Ey(a,t,Cy(i),e.transformTemplate,e.style),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};mp(a,e.style,e),n.style={...a,...n.style}}return n}const Rx=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function _a(e){return typeof e!="string"||e.includes("-")?!1:!!(Rx.indexOf(e)>-1||/[A-Z]/u.test(e))}function Dx(e,t,r,{latestValues:i},n,a=!1,s){const u=(s??_a(e)?Ox:Mx)(t,i,n,e),d=Cx(t,typeof e=="string",a),p=e!==U.Fragment?{...d,...u,ref:r}:{},{children:f}=t,h=U.useMemo(()=>tp(f)?f.get():f,[f]);return U.createElement(e,{...p,children:h})}function Bx({scrapeMotionValuesFromProps:e,createRenderState:t},r,i,n){return{latestValues:Px(r,i,n,e),renderState:t()}}function Px(e,t,r,i){const n={},a=i(e,{});for(const h in a)n[h]=Ny(a[h]);let{initial:s,animate:l}=e;const u=ep(e),d=zy(e);t&&d&&!u&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let p=r?r.initial===!1:!1;p=p||s===!1;const f=p?l:s;if(f&&typeof f!="boolean"&&!rp(f)){const h=Array.isArray(f)?f:[f];for(let b=0;b<h.length;b++){const x=Ay(e,h[b]);if(x){const{transitionEnd:v,transition:S,...$}=x;for(const w in $){let I=$[w];if(Array.isArray(I)){const T=p?I.length-1:0;I=I[T]}I!==null&&(n[w]=I)}for(const w in v)n[w]=v[w]}}}return n}const yp=e=>(t,r)=>{const i=U.useContext(wi),n=U.useContext(bi),a=()=>Bx(e,t,i,n);return r?a():ba(a)},Lx=yp({scrapeMotionValuesFromProps:jy,createRenderState:va}),Ux=yp({scrapeMotionValuesFromProps:My,createRenderState:gp}),qx=Symbol.for("motionComponentSymbol");function Wx(e,t,r){const i=U.useRef(r);U.useInsertionEffect(()=>{i.current=r});const n=U.useRef(null);return U.useCallback(a=>{a&&e.onMount?.(a);const s=i.current;if(typeof s=="function")if(a){const l=s(a);typeof l=="function"&&(n.current=l)}else n.current?(n.current(),n.current=null):s(a);else s&&(s.current=a);t&&(a?t.mount(a):t.unmount())},[t])}const xp=U.createContext({});function Ht(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Vx(e,t,r,i,n,a){const{visualElement:s}=U.useContext(wi),l=U.useContext(pp),u=U.useContext(bi),d=U.useContext(wa),p=d.reducedMotion,f=d.skipAnimations,h=U.useRef(null),b=U.useRef(!1);i=i||l.renderer,!h.current&&i&&(h.current=i(e,{visualState:t,parent:s,props:r,presenceContext:u,blockInitialAnimation:u?u.initial===!1:!1,reducedMotionConfig:p,skipAnimations:f,isSVG:a}),b.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const x=h.current,v=U.useContext(xp);x&&!x.projection&&n&&(x.type==="html"||x.type==="svg")&&Gx(h.current,r,n,v);const S=U.useRef(!1);U.useInsertionEffect(()=>{x&&S.current&&x.update(r,u)});const $=r[Oy],w=U.useRef(!!$&&typeof window<"u"&&!window.MotionHandoffIsComplete?.($)&&window.MotionHasOptimisedAnimation?.($));return dp(()=>{b.current=!0,x&&(S.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),w.current&&x.animationState&&x.animationState.animateChanges())}),U.useEffect(()=>{x&&(!w.current&&x.animationState&&x.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.($)}),w.current=!1),x.enteringChildren=void 0)}),x}function Gx(e,t,r,i){const{layoutId:n,layout:a,drag:s,dragConstraints:l,layoutScroll:u,layoutRoot:d,layoutCrossfade:p}=t;e.projection=new r(e.latestValues,t["data-framer-portal-id"]?void 0:bp(e.parent)),e.projection.setOptions({layoutId:n,layout:a,alwaysMeasureLayout:!!s||l&&Ht(l),visualElement:e,animationType:typeof a=="string"?a:"both",initialPromotionConfig:i,crossfade:p,layoutScroll:u,layoutRoot:d})}function bp(e){if(e)return e.options.allowProjection!==!1?e.projection:bp(e.parent)}function Fi(e,{forwardMotionProps:t=!1,type:r}={},i,n){i&&Tx(i);const a=r?r==="svg":_a(e),s=a?Ux:Lx;function l(d,p){let f;const h={...U.useContext(wa),...d,layoutId:Hx(d)},{isStatic:b}=h,x=zx(d),v=s(d,b);if(!b&&typeof window<"u"){Fx();const S=Kx(h);f=S.MeasureLayout,x.visualElement=Vx(e,v,h,n,S.ProjectionNode,a)}return m.jsxs(wi.Provider,{value:x,children:[f&&x.visualElement?m.jsx(f,{visualElement:x.visualElement,...h}):null,Dx(e,d,Wx(v,x.visualElement,p),v,b,t,a)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const u=U.forwardRef(l);return u[qx]=e,u}function Hx({layoutId:e}){const t=U.useContext(xa).id;return t&&e!==void 0?t+"-"+e:e}function Fx(e,t){U.useContext(pp).strict}function Kx(e){const t=fp(),{drag:r,layout:i}=t;if(!r&&!i)return{};const n={...r,...i};return{MeasureLayout:r?.isEnabled(e)||i?.isEnabled(e)?n.MeasureLayout:void 0,ProjectionNode:n.ProjectionNode}}function Zx(e,t){if(typeof Proxy>"u")return Fi;const r=new Map,i=(a,s)=>Fi(a,s,e,t),n=(a,s)=>i(a,s);return new Proxy(n,{get:(a,s)=>s==="create"?i:(r.has(s)||r.set(s,Fi(s,void 0,e,t)),r.get(s))})}const Yx=(e,t)=>t.isSVG??_a(e)?new Ry(t):new Dy(t,{allowProjection:e!==U.Fragment});class Xx extends _t{constructor(t){super(t),t.animationState||(t.animationState=By(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();rp(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let Qx=0;class Jx extends _t{constructor(){super(...arguments),this.id=Qx++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===i)return;const n=this.node.animationState.setActive("exit",!t);r&&!t&&n.then(()=>{r(this.id)})}mount(){const{register:t,onExitComplete:r}=this.node.presenceContext||{};r&&r(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const eb={animation:{Feature:Xx},exit:{Feature:Jx}};function Ir(e){return{point:{x:e.pageX,y:e.pageY}}}const tb=e=>t=>ip(t)&&e(t,Ir(t));function vr(e,t,r,i){return oi(e,t,tb(r),i)}const wp=({current:e})=>e?e.ownerDocument.defaultView:null,ll=new Set(["auto","scroll"]);class vp{constructor(t,r,{transformPagePoint:i,contextWindow:n=window,dragSnapToOrigin:a=!1,distanceThreshold:s=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=b=>{this.handleScroll(b.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Zi(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,v=Py(b.offset,{x:0,y:0})>=this.distanceThreshold;if(!x&&!v)return;const{point:S}=b,{timestamp:$}=Zo;this.history.push({...S,timestamp:$});const{onStart:w,onMove:I}=this.handlers;x||(w&&w(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),I&&I(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Ki(x,this.transformPagePoint),Ye.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:v,onSessionEnd:S,resumeAnimation:$}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&$&&$(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Zi(b.type==="pointercancel"?this.lastMoveEventInfo:Ki(x,this.transformPagePoint),this.history);this.startEvent&&v&&v(b,w),S&&S(b,w)},!ip(t))return;this.dragSnapToOrigin=a,this.handlers=r,this.transformPagePoint=i,this.distanceThreshold=s,this.contextWindow=n||window;const u=Ir(t),d=Ki(u,this.transformPagePoint),{point:p}=d,{timestamp:f}=Zo;this.history=[{...p,timestamp:f}];const{onSessionStart:h}=r;h&&h(t,Zi(d,this.history)),this.removeListeners=np(vr(this.contextWindow,"pointermove",this.handlePointerMove),vr(this.contextWindow,"pointerup",this.handlePointerUp),vr(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let r=t.parentElement;for(;r;){const i=getComputedStyle(r);(ll.has(i.overflowX)||ll.has(i.overflowY))&&this.scrollPositions.set(r,{x:r.scrollLeft,y:r.scrollTop}),r=r.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const r=this.scrollPositions.get(t);if(!r)return;const i=t===window,n=i?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},a={x:n.x-r.x,y:n.y-r.y};a.x===0&&a.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(t,n),Ye.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Ly(this.updatePoint)}}function Ki(e,t){return t?{point:t(e.point)}:e}function ul(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Zi({point:e},t){return{point:e,delta:ul(e,_p(t)),offset:ul(e,rb(t)),velocity:ib(t,.1)}}function rb(e){return e[0]}function _p(e){return e[e.length-1]}function ib(e,t){if(e.length<2)return{x:0,y:0};let r=e.length-1,i=null;const n=_p(e);for(;r>=0&&(i=e[r],!(n.timestamp-i.timestamp>Yo(t)));)r--;if(!i)return{x:0,y:0};i===e[0]&&e.length>2&&n.timestamp-i.timestamp>Yo(t)*2&&(i=e[1]);const a=Uy(n.timestamp-i.timestamp);if(a===0)return{x:0,y:0};const s={x:(n.x-i.x)/a,y:(n.y-i.y)/a};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function nb(e,{min:t,max:r},i){return t!==void 0&&e<t?e=i?li(t,e,i.min):Math.max(e,t):r!==void 0&&e>r&&(e=i?li(r,e,i.max):Math.min(e,r)),e}function dl(e,t,r){return{min:t!==void 0?e.min+t:void 0,max:r!==void 0?e.max+r-(e.max-e.min):void 0}}function ab(e,{top:t,left:r,bottom:i,right:n}){return{x:dl(e.x,r,n),y:dl(e.y,t,i)}}function cl(e,t){let r=t.min-e.min,i=t.max-e.max;return t.max-t.min<e.max-e.min&&([r,i]=[i,r]),{min:r,max:i}}function sb(e,t){return{x:cl(e.x,t.x),y:cl(e.y,t.y)}}function ob(e,t){let r=.5;const i=Yn(e),n=Yn(t);return n>i?r=Xo(t.min,t.max-i,e.min):i>n&&(r=Xo(e.min,e.max-n,t.min)),qy(0,1,r)}function lb(e,t){const r={};return t.min!==void 0&&(r.min=t.min-e.min),t.max!==void 0&&(r.max=t.max-e.min),r}const Xn=.35;function ub(e=Xn){return e===!1?e=0:e===!0&&(e=Xn),{x:pl(e,"left","right"),y:pl(e,"top","bottom")}}function pl(e,t,r){return{min:fl(e,t),max:fl(e,r)}}function fl(e,t){return typeof e=="number"?e:e[t]||0}const db=new WeakMap;class cb{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Wy(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:r=!1,distanceThreshold:i}={}){const{presenceContext:n}=this.visualElement;if(n&&n.isPresent===!1)return;const a=f=>{r&&this.snapToCursor(Ir(f).point),this.stopAnimation()},s=(f,h)=>{const{drag:b,dragPropagation:x,onDragStart:v}=this.getProps();if(b&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Ky(b),!this.openDragLock))return;this.latestPointerEvent=f,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),yt($=>{let w=this.getAxisMotionValue($).get()||0;if(Zy.test(w)){const{projection:I}=this.visualElement;if(I&&I.layout){const T=I.layout.layoutBox[$];T&&(w=Yn(T)*(parseFloat(w)/100))}}this.originPoint[$]=w}),v&&Ye.update(()=>v(f,h),!1,!0),Qo(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},l=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h;const{dragPropagation:b,dragDirectionLock:x,onDirectionLock:v,onDrag:S}=this.getProps();if(!b&&!this.openDragLock)return;const{offset:$}=h;if(x&&this.currentDirection===null){this.currentDirection=fb($),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",h.point,$),this.updateAxis("y",h.point,$),this.visualElement.render(),S&&Ye.update(()=>S(f,h),!1,!0)},u=(f,h)=>{this.latestPointerEvent=f,this.latestPanInfo=h,this.stop(f,h),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:f}=this.getProps();(f||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new vp(t,{onSessionStart:a,onStart:s,onMove:l,onSessionEnd:u,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:i,contextWindow:wp(this.visualElement),element:this.visualElement.current})}stop(t,r){const i=t||this.latestPointerEvent,n=r||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!n||!i)return;const{velocity:s}=n;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&Ye.postRender(()=>l(i,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,r,i){const{drag:n}=this.getProps();if(!i||!Wr(t,n,this.currentDirection))return;const a=this.getAxisMotionValue(t);let s=this.originPoint[t]+i[t];this.constraints&&this.constraints[t]&&(s=nb(s,this.constraints[t],this.elastic[t])),a.set(s)}resolveConstraints(){const{dragConstraints:t,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,n=this.constraints;t&&Ht(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&i?this.constraints=ab(i.layoutBox,t):this.constraints=!1,this.elastic=ub(r),n!==this.constraints&&!Ht(t)&&i&&this.constraints&&!this.hasMutatedConstraints&&yt(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=lb(i.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!Ht(t))return!1;const i=t.current,{projection:n}=this.visualElement;if(!n||!n.layout)return!1;const a=Vy(i,n.root,this.visualElement.getTransformPagePoint());let s=sb(n.layout.layoutBox,a);if(r){const l=r(Gy(s));this.hasMutatedConstraints=!!l,l&&(s=Hy(l))}return s}startAnimation(t){const{drag:r,dragMomentum:i,dragElastic:n,dragTransition:a,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),u=this.constraints||{},d=yt(p=>{if(!Wr(p,r,this.currentDirection))return;let f=u&&u[p]||{};s&&(f={min:0,max:0});const h=n?200:1e6,b=n?40:1e7,x={type:"inertia",velocity:i?t[p]:0,bounceStiffness:h,bounceDamping:b,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(p,x)});return Promise.all(d).then(l)}startAxisValueAnimation(t,r){const i=this.getAxisMotionValue(t);return Qo(this.visualElement,t),i.start(Fy(t,i,0,r,this.visualElement,!1))}stopAnimation(){yt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps(),n=i[r];return n||this.visualElement.getValue(t,(i.initial?i.initial[t]:void 0)||0)}snapToCursor(t){yt(r=>{const{drag:i}=this.getProps();if(!Wr(r,i,this.currentDirection))return;const{projection:n}=this.visualElement,a=this.getAxisMotionValue(r);if(n&&n.layout){const{min:s,max:l}=n.layout.layoutBox[r],u=a.get()||0;a.set(t[r]-li(s,l,.5)+u)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:i}=this.visualElement;if(!Ht(r)||!i||!this.constraints)return;this.stopAnimation();const n={x:0,y:0};yt(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const u=l.get();n[s]=ob({min:u,max:u},this.constraints[s])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),yt(s=>{if(!Wr(s,t,null))return;const l=this.getAxisMotionValue(s),{min:u,max:d}=this.constraints[s];l.set(li(u,d,n[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;db.set(this.visualElement,this);const t=this.visualElement.current,r=vr(t,"pointerdown",d=>{const{drag:p,dragListener:f=!0}=this.getProps(),h=d.target,b=h!==t&&Yy(h);p&&f&&!b&&this.start(d)});let i;const n=()=>{const{dragConstraints:d}=this.getProps();Ht(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),i||(i=pb(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,s=a.addEventListener("measure",n);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Ye.read(n);const l=oi(window,"resize",()=>this.scalePositionWithinConstraints()),u=a.addEventListener("didUpdate",(({delta:d,hasLayoutChanged:p})=>{this.isDragging&&p&&(yt(f=>{const h=this.getAxisMotionValue(f);h&&(this.originPoint[f]+=d[f].translate,h.set(h.get()+d[f].translate))}),this.visualElement.render())}));return()=>{l(),r(),s(),u&&u(),i&&i()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:i=!1,dragPropagation:n=!1,dragConstraints:a=!1,dragElastic:s=Xn,dragMomentum:l=!0}=t;return{...t,drag:r,dragDirectionLock:i,dragPropagation:n,dragConstraints:a,dragElastic:s,dragMomentum:l}}}function hl(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function pb(e,t,r){const i=Jo(e,hl(r)),n=Jo(t,hl(r));return()=>{i(),n()}}function Wr(e,t,r){return(t===!0||t===e)&&(r===null||r===e)}function fb(e,t=10){let r=null;return Math.abs(e.y)>t?r="y":Math.abs(e.x)>t&&(r="x"),r}class hb extends _t{constructor(t){super(t),this.removeGroupControls=ii,this.removeListeners=ii,this.controls=new cb(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ii}update(){const{dragControls:t}=this.node.getProps(),{dragControls:r}=this.node.prevProps||{};t!==r&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Yi=e=>(t,r)=>{e&&Ye.update(()=>e(t,r),!1,!0)};class mb extends _t{constructor(){super(...arguments),this.removePointerDownListener=ii}onPointerDown(t){this.session=new vp(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:wp(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:i,onPanEnd:n}=this.node.getProps();return{onSessionStart:Yi(t),onStart:Yi(r),onMove:Yi(i),onEnd:(a,s)=>{delete this.session,n&&Ye.postRender(()=>n(a,s))}}}mount(){this.removePointerDownListener=vr(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Xi=!1;class gb extends U.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:i,layoutId:n}=this.props,{projection:a}=t;a&&(r.group&&r.group.add(a),i&&i.register&&n&&i.register(a),Xi&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Qy.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:i,drag:n,isPresent:a}=this.props,{projection:s}=i;return s&&(s.isPresent=a,t.layoutDependency!==r&&s.setOptions({...s.options,layoutDependency:r}),Xi=!0,n||t.layoutDependency!==r||r===void 0||t.isPresent!==a?s.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?s.promote():s.relegate()||Ye.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),Xy.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:i}=this.props,{projection:n}=t;Xi=!0,n&&(n.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(n),i&&i.deregister&&i.deregister(n))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function $p(e){const[t,r]=cp(),i=U.useContext(xa);return m.jsx(gb,{...e,layoutGroup:i,switchLayoutGroup:U.useContext(xp),isPresent:t,safeToRemove:r})}const yb={pan:{Feature:mb},drag:{Feature:hb,ProjectionNode:ap,MeasureLayout:$p}};function ml(e,t,r){const{props:i}=e;e.animationState&&i.whileHover&&e.animationState.setActive("whileHover",r==="Start");const n="onHover"+r,a=i[n];a&&Ye.postRender(()=>a(t,Ir(t)))}class xb extends _t{mount(){const{current:t}=this.node;t&&(this.unmount=Jy(t,(r,i)=>(ml(this.node,i,"Start"),n=>ml(this.node,n,"End"))))}unmount(){}}class bb extends _t{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=np(oi(this.node.current,"focus",()=>this.onFocus()),oi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gl(e,t,r){const{props:i}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&i.whileTap&&e.animationState.setActive("whileTap",r==="Start");const n="onTap"+(r==="End"?"":r),a=i[n];a&&Ye.postRender(()=>a(t,Ir(t)))}class wb extends _t{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:r,propagate:i}=this.node.props;this.unmount=ex(t,(n,a)=>(gl(this.node,a,"Start"),(s,{success:l})=>gl(this.node,s,l?"End":"Cancel")),{useGlobalTarget:r,stopPropagation:i?.tap===!1})}unmount(){}}const Qn=new WeakMap,Qi=new WeakMap,vb=e=>{const t=Qn.get(e.target);t&&t(e)},_b=e=>{e.forEach(vb)};function $b({root:e,...t}){const r=e||document;Qi.has(r)||Qi.set(r,{});const i=Qi.get(r),n=JSON.stringify(t);return i[n]||(i[n]=new IntersectionObserver(_b,{root:e,...t})),i[n]}function kb(e,t,r){const i=$b(t);return Qn.set(e,r),i.observe(e),()=>{Qn.delete(e),i.unobserve(e)}}const Sb={some:0,all:1};class Tb extends _t{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:i,amount:n="some",once:a}=t,s={root:r?r.current:void 0,rootMargin:i,threshold:typeof n=="number"?n:Sb[n]},l=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:f}=this.node.getProps(),h=d?p:f;h&&h(u)};return kb(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(Ib(t,r))&&this.startObserver()}unmount(){}}function Ib({viewport:e={}},{viewport:t={}}={}){return r=>e[r]!==t[r]}const Eb={inView:{Feature:Tb},tap:{Feature:wb},focus:{Feature:bb},hover:{Feature:xb}},Cb={layout:{ProjectionNode:ap,MeasureLayout:$p}},Nb={...eb,...Eb,...yb,...Cb},Ot=Zx(Nb,Yx);class zb{async generateRecipes(t){const r=t.ingredients;console.log("正在發送食譜生成請求至後端...",r);try{const n=await fetch("https://ai-fridge-3.onrender.com/api/generate-recipe",{method:"POST",headers:{"Content-Type":"application/json","bypass-tunnel-reminder":"true"},body:JSON.stringify({selected_ingredients:r,preferences:t.preferences})});if(!n.ok){const s=await n.json();throw new Error(s.detail||`伺服器回應錯誤: ${n.status}`)}return(await n.json()).map(s=>({id:s.id||`recipe-${Date.now()}-${Math.random()}`,name:s.name||"AI 創意料理",image:s.image||"https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",time:s.time||"25 MIN",difficulty:s.difficulty?.toLowerCase()||"medium",category:s.category||"mixed",requiredIngredients:s.requiredIngredients||r,description:s.description||"智慧生成的精選食譜。",matchScore:s.matchScore||85}))}catch(i){return console.error("LLMService 調用失敗:",i),[{id:"local-fallback",name:"全能型食材濃湯 (離線)",image:"https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800",time:"25 min",difficulty:"medium",category:"mixed",requiredIngredients:r.slice(0,3),description:"當網路連線不穩時提供的基礎應急食譜。",matchScore:85}]}}}const $a=new zb,kp={async requestPermission(){return"Notification"in window?Notification.permission==="granted"?!0:Notification.permission!=="denied"?await Notification.requestPermission()==="granted":!1:(console.warn("This browser does not support desktop notification"),!1)},send(e,t){if(console.log(`🔔 [NotificationService] Sending notification: ${e} / ${t}`),window.dispatchEvent(new CustomEvent("app-notification",{detail:{title:e,body:t}})),console.log(`🔔 [NotificationService] OS Permission status: ${Notification.permission}`),Notification.permission==="granted")try{new Notification(e,{body:t,silent:!1}),console.log("🔔 [NotificationService] Desktop Notification object created successfully.")}catch(r){console.error("🔔 [NotificationService] Error creating desktop notification:",r)}else console.warn("🔔 [NotificationService] Desktop notification skipped because OS permission is:",Notification.permission)},checkAndNotify(e,t){if(!t.notifications)return;const r=new Date().toISOString().split("T")[0];localStorage.getItem("last_notification_date")===r&&console.log("🔔 [NotificationService] Notification already sent today. Skipping."),console.log("🔔 [NotificationService] Checking ingredients...",{itemCount:e.length});const n=e.filter(a=>{const s=Math.floor((Date.now()-(a.timestamp||Date.now()))/864e5),u=(a.expiryDays!==void 0?a.expiryDays:7)-s;return u>=0&&u<=3&&!a.isSpoiled});if(n.length>0){const a=n.length,s=n[0].name,l="⚠️ 食材保存警告",u=a===1?`您的 "${s}" 即將過期，請儘速使用！`:`您有 ${a} 件食材（如：${s}等）面臨過期風險。`;this.send(l,u),localStorage.setItem("last_notification_date",r)}}},Sp=U.createContext(void 0);function Ab({children:e}){const[t,r]=U.useState([]),[i,n]=U.useState([]),[a,s]=U.useState([]),[l,u]=U.useState([]),[d,p]=U.useState({notifications:!0,darkMode:!0}),[f]=U.useState(()=>{const N=[],z=new Date,_=[2,0,3,1,0,4,1,0,2,0,0,1,0,5,2,0,1,1,0,3,0,0,1,0,0,2,0,1,0,0,1,2];for(let j=29;j>=0;j--){const R=new Date(z);R.setDate(z.getDate()-j);const H=R.getFullYear(),W=String(R.getMonth()+1).padStart(2,"0"),B=String(R.getDate()).padStart(2,"0");N.push({date:`${H}-${W}-${B}`,amount:_[j%_.length]})}return N});U.useEffect(()=>{const N=localStorage.getItem("scannedIngredients"),z=localStorage.getItem("recommendedRecipes"),_=localStorage.getItem("appSettings");if(N)try{r(JSON.parse(N))}catch{}if(z)try{n(JSON.parse(z))}catch{}if(_)try{p(JSON.parse(_))}catch{}},[]),U.useEffect(()=>{if(d.notifications&&t.length>0){const N=setTimeout(()=>{kp.checkAndNotify(t,d)},3e3);return()=>clearTimeout(N)}},[t,d.notifications]),U.useEffect(()=>{localStorage.setItem("scannedIngredients",JSON.stringify(t))},[t]),U.useEffect(()=>{localStorage.setItem("recommendedRecipes",JSON.stringify(i))},[i]),U.useEffect(()=>{localStorage.setItem("appSettings",JSON.stringify(d))},[d]);const h=N=>{const z=Date.now(),_=N.id||`${z}-${Math.random().toString(36).substr(2,9)}`,j={id:_,name:N.name||"未知食材",quantity:N.quantity||1,timestamp:N.timestamp||z,category:N.category||"其他",storageType:N.storageType||"fridge",expiryDays:N.expiryDays!==void 0?N.expiryDays:7,...N};r(R=>{const H=R.find(W=>W.name.toLowerCase()===j.name.toLowerCase()&&W.isSpoiled===j.isSpoiled&&W.storageType===j.storageType);return H?R.map(W=>W.id===H.id?{...W,quantity:W.quantity+j.quantity,timestamp:z}:W):[...R,j]}),s(R=>{const H=R.find(W=>W.name.toLowerCase()===j.name.toLowerCase()&&W.isSpoiled===j.isSpoiled&&W.storageType===j.storageType);return H?R.map(W=>W.id===H.id?{...W,quantity:W.quantity+j.quantity,timestamp:z}:W):[...R,j]}),j.isSpoiled||u(R=>{const H=t.find(B=>B.name.toLowerCase()===j.name.toLowerCase()&&B.isSpoiled===j.isSpoiled&&B.storageType===j.storageType),W=H?H.id:_;return R.includes(W)?R:[...R,W]})},b=()=>s([]),x=(N,z)=>{const _=j=>j.map(R=>R.id===N?{...R,quantity:Math.max(0,R.quantity+z)}:R).filter(R=>R.quantity>0);r(_),s(_)},v=(N,z)=>{r(_=>_.map(j=>j.id===N?{...j,...z}:j)),s(_=>_.map(j=>j.id===N?{...j,...z}:j))},S=N=>{N&&(r(z=>z.filter(_=>_.id!==N)),s(z=>z.filter(_=>_.id!==N)),u(z=>z.filter(_=>_!==N)))},$=S,w=async()=>{const N=t.filter(_=>l.includes(_.id)&&!_.isSpoiled).map(_=>_.name);if(N.length===0)throw new Error("請選擇有效的食材進行合成（損壞食材將自動排除）");const z=await $a.generateRecipes({ingredients:N});n(z)},I=N=>{t.find(_=>_.id===N)?.isSpoiled||u(_=>_.includes(N)?_.filter(j=>j!==N):[..._,N])},T=()=>{r([]),n([]),s([])},C=N=>{p(z=>({...z,...N}))};return m.jsx(Sp.Provider,{value:{scannedItems:t,recommendedRecipes:i,tempDetections:a,selectedIds:l,settings:d,wasteHistory:f,addItem:h,updateQuantity:x,updateItem:v,removeItem:S,removeIngredient:$,toggleSelection:I,generateRecipe:w,clearAll:T,setRecipes:n,clearTempDetections:b,updateSettings:C},children:e})}function at(){const e=U.useContext(Sp);if(e===void 0)throw new Error("useIngredients must be used within an IngredientProvider");return e}function jb(){const e=Yc(),t=nt(),{settings:r}=at(),i=["/","/inventory","/recipes","/saved","/profile"],n=i.findIndex(u=>u===e.pathname||u!=="/"&&e.pathname.startsWith(u)),a=(u,d)=>{d.offset.x>100&&n>0?t(i[n-1]):d.offset.x<-100&&n<i.length-1&&n!==-1&&t(i[n+1])},[s,l]=U.useState(null);return U.useEffect(()=>{const u=d=>{l({title:d.detail.title,body:d.detail.body}),setTimeout(()=>{l(null)},5e3)};return window.addEventListener("app-notification",u),()=>window.removeEventListener("app-notification",u)},[]),m.jsx("div",{className:`min-h-screen bg-black flex justify-center w-full ${r.darkMode?"":"light-theme"}`,children:m.jsxs("div",{className:"w-full max-w-[430px] min-h-screen bg-[#0f2e24] text-white relative flex flex-col shadow-2xl overflow-hidden filter-theme",children:[m.jsx("main",{className:"flex-1 overflow-y-auto no-scrollbar scroll-smooth",children:m.jsx(ui,{mode:"wait",children:m.jsx(Ot.div,{drag:"x",dragConstraints:{left:0,right:0},onDragEnd:a,initial:{opacity:0,x:20},animate:{opacity:1,x:0},exit:{opacity:0,x:-20},transition:{duration:.3,ease:"easeOut"},className:"touch-pan-y min-h-full",children:m.jsx(vy,{})},e.pathname)})}),m.jsx(yx,{}),m.jsx(ui,{children:s&&m.jsx(Ot.div,{initial:{opacity:0,y:-50,scale:.9},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95},className:"fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[380px] z-[9999] pointer-events-none",children:m.jsxs("div",{className:"bg-[#1a4d3d]/90 backdrop-blur-xl border border-red-500/50 rounded-2xl p-4 shadow-[0_10px_40px_rgba(239,68,68,0.3)] flex items-start gap-4",children:[m.jsx("div",{className:"w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0 border border-red-500/50",children:m.jsx(tx,{size:18,className:"text-red-500"})}),m.jsxs("div",{children:[m.jsx("h4",{className:"text-red-500 font-black text-[11px] tracking-widest uppercase mb-1 drop-shadow-[0_0_5px_rgba(239,68,68,0.5)]",children:s.title}),m.jsx("p",{className:"text-xs text-white font-bold leading-relaxed",children:s.body})]})]})})})]})})}function Jt({showBackButton:e=!1,title:t="KITCHEN AI",rightAction:r}){const i=nt();return m.jsxs("header",{className:"flex items-center justify-between px-4 py-4 sticky top-0 bg-[#0f2e24]/80 backdrop-blur-md z-50",children:[m.jsx("div",{className:"flex items-center gap-2",children:e?m.jsx("button",{onClick:()=>i(-1),className:"p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors",children:m.jsx(rx,{size:24})}):m.jsx("button",{className:"p-2 -ml-2 hover:bg-white/5 rounded-full transition-colors",children:m.jsx(ix,{size:24})})}),m.jsxs("h1",{className:"text-lg flex items-center gap-2 font-bold tracking-tight",children:[m.jsx(Sr,{size:20,className:"text-[#00ff88]"}),t.toUpperCase()]}),m.jsx("div",{className:"flex items-center gap-2",children:r||m.jsx("button",{className:"p-2 -mr-2 hover:bg-white/5 rounded-full transition-colors",children:m.jsx("div",{className:"w-8 h-8 rounded-full bg-gray-600 border border-gray-500 shadow-inner"})})})]})}function Mb(){const e=U.useRef(null),t=U.useRef(null),[r,i]=U.useState(null);return U.useEffect(()=>{async function n(){try{const a=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment"},audio:!1});t.current=a,e.current&&(e.current.srcObject=a)}catch(a){console.error("無法存取攝影機:",a),i("無法存取攝影機，請確認瀏覽器權限")}}return n(),()=>{t.current&&t.current.getTracks().forEach(a=>a.stop())}},[]),{videoRef:e,error:r}}var ka=Object.defineProperty,Ob=Object.getOwnPropertyDescriptor,Rb=Object.getOwnPropertyNames,Db=Object.prototype.hasOwnProperty,Bb=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,r)=>(typeof require<"u"?require:t)[r]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),V=(e,t)=>()=>(e&&(t=e(e=0)),t),er=(e,t)=>{for(var r in t)ka(e,r,{get:t[r],enumerable:!0})},Pb=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Rb(t))!Db.call(e,n)&&n!==r&&ka(e,n,{get:()=>t[n],enumerable:!(i=Ob(t,n))||i.enumerable});return e},$r=e=>Pb(ka({},"__esModule",{value:!0}),e),sr,xt,Ft,yl,Tp,Ip=V(()=>{sr=new Map,xt=[],Ft=(e,t,r)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let i=sr.get(e);if(i===void 0)sr.set(e,{backend:t,priority:r});else{if(i.priority>r)return;if(i.priority===r&&i.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${r}`)}if(r>=0){let n=xt.indexOf(e);n!==-1&&xt.splice(n,1);for(let a=0;a<xt.length;a++)if(sr.get(xt[a]).priority<=r){xt.splice(a,0,e);return}xt.push(e)}return}throw new TypeError("not a valid backend")},yl=async e=>{let t=sr.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let r=!!t.initPromise;try{return r||(t.initPromise=t.backend.init(e)),await t.initPromise,t.initialized=!0,t.backend}catch(i){return r||(t.error=`${i}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},Tp=async e=>{let t=e.executionProviders||[],r=t.map(u=>typeof u=="string"?u:u.name),i=r.length===0?xt:r,n,a=[],s=new Set;for(let u of i){let d=await yl(u);typeof d=="string"?a.push({name:u,err:d}):(n||(n=d),n===d&&s.add(u))}if(!n)throw new Error(`no available backend found. ERR: ${a.map(u=>`[${u.name}] ${u.err}`).join(", ")}`);for(let{name:u,err:d}of a)r.includes(u)&&console.warn(`removing requested execution provider "${u}" from session options because it is not available: ${d}`);let l=t.filter(u=>s.has(typeof u=="string"?u:u.name));return[n,new Proxy(e,{get:(u,d)=>d==="executionProviders"?l:Reflect.get(u,d)})]}}),Lb=V(()=>{Ip()}),Ep,Ub=V(()=>{Ep="1.24.3"}),Ji,Ee,Cp=V(()=>{Ub(),Ji="warning",Ee={wasm:{},webgl:{},webgpu:{},versions:{common:Ep},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);Ji=e}},get logLevel(){return Ji}},Object.defineProperty(Ee,"logLevel",{enumerable:!0})}),ve,qb=V(()=>{Cp(),ve=Ee}),Np,zp,Wb=V(()=>{Np=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);r.width=e.dims[3],r.height=e.dims[2];let i=r.getContext("2d");if(i!=null){let n,a;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[3]):(n=e.dims[3],a=e.dims[2]);let s=t?.format!==void 0?t.format:"RGB",l=t?.norm,u,d;l===void 0||l.mean===void 0?u=[255,255,255,255]:typeof l.mean=="number"?u=[l.mean,l.mean,l.mean,l.mean]:(u=[l.mean[0],l.mean[1],l.mean[2],0],l.mean[3]!==void 0&&(u[3]=l.mean[3])),l===void 0||l.bias===void 0?d=[0,0,0,0]:typeof l.bias=="number"?d=[l.bias,l.bias,l.bias,l.bias]:(d=[l.bias[0],l.bias[1],l.bias[2],0],l.bias[3]!==void 0&&(d[3]=l.bias[3]));let p=a*n,f=0,h=p,b=p*2,x=-1;s==="RGBA"?(f=0,h=p,b=p*2,x=p*3):s==="RGB"?(f=0,h=p,b=p*2):s==="RBG"&&(f=0,b=p,h=p*2);for(let v=0;v<a;v++)for(let S=0;S<n;S++){let $=(e.data[f++]-d[0])*u[0],w=(e.data[h++]-d[1])*u[1],I=(e.data[b++]-d[2])*u[2],T=x===-1?255:(e.data[x++]-d[3])*u[3];i.fillStyle="rgba("+$+","+w+","+I+","+T+")",i.fillRect(S,v,1,1)}if("toDataURL"in r)return r.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},zp=(e,t)=>{let r=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),i;if(r!=null){let n,a,s;t?.tensorLayout!==void 0&&t.tensorLayout==="NHWC"?(n=e.dims[2],a=e.dims[1],s=e.dims[3]):(n=e.dims[3],a=e.dims[2],s=e.dims[1]);let l=t!==void 0&&t.format!==void 0?t.format:"RGB",u=t?.norm,d,p;u===void 0||u.mean===void 0?d=[255,255,255,255]:typeof u.mean=="number"?d=[u.mean,u.mean,u.mean,u.mean]:(d=[u.mean[0],u.mean[1],u.mean[2],255],u.mean[3]!==void 0&&(d[3]=u.mean[3])),u===void 0||u.bias===void 0?p=[0,0,0,0]:typeof u.bias=="number"?p=[u.bias,u.bias,u.bias,u.bias]:(p=[u.bias[0],u.bias[1],u.bias[2],0],u.bias[3]!==void 0&&(p[3]=u.bias[3]));let f=a*n;if(t!==void 0&&(t.format!==void 0&&s===4&&t.format!=="RGBA"||s===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let h=4,b=0,x=1,v=2,S=3,$=0,w=f,I=f*2,T=-1;l==="RGBA"?($=0,w=f,I=f*2,T=f*3):l==="RGB"?($=0,w=f,I=f*2):l==="RBG"&&($=0,I=f,w=f*2),i=r.createImageData(n,a);for(let C=0;C<a*n;b+=h,x+=h,v+=h,S+=h,C++)i.data[b]=(e.data[$++]-p[0])*d[0],i.data[x]=(e.data[w++]-p[1])*d[1],i.data[v]=(e.data[I++]-p[2])*d[2],i.data[S]=T===-1?255:(e.data[T++]-p[3])*d[3]}else throw new Error("Can not access image data");return i}}),Vr,Ap,jp,Mp,Op,Rp,Vb=V(()=>{Sa(),Vr=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:r,width:i}=t,n=t.norm??{mean:255,bias:0},a,s;typeof n.mean=="number"?a=[n.mean,n.mean,n.mean,n.mean]:a=[n.mean[0],n.mean[1],n.mean[2],n.mean[3]??255],typeof n.bias=="number"?s=[n.bias,n.bias,n.bias,n.bias]:s=[n.bias[0],n.bias[1],n.bias[2],n.bias[3]??0];let l=t.format!==void 0?t.format:"RGBA",u=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",d=r*i,p=u==="RGBA"?new Float32Array(d*4):new Float32Array(d*3),f=4,h=0,b=1,x=2,v=3,S=0,$=d,w=d*2,I=-1;l==="RGB"&&(f=3,h=0,b=1,x=2,v=-1),u==="RGBA"?I=d*3:u==="RBG"?(S=0,w=d,$=d*2):u==="BGR"&&(w=0,$=d,S=d*2);for(let T=0;T<d;T++,h+=f,x+=f,b+=f,v+=f)p[S++]=(e[h]+s[0])/a[0],p[$++]=(e[b]+s[1])/a[1],p[w++]=(e[x]+s[2])/a[2],I!==-1&&v!==-1&&(p[I++]=(e[v]+s[3])/a[3]);return u==="RGBA"?new Re("float32",p,[1,4,r,i]):new Re("float32",p,[1,3,r,i])},Ap=async(e,t)=>{let r=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,i=typeof ImageData<"u"&&e instanceof ImageData,n=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,a=typeof e=="string",s,l=t??{},u=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},d=p=>typeof HTMLCanvasElement<"u"&&p instanceof HTMLCanvasElement||p instanceof OffscreenCanvas?p.getContext("2d"):null;if(r){let p=u();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let h=e.height,b=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&(h=t.resizedHeight,b=t.resizedWidth),t!==void 0){if(l=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");l.tensorFormat="RGBA",l.height=h,l.width=b}else l.tensorFormat="RGBA",l.height=h,l.width=b;f.drawImage(e,0,0),s=f.getImageData(0,0,b,h).data}else throw new Error("Can not access image data")}else if(i){let p,f;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(p=t.resizedHeight,f=t.resizedWidth):(p=e.height,f=e.width),t!==void 0&&(l=t),l.format="RGBA",l.height=p,l.width=f,t!==void 0){let h=u();h.width=f,h.height=p;let b=d(h);if(b!=null)b.putImageData(e,0,0),s=b.getImageData(0,0,f,p).data;else throw new Error("Can not access image data")}else s=e.data}else if(n){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let p=u();p.width=e.width,p.height=e.height;let f=d(p);if(f!=null){let h=e.height,b=e.width;return f.drawImage(e,0,0,b,h),s=f.getImageData(0,0,b,h).data,l.height=h,l.width=b,Vr(s,l)}else throw new Error("Can not access image data")}else{if(a)return new Promise((p,f)=>{let h=u(),b=d(h);if(!e||!b)return f();let x=new Image;x.crossOrigin="Anonymous",x.src=e,x.onload=()=>{h.width=x.width,h.height=x.height,b.drawImage(x,0,0,h.width,h.height);let v=b.getImageData(0,0,h.width,h.height);l.height=h.height,l.width=h.width,p(Vr(v.data,l))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(s!==void 0)return Vr(s,l);throw new Error("Input data provided is not supported - aborted tensor creation")},jp=(e,t)=>{let{width:r,height:i,download:n,dispose:a}=t,s=[1,i,r,4];return new Re({location:"texture",type:"float32",texture:e,dims:s,download:n,dispose:a})},Mp=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Re({location:"gpu-buffer",type:r??"float32",gpuBuffer:e,dims:i,download:n,dispose:a})},Op=(e,t)=>{let{dataType:r,dims:i,download:n,dispose:a}=t;return new Re({location:"ml-tensor",type:r??"float32",mlTensor:e,dims:i,download:n,dispose:a})},Rp=(e,t,r)=>new Re({location:"cpu-pinned",type:e,data:t,dims:r??[t.length]})}),zt,yr,en,Dp,Gb=V(()=>{zt=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),yr=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),en=!1,Dp=()=>{if(!en){en=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,r=globalThis.Float16Array,i=typeof r<"u"&&r.from;e&&(zt.set("int64",BigInt64Array),yr.set(BigInt64Array,"int64")),t&&(zt.set("uint64",BigUint64Array),yr.set(BigUint64Array,"uint64")),i?(zt.set("float16",r),yr.set(r,"float16")):zt.set("float16",Uint16Array)}}}),Bp,Pp,Hb=V(()=>{Sa(),Bp=e=>{let t=1;for(let r=0;r<e.length;r++){let i=e[r];if(typeof i!="number"||!Number.isSafeInteger(i))throw new TypeError(`dims[${r}] must be an integer, got: ${i}`);if(i<0)throw new RangeError(`dims[${r}] must be a non-negative integer, got: ${i}`);t*=i}return t},Pp=(e,t)=>{switch(e.location){case"cpu":return new Re(e.type,e.data,t);case"cpu-pinned":return new Re({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new Re({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new Re({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new Re({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),Re,Sa=V(()=>{Wb(),Vb(),Gb(),Hb(),Re=class{constructor(e,t,r){Dp();let i,n;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,i=e.type,n=e.dims,e.location){case"cpu-pinned":{let s=zt.get(i);if(!s)throw new TypeError(`unsupported type "${i}" to create tensor from pinned buffer`);if(!(e.data instanceof s))throw new TypeError(`buffer should be of type ${s.name}`);this.cpuData=e.data;break}case"texture":{if(i!=="float32")throw new TypeError(`unsupported type "${i}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(i!=="float32"&&i!=="float16"&&i!=="int32"&&i!=="int64"&&i!=="uint32"&&i!=="uint64"&&i!=="int8"&&i!=="uint8"&&i!=="bool"&&i!=="uint4"&&i!=="int4")throw new TypeError(`unsupported type "${i}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let s,l;if(typeof e=="string")if(i=e,l=r,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");s=t}else{let u=zt.get(e);if(u===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&u===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${u.name} as data.`);e==="uint64"||e==="int64"?s=u.from(t,BigInt):s=u.from(t)}else if(t instanceof u)s=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")s=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&u!==Uint16Array)s=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${i} tensor's data must be type of ${u}`)}else if(l=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let u=typeof e[0];if(u==="string")i="string",s=e;else if(u==="boolean")i="bool",s=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${u}.`)}else if(e instanceof Uint8ClampedArray)i="uint8",s=Uint8Array.from(e);else{let u=yr.get(e.constructor);if(u===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);i=u,s=e}if(l===void 0)l=[s.length];else if(!Array.isArray(l))throw new TypeError("A tensor's dims must be a number array");n=l,this.cpuData=s,this.dataLocation="cpu"}let a=Bp(n);if(this.cpuData&&a!==this.cpuData.length&&!((i==="uint4"||i==="int4")&&Math.ceil(a/2)===this.cpuData.length))throw new Error(`Tensor's size(${a}) does not match data length(${this.cpuData.length}).`);this.type=i,this.dims=n,this.size=a}static async fromImage(e,t){return Ap(e,t)}static fromTexture(e,t){return jp(e,t)}static fromGpuBuffer(e,t){return Mp(e,t)}static fromMLTensor(e,t){return Op(e,t)}static fromPinnedBuffer(e,t,r){return Rp(e,t,r)}toDataURL(e){return Np(this,e)}toImageData(e){return zp(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return Pp(this,e)}}}),Ze,Lp=V(()=>{Sa(),Ze=Re}),ci,tn,it,Xe,Rt,Dt,Up=V(()=>{Cp(),ci=(e,t)=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||console.timeStamp(`${e}::ORT::${t}`)},tn=(e,t)=>{let r=new Error().stack?.split(/\r\n|\r|\n/g)||[],i=!1;for(let n=0;n<r.length;n++){if(i&&!r[n].includes("TRACE_FUNC")){let a=`FUNC_${e}::${r[n].trim().split(" ")[1]}`;t&&(a+=`::${t}`),ci("CPU",a);return}r[n].includes("TRACE_FUNC")&&(i=!0)}},it=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||tn("BEGIN",e)},Xe=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||tn("END",e)},Rt=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||console.time(`ORT::${e}`)},Dt=e=>{(typeof Ee.trace>"u"?!Ee.wasm.trace:!Ee.trace)||console.timeEnd(`ORT::${e}`)}}),qp,Fb=V(()=>{Ip(),Lp(),Up(),qp=class Wp{constructor(t){this.handler=t}async run(t,r,i){it(),Rt("InferenceSession.run");let n={},a={};if(typeof t!="object"||t===null||t instanceof Ze||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let s=!0;if(typeof r=="object"){if(r===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(r instanceof Ze)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(r)){if(r.length===0)throw new TypeError("'fetches' cannot be an empty array.");s=!1;for(let d of r){if(typeof d!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(d)===-1)throw new RangeError(`'fetches' contains invalid output name: ${d}.`);n[d]=null}if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else{let d=!1,p=Object.getOwnPropertyNames(r);for(let f of this.outputNames)if(p.indexOf(f)!==-1){let h=r[f];(h===null||h instanceof Ze)&&(d=!0,s=!1,n[f]=h)}if(d){if(typeof i=="object"&&i!==null)a=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else a=r}}else if(typeof r<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let d of this.inputNames)if(typeof t[d]>"u")throw new Error(`input '${d}' is missing in 'feeds'.`);if(s)for(let d of this.outputNames)n[d]=null;let l=await this.handler.run(t,n,a),u={};for(let d in l)if(Object.hasOwnProperty.call(l,d)){let p=l[d];p instanceof Ze?u[d]=p:u[d]=new Ze(p.type,p.data,p.dims)}return Dt("InferenceSession.run"),Xe(),u}async release(){return this.handler.dispose()}static async create(t,r,i,n){it(),Rt("InferenceSession.create");let a,s={};if(typeof t=="string"){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(a=t,typeof r=="object"&&r!==null)s=r;else if(typeof r<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let p=t,f=0,h=t.byteLength;if(typeof r=="object"&&r!==null)s=r;else if(typeof r=="number"){if(f=r,!Number.isSafeInteger(f))throw new RangeError("'byteOffset' must be an integer.");if(f<0||f>=p.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${p.byteLength}).`);if(h=t.byteLength-f,typeof i=="number"){if(h=i,!Number.isSafeInteger(h))throw new RangeError("'byteLength' must be an integer.");if(h<=0||f+h>p.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${p.byteLength-f}].`);if(typeof n=="object"&&n!==null)s=n;else if(typeof n<"u")throw new TypeError("'options' must be an object.")}else if(typeof i<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof r<"u")throw new TypeError("'options' must be an object.");a=new Uint8Array(p,f,h)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[l,u]=await Tp(s),d=await l.createInferenceSessionHandler(a,u);return Dt("InferenceSession.create"),Xe(),new Wp(d)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Ta,Kb=V(()=>{Fb(),Ta=qp}),Zb=V(()=>{}),Yb=V(()=>{}),Xb=V(()=>{}),Qb=V(()=>{}),Jb={};er(Jb,{InferenceSession:()=>Ta,TRACE:()=>ci,TRACE_EVENT_BEGIN:()=>Rt,TRACE_EVENT_END:()=>Dt,TRACE_FUNC_BEGIN:()=>it,TRACE_FUNC_END:()=>Xe,Tensor:()=>Ze,env:()=>ve,registerBackend:()=>Ft});var Ue=V(()=>{Lb(),qb(),Kb(),Lp(),Zb(),Yb(),Up(),Xb(),Qb()}),Ia=V(()=>{}),Vp={};er(Vp,{default:()=>Gp});var rn,nn,Gp,ew=V(()=>{Xm(),Ut(),Ea(),rn="ort-wasm-proxy-worker",nn=globalThis.self?.name===rn,nn&&(self.onmessage=e=>{let{type:t,in:r}=e.data;try{switch(t){case"init-wasm":Ca(r.wasm).then(()=>{Ha(r).then(()=>{postMessage({type:t})},i=>{postMessage({type:t,err:i})})},i=>{postMessage({type:t,err:i})});break;case"init-ep":{let{epName:i,env:n}=r;Fa(n,i).then(()=>{postMessage({type:t})},a=>{postMessage({type:t,err:a})});break}case"copy-from":{let{buffer:i}=r,n=xi(i);postMessage({type:t,out:n});break}case"create":{let{model:i,options:n}=r;Ka(i,n).then(a=>{postMessage({type:t,out:a})},a=>{postMessage({type:t,err:a})});break}case"release":Za(r),postMessage({type:t});break;case"run":{let{sessionId:i,inputIndices:n,inputs:a,outputIndices:s,options:l}=r;Ya(i,n,a,s,new Array(s.length).fill(null),l).then(u=>{u.some(d=>d[3]!=="cpu")?postMessage({type:t,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:t,out:u},Qa([...a,...u]))},u=>{postMessage({type:t,err:u})});break}case"end-profiling":Xa(r),postMessage({type:t});break;default:}}catch(i){postMessage({type:t,err:i})}}),Gp=nn?null:e=>new Worker(e??Oe,{type:"module",name:rn})}),Hp={};er(Hp,{default:()=>Fp});async function xl(e={}){var t=e,r=!!globalThis.window,i=!!globalThis.WorkerGlobalScope,n=i&&self.name?.startsWith("em-pthread");t.mountExternalData=(o,c)=>{o.startsWith("./")&&(o=o.substring(2)),(t.Zc||(t.Zc=new Map)).set(o,c)},t.unmountExternalData=()=>{delete t.Zc},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,ae:!0}).buffer.constructor;let a=o=>async(...c)=>{try{if(t.$c)throw Error("Session already started");let y=t.$c={Nd:c[0],errors:[]},g=await o(...c);if(t.$c!==y)throw Error("Session mismatch");t.gd?.flush();let k=y.errors;if(0<k.length){let E=await Promise.all(k);if(E=E.filter(A=>A),0<E.length)throw Error(E.join(`
`))}return g}finally{t.$c=null}};t.jsepInit=(o,c)=>{if(o==="webgpu"){[t.gd,t.Dd,t.Hd,t.jd,t.Gd,t.ac,t.Id,t.Kd,t.Ed,t.Fd,t.Jd]=c;let y=t.gd;t.jsepRegisterBuffer=(g,k,E,A)=>y.registerBuffer(g,k,E,A),t.jsepGetBuffer=g=>y.getBuffer(g),t.jsepCreateDownloader=(g,k,E)=>y.createDownloader(g,k,E),t.jsepOnCreateSession=g=>{y.onCreateSession(g)},t.jsepOnReleaseSession=g=>{y.onReleaseSession(g)},t.jsepOnRunStart=g=>y.onRunStart(g),t.Ld=(g,k)=>{y.upload(g,k)}}else if(o==="webnn"){let y=c[0];[t.Zd,t.vd,t.webnnEnsureTensor,t.xd,t.webnnDownloadTensor,t.Yd,t.webnnEnableTraceEvent]=c.slice(1),t.webnnReleaseTensorId=t.vd,t.webnnUploadTensor=t.xd,t.webnnRegisterMLContext=t.Yd,t.webnnOnRunStart=g=>y.onRunStart(g),t.webnnOnRunEnd=y.onRunEnd.bind(y),t.webnnOnReleaseSession=g=>{y.onReleaseSession(g)},t.webnnCreateMLTensorDownloader=(g,k)=>y.createMLTensorDownloader(g,k),t.webnnRegisterMLTensor=(g,k,E,A)=>y.registerMLTensor(g,k,E,A),t.webnnCreateMLContext=g=>y.createMLContext(g),t.webnnRegisterMLConstant=(g,k,E,A,D,G)=>y.registerMLConstant(g,k,E,A,D,t.Zc,G),t.webnnRegisterGraphInput=y.registerGraphInput.bind(y),t.webnnIsGraphInput=y.isGraphInput.bind(y),t.webnnRegisterGraphOutput=y.registerGraphOutput.bind(y),t.webnnIsGraphOutput=y.isGraphOutput.bind(y),t.webnnCreateTemporaryTensor=y.createTemporaryTensor.bind(y),t.webnnIsGraphInputOutputTypeSupported=y.isGraphInputOutputTypeSupported.bind(y)}};let s=()=>{let o=c=>(...y)=>{let g=et;return y=c(...y),et!=g?new Promise((k,E)=>{ji={resolve:k,reject:E}}):y};(()=>{for(let c of["_OrtAppendExecutionProvider","_OrtCreateSession","_OrtRun","_OrtRunWithBinding","_OrtBindInput"])t[c]=o(t[c])})(),a!==void 0&&(t._OrtRun=a(t._OrtRun),t._OrtRunWithBinding=a(t._OrtRunWithBinding)),s=void 0};t.asyncInit=()=>{s?.()};var l,u,d=(o,c)=>{throw c},p=import.meta.url,f="";if(r||i){try{f=new URL(".",p).href}catch{}i&&(u=o=>{var c=new XMLHttpRequest;return c.open("GET",o,!1),c.responseType="arraybuffer",c.send(null),new Uint8Array(c.response)}),l=async o=>{if(z(o))return new Promise((y,g)=>{var k=new XMLHttpRequest;k.open("GET",o,!0),k.responseType="arraybuffer",k.onload=()=>{k.status==200||k.status==0&&k.response?y(k.response):g(k.status)},k.onerror=g,k.send(null)});var c=await fetch(o,{credentials:"same-origin"});if(c.ok)return c.arrayBuffer();throw Error(c.status+" : "+c.url)}}var h,b,x,v,S,$,w=console.log.bind(console),I=console.error.bind(console),T=w,C=I,N=!1,z=o=>o.startsWith("file://");function _(){ft.buffer!=R.buffer&&K()}if(n){let o=function(c){try{var y=c.data,g=y.Uc;if(g==="load"){let k=[];self.onmessage=E=>k.push(E),$=()=>{postMessage({Uc:"loaded"});for(let E of k)o(E);self.onmessage=o};for(let E of y.Ad)t[E]&&!t[E].proxy||(t[E]=(...A)=>{postMessage({Uc:"callHandler",zd:E,args:A})},E=="print"&&(T=t[E]),E=="printErr"&&(C=t[E]));ft=y.Vd,K(),b=y.Wd,Me(),Lr()}else if(g==="run"){(function(k){var E=(_(),L)[k+52>>>2>>>0];k=(_(),L)[k+56>>>2>>>0],to(E,E-k),oe(E)})(y.Tc),Bi(y.Tc,0,0,1,0,0),rs(),Ni(y.Tc),j||(Zs(),j=!0);try{dg(y.Pd,y.dd)}catch(k){if(k!="unwind")throw k}}else y.target!=="setimmediate"&&(g==="checkMailbox"?j&&jr():g&&(C(`worker: received unknown command ${g}`),C(y)))}catch(k){throw Ys(),k}};var j=!1;self.onunhandledrejection=c=>{throw c.reason||c},self.onmessage=o}var R,H,W,B,M,L,F,Y,X,te,pe,q=!1;function K(){var o=ft.buffer;t.HEAP8=R=new Int8Array(o),W=new Int16Array(o),t.HEAPU8=H=new Uint8Array(o),B=new Uint16Array(o),t.HEAP32=M=new Int32Array(o),t.HEAPU32=L=new Uint32Array(o),F=new Float32Array(o),Y=new Float64Array(o),X=new BigInt64Array(o),te=new BigUint64Array(o)}function ie(){q=!0,n?$():ot.tb()}function ue(o){throw C(o="Aborted("+o+")"),N=!0,o=new WebAssembly.RuntimeError(o+". Build with -sASSERTIONS for more info."),S?.(o),o}function je(){return{a:{ma:j0,hb:A0,g:cg,J:pg,f:fg,o:hg,h:mg,ha:gg,b:yg,T:xg,Ia:ls,n:bg,_:ps,Ya:fs,Ea:hs,Ga:ms,Za:gs,Wa:ys,Pa:xs,Va:bs,ka:ws,Fa:vs,Ca:_s,Xa:$s,Da:ks,cb:wg,ea:vg,xa:_g,va:kg,da:Tg,O:Ig,H:Eg,wa:Cg,Z:Rg,ya:Dg,Sa:Bg,Aa:Lg,Ja:Ug,ta:qg,fa:Wg,Ra:Ni,$a:Vg,R:Kg,s:Jg,c:Ei,ib:e0,y:t0,M:r0,D:i0,m:n0,t:As,jb:a0,I:s0,S:o0,j:l0,v:u0,r:d0,l:c0,Ma:p0,Na:f0,Oa:h0,Ka:Rs,La:Ds,ua:Bs,eb:g0,bb:x0,u:b0,aa:w0,ga:v0,ab:y0,V:_0,_a:$0,Ba:k0,F:m0,U:S0,la:Br,za:I0,gb:T0,fb:E0,Ta:qs,Ua:Ws,Ha:$i,$:Vs,ja:Gs,Qa:Hs,ia:Fs,lb:gy,na:uy,mb:my,oa:ly,G:J0,d:D0,q:O0,w:M0,B:F0,pb:ay,K:Y0,x:P0,pa:sy,X:dy,ba:ny,nb:hy,ob:fy,ra:ey,qa:iy,qb:ty,N:X0,Y:oy,e:B0,A:L0,k:R0,kb:yy,p:q0,z:W0,C:U0,E:V0,L:K0,rb:Q0,Q:cy,ca:Z0,W:py,sb:H0,sa:G0,P:ry,i:N0,a:ft,db:_i}}}async function Me(){function o(g,k){var E=ot=g.exports;g={};for(let[A,D]of Object.entries(E))typeof D=="function"?(E=Gg(D),g[A]=E):g[A]=D;return ot=g,ot=(function(){var A=ot,D=Z=>se=>Z(se)>>>0,G=Z=>()=>Z()>>>0;return(A=Object.assign({},A)).ub=D(A.ub),A.Yb=G(A.Yb),A._b=D(A._b),A.mc=D(A.mc),A.nc=G(A.nc),A.rc=D(A.rc),A})(),es.push(ot.$b),Ks=(g=ot).ub,Zs=g.vb,t._OrtInit=g.wb,t._OrtGetLastError=g.xb,t._OrtCreateSessionOptions=g.yb,t._OrtAppendExecutionProvider=g.zb,t._OrtAddFreeDimensionOverride=g.Ab,t._OrtAddSessionConfigEntry=g.Bb,t._OrtReleaseSessionOptions=g.Cb,t._OrtCreateSession=g.Db,t._OrtReleaseSession=g.Eb,t._OrtGetInputOutputCount=g.Fb,t._OrtGetInputOutputMetadata=g.Gb,t._OrtFree=g.Hb,t._OrtCreateTensor=g.Ib,t._OrtGetTensorData=g.Jb,t._OrtReleaseTensor=g.Kb,t._OrtCreateRunOptions=g.Lb,t._OrtAddRunConfigEntry=g.Mb,t._OrtReleaseRunOptions=g.Nb,t._OrtCreateBinding=g.Ob,t._OrtBindInput=g.Pb,t._OrtBindOutput=g.Qb,t._OrtClearBoundOutputs=g.Rb,t._OrtReleaseBinding=g.Sb,t._OrtRunWithBinding=g.Tb,t._OrtRun=g.Ub,t._OrtEndProfiling=g.Vb,t._JsepOutput=g.Wb,t._JsepGetNodeName=g.Xb,Pr=g.Yb,tt=t._free=g.Zb,ir=t._malloc=g._b,Bi=g.bc,Ys=g.cc,Xs=g.dc,Qs=g.ec,Pi=g.fc,Js=g.gc,eo=g.hc,de=g.ic,nr=g.jc,to=g.kc,oe=g.lc,Li=g.mc,le=g.nc,ro=g.oc,Ui=g.pc,io=g.qc,no=g.rc,ao=g.sc,qi=g.tc,so=g.uc,oo=g.vc,lo=g.wc,uo=g.xc,co=g.yc,po=g.zc,fo=g.Ac,ho=g.Bc,mo=g.Cc,go=g.Dc,yo=g.Ec,xo=g.Fc,bo=g.Gc,wo=g.Hc,vo=g.Ic,_o=g.Jc,$o=g.Kc,ko=g.Lc,So=g.Mc,To=g.Nc,Io=g.Oc,Eo=g.Pc,Co=g.Rc,No=g.Sc,zo=g.bd,Ao=g.cd,jo=g.hd,Mo=g.kd,Oo=g.ld,Ro=g.md,Do=g.nd,Bo=g.od,Po=g.pd,Lo=g.qd,Uo=g.rd,qo=g.wd,Wo=g.Rd,Vo=g.Sd,Go=g.Td,Ho=g.Ud,b=k,ot}var c,y=je();return t.instantiateWasm?new Promise(g=>{t.instantiateWasm(y,(k,E)=>{g(o(k,E))})}):n?o(new WebAssembly.Instance(b,je()),b):(pe??=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",f):f+"ort-wasm-simd-threaded.jsep.wasm":new URL("/AI-fridge-3/assets/ort-wasm-simd-threaded.jsep-C887KxcQ.wasm",import.meta.url).href,c=await(async function(g){var k=pe;if(!h&&!z(k))try{var E=fetch(k,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(E,g)}catch(A){C(`wasm streaming compile failed: ${A}`),C("falling back to ArrayBuffer instantiation")}return(async function(A,D){try{var G=await(async function(Z){if(!h)try{var se=await l(Z);return new Uint8Array(se)}catch{}if(Z==pe&&h)Z=new Uint8Array(h);else{if(!u)throw"both async and sync fetching of the wasm failed";Z=u(Z)}return Z})(A);return await WebAssembly.instantiate(G,D)}catch(Z){C(`failed to asynchronously prepare wasm: ${Z}`),ue(Z)}})(k,g)})(y),o(c.instance,c.module))}class Be{name="ExitStatus";constructor(c){this.message=`Program terminated with exit(${c})`,this.status=c}}var ct=o=>{o.terminate(),o.onmessage=()=>{}},Se=[],we=0,ze=null,Er=o=>{pt.length==0&&(ns(),is(pt[0]));var c=pt.pop();if(!c)return 6;tr.push(c),kt[o.Tc]=c,c.Tc=o.Tc;var y={Uc:"run",Pd:o.Od,dd:o.dd,Tc:o.Tc};return c.postMessage(y,o.ud),0},Qe=0,_e=(o,c,...y)=>{var g,k=16*y.length,E=le(),A=Li(k),D=A>>>3;for(g of y)typeof g=="bigint"?((_(),X)[D++>>>0]=1n,(_(),X)[D++>>>0]=g):((_(),X)[D++>>>0]=0n,(_(),Y)[D++>>>0]=g);return o=Xs(o,0,k,A,c),oe(E),o};function _i(o){if(n)return _e(0,1,o);if(x=o,!(0<Qe)){for(var c of tr)ct(c);for(c of pt)ct(c);pt=[],tr=[],kt={},N=!0}d(0,new Be(o))}function Ja(o){if(n)return _e(1,0,o);$i(o)}var $i=o=>{if(x=o,n)throw Ja(o),"unwind";_i(o)},pt=[],tr=[],es=[],kt={},ts=o=>{var c=o.Tc;delete kt[c],pt.push(o),tr.splice(tr.indexOf(o),1),o.Tc=0,Qs(c)};function rs(){es.forEach(o=>o())}var is=o=>new Promise(c=>{o.onmessage=k=>{var E=k.data;if(k=E.Uc,E.ad&&E.ad!=Pr()){var A=kt[E.ad];A?A.postMessage(E,E.ud):C(`Internal error! Worker sent a message "${k}" to target pthread ${E.ad}, but that thread no longer exists!`)}else k==="checkMailbox"?jr():k==="spawnThread"?Er(E):k==="cleanupThread"?Ar(()=>{ts(kt[E.Qd])}):k==="loaded"?(o.loaded=!0,c(o)):E.target==="setimmediate"?o.postMessage(E):k==="uncaughtException"?o.onerror(E.error):k==="callHandler"?t[E.zd](...E.args):k&&C(`worker sent an unknown command ${k}`)},o.onerror=k=>{throw C(`worker sent an error! ${k.filename}:${k.lineno}: ${k.message}`),k};var y,g=[];for(y of[])t.propertyIsEnumerable(y)&&g.push(y);o.postMessage({Uc:"load",Ad:g,Vd:ft,Wd:b})});function ns(){var o=new Worker((()=>{let c=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new c("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});pt.push(o)}var ft,dg=(o,c)=>{Qe=0,o=qi(o,c),0<Qe?x=o:Pi(o)},Cr=[],Nr=0;function cg(o){var c=new ki(o>>>=0);return(_(),R)[c.Vc+12>>>0]==0&&(as(c,!0),Nr--),ss(c,!1),Cr.push(c),no(o)}var Wt=0,pg=()=>{de(0,0);var o=Cr.pop();ro(o.ed),Wt=0};function as(o,c){c=c?1:0,(_(),R)[o.Vc+12>>>0]=c}function ss(o,c){c=c?1:0,(_(),R)[o.Vc+13>>>0]=c}class ki{constructor(c){this.ed=c,this.Vc=c-24}}var Si=o=>{var c=Wt;if(!c)return nr(0),0;var y=new ki(c);(_(),L)[y.Vc+16>>>2>>>0]=c;var g=(_(),L)[y.Vc+4>>>2>>>0];if(!g)return nr(0),c;for(var k of o){if(k===0||k===g)break;if(io(k,g,y.Vc+16))return nr(k),c}return nr(g),c};function fg(){return Si([])}function hg(o){return Si([o>>>0])}function mg(o,c,y,g){return Si([o>>>0,c>>>0,y>>>0,g>>>0])}var gg=()=>{var o=Cr.pop();o||ue("no exception to throw");var c=o.ed;throw(_(),R)[o.Vc+13>>>0]==0&&(Cr.push(o),ss(o,!0),as(o,!1),Nr++),Ui(c),Wt=c};function yg(o,c,y){var g=new ki(o>>>=0);throw c>>>=0,y>>>=0,(_(),L)[g.Vc+16>>>2>>>0]=0,(_(),L)[g.Vc+4>>>2>>>0]=c,(_(),L)[g.Vc+8>>>2>>>0]=y,Ui(o),Nr++,Wt=o}var xg=()=>Nr;function os(o,c,y,g){return n?_e(2,1,o,c,y,g):ls(o,c,y,g)}function ls(o,c,y,g){if(o>>>=0,c>>>=0,y>>>=0,g>>>=0,!globalThis.SharedArrayBuffer)return 6;var k=[];return n&&k.length===0?os(o,c,y,g):(o={Od:y,Tc:o,dd:g,ud:k},n?(o.Uc="spawnThread",postMessage(o,k),0):Er(o))}function bg(o){throw Wt||=o>>>0,Wt}var us=globalThis.TextDecoder&&new TextDecoder,ds=(o,c,y,g)=>{if(y=c+y,g)return y;for(;o[c]&&!(c>=y);)++c;return c},cs=(o,c=0,y,g)=>{if(16<(y=ds(o,c>>>=0,y,g))-c&&o.buffer&&us)return us.decode(o.buffer instanceof ArrayBuffer?o.subarray(c,y):o.slice(c,y));for(g="";c<y;){var k=o[c++];if(128&k){var E=63&o[c++];if((224&k)==192)g+=String.fromCharCode((31&k)<<6|E);else{var A=63&o[c++];65536>(k=(240&k)==224?(15&k)<<12|E<<6|A:(7&k)<<18|E<<12|A<<6|63&o[c++])?g+=String.fromCharCode(k):(k-=65536,g+=String.fromCharCode(55296|k>>10,56320|1023&k))}}else g+=String.fromCharCode(k)}return g},Te=(o,c,y)=>(o>>>=0)?cs((_(),H),o,c,y):"";function ps(o,c,y){return n?_e(3,1,o,c,y):0}function fs(o,c){if(n)return _e(4,1,o,c)}function hs(o,c){if(n)return _e(5,1,o,c)}function ms(o,c,y){if(n)return _e(6,1,o,c,y)}function gs(o,c,y){return n?_e(7,1,o,c,y):0}function ys(o,c){if(n)return _e(8,1,o,c)}function xs(o,c,y){if(n)return _e(9,1,o,c,y)}function bs(o,c,y,g){if(n)return _e(10,1,o,c,y,g)}function ws(o,c,y,g){if(n)return _e(11,1,o,c,y,g)}function vs(o,c,y,g){if(n)return _e(12,1,o,c,y,g)}function _s(o){if(n)return _e(13,1,o)}function $s(o,c){if(n)return _e(14,1,o,c)}function ks(o,c,y){if(n)return _e(15,1,o,c,y)}var wg=()=>ue(""),Je=o=>{o>>>=0;for(var c="";;){var y=(_(),H)[o++>>>0];if(!y)return c;c+=String.fromCharCode(y)}},Ti={},Ii={},Vt=class extends Error{constructor(o){super(o),this.name="BindingError"}};function st(o,c,y={}){return(function(g,k,E={}){var A=k.name;if(!g)throw new Vt(`type "${A}" must have a positive integer typeid pointer`);if(Ii.hasOwnProperty(g)){if(E.Bd)return;throw new Vt(`Cannot register type '${A}' twice`)}Ii[g]=k,Ti.hasOwnProperty(g)&&(k=Ti[g],delete Ti[g],k.forEach(D=>D()))})(o,c,y)}var Ss=(o,c,y)=>{switch(c){case 1:return y?g=>(_(),R)[g>>>0]:g=>(_(),H)[g>>>0];case 2:return y?g=>(_(),W)[g>>>1>>>0]:g=>(_(),B)[g>>>1>>>0];case 4:return y?g=>(_(),M)[g>>>2>>>0]:g=>(_(),L)[g>>>2>>>0];case 8:return y?g=>(_(),X)[g>>>3>>>0]:g=>(_(),te)[g>>>3>>>0];default:throw new TypeError(`invalid integer width (${c}): ${o}`)}};function vg(o,c,y,g,k){o>>>=0,y>>>=0,c=Je(c>>>0);let E=A=>A;if(g=g===0n){let A=8*y;E=D=>BigInt.asUintN(A,D),k=E(k)}st(o,{name:c,Qc:E,Xc:(A,D)=>(typeof D=="number"&&(D=BigInt(D)),D),Wc:Ss(c,y,!g),Yc:null})}function _g(o,c,y,g){st(o>>>=0,{name:c=Je(c>>>0),Qc:function(k){return!!k},Xc:function(k,E){return E?y:g},Wc:function(k){return this.Qc((_(),H)[k>>>0])},Yc:null})}var Ts=[],St=[0,1,,1,null,1,!0,1,!1,1];function Ei(o){9<(o>>>=0)&&--St[o+1]==0&&(St[o]=void 0,Ts.push(o))}var Pe=o=>{if(!o)throw new Vt(`Cannot use deleted val. handle = ${o}`);return St[o]},qe=o=>{switch(o){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let c=Ts.pop()||St.length;return St[c]=o,St[c+1]=1,c}};function Ci(o){return this.Qc((_(),L)[o>>>2>>>0])}var $g={name:"emscripten::val",Qc:o=>{var c=Pe(o);return Ei(o),c},Xc:(o,c)=>qe(c),Wc:Ci,Yc:null};function kg(o){return st(o>>>0,$g)}var Sg=(o,c)=>{switch(c){case 4:return function(y){return this.Qc((_(),F)[y>>>2>>>0])};case 8:return function(y){return this.Qc((_(),Y)[y>>>3>>>0])};default:throw new TypeError(`invalid float width (${c}): ${o}`)}};function Tg(o,c,y){y>>>=0,st(o>>>=0,{name:c=Je(c>>>0),Qc:g=>g,Xc:(g,k)=>k,Wc:Sg(c,y),Yc:null})}function Ig(o,c,y,g,k){o>>>=0,y>>>=0,c=Je(c>>>0);let E=D=>D;if(g===0){var A=32-8*y;E=D=>D<<A>>>A,k=E(k)}st(o,{name:c,Qc:E,Xc:(D,G)=>G,Wc:Ss(c,y,g!==0),Yc:null})}function Eg(o,c,y){function g(E){var A=(_(),L)[E>>>2>>>0];return E=(_(),L)[E+4>>>2>>>0],new k((_(),R).buffer,E,A)}var k=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][c];st(o>>>=0,{name:y=Je(y>>>0),Qc:g,Wc:g},{Bd:!0})}var ht=(o,c,y)=>{var g=(_(),H);if(c>>>=0,0<y){var k=c;y=c+y-1;for(var E=0;E<o.length;++E){var A=o.codePointAt(E);if(127>=A){if(c>=y)break;g[c++>>>0]=A}else if(2047>=A){if(c+1>=y)break;g[c++>>>0]=192|A>>6,g[c++>>>0]=128|63&A}else if(65535>=A){if(c+2>=y)break;g[c++>>>0]=224|A>>12,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A}else{if(c+3>=y)break;g[c++>>>0]=240|A>>18,g[c++>>>0]=128|A>>12&63,g[c++>>>0]=128|A>>6&63,g[c++>>>0]=128|63&A,E++}}g[c>>>0]=0,o=c-k}else o=0;return o},zr=o=>{for(var c=0,y=0;y<o.length;++y){var g=o.charCodeAt(y);127>=g?c++:2047>=g?c+=2:55296<=g&&57343>=g?(c+=4,++y):c+=3}return c};function Cg(o,c){st(o>>>=0,{name:c=Je(c>>>0),Qc(y){var g=(_(),L)[y>>>2>>>0];return g=Te(y+4,g,!0),tt(y),g},Xc(y,g){g instanceof ArrayBuffer&&(g=new Uint8Array(g));var k=typeof g=="string";if(!(k||ArrayBuffer.isView(g)&&g.BYTES_PER_ELEMENT==1))throw new Vt("Cannot pass non-string to std::string");var E=k?zr(g):g.length,A=ir(4+E+1),D=A+4;return(_(),L)[A>>>2>>>0]=E,k?ht(g,D,E+1):(_(),H).set(g,D>>>0),y!==null&&y.push(tt,A),A},Wc:Ci,Yc(y){tt(y)}})}var Is=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,Ng=(o,c,y)=>{if(o>>>=1,16<(c=ds((_(),B),o,c/2,y))-o&&Is)return Is.decode((_(),B).slice(o,c));for(y="";o<c;++o){var g=(_(),B)[o>>>0];y+=String.fromCharCode(g)}return y},zg=(o,c,y)=>{if(y??=2147483647,2>y)return 0;var g=c;y=(y-=2)<2*o.length?y/2:o.length;for(var k=0;k<y;++k){var E=o.charCodeAt(k);(_(),W)[c>>>1>>>0]=E,c+=2}return(_(),W)[c>>>1>>>0]=0,c-g},Ag=o=>2*o.length,jg=(o,c,y)=>{var g="";o>>>=2;for(var k=0;!(k>=c/4);k++){var E=(_(),L)[o+k>>>0];if(!E&&!y)break;g+=String.fromCodePoint(E)}return g},Mg=(o,c,y)=>{if(c>>>=0,y??=2147483647,4>y)return 0;var g=c;y=g+y-4;for(var k=0;k<o.length;++k){var E=o.codePointAt(k);if(65535<E&&k++,(_(),M)[c>>>2>>>0]=E,(c+=4)+4>y)break}return(_(),M)[c>>>2>>>0]=0,c-g},Og=o=>{for(var c=0,y=0;y<o.length;++y)65535<o.codePointAt(y)&&y++,c+=4;return c};function Rg(o,c,y){if(o>>>=0,c>>>=0,y=Je(y>>>=0),c===2)var g=Ng,k=zg,E=Ag;else g=jg,k=Mg,E=Og;st(o,{name:y,Qc:A=>{var D=(_(),L)[A>>>2>>>0];return D=g(A+4,D*c,!0),tt(A),D},Xc:(A,D)=>{if(typeof D!="string")throw new Vt(`Cannot pass non-string to C++ string type ${y}`);var G=E(D),Z=ir(4+G+c);return(_(),L)[Z>>>2>>>0]=G/c,k(D,Z+4,G+c),A!==null&&A.push(tt,Z),Z},Wc:Ci,Yc(A){tt(A)}})}function Dg(o,c){st(o>>>=0,{Cd:!0,name:c=Je(c>>>0),Qc:()=>{},Xc:()=>{}})}function Bg(o){Bi(o>>>0,!i,1,!r,131072,!1),rs()}var Ar=o=>{if(!N)try{if(o(),!(0<Qe))try{n?Pr()&&Pi(x):$i(x)}catch(c){c instanceof Be||c=="unwind"||d(0,c)}}catch(c){c instanceof Be||c=="unwind"||d(0,c)}},Pg=!Atomics.waitAsync||globalThis.navigator?.userAgent&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function Ni(o){o>>>=0,Pg||(Atomics.waitAsync((_(),M),o>>>2,o).value.then(jr),o+=128,Atomics.store((_(),M),o>>>2,1))}var jr=()=>Ar(()=>{var o=Pr();o&&(Ni(o),eo())});function Lg(o,c){(o>>>=0)==c>>>0?setTimeout(jr):n?postMessage({ad:o,Uc:"checkMailbox"}):(o=kt[o])&&o.postMessage({Uc:"checkMailbox"})}var zi=[];function Ug(o,c,y,g,k){for(c>>>=0,k>>>=0,zi.length=0,y=k>>>3,g=k+g>>>3;y<g;){var E;E=(_(),X)[y++>>>0]?(_(),X)[y++>>>0]:(_(),Y)[y++>>>0],zi.push(E)}return(c?Wi[c]:z0[o])(...zi)}var qg=()=>{Qe=0};function Wg(o){o>>>=0,n?postMessage({Uc:"cleanupThread",Qd:o}):ts(kt[o])}function Vg(o){}var Mr=o=>{try{o()}catch(c){ue(c)}};function Gg(o){var c=(...y)=>{Or.push(o);try{return o(...y)}finally{N||(Or.pop(),et&&mt===1&&Or.length===0&&(mt=0,Qe+=1,Mr(Vo),typeof Fibers<"u"&&Fibers.ce()))}};return Ns.set(o,c),c}var mt=0,et=null,Es=0,Or=[],Ai=new Map,Cs=new Map,Ns=new Map,Hg=0,ji=null,Fg=[],zs=o=>(function(c){if(!N){if(mt===0){var y=!1,g=!1;c((k=0)=>{if(!N&&(Es=k,y=!0,g)){mt=2,Mr(()=>Go(et)),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.resume(),k=!1;try{var E=(function(){var G=(_(),M)[et+8>>>2>>>0];return G=Cs.get(G),G=Ns.get(G),--Qe,G()})()}catch(G){E=G,k=!0}var A=!1;if(!et){var D=ji;D&&(ji=null,(k?D.reject:D.resolve)(E),A=!0)}if(k&&!A)throw E}}),g=!0,y||(mt=1,et=(function(){var k=ir(65548),E=k+12;if((_(),L)[k>>>2>>>0]=E,(_(),L)[k+4>>>2>>>0]=E+65536,E=Or[0],!Ai.has(E)){var A=Hg++;Ai.set(E,A),Cs.set(A,E)}return E=Ai.get(E),(_(),M)[k+8>>>2>>>0]=E,k})(),typeof MainLoop<"u"&&MainLoop.yd&&MainLoop.pause(),Mr(()=>Wo(et)))}else mt===2?(mt=0,Mr(Ho),tt(et),et=null,Fg.forEach(Ar)):ue(`invalid state: ${mt}`);return Es}})(c=>{o().then(c)});function Kg(o){return o>>>=0,zs(async()=>{var c=await Pe(o);return qe(c)})}var Mi=[],Zg=o=>{var c=Mi.length;return Mi.push(o),c},Yg=(o,c)=>{for(var y=Array(o),g=0;g<o;++g){var k=g,E=(_(),L)[c+4*g>>>2>>>0],A=Ii[E];if(A===void 0)throw o=`parameter ${g}`,E=Ks(E),c=Je(E),tt(E),new Vt(`${o} has unknown type ${c}`);y[k]=A}return y},Xg=(o,c,y)=>{var g=[];return o=o(g,y),g.length&&((_(),L)[c>>>2>>>0]=qe(g)),o},Qg={},Rr=o=>{var c=Qg[o];return c===void 0?Je(o):c};function Jg(o,c,y){var[g,...k]=Yg(o,c>>>0);c=g.Xc.bind(g);var E=k.map(G=>G.Wc.bind(G));o--;var A={toValue:Pe};switch(o=E.map((G,Z)=>{var se=`argFromPtr${Z}`;return A[se]=G,`${se}(args${Z?"+"+8*Z:""})`}),y){case 0:var D="toValue(handle)";break;case 2:D="new (toValue(handle))";break;case 3:D="";break;case 1:A.getStringOrSymbol=Rr,D="toValue(handle)[getStringOrSymbol(methodName)]"}return D+=`(${o})`,g.Cd||(A.toReturnWire=c,A.emval_returnValue=Xg,D=`return emval_returnValue(toReturnWire, destructorsRef, ${D})`),D=`return function (handle, methodName, destructorsRef, args) {
  ${D}
  }`,y=new Function(Object.keys(A),D)(...Object.values(A)),D=`methodCaller<(${k.map(G=>G.name)}) => ${g.name}>`,Zg(Object.defineProperty(y,"name",{value:D}))}function e0(o,c){return c>>>=0,(o=Pe(o>>>0))==Pe(c)}function t0(o){return(o>>>=0)?(o=Rr(o),qe(globalThis[o])):qe(globalThis)}function r0(o){return o=Rr(o>>>0),qe(t[o])}function i0(o,c){return c>>>=0,o=Pe(o>>>0),c=Pe(c),qe(o[c])}function n0(o){9<(o>>>=0)&&(St[o+1]+=1)}function As(o,c,y,g,k){return Mi[o>>>0](c>>>0,y>>>0,g>>>0,k>>>0)}function a0(o,c,y,g,k){return As(o>>>0,c>>>0,y>>>0,g>>>0,k>>>0)}function s0(){return qe([])}function o0(o){o=Pe(o>>>0);for(var c=Array(o.length),y=0;y<o.length;y++)c[y]=o[y];return qe(c)}function l0(o){return qe(Rr(o>>>0))}function u0(){return qe({})}function d0(o){for(var c=Pe(o>>>=0);c.length;){var y=c.pop();c.pop()(y)}Ei(o)}function c0(o,c,y){c>>>=0,y>>>=0,o=Pe(o>>>0),c=Pe(c),y=Pe(y),o[c]=y}function p0(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),(_(),M)[c>>>2>>>0]=o.getUTCSeconds(),(_(),M)[c+4>>>2>>>0]=o.getUTCMinutes(),(_(),M)[c+8>>>2>>>0]=o.getUTCHours(),(_(),M)[c+12>>>2>>>0]=o.getUTCDate(),(_(),M)[c+16>>>2>>>0]=o.getUTCMonth(),(_(),M)[c+20>>>2>>>0]=o.getUTCFullYear()-1900,(_(),M)[c+24>>>2>>>0]=o.getUTCDay(),o=(o.getTime()-Date.UTC(o.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(_(),M)[c+28>>>2>>>0]=o}var js=o=>o%4==0&&(o%100!=0||o%400==0),Ms=[0,31,60,91,121,152,182,213,244,274,305,335],Os=[0,31,59,90,120,151,181,212,243,273,304,334];function f0(o,c){o=-9007199254740992>o||9007199254740992<o?NaN:Number(o),c>>>=0,o=new Date(1e3*o),(_(),M)[c>>>2>>>0]=o.getSeconds(),(_(),M)[c+4>>>2>>>0]=o.getMinutes(),(_(),M)[c+8>>>2>>>0]=o.getHours(),(_(),M)[c+12>>>2>>>0]=o.getDate(),(_(),M)[c+16>>>2>>>0]=o.getMonth(),(_(),M)[c+20>>>2>>>0]=o.getFullYear()-1900,(_(),M)[c+24>>>2>>>0]=o.getDay();var y=(js(o.getFullYear())?Ms:Os)[o.getMonth()]+o.getDate()-1|0;(_(),M)[c+28>>>2>>>0]=y,(_(),M)[c+36>>>2>>>0]=-60*o.getTimezoneOffset(),y=new Date(o.getFullYear(),6,1).getTimezoneOffset();var g=new Date(o.getFullYear(),0,1).getTimezoneOffset();o=0|(y!=g&&o.getTimezoneOffset()==Math.min(g,y)),(_(),M)[c+32>>>2>>>0]=o}function h0(o){o>>>=0;var c=new Date((_(),M)[o+20>>>2>>>0]+1900,(_(),M)[o+16>>>2>>>0],(_(),M)[o+12>>>2>>>0],(_(),M)[o+8>>>2>>>0],(_(),M)[o+4>>>2>>>0],(_(),M)[o>>>2>>>0],0),y=(_(),M)[o+32>>>2>>>0],g=c.getTimezoneOffset(),k=new Date(c.getFullYear(),6,1).getTimezoneOffset(),E=new Date(c.getFullYear(),0,1).getTimezoneOffset(),A=Math.min(E,k);return 0>y?(_(),M)[o+32>>>2>>>0]=+(k!=E&&A==g):0<y!=(A==g)&&(k=Math.max(E,k),c.setTime(c.getTime()+6e4*((0<y?A:k)-g))),(_(),M)[o+24>>>2>>>0]=c.getDay(),y=(js(c.getFullYear())?Ms:Os)[c.getMonth()]+c.getDate()-1|0,(_(),M)[o+28>>>2>>>0]=y,(_(),M)[o>>>2>>>0]=c.getSeconds(),(_(),M)[o+4>>>2>>>0]=c.getMinutes(),(_(),M)[o+8>>>2>>>0]=c.getHours(),(_(),M)[o+12>>>2>>>0]=c.getDate(),(_(),M)[o+16>>>2>>>0]=c.getMonth(),(_(),M)[o+20>>>2>>>0]=c.getYear(),o=c.getTime(),BigInt(isNaN(o)?-1:o/1e3)}function Rs(o,c,y,g,k,E,A){return n?_e(16,1,o,c,y,g,k,E,A):-52}function Ds(o,c,y,g,k,E){if(n)return _e(17,1,o,c,y,g,k,E)}var rr={},m0=()=>performance.timeOrigin+performance.now();function Bs(o,c){if(n)return _e(18,1,o,c);if(rr[o]&&(clearTimeout(rr[o].id),delete rr[o]),!c)return 0;var y=setTimeout(()=>{delete rr[o],Ar(()=>Js(o,performance.timeOrigin+performance.now()))},c);return rr[o]={id:y,be:c},0}function g0(o,c,y,g){o>>>=0,c>>>=0,y>>>=0,g>>>=0;var k=new Date().getFullYear(),E=new Date(k,0,1).getTimezoneOffset();k=new Date(k,6,1).getTimezoneOffset();var A=Math.max(E,k);(_(),L)[o>>>2>>>0]=60*A,(_(),M)[c>>>2>>>0]=+(E!=k),o=(c=D=>{var G=Math.abs(D);return`UTC${0<=D?"-":"+"}${String(Math.floor(G/60)).padStart(2,"0")}${String(G%60).padStart(2,"0")}`})(E),c=c(k),k<E?(ht(o,y,17),ht(c,g,17)):(ht(o,g,17),ht(c,y,17))}var y0=()=>Date.now();function x0(o,c,y){return y>>>=0,0<=o&&3>=o?(o===0?o=Date.now():o=performance.timeOrigin+performance.now(),o=Math.round(1e6*o),(_(),X)[y>>>3>>>0]=BigInt(o),0):28}var Oi=[],Ps=(o,c)=>{Oi.length=0;for(var y;y=(_(),H)[o++>>>0];){var g=y!=105;c+=(g&=y!=112)&&c%8?4:0,Oi.push(y==112?(_(),L)[c>>>2>>>0]:y==106?(_(),X)[c>>>3>>>0]:y==105?(_(),M)[c>>>2>>>0]:(_(),Y)[c>>>3>>>0]),c+=g?8:4}return Oi};function b0(o,c,y){return o>>>=0,c=Ps(c>>>0,y>>>0),Wi[o](...c)}function w0(o,c,y){return o>>>=0,c=Ps(c>>>0,y>>>0),Wi[o](...c)}var v0=()=>{};function _0(o,c){return C(Te(o>>>0,c>>>0))}var $0=()=>{throw Qe+=1,"unwind"};function k0(){return 4294901760}var S0=()=>navigator.hardwareConcurrency,Tt={},Dr=o=>{var c;return(c=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(o))?+c[1]:(c=/:(\d+):\d+(?:\)|$)/.exec(o))?2147483648|+c[1]:0},Ls=o=>{for(var c of o)(o=Dr(c))&&(Tt[o]=c)};function T0(){var o=Error().stack.toString().split(`
`);return o[0]=="Error"&&o.shift(),Ls(o),Tt.sd=Dr(o[3]),Tt.Md=o,Tt.sd}function Br(o){if(!(o=Tt[o>>>0]))return 0;var c;if(c=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(o))o=c[1];else if(c=/^\s+at (.*) \(.*\)$/.exec(o))o=c[1];else{if(!(c=/^(.+?)@/.exec(o)))return 0;o=c[1]}tt(Br.td??0),c=zr(o)+1;var y=ir(c);return y&&ht(o,y,c),Br.td=y,Br.td}function I0(o){o>>>=0;var c=(_(),H).length;if(o<=c||4294901760<o)return!1;for(var y=1;4>=y;y*=2){var g=c*(1+.2/y);g=Math.min(g,o+100663296);e:{g=(Math.min(4294901760,65536*Math.ceil(Math.max(o,g)/65536))-ft.buffer.byteLength+65535)/65536|0;try{ft.grow(g),K();var k=1;break e}catch{}k=void 0}if(k)return!0}return!1}function E0(o,c,y){if(o>>>=0,c>>>=0,Tt.sd==o)var g=Tt.Md;else(g=Error().stack.toString().split(`
`))[0]=="Error"&&g.shift(),Ls(g);for(var k=3;g[k]&&Dr(g[k])!=o;)++k;for(o=0;o<y&&g[o+k];++o)(_(),M)[c+4*o>>>2>>>0]=Dr(g[o+k]);return o}var Ri,Di={},Us=()=>{if(!Ri){var o,c={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(globalThis.navigator?.language??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(o in Di)Di[o]===void 0?delete c[o]:c[o]=Di[o];var y=[];for(o in c)y.push(`${o}=${c[o]}`);Ri=y}return Ri};function qs(o,c){if(n)return _e(19,1,o,c);o>>>=0,c>>>=0;var y,g=0,k=0;for(y of Us()){var E=c+g;(_(),L)[o+k>>>2>>>0]=E,g+=ht(y,E,1/0)+1,k+=4}return 0}function Ws(o,c){if(n)return _e(20,1,o,c);o>>>=0,c>>>=0;var y=Us();for(var g of((_(),L)[o>>>2>>>0]=y.length,o=0,y))o+=zr(g)+1;return(_(),L)[c>>>2>>>0]=o,0}function Vs(o){return n?_e(21,1,o):52}function Gs(o,c,y,g){return n?_e(22,1,o,c,y,g):52}function Hs(o,c,y,g){return n?_e(23,1,o,c,y,g):70}var C0=[null,[],[]];function Fs(o,c,y,g){if(n)return _e(24,1,o,c,y,g);c>>>=0,y>>>=0,g>>>=0;for(var k=0,E=0;E<y;E++){var A=(_(),L)[c>>>2>>>0],D=(_(),L)[c+4>>>2>>>0];c+=8;for(var G=0;G<D;G++){var Z=o,se=(_(),H)[A+G>>>0],fe=C0[Z];se===0||se===10?((Z===1?T:C)(cs(fe)),fe.length=0):fe.push(se)}k+=D}return(_(),L)[g>>>2>>>0]=k,0}function N0(o){return o>>>0}n||(function(){for(var o=t.numThreads-1;o--;)ns();Se.push(async()=>{var c=(async function(){if(!n)return Promise.all(pt.map(is))})();we++,await c,--we==0&&ze&&(c=ze,ze=null,c())})})(),n||(ft=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),K()),t.wasmBinary&&(h=t.wasmBinary),t.stackSave=()=>le(),t.stackRestore=o=>oe(o),t.stackAlloc=o=>Li(o),t.setValue=function(o,c,y="i8"){switch(y.endsWith("*")&&(y="*"),y){case"i1":case"i8":(_(),R)[o>>>0]=c;break;case"i16":(_(),W)[o>>>1>>>0]=c;break;case"i32":(_(),M)[o>>>2>>>0]=c;break;case"i64":(_(),X)[o>>>3>>>0]=BigInt(c);break;case"float":(_(),F)[o>>>2>>>0]=c;break;case"double":(_(),Y)[o>>>3>>>0]=c;break;case"*":(_(),L)[o>>>2>>>0]=c;break;default:ue(`invalid type for setValue: ${y}`)}},t.getValue=function(o,c="i8"){switch(c.endsWith("*")&&(c="*"),c){case"i1":case"i8":return(_(),R)[o>>>0];case"i16":return(_(),W)[o>>>1>>>0];case"i32":return(_(),M)[o>>>2>>>0];case"i64":return(_(),X)[o>>>3>>>0];case"float":return(_(),F)[o>>>2>>>0];case"double":return(_(),Y)[o>>>3>>>0];case"*":return(_(),L)[o>>>2>>>0];default:ue(`invalid type for getValue: ${c}`)}},t.UTF8ToString=Te,t.stringToUTF8=ht,t.lengthBytesUTF8=zr;var Ks,Zs,Pr,tt,ir,Bi,Ys,Xs,Qs,Pi,Js,eo,de,nr,to,oe,Li,le,ro,Ui,io,no,ao,qi,so,oo,lo,uo,co,po,fo,ho,mo,go,yo,xo,bo,wo,vo,_o,$o,ko,So,To,Io,Eo,Co,No,zo,Ao,jo,Mo,Oo,Ro,Do,Bo,Po,Lo,Uo,qo,Wo,Vo,Go,Ho,ot,z0=[_i,Ja,os,ps,fs,hs,ms,gs,ys,xs,bs,ws,vs,_s,$s,ks,Rs,Ds,Bs,qs,Ws,Vs,Gs,Hs,Fs],Wi={929356:(o,c,y,g,k)=>{if(t===void 0||!t.Zc)return 1;if((o=Te(Number(o>>>0))).startsWith("./")&&(o=o.substring(2)),!(o=t.Zc.get(o)))return 2;if(c=Number(c>>>0),y=Number(y>>>0),g=Number(g>>>0),c+y>o.byteLength)return 3;try{let E=o.subarray(c,c+y);switch(k){case 0:(_(),H).set(E,g>>>0);break;case 1:t.Xd?t.Xd(g,E):t.Ld(g,E);break;default:return 4}return 0}catch{return 4}},930180:(o,c,y)=>{t.xd(o,(_(),H).subarray(c>>>0,c+y>>>0))},930244:()=>t.Zd(),930286:o=>{t.vd(o)},930323:()=>{t.Ed()},930354:()=>{t.Fd()},930383:()=>{t.Jd()},930408:o=>t.Dd(o),930441:o=>t.Hd(o),930473:(o,c,y)=>{t.jd(Number(o),Number(c),Number(y),!0)},930536:(o,c,y)=>{t.jd(Number(o),Number(c),Number(y))},930593:()=>typeof wasmOffsetConverter<"u",930650:o=>{t.ac("Abs",o,void 0)},930701:o=>{t.ac("Neg",o,void 0)},930752:o=>{t.ac("Floor",o,void 0)},930805:o=>{t.ac("Ceil",o,void 0)},930857:o=>{t.ac("Reciprocal",o,void 0)},930915:o=>{t.ac("Sqrt",o,void 0)},930967:o=>{t.ac("Exp",o,void 0)},931018:o=>{t.ac("Erf",o,void 0)},931069:o=>{t.ac("Sigmoid",o,void 0)},931124:(o,c,y)=>{t.ac("HardSigmoid",o,{alpha:c,beta:y})},931203:o=>{t.ac("Log",o,void 0)},931254:o=>{t.ac("Sin",o,void 0)},931305:o=>{t.ac("Cos",o,void 0)},931356:o=>{t.ac("Tan",o,void 0)},931407:o=>{t.ac("Asin",o,void 0)},931459:o=>{t.ac("Acos",o,void 0)},931511:o=>{t.ac("Atan",o,void 0)},931563:o=>{t.ac("Sinh",o,void 0)},931615:o=>{t.ac("Cosh",o,void 0)},931667:o=>{t.ac("Asinh",o,void 0)},931720:o=>{t.ac("Acosh",o,void 0)},931773:o=>{t.ac("Atanh",o,void 0)},931826:o=>{t.ac("Tanh",o,void 0)},931878:o=>{t.ac("Not",o,void 0)},931929:(o,c,y)=>{t.ac("Clip",o,{min:c,max:y})},931998:o=>{t.ac("Clip",o,void 0)},932050:(o,c)=>{t.ac("Elu",o,{alpha:c})},932108:o=>{t.ac("Gelu",o,void 0)},932160:o=>{t.ac("Relu",o,void 0)},932212:(o,c)=>{t.ac("LeakyRelu",o,{alpha:c})},932276:(o,c)=>{t.ac("ThresholdedRelu",o,{alpha:c})},932346:(o,c)=>{t.ac("Cast",o,{to:c})},932404:o=>{t.ac("Add",o,void 0)},932455:o=>{t.ac("Sub",o,void 0)},932506:o=>{t.ac("Mul",o,void 0)},932557:o=>{t.ac("Div",o,void 0)},932608:o=>{t.ac("Pow",o,void 0)},932659:o=>{t.ac("Equal",o,void 0)},932712:o=>{t.ac("Greater",o,void 0)},932767:o=>{t.ac("GreaterOrEqual",o,void 0)},932829:o=>{t.ac("Less",o,void 0)},932881:o=>{t.ac("LessOrEqual",o,void 0)},932940:(o,c,y,g,k)=>{t.ac("ReduceMean",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},933115:(o,c,y,g,k)=>{t.ac("ReduceMax",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},933289:(o,c,y,g,k)=>{t.ac("ReduceMin",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},933463:(o,c,y,g,k)=>{t.ac("ReduceProd",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},933638:(o,c,y,g,k)=>{t.ac("ReduceSum",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},933812:(o,c,y,g,k)=>{t.ac("ReduceL1",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},933985:(o,c,y,g,k)=>{t.ac("ReduceL2",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},934158:(o,c,y,g,k)=>{t.ac("ReduceLogSum",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},934335:(o,c,y,g,k)=>{t.ac("ReduceSumSquare",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},934515:(o,c,y,g,k)=>{t.ac("ReduceLogSumExp",o,{keepDims:!!c,noopWithEmptyAxes:!!y,axes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},934695:o=>{t.ac("Where",o,void 0)},934748:(o,c,y)=>{t.ac("Transpose",o,{perm:c?Array.from((_(),M).subarray(Number(c)>>>0,Number(y)>>>0)):[]})},934872:(o,c,y,g)=>{t.ac("DepthToSpace",o,{blocksize:c,mode:Te(y),format:g?"NHWC":"NCHW"})},935005:(o,c,y,g)=>{t.ac("DepthToSpace",o,{blocksize:c,mode:Te(y),format:g?"NHWC":"NCHW"})},935138:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be,gt)=>{t.ac("ConvTranspose",o,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[y],group:g,kernelShape:[k],pads:[E,A],strides:[D],wIsConst:()=>!!(_(),R)[Z>>>0],outputPadding:se?Array.from((_(),M).subarray(Number(se)>>>0,Number(fe)>>>0)):[],outputShape:ye?Array.from((_(),M).subarray(Number(ye)>>>0,Number(be)>>>0)):[],activation:Te(gt)})},935571:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be)=>{t.ac("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:c,dilations:Array.from((_(),M).subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),group:g,kernelShape:Array.from((_(),M).subarray(Number(k)>>>0,2+(Number(k)>>>0)>>>0)),pads:Array.from((_(),M).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from((_(),M).subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!(_(),R)[G>>>0],outputPadding:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],outputShape:fe?Array.from((_(),M).subarray(Number(fe)>>>0,Number(ye)>>>0)):[],activation:Te(be)})},936232:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be,gt)=>{t.ac("ConvTranspose",o,{format:G?"NHWC":"NCHW",autoPad:c,dilations:[y],group:g,kernelShape:[k],pads:[E,A],strides:[D],wIsConst:()=>!!(_(),R)[Z>>>0],outputPadding:se?Array.from((_(),M).subarray(Number(se)>>>0,Number(fe)>>>0)):[],outputShape:ye?Array.from((_(),M).subarray(Number(ye)>>>0,Number(be)>>>0)):[],activation:Te(gt)})},936665:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be)=>{t.ac("ConvTranspose",o,{format:D?"NHWC":"NCHW",autoPad:c,dilations:Array.from((_(),M).subarray(Number(y)>>>0,2+(Number(y)>>>0)>>>0)),group:g,kernelShape:Array.from((_(),M).subarray(Number(k)>>>0,2+(Number(k)>>>0)>>>0)),pads:Array.from((_(),M).subarray(Number(E)>>>0,4+(Number(E)>>>0)>>>0)),strides:Array.from((_(),M).subarray(Number(A)>>>0,2+(Number(A)>>>0)>>>0)),wIsConst:()=>!!(_(),R)[G>>>0],outputPadding:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],outputShape:fe?Array.from((_(),M).subarray(Number(fe)>>>0,Number(ye)>>>0)):[],activation:Te(be)})},937326:(o,c)=>{t.ac("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},937417:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be)=>{t.ac("AveragePool",o,{format:be?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:k,dilations:E?Array.from((_(),M).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((_(),M).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],strides:fe?Array.from((_(),M).subarray(Number(fe)>>>0,Number(ye)>>>0)):[]})},937896:(o,c)=>{t.ac("GlobalAveragePool",o,{format:c?"NHWC":"NCHW"})},937987:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be)=>{t.ac("AveragePool",o,{format:be?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:k,dilations:E?Array.from((_(),M).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((_(),M).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],strides:fe?Array.from((_(),M).subarray(Number(fe)>>>0,Number(ye)>>>0)):[]})},938466:(o,c)=>{t.ac("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},938553:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be)=>{t.ac("MaxPool",o,{format:be?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:k,dilations:E?Array.from((_(),M).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((_(),M).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],strides:fe?Array.from((_(),M).subarray(Number(fe)>>>0,Number(ye)>>>0)):[]})},939028:(o,c)=>{t.ac("GlobalMaxPool",o,{format:c?"NHWC":"NCHW"})},939115:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be)=>{t.ac("MaxPool",o,{format:be?"NHWC":"NCHW",auto_pad:c,ceil_mode:y,count_include_pad:g,storage_order:k,dilations:E?Array.from((_(),M).subarray(Number(E)>>>0,Number(A)>>>0)):[],kernel_shape:D?Array.from((_(),M).subarray(Number(D)>>>0,Number(G)>>>0)):[],pads:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],strides:fe?Array.from((_(),M).subarray(Number(fe)>>>0,Number(ye)>>>0)):[]})},939590:(o,c,y,g,k)=>{t.ac("Gemm",o,{alpha:c,beta:y,transA:g,transB:k})},939694:o=>{t.ac("MatMul",o,void 0)},939748:(o,c,y,g)=>{t.ac("ArgMax",o,{keepDims:!!c,selectLastIndex:!!y,axis:g})},939856:(o,c,y,g)=>{t.ac("ArgMin",o,{keepDims:!!c,selectLastIndex:!!y,axis:g})},939964:(o,c)=>{t.ac("Softmax",o,{axis:c})},940027:(o,c)=>{t.ac("Concat",o,{axis:c})},940087:(o,c,y,g,k)=>{t.ac("Split",o,{axis:c,numOutputs:y,splitSizes:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},940243:o=>{t.ac("Expand",o,void 0)},940297:(o,c)=>{t.ac("Gather",o,{axis:Number(c)})},940368:(o,c)=>{t.ac("GatherElements",o,{axis:Number(c)})},940447:(o,c)=>{t.ac("GatherND",o,{batch_dims:Number(c)})},940526:(o,c,y,g,k,E,A,D,G,Z,se)=>{t.ac("Resize",o,{antialias:c,axes:y?Array.from((_(),M).subarray(Number(y)>>>0,Number(g)>>>0)):[],coordinateTransformMode:Te(k),cubicCoeffA:E,excludeOutside:A,extrapolationValue:D,keepAspectRatioPolicy:Te(G),mode:Te(Z),nearestMode:Te(se)})},940888:(o,c,y,g,k,E,A)=>{t.ac("Slice",o,{starts:c?Array.from((_(),M).subarray(Number(c)>>>0,Number(y)>>>0)):[],ends:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[],axes:E?Array.from((_(),M).subarray(Number(E)>>>0,Number(A)>>>0)):[]})},941152:o=>{t.ac("Tile",o,void 0)},941204:(o,c,y)=>{t.ac("InstanceNormalization",o,{epsilon:c,format:y?"NHWC":"NCHW"})},941318:(o,c,y)=>{t.ac("InstanceNormalization",o,{epsilon:c,format:y?"NHWC":"NCHW"})},941432:o=>{t.ac("Range",o,void 0)},941485:(o,c)=>{t.ac("Einsum",o,{equation:Te(c)})},941566:(o,c,y,g,k)=>{t.ac("Pad",o,{mode:c,value:y,pads:g?Array.from((_(),M).subarray(Number(g)>>>0,Number(k)>>>0)):[]})},941709:(o,c,y,g,k,E)=>{t.ac("BatchNormalization",o,{epsilon:c,momentum:y,spatial:!!k,trainingMode:!!g,format:E?"NHWC":"NCHW"})},941878:(o,c,y,g,k,E)=>{t.ac("BatchNormalization",o,{epsilon:c,momentum:y,spatial:!!k,trainingMode:!!g,format:E?"NHWC":"NCHW"})},942047:(o,c,y)=>{t.ac("CumSum",o,{exclusive:Number(c),reverse:Number(y)})},942144:(o,c,y)=>{t.ac("DequantizeLinear",o,{axis:c,blockSize:y})},942234:(o,c,y,g,k)=>{t.ac("GridSample",o,{align_corners:c,mode:Te(y),padding_mode:Te(g),format:k?"NHWC":"NCHW"})},942404:(o,c,y,g,k)=>{t.ac("GridSample",o,{align_corners:c,mode:Te(y),padding_mode:Te(g),format:k?"NHWC":"NCHW"})},942574:(o,c)=>{t.ac("ScatterND",o,{reduction:Te(c)})},942659:(o,c,y,g,k,E,A,D,G)=>{t.ac("Attention",o,{numHeads:c,isUnidirectional:y,maskFilterValue:g,scale:k,doRotary:E,qkvHiddenSizes:A?Array.from((_(),M).subarray(Number(D)>>>0,Number(D)+A>>>0)):[],pastPresentShareBuffer:!!G})},942931:o=>{t.ac("BiasAdd",o,void 0)},942986:o=>{t.ac("BiasSplitGelu",o,void 0)},943047:o=>{t.ac("FastGelu",o,void 0)},943103:(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be,gt,Vi)=>{t.ac("Conv",o,{format:fe?"NHWC":"NCHW",auto_pad:c,dilations:y?Array.from((_(),M).subarray(Number(y)>>>0,Number(g)>>>0)):[],group:k,kernel_shape:E?Array.from((_(),M).subarray(Number(E)>>>0,Number(A)>>>0)):[],pads:D?Array.from((_(),M).subarray(Number(D)>>>0,Number(G)>>>0)):[],strides:Z?Array.from((_(),M).subarray(Number(Z)>>>0,Number(se)>>>0)):[],w_is_const:()=>!!(_(),R)[Number(ye)>>>0],activation:Te(be),activation_params:gt?Array.from((_(),F).subarray(Number(gt)>>>0,Number(Vi)>>>0)):[]})},943687:o=>{t.ac("Gelu",o,void 0)},943739:(o,c,y,g,k,E,A,D,G)=>{t.ac("GroupQueryAttention",o,{numHeads:c,kvNumHeads:y,scale:g,softcap:k,doRotary:E,rotaryInterleaved:A,smoothSoftmax:D,localWindowSize:G})},943956:(o,c,y,g)=>{t.ac("LayerNormalization",o,{axis:c,epsilon:y,simplified:!!g})},944067:(o,c,y,g)=>{t.ac("LayerNormalization",o,{axis:c,epsilon:y,simplified:!!g})},944178:(o,c,y,g,k,E)=>{t.ac("MatMulNBits",o,{k:c,n:y,accuracyLevel:g,bits:k,blockSize:E})},944305:(o,c,y,g,k,E)=>{t.ac("MultiHeadAttention",o,{numHeads:c,isUnidirectional:y,maskFilterValue:g,scale:k,doRotary:E})},944464:(o,c)=>{t.ac("QuickGelu",o,{alpha:c})},944528:(o,c,y,g,k)=>{t.ac("RotaryEmbedding",o,{interleaved:!!c,numHeads:y,rotaryEmbeddingDim:g,scale:k})},944667:(o,c,y)=>{t.ac("SkipLayerNormalization",o,{epsilon:c,simplified:!!y})},944769:(o,c,y)=>{t.ac("SkipLayerNormalization",o,{epsilon:c,simplified:!!y})},944871:(o,c,y,g)=>{t.ac("GatherBlockQuantized",o,{gatherAxis:c,quantizeAxis:y,blockSize:g})},944992:o=>{t.Id(o)},945026:(o,c)=>t.Kd(Number(o),Number(c),t.$c.Nd,t.$c.errors)};function A0(o,c,y){return zs(async()=>{await t.Gd(Number(o),Number(c),Number(y))})}function j0(){return typeof wasmOffsetConverter<"u"}function M0(o,c,y,g){var k=le();try{return ho(o,c,y,g)}catch(E){if(oe(k),E!==E+0)throw E;de(1,0)}}function O0(o,c,y){var g=le();try{return uo(o,c,y)}catch(k){if(oe(g),k!==k+0)throw k;de(1,0)}}function R0(o,c,y){var g=le();try{ao(o,c,y)}catch(k){if(oe(g),k!==k+0)throw k;de(1,0)}}function D0(o,c){var y=le();try{return qi(o,c)}catch(g){if(oe(y),g!==g+0)throw g;de(1,0)}}function B0(o){var c=le();try{so(o)}catch(y){if(oe(c),y!==y+0)throw y;de(1,0)}}function P0(o,c,y,g,k,E,A){var D=le();try{return po(o,c,y,g,k,E,A)}catch(G){if(oe(D),G!==G+0)throw G;de(1,0)}}function L0(o,c){var y=le();try{mo(o,c)}catch(g){if(oe(y),g!==g+0)throw g;de(1,0)}}function U0(o,c,y,g,k,E){var A=le();try{oo(o,c,y,g,k,E)}catch(D){if(oe(A),D!==D+0)throw D;de(1,0)}}function q0(o,c,y,g){var k=le();try{fo(o,c,y,g)}catch(E){if(oe(k),E!==E+0)throw E;de(1,0)}}function W0(o,c,y,g,k){var E=le();try{lo(o,c,y,g,k)}catch(A){if(oe(E),A!==A+0)throw A;de(1,0)}}function V0(o,c,y,g,k,E,A){var D=le();try{yo(o,c,y,g,k,E,A)}catch(G){if(oe(D),G!==G+0)throw G;de(1,0)}}function G0(o,c,y,g,k,E,A){var D=le();try{xo(o,c,y,g,k,E,A)}catch(G){if(oe(D),G!==G+0)throw G;de(1,0)}}function H0(o,c,y,g,k,E,A,D){var G=le();try{_o(o,c,y,g,k,E,A,D)}catch(Z){if(oe(G),Z!==Z+0)throw Z;de(1,0)}}function F0(o,c,y,g,k){var E=le();try{return go(o,c,y,g,k)}catch(A){if(oe(E),A!==A+0)throw A;de(1,0)}}function K0(o,c,y,g,k,E,A,D){var G=le();try{$o(o,c,y,g,k,E,A,D)}catch(Z){if(oe(G),Z!==Z+0)throw Z;de(1,0)}}function Z0(o,c,y,g,k,E,A,D,G,Z,se,fe){var ye=le();try{bo(o,c,y,g,k,E,A,D,G,Z,se,fe)}catch(be){if(oe(ye),be!==be+0)throw be;de(1,0)}}function Y0(o,c,y,g,k,E){var A=le();try{return wo(o,c,y,g,k,E)}catch(D){if(oe(A),D!==D+0)throw D;de(1,0)}}function X0(o,c,y){var g=le();try{return ko(o,c,y)}catch(k){if(oe(g),k!==k+0)throw k;return de(1,0),0n}}function Q0(o,c,y,g,k,E,A,D,G){var Z=le();try{co(o,c,y,g,k,E,A,D,G)}catch(se){if(oe(Z),se!==se+0)throw se;de(1,0)}}function J0(o){var c=le();try{return So(o)}catch(y){if(oe(c),y!==y+0)throw y;de(1,0)}}function ey(o,c,y){var g=le();try{return To(o,c,y)}catch(k){if(oe(g),k!==k+0)throw k;de(1,0)}}function ty(o,c){var y=le();try{return qo(o,c)}catch(g){if(oe(y),g!==g+0)throw g;return de(1,0),0n}}function ry(o,c,y,g,k){var E=le();try{Io(o,c,y,g,k)}catch(A){if(oe(E),A!==A+0)throw A;de(1,0)}}function iy(o){var c=le();try{return Eo(o)}catch(y){if(oe(c),y!==y+0)throw y;return de(1,0),0n}}function ny(o,c,y,g,k,E){var A=le();try{return Mo(o,c,y,g,k,E)}catch(D){if(oe(A),D!==D+0)throw D;de(1,0)}}function ay(o,c,y,g,k,E){var A=le();try{return Oo(o,c,y,g,k,E)}catch(D){if(oe(A),D!==D+0)throw D;de(1,0)}}function sy(o,c,y,g,k,E,A,D){var G=le();try{return vo(o,c,y,g,k,E,A,D)}catch(Z){if(oe(G),Z!==Z+0)throw Z;de(1,0)}}function oy(o,c,y,g,k){var E=le();try{return Ro(o,c,y,g,k)}catch(A){if(oe(E),A!==A+0)throw A;return de(1,0),0n}}function ly(o,c,y,g){var k=le();try{return Do(o,c,y,g)}catch(E){if(oe(k),E!==E+0)throw E;de(1,0)}}function uy(o,c,y,g){var k=le();try{return Bo(o,c,y,g)}catch(E){if(oe(k),E!==E+0)throw E;de(1,0)}}function dy(o,c,y,g,k,E,A,D,G,Z,se,fe){var ye=le();try{return Po(o,c,y,g,k,E,A,D,G,Z,se,fe)}catch(be){if(oe(ye),be!==be+0)throw be;de(1,0)}}function cy(o,c,y,g,k,E,A,D,G,Z,se){var fe=le();try{Ao(o,c,y,g,k,E,A,D,G,Z,se)}catch(ye){if(oe(fe),ye!==ye+0)throw ye;de(1,0)}}function py(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be,gt,Vi){var xy=le();try{jo(o,c,y,g,k,E,A,D,G,Z,se,fe,ye,be,gt,Vi)}catch(Gi){if(oe(xy),Gi!==Gi+0)throw Gi;de(1,0)}}function fy(o,c,y,g){var k=le();try{return Lo(o,c,y,g)}catch(E){if(oe(k),E!==E+0)throw E;de(1,0)}}function hy(o,c,y,g,k){var E=le();try{return Uo(o,c,y,g,k)}catch(A){if(oe(E),A!==A+0)throw A;de(1,0)}}function my(o,c,y){var g=le();try{return Co(o,c,y)}catch(k){if(oe(g),k!==k+0)throw k;de(1,0)}}function gy(o,c,y){var g=le();try{return No(o,c,y)}catch(k){if(oe(g),k!==k+0)throw k;de(1,0)}}function yy(o,c,y,g){var k=le();try{zo(o,c,y,g)}catch(E){if(oe(k),E!==E+0)throw E;de(1,0)}}function Lr(){if(0<we)ze=Lr;else if(n)v?.(t),ie();else{for(var o=Se;0<o.length;)o.shift()(t);0<we?ze=Lr:(t.calledRun=!0,N||(ie(),v?.(t)))}}return n||(ot=await Me(),Lr()),t.PTR_SIZE=4,q?t:new Promise((o,c)=>{v=o,S=c})}var Fp,bl,tw=V(()=>{Fp=xl,bl=globalThis.self?.name?.startsWith("em-pthread"),bl&&xl()}),an,Jn,wl,Oe,Kp,Gr,vl,_l,sn,$l,on,Zp,ln,Yp,Ea=V(()=>{Ia(),an=typeof location>"u"?void 0:location.origin,Jn=import.meta.url>"file:"&&import.meta.url<"file;",wl=()=>{{if(Jn){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,an).href}return import.meta.url}},Oe=wl(),Kp=()=>{if(Oe&&!Oe.startsWith("blob:"))return Oe.substring(0,Oe.lastIndexOf("/")+1)},Gr=(e,t)=>{try{let r=t??Oe;return(r?new URL(e,r):new URL(e)).origin===an}catch{return!1}},vl=(e,t)=>{let r=t??Oe;try{return(r?new URL(e,r):new URL(e)).href}catch{return}},_l=(e,t)=>`${t??"./"}${e}`,sn=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},$l=async e=>(await import(e)).default,on=(ew(),$r(Vp)).default,Zp=async()=>{if(!Oe)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(Gr(Oe))return[void 0,on()];let e=await sn(Oe);return[e,on(e)]},ln=(tw(),$r(Hp)).default,Yp=async(e,t,r,i)=>{let n=ln&&!(e||t);if(n)if(Oe)n=Gr(Oe)||i&&!r;else if(i&&!r)n=!0;else throw new Error("cannot determine the script source URL.");if(n)return[void 0,ln];{let a="ort-wasm-simd-threaded.jsep.mjs",s=e??vl(a,t),l=r&&s&&!Gr(s,t),u=l?await sn(s):s??_l(a,t);return[l?u:void 0,await $l(u)]}}}),un,Hr,or,dn,kl,Sl,Tl,Ca,xe,Ut=V(()=>{Ea(),Hr=!1,or=!1,dn=!1,kl=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},Sl=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},Tl=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Ca=async e=>{if(Hr)return Promise.resolve();if(or)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(dn)throw new Error("previous call to 'initializeWebAssembly()' failed.");or=!0;let t=e.initTimeout,r=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!Tl())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!Sl())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let i=kl();r>1&&!i&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+r+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=r=1);let n=e.wasmPaths,a=typeof n=="string"?n:void 0,s=n?.mjs,l=s?.href??s,u=n?.wasm,d=u?.href??u,p=e.wasmBinary,[f,h]=await Yp(l,a,r>1,!!p||!!d),b=!1,x=[];if(t>0&&x.push(new Promise(v=>{setTimeout(()=>{b=!0,v()},t)})),x.push(new Promise((v,S)=>{let $={numThreads:r};if(p)$.wasmBinary=p,$.locateFile=w=>w;else if(d||a)$.locateFile=w=>d??a+w;else if(l&&l.indexOf("blob:")!==0)$.locateFile=w=>new URL(w,l).href;else if(f){let w=Kp();w&&($.locateFile=I=>w+I)}h($).then(w=>{or=!1,Hr=!0,un=w,v(),f&&URL.revokeObjectURL(f)},w=>{or=!1,dn=!0,S(w)})})),await Promise.race(x),b)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},xe=()=>{if(Hr&&un)return un;throw new Error("WebAssembly is not initialized yet.")}}),Ke,pi,ge,Na=V(()=>{Ut(),Ke=(e,t)=>{let r=xe(),i=r.lengthBytesUTF8(e)+1,n=r._malloc(i);return r.stringToUTF8(e,n,i),t.push(n),n},pi=(e,t,r,i)=>{if(typeof e=="object"&&e!==null){if(r.has(e))throw new Error("Circular reference in options");r.add(e)}Object.entries(e).forEach(([n,a])=>{let s=t?t+n:n;if(typeof a=="object")pi(a,s+".",r,i);else if(typeof a=="string"||typeof a=="number")i(s,a.toString());else if(typeof a=="boolean")i(s,a?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof a}`)})},ge=e=>{let t=xe(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetLastError(n,n+i);let a=Number(t.getValue(n,i===4?"i32":"i64")),s=t.getValue(n+i,"*"),l=s?t.UTF8ToString(s):"";throw new Error(`${e} ERROR_CODE: ${a}, ERROR_MESSAGE: ${l}`)}finally{t.stackRestore(r)}}}),Xp,rw=V(()=>{Ut(),Na(),Xp=e=>{let t=xe(),r=0,i=[],n=e||{};try{if(e?.logSeverityLevel===void 0)n.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if(e?.logVerbosityLevel===void 0)n.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);e?.terminate===void 0&&(n.terminate=!1);let a=0;return e?.tag!==void 0&&(a=Ke(e.tag,i)),r=t._OrtCreateRunOptions(n.logSeverityLevel,n.logVerbosityLevel,!!n.terminate,a),r===0&&ge("Can't create run options."),e?.extra!==void 0&&pi(e.extra,"",new WeakSet,(s,l)=>{let u=Ke(s,i),d=Ke(l,i);t._OrtAddRunConfigEntry(r,u,d)!==0&&ge(`Can't set a run config entry: ${s} - ${l}.`)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseRunOptions(r),i.forEach(s=>t._free(s)),a}}}),Il,El,Cl,lr,Nl,Qp,iw=V(()=>{Ut(),Na(),Il=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},El=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},Cl=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(r=>(typeof r=="string"?r:r.name)==="webgpu")&&(e.enableMemPattern=!1)},lr=(e,t,r,i)=>{let n=Ke(t,i),a=Ke(r,i);xe()._OrtAddSessionConfigEntry(e,n,a)!==0&&ge(`Can't set a session config entry: ${t} - ${r}.`)},Nl=async(e,t,r)=>{let i=t.executionProviders;for(let n of i){let a=typeof n=="string"?n:n.name,s=[];switch(a){case"webnn":if(a="WEBNN",typeof n!="string"){let f=n?.deviceType;f&&lr(e,"deviceType",f,r)}break;case"webgpu":if(a="JS",typeof n!="string"){let f=n;if(f?.preferredLayout){if(f.preferredLayout!=="NCHW"&&f.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${f.preferredLayout}`);lr(e,"preferredLayout",f.preferredLayout,r)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${a}`)}let l=Ke(a,r),u=s.length,d=0,p=0;if(u>0){d=xe()._malloc(u*xe().PTR_SIZE),r.push(d),p=xe()._malloc(u*xe().PTR_SIZE),r.push(p);for(let f=0;f<u;f++)xe().setValue(d+f*xe().PTR_SIZE,s[f][0],"*"),xe().setValue(p+f*xe().PTR_SIZE,s[f][1],"*")}await xe()._OrtAppendExecutionProvider(e,l,d,p,u)!==0&&ge(`Can't append execution provider: ${a}.`)}},Qp=async e=>{let t=xe(),r=0,i=[],n=e||{};Cl(n);try{let a=Il(n.graphOptimizationLevel??"all"),s=El(n.executionMode??"sequential"),l=typeof n.logId=="string"?Ke(n.logId,i):0,u=n.logSeverityLevel??2;if(!Number.isInteger(u)||u<0||u>4)throw new Error(`log severity level is not valid: ${u}`);let d=n.logVerbosityLevel??0;if(!Number.isInteger(d)||d<0||d>4)throw new Error(`log verbosity level is not valid: ${d}`);let p=typeof n.optimizedModelFilePath=="string"?Ke(n.optimizedModelFilePath,i):0;if(r=t._OrtCreateSessionOptions(a,!!n.enableCpuMemArena,!!n.enableMemPattern,s,!!n.enableProfiling,0,l,u,d,p),r===0&&ge("Can't create session options."),n.executionProviders&&await Nl(r,n,i),n.enableGraphCapture!==void 0){if(typeof n.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${n.enableGraphCapture}`);lr(r,"enableGraphCapture",n.enableGraphCapture.toString(),i)}if(n.freeDimensionOverrides)for(let[f,h]of Object.entries(n.freeDimensionOverrides)){if(typeof f!="string")throw new Error(`free dimension override name must be a string: ${f}`);if(typeof h!="number"||!Number.isInteger(h)||h<0)throw new Error(`free dimension override value must be a non-negative integer: ${h}`);let b=Ke(f,i);t._OrtAddFreeDimensionOverride(r,b,h)!==0&&ge(`Can't set a free dimension override: ${f} - ${h}.`)}return n.extra!==void 0&&pi(n.extra,"",new WeakSet,(f,h)=>{lr(r,f,h,i)}),[r,i]}catch(a){throw r!==0&&t._OrtReleaseSessionOptions(r)!==0&&ge("Can't release session options."),i.forEach(s=>t._free(s)),a}}}),At,ut,jt,vi,fi,za,Aa,ea,re=V(()=>{At=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},ut=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},jt=(e,t)=>{let r=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],i=typeof t=="number"?t:t.reduce((n,a)=>n*a,1);return r>0?Math.ceil(i*r):void 0},vi=e=>{switch(e){case"float16":return typeof Float16Array<"u"&&Float16Array.from?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},fi=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},za=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Aa=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",ea=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),ja,Jp=V(()=>{Ia(),ja=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let r=t.headers.get("Content-Length"),i=r?parseInt(r,10):0;if(i<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let n=t.body.getReader(),a;try{a=new ArrayBuffer(i)}catch(l){if(l instanceof RangeError){let u=Math.ceil(i/65536);a=new WebAssembly.Memory({initial:u,maximum:u}).buffer}else throw l}let s=0;for(;;){let{done:l,value:u}=await n.read();if(l)break;let d=u.byteLength;new Uint8Array(a,s,d).set(u),s+=d}return new Uint8Array(a,0,i)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),zl,Al,jl,Ml,Ma,Ol,ce,dt=V(()=>{re(),zl=["V","I","W","E","F"],Al=(e,t)=>{console.log(`[${zl[e]},${new Date().toISOString()}]${t}`)},Ma=(e,t)=>{jl=e,Ml=t},Ol=(e,t)=>{let r=fi(e),i=fi(jl);r>=i&&Al(r,typeof t=="function"?t():t)},ce=(...e)=>{Ml&&Ol(...e)}}),Rl,Xt,O,hi,ef,tf,rf,ne=V(()=>{Rl=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},Xt=class{static calcShape(e,t,r=!1){let i=e.length,n=t.length;if(i===0)return t;if(n===0)return e;let a=Math.max(e.length,t.length),s=new Array(a);if(r){if(i<2||n<2)return;let l=Rl.calcMatMulShape([e[i-2],e[i-1]],[t[n-2],t[n-1]]);if(l===void 0)return;[s[a-2],s[a-1]]=l}for(let l=r?3:1;l<=a;l++){let u=i-l<0?1:e[i-l],d=n-l<0?1:t[n-l];if(u!==d&&u>1&&d>1)return;let p=Math.max(u,d);if(u&&d)s[a-l]=Math.max(u,d);else{if(p>1)return;s[a-l]=0}}return s}static isValidBroadcast(e,t){let r=e.length,i=t.length;if(r>i)return!1;for(let n=1;n<=r;n++)if(e[r-n]!==1&&e[r-n]!==t[i-n])return!1;return!0}},O=class ni{static size(t){return ni.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,r=4){let i=t.length;if(i===0)return[];let n=new Array(i),a=i-1;for(;a>=0;){if(t[a]%r===0){n[a]=t[a]/r;break}if(r%t[a]!==0)throw new Error("cannot convert shape");n[a]=1,r/=t[a],a--}for(a--;a>=0;a--)n[a]=t[a];return n}static sizeFromDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return ni.getSizeFromDimensionRange(t,r,t.length)}static sizeToDimension(t,r){if(r<0||r>t.length)throw new Error(`invalid dimension of ${r} for sizeToDimension as Tensor has ${t.length} dimensions.`);return ni.getSizeFromDimensionRange(t,0,r)}static getSizeFromDimensionRange(t,r,i){let n=1;for(let a=r;a<i;a++){if(t[a]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");n*=Number(t[a])}return n}static computeStrides(t){let r=t.length;if(r===0)return[];if(r===1)return[1];let i=new Array(r);i[r-1]=1,i[r-2]=t[r-1];for(let n=r-3;n>=0;--n)i[n]=i[n+1]*t[n+1];return i}static normalizeAxis(t,r){if(t<-r&&t>=r)throw new Error("unsupported axis for this operation.");return t<0?t+r:t}static normalizeAxes(t,r){return t.map(i=>this.normalizeAxis(i,r??t.length))}static sortBasedOnPerm(t,r){return r?r.map(i=>t[i]):t.slice().reverse()}static padShape(t,r){let i=t.length;return t.map((n,a)=>n+r[a]+r[a+i])}static areEqual(t,r){return t.length!==r.length?!1:t.every((i,n)=>i===r[n])}},hi=class xr{static adjustPoolAttributes(t,r,i,n,a,s){if(!t&&i.length!==r.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let l=0;l<r.length-2;l++)l>=i.length?i.push(r[l+2]):i[l]=r[l+2];for(let l=0;l<i.length;l++)if(l<n.length){if(n[l]<0)throw new Error("strides should be greater than or equal to 1")}else n.push(1);for(let l=0;l<i.length;l++)if(l<a.length){if(a[l]<0)throw new Error("dilations should be greater than or equal to 1")}else a.push(1);for(let l=0;l<i.length*2;l++)if(l<s.length){if(s[l]<0)throw new Error("pad should be greater than or equal to 1")}else s.push(0);for(let l=0;l<i.length;l++){if(i[l]<=0)throw new Error("kernel shapes need to be greater than 0");if(s[l]>=i[l]||s[l+i.length]>=i[l])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,r,i,n,a,s,l){if(l){if(a.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(r.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(n.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let u=0;u<t.length-2;u++)xr.adjustPadAndReturnShape(t[u+(s?1:2)],r[u],i[u],n[u],a,u,u+t.length-2,l)}}static computePoolOutputShape(t,r,i,n,a,s,l){if(r.length<=0)throw new Error("input shape must be of size greater than 0");let u=[r[0],r[1]];return xr.computeShapeHelper(t,r,u,i,n,a,s,l),u}static computeConvOutputShape(t,r,i,n,a,s,l){if(t.length<=0||r.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let u=[t[0],r[0]];return xr.computeShapeHelper(!1,t,u,i,n,a,s,l),u}static computeShapeHelper(t,r,i,n,a,s,l,u){if(t)for(let d=0;d<r.length-2;d++)i.push(1);else for(let d=0;d<r.length-2;d++)i.push(xr.adjustPadAndReturnShape(r[d+2],n[d],a[d],s[d],l,d,d+r.length-2,u))}static adjustPadAndReturnShape(t,r,i,n,a,s,l,u){let d=i*(n-1)+1;if(u&&u!=="NOTSET")switch(u){case"VALID":return a[s]=0,a[l]=0,Math.floor((t-d)/r+1);case"SAME_LOWER":case"SAME_UPPER":if(i!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let p=((t+r-1)/r-1)*r+n-t;return a[s]=Math.floor(u==="SAME_LOWER"?(p+1)/2:p/2),a[l]=p-a[s],Math.floor((t+p-n)/r+1)}default:throw new Error("Unsupported AutoPad type")}else return Math.floor((t+a[s]+a[l]-d)/r+1)}},ef=class{static getShapeOfGemmResult(e,t,r,i,n){if(e.length!==2||r.length!==2)throw new Error("shape need to be of size 2");let a,s,l;t?(a=e[1],s=e[0]):(a=e[0],s=e[1]);let u=-1;if(i?(l=r[0],u=1):(l=r[1],u=0),r[u]!==s)throw new Error("dimension mismatch");if(a<=0||l<=0||s<=0)throw new Error("invalid shape specified");if(n&&!Xt.isValidBroadcast(n,[a,l]))throw new Error("gemm: invalid bias shape for broadcast");return[a,l,s]}},tf=-34028234663852886e22,rf=34028234663852886e22}),Oa,nf=V(()=>{re(),Oa=(e,t)=>new(vi(t))(e)}),cn,ta,pn,Dl,fn,Bl,hn,mn,gn,Pl,af,nw=V(()=>{re(),dt(),cn=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),ta=(e,t)=>{if(t==="int32")return e;let r=cn.get(t);if(!r)throw new Error(`WebNN backend does not support data type: ${t}`);let i=r/8;if(e.byteLength%i!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${i}.`);let n=e.byteLength/i,a=new(vi(t))(e.buffer,e.byteOffset,n);switch(t){case"int64":case"uint64":{let s=new Int32Array(n);for(let l=0;l<n;l++){let u=a[l];if(u>2147483647n||u<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");s[l]=Number(u)}return new Uint8Array(s.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&a.some(l=>l>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let s=Int32Array.from(a,Number);return new Uint8Array(s.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},pn=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let r=e.byteLength/4,i=new Int32Array(e.buffer,e.byteOffset,r);switch(t){case"int64":{let n=BigInt64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"uint64":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let n=BigUint64Array.from(i,BigInt);return new Uint8Array(n.buffer)}case"int8":{if(i.some(a=>a<-128||a>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let n=Int8Array.from(i,Number);return new Uint8Array(n.buffer)}case"uint8":{if(i.some(n=>n<0||n>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(i,Number)}case"uint32":{if(i.some(a=>a<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let n=Uint32Array.from(i,Number);return new Uint8Array(n.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Dl=1,fn=()=>Dl++,Bl=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),hn=(e,t)=>{let r=cn.get(e);if(!r)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((i,n)=>i*n)*r/8):0},mn=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:r,tensor:i,dataType:n,shape:a,fallbackDataType:s}=e;this.sessionId=t,this.mlContext=r,this.mlTensor=i,this.dataType=n,this.tensorShape=a,this.fallbackDataType=s}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return hn(this.dataType,this.tensorShape)}destroy(){ce("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),r=pn(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(r);return}else return r.buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,r){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===r.length&&this.tensorShape.every((i,n)=>i===r[n])}setIsDataConverted(e){this.isDataConverted=e}},gn=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,r,i){let n=this.tensorManager.getMLContext(e),a=this.tensorManager.getMLOpSupportLimits(e),s;if(!a?.input.dataTypes.includes(t)){if(s=Bl.get(t),!s||a?.input.dataTypes.includes(s))throw new Error(`WebNN backend does not support data type: ${t}`);ce("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${s}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(n,t,r))return this.wrapper.tensor;if(i){if(this.wrapper.byteLength!==hn(t,r))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let l=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,r,l,!0,!0,s),i&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=ta(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else ce("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){if(this.activeUpload){let t=this.wrapper?.isDataConverted?pn(this.activeUpload,this.wrapper?.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(t):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(t);return}else return t.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Pl=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=fn();return this.tensorTrackersById.set(e,new gn(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,r,i,n){ce("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${r}, shape: ${i}, copyOld: ${n}}`);let a=this.tensorTrackersById.get(t);if(!a)throw new Error("Tensor not found.");return a.ensureTensor(e,r,i,n)}upload(e,t){let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");r.upload(t)}async download(e,t){ce("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t?.byteLength}}`);let r=this.tensorTrackersById.get(e);if(!r)throw new Error("Tensor not found.");return r.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,r,i){let n=this.getMLContext(e),a=fn(),s=new mn({sessionId:e,context:n,tensor:t,dataType:r,shape:i});return this.tensorTrackersById.set(a,new gn(this,s)),this.externalTensors.add(s),a}async getCachedTensor(e,t,r,i,n,a,s){let l=this.getMLContext(e);for(let[d,p]of this.freeTensors.entries())if(p.canReuseTensor(l,t,r)){ce("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}`);let f=this.freeTensors.splice(d,1)[0];return f.sessionId=e,f}ce("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${s?`fallbackDataType: ${s},`:""} shape: ${r}}`);let u=await l.createTensor({dataType:s??t,shape:r,dimensions:r,usage:i,writable:n,readable:a});return new mn({sessionId:e,context:l,tensor:u,dataType:t,shape:r,fallbackDataType:s})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},af=(...e)=>new Pl(...e)}),ur,Ll,sf,aw=V(()=>{re(),Ut(),nf(),nw(),dt(),ur=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Ll=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let r=Object.keys(e).sort(),i=Object.keys(t).sort();return r.length===i.length&&r.every((n,a)=>n===i[a]&&e[n]===t[n])},sf=class{constructor(e){this.tensorManager=af(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Ma(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){ce("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){ce("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let r of t)ce("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${r}}`),this.tensorManager.releaseTensorId(r);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let r=this.mlContextCache.findIndex(i=>i.gpuDevice===e);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:i}),i}}else if(e===void 0){let r=this.mlContextCache.findIndex(i=>i.options===void 0&&i.gpuDevice===void 0);if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:i}),i}}let t=this.mlContextCache.findIndex(r=>Ll(r.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let r=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:r}),r}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let r=this.sessionIdsByMLContext.get(t);r||(r=new Set,this.sessionIdsByMLContext.set(t,r)),r.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let r=this.sessionIdsByMLContext.get(t);if(r.delete(e),r.size===0){this.sessionIdsByMLContext.delete(t);let i=this.mlContextCache.findIndex(n=>n.mlContext===t);i!==-1&&this.mlContextCache.splice(i,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){ce("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,r,i,n){let a=ur.get(r);if(!a)throw new Error(`Unsupported ONNX data type: ${r}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,a,i,n)}async createTemporaryTensor(e,t,r){ce("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${r}}`);let i=ur.get(t);if(!i)throw new Error(`Unsupported ONNX data type: ${t}`);let n=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,n,i,r,!1);let a=this.temporarySessionTensorIds.get(e);return a?a.push(n):this.temporarySessionTensorIds.set(e,[n]),n}uploadTensor(e,t){if(!xe().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");ce("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let r=await this.tensorManager.download(e);return Oa(r,t)}}registerMLTensor(e,t,r,i){let n=ur.get(r);if(!n)throw new Error(`Unsupported ONNX data type: ${r}`);let a=this.tensorManager.registerTensor(e,t,n,i);return ce("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${n}, dimensions: ${i}} -> {tensorId: ${a}}`),a}registerMLConstant(e,t,r,i,n,a,s=!1){if(!a)throw new Error("External mounted files are not available.");let l=e;e.startsWith("./")&&(l=e.substring(2));let u=a.get(l);if(!u)throw new Error(`File with name ${l} not found in preloaded files.`);if(t+r>u.byteLength)throw new Error("Out of bounds: data offset and length exceed the external file data size.");let d=u.slice(t,t+r).buffer,p;switch(n.dataType){case"float32":p=new Float32Array(d);break;case"float16":p=typeof Float16Array<"u"&&Float16Array.from?new Float16Array(d):new Uint16Array(d);break;case"int32":p=new Int32Array(d);break;case"uint32":p=new Uint32Array(d);break;case"int64":if(s){let f=ta(new Uint8Array(d),"int64");p=new Int32Array(f.buffer),n.dataType="int32"}else p=new BigInt64Array(d);break;case"uint64":p=new BigUint64Array(d);break;case"int8":p=new Int8Array(d);break;case"int4":case"uint4":case"uint8":p=new Uint8Array(d);break;default:throw new Error(`Unsupported data type: ${n.dataType} in creating WebNN Constant from external data.`)}return ce("verbose",()=>`[WebNN] registerMLConstant {dataType: ${n.dataType}, shape: ${n.shape}}} ${s?"(Note: it was int64 data type and registered to int32 as workaround)":""}`),i.constant(n,p)}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let r=this.sessionGraphInputs.get(e);return r?r.includes(t):!1}isGraphOutput(e,t){let r=this.sessionGraphOutputs.get(e);return r?r.includes(t):!1}isGraphInputOutputTypeSupported(e,t,r=!0){let i=ur.get(At(t)),n=this.mlOpSupportLimitsBySessionId.get(e);return typeof i>"u"?!1:r?!!n?.input.dataTypes.includes(i):!!n?.output.dataTypes.includes(i)}flush(){}}}),Ra=V(()=>{}),yn,Fr,Kr,Ul,ql,xn,ra,Wl,of,sw=V(()=>{dt(),Ra(),yn=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),Fr=[],Kr=e=>Math.ceil(Number(e)/16)*16,Ul=e=>{for(let t=0;t<Fr.length;t++){let r=Fr[t];if(e<=r)return r}return Math.ceil(e/16)*16},ql=1,xn=()=>ql++,ra=async(e,t,r,i)=>{let n=Kr(r),a=e.device.createBuffer({size:n,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let s=e.getCommandEncoder();e.endComputePass(),s.copyBufferToBuffer(t,0,a,0,n),e.flush(),await a.mapAsync(GPUMapMode.READ);let l=a.getMappedRange();if(i){let u=i();return u.set(new Uint8Array(l,0,r)),u}else return new Uint8Array(l.slice(0,r))}finally{a.destroy()}},Wl=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of yn)Fr.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let r=t.buffer,i=t.byteOffset,n=t.byteLength,a=Kr(n),s=this.storageCache.get(e);if(!s)throw new Error("gpu data for uploading does not exist");if(Number(s.originalSize)!==n)throw new Error(`inconsistent data size. gpu data size=${s.originalSize}, data size=${n}`);let l=this.backend.device.createBuffer({mappedAtCreation:!0,size:a,usage:GPUBufferUsage.MAP_WRITE|GPUBufferUsage.COPY_SRC}),u=l.getMappedRange();new Uint8Array(u).set(new Uint8Array(r,i,n)),l.unmap();let d=this.backend.device.createCommandEncoder();d.copyBufferToBuffer(l,0,s.gpuData.buffer,0,a),this.backend.device.queue.submit([d.finish()]),l.destroy(),ce("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let r=this.storageCache.get(e);if(!r)throw new Error("source gpu data for memcpy does not exist");let i=this.storageCache.get(t);if(!i)throw new Error("destination gpu data for memcpy does not exist");if(r.originalSize!==i.originalSize)throw new Error("inconsistent source and destination gpu data size");let n=Kr(r.originalSize),a=this.backend.getCommandEncoder();this.backend.endComputePass(),a.copyBufferToBuffer(r.gpuData.buffer,0,i.gpuData.buffer,0,n)}registerExternalBuffer(e,t,r){let i;if(r){if(i=r[0],e===r[1])return ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, buffer is the same, skip.`),i;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else i=xn();return this.storageCache.set(i,{gpuData:{id:i,type:0,buffer:e},originalSize:t}),ce("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${i}, registered.`),i}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),ce("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let r=Ul(e),i,n=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,a=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(n||a){let l=(n?this.freeBuffers:this.freeUniformBuffers).get(r);l?l.length>0?i=l.pop():i=this.backend.device.createBuffer({size:r,usage:t}):i=this.backend.device.createBuffer({size:r,usage:t})}else i=this.backend.device.createBuffer({size:r,usage:t});let s={id:xn(),type:0,buffer:i};return this.storageCache.set(s.id,{gpuData:s,originalSize:Number(e)}),ce("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${s.id}`),s}get(e){return this.storageCache.get(e)?.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,r=this.storageCache.get(t);if(!r){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return ce("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${r.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(r.gpuData.buffer),r.originalSize}async download(e,t){let r=this.storageCache.get(Number(e));if(!r)throw new Error("data does not exist");await ra(this.backend,r.gpuData.buffer,r.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=yn.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let r=this.freeBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let r=this.freeUniformBuffers.get(e.size)||[];t===void 0||r.length>=t?e.destroy():r.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(r=>{r.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(ce("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(r=>{r.gpuData.buffer.destroy()}),this.storageCache=new Map)}},of=(...e)=>new Wl(...e)}),Vl,me,ke=V(()=>{Vl=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},me=e=>new Vl(e)}),Qt,Zr,Ie,Ne,ee,$e,ia,Kt,vt,J,dr,P,Q,lf,Da,Gl,uf,ae=V(()=>{re(),ne(),Qt=64,Zr=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ie=(e,t=1)=>{let r=Zr(e,t);return typeof r=="string"?r:r[0]},Ne=(e,t=1)=>{let r=Zr(e,t);return typeof r=="string"?r:r[1]},ee=(...e)=>{let t=[];return e.forEach(r=>{r.length!==0&&t.push({type:12,data:r},{type:12,data:O.computeStrides(r)})}),t},$e=e=>e%4===0?4:e%2===0?2:1,ia=(e="f32",t,r="0")=>!t||t===1?`${e}(${r})`:`vec${t}<${e}>(${r})`,Kt=(e,t,r)=>e==="f32"?r:t===1?`f32(${r})`:`vec${t}<f32>(${r})`,vt=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,J=(e,t,r,i)=>e.startsWith("uniforms.")&&r>4?typeof t=="string"?i==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:i==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:r>1?`${e}[${t}]`:e,dr=(e,t,r,i,n)=>{let a=typeof r=="number",s=a?r:r.length,l=[...new Array(s).keys()],u=s<2?"u32":s<=4?`vec${s}<u32>`:`array<u32, ${s}>`,d=Zr(t,n),p=typeof d=="string"?d:d[1],f=typeof d=="string"?d:d[0],h={indices:u,value:p,storage:f,tensor:t},b=q=>typeof q=="string"?q:`${q}u`,x={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},v=a?"uniforms.":"",S=`${v}${e}_shape`,$=`${v}${e}_strides`,w="";for(let q=0;q<s-1;q++)w+=`
    let dim${q} = current / ${J($,q,s)};
    let rest${q} = current % ${J($,q,s)};
    indices[${q}] = dim${q};
    current = rest${q};
    `;w+=`indices[${s-1}] = current;`;let I=s<2?"":`
  fn o2i_${e}(offset: u32) -> ${h.indices} {
    var indices: ${h.indices};
    var current = offset;
    ${w}
    return indices;
  }`,T=q=>(x.offsetToIndices=!0,s<2?q:`o2i_${e}(${q})`),C=[];if(s>=2)for(let q=s-1;q>=0;q--)C.push(`${J($,q,s)} * (indices[${q}])`);let N=s<2?"":`
  fn i2o_${e}(indices: ${h.indices}) -> u32 {
    return ${C.join("+")};
  }`,z=q=>(x.indicesToOffset=!0,s<2?q:`i2o_${e}(${q})`),_=(...q)=>s===0?"0u":`${h.indices}(${q.map(b).join(",")})`,j=(q,K)=>s<2?`${q}`:`${J(q,K,s)}`,R=(q,K,ie)=>s<2?`${q}=${ie};`:`${J(q,K,s)}=${ie};`,H={},W=(q,K)=>{x.broadcastedIndicesToOffset=!0;let ie=`${K.name}broadcastedIndicesTo${e}Offset`;if(ie in H)return`${ie}(${q})`;let ue=[];for(let je=s-1;je>=0;je--){let Me=K.indicesGet("outputIndices",je+K.rank-s);ue.push(`${j($,je)} * (${Me} % ${j(S,je)})`)}return H[ie]=`fn ${ie}(outputIndices: ${K.type.indices}) -> u32 {
             return ${ue.length>0?ue.join("+"):"0u"};
           }`,`${ie}(${q})`},B=(q,K)=>(()=>{if(h.storage===h.value)return`${e}[${q}]=${K};`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`${e}[${q}]=vec2<u32>(u32(${K}), select(0u, 0xFFFFFFFFu, ${K} < 0));`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`${e}[${q}]=vec2<u32>(u32(${K}), 0u);`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`${e}[${q}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${K}));`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),M=q=>(()=>{if(h.storage===h.value)return`${e}[${q}]`;if(h.storage==="vec2<u32>"&&h.value==="i32")return`i32(${e}[${q}].x)`;if(h.storage==="vec2<u32>"&&h.value==="u32")return`u32(${e}[${q}].x)`;if(h.storage==="u32"&&h.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${q}] & 0xFFu), bool(${e}[${q}] & 0xFF00u), bool(${e}[${q}] & 0xFF0000u), bool(${e}[${q}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${h.storage} and value type ${h.value} yet`)})(),L=s<2?"":`
  fn get_${e}ByIndices(indices: ${h.indices}) -> ${p} {
    return ${M(`i2o_${e}(indices)`)};
  }`,F=s<2?"":(()=>{let q=l.map(ie=>`d${ie}: u32`).join(", "),K=l.map(ie=>`d${ie}`).join(", ");return`
  fn get_${e}(${q}) -> ${p} {
    return get_${e}ByIndices(${_(K)});
  }`})(),Y=(...q)=>{if(q.length!==s)throw new Error(`indices length must be ${s}`);let K=q.map(b).join(",");return s===0?M("0u"):s===1?M(K[0]):(x.get=!0,x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}(${K})`)},X=q=>s<2?M(q):(x.getByIndices=!0,x.indicesToOffset=!0,`get_${e}ByIndices(${q})`),te=s<2?"":`
  fn set_${e}ByIndices(indices: ${h.indices}, value: ${p}) {
    ${B(`i2o_${e}(indices)`,"value")}
  }`,pe=s<2?"":(()=>{let q=l.map(ie=>`d${ie}: u32`).join(", "),K=l.map(ie=>`d${ie}`).join(", ");return`
  fn set_${e}(${q}, value: ${p}) {
    set_${e}ByIndices(${_(K)}, value);
  }`})();return{impl:()=>{let q=[],K=!1;return x.offsetToIndices&&(q.push(I),K=!0),x.indicesToOffset&&(q.push(N),K=!0),x.broadcastedIndicesToOffset&&(Object.values(H).forEach(ie=>q.push(ie)),K=!0),x.set&&(q.push(pe),K=!0),x.setByIndices&&(q.push(te),K=!0),x.get&&(q.push(F),K=!0),x.getByIndices&&(q.push(L),K=!0),!a&&K&&q.unshift(`const ${S} = ${h.indices}(${r.join(",")});`,`const ${$} = ${h.indices}(${O.computeStrides(r).join(",")});`),q.join(`
`)},type:h,offsetToIndices:T,indicesToOffset:z,broadcastedIndicesToOffset:W,indices:_,indicesGet:j,indicesSet:R,set:(...q)=>{if(q.length!==s+1)throw new Error(`indices length must be ${s}`);let K=q[s];if(typeof K!="string")throw new Error("value must be string");let ie=q.slice(0,s).map(b).join(",");return s===0?B("0u",K):s===1?B(ie[0],K):(x.set=!0,x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}(${ie}, ${K})`)},setByOffset:B,setByIndices:(q,K)=>s<2?B(q,K):(x.setByIndices=!0,x.indicesToOffset=!0,`set_${e}ByIndices(${q}, ${K});`),get:Y,getByOffset:M,getByIndices:X,usage:i,name:e,strides:$,shape:S,rank:s}},P=(e,t,r,i=1)=>dr(e,t,r,"input",i),Q=(e,t,r,i=1)=>dr(e,t,r,"output",i),lf=(e,t,r)=>dr(e,t,r,"atomicOutput",1),Da=(e,t,r,i=1)=>dr(e,t,r,"internal",i),Gl=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=Qt){let t=typeof e=="number"?e:e[0],r=typeof e=="number"?1:e[1],i=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||r>this.limits.maxComputeWorkgroupSizeY||i>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*r*i>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${r}, ${i}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let n=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,a=n?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,s=n?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*r*i}u + local_idx;`;return`@compute @workgroup_size(${t}, ${r}, ${i})
  fn main(${a}) {
    ${s}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let r=e.usage==="input"?"read":"read_write",i=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${r}> ${e.name}: array<${i}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,r=1){return this.uniforms.push({name:e,type:t,length:r}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:r,length:i}of this.uniforms)if(i&&i>4)r==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${r}>, ${Math.ceil(i/8)}>`):e.push(`${t}:array<vec4<${r}>, ${Math.ceil(i/4)}>`);else{let n=i==null||i===1?r:`vec${i}<${r}>`;e.push(`${t}:${n}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},uf=(e,t)=>new Gl(e,t)}),Hl,bn,Fl,Kl,Zl,Yl,De,df,cf,$t=V(()=>{re(),ne(),ke(),ae(),Hl=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},bn=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Fl=(e,t)=>O.sortBasedOnPerm(e,bn(e.length,t)),Kl=(e,t,r,i)=>{let n=`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`;for(let a=0;a<t;++a)n+=`a[${e[a]}]=i[${a}];`;return n+="return a;}"},Zl=(e,t)=>{let r=[],i=[];for(let n=0;n<e.length;++n)e[n]!==1&&r.push(e[n]),e[t[n]]!==1&&i.push(t[n]);return{newShape:r,newPerm:i}},Yl=(e,t)=>{let r=0;for(let i=0;i<e.length;++i)if(t[e[i]]!==1){if(e[i]<r)return!1;r=e[i]}return!0},De=(e,t)=>{let r=e.dataType,i=e.dims.length,n=bn(i,t),a=Fl(e.dims,n),s=e.dims,l=a,u=i<2||Yl(n,e.dims),d;if(u)return d=x=>{let v=P("input",r,s,4),S=Q("output",r,l,4);return`
  ${x.registerUniform("output_size","u32").declareVariables(v,S)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let x=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(x/64/4)},programUniforms:[{type:12,data:Math.ceil(x/4)}]}},getShaderSource:d};let{newShape:p,newPerm:f}=Zl(e.dims,n),h=O.areEqual(f,[2,3,1]),b=O.areEqual(f,[3,1,2]);if(p.length===2||h||b){s=h?[p[0],p[1]*p[2]]:b?[p[0]*p[1],p[2]]:p,l=[s[1],s[0]];let x=16;return d=v=>{let S=P("a",r,s.length),$=Q("output",r,l.length);return`
  ${v.registerUniform("output_size","u32").declareVariables(S,$)}
  var<workgroup> tile : array<array<${$.type.value}, ${x+1}>, ${x}>;
  ${v.mainStart([x,x,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${x} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${x}u + local_id.x;
    let input_row = workgroup_id_x * ${x}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${S.getByIndices(`${S.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${x}u + local_id.x;
    let output_row = workgroup_id_y * ${x}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${$.setByIndices(`${$.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let v=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(l[1]/x),y:Math.ceil(l[0]/x)},programUniforms:[{type:12,data:v},...ee(s,l)]}},getShaderSource:d}}return d=x=>{let v=P("a",r,s.length),S=Q("output",r,l.length);return`
  ${x.registerUniform("output_size","u32").declareVariables(v,S)}

  ${Kl(n,i,v,S)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${S.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${S.setByOffset("global_idx",v.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let x=O.size(a);return{outputs:[{dims:a,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ee(s,l)]}},getShaderSource:d}},df=(e,t)=>{Hl(e.inputs,t.perm),e.compute(De(e.inputs[0],t.perm))},cf=e=>me({perm:e.perm})}),Xl,Ql,Jl,eu,tu,ru,iu,nu,au,su,We,pf,ff,hf,mf,gf,yf,xf,bf,wf,vf,ow=V(()=>{re(),ne(),ae(),Ba(),$t(),Xl={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Ql={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Jl={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},eu={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},tu=(e,t)=>{let r=[];for(let i=t-e;i<t;++i)r.push(i);return r},ru=(e,t)=>{let r=[],i=e.length;for(let a=0;a<i;a++)t.indexOf(a)===-1&&r.push(e[a]);let n=t.map(a=>e[a]);return[r,n]},iu=(e,t)=>{let r=e.length+t.length,i=[],n=0;for(let a=0;a<r;a++)t.indexOf(a)===-1?i.push(e[n++]):i.push(1);return i},nu=(e,t)=>{for(let r=0;r<e.length;++r)if(e[e.length-r-1]!==t-1-r)return!1;return!0},au=(e,t)=>{let r=[];if(!nu(e,t)){for(let i=0;i<t;++i)e.indexOf(i)===-1&&r.push(i);e.forEach(i=>r.push(i))}return r},su=(e,t,r,i,n,a,s)=>{let l=r[0].dims,u=O.size(a),d=O.size(s),p=P("_A",r[0].dataType,l),f=Q("output",n,a),h=64;u===1&&(h=256);let b=`
          var<workgroup> aBestValues : array<f32, ${h}>;
       `,x=v=>`
        ${v.registerUniform("reduceSize","u32").declareVariables(p,f)}
        ${b}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${v.mainStart(h)}

          let outputIndex = global_idx / ${h};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Jl[i]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${h}) {
           let candidate = f32(${p.getByOffset("offset + k")});
           bestValue = ${Xl[i]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${h}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Ql[i]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${f.setByOffset("outputIndex",`${i==="mean"?`${f.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${f.type.storage}(${eu[i]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${h}`,inputDependencies:["type"]},getShaderSource:x,getRunData:()=>({outputs:[{dims:a,dataType:n}],dispatchGroup:{x:u},programUniforms:[{type:12,data:d}]})}},We=(e,t,r,i)=>{let n=e.inputs.length===1?r:na(e.inputs,r),a=n.axes;a.length===0&&!n.noopWithEmptyAxes&&(a=e.inputs[0].dims.map((b,x)=>x));let s=O.normalizeAxes(a,e.inputs[0].dims.length),l=s,u=e.inputs[0],d=au(l,e.inputs[0].dims.length);d.length>0&&(u=e.compute(De(e.inputs[0],d),{inputs:[0],outputs:[-1]})[0],l=tu(l.length,u.dims.length));let[p,f]=ru(u.dims,l),h=p;n.keepDims&&(h=iu(p,s)),e.compute(su(t,n.cacheKey,[u],i,e.inputs[0].dataType,h,f),{inputs:[u]})},pf=(e,t)=>{We(e,"ReduceMeanShared",t,"mean")},ff=(e,t)=>{We(e,"ReduceL1Shared",t,"l1")},hf=(e,t)=>{We(e,"ReduceL2Shared",t,"l2")},mf=(e,t)=>{We(e,"ReduceLogSumExpShared",t,"logSumExp")},gf=(e,t)=>{We(e,"ReduceMaxShared",t,"max")},yf=(e,t)=>{We(e,"ReduceMinShared",t,"min")},xf=(e,t)=>{We(e,"ReduceProdShared",t,"prod")},bf=(e,t)=>{We(e,"ReduceSumShared",t,"sum")},wf=(e,t)=>{We(e,"ReduceSumSquareShared",t,"sumSquare")},vf=(e,t)=>{We(e,"ReduceLogSumShared",t,"logSum")}}),Ve,ou,mi,na,Ge,lu,uu,du,cu,pu,fu,hu,mu,gu,yu,He,_f,$f,kf,Sf,Tf,If,Ef,Cf,Nf,zf,Ba=V(()=>{re(),ne(),ke(),ae(),ow(),Ve=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},ou=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],mi=(e,t,r,i,n,a,s=!1,l=!1)=>{let u=[],d=r[0].dims,p=d.length,f=O.normalizeAxes(n,p),h=!l&&f.length===0;d.forEach((v,S)=>{h||f.indexOf(S)>=0?s&&u.push(1):u.push(v)});let b=u.length,x=O.size(u);return{name:e,shaderCache:t,getShaderSource:v=>{let S=[],$=P("_A",r[0].dataType,p),w=Q("output",a,b),I=i($,w,f),T=I[2];for(let C=0,N=0;C<p;C++)h||f.indexOf(C)>=0?(s&&N++,T=`for(var j${C}: u32 = 0; j${C} < ${d[C]}; j${C}++) {
                  ${I[2].includes("last_index")?`let last_index = j${C};`:""}
                  ${$.indicesSet("input_indices",C,`j${C}`)}
                  ${T}
                }`):(S.push(`${$.indicesSet("input_indices",C,w.indicesGet("output_indices",N))};`),N++);return`

        ${v.registerUniform("output_size","u32").declareVariables($,w)}

        ${v.mainStart()}
          ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${$.type.indices};
          let output_indices = ${w.offsetToIndices("global_idx")};

          ${S.join(`
`)}
          ${I[0]}       // init ops for reduce max/min
          ${I[1]}
          ${T}
          ${I[3]}
          ${I.length===4?w.setByOffset("global_idx","value"):I.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:u,dataType:a}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:[{type:12,data:x},...ee(d,u)]})}},na=(e,t)=>{let r=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(i=>r.push(Number(i))),me({axes:r,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Ge=(e,t,r,i)=>{let n=e.inputs,a=n.length===1?r:na(n,r);e.compute(mi(t,{hint:a.cacheKey,inputDependencies:["rank"]},[n[0]],a.noopWithEmptyAxes&&a.axes.length===0?ou:i,a.axes,n[0].dataType,a.keepDims,a.noopWithEmptyAxes),{inputs:[0]})},lu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceLogSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,"value = log(value);"])},uu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceL1",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += abs(${r.getByIndices("input_indices")});`,""])},du=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceL2",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},cu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceLogSumExp",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += exp(${r.getByIndices("input_indices")});`,"value = log(value);"])},pu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceMax",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(r.indicesSet("input_indices",s,0));return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = max(value, ${r.getByIndices("input_indices")});`,""]})},fu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceMean",t,(r,i,n)=>{let a=1;for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&(a*=e.inputs[0].dims[s]);return["var sum = f32(0);","",`sum += f32(${r.getByIndices("input_indices")});`,`let value = ${i.type.value}(sum / ${a});`]})},hu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceMin",t,(r,i,n)=>{let a=[];for(let s=0;s<r.rank;s++)(n.indexOf(s)>=0||n.length===0)&&a.push(`input_indices[${s}] = 0;`);return[`${a.join(`
`)}`,`var value = ${r.getByIndices("input_indices")};`,`value = min(value, ${r.getByIndices("input_indices")});`,""]})},mu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceProd",t,(r,i)=>[`var value = ${i.type.storage}(1);`,"",`value *= ${r.getByIndices("input_indices")};`,""])},gu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceSum",t,(r,i)=>[`var value = ${i.type.storage}(0);`,"",`value += ${r.getByIndices("input_indices")};`,""])},yu=(e,t)=>{Ve(e.inputs),Ge(e,"ReduceSumSquare",t,(r,i)=>[`var t = ${i.type.value}(0); var value = ${i.type.value}(0);`,"",`t = ${r.getByIndices("input_indices")}; value += t * t;`,""])},He=(e,t,r)=>{if(t.length===0)return r;let i=1,n=1;for(let a=0;a<t.length;a++)t.indexOf(a)===-1?i*=e[a]:n*=e[a];return n<32&&i>1024},_f=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?fu(e,t):pf(e,t)},$f=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?uu(e,t):ff(e,t)},kf=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?du(e,t):hf(e,t)},Sf=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?cu(e,t):mf(e,t)},Tf=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?pu(e,t):gf(e,t)},If=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?hu(e,t):yf(e,t)},Ef=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?mu(e,t):xf(e,t)},Cf=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?gu(e,t):bf(e,t)},Nf=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?yu(e,t):wf(e,t)},zf=(e,t)=>{He(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?lu(e,t):vf(e,t)}}),wn,Af,jf,aa,lw=V(()=>{re(),ke(),Ba(),wn=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},Af=(e,t)=>{wn(e.inputs);let r=(i,n,a)=>{let s=[];for(let l=0;l<i.rank;l++)(a.indexOf(l)>=0||a.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(mi("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},jf=(e,t)=>{wn(e.inputs);let r=(i,n,a)=>{let s=[];for(let l=0;l<i.rank;l++)(a.indexOf(l)>=0||a.length===0)&&s.push(`input_indices[${l}] = 0;`);return[`${s.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${i.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${i.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",n.setByOffset("global_idx","best_index")]};e.compute(mi("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],r,[t.axis],7,t.keepDims),{inputs:[0]})},aa=e=>me(e)}),xu,Yr,bu,wu,vu,kr,_u,Mf,Pa=V(()=>{re(),ne(),Ra(),ae(),xu=(e,t)=>{let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4],l=e[5];if(s&&l)throw new Error("Attention cannot have both past and attention_bias");if(r.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let u=r.dims[0],d=r.dims[1],p=r.dims[2];if(n.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(i.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(i.dims[0]!==p)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(n.dims[0]!==i.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let f=n.dims[0]/3,h=f,b=h;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let I of t.qkvHiddenSizes)if(I%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");f=t.qkvHiddenSizes[0],h=t.qkvHiddenSizes[1],b=t.qkvHiddenSizes[2]}let x=d;if(f!==h)throw new Error("qkv_hidden_sizes first element should be same as the second");if(n.dims[0]!==f+h+b)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let v=0;if(s){if(h!==b)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(s.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(s.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(s.dims[1]!==u)throw new Error('Input "past" second dimension must be batch_size');if(s.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(s.dims[4]!==h/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(v=s.dims[3])}let S=x+v,$=-1,w=0;if(a)throw new Error("Mask not supported");if(s)throw new Error("past is not supported");if(l){if(l.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(l.dims[0]!==u||l.dims[1]!==t.numHeads||l.dims[2]!==d||l.dims[3]!==S)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:u,sequenceLength:d,pastSequenceLength:v,kvSequenceLength:x,totalSequenceLength:S,maxSequenceLength:$,inputHiddenSize:p,hiddenSize:f,vHiddenSize:b,headSize:Math.floor(f/t.numHeads),vHeadSize:Math.floor(b/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},Yr=(e,t,r)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e?.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${r?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,bu=(e,t,r,i,n,a,s,l)=>{let u=$e(s?1:a),d=64,p=a/u;p<d&&(d=32);let f=Math.ceil(a/u/d),h=[{type:12,data:t},{type:12,data:r},{type:12,data:i},{type:12,data:n},{type:12,data:p},{type:12,data:f}],b=Ie(e.dataType,u),x=Ne(1,u),v=["type"];s&&v.push("type"),l&&v.push("type");let S=$=>{let w=Q("x",e.dataType,e.dims,u),I=[w],T=s?P("seq_lens",s.dataType,s.dims):void 0;T&&I.push(T);let C=l?P("total_sequence_length_input",l.dataType,l.dims):void 0;C&&I.push(C);let N=Ne(e.dataType),z=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${d}>;
  var<workgroup> thread_sum: array<f32, ${d}>;
  ${$.registerUniforms(z).declareVariables(...I)}
  ${$.mainStart([d,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${Yr(T,C,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${d}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${s?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${x}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${x}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(u){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${d}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${x}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${x}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(u){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${u}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${d}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${w.type.value}(${N}(1.0) / ${N}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${x}(x[offset + i]);
        x[offset + i] = ${w.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${s?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${w.type.value}(${N}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${d};${b};${u}`,inputDependencies:v},getShaderSource:S,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:n,z:t*r},programUniforms:h})}},wu=(e,t,r,i,n,a,s,l,u)=>{let d=s+a.kvSequenceLength,p=[a.batchSize,a.numHeads,a.sequenceLength,d],f=e>1&&i,h=a.kvNumHeads?a.kvNumHeads:a.numHeads,b=f?[a.batchSize,h,d,a.headSize]:void 0,x=a.nReps?a.nReps:1,v=a.scale===0?1/Math.sqrt(a.headSize):a.scale,S=$e(a.headSize),$=a.headSize/S,w=12,I={x:Math.ceil(d/w),y:Math.ceil(a.sequenceLength/w),z:a.batchSize*a.numHeads},T=[{type:12,data:a.sequenceLength},{type:12,data:$},{type:12,data:d},{type:12,data:a.numHeads},{type:12,data:a.headSize},{type:1,data:v},{type:12,data:s},{type:12,data:a.kvSequenceLength},{type:12,data:x}],C=f&&i&&O.size(i.dims)>0,N=["type","type"];C&&N.push("type"),n&&N.push("type"),l&&N.push("type"),u&&N.push("type");let z=[{dims:p,dataType:t.dataType,gpuDataType:0}];f&&z.push({dims:b,dataType:t.dataType,gpuDataType:0});let _=j=>{let R=P("q",t.dataType,t.dims,S),H=P("key",r.dataType,r.dims,S),W=[R,H];if(C){let te=P("past_key",i.dataType,i.dims,S);W.push(te)}n&&W.push(P("attention_bias",n.dataType,n.dims));let B=l?P("seq_lens",l.dataType,l.dims):void 0;B&&W.push(B);let M=u?P("total_sequence_length_input",u.dataType,u.dims):void 0;M&&W.push(M);let L=Q("output",t.dataType,p),F=[L];f&&F.push(Q("present_key",t.dataType,b,S));let Y=Ne(1,S),X=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${w}u;

  var<workgroup> tileQ: array<${R.type.storage}, ${w*w}>;
  var<workgroup> tileK: array<${R.type.storage}, ${w*w}>;
  ${j.registerUniforms(X).declareVariables(...W,...F)}
  ${j.mainStart([w,w,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${x===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${x===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${Yr(B,M,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${C&&f?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${f?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${Y}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${C&&f?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${f?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${Y}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(S){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${S}`)}})()};
        output[outputIdx] = ${L.type.value} (sum * uniforms.alpha) + ${n?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${S};${n!==void 0};${i!==void 0};${e}`,inputDependencies:N},getRunData:()=>({outputs:z,dispatchGroup:I,programUniforms:T}),getShaderSource:_}},vu=(e,t,r,i,n,a,s=void 0,l=void 0)=>{let u=a+n.kvSequenceLength,d=n.nReps?n.nReps:1,p=n.vHiddenSize*d,f=e>1&&i,h=n.kvNumHeads?n.kvNumHeads:n.numHeads,b=f?[n.batchSize,h,u,n.headSize]:void 0,x=[n.batchSize,n.sequenceLength,p],v=12,S={x:Math.ceil(n.vHeadSize/v),y:Math.ceil(n.sequenceLength/v),z:n.batchSize*n.numHeads},$=[{type:12,data:n.sequenceLength},{type:12,data:u},{type:12,data:n.vHeadSize},{type:12,data:n.numHeads},{type:12,data:n.headSize},{type:12,data:p},{type:12,data:a},{type:12,data:n.kvSequenceLength},{type:12,data:d}],w=f&&i&&O.size(i.dims)>0,I=["type","type"];w&&I.push("type"),s&&I.push("type"),l&&I.push("type");let T=[{dims:x,dataType:t.dataType,gpuDataType:0}];f&&T.push({dims:b,dataType:t.dataType,gpuDataType:0});let C=N=>{let z=P("probs",t.dataType,t.dims),_=P("v",r.dataType,r.dims),j=[z,_];w&&j.push(P("past_value",i.dataType,i.dims));let R=s?P("seq_lens",s.dataType,s.dims):void 0;s&&j.push(R);let H=l?P("total_sequence_length_input",l.dataType,l.dims):void 0;l&&j.push(H);let W=[Q("output",t.dataType,x)];f&&W.push(Q("present_value",t.dataType,b));let B=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${v}u;
  var<workgroup> tileQ: array<${z.type.value}, ${v*v}>;
  var<workgroup> tileV: array<${z.type.value}, ${v*v}>;
  ${N.registerUniforms(B).declareVariables(...j,...W)}
  ${N.mainStart([v,v,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${d===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${d===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${Yr(R,H,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${w&&f?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${f?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${z.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${w&&f?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${f?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${i!==void 0};${e}`,inputDependencies:I},getRunData:()=>({outputs:T,dispatchGroup:S,programUniforms:$}),getShaderSource:C}},kr=(e,t,r,i,n,a,s,l,u,d,p=void 0,f=void 0)=>{let h=Math.min(e.outputCount,1+(s?1:0)+(l?1:0)),b=h>1?d.pastSequenceLength:0,x=b+d.kvSequenceLength,v=u&&O.size(u.dims)>0?u:void 0,S=[t,r];h>1&&s&&O.size(s.dims)>0&&S.push(s),v&&S.push(v),p&&S.push(p),f&&S.push(f);let $=e.compute(wu(h,t,r,s,v,d,b,p,f),{inputs:S,outputs:h>1?[-1,1]:[-1]})[0];e.compute(bu($,d.batchSize,d.numHeads,b,d.sequenceLength,x,p,f),{inputs:p&&f?[$,p,f]:[$],outputs:[]});let w=[$,i];h>1&&l&&O.size(l.dims)>0&&w.push(l),p&&w.push(p),f&&w.push(f),e.compute(vu(h,$,i,l,d,b,p,f),{inputs:w,outputs:h>1?[0,2]:[0]})},_u=(e,t)=>{let r=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],i=t.sequenceLength,n=t.inputHiddenSize,a=t.headSize,s=12,l={x:Math.ceil(t.headSize/s),y:Math.ceil(t.sequenceLength/s),z:t.batchSize*t.numHeads},u=[e.inputs[0],e.inputs[1],e.inputs[2]],d=[{type:12,data:i},{type:12,data:n},{type:12,data:a},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],p=f=>{let h=Q("output_q",u[0].dataType,r),b=Q("output_k",u[0].dataType,r),x=Q("output_v",u[0].dataType,r),v=P("input",u[0].dataType,u[0].dims),S=P("weight",u[1].dataType,u[1].dims),$=P("bias",u[2].dataType,u[2].dims),w=v.type.storage,I=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${s}u;
  var<workgroup> tileInput: array<${w}, ${s*s}>;
  var<workgroup> tileWeightQ: array<${w}, ${s*s}>;
  var<workgroup> tileWeightK: array<${w}, ${s*s}>;
  var<workgroup> tileWeightV: array<${w}, ${s*s}>;
  ${f.registerUniforms(I).declareVariables(v,S,$,h,b,x)}
  ${f.mainStart([s,s,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${w}(0);
    var valueK = ${w}(0);
    var valueV = ${w}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:r,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:l,programUniforms:d}),getShaderSource:p},{inputs:u,outputs:[-1,-1,-1]})},Mf=(e,t)=>{let r=xu(e.inputs,t),[i,n,a]=_u(e,r);return kr(e,i,n,a,e.inputs[4],void 0,void 0,void 0,e.inputs[5],r)}}),$u,ku,Su,Of,uw=V(()=>{Ue(),re(),ne(),ke(),ae(),$u=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let r=(i,n,a)=>{let s=n.length;if(s!==i.length)throw new Error(`${a}: num dimensions != ${s}`);n.forEach((l,u)=>{if(l!==i[u])throw new Error(`${a}: dim[${u}] do not match`)})};if(e[0].dims.length>1){let i=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);r(e[1].dims,i,"Invalid input scale"),r(e[2].dims,i,"Invalid input B"),r(e[3].dims,i,"Invalid input mean"),r(e[4].dims,i,"Invalid input var")}else r(e[1].dims,[1],"Invalid input scale"),r(e[2].dims,[1],"Invalid input B"),r(e[3].dims,[1],"Invalid input mean"),r(e[4].dims,[1],"Invalid input var")},ku=(e,t)=>{let{epsilon:r,spatial:i,format:n}=t,a=e[0].dims,s=i?$e(a[a.length-1]):1,l=n==="NHWC"&&a.length>1?s:1,u=O.size(a)/s,d=i,p=d?a.length:a,f=P("x",e[0].dataType,e[0].dims,s),h=P("scale",e[1].dataType,e[1].dims,l),b=P("bias",e[2].dataType,e[2].dims,l),x=P("inputMean",e[3].dataType,e[3].dims,l),v=P("inputVar",e[4].dataType,e[4].dims,l),S=Q("y",e[0].dataType,p,s),$=()=>{let I="";if(i)I=`let cOffset = ${a.length===1?"0u":n==="NHWC"?`outputIndices[${a.length-1}] / ${s}`:"outputIndices[1]"};`;else if(n==="NCHW")I=`
            ${S.indicesSet("outputIndices","0","0")}
            let cOffset = ${S.indicesToOffset("outputIndices")};`;else{I=`var cIndices = ${h.type.indices}(0);
                       cIndices[0] = outputIndices[${a.length-1}];`;for(let T=1;T<h.rank;T++)I+=`cIndices[${T}] = outputIndices[${T}];`;I+=`let cOffset = ${h.indicesToOffset("cIndices")};`}return I},w=I=>`
  const epsilon = ${r};
  ${I.registerUniform("outputSize","u32").declareVariables(f,h,b,x,v,S)}
  ${I.mainStart()}
  ${I.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${S.offsetToIndices(`global_idx * ${s}`)};
    ${$()}
    let scale = ${h.getByOffset("cOffset")};
    let bias = ${b.getByOffset("cOffset")};
    let inputMean = ${x.getByOffset("cOffset")};
    let inputVar = ${v.getByOffset("cOffset")};
    let x = ${f.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${S.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${i}_${s}`,inputDependencies:d?["rank","type","type","type","type"]:void 0},getShaderSource:w,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d?[{type:12,data:u},...ee(a)]:[{type:12,data:u}]})}},Su=e=>me(e),Of=(e,t)=>{let{inputs:r,outputCount:i}=e,n=Su({...t,outputCount:i});if(ve.webgpu.validateInputContent&&$u(r,n),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(ku(r,n))}}),Tu,Iu,Rf,dw=V(()=>{ne(),ae(),Tu=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},Iu=e=>{let t=e[0].dims,r=e[0].dims[2],i=O.size(t)/4,n=e[0].dataType,a=P("input",n,t,4),s=P("bias",n,[r],4),l=P("residual",n,t,4),u=Q("output",n,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(i/64)}}),getShaderSource:d=>`
  const channels = ${r}u / 4;
  ${d.declareVariables(a,s,l,u)}

  ${d.mainStart()}
    ${d.guardAgainstOutOfBoundsWorkgroupSizes(i)}
    let value = ${a.getByOffset("global_idx")}
      + ${s.getByOffset("global_idx % channels")} + ${l.getByOffset("global_idx")};
    ${u.setByOffset("global_idx","value")}
  }`}},Rf=e=>{Tu(e.inputs),e.compute(Iu(e.inputs))}}),Eu,he,Df,Bf,Pf,Lf,Uf,qf,Wf,Vf,Gf,Cu,Hf,Ff,Kf,Zf,br,Yf,ai,Xf,Qf,Jf,eh,th,rh,ih,nh,ah,sh,oh,lh,uh,dh,ch,ph,vn,fh,sa,oa,hh,mh,gh,Nu,zu,yh,La=V(()=>{re(),ne(),ke(),ae(),Eu=(e,t,r,i,n,a,s)=>{let l=Math.ceil(t/4),u="";typeof n=="string"?u=`${n}(a)`:u=n("a");let d=P("inputData",r,[l],4),p=Q("outputData",i,[l],4),f=[{name:"vec_size",type:"u32"}];return s&&f.push(...s),`
      ${e.registerUniforms(f).declareVariables(d,p)}

  ${a??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${d.getByOffset("global_idx")};
    ${p.setByOffset("global_idx",u)}
  }`},he=(e,t,r,i,n,a=e.dataType,s,l)=>{let u=[{type:12,data:Math.ceil(O.size(e.dims)/4)}];return s&&u.push(...s),{name:t,shaderCache:{hint:n,inputDependencies:["type"]},getShaderSource:d=>Eu(d,O.size(e.dims),e.dataType,a,r,i,l),getRunData:d=>({outputs:[{dims:e.dims,dataType:a}],dispatchGroup:{x:Math.ceil(O.size(d[0].dims)/64/4)},programUniforms:u})}},Df=e=>{e.compute(he(e.inputs[0],"Abs","abs"))},Bf=e=>{e.compute(he(e.inputs[0],"Acos","acos"))},Pf=e=>{e.compute(he(e.inputs[0],"Acosh","acosh"))},Lf=e=>{e.compute(he(e.inputs[0],"Asin","asin"))},Uf=e=>{e.compute(he(e.inputs[0],"Asinh","asinh"))},qf=e=>{e.compute(he(e.inputs[0],"Atan","atan"))},Wf=e=>{e.compute(he(e.inputs[0],"Atanh","atanh"))},Vf=e=>me(e),Gf=(e,t)=>{let r;switch(t.to){case 10:r="vec4<f16>";break;case 1:r="vec4<f32>";break;case 12:r="vec4<u32>";break;case 6:r="vec4<i32>";break;case 9:r="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(he(e.inputs[0],"Cast",r,void 0,t.cacheKey,t.to))},Cu=e=>{let t,r,i=e.length>=2&&e[1].data!==0,n=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=i?e[1].getFloat32Array()[0]:-34028234663852886e22,r=n?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=i?e[1].getUint16Array()[0]:64511,r=n?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return me({min:t,max:r})},Hf=(e,t)=>{let r=t||Cu(e.inputs),i=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Clip",n=>`clamp(${n}, vec4<${i}>(uniforms.min), vec4<${i}>(uniforms.max))`,void 0,r.cacheKey,void 0,[{type:e.inputs[0].dataType,data:r.min},{type:e.inputs[0].dataType,data:r.max}],[{name:"min",type:i},{name:"max",type:i}]),{inputs:[0]})},Ff=e=>{e.compute(he(e.inputs[0],"Ceil","ceil"))},Kf=e=>{e.compute(he(e.inputs[0],"Cos","cos"))},Zf=e=>{e.compute(he(e.inputs[0],"Cosh","cosh"))},br=e=>me(e),Yf=(e,t)=>{let r=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Elu",i=>`elu_vf32(${i})`,`
  const elu_alpha_ = ${r}(${t.alpha});

  fn elu_f32(a: ${r}) -> ${r} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${r}>) -> vec4<${r}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},ai=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,Xf=e=>{let t=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Erf",r=>`erf_vf32(${r})`,ai(t)))},Qf=e=>{e.compute(he(e.inputs[0],"Exp","exp"))},Jf=e=>{e.compute(he(e.inputs[0],"Floor","floor"))},eh=e=>{let t=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Gelu",r=>`0.5 * ${r} * (1.0 + erf_vf32(${r} * 0.7071067811865475))`,ai(t)))},th=(e,t)=>{let r=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"LeakyRelu",i=>`select(leaky_relu_alpha_ * ${i}, ${i}, ${i} >= vec4<${r}>(0.0))`,`const leaky_relu_alpha_ = ${r}(${t.alpha});`,t.cacheKey))},rh=e=>{e.compute(he(e.inputs[0],"Not",t=>`!${t}`))},ih=e=>{e.compute(he(e.inputs[0],"Neg",t=>`-${t}`))},nh=e=>{e.compute(he(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},ah=e=>{let t=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"Relu",r=>`select(vec4<${t}>(0.0), ${r}, ${r} > vec4<${t}>(0.0))`))},sh=e=>{e.compute(he(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},oh=e=>me(e),lh=(e,t)=>{let r=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"HardSigmoid",i=>`max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), ${t.alpha} * ${i} + vec4<${r}>(${t.beta})))`,void 0,t.cacheKey))},uh=e=>{e.compute(he(e.inputs[0],"Sin","sin"))},dh=e=>{e.compute(he(e.inputs[0],"Sinh","sinh"))},ch=e=>{e.compute(he(e.inputs[0],"Sqrt","sqrt"))},ph=e=>{e.compute(he(e.inputs[0],"Tan","tan"))},vn=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,fh=e=>{e.compute(he(e.inputs[0],"Tanh",vn))},sa=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${vn("v")};
}
`,oa=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,hh=e=>{let t=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"FastGelu",oa,sa(t),void 0,e.inputs[0].dataType))},mh=(e,t)=>{let r=Ne(e.inputs[0].dataType);return e.compute(he(e.inputs[0],"ThresholdedRelu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${r}>(${t.alpha});`,t.cacheKey)),0},gh=e=>{e.compute(he(e.inputs[0],"Log","log"))},Nu=(e,t)=>`
const alpha = vec4<${e}>(${t});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,zu=e=>`quick_gelu_impl(${e})`,yh=(e,t)=>{let r=Ne(e.inputs[0].dataType);e.compute(he(e.inputs[0],"QuickGelu",zu,Nu(r,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),Au,ju,xh,cw=V(()=>{ne(),ae(),La(),Au=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},ju=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let r=P("input",e[0].dataType,e[0].dims,4),i=P("bias",e[0].dataType,[e[0].dims[2]],4),n=Q("output",e[0].dataType,t,4),a=O.size(t)/4,s=Ie(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)}}),getShaderSource:l=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${l.declareVariables(r,i,n)}

  ${ai(s)}

  ${l.mainStart()}
    ${l.guardAgainstOutOfBoundsWorkgroupSizes(a)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${n.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},xh=e=>{Au(e.inputs),e.compute(ju(e.inputs))}}),Mu,Ou,Fe,bh,wh,vh,_h,$h,kh,Sh,Th,Ih,Eh,pw=V(()=>{re(),ne(),ae(),Mu=(e,t,r,i,n,a,s,l,u,d,p,f)=>{let h,b;typeof l=="string"?h=b=(w,I)=>`${l}((${w}),(${I}))`:typeof l=="function"?h=b=l:(h=l.scalar,b=l.vector);let x=Q("outputData",p,i.length,4),v=P("aData",u,t.length,4),S=P("bData",d,r.length,4),$;if(n)if(a){let w=O.size(t)===1,I=O.size(r)===1,T=t.length>0&&t[t.length-1]%4===0,C=r.length>0&&r[r.length-1]%4===0;w||I?$=x.setByOffset("global_idx",b(w?`${v.type.value}(${v.getByOffset("0")}.x)`:v.getByOffset("global_idx"),I?`${S.type.value}(${S.getByOffset("0")}.x)`:S.getByOffset("global_idx"))):$=`
            let outputIndices = ${x.offsetToIndices("global_idx * 4u")};
            let offsetA = ${v.broadcastedIndicesToOffset("outputIndices",x)};
            let offsetB = ${S.broadcastedIndicesToOffset("outputIndices",x)};
            ${x.setByOffset("global_idx",b(s||T?v.getByOffset("offsetA / 4u"):`${v.type.value}(${v.getByOffset("offsetA / 4u")}[offsetA % 4u])`,s||C?S.getByOffset("offsetB / 4u"):`${S.type.value}(${S.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else $=x.setByOffset("global_idx",b(v.getByOffset("global_idx"),S.getByOffset("global_idx")));else{if(!a)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let w=(I,T,C="")=>{let N=`aData[indexA${T}][componentA${T}]`,z=`bData[indexB${T}][componentB${T}]`;return`
            let outputIndices${T} = ${x.offsetToIndices(`global_idx * 4u + ${T}u`)};
            let offsetA${T} = ${v.broadcastedIndicesToOffset(`outputIndices${T}`,x)};
            let offsetB${T} = ${S.broadcastedIndicesToOffset(`outputIndices${T}`,x)};
            let indexA${T} = offsetA${T} / 4u;
            let indexB${T} = offsetB${T} / 4u;
            let componentA${T} = offsetA${T} % 4u;
            let componentB${T} = offsetB${T} % 4u;
            ${I}[${T}] = ${C}(${h(N,z)});
          `};p===9?$=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:$=`
            ${w("outputData[global_idx]",0)}
            ${w("outputData[global_idx]",1)}
            ${w("outputData[global_idx]",2)}
            ${w("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(v,S,x)}

        ${f??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${$}
      }`},Ou=(e,t,r,i,n,a,s=r.dataType)=>{let l=r.dims.map(Number),u=i.dims.map(Number),d=!O.areEqual(l,u),p=l,f=O.size(l),h=!1,b=!1,x=[d];if(d){let v=Xt.calcShape(l,u,!1);if(!v)throw new Error("Can't perform binary op on the given tensors");p=v.slice(),f=O.size(p);let S=O.size(l)===1,$=O.size(u)===1,w=l.length>0&&l[l.length-1]%4===0,I=u.length>0&&u[u.length-1]%4===0;x.push(S),x.push($),x.push(w),x.push(I);let T=1;for(let C=1;C<p.length;C++){let N=l[l.length-C],z=u[u.length-C];if(N===z)T*=N;else break}T%4===0?(b=!0,h=!0):(S||$||w||I)&&(h=!0)}else h=!0;return x.push(h),{name:e,shaderCache:{hint:t+x.map(v=>v.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:v=>Mu(v,l,u,p,h,d,b,n,r.dataType,i.dataType,s,a),getRunData:()=>({outputs:[{dims:p,dataType:s}],dispatchGroup:{x:Math.ceil(f/64/4)},programUniforms:[{type:12,data:Math.ceil(O.size(p)/4)},...ee(l,u,p)]})}},Fe=(e,t,r,i,n,a)=>{e.compute(Ou(t,n??"",e.inputs[0],e.inputs[1],r,i,a))},bh=e=>{Fe(e,"Add",(t,r)=>`${t}+${r}`)},wh=e=>{Fe(e,"Div",(t,r)=>`${t}/${r}`)},vh=e=>{Fe(e,"Equal",{scalar:(t,r)=>`u32(${t}==${r})`,vector:(t,r)=>`vec4<u32>(${t}==${r})`},void 0,void 0,9)},_h=e=>{Fe(e,"Mul",(t,r)=>`${t}*${r}`)},$h=e=>{let t=P("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Fe(e,"Pow",{scalar:(r,i)=>`pow_custom(${r},${i})`,vector:(r,i)=>`pow_vector_custom(${r},${i})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},kh=e=>{Fe(e,"Sub",(t,r)=>`${t}-${r}`)},Sh=e=>{Fe(e,"Greater",{scalar:(t,r)=>`u32(${t}>${r})`,vector:(t,r)=>`vec4<u32>(${t}>${r})`},void 0,void 0,9)},Th=e=>{Fe(e,"Less",{scalar:(t,r)=>`u32(${t}<${r})`,vector:(t,r)=>`vec4<u32>(${t}<${r})`},void 0,void 0,9)},Ih=e=>{Fe(e,"GreaterOrEqual",{scalar:(t,r)=>`u32(${t}>=${r})`,vector:(t,r)=>`vec4<u32>(${t}>=${r})`},void 0,void 0,9)},Eh=e=>{Fe(e,"LessOrEqual",{scalar:(t,r)=>`u32(${t}<=${r})`,vector:(t,r)=>`vec4<u32>(${t}<=${r})`},void 0,void 0,9)}}),Ru,Du,Bu,Pu,Ch,Nh,fw=V(()=>{re(),ne(),ke(),ae(),Ru=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let r=0,i=e[r],n=i.dataType,a=i.dims.length;e.forEach((s,l)=>{if(l!==r){if(s.dataType!==n)throw new Error("input tensors should be one type");if(s.dims.length!==a)throw new Error("input tensors should have the same shape");s.dims.forEach((u,d)=>{if(d!==t&&u!==i.dims[d])throw new Error("non concat dimensions must match")})}})},Du=(e,t)=>`
  fn calculateInputIndex(index: u32) -> u32 {
    let sizeInConcatAxis = array<u32, ${e}u>(${t});
    for (var i: u32 = 0u; i < ${e}; i += 1u ) {
      if (index < sizeInConcatAxis[i]) {
        return i;
      }
    }
    return ${e}u;
  }`,Bu=(e,t)=>{let r=e.length,i=[];for(let n=0;n<r;++n){let a=t.setByOffset("global_idx",e[n].getByIndices("indices"));r===1?i.push(a):n===0?i.push(`if (inputIndex == ${n}u) { ${a} }`):n===r-1?i.push(`else { ${a} }`):i.push(`else if (inputIndex == ${n}) { ${a} }`)}return i.join(`
`)},Pu=(e,t,r,i)=>{let n=O.size(r),a=new Array(e.length),s=new Array(e.length),l=0,u=[],d=[],p=[{type:12,data:n}];for(let v=0;v<e.length;++v)l+=e[v].dims[t],a[v]=l,d.push(e[v].dims.length),s[v]=P(`input${v}`,i,d[v]),u.push("rank"),p.push({type:12,data:a[v]});for(let v=0;v<e.length;++v)p.push(...ee(e[v].dims));p.push(...ee(r));let f=Q("output",i,r.length),h=f.indicesGet("indices",t),b=Array.from(Array(a.length).keys()).map(v=>`uniforms.sizeInConcatAxis${v}`).join(","),x=v=>`

  ${(()=>{v.registerUniform("outputSize","u32");for(let S=0;S<e.length;S++)v.registerUniform(`sizeInConcatAxis${S}`,"u32");return v.declareVariables(...s,f)})()}

  ${Du(a.length,b)}

  ${v.mainStart()}
    ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    var indices = ${f.offsetToIndices("global_idx")};

    let inputIndex = calculateInputIndex(${h});
    if (inputIndex != 0u) {
      let sizeInConcatAxis = array<u32, ${a.length}u>(${b});
      ${h} -= sizeInConcatAxis[inputIndex - 1u];
    }

    ${Bu(s,f)}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:r,dataType:i}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:p}),getShaderSource:x}},Ch=(e,t)=>{let r=e.inputs,i=r[0].dims,n=O.normalizeAxis(t.axis,i.length);Ru(r,n);let a=i.slice();a[n]=r.reduce((l,u)=>l+(u.dims.length>n?u.dims[n]:0),0);let s=r.filter(l=>O.size(l.dims)>0);e.compute(Pu(s,n,a,r[0].dataType),{inputs:s})},Nh=e=>me({axis:e.axis})}),Bt,Pt,Lt,Ua,qt=V(()=>{re(),ne(),Bt=(e,t,r="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${r}(uniforms.clip_min)), ${t}(${r}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${r}(uniforms.alpha) * value + ${r}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${r}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},Pt=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},Lt=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},Ua=e=>{let t=e?.activation||"";if(t==="HardSigmoid"){let[r,i]=e?.activation_params||[.2,.5];return{activation:t,alpha:r,beta:i}}else if(t==="Clip"){let[r,i]=e?.activation_params||[tf,rf];return{activation:t,clipMax:i,clipMin:r}}else if(t==="LeakyRelu"){let[r]=e?.activation_params||[.01];return{activation:t,alpha:r}}return{activation:t}}}),Ce,zh,qa=V(()=>{Ce=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},zh=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),Ah,hw=V(()=>{Ah=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),_r,Wa,Va=V(()=>{re(),ne(),ae(),qt(),_r=(e,t,r,i,n)=>{let a=i-r;return`
      ${Array.from({length:r}).map((s,l)=>`
      if (${J(t.shape,l,t.rank)} != 1) {
        ${t.indicesSet(e,l,J(n,l+a,i))}
      } else {
        ${t.indicesSet(e,l,0)}
      }`).join("")}
`},Wa=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,l=e[1].dims,u=s[s.length-2],d=l[l.length-1],p=s[s.length-1],f=$e(d),h=$e(p),b=$e(u),x=O.size(r)/f/b,v=e.length>2,S=i?i.slice(0,-2):r.slice(0,-2),$=[O.size(S),u,d],w=[{type:12,data:x},{type:12,data:u},{type:12,data:d},{type:12,data:p}];Pt(t,w),w.push(...ee(S,s,l)),v&&w.push(...ee(e[2].dims)),w.push(...ee($));let I=T=>{let C=Da("batch_dims",e[0].dataType,S.length),N=P("a",e[0].dataType,s.length,h),z=P("b",e[1].dataType,l.length,f),_=Q("output",e[0].dataType,$.length,f),j=Ie(_.type.tensor),R=Bt(t,_.type.value,j),H=[N,z],W="";if(v){let L=n?f:1;H.push(P("bias",e[2].dataType,e[2].dims.length,L)),W=`${n?`value += bias[col / ${L}];`:`value += ${_.type.value}(bias[row + i]);`}`}let B=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];Lt(t,B);let M=()=>{let L=`var a_data: ${N.type.value};`;for(let F=0;F<h;F++)L+=`
              let b_data${F} = b[(b_offset + (k + ${F}) * uniforms.N + col) / ${f}];`;for(let F=0;F<b;F++){L+=`a_data = a[(a_offset + (row + ${F}) * uniforms.K + k) / ${h}];`;for(let Y=0;Y<h;Y++)L+=`
            values[${F}] = fma(${z.type.value}(a_data${h===1?"":`[${Y}]`}), b_data${Y}, values[${F}]);
`}return L};return`
  ${T.registerUniforms(B).registerInternalVariables(C).declareVariables(...H,_)}
  ${T.mainStart()}
    ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${f})) * ${f};
    var index1 = global_idx / (uniforms.N / ${f});
    let stride1 = uniforms.M / ${b};
    let row = (index1 % stride1) * ${b};
    let batch = index1 / stride1;

    ${r.length===2?"":`let batch_indices = ${C.offsetToIndices("batch")};`}

    var a_indices: ${N.type.indices};
    ${_r("a_indices",N,N.rank-2,C.rank,"batch_indices")}
    ${N.indicesSet("a_indices",N.rank-2,0)}
    ${N.indicesSet("a_indices",N.rank-1,0)}
    let a_offset = ${N.indicesToOffset("a_indices")};

    var b_indices: ${z.type.indices};
    ${_r("b_indices",z,z.rank-2,C.rank,"batch_indices")}
    ${z.indicesSet("b_indices",z.rank-2,0)}
    ${z.indicesSet("b_indices",z.rank-1,0)}
    let b_offset = ${z.indicesToOffset("b_indices")};
    var values: array<${_.type.value}, ${b}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${h}) {
      ${M()}
    }
    for (var i = 0u; i < ${b}u; i++) {
      var value = values[i];
      ${W}
      ${R}
      let cur_indices = ${_.type.indices}(batch, row + i, col);
      let offset = ${_.indicesToOffset("cur_indices")};
      ${_.setByOffset(`offset / ${f}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${f};${h};${b};${n}`,inputDependencies:v?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(x/64)},programUniforms:w}),getShaderSource:I}}}),Lu,Uu,la,_n,qu,ua,Wu,gi,Ga=V(()=>{re(),ne(),ae(),qt(),Va(),qa(),Lu=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Uu=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,la=(e,t,r="f32",i,n=!1,a=32,s=!1,l=32)=>{let u=t[1]*e[1],d=t[0]*e[0],p=n?u:a,f=n?a:u,h=p/t[0],b=a/t[1];if(!((n&&h===4&&e[1]===4||!n&&(h===3||h===4))&&p%t[0]===0&&a%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${n} is true, innerElementSize ${h} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${h} must be 3 or 4.
  tileAWidth ${p} must be divisible by workgroupSize[0]${t[0]}. tileInner ${a} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${h}<${r}>, ${p/h}>, ${f}>;
var<workgroup> mm_Bsub: array<array<vec4<${r}>, ${d/e[0]}>, ${a}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${h};
const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${s?"0":"i32(globalId.z)"};
  ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${u};

  let num_tiles = ${s?`${Math.ceil(l/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

  var acc: array<vec4<${r}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${b};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Lu(n,i)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${i?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${h===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Uu(n,h)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},_n=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,qu=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",ua=(e,t,r="f32",i,n=!1,a=32,s=!1,l=32,u=!1)=>{let d=e[1]*t[1],p=e[0]*t[0],f=n?d:a,h=n?a:d;if(!(h%t[1]===0&&f%t[0]===0&&a%t[1]===0))throw new Error(`tileAHight ${h} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${f} must be divisible by workgroupSize[0]${t[0]}, tileInner ${a} must be divisible by workgroupSize[1]${t[1]}`);let b=h/t[1],x=f/t[0],v=a/t[1],S=u?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${d};
    let globalColStart = i32(workgroupId.x) * ${p};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${h}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${f}; inputCol = inputCol + ${t[0]}) {
          ${_n(n,i)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${a}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${p}; inputCol = inputCol + ${t[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${i?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${r}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${n?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${d};

let tileRowA = i32(localId.y) * ${b};
let tileColA = i32(localId.x) * ${x};
let tileRowB = i32(localId.y) * ${v};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${b}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${x}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${_n(n,i)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${v}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${i?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${r}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${qu(n)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${r}, ${f}>, ${h}>;
  var<workgroup> mm_Bsub : array<array<${r}, ${p}>, ${a}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${a};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${s?"0":"i32(globalId.z)"};
    ${i?`let batchIndices = ${i.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${s?`${Math.ceil(l/a)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${s?`i32(globalId.z) * ${l}`:"0"};

    var acc : array<array<${r}, colPerThread>, rowPerThread>;
    ${S}
  }
`},Wu=(e,t,r,i,n=!1)=>{let[a,s,l,u]=i,d=Ie(i[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${s.type.indices};
        ${_r("aIndices",s,s.rank-2,a.rank,"batchIndices")}
        ${s.indicesSet("aIndices",s.rank-2,"u32(row)")}
        ${s.indicesSet("aIndices",s.rank-1,"u32(colIn)")}
        value = ${s.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${a.type.indices}) -> ${Ce(e,d)} {
      var value = ${Ce(e,d)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${l.type.indices};
        ${_r("bIndices",l,l.rank-2,a.rank,"batchIndices")}
        ${l.indicesSet("bIndices",l.rank-2,"u32(row)")}
        ${l.indicesSet("bIndices",l.rank-1,"u32(colIn)")}
        value = ${l.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Ce(e,d)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${n?"bias[colIn]":`${Ce(e,d)}(bias[row])`};`:""}
        ${r}
        ${u.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},gi=(e,t,r,i,n=!1,a)=>{let s=e[0].dims,l=e[1].dims,u=s.slice(0,-2),d=l.slice(0,-2),p=i?i.slice(0,-2):r.slice(0,-2),f=O.size(p),h=s[s.length-2],b=s[s.length-1],x=l[l.length-1],v=b%4===0&&x%4===0,S=h<=8?[4,1,1]:[4,4,1],$=[8,8,1],w=[Math.ceil(x/$[0]/S[0]),Math.ceil(h/$[1]/S[1]),Math.ceil(f/$[2]/S[2])],I=v?4:1,T=[...u,h,b/I],C=T.length,N=[...d,b,x/I],z=N.length,_=[f,h,x/I],j=[{type:6,data:h},{type:6,data:x},{type:6,data:b}];Pt(t,j),j.push(...ee(p,T,N));let R=["rank","rank"],H=e.length>2;H&&(j.push(...ee(e[2].dims)),R.push("rank")),j.push(...ee(_));let W=B=>{let M=p.length,L=Da("batchDims",e[0].dataType,M,1),F=Ie(e[0].dataType),Y=P("a",e[0].dataType,C,I),X=P("b",e[1].dataType,z,I),te=Q("result",e[0].dataType,_.length,I),pe=[Y,X];if(H){let je=n?I:1;pe.push(P("bias",e[2].dataType,e[2].dims.length,je))}let q=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];Lt(t,q);let K=Ie(te.type.tensor),ie=Bt(t,te.type.value,K),ue=Wu(I,H,ie,[L,Y,X,te],n);return`
  ${B.registerUniforms(q).registerInternalVariables(L).declareVariables(...pe,te)}
  ${ue}
  ${v?la(S,$,F,L):ua(S,$,F,L)}
                   `};return{name:"MatMul",shaderCache:{hint:`${S};${t.activation};${v};${n}`,inputDependencies:R},getRunData:()=>({outputs:[{dims:a?a(r):r,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:j}),getShaderSource:W}}}),Vu,jh,mw=V(()=>{re(),dt(),ae(),qt(),qa(),hw(),Ga(),Vu=(e,t,r,i,n=!1,a,s=4,l=4,u=4,d="f32")=>{let p=j=>{switch(j){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${d}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${j} is not supported.`)}},f=j=>{switch(j){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${j} is not supported.`)}},h=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,b=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,x=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",v=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",S=e?"row":"col",$=e?"col":"row",w=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${S} / outWidth;
    let outCol = ${S} % outWidth;

    let WRow = ${$} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${$} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${$} % inChannels;
    var resData = ${Ce(s,d)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${x} && xCol >= 0 && xCol < ${v}) {
      ${h}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${p(s)}
    }
    return resData;`,I=e?t&&i?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${w}
    }
    return ${Ce(s,d)}(0.0);`:i&&r?`
    let col = colIn * ${s};
    ${w}`:`
    let col = colIn * ${s};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w}
    }
    return ${Ce(s,d)}(0.0);`,T=e?i&&r?f(l):`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${f(l)}
    }
    return ${Ce(l,d)}(0.0);`:`
    let col = colIn * ${l};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${f(l)}
    }
    return ${Ce(l,d)}(0.0);`,C=Ce(u,d),N=Ce(e?s:l,d),z=Ce(e?l:s,d),_=Bt(a,C,d);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${N} {
      ${e?I:T}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${z} {
      ${e?T:I}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${C}) {
      let col = colIn * ${u};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${b}
      ${zh(n)}
      ${_}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},jh=(e,t,r,i,n,a,s,l,u)=>{let d=t.format==="NHWC",p=d?e[0].dims[3]:e[0].dims[1],f=r[0],h=d?r[2]:r[3],b=d?r[1]:r[2],x=d?r[3]:r[1],v=d&&(p%4===0||p%3===0)&&x%4===0,S=d?x:h*b,$=d?h*b:x,w=[8,8,1],I=i<=8?[4,1,1]:[4,4,1],T=[Math.ceil(S/w[0]/I[0]),Math.ceil($/w[1]/I[1]),Math.ceil(f/w[2]/I[2])];ce("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${T}`);let C=v?d&&p%4!==0?3:4:1,N=w[1]*I[1],z=w[0]*I[0],_=Math.max(w[0]*C,w[1]),j=i%N===0,R=n%z===0,H=a%_===0,W=v?[C,4,4]:[1,1,1],B=[{type:6,data:i},{type:6,data:n},{type:6,data:a},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];Pt(t,B),B.push(...ee(e[0].dims,e[1].dims));let M=["rank","rank"];s&&(B.push(...ee(e[2].dims)),M.push("rank")),B.push(...ee(r));let L=F=>{let Y=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];Lt(t,Y);let X=v?4:1,te=Ie(e[0].dataType),pe=`
      fn setOutputAtIndex(flatIndex : i32, value : ${v?`vec4<${te}>`:te}) {
        result[flatIndex] = ${v?`vec4<${te}>`:te}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${v?`vec4<${te}>`:te}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${v?"/ 4":""}, value);
      }`,q=P("x",e[0].dataType,e[0].dims.length,C===3?1:C),K=P("w",e[1].dataType,e[1].dims.length,X),ie=[q,K],ue=Q("result",e[0].dataType,r.length,X);if(s){let je=P("bias",e[2].dataType,e[2].dims.length,X);ie.push(je),pe+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${v?`vec4<${te}>`:te} {
          return bias[coords.${d?"w":"y"}${v?"/ 4":""}];
        }`}return`
        ${Ah("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${F.registerUniforms(Y).declareVariables(...ie,ue)}
        ${pe}
        ${Vu(d,j,R,H,s,t,W[0],W[1],W[2],te)}
        ${v?la(I,w,te,void 0,!d,_):ua(I,w,te,void 0,!d,_,!1,void 0,l)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${C};${v};${j};${R};${H};${N};${z};${_}`,inputDependencies:M},getRunData:()=>({outputs:[{dims:u?u(r):r,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:B}),getShaderSource:L}}}),Gu,$n,cr,Hu,kn,Fu,Mh,Oh,gw=V(()=>{re(),dt(),ne(),ae(),qt(),qa(),Gu=e=>{let t=1;for(let r=0;r<e.length;r++)t*=e[r];return t},$n=e=>typeof e=="number"?[e,e,e]:e,cr=(e,t)=>t<=1?e:e+(e-1)*(t-1),Hu=(e,t,r,i=1)=>{let n=cr(t,i);return Math.floor((e[0]*(r-1)-r+n)/2)},kn=(e,t,r,i,n)=>{n==null&&(n=Hu(e,t[0],i[0]));let a=[0,0,0,r];for(let s=0;s<3;s++)e[s]+2*n>=t[s]&&(a[s]=Math.trunc((e[s]-t[s]+2*n)/i[s]+1));return a},Fu=(e,t,r,i,n,a,s,l,u,d)=>{let p,f,h,b;if(e==="VALID"&&(e=0),typeof e=="number"){p={top:e,bottom:e,left:e,right:e,front:e,back:e};let x=kn([t,r,i,1],[l,u,d],1,[n,a,s],e);f=x[0],h=x[1],b=x[2]}else if(Array.isArray(e)){if(!e.every((v,S,$)=>v===$[0]))throw Error(`Unsupported padding parameter: ${e}`);p={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let x=kn([t,r,i,1],[l,u,d],1,[n,a,s],e[0]);f=x[0],h=x[1],b=x[2]}else if(e==="SAME_UPPER"){f=Math.ceil(t/n),h=Math.ceil(r/a),b=Math.ceil(i/s);let x=(f-1)*n+l-t,v=(h-1)*a+u-r,S=(b-1)*s+d-i,$=Math.floor(x/2),w=x-$,I=Math.floor(v/2),T=v-I,C=Math.floor(S/2),N=S-C;p={top:I,bottom:T,left:C,right:N,front:$,back:w}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:p,outDepth:f,outHeight:h,outWidth:b}},Mh=(e,t,r,i,n,a=!1,s="channelsLast")=>{let l,u,d,p,f;if(s==="channelsLast")[l,u,d,p,f]=e;else if(s==="channelsFirst")[l,f,u,d,p]=e;else throw new Error(`Unknown dataFormat ${s}`);let[h,,b,x,v]=t,[S,$,w]=$n(r),[I,T,C]=$n(i),N=cr(b,I),z=cr(x,T),_=cr(v,C),{padInfo:j,outDepth:R,outHeight:H,outWidth:W}=Fu(n,u,d,p,S,$,w,N,z,_),B=a?h*f:h,M=[0,0,0,0,0];return s==="channelsFirst"?M=[l,B,R,H,W]:s==="channelsLast"&&(M=[l,R,H,W,B]),{batchSize:l,dataFormat:s,inDepth:u,inHeight:d,inWidth:p,inChannels:f,outDepth:R,outHeight:H,outWidth:W,outChannels:B,padInfo:j,strideDepth:S,strideHeight:$,strideWidth:w,filterDepth:b,filterHeight:x,filterWidth:v,effectiveFilterDepth:N,effectiveFilterHeight:z,effectiveFilterWidth:_,dilationDepth:I,dilationHeight:T,dilationWidth:C,inShape:e,outShape:M,filterShape:t}},Oh=(e,t,r,i,n,a)=>{let s=a==="channelsLast";s?e[0].dims[3]:e[0].dims[1];let l=[64,1,1],u={x:r.map((S,$)=>$)},d=[Math.ceil(Gu(u.x.map(S=>r[S]))/l[0]),1,1];ce("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${d}`);let p=1,f=O.size(r),h=[{type:12,data:f},{type:12,data:i},{type:12,data:n},{type:12,data:t.strides},{type:12,data:t.dilations}];Pt(t,h),h.push(...ee(e[0].dims,e[1].dims));let b=["rank","rank"],x=e.length===3;x&&(h.push(...ee(e[2].dims)),b.push("rank")),h.push(...ee(r));let v=S=>{let $=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:i.length},{name:"pads",type:"u32",length:n.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];Lt(t,$);let w=1,I=Ie(e[0].dataType),T=P("x",e[0].dataType,e[0].dims.length,p),C=P("W",e[1].dataType,e[1].dims.length,w),N=[T,C],z=Q("result",e[0].dataType,r.length,w),_="";if(x){let H=P("bias",e[2].dataType,e[2].dims.length,w);N.push(H),_+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${I} {
          return bias[${s?J("coords",4,5):J("coords",1,5)}];
        }`}let j=Ce(p,I),R=Bt(t,j,I);return`
            ${_}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${T.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> f32 {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${C.getByIndices("aIndices")};
            }
          ${S.registerUniforms($).declareVariables(...N,z)}
          ${S.mainStart()}
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${z.offsetToIndices("global_idx")};
              let batch = ${J("coords",0,T.rank)};
              let d2 = ${s?J("coords",T.rank-1,T.rank):J("coords",1,T.rank)};
              let xFRCCorner = vec3<u32>(${s?J("coords",1,T.rank):J("coords",2,T.rank)},
              ${s?J("coords",2,T.rank):J("coords",3,T.rank)},
              ${s?J("coords",3,T.rank):J("coords",4,T.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${s?J("uniforms.x_shape",1,T.rank):J("uniforms.x_shape",2,T.rank)};
              let xShapeZ = ${s?J("uniforms.x_shape",2,T.rank):J("uniforms.x_shape",3,T.rank)};
              let xShapeW = ${s?J("uniforms.x_shape",3,T.rank):J("uniforms.x_shape",4,T.rank)};
              let xShapeU = ${s?J("uniforms.x_shape",4,T.rank):J("uniforms.x_shape",1,T.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = 0.0;
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${s?`let xValues = vec4<f32>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<f32>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<f32>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${s?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${s?`let xValues = vec2<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${s?`let xValues = vec3<f32>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<f32>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<f32>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${x?"value = value + getBiasByOutputCoords(coords)":""};
              ${R}
              result[global_idx] = f32(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${s};${p};${x}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:d[0],y:d[1],z:d[2]},programUniforms:h}),getShaderSource:v}}}),Rh,Dh,yw=V(()=>{re(),ne(),ae(),qt(),Rh=(e,t,r,i)=>{let n=e.length>2,a=n?"value += b[output_channel];":"",s=e[0].dims,l=e[1].dims,u=t.format==="NHWC",d=u?r[3]:r[1],p=d/t.group,f=u&&p>=4?$e(d):1,h=O.size(r)/f,b=[{type:12,data:h},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:p}];Pt(t,b),b.push(...ee(s,[l[0],l[1],l[2],l[3]/f]));let x=n?["rank","rank","rank"]:["rank","rank"];b.push(...ee([r[0],r[1],r[2],r[3]/f]));let v=S=>{let $=Q("output",e[0].dataType,r.length,f),w=Ie($.type.tensor),I=Bt(t,$.type.value,w),T=P("x",e[0].dataType,s.length),C=P("w",e[1].dataType,l.length,f),N=[T,C];n&&N.push(P("b",e[2].dataType,e[2].dims,f));let z=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];Lt(t,z);let _=u?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${T.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${C.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${T.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${C.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${S.registerUniforms(z).declareVariables(...N,$)}

  ${S.mainStart()}
    ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${$.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${u?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${u?1:2}], outputIndices[${u?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${f} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${u?2:1}];

    var value: ${$.type.value} = ${$.type.value}(0);
    ${_}
    ${a}
    ${I}
    ${$.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${f}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:b}),getShaderSource:v}},Dh=(e,t,r,i)=>{let n=e.length>2,a=$e(r[3]),s=$e(r[2]),l=O.size(r)/a/s,u=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/a],d=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/a],p=[r[0],r[1],r[2],r[3]/a],f=[{type:12,data:l},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];Pt(t,f),f.push(...ee(u,d,p));let h=(s-1)*t.strides[1]+d[1],b=x=>{let v=Q("output",e[0].dataType,p.length,a),S=Ie(v.type.tensor),$=Bt(t,v.type.value,S),w=P("x",e[0].dataType,u.length,a),I=P("w",e[1].dataType,d.length,a),T=[w,I];n&&T.push(P("b",e[2].dataType,e[2].dims,a));let C=n?"value += b[output_channel];":"",N=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return Lt(t,N),`
  ${x.registerUniforms(N).declareVariables(...T,v)}
  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${s}u;
    let col = (index1 % width1) * ${s}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${w.type.value}, ${h}>;
    var values: array<${v.type.value}, ${s}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${d[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${h}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${w.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${w.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${d[1]}; w_width++) {
          let w_val = ${I.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${s}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${s}u; i++) {
      var value = values[i];
      ${C}
      ${$}
      ${v.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${a};${s};${h};${d[0]};${d[1]}`,inputDependencies:n?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:i?i(r):r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:f}),getShaderSource:b}}}),Ku,Xr,Zu,Qr,da,Sn,Yu,Xu,ca,xw=V(()=>{ne(),mw(),gw(),Ga(),yw(),qt(),Va(),$t(),Ku=(e,t,r,i,n,a)=>{let s=e[0],l=e.slice(a?1:2,a?3:4),u=l.length,d=t[0],p=t.slice(2).map((h,b)=>h+(h-1)*(r[b]-1)),f=l.map((h,b)=>h+i[b]+i[b+u]).map((h,b)=>Math.floor((h-p[b]+n[b])/n[b]));return f.splice(0,0,s),f.splice(a?3:1,0,d),f},Xr=[2,3,1,0],Zu=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[1]*t.group;if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let n=e[0].dims.length-2;if(t.dilations.length!==n)throw new Error(`dilations should be ${n}D`);if(t.strides.length!==n)throw new Error(`strides should be ${n}D`);if(t.pads.length!==n*2)throw new Error(`pads should be ${n*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},Qr=(e,t)=>{let r=e.kernelShape.slice();r.length<t[1].dims.length-2&&r.push(...Array(t[1].dims.length-2-r.length).fill(0));for(let a=2;a<t[1].dims.length;++a)r[a-2]===0&&(r[a-2]=t[1].dims[a]);let i=e.pads.slice();hi.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,r,i,e.format==="NHWC",e.autoPad);let n=Object.assign({},e);return Object.assign(n,{kernelShape:r,pads:i}),n},da=e=>{let t=Ua(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],n=e.dilations,a=e.group,s=e.kernel_shape,l=e.pads,u=e.strides,d=e.w_is_const();return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,pads:l,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},Sn=(e,t,r,i)=>{let n=r.format==="NHWC",a=Ku(t[0].dims,t[1].dims,r.dilations,r.pads,r.strides,n);if(r.group!==1){let N=[t[0]];if(n){let z=e.kernelCustomData.wT??e.compute(De(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=z),N.push(z)}else N.push(t[1]);t.length===3&&N.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&n&&t[1].dims[0]===r.group&&t[1].dims[1]===1&&r.dilations[0]===1&&r.dilations[1]===1?e.compute(Dh(N,r,a,i),{inputs:N}):e.compute(Rh(N,r,a,i),{inputs:N});return}let s=t.length===3,l=t[0].dims[n?1:2],u=t[0].dims[n?2:3],d=t[0].dims[n?3:1],p=t[1].dims[2],f=t[1].dims[3],h=a[n?1:2],b=a[n?2:3],x=a[n?3:1],v=n&&p===l&&f===u&&r.pads[0]===0&&r.pads[1]===0;if(v||p===1&&f===1&&r.dilations[0]===1&&r.dilations[1]===1&&r.strides[0]===1&&r.strides[1]===1&&r.pads[0]===0&&r.pads[1]===0){let N=a[0],z,_,j,R=[];if(n){let B=e.kernelCustomData.wT??e.compute(De(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];if(r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=B),v){let M=l*u*d;z=t[0].reshape([1,N,M]),_=B.reshape([1,M,x]),j=[1,N,x]}else z=t[0].reshape([N,l*u,d]),_=B.reshape([1,d,x]),j=[N,h*b,x];R.push(z),R.push(_)}else z=t[0].reshape([N,d,l*u]),_=t[1].reshape([1,x,d]),j=[N,x,h*b],R.push(_),R.push(z);s&&R.push(t[2]);let H=j[2],W=R[0].dims[R[0].dims.length-1];H<8&&W<8?e.compute(Wa(R,r,a,j,n,i),{inputs:R}):e.compute(gi(R,r,a,j,n,i),{inputs:R});return}let S=!0,$=e.kernelCustomData.wT??e.compute(De(t[1],Xr),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=$);let w=[t[0],$];s&&w.push(t[2]);let I=n?h*b:x,T=n?x:h*b,C=p*f*d;e.compute(jh(w,r,a,I,T,C,s,S,i),{inputs:w})},Yu=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=[0,t.pads[0],0,t.pads[1]],a=[1].concat(t.strides),s=[1].concat(t.dilations),l=[1].concat(t.kernelShape),u=Qr({...t,pads:n,strides:a,dilations:s,kernelShape:l},i);Sn(e,i,u,d=>r?[d[0],d[2],d[3]]:[d[0],d[1],d[3]])},Xu=(e,t,r)=>{let i=r.format==="NHWC"?"channelsLast":"channelsFirst",n=Qr(r,t),a=r.autoPad==="NOTSET"?r.pads:r.autoPad,s=Mh(t[0].dims,t[1].dims,r.strides,r.dilations,a,!1,i);e.compute(Oh(t,n,s.outShape,[s.filterDepth,s.filterHeight,s.filterWidth],[s.padInfo.front,s.padInfo.top,s.padInfo.left],i))},ca=(e,t)=>{if(Zu(e.inputs,t),e.inputs[0].dims.length===3)Yu(e,t);else if(e.inputs[0].dims.length===5)Xu(e,e.inputs,t);else{let r=Qr(t,e.inputs);Sn(e,e.inputs,r)}}}),Bh,bw=V(()=>{re(),dt(),ne(),ae(),Bh=(e,t,r)=>{let i=e.length>2,n=t.outputShape,a=t.format==="NHWC",s=t.group,l=e[1].dims,u=l[2]/s,d=l[3],p=a?$e(u):1,f=a&&d===1&&u>=4,h=f?Math.floor(u/4)*4:Math.floor(u/p)*p,b=u-h,x=a?$e(d):1,v=a?d===1?p:x:1,S=O.size(n)/x,$=[Math.ceil(S/64),1,1];ce("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${$}`);let w=["rank","rank"],I=[t.strides[0],t.strides[1]],T=[t.kernelShape[a?1:2],t.kernelShape[a?2:3]],C=[t.dilations[0],t.dilations[1]],N=[T[0]+(t.dilations[0]<=1?0:(t.kernelShape[a?1:2]-1)*(t.dilations[0]-1)),T[1]+(t.dilations[1]<=1?0:(t.kernelShape[a?2:3]-1)*(t.dilations[1]-1))],z=[N[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),N[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],_=[{type:12,data:S},{type:12,data:I},{type:12,data:T},{type:12,data:C},{type:12,data:N},{type:6,data:z},{type:12,data:h},{type:12,data:u},{type:12,data:d},...ee(e[0].dims,e[1].dims)];i&&(_.push(...ee(e[2].dims)),w.push("rank")),_.push(...ee(n));let j=R=>{let H=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:I.length},{name:"filter_dims",type:"u32",length:T.length},{name:"dilations",type:"u32",length:T.length},{name:"effective_filter_dims",type:"u32",length:N.length},{name:"pads",type:"i32",length:z.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],W=Ie(e[0].dataType),B=a?1:2,M=a?2:3,L=a?3:1,F=P("W",e[1].dataType,e[1].dims.length,v),Y=P("Dy",e[0].dataType,e[0].dims.length,p),X=[Y,F];i&&X.push(P("bias",e[2].dataType,[n[L]].length,x));let te=Q("result",e[0].dataType,n.length,x),pe=()=>{let ie="";if(f)p===4?ie+=`
        let xValue = ${Y.getByOffset("x_offset")};
        let wValue = ${F.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:p===2?ie+=`
          dotProd = dotProd + dot(vec4<${W}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}), vec4<${W}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:p===1&&(ie+=`
          dotProd = dotProd + dot(vec4<${W}>(${Y.getByOffset("x_offset")}, ${Y.getByOffset("x_offset + 1u")}, ${Y.getByOffset("x_offset + 2u")}, ${Y.getByOffset("x_offset + 3u")}), vec4<${W}>(${F.getByOffset("w_offset")}, ${F.getByOffset("w_offset + 1u")}, ${F.getByOffset("w_offset + 2u")}, ${F.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ie+=`
                  let xValue = ${a?Y.getByOffset(`${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p}`):Y.get("batch","inputChannel","idyR","idyC")};
        `,p===1)ie+=`
          let w_offset = ${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${F.getByOffset(`w_offset / ${v}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let ue=0;ue<p;ue++)ie+=`
            let wValue${ue} = ${F.getByOffset(`${F.indicesToOffset(`${F.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${ue}, wOutChannel)`)} / ${v}`)};
            dotProd = dotProd + xValue[${ue}] * wValue${ue};`;return ie},q=()=>{if(b===0)return"";if(!f)throw new Error(`packInputAs4 ${f} is not true.`);let ie="";if(p===1){ie+="dotProd = dotProd";for(let ue=0;ue<b;ue++)ie+=`
            + ${Y.getByOffset(`x_offset + ${ue}`)} * ${F.getByOffset(`w_offset + ${ue}`)}`;ie+=";"}else if(p===2){if(b!==2)throw new Error(`Invalid inputChannelsRemainder ${b}.`);ie+=`
          let xValue = ${Y.getByOffset("x_offset")};
          let wValue = ${F.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ie},K=`
            let outputIndices = ${te.offsetToIndices(`global_idx * ${x}`)};
            let batch = ${te.indicesGet("outputIndices",0)};
            let d1 = ${te.indicesGet("outputIndices",L)};
            let r = ${te.indicesGet("outputIndices",B)};
            let c = ${te.indicesGet("outputIndices",M)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${te.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${W}(dyRCorner) + ${W}(wR)) / ${W}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${W}(uniforms.Dy_shape[${B}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${W}(dyCCorner) + ${W}(wC)) / ${W}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${W}(uniforms.Dy_shape[${M}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${f?`
                var x_offset = ${Y.indicesToOffset(`${Y.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${p};
                var w_offset = ${F.indicesToOffset(`${F.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${v};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${f?4:p}) {
                  ${pe()}
                  inputChannel = inputChannel + ${f?4:p};
                }
                ${q()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${i?` + bias[d1 / ${x}]`:""};
            ${te.setByOffset("global_idx","value")};
          `;return`
    ${R.registerUniforms(H).declareVariables(...X,te)}
      ${R.mainStart()}
      ${R.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${K}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${p}${v}${x}${f}${b}`,inputDependencies:w},getRunData:()=>({dispatchGroup:{x:$[0],y:$[1],z:$[2]},outputs:[{dims:r?r(n):n,dataType:e[0].dataType}],programUniforms:_}),getShaderSource:j}}}),Qu,Ju,ed,Tn,Ph,td,In,rd,Lh,ww=V(()=>{bw(),qt(),$t(),Qu=(e,t,r,i,n,a)=>(e-1)*t+r+(i-1)*n+1-a,Ju=(e,t,r,i,n)=>{let a=Math.floor(e/2);t==="SAME_UPPER"?(r[i]=a,r[n]=e-a):t==="SAME_LOWER"&&(r[i]=e-a,r[n]=a)},ed=(e,t,r,i,n,a,s,l,u,d)=>{let p=e.length-2,f=d.length===0;u.length<p&&u.push(...Array(p-u.length).fill(0));let h=e[0],b=t[l?3:1]*n;for(let x=0,v=e.length-p-(l?1:0);x<p;++x,++v){let S=e[v],$=f?S*s[x]:d[x],w=Qu(S,s[x],a[x],t[v],r[x],$);Ju(w,i,a,x,x+p),f&&d.push(s[x]*(S-1)+u[x]+(t[v]-1)*r[x]+1-a[x]-a[x+p])}d.splice(0,0,h),d.splice(l?3:1,0,b)},Tn=(e,t)=>{let r=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((f,h)=>f*h,1)===0){r.length=0;for(let f=2;f<t[1].dims.length;++f)r.push(t[1].dims[f])}let i=e.format==="NHWC";r.splice(0,0,t[1].dims[0]),r.splice(i?3:1,0,t[1].dims[1]);let n=e.pads.slice(),a=e.outputShape.slice(),s=e.outputPadding.slice(),l=t[0].dims,u=e.dilations.slice();if(u.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;u=new Array(f).fill(1)}let d=e.strides.slice();if(d.reduce((f,h)=>f+h,0)===0){let f=t[0].dims.length-2;d=new Array(f).fill(1)}ed(l,r,u,e.autoPad,e.group,n,d,i,s,a);let p=Object.assign({},e);return Object.assign(p,{kernelShape:r,pads:n,outputPadding:s,outputShape:a,dilations:u,strides:d}),p},Ph=e=>{let t=Ua(e),r=e.format,i=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],n=e.dilations,a=e.group??1,s=e.kernelShape,l=e.pads,u=e.strides,d=e.wIsConst(),p=e.outputPadding,f=e.outputShape;return{autoPad:i,format:r,dilations:n,group:a,kernelShape:s,outputPadding:p,outputShape:f,pads:l,strides:u,wIsConst:d,...t,cacheKey:`${e.format};${t.activation};`}},td=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let r=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],i=e[1].dims[0];if(r!==i)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let n=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==n))throw new Error("invalid bias");let a=e[0].dims.length-2;if(t.dilations.reduce((s,l)=>s+l,0)>0&&t.dilations.length!==a)throw new Error(`dilations should be ${a}D`);if(t.strides.reduce((s,l)=>s+l,0)>0&&t.strides.length!==a)throw new Error(`strides should be ${a}D`);if(t.pads.reduce((s,l)=>s+l,0)>0&&t.pads.length!==a*2)throw new Error(`pads should be ${a*2}D`);if(t.outputPadding.length!==a&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${a}D`);if(t.kernelShape.reduce((s,l)=>s+l,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},In=(e,t,r,i)=>{let n=e.kernelCustomData.wT??e.compute(De(t[1],[2,3,0,1]),{inputs:[1],outputs:[r.wIsConst?-2:-1]})[0];r.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=n);let a=[t[0],n];t.length===3&&a.push(t[2]),e.compute(Bh(a,r,i),{inputs:a})},rd=(e,t)=>{let r=t.format==="NHWC",i=[e.inputs[0].reshape(r?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&i.push(e.inputs[2]);let n=t.kernelShape;(n.length===0||n[0]===0)&&(n=[e.inputs[1].dims[2]]);let a=t.dilations;(a.length===0||a[0]===0)&&(a=[1]);let s=t.strides;(s.length===0||s[0]===0)&&(s=[1]);let l=t.pads;l.length===0&&(l=[0,0]),l=[0,l[0],0,l[1]],s=[1].concat(s),a=[1].concat(a),n=[1].concat(n);let u=t.outputPadding;u=[0].concat(u);let d=Tn({...t,pads:l,strides:s,dilations:a,kernelShape:n,outputPadding:u},i);In(e,i,d,p=>r?[p[0],p[2],p[3]]:[p[0],p[1],p[3]])},Lh=(e,t)=>{if(td(e.inputs,t),e.inputs[0].dims.length===3)rd(e,t);else{let r=Tn(t,e.inputs);In(e,e.inputs,r)}}}),id,Uh,qh,vw=V(()=>{re(),ne(),ke(),ae(),id=(e,t,r,i)=>{let n=O.size(t),a=t.length,s=P("input",e,a),l=Q("output",e,a),u=r.dataType===6?r.getInt32Array()[0]:Number(r.getBigInt64Array()[0]),d=O.normalizeAxis(u,a),p=f=>{let h=` i32(${s.indicesGet("inputIndices","uniforms.axis")}) `,b=J("uniforms.input_shape","uniforms.axis",a),x=i.reverse?h+(i.exclusive?" + 1":""):"0",v=i.reverse?b:h+(i.exclusive?"":" + 1");return`
                ${f.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(s,l)}
                ${f.mainStart()}
                  ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${l.offsetToIndices("global_idx")};
                  var sum = ${l.type.value}(0);
                  let first : i32 = ${x};
                  let last : i32 = ${v};
                  for (var i : i32 = first; i < last; i++) {
                    ${s.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${s.getByIndices("inputIndices")};
                  }
                  ${l.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:i.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(n/64)},programUniforms:[{type:12,data:n},{type:12,data:d},...ee(t,t)]}),getShaderSource:p}},Uh=(e,t)=>{let r=e.inputs[0].dims,i=e.inputs[0].dataType,n=e.inputs[1];e.compute(id(i,r,n,t),{inputs:[0]})},qh=e=>{let t=e.exclusive===1,r=e.reverse===1;return me({exclusive:t,reverse:r})}}),nd,ad,sd,Wh,Vh,_w=V(()=>{re(),ne(),ke(),ae(),nd=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},ad=(e,t,r,i)=>{let n=[];n.push(`fn perm(i: ${i.type.indices}) -> ${r.type.indices} {
    var a: ${r.type.indices};`);for(let a=0;a<t;++a)n.push(r.indicesSet("a",e[a],`i[${a}]`));return n.push("return a;}"),n.join(`
`)},sd=(e,t)=>{let r,i,n,a,s,l,u=t.format==="NHWC",d=t.blocksize,p=t.mode==="DCR";u?([r,i,n,a]=e.dims,s=p?[r,i,n,d,d,a/d**2]:[r,i,n,a/d**2,d,d],l=p?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([r,i,n,a]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],s=p?[r,d,d,a/d**2,i,n]:[r,a/d**2,d,d,i,n],l=p?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let f=e.reshape(s),h=f.dims.length,b=e.dataType,x=P("a",b,h),v=Q("output",b,h),S=$=>`
  ${$.registerUniform("output_size","u32").declareVariables(x,v)}

  ${ad(l,h,x,v)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${v.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${v.setByOffset("global_idx",x.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:$=>{let w=u?[r,i*d,n*d,a/d**2]:[r,a/d**2,i*d,n*d],I=O.size(w),T=f.dims,C=O.sortBasedOnPerm(T,l);return{outputs:[{dims:w,dataType:$[0].dataType}],dispatchGroup:{x:Math.ceil(I/64)},programUniforms:[{type:12,data:I},...ee(T,C)]}},getShaderSource:S}},Wh=(e,t)=>{nd(e.inputs),e.compute(sd(e.inputs[0],t))},Vh=e=>me({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Jr,pr,En,od,ld,ud,dd,Cn,cd,Gh,Hh,$w=V(()=>{re(),ne(),ke(),ae(),Jr="[a-zA-Z]|\\.\\.\\.",pr="("+Jr+")+",En="^"+pr+"$",od="("+pr+",)*"+pr,ld="^"+od+"$",ud=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let r=this.symbolToIndices.get(e);r===void 0?r=[t]:r.push(t),this.symbolToIndices.set(e,r)}},dd=class{constructor(e,t){this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[r,i]=t.includes("->")?t.split("->",2):[t,""];if(!r.match(RegExp(ld)))throw new Error("Invalid LHS term");if(r.split(",").forEach((n,a)=>{let s=e[a].dims.slice();if(!n.match(RegExp(En)))throw new Error("Invalid LHS term");let l=this.processTerm(n,!0,s,a);this.lhs.push(l)}),i==="")i+=[...this.symbolToInfo.entries()].filter(([n,a])=>a.count===1||n==="...").map(([n])=>n).join("");else if(!i.match(RegExp(pr)))throw new Error("Invalid RHS");i.match(RegExp(Jr,"g"))?.forEach(n=>{if(n==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let a=this.symbolToInfo.get(n);if(a===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(a.dimValue)}}),this.rhs=this.processTerm(i,!1,this.outputDims)}addSymbol(e,t,r){let i=this.symbolToInfo.get(e);if(i!==void 0){if(i.dimValue!==t&&i.count!==1)throw new Error("Dimension mismatch");i.count++,i.inputIndices.push(r)}else i={count:1,dimValue:t,inputIndices:[r]};this.symbolToInfo.set(e,i)}processTerm(e,t,r,i=-1){let n=r.length,a=!1,s=[],l=0;if(!e.match(RegExp(En))&&!t&&e!=="")throw new Error("Invalid LHS term");let u=e.match(RegExp(Jr,"g")),d=new ud(i);return u?.forEach((p,f)=>{if(p==="..."){if(a)throw new Error("Only one ellipsis is allowed per input term");a=!0;let h=n-u.length+1;if(h<0)throw new Error("Ellipsis out of bounds");if(s=r.slice(l,l+h),this.hasEllipsis){if(this.ellipsisDims.length!==s.length||this.ellipsisDims.toString()!==s.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=s;else throw new Error("Ellipsis must be specified in the LHS");for(let b=0;b<s.length;b++){let x=String.fromCharCode(48+b);d.addSymbol(x,f+b),this.addSymbol(x,r[l++],i)}}else d.addSymbol(p,f+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(p,r[l++],i)}),d}},Cn=e=>e+"_max",cd=(e,t,r,i)=>{let n=e.map(d=>d.length).map((d,p)=>P(`input${p}`,t,d)),a=O.size(i),s=Q("output",t,i.length),l=[...r.symbolToInfo.keys()].filter(d=>!r.rhs.symbolToIndices.has(d)),u=d=>{let p=[],f="var prod = 1.0;",h="var sum = 0.0;",b="sum += prod;",x=[],v=[],S=[],$=[],w=r.symbolToInfo.size===r.rhs.symbolToIndices.size;r.symbolToInfo.forEach((T,C)=>{if(r.rhs.symbolToIndices.has(C)){let N=r.rhs.symbolToIndices.get(C)?.[0];N!==void 0&&r.lhs.forEach((z,_)=>{if(T.inputIndices.includes(_)){let j=z.symbolToIndices.get(C);if(j===void 0)throw new Error("Invalid symbol error");j.forEach(R=>{p.push(`${n[_].indicesSet(`input${_}Indices`,R,s.indicesGet("outputIndices",N))}`)})}})}else r.lhs.forEach((N,z)=>{if(T.inputIndices.includes(z)){let _=N.symbolToIndices.get(C);if(_===void 0)throw new Error("Invalid symbol error");_.forEach(j=>{x.push(`${n[z].indicesSet(`input${z}Indices`,j,`${C}`)}`)}),$.push(`prod *= ${n[z].getByIndices(`input${z}Indices`)};`)}}),v.push(`for(var ${C}: u32 = 0; ${C} < uniforms.${Cn(C)}; ${C}++) {`),S.push("}")});let I=w?[...p,`let sum = ${n.map((T,C)=>T.getByIndices(`input${C}Indices`)).join(" * ")};`]:[...p,h,...v,...x,f,...$,b,...S];return`
            ${d.registerUniforms(l.map(T=>({name:`${Cn(T)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...n,s)}

            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${s.offsetToIndices("global_idx")};
            ${n.map((T,C)=>`var input${C}Indices: ${n[C].type.indices};`).join(`
`)}
            ${I.join(`
`)};
            ${s.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:r.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let d=l.filter(f=>r.symbolToInfo.has(f)).map(f=>({type:12,data:r.symbolToInfo.get(f)?.dimValue||0}));d.push({type:12,data:a});let p=e.map((f,h)=>[...ee(f)]).reduce((f,h)=>f.concat(h),d);return p.push(...ee(i)),{outputs:[{dims:i,dataType:t}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:p}},getShaderSource:u}},Gh=(e,t)=>{let r=new dd(e.inputs,t.equation),i=r.outputDims,n=e.inputs.map((a,s)=>a.dims);e.compute(cd(n,e.inputs[0].dataType,r,i))},Hh=e=>{let t=e.equation.replace(/\s+/g,"");return me({equation:t})}}),pd,Nn,fd,hd,Fh,kw=V(()=>{re(),ne(),ae(),pd=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=r.length<t.length?0:r.length-t.length,n=t.length<r.length?0:t.length-r.length;for(;i<r.length&&n<t.length;++i,++n)if(r[i]!==t[n]&&r[i]!==1&&t[n]!==1)throw new Error("Expand requires shape to be broadcastable to input")},Nn=(e,t)=>{let r=e.length-t.length,i=[];for(let n=0;n<r;++n)i.push(e[n]);for(let n=0;n<t.length;++n)i.push(t[n]===1?e[n+r]:t[n]);return i},fd=(e,t)=>e.length>t.length?Nn(e,t):Nn(t,e),hd=e=>{let t=e[0].dims,r=Array.from(e[1].getBigInt64Array(),Number),i=fd(t,r),n=e[0].dataType,a=n===9||O.size(t)===1,s=n===9||t.length>0&&t[t.length-1]%4===0?4:1,l=a||i.length>0&&i[i.length-1]%4===0?4:1,u=Math.ceil(O.size(i)/l),d=f=>{let h=P("input",n,t.length,s),b=Q("output",n,i.length,l),x;if(n===9){let v=(S,$,w="")=>`
          let outputIndices${$} = ${b.offsetToIndices(`outputOffset + ${$}u`)};
          let offset${$} = ${h.broadcastedIndicesToOffset(`outputIndices${$}`,b)};
          let index${$} = offset${$} / 4u;
          let component${$} = offset${$} % 4u;
          ${S}[${$}] = ${w}(${h.getByOffset(`index${$}`)}[component${$}]);
        `;x=`
        let outputOffset = global_idx * ${l};
        var data = vec4<u32>(0);
        ${v("data",0,"u32")}
        ${v("data",1,"u32")}
        ${v("data",2,"u32")}
        ${v("data",3,"u32")}
        ${b.setByOffset("global_idx","data")}
      }`}else x=`
        let outputIndices = ${b.offsetToIndices(`global_idx * ${l}`)};
        let inputOffset = ${h.broadcastedIndicesToOffset("outputIndices",b)};
        let data = ${b.type.value}(${h.getByOffset(`inputOffset / ${s}`)});
        ${b.setByOffset("global_idx","data")}
      }`;return`
    ${f.registerUniform("vec_size","u32").declareVariables(h,b)}
    ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${x}`},p=[{type:12,data:u},...ee(t,i)];return{name:"Expand",shaderCache:{hint:`${i.length};${s}${l}`,inputDependencies:["rank"]},getShaderSource:d,getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:p})}},Fh=e=>{pd(e.inputs),e.compute(hd(e.inputs),{inputs:[0]})}}),md,Kh,Sw=V(()=>{re(),ne(),ae(),La(),md=e=>{let t=e[0].dataType,r=O.size(e[0].dims),i=O.size(e[1].dims),n=i%4===0,a=s=>{let l=P("x",t,[1],4),u=P("bias",t,[1],4),d=Q("y",t,[1],4),p=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],f=b=>`
      let bias${b}_offset: u32 = (global_idx * 4 + ${b}) % uniforms.bias_size;
      let bias${b} = ${u.getByOffset(`bias${b}_offset / 4`)}[bias${b}_offset % 4];`,h=n?`
      let bias = ${u.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${f(0)}${f(1)}${f(2)}${f(3)}
      let bias = ${l.type.value}(bias0, bias1, bias2, bias3);`;return`${s.registerUniforms(p).declareVariables(l,u,d)}

    ${sa(Ne(t))}

    ${s.mainStart(Qt)}
      ${s.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${l.getByOffset("global_idx")};
      ${h}
      let x_in = x + bias;
      ${d.setByOffset("global_idx",oa("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${n}`,inputDependencies:["type","type"]},getShaderSource:a,getRunData:s=>({outputs:[{dims:s[0].dims,dataType:s[0].dataType}],programUniforms:[{type:12,data:Math.ceil(r/4)},{type:12,data:i}],dispatchGroup:{x:Math.ceil(r/Qt/4)}})}},Kh=e=>{e.inputs.length<2||O.size(e.inputs[1].dims)===0?hh(e):e.compute(md(e.inputs))}}),gd,yd,Zh,Yh,Tw=V(()=>{re(),ne(),ke(),ae(),gd=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},yd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=O.normalizeAxis(t.axis,n),s=r.slice(0);s.splice(a,1,...i);let l=r[a],u=e[0].dataType===9?4:1,d=Math.ceil(O.size(s)/u),p=[{type:12,data:d},{type:6,data:l},{type:12,data:a},...ee(e[0].dims,e[1].dims,s)],f=h=>{let b=P("data",e[0].dataType,e[0].dims.length,u),x=P("inputIndices",e[1].dataType,e[1].dims.length),v=Q("output",e[0].dataType,s.length,u),S=w=>{let I=i.length,T=`var indicesIndices${w}  = ${x.type.indices}(0);`;for(let C=0;C<I;C++)T+=`${I>1?`indicesIndices${w}[${C}]`:`indicesIndices${w}`} = ${s.length>1?`outputIndices${w}[uniforms.axis + ${C}]`:`outputIndices${w}`};`;T+=`
          var idx${w} = ${x.getByIndices(`indicesIndices${w}`)};
          if (idx${w} < 0) {
            idx${w} = idx${w} + uniforms.axisDimLimit;
          }
          var dataIndices${w} : ${b.type.indices};
        `;for(let C=0,N=0;C<n;C++)C===a?(T+=`${n>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = u32(idx${w});`,N+=I):(T+=`${n>1?`dataIndices${w}[${C}]`:`dataIndices${w}`} = ${s.length>1?`outputIndices${w}[${N}]`:`outputIndices${w}`};`,N++);return T},$;if(e[0].dataType===9){let w=(I,T,C="")=>`
          let outputIndices${T} = ${v.offsetToIndices(`outputOffset + ${T}u`)};
          ${S(T)};
          let offset${T} = ${b.indicesToOffset(`dataIndices${T}`)};
          let index${T} = offset${T} / 4u;
          let component${T} = offset${T} % 4u;
          ${I}[${T}] = ${C}(${b.getByOffset(`index${T}`)}[component${T}]);
        `;$=`
        let outputOffset = global_idx * ${u};
        var value = vec4<u32>(0);
        ${w("value",0,"u32")}
        ${w("value",1,"u32")}
        ${w("value",2,"u32")}
        ${w("value",3,"u32")}
        ${v.setByOffset("global_idx","value")}
      `}else $=`
      let outputIndices = ${v.offsetToIndices("global_idx")};
      ${S("")};
      let value = ${b.getByIndices("dataIndices")};
      ${v.setByOffset("global_idx","value")};
      `;return`
      ${h.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(b,x,v)}
      ${h.mainStart()}
        ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${$}
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:f}},Zh=e=>me({axis:e.axis}),Yh=(e,t)=>{let r=e.inputs;gd(r),e.compute(yd(e.inputs,t))}}),xd,Xh,Qh,Iw=V(()=>{re(),ne(),ae(),xd=(e,t,r,i,n,a,s,l,u)=>{let d=[{type:12,data:a},{type:12,data:i},{type:12,data:n},{type:12,data:r},{type:12,data:s},{type:12,data:l},{type:12,data:u}],p=[a];d.push(...ee(t.dims,p));let f=h=>{let b=P("indices_data",t.dataType,t.dims.length),x=Q("input_slice_offsets_data",12,1,1),v=[b,x],S=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:n.length},{name:"sizes_from_slice_dims_data",type:"u32",length:r.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${h.registerUniforms(S).declareVariables(...v)}
  ${h.mainStart()}
    ${h.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${n.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${r.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${n.length}_${r.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:p,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:d}),getShaderSource:f},{inputs:[t],outputs:[-1]})[0]},Xh=(e,t)=>{let r=e.inputs,i=r[0].dims,n=r[0].dataType,a=r[1].dims,s=a[a.length-1],l=O.sizeToDimension(a,a.length-1),u=O.sizeFromDimension(i,t.batchDims+s),d=O.sizeToDimension(i,t.batchDims),p=O.sizeFromDimension(i,t.batchDims),f=l/d,h=new Array(s),b=u;for(let T=0;T<s;++T)h[s-1-T]=b,b*=i[t.batchDims+s-1-T];let x=xd(e,r[1],h,t.batchDims,i,l,f,p,s),v=t.batchDims+s;if(v>i.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let S=a.slice(0,-1).concat(i.slice(v)),$=O.size(S),w=[{type:12,data:$},{type:12,data:u},...ee(r[0].dims,x.dims,S)],I=T=>{let C=P("data",r[0].dataType,r[0].dims.length),N=P("slice_offsets",12,x.dims.length),z=Q("output",r[0].dataType,S.length);return`
          ${T.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(C,N,z)}
            ${T.mainStart()}
            ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:S,dataType:n}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:w}),getShaderSource:I},{inputs:[r[0],x]})},Qh=e=>({batchDims:e.batch_dims,cacheKey:""})}),bd,wd,Jh,em,Ew=V(()=>{re(),ne(),ke(),ae(),bd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let r=O.normalizeAxis(t.quantizeAxis,e[0].dims.length),i=t.blockSize,n=e[0],a=e[2],s=e.length===4?e[3]:void 0;if(a.dims.length!==n.dims.length||!n.dims.map((l,u)=>u===r?Math.ceil(l/i)===a.dims[u]:l===a.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(s){if(s.dataType!==n.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(s.dims.length!==a.dims.length||!s.dims.map((l,u)=>l===a.dims[u]).reduce((l,u)=>l&&u,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},wd=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r.length,a=O.normalizeAxis(t.gatherAxis,n),s=O.normalizeAxis(t.quantizeAxis,n),l=r.slice(0);l.splice(a,1,...i);let u=O.size(l),d=e[2].dataType,p=e[0].dataType===22,f=[{type:12,data:u},{type:12,data:s},{type:12,data:a},{type:12,data:t.blockSize},...ee(...e.map((b,x)=>b.dims),l)],h=b=>{let x=P("data",e[0].dataType,e[0].dims.length),v=P("inputIndices",e[1].dataType,e[1].dims.length),S=P("scales",e[2].dataType,e[2].dims.length),$=e.length>3?P("zeroPoint",e[3].dataType,e[3].dims.length):void 0,w=Q("output",d,l.length),I=[x,v,S];$&&I.push($);let T=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${b.registerUniforms(T).declareVariables(...I,w)}
        ${b.mainStart()}
        let output_indices = ${w.offsetToIndices("global_idx")};
        var indices_indices = ${v.type.indices}(0);
        ${i.length>1?`
          for (var i: u32 = 0; i < ${i.length}; i++) {
            let index = ${w.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${v.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${w.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${x.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${w.indicesGet("output_indices","i")};
          ${x.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${v.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${r[a]};
        }
        ${x.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${l.length}; i++) {
          let index = ${w.indicesGet("output_indices",`i + ${i.length} - 1`)};
          ${x.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${x.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${x.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${S.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${S.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${S.getByIndices("scale_indices")};
        ${$?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${$.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${$.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${p?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Ne(d)}(quantized_data - zero_point) * scale;
        ${w.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((b,x)=>x!==1).map(b=>b.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(b,x)=>"rank")},getRunData:()=>({outputs:[{dims:l,dataType:d}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:f}),getShaderSource:h}},Jh=(e,t)=>{let r=e.inputs;bd(r,t),e.compute(wd(e.inputs,t))},em=e=>me({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),vd,_d,tm,rm,Cw=V(()=>{re(),ne(),ke(),ae(),vd=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},_d=(e,t)=>{let r=e[0].dims,i=e[0].dataType,n=r.length,a=e[1].dims,s=e[1].dataType,l=O.normalizeAxis(t.axis,n),u=r[l],d=a.slice(0),p=O.size(d),f=P("input",i,n),h=P("indicesInput",s,a.length),b=Q("output",i,d.length),x=[{type:12,data:p},{type:6,data:u},{type:12,data:l}];return x.push(...ee(r,a,d)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:x}),getShaderSource:v=>`
      ${v.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(f,h,b)}
      ${v.mainStart()}
      ${v.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${b.offsetToIndices("global_idx")};

      var idx = ${h.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${f.type.indices}(outputIndices);
      ${f.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${f.getByIndices("inputIndices")};

      ${b.setByOffset("global_idx","value")};
  }`}},tm=e=>me({axis:e.axis}),rm=(e,t)=>{let r=e.inputs;vd(r),e.compute(_d(e.inputs,t))}}),$d,kd,im,nm,Nw=V(()=>{re(),ne(),ae(),$d=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},kd=(e,t)=>{let r=e[0].dims.slice(),i=e[1].dims.slice(),[n,a,s]=ef.getShapeOfGemmResult(r,t.transA,i,t.transB,e.length===3?e[2].dims:void 0),l=[n,a];if(!l)throw new Error("Can't use gemm on the given tensors");let u=16,d=Math.ceil(a/u),p=Math.ceil(n/u),f=!0,h=O.size(l),b=[{type:12,data:f?d:h},{type:12,data:n},{type:12,data:a},{type:12,data:s},{type:1,data:t.alpha},{type:1,data:t.beta}],x=["type","type"];e.length===3&&(b.push(...ee(e[2].dims)),x.push("rank")),b.push(...ee(l));let v=$=>{let w="";t.transA&&t.transB?w="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?w="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?w="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(w="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let I=t.alpha===1?"":"value *= uniforms.alpha;",T=P("a",e[0].dataType,e[0].dims),C=P("b",e[1].dataType,e[1].dims),N=T.type.value,z=null,_=[T,C];e.length===3&&(z=P("c",e[2].dataType,e[2].dims.length),_.push(z));let j=Q("output",e[0].dataType,l.length);_.push(j);let R=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${$.registerUniforms(R).declareVariables(..._)}

  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${N}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${w}
    }

    ${I}
    ${z!=null?`let cOffset = ${z.broadcastedIndicesToOffset("vec2(m, n)",j)}; value += ${N}(uniforms.beta) * ${z.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},S=$=>{let w=P("a",e[0].dataType,e[0].dims),I=P("b",e[1].dataType,e[1].dims),T=null,C=[w,I];e.length===3&&(T=P("c",e[2].dataType,e[2].dims.length),C.push(T));let N=Q("output",e[0].dataType,l.length);C.push(N);let z=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],_="",j="";t.transA&&t.transB?(j=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,_="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(j=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,_="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(j=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,_="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(j=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${w.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${I.type.value}(0);
      }
      `,_="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let R=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${$.registerUniforms(z).declareVariables(...C)}
  var<workgroup> tile_a: array<array<${w.type.storage}, ${u}>, ${u}>;
  var<workgroup> tile_b: array<array<${I.type.storage}, ${u}>, ${u}>;
  ${$.mainStart([u,u,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${u};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${u};
    let num_tiles = (uniforms.K - 1) / ${u} + 1;
    var k_start = 0u;
    var value = ${N.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${j}
      k_start = k_start + ${u};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${u}; k++) {
        ${_}
      }
      workgroupBarrier();
    }

    ${R}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${T!=null?`let cOffset = ${T.broadcastedIndicesToOffset("vec2(m, n)",N)}; value += ${N.type.value}(uniforms.beta) * ${T.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return f?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:d*p},programUniforms:b}),getShaderSource:S}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:l,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:b}),getShaderSource:v}},im=e=>{let t=e.transA,r=e.transB,i=e.alpha,n=e.beta;return{transA:t,transB:r,alpha:i,beta:n,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},nm=(e,t)=>{$d(e.inputs),e.compute(kd(e.inputs,t))}}),rt,lt,It,Et,Sd,Td,Id,Ed,Cd,Nd,zd,Ad,am,sm,zw=V(()=>{re(),ne(),ke(),ae(),[rt,lt,It,Et]=[0,1,2,3],Sd=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},Td=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,Id=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,Ed=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,Cd=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Nd=(e,t,r)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${rt}] = batch;
     indices[${lt}] = channel;`+(()=>{switch(r.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${It}] = u32(r);
            indices[${Et}] = u32(c);
          } else {
            return ${t}(0);
          }
        `;case"border":return`
          indices[${It}] = u32(clamp(r, 0, H - 1));
          indices[${Et}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${It}] = gs_reflect(r, border[1], border[3]);
          indices[${Et}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${r.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,zd=(e,t,r)=>(()=>{switch(r.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${rt}], indices[${lt}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${rt}], indices[${lt}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${rt}], indices[${lt}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${rt}], indices[${lt}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${rt}], indices[${lt}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${rt}], indices[${lt}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${r.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ad=(e,t)=>{let r=P("x",e[0].dataType,e[0].dims.length),i=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],n=P("grid",e[1].dataType,i.length,2),a=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(a=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[rt,lt,It,Et]=[0,3,1,2]);let s=Q("output",e[0].dataType,a.length),l=r.type.value,u=O.size(a),d=[{type:12,data:u},...ee(e[0].dims,i,a)],p=f=>`
  ${f.registerUniform("output_size","u32").declareVariables(r,n,s)}
  ${Td}
  ${Id(l)}
  ${Ed(t)}
  ${Cd(t)}
  ${Nd(r,l,t)}

  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${It}]);
      let W_in = i32(uniforms.x_shape[${Et}]);

      ${t.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${s.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${rt}], indices[${It}], indices[${Et}]);
      let nxy = ${n.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${zd(s,l,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:f=>{let h=O.size(a);return{outputs:[{dims:a,dataType:f[0].dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:d}},getShaderSource:p}},am=(e,t)=>{Sd(e.inputs),e.compute(Ad(e.inputs,t))},sm=e=>me({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Ae,jd,om,zn,Md,wr,lm,um=V(()=>{re(),ne(),ke(),Ra(),Pa(),ae(),$t(),Ae=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,jd=(e,t)=>{let r=e[0],i=Ae(e,1),n=Ae(e,2),a=Ae(e,3),s=Ae(e,4),l=Ae(e,5),u=Ae(e,6),d=Ae(e,7);if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let p=r.dims[0],f=r.dims[1],h=r.dims.length===3?r.dims[2]:t.numHeads*r.dims[4],b=f,x=0,v=0,S=Math.floor(h/t.numHeads);if(u&&d&&O.size(u.dims)&&O.size(d.dims)){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(u.dims[0]!==p||u.dims[1]!==t.numHeads||u.dims[3]!==S)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(d.dims[0]!==p||d.dims[1]!==t.numHeads||d.dims[3]!==S)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(u.dims[2]!==d.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');x=u.dims[2],v=u.dims[2]}else if(u&&O.size(u.dims)||d&&O.size(d.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $;if(i&&O.size(i.dims)>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(i.dims[2]!==r.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');$=2,b=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==S)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');$=5,b=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==S)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');$=0,b=i.dims[2]}}else{if(r.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(r.dims[2]!==t.numHeads||r.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}if(a&&O.size(a.dims)>0){if(a.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(i&&i.dims.length===5&&i.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let w=x+b,I=0;if(s&&O.size(s.dims)>0){I=8;let z=s.dims;throw z.length===1?z[0]===p?I=1:z[0]===3*p+2&&(I=3):z.length===2&&z[0]===p&&z[1]===w&&(I=5),I===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let T=!1,C=h;if(n&&O.size(n.dims)>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(b!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');C=n.dims[2]}else{if(b!==n.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');C=n.dims[1]*n.dims[3],T=!0}}let N=!1;if(s&&O.size(s.dims)>0)throw new Error("Key padding mask is not supported");if(l&&O.size(l.dims)>0){if(l.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(l.dims[0]!==p||l.dims[1]!==t.numHeads||l.dims[2]!==f||l.dims[3]!==w)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:p,sequenceLength:f,pastSequenceLength:x,kvSequenceLength:b,totalSequenceLength:w,maxSequenceLength:v,inputHiddenSize:0,hiddenSize:h,vHiddenSize:C,headSize:S,vHeadSize:Math.floor(C/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:I,scale:t.scale,broadcastResPosBias:N,passPastInKv:T,qkvFormat:$}},om=e=>me({...e}),zn=me({perm:[0,2,1,3]}),Md=(e,t,r,i,n,a,s)=>{let l=[i,n,a],u=O.size(l),d=[{type:12,data:u},{type:12,data:s},{type:12,data:a}],p=f=>{let h=Q("qkv_with_bias",t.dataType,l),b=P("qkv",t.dataType,l),x=P("bias",r.dataType,l),v=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${f.registerUniforms(v).declareVariables(b,x,h)}
  ${f.mainStart()}
    ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:l,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:d}),getShaderSource:p},{inputs:[t,r],outputs:[-1]})[0]},wr=(e,t,r,i,n,a,s,l)=>{let u=a;if(s&&O.size(s.dims)>0){if(i===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return u=Md(e,a,s,t,i,r*n,l),u=u.reshape([t,i,r,n]),r===1||i===1?u:e.compute(De(u,zn.perm),{inputs:[u],outputs:[-1]})[0]}else return a.dims.length===3&&(u=a.reshape([t,i,r,n])),r===1||i===1?u:e.compute(De(u,zn.perm),{inputs:[u],outputs:[-1]})[0]},lm=(e,t)=>{let r=jd(e.inputs,t),i=e.inputs[0],n=Ae(e.inputs,1),a=Ae(e.inputs,2),s=Ae(e.inputs,3),l=Ae(e.inputs,4),u=Ae(e.inputs,5),d=Ae(e.inputs,6),p=Ae(e.inputs,7);if(i.dims.length===5)throw new Error("Packed QKV is not implemented");if(n?.dims.length===5)throw new Error("Packed KV is not implemented");let f=n&&a&&n.dims.length===4&&a.dims.length===4,h=wr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,i,s,0);if(f)return kr(e,h,n,a,l,void 0,d,p,u,r);if(!n||!a)throw new Error("key and value must be provided");let b=wr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.headSize,n,s,r.hiddenSize),x=wr(e,r.batchSize,r.numHeads,r.kvSequenceLength,r.vHeadSize,a,s,2*r.hiddenSize);kr(e,h,b,x,l,void 0,d,p,u,r)}}),Od,Rd,Dd,Bd,pa,dm,cm,pm=V(()=>{re(),ne(),ke(),ae(),Od=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Rd=(e,t)=>{let r=[],i=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(n=>r.push(Number(n))),i=r.length),me({numOutputs:i,axis:t.axis,splitSizes:r})},Dd=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${J("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Bd=e=>{let t=e.length,r=[];for(let i=0;i<t;++i){let n=e[i].setByIndices("indices","input[global_idx]");t===1?r.push(n):i===0?r.push(`if (output_number == ${i}u) { ${n} }`):i===t-1?r.push(`else { ${n} }`):r.push(`else if (output_number == ${i}) { ${n} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${r.join(`
`)}
      }`},pa=(e,t)=>{let r=e[0].dims,i=O.size(r),n=e[0].dataType,a=O.normalizeAxis(t.axis,r.length),s=new Array(t.numOutputs),l=P("input",n,r.length),u=new Array(t.numOutputs),d=[],p=[],f=0,h=[{type:12,data:i}];for(let x=0;x<t.numOutputs;x++){f+=t.splitSizes[x],u[x]=f;let v=r.slice();v[a]=t.splitSizes[x],p.push(v),s[x]=Q(`output${x}`,n,v.length),d.push({dims:p[x],dataType:e[0].dataType})}h.push({type:12,data:u},...ee(r,...p));let b=x=>`
  ${x.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",u.length).declareVariables(l,...s)}
  ${Dd(u.length)}
  ${Bd(s)}

  ${x.mainStart()}
    ${x.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${l.offsetToIndices("global_idx")};
    var index = ${l.indicesGet("indices",a)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${J("uniforms.size_in_split_axis","output_number - 1u",u.length)};
      ${l.indicesSet("indices",a,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:b,getRunData:()=>({outputs:d,dispatchGroup:{x:Math.ceil(i/64)},programUniforms:h})}},dm=(e,t)=>{Od(e.inputs);let r=e.inputs.length===1?t:Rd(e.inputs,t);e.compute(pa(e.inputs,r),{inputs:[0]})},cm=e=>{let t=e.axis,r=e.splitSizes,i=e.numOutputs<0?r.length:e.numOutputs;if(i!==r.length)throw new Error("numOutputs and splitSizes length must be equal");return me({axis:t,numOutputs:i,splitSizes:r})}}),Pd,yi,fm,hm=V(()=>{re(),ne(),ke(),ae(),Pd=(e,t)=>{let[r,i,n,a]=e,{numHeads:s,rotaryEmbeddingDim:l}=t;if(r.dims.length!==3&&r.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${r.dims.length}`);if(!O.areEqual(i.dims,[])&&!O.areEqual(i.dims,[1])&&i.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${i.dims.length}`);if(n.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${n.dims.length}`);if(a.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${a.dims.length}`);if(!O.areEqual(n.dims,a.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(l>0&&s===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let u=r.dims[0],d=r.dims[r.dims.length-2],p=n.dims[0],f=O.sizeFromDimension(r.dims,1)/d,h=l===0?n.dims[1]*2:f/s;if(l>h)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(i.dims.length===2){if(u!==i.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${i.dims[0]}`);if(d!==i.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${i.dims[1]}`)}if(h/2!==n.dims[1]&&l/2!==n.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${n.dims[1]}`);if(d>p)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported")},yi=(e,t)=>{let{interleaved:r,numHeads:i,rotaryEmbeddingDim:n,scale:a}=t,s=e[0].dims[0],l=O.sizeFromDimension(e[0].dims,1),u=e[0].dims[e[0].dims.length-2],d=l/u,p=e[2].dims[1],f=n===0?p*2:d/i,h=new Array(s,u,d/f,f-p),b=O.computeStrides(h),x=[{type:1,data:a},{type:12,data:h},{type:12,data:b},...e[0].dims.length===3?new Array({type:12,data:[l,d,f,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[l,f,u*f,1]}):[],...ee(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],v=S=>{let $=P("input",e[0].dataType,e[0].dims.length),w=P("position_ids",e[1].dataType,e[1].dims.length),I=P("cos_cache",e[2].dataType,e[2].dims.length),T=P("sin_cache",e[3].dataType,e[3].dims.length),C=Q("output",e[0].dataType,e[0].dims.length);return S.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:h.length},{name:"global_strides",type:"u32",length:b.length},{name:"input_output_strides",type:"u32",length:b.length}]),`
        ${S.declareVariables($,w,I,T,C)}

        ${S.mainStart(Qt)}
          let half_rotary_emb_dim = uniforms.${I.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${S.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${w.broadcastedIndicesToOffset("bsnh.xy",Q("",w.type.tensor,2))};
            let position_id =
                u32(${w.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${r});
            let j = i + select(half_rotary_emb_dim, 1, ${r});
            let re = ${$.getByOffset("i")} * ${I.get("position_id","bsnh[3]")} -
                ${$.getByOffset("j")} * ${T.get("position_id","bsnh[3]")};
            ${C.setByOffset("i","re")}
            let im = ${$.getByOffset("i")} * ${T.get("position_id","bsnh[3]")} +
                ${$.getByOffset("j")} * ${I.get("position_id","bsnh[3]")};
            ${C.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${C.setByOffset("k",$.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:me({interleaved:r}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:v,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(h)/Qt)},programUniforms:x})}},fm=(e,t)=>{Pd(e.inputs,t),e.compute(yi(e.inputs,t))}}),Ld,Ud,An,qd,mm,Aw=V(()=>{ke(),re(),Pa(),um(),pm(),$t(),hm(),ae(),Ld=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let r=e[0],i=e[1],n=e[2],a=e[3],s=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(r.dims.length!==3&&r.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let l=!1,u=r.dims[0],d=r.dims[1],p=r.dims.length===3?l?r.dims[2]/3:r.dims[2]:t.numHeads*r.dims[4],f=d,h=0,b=!i||i.dims.length===0,x=Math.floor(b?p/(t.numHeads+2*t.kvNumHeads):p/t.numHeads);b&&(p=x*t.numHeads);let v=a&&a.dims.length!==0,S=s&&s.dims.length!==0;if(v&&a.dims.length===4&&a.dims[0]===u&&a.dims[1]!==t.kvNumHeads&&a.dims[2]===t.kvNumHeads&&a.dims[3]===x)throw new Error("BSNH pastKey/pastValue is not supported");if(v&&S){if(a.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(s.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');h=a.dims[2]}else if(v||S)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let $=1;if(i&&i.dims.length>0){if(r.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(i.dims.length<3||i.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(r.dims[0]!==i.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(i.dims.length===3){if(r.dims[2]%i.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');f=i.dims[1]}else if(i.dims.length===5){if(i.dims[2]!==t.numHeads||i.dims[3]!==2||i.dims[4]!==x)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(n)throw new Error('Expect "value" be none when "key" has packed kv format.');f=i.dims[1]}else{if(i.dims[1]!==t.numHeads||i.dims[3]!==x)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');f=i.dims[2]}}else{if(r.dims.length!==3&&r.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(r.dims.length===5&&(r.dims[2]!==t.numHeads||r.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');$=3}let w=0,I=!1,T=t.kvNumHeads?x*t.kvNumHeads:p;if(n&&n.dims.length>0){if(n.dims.length!==3&&n.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(r.dims[0]!==n.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(n.dims.length===3){if(f!==n.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');T=n.dims[2]}else{if(f!==n.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');T=n.dims[1]*n.dims[3],I=!0}}let C=e.length>4?e[5]:void 0;if(C&&C.dims.length!==1&&C.dims[0]!==u)throw new Error('Input "seqlens" is expected to have 1 dimension and the same dim 0 as batch_size');return{batchSize:u,sequenceLength:d,pastSequenceLength:h,kvSequenceLength:f,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:p,vHiddenSize:T,headSize:x,vHeadSize:Math.floor(T/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:w,scale:t.scale,broadcastResPosBias:!1,passPastInKv:I,qkvFormat:$}},Ud=me({perm:[0,2,1,3]}),An=(e,t,r)=>{let i=t,n=r.kvNumHeads;return t.dims.length===3&&r.kvSequenceLength!==0&&(i=t.reshape([r.batchSize,r.kvSequenceLength,n,r.headSize]),i=e.compute(De(i,Ud.perm),{inputs:[i],outputs:[-1]})[0]),i},qd=(e,t,r,i)=>{let n=7,a=["type","type"],s=[e*t],l=e*t,u=[{type:12,data:l},{type:12,data:t},{type:12,data:e}],d=p=>{let f=P("seq_lens",r.dataType,r.dims),h=P("total_seq_lens",i.dataType,i.dims),b=Q("pos_ids",n,s),x=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${p.registerUniforms(x).declareVariables(f,h,b)}
  ${p.mainStart()}
    ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${h.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${f.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${b.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${b.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:a},getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(l/64)},programUniforms:u}),getShaderSource:d}},mm=(e,t)=>{let r=Ld(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(e.inputs[1]?.dims.length===5)throw new Error("Packed KV is not implemented");let i=e.inputs[0],n=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,a=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,s=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,l=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,u=e.inputs.length>4?e.inputs[5]:void 0,d=e.inputs.length>5?e.inputs[6]:void 0,p=r.kvNumHeads?r.kvNumHeads:r.numHeads,f=me({axis:2,numOutputs:3,splitSizes:[r.numHeads*r.headSize,p*r.headSize,p*r.headSize]}),[h,b,x]=!n&&!a?e.compute(pa([i],f),{inputs:[i],outputs:[-1,-1,-1]}):[i,n,a],v,S;if(t.doRotary){let T=e.compute(qd(r.batchSize,r.sequenceLength,u,d),{inputs:[u,d],outputs:[-1]})[0],C=e.inputs[7],N=e.inputs[8],z=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),_=[h,T,C,N],j=[-1];v=e.compute(yi(_,z),{inputs:_,outputs:j})[0],_.splice(0,1,b);let R=me({interleaved:t.rotaryInterleaved!==0,numHeads:r.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});S=e.compute(yi(_,R),{inputs:_,outputs:j})[0]}let $=wr(e,r.batchSize,r.numHeads,r.sequenceLength,r.headSize,t.doRotary?v:h,void 0,0),w=An(e,t.doRotary?S:b,r),I=An(e,x,r);kr(e,$,w,I,void 0,void 0,s,l,void 0,r,u,d)}}),jn,Wd,Vd,gm,jw=V(()=>{re(),ne(),$t(),ae(),jn=(e,t,r,i,n,a,s,l)=>{let u=$e(a),d=u===1?"f32":`vec${u}f`,p=u===1?"vec2f":`mat2x${u}f`,f=n*s,h=64;f===1&&(h=256);let b=[n,s,a/u],x=[n,s,2],v=["rank","type","type"],S=[];S.push(...ee(b,x));let $=w=>{let I=P("x",t.dataType,3,u),T=P("scale",r.dataType,r.dims),C=P("bias",i.dataType,i.dims),N=Q("output",1,3,2),z=[I,T,C,N];return`
  var<workgroup> workgroup_shared : array<${p}, ${h}>;
  const workgroup_size = ${h}u;
  ${w.declareVariables(...z)}
  ${w.mainStart(h)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${d}(0);
    var squared_sum = ${d}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${d}(${I.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${p}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${vt("workgroup_shared[0][0]",u)} / f32(hight * ${u});
      let squared_sum_final = ${vt("workgroup_shared[0][1]",u)} / f32(hight * ${u});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${l}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${u};${l};${h}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:x,dataType:1}],dispatchGroup:{x:f},programUniforms:S}),getShaderSource:$},{inputs:[t,r,i],outputs:[-1]})[0]},Wd=(e,t,r)=>{let i=t[0].dims,n=i,a=2,s=i[0],l=i[1],u=O.sizeFromDimension(i,a),d=$e(u),p=O.size(n)/d,f=jn(e,t[0],t[1],t[2],s,u,l,r.epsilon),h=[s,l,u/d],b=[s,l],x=["type","none"],v=S=>{let $=P("x",t[0].dataType,h.length,d),w=P("scale_shift",1,b.length,2),I=Q("output",t[0].dataType,h.length,d),T=[$,w,I];return`
  ${S.registerUniform("output_size","u32").declareVariables(...T)}
  ${S.mainStart()}
  ${S.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${I.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${w.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${$.getByOffset("global_idx")} * ${I.type.value}(scale_shift.x) + ${I.type.value}(scale_shift.y);
      ${I.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${d}`,inputDependencies:x},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(p/64)},programUniforms:[{type:12,data:p},...ee(h,b,h)]}),getShaderSource:v},{inputs:[t[0],f]})},Vd=(e,t,r)=>{let i=t[0].dims,n=i,a=i[0],s=i[i.length-1],l=O.sizeFromDimension(i,1)/s,u=$e(s),d=O.size(n)/u,p=[{type:12,data:l},{type:12,data:Math.floor(s/u)}],f=["type","type"],h=!1,b=[0,i.length-1];for(let $=0;$<i.length-2;$++)h=h||i[$+1]!==1,b.push($+1);h=h&&i[i.length-1]!==1;let x=h?e.compute(De(e.inputs[0],b),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:i.length},($,w)=>i[b[w]])),v=jn(e,x,t[1],t[2],a,l,s,r.epsilon),S=$=>{let w=Ie(t[0].dataType),I=u===1?"vec2f":`mat${u}x2f`,T=z=>{let _=z===0?"x":"y",j=u===1?"f32":`vec${u}f`;switch(u){case 1:return`${w}(${j}(scale.${_}))`;case 2:return`vec2<${w}>(${j}(scale[0].${_}, scale[1].${_}))`;case 4:return`vec4<${w}>(${j}(scale[0].${_}, scale[1].${_}, scale[2].${_}, scale[3].${_}))`;default:throw new Error(`Not supported compoents ${u}`)}},C=P("input",t[0].dataType,t[0].dims,u),N=Q("output",t[0].dataType,n,u);return`
  @group(0) @binding(0) var<storage, read> input : array<${C.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${I}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${N.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${$.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${T(0)}, ${T(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${u}`,inputDependencies:f},getRunData:()=>({outputs:[{dims:n,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:p}),getShaderSource:S},{inputs:[t[0],v]})},gm=(e,t)=>{t.format==="NHWC"?Vd(e,e.inputs,t):Wd(e,e.inputs,t)}}),Gd,Hd,ym,Mw=V(()=>{re(),ne(),ae(),Gd=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Hd=(e,t,r)=>{let i=t.simplified,n=e[0].dims,a=e[1],s=!i&&e[2],l=n,u=O.normalizeAxis(t.axis,n.length),d=O.sizeToDimension(n,u),p=O.sizeFromDimension(n,u),f=O.size(a.dims),h=s?O.size(s.dims):0;if(f!==p||s&&h!==p)throw new Error(`Size of X.shape()[axis:] == ${p}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${f} and bias size of ${h}`);let b=[];for(let C=0;C<n.length;++C)C<u?b.push(n[C]):b.push(1);let x=$e(p),v=["type","type"],S=[{type:12,data:d},{type:1,data:p},{type:12,data:Math.floor(p/x)},{type:1,data:t.epsilon}];s&&v.push("type");let $=r>1,w=r>2,I=C=>{let N=Ie(e[0].dataType),z=[P("x",e[0].dataType,e[0].dims,x),P("scale",a.dataType,a.dims,x)];s&&z.push(P("bias",s.dataType,s.dims,x)),z.push(Q("output",e[0].dataType,l,x)),$&&z.push(Q("mean_data_output",1,b)),w&&z.push(Q("inv_std_output",1,b));let _=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${C.registerUniforms(_).declareVariables(...z)}
  ${C.mainStart()}
    ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${ia("f32",x)};
    var mean_square_vector = ${ia("f32",x)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${Kt(N,x,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${vt("mean_vector",x)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${vt("mean_square_vector",x)} / uniforms.norm_size ${i?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${Kt(N,x,"x[j + offset]")};
      let f32scale = ${Kt(N,x,"scale[j]")};
      output[j + offset] = ${z[0].type.value}((f32input ${i?"":"- mean"}) * inv_std_dev * f32scale
        ${s?`+ ${Kt(N,x,"bias[j]")}`:""}
      );
    }

    ${$?"mean_data_output[global_idx] = mean":""};
    ${w?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},T=[{dims:l,dataType:e[0].dataType}];return $&&T.push({dims:b,dataType:1}),w&&T.push({dims:b,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${x};${r};${i}`,inputDependencies:v},getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(d/64)},programUniforms:S}),getShaderSource:I}},ym=(e,t)=>{Gd(e.inputs),e.compute(Hd(e.inputs,t,e.outputCount))}}),Fd,xm,Ow=V(()=>{ne(),Va(),Ga(),Fd=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},xm=e=>{Fd(e.inputs);let t=Xt.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let r=t[t.length-1],i=e.inputs[0].dims[e.inputs[0].dims.length-1];if(r<8&&i<8)e.compute(Wa(e.inputs,{activation:""},t));else{let n=t[t.length-2],a=O.size(e.inputs[0].dims.slice(0,-2)),s=O.size(e.inputs[1].dims.slice(0,-2));if(a!==1&&n===1&&s===1){let l=e.inputs[0].reshape([1,a,i]),u=e.inputs[1].reshape([1,i,r]),d=[1,a,r],p=[l,u];e.compute(gi(p,{activation:""},t,d),{inputs:p})}else e.compute(gi(e.inputs,{activation:""},t))}}}),Kd,Zd,Yd,bm,wm,Rw=V(()=>{re(),ne(),ke(),ae(),Kd=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let r=e[0],i=r.dims.length;if(r.dims[i-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let n=Math.floor((t.k+t.blockSize-1)/t.blockSize),a=t.blockSize/8*t.bits,s=e[1];if(!O.areEqual(s.dims,[t.n,n,a]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let l=e[2].dims;if(O.size(l)!==t.n*n)throw new Error("scales input size error.");if(e.length===4){let u=e[3].dims,d=t.n*(t.bits===8?n:Math.floor((n*t.bits+7)/8));if(O.size(u)!==d)throw new Error("zeroPoints input size error.")}},Zd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,l=r.slice(0,i-2),u=O.size(l),d=e[1].dims[2]/4,p=e[0].dataType,f=$e(t.k),h=$e(d),b=$e(s),x=l.concat([n,s]),v=n>1&&s/b%2===0?2:1,S=O.size(x)/b/v,$=64,w=[],I=[u,n,a/f],T=O.convertShape(e[1].dims).slice();T.splice(-1,1,d/h),w.push(...ee(I)),w.push(...ee(T)),w.push(...ee(e[2].dims)),e.length===4&&w.push(...ee(O.convertShape(e[3].dims)));let C=[u,n,s/b];w.push(...ee(C));let N=z=>{let _=I.length,j=P("a",e[0].dataType,_,f),R=P("b",12,T.length,h),H=P("scales",e[2].dataType,e[2].dims.length),W=[j,R,H],B=e.length===4?P("zero_points",12,e[3].dims.length):void 0;B&&W.push(B);let M=C.length,L=Q("output",e[0].dataType,M,b),F=Ie(e[0].dataType),Y=(()=>{switch(f){case 1:return`array<${F}, 8>`;case 2:return`mat4x2<${F}>`;case 4:return`mat2x4<${F}>`;default:throw new Error(`${f}-component is not supported.`)}})(),X=()=>{let q=`
          // reuse a data
            var input_offset = ${j.indicesToOffset(`${j.type.indices}(batch, row, word_offset)`)};
            var a_data: ${Y};
            for (var j: u32 = 0; j < ${8/f}; j++) {
              a_data[j] = ${j.getByOffset("input_offset")};
              input_offset++;
            }
          `;for(let K=0;K<b*v;K++)q+=`
            b_value = ${h===1?`b${K}_data`:`b${K}_data[i]`};
            b_value_lower = unpack4xU8(b_value & b_mask);
            b_value_upper = unpack4xU8((b_value >> 4) & b_mask);
            b_quantized_values = ${Y}(${Array.from({length:4},(ie,ue)=>`${F}(b_value_lower[${ue}]), ${F}(b_value_upper[${ue}])`).join(", ")});
            b_dequantized_values = ${f===1?`${Y}(${Array.from({length:8},(ie,ue)=>`(b_quantized_values[${ue}] - ${B?`zero_point${K}`:"zero_point"}) * scale${K}`).join(", ")});`:`(b_quantized_values - ${Y}(${Array(8).fill(`${B?`zero_point${K}`:"zero_point"}`).join(",")})) * scale${K};`};
            workgroup_shared[local_id.x * ${v} + ${Math.floor(K/b)}]${b>1?`[${K%b}]`:""} += ${Array.from({length:8/f},(ie,ue)=>`${f===1?`a_data[${ue}] * b_dequantized_values[${ue}]`:`dot(a_data[${ue}], b_dequantized_values[${ue}])`}`).join(" + ")};
          `;return q},te=()=>{let q=`
            var col_index = col * ${b};
            ${B?`
            let zero_point_bytes_per_col = (nBlocksPerCol + 1) / 2;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${F}(8);`}
            `;for(let K=0;K<b*v;K++)q+=`
            let scale${K} = ${H.getByOffset("col_index * nBlocksPerCol + block")};
            ${B?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block >> 0x1u);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            zero_point_word = ${B.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${K} = ${F}((zero_point_word) & 0xFu);`:""}
            col_index += 1;`;return q},pe=()=>{let q=`col_index = col * ${b};`;for(let K=0;K<b*v;K++)q+=`
            let b${K}_data = ${R.getByIndices(`${R.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return q+=`
            var b_value: u32;
            let b_mask: u32 = 0x0F0F0F0Fu;
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${Y};
            var b_dequantized_values: ${Y};`,q};return`
        var<workgroup> workgroup_shared: array<${L.type.value}, ${v*$}>;
        ${z.declareVariables(...W,L)}
        ${z.mainStart([$,1,1])}
          let output_indices = ${L.offsetToIndices(`(global_idx / ${$}) * ${v}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${$}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/f};
            ${te()}
            for (var word: u32 = 0; word < ${d}; word += ${h}) {
              ${pe()}
              for (var i: u32 = 0; i < ${h}; i++) {
                ${X()}
                word_offset += ${8/f};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${v}) {
            var output_value: ${L.type.value} = ${L.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${$}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${v};
            }
            ${L.setByIndices(`${L.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${f};${h};${b};${v};${$}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:x,dataType:p}],dispatchGroup:{x:S},programUniforms:w}),getShaderSource:N}},Yd=(e,t)=>{let r=e[0].dims,i=r.length,n=r[i-2],a=t.k,s=t.n,l=r.slice(0,i-2),u=O.size(l),d=e[1].dims[2]/4,p=e[0].dataType,f=$e(t.k),h=$e(d),b=l.concat([n,s]),x=128,v=s%8===0?8:s%4===0?4:1,S=x/v,$=S*h*8,w=$/f,I=$/t.blockSize,T=O.size(b)/v,C=[],N=[u,n,a/f],z=O.convertShape(e[1].dims).slice();z.splice(-1,1,d/h),C.push(...ee(N)),C.push(...ee(z)),C.push(...ee(e[2].dims)),e.length===4&&C.push(...ee(O.convertShape(e[3].dims)));let _=[u,n,s];C.push(...ee(_));let j=R=>{let H=N.length,W=P("a",e[0].dataType,H,f),B=P("b",12,z.length,h),M=P("scales",e[2].dataType,e[2].dims.length),L=[W,B,M],F=e.length===4?P("zero_points",12,e[3].dims.length):void 0;F&&L.push(F);let Y=_.length,X=Q("output",e[0].dataType,Y),te=Ie(e[0].dataType),pe=()=>{switch(f){case 1:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${te}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${te}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${f}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${W.type.value}, ${w}>;
        var<workgroup> inter_results: array<array<${X.type.value}, ${S}>, ${v}>;
        ${R.declareVariables(...L,X)}
        ${R.mainStart([S,v,1])}
          let output_indices = ${X.offsetToIndices(`workgroup_index * ${v}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${I} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${w};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${w}; a_offset += ${x})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${W.getByIndices(`${W.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${W.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${I} + local_id.x;
            ${F?`
            let zero_point_bytes_per_col = (n_blocks_per_col + 1) / 2;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block >> 0x1u);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_nibble_offset: u32 = block & 0x1u;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_nibble_offset << 2);
            let zero_point_word = ${F.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${te}((zero_point_word) & 0xFu);`:`
            // The default zero point is 8 for unsigned 4-bit quantization.
            let zero_point = ${te}(8);`}
            let scale = ${M.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${B.getByIndices(`${B.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/f};
            for (var i: u32 = 0; i < ${h}; i++) {
              ${pe()}
              let b_value = ${h===1?"b_data":"b_data[i]"};
              let b_value_lower = unpack4xU8(b_value & 0x0F0F0F0Fu);
              let b_value_upper = unpack4xU8((b_value >> 4) & 0x0F0F0F0Fu);
              let b_quantized_values = mat2x4<${te}>(${Array.from({length:4},(q,K)=>`${te}(b_value_lower[${K}]), ${te}(b_value_upper[${K}])`).join(", ")});
              let b_dequantized_values = (b_quantized_values - mat2x4<${te}>(${Array(8).fill("zero_point").join(",")})) * scale;
              inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(q,K)=>`${`dot(a_data${K}, b_dequantized_values[${K}])`}`).join(" + ")};
              word_offset += ${8/f};
            }
            workgroupBarrier();
          }

          if (local_idx < ${v}) {
            var output_value: ${X.type.value} = ${X.type.value}(0);
            for (var b = 0u; b < ${S}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${X.setByIndices(`${X.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${f};${h};${S};${v}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:p}],dispatchGroup:{x:T},programUniforms:C}),getShaderSource:j}},bm=(e,t)=>{Kd(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Yd(e.inputs,t)):e.compute(Zd(e.inputs,t))},wm=e=>me(e)}),Xd,Qd,Jd,ec,tc,rc,ic,nc,vm,Dw=V(()=>{re(),ne(),ae(),Xd=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Qd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
            k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${J("uniforms.x_shape",n,t)})) {
              break;
            }
            offset += k * i32(${J("uniforms.x_strides",n,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${i}
            value = x[offset];
          }
      `},Jd=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${J("uniforms.x_shape",n,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${J("uniforms.x_shape",n,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},ec=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${J("uniforms.x_shape",n,t)})) {
                  k = i32(${J("uniforms.x_shape",n,t)}) - 1;
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},tc=(e,t,r)=>{let i="";for(let n=t-1;n>=0;--n)i+=`
                k = i32(${e.indicesGet("indices",n)}) - ${J("uniforms.pads",n,r)};
                if (k < 0)  {
                  k += i32(${J("uniforms.x_shape",n,t)}]);
                }
                if (k >= i32(${J("uniforms.x_shape",n,t)})) {
                  k -= i32(${J("uniforms.x_shape",n,t)});
                }
                offset += k * i32(${J("uniforms.x_strides",n,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${i}
              value = x[offset];
          `},rc=(e,t,r)=>{switch(r.mode){case 0:return Qd(e,t,r.pads.length);case 1:return Jd(e,t,r.pads.length);case 2:return ec(e,t,r.pads.length);case 3:return tc(e,t,r.pads.length);default:throw new Error("Invalid mode")}},ic=(e,t)=>{let r=O.padShape(e[0].dims.slice(),t.pads),i=e[0].dims,n=O.size(r),a=[{type:12,data:n},{type:6,data:t.pads}],s=e.length>=3&&e[2].data;t.mode===0&&a.push({type:s?e[2].dataType:1,data:t.value}),a.push(...ee(e[0].dims,r));let l=["rank"],u=d=>{let p=Q("output",e[0].dataType,r.length),f=P("x",e[0].dataType,i.length),h=f.type.value,b=rc(p,i.length,t),x=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&x.push({name:"constant_value",type:s?h:"f32"}),`
            ${d.registerUniforms(x).declareVariables(f,p)}
            ${d.mainStart()}
            ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${p.offsetToIndices("global_idx")};

            var value = ${h}(0);
            ${b}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${s}`,inputDependencies:l},getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(O.size(r)/64)},programUniforms:a}),getShaderSource:u}},nc=(e,t)=>{if(e.length>1){let r=e[1].getBigInt64Array(),i=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,n=e[0].dims.length,a=new Int32Array(2*n).fill(0);if(e.length>=4){let l=e[3].getBigInt64Array();for(let u=0;u<l.length;u++)a[Number(l[u])]=Number(r[u]),a[Number(l[u])+n]=Number(r[u+l.length])}else r.forEach((l,u)=>a[Number(u)]=Number(l));let s=[];return a.forEach(l=>s.push(l)),{mode:t.mode,value:i,pads:s}}else return t},vm=(e,t)=>{Xd(e.inputs);let r=nc(e.inputs,t);e.compute(ic(e.inputs,r),{inputs:[0]})}}),fr,Mn,On,Rn,Dn,ac,sc,Bn,Pn,_m,$m,Ln,km,Sm,Un,Tm,Im,Em,Cm,Bw=V(()=>{Ue(),re(),ne(),ae(),fr=e=>{if(ve.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},Mn=(e,t,r)=>{let i=t.format==="NHWC",n=e.dims.slice();i&&n.splice(1,0,n.pop());let a=Object.hasOwnProperty.call(t,"dilations"),s=t.kernelShape.slice(),l=t.strides.slice(),u=a?t.dilations.slice():[],d=t.pads.slice();hi.adjustPoolAttributes(r,n,s,l,u,d);let p=hi.computePoolOutputShape(r,n,l,u,s,d,t.autoPad),f=Object.assign({},t);a?Object.assign(f,{kernelShape:s,strides:l,pads:d,dilations:u,cacheKey:t.cacheKey}):Object.assign(f,{kernelShape:s,strides:l,pads:d,cacheKey:t.cacheKey});let h=p.slice();return h.push(h.splice(1,1)[0]),[f,i?h:p]},On=(e,t)=>{let r=t.format==="NHWC",i=O.size(e),n=O.size(t.kernelShape),a=[{type:12,data:i},{type:12,data:n}],s=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let l=t.kernelShape[t.kernelShape.length-1],u=t.strides[t.strides.length-1],d=t.pads[t.pads.length/2-1],p=t.pads[t.pads.length-1],f=!!(d+p);a.push({type:12,data:l},{type:12,data:u},{type:12,data:d},{type:12,data:p}),s.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let h=!1;if(t.kernelShape.length===2){let b=t.kernelShape[t.kernelShape.length-2],x=t.strides[t.strides.length-2],v=t.pads[t.pads.length/2-2],S=t.pads[t.pads.length-2];h=!!(v+S),a.push({type:12,data:b},{type:12,data:x},{type:12,data:v},{type:12,data:S}),s.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[a,s,!0,f,h]}else{if(r)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let l=O.computeStrides(t.kernelShape);a.push({type:12,data:l},{type:12,data:t.pads},{type:12,data:t.strides}),s.push({name:"kernelStrides",type:"u32",length:l.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let u=t.pads.reduce((d,p)=>d+p);return[a,s,!!u,!1,!1]}},Rn=(e,t,r,i,n,a,s,l,u,d,p,f)=>{let h=n.format==="NHWC",b=t.type.value,x=Q("output",t.type.tensor,i);if(n.kernelShape.length<=2){let v="",S="",$="",w=r-(h?2:1);if(p?v=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${w}] < 0 || xIndices[${w}]
                      >= uniforms.x_shape[${w}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`:v=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${w}] = indices[${w}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${a}
                }`,n.kernelShape.length===2){let I=r-(h?3:2);f?S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${I}] < 0 || xIndices[${I}] >= uniforms.x_shape[${I}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:S=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${I}] = indices[${I}] * uniforms.sh - uniforms.phStart + j;
                `,$=`
              }
            `}return`
            ${e.registerUniforms(u).declareVariables(t,x)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${x.offsetToIndices("global_idx")};
              var xIndices = ${x.offsetToIndices("global_idx")};

              var value = ${b}(${l});
              var pad = 0;
              ${S}
              ${v}
              ${$}
              ${s}

              output[global_idx] = value;
            }`}else{if(h)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let v=n.kernelShape.length,S=n.pads.length,$="";return d?$=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${a}
              }`:$=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${a}
            `,`
            ${e.registerUniforms(u).declareVariables(t,x)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${x.offsetToIndices("global_idx")};
              var xIndices = ${x.offsetToIndices("global_idx")};

              var offsets: array<u32, ${v}>;

              var value = ${b}(${l});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${v-1}u; j++) {
                  offsets[j] = offset / ${J("uniforms.kernelStrides","j",v)};
                  offset -= offsets[j] * ${J("uniforms.kernelStrides","j",v)};
                }
                offsets[${v-1}] = offset;

                isPad = false;
                for (var j = ${r-v}u; j < ${r}u; j++) {
                  xIndices[j] = indices[j] * ${J("uniforms.strides",`j - ${r-v}u`,v)}
                    + offsets[j - ${r-v}u] - ${J("uniforms.pads","j - 2u",S)};
                  ${$}
              }
              ${s}

              output[global_idx] = value;
            }`}},Dn=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,ac=e=>`${Dn(e)};${e.countIncludePad}`,sc=e=>`${Dn(e)};${e.storageOrder};${e.dilations}`,Bn=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),Pn=(e,t,r,i)=>{let[n,a]=Mn(t,i,r),s=P("x",t.dataType,t.dims.length),l=s.type.value,u="value += x_val;",d="";n.countIncludePad?d+=`value /= ${l}(uniforms.kernelSize);`:d+=`value /= ${l}(i32(uniforms.kernelSize) - pad);`;let[p,f,h,b,x]=On(a,n);p.push(...ee(t.dims,a));let v=["rank"];return{name:e,shaderCache:{hint:`${i.cacheKey};${h};${b};${x}`,inputDependencies:v},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:p}),getShaderSource:S=>Rn(S,s,t.dims.length,a.length,n,u,d,0,f,h,b,x)}},_m=e=>{let t=e.count_include_pad!==0,r=Bn(e);if(r.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for AveragePool");let i={countIncludePad:t,...r,cacheKey:""};return{...i,cacheKey:ac(i)}},$m=(e,t)=>{fr(e.inputs),e.compute(Pn("AveragePool",e.inputs[0],!1,t))},Ln={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},km=e=>{let t=e.format;return{format:t,...Ln,cacheKey:t}},Sm=(e,t)=>{fr(e.inputs),e.compute(Pn("GlobalAveragePool",e.inputs[0],!0,t))},Un=(e,t,r,i)=>{let[n,a]=Mn(t,i,r),s=`
      value = max(x_val, value);
    `,l="",u=P("x",t.dataType,t.dims.length),d=["rank"],[p,f,h,b,x]=On(a,n);return p.push(...ee(t.dims,a)),{name:e,shaderCache:{hint:`${i.cacheKey};${h};${b};${x}`,inputDependencies:d},getRunData:()=>({outputs:[{dims:a,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(O.size(a)/64)},programUniforms:p}),getShaderSource:v=>Rn(v,u,t.dims.length,a.length,n,s,l,t.dataType===10?-65504:-1e5,f,h,b,x)}},Tm=(e,t)=>{fr(e.inputs),e.compute(Un("MaxPool",e.inputs[0],!1,t))},Im=e=>{let t=e.storage_order,r=e.dilations,i=Bn(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(i.ceilMode!==0)throw new Error("using ceil() in shape computation is not yet supported for MaxPool");let n={storageOrder:t,dilations:r,...i,cacheKey:""};return{...n,cacheKey:sc(n)}},Em=e=>{let t=e.format;return{format:t,...Ln,cacheKey:t}},Cm=(e,t)=>{fr(e.inputs),e.compute(Un("GlobalMaxPool",e.inputs[0],!0,t))}}),oc,lc,Nm,zm,Pw=V(()=>{re(),ne(),ke(),ae(),oc=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[0].dataType===6&&e.length>2)throw new Error("In the case of dequantizing int32 there is no zero point.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((r,i)=>r===e[2].dims[i]).reduce((r,i)=>r&&i,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((n,a)=>a===t.axis||n===e[0].dims[a]).reduce((n,a)=>n&&a,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let r=e[0].dims[t.axis],i=e[1].dims[t.axis];if(t.blockSize<Math.ceil(r/i)||t.blockSize>Math.ceil(r/(i-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},lc=(e,t)=>{let r=O.normalizeAxis(t.axis,e[0].dims.length),i=e[0].dataType,n=i===3,a=e[0].dims,s=e[1].dataType,l=O.size(a),u=i===3||i===2,d=u?[Math.ceil(O.size(e[0].dims)/4)]:e[0].dims,p=e[1].dims,f=e.length>2?e[2]:void 0,h=f?u?[Math.ceil(O.size(f.dims)/4)]:f.dims:void 0,b=p.length===0||p.length===1&&p[0]===1,x=b===!1&&p.length===1,v=$e(l),S=b&&(!u||v===4),$=S?v:1,w=S&&!u?v:1,I=P("input",u?12:i,d.length,w),T=P("scale",s,p.length),C=f?P("zero_point",u?12:i,h.length):void 0,N=Q("output",s,a.length,$),z=[I,T];C&&z.push(C);let _=[d,p];f&&_.push(h);let j=[{type:12,data:l/$},{type:12,data:r},{type:12,data:t.blockSize},...ee(..._,a)],R=H=>{let W=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${H.registerUniforms(W).declareVariables(...z,N)}
      ${H.mainStart()}
          ${H.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${N.offsetToIndices("global_idx")};

          // Set input x
          ${u?`
            let input = ${I.getByOffset("global_idx / 4")};
            let x_vec = ${n?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${$===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${I.getByOffset("global_idx")};`};

          // Set scale input
          ${b?`let scale_value= ${T.getByOffset("0")}`:x?`
            let scale_index = ${N.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${T.getByOffset("scale_index")};`:`
            var scale_indices: ${T.type.indices} = output_indices;
            let index = ${T.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${T.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${T.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${C?b?u?`
                let zero_point_input = ${C.getByOffset("0")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${C.getByOffset("0")}`:x?u?`
                let zero_point_index = ${N.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${C.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${N.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${C.getByOffset("zero_point_index")};`:u?`
                let zero_point_offset = ${T.indicesToOffset("scale_indices")};
                let zero_point_input = ${C.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${n?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${C.getByIndices("scale_indices")};`:`let zero_point_value = ${u?n?"i32":"u32":I.type.value}(0);`};
      // Compute and write output
      ${N.setByOffset("global_idx",`${N.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getShaderSource:R,getRunData:()=>({outputs:[{dims:a,dataType:s}],dispatchGroup:{x:Math.ceil(l/$/64),y:1,z:1},programUniforms:j})}},Nm=(e,t)=>{oc(e.inputs,t),e.compute(lc(e.inputs,t))},zm=e=>me({axis:e.axis,blockSize:e.blockSize})}),uc,dc,Am,Lw=V(()=>{Ue(),re(),ae(),uc=(e,t,r)=>{let i=e===t,n=e<t&&r<0,a=e>t&&r>0;if(i||n||a)throw new Error("Range these inputs' contents are invalid.")},dc=(e,t,r,i)=>{let n=Math.abs(Math.ceil((t-e)/r)),a=[n],s=n,l=[{type:12,data:s},{type:i,data:e},{type:i,data:r},...ee(a)],u=d=>{let p=Q("output",i,a.length),f=p.type.value,h=[{name:"outputSize",type:"u32"},{name:"start",type:f},{name:"delta",type:f}];return`
        ${d.registerUniforms(h).declareVariables(p)}
        ${d.mainStart()}
        ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${f}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${i}`},getShaderSource:u,getRunData:()=>({outputs:[{dims:a,dataType:i}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:l})}},Am=e=>{let t=0,r=0,i=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],r=e.inputs[1].getInt32Array()[0],i=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],r=e.inputs[1].getFloat32Array()[0],i=e.inputs[2].getFloat32Array()[0]),ve.webgpu.validateInputContent&&uc(t,r,i),e.compute(dc(t,r,i,e.inputs[0].dataType),{inputs:[]})}}),cc,pc,jm,Mm,Uw=V(()=>{re(),ne(),ke(),ae(),cc=(e,t,r,i)=>{if(e!=="none"&&i!=="i32"&&i!=="u32"&&i!=="f32")throw new Error(`Input ${i} is not supported with reduction ${e}.`);let n=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,a=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${r};`;case"add":return i==="i32"||i==="u32"?`atomicAdd(&${t}, bitcast<${i}>(${r}));`:`
              ${n}bitcast<${i}>(oldValue) + (${r})${a}`;case"max":return i==="i32"||i==="u32"?`atomicMax(&${t}, bitcast<${i}>(${r}));`:`
                ${n}max(bitcast<f32>(oldValue), (${r}))${a}`;case"min":return i==="i32"||i==="u32"?`atomicMin(&${t}, bitcast<${i}>(${r}));`:`${n}min(bitcast<${i}>(oldValue), (${r}))${a}`;case"mul":return`${n}(bitcast<${i}>(oldValue) * (${r}))${a}`;default:throw new Error(`Reduction ${e} is not supported.`)}},pc=(e,t)=>{let r=e[0].dims,i=e[1].dims,n=r,a=1,s=Math.ceil(O.sizeToDimension(i,i.length-1)/a),l=i[i.length-1],u=O.sizeFromDimension(r,l),d=[{type:12,data:s},{type:12,data:l},{type:12,data:u},...ee(e[1].dims,e[2].dims,n)],p=f=>{let h=P("indices",e[1].dataType,e[1].dims.length),b=P("updates",e[2].dataType,e[2].dims.length,a),x=t.reduction!=="none"&&t.reduction!==""?lf("output",e[0].dataType,n.length):Q("output",e[0].dataType,n.length,a);return`
      ${f.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables(h,b,x)}
      ${f.mainStart()}
        ${f.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${cc(t.reduction,"output[data_offset + i]","value",x.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:d}),getShaderSource:p}},jm=e=>me({reduction:e.reduction}),Mm=(e,t)=>{e.compute(pc(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),fc,hc,mc,qn,gc,yc,xc,bc,wc,vc,_c,$c,Wn,kc,Sc,Tc,Ic,Ec,Om,Rm,qw=V(()=>{re(),ne(),ke(),ae(),fc=(e,t)=>{if(e.every(r=>r>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},hc=(e,t,r)=>{t.every(n=>n>=0&&n<r||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let i=new Array(r).fill(1);return t.forEach((n,a)=>i[n]=e[a]),i},mc=(e,t,r,i,n,a)=>{let[s,l,u]=r>10?[1,2,3]:[-1,e.length>1?1:-1,-1],d=e[0].dims.length;if(s>0&&e.length>s&&e[s].dims.length>0)e[s].getFloat32Array().forEach(p=>a.push(p));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(l>0&&e.length>l&&e[l].dims.length===1&&e[l].dims[0]>0){if(e[l].getFloat32Array().forEach(p=>i.push(p)),i.length!==0&&i.length!==d&&r>=18&&i.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");fc(i,t),t.axes.length>0&&hc(i,t.axes,d).forEach((p,f)=>i[f]=p)}if(u>0&&e.length>u&&e[u].dims.length===1&&e[u].dims[0]>0&&(e[u].getBigInt64Array().forEach(p=>n.push(Number(p))),n.length!==0&&n.length!==d&&r>=18&&n.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(i.length!==0&&i.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(n.length!==0&&n.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof i<"u"&&typeof n<"u"&&i.length>0&&n.length>d)throw new Error("Resize requires only of scales or sizes to be specified")},qn=(e,t,r,i)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${i}(big / (${r}));
  let fract = ${i}(big % (${r})) / ${i}(${r});
  return whole + fract;
`,gc=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${qn("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${qn("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",yc=(e,t,r)=>`fn getNearestPixelFromOriginal(xOriginal: ${r}, isDownSample: bool) -> ${r} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",xc=(e,t,r)=>{let i=new Array(r).fill(0).concat(new Array(r).fill(1)),n=e.length===0?i:e.slice();return t.length>0?(t.forEach((a,s)=>{i[a]=n[s],i[s+r]=n[t.length+s]}),i):n},bc=(e,t,r,i)=>{let n=[];if(r.length>0)if(i.length>0){if(e.forEach(a=>n.push(a)),Math.max(...i)>e.length)throw new Error("axes is out of bound");i.forEach((a,s)=>n[a]=r[s])}else r.forEach(a=>n.push(a));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");n=e.map((a,s)=>Math.round(a*t[s]))}return n},wc=(e,t,r)=>{let i=(()=>{switch(r.keepAspectRatioPolicy){case"not_larger":return r.axes.length>0?Math.min(...r.axes.map(a=>t[a]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return r.axes.length>0?Math.max(...r.axes.map(a=>t[a]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${r.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let n=e.slice();return r.axes.length>0?(r.axes.forEach(a=>t[a]=i),r.axes.forEach(a=>n[a]=Math.round(e[a]*t[a]))):(t.fill(i,0,t.length),n.forEach((a,s)=>n[s]=Math.round(a*t[s]))),n},vc=(e,t,r,i,n)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${r.length}> {
      var original_indices: array<${e.type.value}, ${r.length}>;
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${J("uniforms.scales","i",i)};
        var roi_low = ${J("uniforms.roi","i",n)};
        var roi_hi = ${J("uniforms.roi",`i + ${t.length}`,n)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${J("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",r.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,_c=(e,t,r,i,n,a,s)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${J("uniforms.scales","i",n)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${J("uniforms.roi","i",a)};
          var roi_hi = ${J("uniforms.roi",`i + ${r.length}`,a)};
          var input_shape_i = ${J("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${J("uniforms.output_shape","i",i.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${s} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,$c=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${J("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,Wn=(e,t,r,i)=>e.rank>i?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",r,"batch")};
`:"",kc=(e,t,r,i,n)=>{let[a,s,l,u]=r.length===2?[-1,0,1,-1]:[0,2,3,1],d=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${d} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(row, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(col, ${r[l]} - 1))`)};
      ${Wn(e,u,a,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${d} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${d} = originalIndices[${s}];
      var col:${d} = originalIndices[${l}];
      ${i?`if (row < 0 || row > (${r[s]} - 1) || col < 0 || col > (${r[l]} - 1)) {
        return ${n};
      }`:""};
      row = max(0, min(row, ${r[s]} - 1));
      col = max(0, min(col, ${r[l]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${r.length>2?`u32(originalIndices[${u}])`:"0"};
      var batch: u32 =  ${r.length>2?`u32(originalIndices[${a}])`:"0"};
      var x11: ${d} = getInputValue(batch, channel, row1, col1);
      var x12: ${d} = getInputValue(batch, channel, row1, col2);
      var x21: ${d} = getInputValue(batch, channel, row2, col1);
      var x22: ${d} = getInputValue(batch, channel, row2, col2);
      var dx1: ${d} = abs(row - ${d}(row1));
      var dx2: ${d} = abs(${d}(row2) - row);
      var dy1: ${d} = abs(col - ${d}(col1));
      var dy2: ${d} = abs(${d}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},Sc=(e,t,r,i,n,a,s,l,u,d)=>{let p=r.length===2,[f,h]=p?[0,1]:[2,3],b=e.type.value,x=v=>{let S=v===f?"row":"col";return`
      fn ${S}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${b} {
        var output_index = ${t.indicesGet("output_indices",v)};
        var originalIdx: ${b} = getOriginalCoordinateFromResizedCoordinate(output_index, ${n[v]},
        ${i[v]}, ${r[v]}, ${a[v]}, ${a[v]} + ${r.length});
        var fractOriginalIdx: ${b} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${l} && (originalIdx < 0 || originalIdx > (${r[v]} - 1))) {
          return ${u};
        }
        var data: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${S}: ${b} = originalIdx + ${b}(i);
          if (${S} < 0 || ${S} >= ${r[v]}) {
            ${d?`coefs[i + 1] = 0.0;
                        continue;`:l?`return ${u};`:`${S} = max(0, min(${S}, ${r[v]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",v,`u32(${S})`)};
          data[i + 1] = ${v===f?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${x(f)};
    ${x(h)};
  fn getCubicInterpolationCoefs(s: ${b}) -> array<${b}, 4> {
    var absS = abs(s);
    var coeffs: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${b} = 1.0 - absS;
    var twoMinusAbsS: ${b} = 2.0 - absS;
    var onePlusAbsS: ${b} = 1.0 + absS;
    coeffs[0] = ((${s} * onePlusAbsS - 5 * ${s}) * onePlusAbsS + 8 * ${s}) * onePlusAbsS - 4 * ${s};
    coeffs[1] = ((${s} + 2) * absS - (${s} + 3)) * absS * absS + 1;
    coeffs[2] = ((${s} + 2) * oneMinusAbsS - (${s} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${s} * twoMinusAbsS - 5 * ${s}) * twoMinusAbsS + 8 * ${s}) * twoMinusAbsS - 4 * ${s};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${b}, 4>, coefs: array<${b}, 4>) -> ${b} {
    var coefsSum: ${b} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${b} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},Tc=(e,t,r,i,n)=>{let[a,s,l,u,d]=r.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],p=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${p} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",s,`max(0, min(depth, ${r[s]} - 1))`)};
      ${e.indicesSet("input_indices",l,`max(0, min(height, ${r[l]} - 1))`)};
      ${e.indicesSet("input_indices",u,`max(0, min(width, ${r[u]} - 1))`)};
      ${Wn(e,d,a,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${p} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${p} = originalIndices[${s}];
      var height:${p} = originalIndices[${l}];
      var width:${p} = originalIndices[${u}];
      ${i?`if (depth < 0 || depth > (${r[s]} - 1) || height < 0 || height > (${r[l]} - 1) || width < 0 || (width > ${r[u]} - 1)) {
      return ${n};
        }`:""};

    depth = max(0, min(depth, ${r[s]} - 1));
      height = max(0, min(height, ${r[l]} - 1));
      width = max(0, min(width, ${r[u]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${r.length>3?`u32(originalIndices[${d}])`:"0"};
      var batch: u32 =  ${r.length>3?`u32(originalIndices[${a}])`:"0"};

      var x111: ${p} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${p} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${p} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${p} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${p} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${p} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${p} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${p} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${p} = abs(depth - ${p}(depth1));
      var dx2: ${p} = abs(${p}(depth2) - depth);
      var dy1: ${p} = abs(height - ${p}(height1));
      var dy2: ${p} = abs(${p}(height2) - height);
      var dz1: ${p} = abs(width - ${p}(width1));
      var dz2: ${p} = abs(${p}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},Ic=(e,t,r,i,n,a)=>{let s=e.dims,l=xc(a,t.axes,s.length),u=bc(s,i,n,t.axes),d=i.slice();i.length===0&&(d=s.map((w,I)=>w===0?1:u[I]/w),t.keepAspectRatioPolicy!=="stretch"&&(u=wc(s,d,t)));let p=Q("output",e.dataType,u.length),f=P("input",e.dataType,s.length),h=O.size(u),b=s.length===u.length&&s.every((w,I)=>w===u[I]),x=t.coordinateTransformMode==="tf_crop_and_resize",v=t.extrapolationValue,S=f.type.value,$=w=>`
      ${b?"":`
      ${gc(t.coordinateTransformMode,S)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${$c(f,s)};
              ${yc(t.nearestMode,r,S)};
              ${_c(f,p,s,u,d.length,l.length,x)};
              `;case"linear":return`
              ${vc(p,s,u,d.length,l.length)};
              ${(()=>{if(s.length===2||s.length===4)return`${kc(f,p,s,x,v)}`;if(s.length===3||s.length===5)return`${Tc(f,p,s,x,v)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(s.length===2||s.length===4)return`${Sc(f,p,s,u,d,l,t.cubicCoeffA,x,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${w.registerUniform("output_size","u32").registerUniform("scales","f32",d.length).registerUniform("roi","f32",l.length).declareVariables(f,p)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${b?"output[global_idx] = input[global_idx];":`
        let output_indices = ${p.offsetToIndices("global_idx")};
        var input_indices: ${f.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${f.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${s.length===2||s.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${r}|${d.length>0?t.mode==="cubic"?d:d.length:""}|${n.length>0?n:""}|${l.length>0?l:""}|${b}|${t.mode==="nearest"?s.length:s}`,inputDependencies:["rank"]},getShaderSource:$,getRunData:()=>({outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(h/64)},programUniforms:[{type:12,data:h},{type:1,data:d},{type:1,data:l},...ee(s,u)]})}},Ec=e=>{let t=e.customDataBuffer;return new Uint32Array(t,t.byteOffset,1)[0]},Om=(e,t)=>{let r=[],i=[],n=[],a=Ec(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");mc(e.inputs,t,a,r,i,n),e.compute(Ic(e.inputs[0],t,a,r,i,n),{inputs:[0]})},Rm=e=>{let t=e.antialias,r=e.axes,i=e.coordinateTransformMode,n=e.cubicCoeffA,a=e.excludeOutside!==0,s=e.extrapolationValue,l=e.keepAspectRatioPolicy,u=e.mode,d=e.nearestMode===""?"simple":e.nearestMode;return me({antialias:t,axes:r,coordinateTransformMode:i,cubicCoeffA:n,excludeOutside:a,extrapolationValue:s,keepAspectRatioPolicy:l,mode:u,nearestMode:d})}}),Cc,Nc,Dm,Ww=V(()=>{re(),ne(),ae(),Cc=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],r=e[1],i=e[2];if(t.dataType!==r.dataType||t.dataType!==i.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Skip must be 2D or 3D");let n=t.dims[t.dims.length-1],a=t.dims[t.dims.length-2];if(r.dims[r.dims.length-1]!==n)throw new Error("Skip must have the same hidden size as input");if(r.dims[r.dims.length-2]!==a)throw new Error("Skip must have the same sequence length as input");if(i.dims.length!==1)throw new Error("Gamma must be 1D");if(i.dims[i.dims.length-1]!==n)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let s=e[3];if(s.dims.length!==1)throw new Error("Beta must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let s=e[4];if(s.dims.length!==1)throw new Error("Bias must be 1D");if(s.dims[s.dims.length-1]!==n)throw new Error("Bias must have the same hidden size as input")}},Nc=(e,t,r,i)=>{let n=t.simplified,a=e[0].dims,s=O.size(a),l=a,u=s,d=a.slice(-1)[0],p=i?a.slice(0,-1).concat(1):[],f=!n&&e.length>3,h=e.length>4,b=i&&r>1,x=i&&r>2,v=r>3,S=64,$=$e(d),w=[{type:12,data:u},{type:12,data:$},{type:12,data:d},{type:1,data:t.epsilon}],I=C=>{let N=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],z=[P("x",e[0].dataType,e[0].dims,$),P("skip",e[1].dataType,e[1].dims,$),P("gamma",e[2].dataType,e[2].dims,$)];f&&z.push(P("beta",e[3].dataType,e[3].dims,$)),h&&z.push(P("bias",e[4].dataType,e[4].dims,$)),z.push(Q("output",e[0].dataType,l,$)),b&&z.push(Q("mean_output",1,p)),x&&z.push(Q("inv_std_output",1,p)),v&&z.push(Q("input_skip_bias_sum",e[0].dataType,l,$));let _=Ie(e[0].dataType),j=Ie(1,$);return`

      ${C.registerUniforms(N).declareVariables(...z)}
      var<workgroup> sum_shared : array<${j}, ${S}>;
      var<workgroup> sum_squared_shared : array<${j}, ${S}>;

      ${C.mainStart([S,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${S};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${S};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${S-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${h?"bias[offset1d + i]":_+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${v?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${Kt(_,$,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${S};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${vt("sum",$)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${vt("square_sum",$)} / f32(uniforms.hidden_size) ${n?"":"- mean * mean"} + uniforms.epsilon);
        ${b?"mean_output[global_idx] = mean;":""}
        ${x?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${n?"":`- ${_}(mean)`}) *
            ${_}(inv_std_dev) * gamma[offset1d + i]
            ${f?"+ beta[offset1d + i]":""};
        }
      }`},T=[{dims:l,dataType:e[0].dataType}];return r>1&&T.push({dims:p,dataType:1}),r>2&&T.push({dims:p,dataType:1}),r>3&&T.push({dims:a,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${$};${b};${x};${v}`,inputDependencies:e.map((C,N)=>"type")},getShaderSource:I,getRunData:()=>({outputs:T,dispatchGroup:{x:Math.ceil(u/d)},programUniforms:w})}},Dm=(e,t)=>{Cc(e.inputs);let r=[0];e.outputCount>1&&r.push(-3),e.outputCount>2&&r.push(-3),e.outputCount>3&&r.push(3),e.compute(Nc(e.inputs,t,e.outputCount,!1),{outputs:r})}}),zc,hr,Ac,Vn,jc,Mc,Bm,Pm,Vw=V(()=>{re(),ne(),ke(),ae(),zc=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((r,i)=>{if(e[i+1].dataType!==6&&e[i+1].dataType!==7)throw new Error(`Input ${i} must be an array of int32 or int64`)})},hr=(e,t)=>{let r=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(i=>r.push(Number(i)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(i=>r.push(Number(i)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return r},Ac=(e,t)=>{if(e.length>1){let r=hr(e,1),i=hr(e,2),n=hr(e,3);return n.length===0&&(n=[...Array(e[0].dims.length).keys()]),me({starts:r,ends:i,axes:n})}else return t},Vn=(e,t,r,i,n)=>{let a=e;return e<0&&(a+=r[i[t]]),n[t]<0?Math.max(0,Math.min(a,r[i[t]]-1)):Math.max(0,Math.min(a,r[i[t]]))},jc=(e,t,r)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${r.length-1}; i >= 0; i--) {
            let input_shape_i = ${J("uniforms.input_shape","i",r.length)};
            let steps_i = ${J("uniforms.steps","i",r.length)};
            let signs_i = ${J("uniforms.signs","i",r.length)};
            let starts_i = ${J("uniforms.starts","i",r.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,Mc=(e,t)=>{let r=e[0].dims,i=O.size(r),n=t.axes.length>0?O.normalizeAxes(t.axes,r.length):[...Array(r.length).keys()],a=hr(e,4);a.forEach($=>$!==0||(()=>{throw new Error("step cannot be 0")})),a.length===0&&(a=Array(n.length).fill(1));let s=t.starts.map(($,w)=>Vn($,w,r,n,a)),l=t.ends.map(($,w)=>Vn($,w,r,n,a));if(n.length!==s.length||n.length!==l.length)throw new Error("start, ends and axes should have the same number of elements");if(n.length!==r.length)for(let $=0;$<r.length;++$)n.includes($)||(s.splice($,0,0),l.splice($,0,r[$]),a.splice($,0,1));let u=a.map($=>Math.sign($));a.forEach(($,w,I)=>{if($<0){let T=(l[w]-s[w])/$,C=s[w],N=C+T*a[w];s[w]=N,l[w]=C,I[w]=-$}});let d=r.slice(0);n.forEach(($,w)=>{d[$]=Math.ceil((l[$]-s[$])/a[$])});let p={dims:d,dataType:e[0].dataType},f=Q("output",e[0].dataType,d.length),h=P("input",e[0].dataType,e[0].dims.length),b=O.size(d),x=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:s.length},{name:"signs",type:"i32",length:u.length},{name:"steps",type:"u32",length:a.length}],v=[{type:12,data:b},{type:12,data:s},{type:6,data:u},{type:12,data:a},...ee(e[0].dims,d)],S=$=>`
      ${$.registerUniforms(x).declareVariables(h,f)}
        ${jc(h,f,r)}
        ${$.mainStart()}
          ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${f.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${f.setByOffset("global_idx",h.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${u.length}_${s.length}_${a.length}`,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:[p],dispatchGroup:{x:Math.ceil(i/64)},programUniforms:v})}},Bm=(e,t)=>{zc(e.inputs,t);let r=Ac(e.inputs,t);e.compute(Mc(e.inputs,r),{inputs:[0]})},Pm=e=>{let t=e.starts,r=e.ends,i=e.axes;return me({starts:t,ends:r,axes:i})}}),Oc,Rc,Lm,Um,Gw=V(()=>{re(),ne(),ke(),$t(),ae(),Oc=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},Rc=(e,t)=>{let r=e.inputs[0],i=r.dims,n=O.size(i),a=i.length,s=O.normalizeAxis(t.axis,a),l=s<i.length-1,u,d=[];l?(d=Array.from({length:a},(z,_)=>_),d[s]=a-1,d[a-1]=s,u=e.compute(De(r,d),{inputs:[r],outputs:[-1]})[0]):u=r;let p=u.dims,f=p[a-1],h=n/f,b=$e(f),x=f/b,v=64;h===1&&(v=256);let S=(z,_)=>_===4?`max(max(${z}.x, ${z}.y), max(${z}.z, ${z}.w))`:_===2?`max(${z}.x, ${z}.y)`:_===3?`max(max(${z}.x, ${z}.y), ${z}.z)`:z,$=P("x",u.dataType,u.dims,b),w=Q("result",u.dataType,u.dims,b),I=$.type.value,T=Ie(u.dataType)==="f32"?`var threadMax = ${I}(-3.4028234663852886e+38f);`:`var threadMax = ${I}(-65504.0h);`,C=z=>`
      var<workgroup> rowMaxShared : ${I};
      var<workgroup> rowSumShared : ${I};
      var<workgroup> threadShared : array<${I}, ${v}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${I} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${I}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${z.registerUniform("packedCols","i32").declareVariables($,w)}
      ${z.mainStart(v)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${v};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${T}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${I}(${S("threadShared[0]",b)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${I}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${I}(${vt("threadShared[0]",b)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${I}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,N=e.compute({name:"Softmax",shaderCache:{hint:`${b};${v}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:p,dataType:u.dataType}],dispatchGroup:{x:h},programUniforms:[{type:6,data:x}]}),getShaderSource:C},{inputs:[u],outputs:[l?-1:0]})[0];l&&e.compute(De(N,d),{inputs:[N]})},Lm=(e,t)=>{Oc(e.inputs),Rc(e,t)},Um=e=>me({axis:e.axis})}),Gn,Dc,Bc,Pc,qm,Hw=V(()=>{re(),ne(),ae(),Gn=e=>Array.from(e.getBigInt64Array(),Number),Dc=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(Gn(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},Bc=(e,t)=>{let r=[];for(let i=0;i<e.length;++i)r.push(e[i]*t[i]);return r},Pc=(e,t)=>{let r=e[0].dims,i=t??Gn(e[1]),n=Bc(r,i),a=O.size(n),s=e[0].dataType,l=P("input",s,r.length),u=Q("output",s,n.length),d=p=>`
      const inputShape = ${l.indices(...r)};
      ${p.registerUniform("output_size","u32").declareVariables(l,u)}
      ${p.mainStart()}
      ${p.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${u.offsetToIndices("global_idx")};
      var input_indices: ${l.type.indices};
      for (var i = 0; i < ${r.length}; i++) {
        let input_dim_i = ${l.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${u.indicesGet("output_indices","i")}  % input_dim_i;

        ${l.indicesSet("input_indices","i","input_dim_value")}
      }
      ${u.setByOffset("global_idx",l.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${i}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:n,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(a/64)},programUniforms:[{type:12,data:a},...ee(e[0].dims,n)]}),getShaderSource:d}},qm=e=>{Dc(e.inputs),e.compute(Pc(e.inputs),{inputs:[0]})}}),Lc,Uc,Wm,Fw=V(()=>{re(),ne(),ae(),Lc=(e,t,r,i,n)=>{let a=Q("output_data",n,r.length,4),s=P("a_data",t[1].dataType,t[1].dims.length,4),l=P("b_data",t[2].dataType,t[2].dims.length,4),u=P("c_data",t[0].dataType,t[0].dims.length,4),d,p=(f,h,b)=>`select(${h}, ${f}, ${b})`;if(!i)d=a.setByOffset("global_idx",p(s.getByOffset("global_idx"),l.getByOffset("global_idx"),u.getByOffset("global_idx")));else{let f=(h,b,x="")=>{let v=`a_data[index_a${b}][component_a${b}]`,S=`b_data[index_b${b}][component_b${b}]`,$=`bool(c_data[index_c${b}] & (0xffu << (component_c${b} * 8)))`;return`
            let output_indices${b} = ${a.offsetToIndices(`global_idx * 4u + ${b}u`)};
            let offset_a${b} = ${s.broadcastedIndicesToOffset(`output_indices${b}`,a)};
            let offset_b${b} = ${l.broadcastedIndicesToOffset(`output_indices${b}`,a)};
            let offset_c${b} = ${u.broadcastedIndicesToOffset(`output_indices${b}`,a)};
            let index_a${b} = offset_a${b} / 4u;
            let index_b${b} = offset_b${b} / 4u;
            let index_c${b} = offset_c${b} / 4u;
            let component_a${b} = offset_a${b} % 4u;
            let component_b${b} = offset_b${b} % 4u;
            let component_c${b} = offset_c${b} % 4u;
            ${h}[${b}] = ${x}(${p(v,S,$)});
          `};n===9?d=`
            var data = vec4<u32>(0);
            ${f("data",0,"u32")}
            ${f("data",1,"u32")}
            ${f("data",2,"u32")}
            ${f("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:d=`
            ${f("output_data[global_idx]",0)}
            ${f("output_data[global_idx]",1)}
            ${f("output_data[global_idx]",2)}
            ${f("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(u,s,l,a)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${d}
      }`},Uc=e=>{let t=e[1].dims,r=e[2].dims,i=e[0].dims,n=e[1].dataType,a=!(O.areEqual(t,r)&&O.areEqual(r,i)),s=t,l=O.size(t);if(a){let d=Xt.calcShape(Xt.calcShape(t,r,!1),i,!1);if(!d)throw new Error("Can't perform where op on the given tensors");s=d,l=O.size(s)}let u=Math.ceil(l/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:d=>Lc(d,e,s,a,n),getRunData:()=>({outputs:[{dims:s,dataType:n}],dispatchGroup:{x:Math.ceil(l/64/4)},programUniforms:[{type:12,data:u},...ee(i,t,r,s)]})}},Wm=e=>{e.compute(Uc(e.inputs))}}),Vm,Kw=V(()=>{lw(),Pa(),uw(),dw(),cw(),pw(),fw(),xw(),ww(),vw(),_w(),$w(),kw(),Sw(),Tw(),Iw(),Ew(),Cw(),Nw(),zw(),Aw(),jw(),Mw(),Ow(),Rw(),um(),Dw(),Bw(),Pw(),Lw(),Uw(),Ba(),qw(),hm(),Ww(),Vw(),Gw(),pm(),Hw(),$t(),La(),Fw(),Vm=new Map([["Abs",[Df]],["Acos",[Bf]],["Acosh",[Pf]],["Add",[bh]],["ArgMax",[jf,aa]],["ArgMin",[Af,aa]],["Asin",[Lf]],["Asinh",[Uf]],["Atan",[qf]],["Atanh",[Wf]],["Attention",[Mf]],["AveragePool",[$m,_m]],["BatchNormalization",[Of]],["BiasAdd",[Rf]],["BiasSplitGelu",[xh]],["Cast",[Gf,Vf]],["Ceil",[Ff]],["Clip",[Hf]],["Concat",[Ch,Nh]],["Conv",[ca,da]],["ConvTranspose",[Lh,Ph]],["Cos",[Kf]],["Cosh",[Zf]],["CumSum",[Uh,qh]],["DepthToSpace",[Wh,Vh]],["DequantizeLinear",[Nm,zm]],["Div",[wh]],["Einsum",[Gh,Hh]],["Elu",[Yf,br]],["Equal",[vh]],["Erf",[Xf]],["Exp",[Qf]],["Expand",[Fh]],["FastGelu",[Kh]],["Floor",[Jf]],["FusedConv",[ca,da]],["Gather",[Yh,Zh]],["GatherElements",[rm,tm]],["GatherBlockQuantized",[Jh,em]],["GatherND",[Xh,Qh]],["Gelu",[eh]],["Gemm",[nm,im]],["GlobalAveragePool",[Sm,km]],["GlobalMaxPool",[Cm,Em]],["Greater",[Sh]],["GreaterOrEqual",[Ih]],["GridSample",[am,sm]],["GroupQueryAttention",[mm]],["HardSigmoid",[lh,oh]],["InstanceNormalization",[gm]],["LayerNormalization",[ym]],["LeakyRelu",[th,br]],["Less",[Th]],["LessOrEqual",[Eh]],["Log",[gh]],["MatMul",[xm]],["MatMulNBits",[bm,wm]],["MaxPool",[Tm,Im]],["Mul",[_h]],["MultiHeadAttention",[lm,om]],["Neg",[ih]],["Not",[rh]],["Pad",[vm]],["Pow",[$h]],["QuickGelu",[yh,br]],["Range",[Am]],["Reciprocal",[nh]],["ReduceMin",[If]],["ReduceMean",[_f]],["ReduceMax",[Tf]],["ReduceSum",[Cf]],["ReduceProd",[Ef]],["ReduceL1",[$f]],["ReduceL2",[kf]],["ReduceLogSum",[zf]],["ReduceLogSumExp",[Sf]],["ReduceSumSquare",[Nf]],["Relu",[ah]],["Resize",[Om,Rm]],["RotaryEmbedding",[fm]],["ScatterND",[Mm,jm]],["Sigmoid",[sh]],["Sin",[uh]],["Sinh",[dh]],["Slice",[Bm,Pm]],["SkipLayerNormalization",[Dm]],["Split",[dm,cm]],["Sqrt",[ch]],["Softmax",[Lm,Um]],["Sub",[kh]],["Tan",[ph]],["Tanh",[fh]],["ThresholdedRelu",[mh,br]],["Tile",[qm]],["Transpose",[df,cf]],["Where",[Wm]]])}),Gm,Zw=V(()=>{Ue(),dt(),ae(),Gm=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,r,i,n){it(e.programInfo.name);let a=this.backend.device,s=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let l=[];for(let d of t)l.push({binding:l.length,resource:{buffer:d.buffer}});for(let d of r)l.push({binding:l.length,resource:{buffer:d.buffer}});n&&l.push({binding:l.length,resource:n});let u=a.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:l,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let d={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:u,dispatchGroup:i};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(d)}s.setPipeline(e.computePipeline),s.setBindGroup(0,u),s.dispatchWorkgroups(...i),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),Xe(e.programInfo.name)}dispose(){}build(e,t){it(e.name);let r=this.backend.device,i=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(d=>{r.features.has(d.feature)&&i.push(`enable ${d.extension};`)});let n=uf(t,this.backend.device.limits),a=e.getShaderSource(n),s=`${i.join(`
`)}
${n.additionalImplementations}
${a}`,l=r.createShaderModule({code:s,label:e.name});ce("verbose",()=>`[WebGPU] ${e.name} shader code: ${s}`);let u=r.createComputePipeline({compute:{module:l,entryPoint:"main"},layout:"auto",label:e.name});return Xe(e.name),{programInfo:e,computePipeline:u,uniformVariablesInfo:n.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,r=typeof e=="number"?1:e.y||1,i=typeof e=="number"?1:e.z||1,n=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=n&&r<=n&&i<=n)return[t,r,i];let a=t*r*i,s=Math.ceil(Math.sqrt(a));if(s>n){if(s=Math.ceil(Math.cbrt(a)),s>n)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[s,s,s]}else return[s,s,1]}}}),Hm={};er(Hm,{WebGpuBackend:()=>Fm});var qc,Wc,Vc,Fm,Yw=V(()=>{Ue(),re(),dt(),nf(),sw(),Kw(),Zw(),qc=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let r=[];for(let i=0;i<e.length;++i){let n=e[i].dataType;switch(t[i]){case"none":{r.push("");break}case"type":{r.push(`${n}`);break}case"rank":{let a=e[i].dims.length;r.push(`${n};${a}`);break}case"dims":{let a=e[i].dims.join(",");r.push(`${n};${a}`);break}default:throw new Error(`unsupported input dependency: ${t[i]}`)}}return r.join("|")},Wc=(e,t,r)=>{let i=e.name;return e.shaderCache?.hint&&(i+="["+e.shaderCache.hint+"]"),i+=":"+r+`:${qc(t,e.shaderCache?.inputDependencies??new Array(t.length).fill("dims"))}`,i},Vc=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},Fm=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let r=[],i={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:r},n=a=>t.features.has(a)&&r.push(a)&&!0;n("chromium-experimental-timestamp-query-inside-passes")||n("timestamp-query"),n("shader-f16"),n("subgroups"),this.device=await t.requestDevice(i),this.adapterInfo=new Vc(t.info||await t.requestAdapterInfo()),this.gpuDataManager=of(this),this.programManager=new Gm(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Ma(e.logLevel,!!e.debug),this.device.onuncapturederror=a=>{a.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${a.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!1}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose()}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;it(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{let t=new BigUint64Array(e.getMappedRange()),r=this.pendingQueries.get(e);for(let i=0;i<t.length/2;i++){let n=r[i],a=n.kernelId,s=this.kernels.get(a),l=s.kernelType,u=s.kernelName,d=n.programName,p=n.inputTensorViews,f=n.outputTensorViews,h=t[i*2],b=t[i*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=h);let x=Number(h-this.queryTimeBase),v=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(x)||!Number.isSafeInteger(v))throw new RangeError("incorrect timestamp range");if(this.env.webgpu.profiling?.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:p.map(S=>({dims:S.dims,dataType:ut(S.dataType)})),outputsMetadata:f.map(S=>({dims:S.dims,dataType:ut(S.dataType)})),kernelId:a,kernelType:l,kernelName:u,programName:d,startTime:x,endTime:v});else{let S="";p.forEach((w,I)=>{S+=`input[${I}]: [${w.dims}] | ${ut(w.dataType)}, `});let $="";f.forEach((w,I)=>{$+=`output[${I}]: [${w.dims}] | ${ut(w.dataType)}, `}),console.log(`[profiling] kernel "${a}|${l}|${u}|${d}" ${S}${$}start time: ${x} ns, execution time: ${v-x} ns`)}ci("GPU",`${d}::${h}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),Xe()}run(e,t,r,i,n,a){it(e.name);let s=[];for(let w=0;w<t.length;++w){let I=t[w].data;if(I===0)continue;let T=this.gpuDataManager.get(I);if(!T)throw new Error(`no GPU data for input: ${I}`);s.push(T)}let{outputs:l,dispatchGroup:u,programUniforms:d}=e.getRunData(t),p=r.length===0?l.map((w,I)=>I):r;if(p.length!==l.length)throw new Error(`Output size ${p.length} must be equal to ${l.length}.`);let f=[],h=[];for(let w=0;w<l.length;++w){if(!Number.isInteger(p[w])||p[w]<-3||p[w]>=a)throw new Error(`Invalid output index: ${p[w]}`);if(p[w]===-3)continue;let I=p[w]===-1,T=p[w]===-2,C=I||T?n(l[w].dataType,l[w].dims):i(p[w],l[w].dataType,l[w].dims);if(f.push(C),C.data===0)continue;let N=this.gpuDataManager.get(C.data);if(!N)throw new Error(`no GPU data for output: ${C.data}`);if(I&&this.temporaryData.push(N),T){let z=this.kernelPersistentData.get(this.currentKernelId);z||(z=[],this.kernelPersistentData.set(this.currentKernelId,z)),z.push(N)}h.push(N)}if(s.length!==t.length||h.length!==f.length){if(h.length===0)return Xe(e.name),f;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let b;if(d){let w=0,I=[];d.forEach(z=>{let _=typeof z.data=="number"?[z.data]:z.data;if(_.length===0)return;let j=z.type===10?2:4,R,H;z.type===10?(H=_.length>4?16:_.length>2?8:_.length*j,R=_.length>4?16:j*_.length):(H=_.length<=2?_.length*j:16,R=16),w=Math.ceil(w/H)*H,I.push(w);let W=z.type===10?8:4;w+=_.length>4?Math.ceil(_.length/W)*R:_.length*j});let T=16;w=Math.ceil(w/T)*T;let C=new ArrayBuffer(w);d.forEach((z,_)=>{let j=I[_],R=typeof z.data=="number"?[z.data]:z.data;if(z.type===6)new Int32Array(C,j,R.length).set(R);else if(z.type===12)new Uint32Array(C,j,R.length).set(R);else if(z.type===10)new Uint16Array(C,j,R.length).set(R);else if(z.type===1)new Float32Array(C,j,R.length).set(R);else throw new Error(`Unsupported uniform type: ${ut(z.type)}`)});let N=this.gpuDataManager.create(w,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(N.buffer,0,C,0,w),this.gpuDataManager.release(N.id),b={offset:0,size:w,buffer:N.buffer}}let x=this.programManager.normalizeDispatchGroupSize(u),v=x[1]===1&&x[2]===1,S=Wc(e,t,v),$=this.programManager.getArtifact(S);if($||($=this.programManager.build(e,x),this.programManager.setArtifact(S,$),ce("info",()=>`[artifact] key: ${S}, programName: ${e.name}`)),d&&$.uniformVariablesInfo){if(d.length!==$.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${$.uniformVariablesInfo.length}, got ${d.length} in program "${$.programInfo.name}".`);for(let w=0;w<d.length;w++){let I=d[w],T=I.type,C=typeof I.data=="number"?1:I.data.length,[N,z]=$.uniformVariablesInfo[w];if(T!==N||C!==z)throw new Error(`Uniform variable ${w} mismatch: expect type ${N} with size ${z}, got type ${T} with size ${C} in program "${$.programInfo.name}".`)}}if(ce("info",()=>`[ProgramManager] run "${e.name}" (key=${S}) with ${x[0]}x${x[1]}x${x[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let w={kernelId:this.currentKernelId,programName:$.programInfo.name,inputTensorViews:t,outputTensorViews:f};this.pendingKernels.push(w),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(w)}return this.programManager.run($,s,h,x,b),Xe(e.name),f}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,r,i){let n=Vm.get(e);if(!n)throw new Error(`kernel not implemented: ${e}`);let a={kernelType:e,kernelName:i,kernelEntry:n[0],attributes:[n[1],r]};this.kernels.set(t,a)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let r of t)this.gpuDataManager.release(r.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,r){let i=this.kernels.get(e);if(!i)throw new Error(`kernel not created: ${e}`);let n=i.kernelType,a=i.kernelName,s=i.kernelEntry,l=i.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${n}] ${a}" is not allowed to be called recursively`);this.currentKernelId=e,l[0]&&(l[1]=l[0](l[1]),l[0]=void 0),ce("info",()=>`[WebGPU] Start to run kernel "[${n}] ${a}"...`);let u=this.env.debug;this.temporaryData=[];try{return u&&this.device.pushErrorScope("validation"),s(t,l[1]),0}catch(d){return r.push(Promise.resolve(`[WebGPU] Kernel "[${n}] ${a}" failed. ${d}`)),1}finally{u&&r.push(this.device.popErrorScope().then(d=>d?`GPU validation error for kernel "[${n}] ${a}": ${d.message}`:null));for(let d of this.temporaryData)this.gpuDataManager.release(d.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,r,i){let n=this.sessionExternalDataMapping.get(e);n||(n=new Map,this.sessionExternalDataMapping.set(e,n));let a=n.get(t),s=this.gpuDataManager.registerExternalBuffer(r,i,a);return n.set(t,[s,r]),s}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(r=>this.gpuDataManager.unregisterExternalBuffer(r[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,r){return async()=>{let i=await ra(this,e,t);return Oa(i.buffer,r)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){this.queryType="none",(this.env.webgpu.profiling?.mode==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){ce("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){ce("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){ce("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),r=e.length;this.pendingKernels=[];for(let i=0;i<r;i++){let n=this.getComputePassEncoder(),a=e[i];this.writeTimestamp(this.pendingDispatchNumber*2),n.setPipeline(a.computePipeline),n.setBindGroup(0,a.bindGroup),n.dispatchWorkgroups(...a.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[i]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),Km={};er(Km,{init:()=>Zm});var ei,Gc,Zm,Xw=V(()=>{re(),dt(),ne(),aw(),ei=class Ym{constructor(t,r,i,n){this.module=t,this.dataType=r,this.data=i,this.dims=n}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=O.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(O.size(t)!==O.size(this.dims))throw new Error("Invalid new shape");return new Ym(this.module,this.dataType,this.data,t)}},Gc=class{constructor(e,t,r){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo;let i=e.PTR_SIZE,n=r/e.PTR_SIZE,a=i===4?"i32":"i64";this.opKernelContext=Number(e.getValue(i*n++,a));let s=Number(e.getValue(i*n++,a));this.outputCount=Number(e.getValue(i*n++,a)),this.customDataOffset=Number(e.getValue(i*n++,"*")),this.customDataSize=Number(e.getValue(i*n++,a));let l=[];for(let u=0;u<s;u++){let d=Number(e.getValue(i*n++,a)),p=Number(e.getValue(i*n++,"*")),f=Number(e.getValue(i*n++,a)),h=[];for(let b=0;b<f;b++)h.push(Number(e.getValue(i*n++,a)));l.push(new ei(e,d,p,h))}this.inputs=l}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){let r=t?.inputs?.map(s=>typeof s=="number"?this.inputs[s]:s)??this.inputs,i=t?.outputs??[],n=(s,l,u)=>new ei(this.module,l,this.output(s,u),u),a=(s,l)=>{let u=jt(s,l);if(!u)throw new Error(`Unsupported data type: ${s}`);let d=u>0?this.backend.gpuDataManager.create(u).id:0;return new ei(this.module,s,d,l)};return this.backend.run(e,r,i,n,a,this.outputCount)}output(e,t){let r=this.module.stackSave();try{let i=this.module.PTR_SIZE,n=i===4?"i32":"i64",a=this.module.stackAlloc((1+t.length)*i);this.module.setValue(a,t.length,n);for(let s=0;s<t.length;s++)this.module.setValue(a+i*(s+1),t[s],n);return this.module._JsepOutput(this.opKernelContext,e,a)}catch(i){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${i}`)}finally{this.module.stackRestore(r)}}},Zm=async(e,t,r,i)=>{let n=t.jsepInit;if(!n)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let a=(Yw(),$r(Hm)).WebGpuBackend,s=new a;await s.initialize(r,i),n("webgpu",[s,l=>s.alloc(Number(l)),l=>s.free(l),(l,u,d,p=!1)=>{if(p)ce("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(l)}, dst=${Number(u)}, size=${Number(d)}`),s.memcpy(Number(l),Number(u));else{ce("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(l)}, gpuDataId=${Number(u)}, size=${Number(d)}`);let f=t.HEAPU8.subarray(Number(l>>>0),Number(l>>>0)+Number(d));s.upload(Number(u),f)}},async(l,u,d)=>{ce("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${l}, dataOffset=${u}, size=${d}`),await s.download(Number(l),()=>t.HEAPU8.subarray(Number(u)>>>0,Number(u+d)>>>0))},(l,u,d)=>s.createKernel(l,Number(u),d,t.UTF8ToString(t._JsepGetNodeName(Number(u)))),l=>s.releaseKernel(l),(l,u,d,p)=>{ce("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${d}, kernel=${l}, contextDataOffset=${u}`);let f=new Gc(t,s,Number(u));return s.computeKernel(Number(l),f,p)},()=>s.captureBegin(),()=>s.captureEnd(),()=>s.replay()])}else{let a=new sf(r);n("webnn",[a,()=>a.reserveTensorId(),s=>a.releaseTensorId(s),async(s,l,u,d,p)=>a.ensureTensor(s,l,u,d,p),(s,l)=>{a.uploadTensor(s,l)},async(s,l)=>a.downloadTensor(s,l),(s,l)=>a.registerMLContext(s,l),!!r.trace])}}}),Hc,Ha,Fa,bt,Fc,Hn,xi,Ka,Za,Fn,Ya,Xa,Qa,Xm=V(()=>{Ue(),rw(),iw(),re(),Ut(),Na(),Jp(),Hc=(e,t)=>{xe()._OrtInit(e,t)!==0&&ge("Can't initialize onnxruntime.")},Ha=async e=>{Hc(e.wasm.numThreads,fi(e.logLevel))},Fa=async(e,t)=>{xe().asyncInit?.();let r=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(r){if(typeof r.limits!="object"||typeof r.features!="object"||typeof r.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let i=e.webgpu.powerPreference;if(i!==void 0&&i!=="low-power"&&i!=="high-performance")throw new Error(`Invalid powerPreference setting: "${i}"`);let n=e.webgpu.forceFallbackAdapter;if(n!==void 0&&typeof n!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${n}"`);if(r=await navigator.gpu.requestAdapter({powerPreference:i,forceFallbackAdapter:n}),!r)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let i=(Xw(),$r(Km)).init;t==="webgpu"&&await i("webgpu",xe(),e,r),t==="webnn"&&await i("webnn",xe(),e)}},bt=new Map,Fc=e=>{let t=xe(),r=t.stackSave();try{let i=t.PTR_SIZE,n=t.stackAlloc(2*i);t._OrtGetInputOutputCount(e,n,n+i)!==0&&ge("Can't get session input/output count.");let a=i===4?"i32":"i64";return[Number(t.getValue(n,a)),Number(t.getValue(n+i,a))]}finally{t.stackRestore(r)}},Hn=(e,t)=>{let r=xe(),i=r.stackSave(),n=0;try{let a=r.PTR_SIZE,s=r.stackAlloc(2*a);r._OrtGetInputOutputMetadata(e,t,s,s+a)!==0&&ge("Can't get session input/output metadata.");let l=Number(r.getValue(s,"*"));n=Number(r.getValue(s+a,"*"));let u=r.HEAP32[n/4];if(u===0)return[l,0];let d=r.HEAPU32[n/4+1],p=[];for(let f=0;f<d;f++){let h=Number(r.getValue(n+8+f*a,"*"));p.push(h!==0?r.UTF8ToString(h):Number(r.getValue(n+8+(f+d)*a,"*")))}return[l,u,p]}finally{r.stackRestore(i),n!==0&&r._OrtFree(n)}},xi=e=>{let t=xe(),r=t._malloc(e.byteLength);if(r===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,r),[r,e.byteLength]},Ka=async(e,t)=>{let r,i,n=xe();Array.isArray(e)?[r,i]=e:e.buffer===n.HEAPU8.buffer?[r,i]=[e.byteOffset,e.byteLength]:[r,i]=xi(e);let a=0,s=0,l=0,u=[],d=[],p=[];try{if([s,u]=await Qp(t),t?.externalData&&n.mountExternalData){let T=[];for(let C of t.externalData){let N=typeof C=="string"?C:C.path;T.push(ja(typeof C=="string"?C:C.data).then(z=>{n.mountExternalData(N,z)}))}await Promise.all(T)}for(let T of t?.executionProviders??[])if((typeof T=="string"?T:T.name)==="webnn"){if(n.shouldTransferToMLTensor=!1,typeof T!="string"){let C=T,N=C?.context,z=C?.gpuDevice,_=C?.deviceType,j=C?.powerPreference;N?n.currentContext=N:z?n.currentContext=await n.webnnCreateMLContext(z):n.currentContext=await n.webnnCreateMLContext({deviceType:_,powerPreference:j})}else n.currentContext=await n.webnnCreateMLContext();break}a=await n._OrtCreateSession(r,i,s),n.webgpuOnCreateSession?.(a),a===0&&ge("Can't create a session."),n.jsepOnCreateSession?.(),n.currentContext&&(n.webnnRegisterMLContext(a,n.currentContext),n.currentContext=void 0,n.shouldTransferToMLTensor=!0);let[f,h]=Fc(a),b=!!t?.enableGraphCapture,x=[],v=[],S=[],$=[],w=[];for(let T=0;T<f;T++){let[C,N,z]=Hn(a,T);C===0&&ge("Can't get an input name."),d.push(C);let _=n.UTF8ToString(C);x.push(_),S.push(N===0?{name:_,isTensor:!1}:{name:_,isTensor:!0,type:ut(N),shape:z})}for(let T=0;T<h;T++){let[C,N,z]=Hn(a,T+f);C===0&&ge("Can't get an output name."),p.push(C);let _=n.UTF8ToString(C);v.push(_),$.push(N===0?{name:_,isTensor:!1}:{name:_,isTensor:!0,type:ut(N),shape:z});{if(b&&t?.preferredOutputLocation===void 0){w.push("gpu-buffer");continue}let j=typeof t?.preferredOutputLocation=="string"?t.preferredOutputLocation:t?.preferredOutputLocation?.[_]??"cpu",R=n.webnnIsGraphOutput;if(j==="cpu"&&R&&R(a,_)){w.push("ml-tensor-cpu-output");continue}if(j!=="cpu"&&j!=="cpu-pinned"&&j!=="gpu-buffer"&&j!=="ml-tensor")throw new Error(`Not supported preferred output location: ${j}.`);if(b&&j!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${j}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);w.push(j)}}let I=null;return w.some(T=>T==="gpu-buffer"||T==="ml-tensor"||T==="ml-tensor-cpu-output")&&(l=n._OrtCreateBinding(a),l===0&&ge("Can't create IO binding."),I={handle:l,outputPreferredLocations:w,outputPreferredLocationsEncoded:w.map(T=>T==="ml-tensor-cpu-output"?"ml-tensor":T).map(T=>ea(T))}),bt.set(a,[a,d,p,I,b,!1]),[a,x,v,S,$]}catch(f){throw d.forEach(h=>n._OrtFree(h)),p.forEach(h=>n._OrtFree(h)),l!==0&&n._OrtReleaseBinding(l)!==0&&ge("Can't release IO binding."),a!==0&&n._OrtReleaseSession(a)!==0&&ge("Can't release session."),f}finally{n._free(r),s!==0&&n._OrtReleaseSessionOptions(s)!==0&&ge("Can't release session options."),u.forEach(f=>n._free(f)),n.unmountExternalData?.()}},Za=e=>{let t=xe(),r=bt.get(e);if(!r)throw new Error(`cannot release session. invalid session id: ${e}`);let[i,n,a,s,l]=r;s&&(l&&t._OrtClearBoundOutputs(s.handle)!==0&&ge("Can't clear bound outputs."),t._OrtReleaseBinding(s.handle)!==0&&ge("Can't release IO binding.")),t.jsepOnReleaseSession?.(e),t.webnnOnReleaseSession?.(e),t.webgpuOnReleaseSession?.(e),n.forEach(u=>t._OrtFree(u)),a.forEach(u=>t._OrtFree(u)),t._OrtReleaseSession(i)!==0&&ge("Can't release session."),bt.delete(e)},Fn=async(e,t,r,i,n,a,s=!1)=>{if(!e){t.push(0);return}let l=xe(),u=l.PTR_SIZE,d=e[0],p=e[1],f=e[3],h=f,b,x;if(d==="string"&&(f==="gpu-buffer"||f==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(s&&f!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${a} when enableGraphCapture is true.`);if(f==="gpu-buffer"){let $=e[2].gpuBuffer;x=jt(At(d),p);{let w=l.jsepRegisterBuffer;if(!w)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');b=w(i,a,$,x)}}else if(f==="ml-tensor"){let $=e[2].mlTensor;x=jt(At(d),p);let w=l.webnnRegisterMLTensor;if(!w)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');b=w(i,$,At(d),p)}else{let $=e[2];if(Array.isArray($)){x=u*$.length,b=l._malloc(x),r.push(b);for(let w=0;w<$.length;w++){if(typeof $[w]!="string")throw new TypeError(`tensor data at index ${w} is not a string`);l.setValue(b+w*u,Ke($[w],r),"*")}}else{let w=l.webnnIsGraphInput,I=l.webnnIsGraphOutput;if(d!=="string"&&w&&I){let T=l.UTF8ToString(n);if(w(i,T)||I(i,T)){let C=At(d);x=jt(C,p),h="ml-tensor";let N=l.webnnCreateTemporaryTensor,z=l.webnnUploadTensor;if(!N||!z)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let _=await N(i,C,p);z(_,new Uint8Array($.buffer,$.byteOffset,$.byteLength)),b=_}else x=$.byteLength,b=l._malloc(x),r.push(b),l.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,x),b)}else x=$.byteLength,b=l._malloc(x),r.push(b),l.HEAPU8.set(new Uint8Array($.buffer,$.byteOffset,x),b)}}let v=l.stackSave(),S=l.stackAlloc(4*p.length);try{p.forEach((w,I)=>l.setValue(S+I*u,w,u===4?"i32":"i64"));let $=l._OrtCreateTensor(At(d),b,x,S,p.length,ea(h));$===0&&ge(`Can't create tensor for input/output. session=${i}, index=${a}.`),t.push($)}finally{l.stackRestore(v)}},Ya=async(e,t,r,i,n,a)=>{let s=xe(),l=s.PTR_SIZE,u=bt.get(e);if(!u)throw new Error(`cannot run inference. invalid session id: ${e}`);let d=u[0],p=u[1],f=u[2],h=u[3],b=u[4],x=u[5],v=t.length,S=i.length,$=0,w=[],I=[],T=[],C=[],N=[],z=s.stackSave(),_=s.stackAlloc(v*l),j=s.stackAlloc(v*l),R=s.stackAlloc(S*l),H=s.stackAlloc(S*l);try{[$,w]=Xp(a),Rt("wasm prepareInputOutputTensor");for(let L=0;L<v;L++)await Fn(r[L],I,C,e,p[t[L]],t[L],b);for(let L=0;L<S;L++)await Fn(n[L],T,C,e,f[i[L]],v+i[L],b);Dt("wasm prepareInputOutputTensor");for(let L=0;L<v;L++)s.setValue(_+L*l,I[L],"*"),s.setValue(j+L*l,p[t[L]],"*");for(let L=0;L<S;L++)s.setValue(R+L*l,T[L],"*"),s.setValue(H+L*l,f[i[L]],"*");if(h&&!x){let{handle:L,outputPreferredLocations:F,outputPreferredLocationsEncoded:Y}=h;if(p.length!==v)throw new Error(`input count from feeds (${v}) is expected to be always equal to model's input count (${p.length}).`);Rt("wasm bindInputsOutputs");for(let X=0;X<v;X++){let te=t[X];await s._OrtBindInput(L,p[te],I[X])!==0&&ge(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<S;X++){let te=i[X];n[X]?.[3]?(N.push(T[X]),s._OrtBindOutput(L,f[te],T[X],0)!==0&&ge(`Can't bind pre-allocated output[${X}] for session=${e}.`)):s._OrtBindOutput(L,f[te],0,Y[te])!==0&&ge(`Can't bind output[${X}] to ${F[X]} for session=${e}.`)}Dt("wasm bindInputsOutputs"),bt.set(e,[d,p,f,h,b,!0])}s.jsepOnRunStart?.(d),s.webnnOnRunStart?.(d);let W;h?W=await s._OrtRunWithBinding(d,h.handle,S,R,$):W=await s._OrtRun(d,j,_,v,H,S,R,$),W!==0&&ge("failed to call OrtRun().");let B=[],M=[];Rt("wasm ProcessOutputTensor");for(let L=0;L<S;L++){let F=Number(s.getValue(R+L*l,"*"));if(F===T[L]||N.includes(T[L])){B.push(n[L]),F!==T[L]&&s._OrtReleaseTensor(F)!==0&&ge("Can't release tensor.");continue}let Y=s.stackSave(),X=s.stackAlloc(4*l),te=!1,pe,q=0;try{s._OrtGetTensorData(F,X,X+l,X+2*l,X+3*l)!==0&&ge(`Can't access output tensor data on index ${L}.`);let K=l===4?"i32":"i64",ie=Number(s.getValue(X,K));q=s.getValue(X+l,"*");let ue=s.getValue(X+l*2,"*"),je=Number(s.getValue(X+l*3,K)),Me=[];for(let Se=0;Se<je;Se++)Me.push(Number(s.getValue(ue+Se*l,K)));s._OrtFree(ue)!==0&&ge("Can't free memory for tensor dims.");let Be=Me.reduce((Se,we)=>Se*we,1);pe=ut(ie);let ct=h?.outputPreferredLocations[i[L]];if(pe==="string"){if(ct==="gpu-buffer"||ct==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let Se=[];for(let we=0;we<Be;we++){let ze=s.getValue(q+we*l,"*"),Er=s.getValue(q+(we+1)*l,"*"),Qe=we===Be-1?void 0:Er-ze;Se.push(s.UTF8ToString(ze,Qe))}B.push([pe,Me,Se,"cpu"])}else if(ct==="gpu-buffer"&&Be>0){let Se=s.jsepGetBuffer;if(!Se)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let we=Se(q),ze=jt(ie,Be);if(ze===void 0||!za(pe))throw new Error(`Unsupported data type: ${pe}`);te=!0,B.push([pe,Me,{gpuBuffer:we,download:s.jsepCreateDownloader(we,ze,pe),dispose:()=>{s._OrtReleaseTensor(F)!==0&&ge("Can't release tensor.")}},"gpu-buffer"])}else if(ct==="ml-tensor"&&Be>0){let Se=s.webnnEnsureTensor,we=s.webnnIsGraphInputOutputTypeSupported;if(!Se||!we)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(jt(ie,Be)===void 0||!Aa(pe))throw new Error(`Unsupported data type: ${pe}`);if(!we(e,pe,!1))throw new Error(`preferredLocation "ml-tensor" for ${pe} output is not supported by current WebNN Context.`);let ze=await Se(e,q,ie,Me,!1);te=!0,B.push([pe,Me,{mlTensor:ze,download:s.webnnCreateMLTensorDownloader(q,pe),dispose:()=>{s.webnnReleaseTensorId(q),s._OrtReleaseTensor(F)}},"ml-tensor"])}else if(ct==="ml-tensor-cpu-output"&&Be>0){let Se=s.webnnCreateMLTensorDownloader(q,pe)(),we=B.length;te=!0,M.push((async()=>{let ze=[we,await Se];return s.webnnReleaseTensorId(q),s._OrtReleaseTensor(F),ze})()),B.push([pe,Me,[],"cpu"])}else{let Se=vi(pe),we=new Se(Be);new Uint8Array(we.buffer,we.byteOffset,we.byteLength).set(s.HEAPU8.subarray(q,q+we.byteLength)),B.push([pe,Me,we,"cpu"])}}finally{s.stackRestore(Y),pe==="string"&&q&&s._free(q),te||s._OrtReleaseTensor(F)}}h&&!b&&(s._OrtClearBoundOutputs(h.handle)!==0&&ge("Can't clear bound outputs."),bt.set(e,[d,p,f,h,b,!1]));for(let[L,F]of await Promise.all(M))B[L][2]=F;return Dt("wasm ProcessOutputTensor"),B}finally{s.webnnOnRunEnd?.(d),s.stackRestore(z),I.forEach(W=>s._OrtReleaseTensor(W)),T.forEach(W=>s._OrtReleaseTensor(W)),C.forEach(W=>s._free(W)),$!==0&&s._OrtReleaseRunOptions($),w.forEach(W=>s._free(W))}},Xa=e=>{let t=xe(),r=bt.get(e);if(!r)throw new Error("invalid session id");let i=r[0],n=t._OrtEndProfiling(i);n===0&&ge("Can't get an profile file name."),t._OrtFree(n)},Qa=e=>{let t=[];for(let r of e){let i=r[2];!Array.isArray(i)&&"buffer"in i&&t.push(i.buffer)}return t}}),wt,Le,Gt,mr,gr,ti,Kn,ri,Ct,Nt,Kc,Qm,Jm,eg,tg,rg,ig,ng,ag=V(()=>{Ue(),Xm(),Ut(),Ea(),wt=()=>!!ve.wasm.proxy&&typeof document<"u",Gt=!1,mr=!1,gr=!1,ri=new Map,Ct=(e,t)=>{let r=ri.get(e);r?r.push(t):ri.set(e,[t])},Nt=()=>{if(Gt||!mr||gr||!Le)throw new Error("worker not ready")},Kc=e=>{switch(e.data.type){case"init-wasm":Gt=!1,e.data.err?(gr=!0,Kn[1](e.data.err)):(mr=!0,Kn[0]()),ti&&(URL.revokeObjectURL(ti),ti=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=ri.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}}},Qm=async()=>{if(!mr){if(Gt)throw new Error("multiple calls to 'initWasm()' detected.");if(gr)throw new Error("previous call to 'initWasm()' failed.");if(Gt=!0,wt())return new Promise((e,t)=>{Le?.terminate(),Zp().then(([r,i])=>{try{Le=i,Le.onerror=a=>t(a),Le.onmessage=Kc,Kn=[e,t];let n={type:"init-wasm",in:ve};!n.in.wasm.wasmPaths&&(r||Jn)&&(n.in.wasm.wasmPaths={wasm:new URL("/AI-fridge-3/assets/ort-wasm-simd-threaded.jsep-C887KxcQ.wasm",import.meta.url).href}),Le.postMessage(n),ti=r}catch(n){t(n)}},t)});try{await Ca(ve.wasm),await Ha(ve),mr=!0}catch(e){throw gr=!0,e}finally{Gt=!1}}},Jm=async e=>{if(wt())return Nt(),new Promise((t,r)=>{Ct("init-ep",[t,r]);let i={type:"init-ep",in:{epName:e,env:ve}};Le.postMessage(i)});await Fa(ve,e)},eg=async e=>wt()?(Nt(),new Promise((t,r)=>{Ct("copy-from",[t,r]);let i={type:"copy-from",in:{buffer:e}};Le.postMessage(i,[e.buffer])})):xi(e),tg=async(e,t)=>{if(wt()){if(t?.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Nt(),new Promise((r,i)=>{Ct("create",[r,i]);let n={type:"create",in:{model:e,options:{...t}}},a=[];e instanceof Uint8Array&&a.push(e.buffer),Le.postMessage(n,a)})}else return Ka(e,t)},rg=async e=>{if(wt())return Nt(),new Promise((t,r)=>{Ct("release",[t,r]);let i={type:"release",in:e};Le.postMessage(i)});Za(e)},ig=async(e,t,r,i,n,a)=>{if(wt()){if(r.some(s=>s[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(n.some(s=>s))throw new Error("pre-allocated output tensor is not supported for proxy.");return Nt(),new Promise((s,l)=>{Ct("run",[s,l]);let u=r,d={type:"run",in:{sessionId:e,inputIndices:t,inputs:u,outputIndices:i,options:a}};Le.postMessage(d,Qa(u))})}else return Ya(e,t,r,i,n,a)},ng=async e=>{if(wt())return Nt(),new Promise((t,r)=>{Ct("end-profiling",[t,r]);let i={type:"end-profiling",in:e};Le.postMessage(i)});Xa(e)}}),Zn,Zc,sg,Qw=V(()=>{Ue(),ag(),re(),Ia(),Jp(),Zn=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},Zc=e=>{switch(e[3]){case"cpu":return new Ze(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!za(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:r,download:i,dispose:n}=e[2];return Ze.fromGpuBuffer(r,{dataType:t,dims:e[1],download:i,dispose:n})}case"ml-tensor":{let t=e[0];if(!Aa(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:r,download:i,dispose:n}=e[2];return Ze.fromMLTensor(r,{dataType:t,dims:e[1],download:i,dispose:n})}default:throw new Error(`invalid data location: ${e[3]}`)}},sg=class{async fetchModelAndCopyToWasmMemory(e){return eg(await ja(e))}async loadModel(e,t){it();let r;typeof e=="string"?r=await this.fetchModelAndCopyToWasmMemory(e):r=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await tg(r,t),Xe()}async dispose(){return rg(this.sessionId)}async run(e,t,r){it();let i=[],n=[];Object.entries(e).forEach(f=>{let h=f[0],b=f[1],x=this.inputNames.indexOf(h);if(x===-1)throw new Error(`invalid input '${h}'`);i.push(b),n.push(x)});let a=[],s=[];Object.entries(t).forEach(f=>{let h=f[0],b=f[1],x=this.outputNames.indexOf(h);if(x===-1)throw new Error(`invalid output '${h}'`);a.push(b),s.push(x)});let l=i.map((f,h)=>Zn(f,()=>`input "${this.inputNames[n[h]]}"`)),u=a.map((f,h)=>f?Zn(f,()=>`output "${this.outputNames[s[h]]}"`):null),d=await ig(this.sessionId,n,l,s,u,r),p={};for(let f=0;f<d.length;f++)p[this.outputNames[s[f]]]=a[f]??Zc(d[f]);return Xe(),p}startProfiling(){}endProfiling(){ng(this.sessionId)}}}),og={};er(og,{OnnxruntimeWebAssemblyBackend:()=>ha,initializeFlags:()=>fa,wasmBackend:()=>lg});var fa,ha,lg,Jw=V(()=>{Ue(),ag(),Qw(),fa=()=>{(typeof ve.wasm.initTimeout!="number"||ve.wasm.initTimeout<0)&&(ve.wasm.initTimeout=0);let e=ve.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),ve.wasm.simd=!1),typeof ve.wasm.proxy!="boolean"&&(ve.wasm.proxy=!1),typeof ve.wasm.trace!="boolean"&&(ve.wasm.trace=!1),typeof ve.wasm.numThreads!="number"||!Number.isInteger(ve.wasm.numThreads)||ve.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)ve.wasm.numThreads=1;else{let t=typeof navigator>"u"?Bb("node:os").cpus().length:navigator.hardwareConcurrency;ve.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},ha=class{async init(e){fa(),await Qm(),await Jm(e)}async createInferenceSessionHandler(e,t){let r=new sg;return await r.loadModel(e,t),r}},lg=new ha});Ue();Ue();Ue();var ev="1.24.3";{let e=(Jw(),$r(og)).wasmBackend;Ft("webgpu",e,5),Ft("webnn",e,5),Ft("cpu",e,10),Ft("wasm",e,10)}Object.defineProperty(ve.versions,"web",{value:ev,enumerable:!0});function tv({readOnly:e=!1}){const{tempDetections:t,updateQuantity:r,removeItem:i,clearTempDetections:n,selectedIds:a,toggleSelection:s}=at(),l=nt();return t.length===0?null:m.jsx("div",{className:"w-full mt-6 px-2 animate-in fade-in slide-in-from-top-4 duration-500",children:m.jsxs("div",{className:"bg-[#0f2e24]/60 backdrop-blur-xl border border-[#00ff88]/20 rounded-[2.5rem] p-5 shadow-2xl overflow-hidden",children:[m.jsx("div",{className:"flex items-center justify-between mb-4 px-2",children:m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx("div",{className:"w-2 h-2 rounded-full bg-[#00ff88] animate-pulse"}),m.jsxs("h3",{className:"text-[10px] font-black tracking-widest text-[#00ff88] uppercase",children:["辨識清單 (",t.length,")",a.length>0&&m.jsxs("span",{className:"ml-2 text-white/40",children:["已選 ",a.length]})]})]})}),m.jsx("div",{className:"space-y-2 max-h-48 overflow-y-auto no-scrollbar pr-1",children:t.map(u=>m.jsxs("div",{className:`bg-[#1a4d3d]/40 border ${a.includes(u.id)?"border-[#00ff88]/40 shadow-[0_0_10px_rgba(0,255,136,0.1)]":"border-white/5"} rounded-2xl px-4 py-3 flex items-center justify-between group animate-in zoom-in duration-300 transition-all`,children:[m.jsxs("div",{className:"flex items-center gap-4 flex-1 min-w-0",children:[!e&&m.jsx("button",{onClick:()=>s(u.id),className:`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${a.includes(u.id)?"bg-[#00ff88] border-[#00ff88]":"bg-transparent border-white/20"}`,children:a.includes(u.id)&&m.jsx("div",{className:"w-2.5 h-2.5 bg-[#0f2e24] rounded-sm"})}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("div",{className:"text-xs font-black text-white uppercase truncate",children:u.name}),m.jsx("div",{className:"text-[9px] font-bold text-gray-500 uppercase",children:u.category})]})]}),e?m.jsxs("div",{className:"flex items-center px-4 py-1.5 bg-[#0f2e24]/80 rounded-full border border-white/10",children:[m.jsx("span",{className:"text-[10px] font-black text-[#00ff88] uppercase tracking-wider mr-2 opacity-50",children:"Count"}),m.jsx("span",{className:"text-xs font-black text-[#00ff88]",children:u.quantity})]}):m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsxs("div",{className:"flex items-center bg-[#0f2e24]/80 rounded-full p-1 border border-white/10 scale-90",children:[m.jsx("button",{onClick:()=>r(u.id,-1),className:"w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#00ff88] transition-colors",children:m.jsx(ma,{size:14,strokeWidth:3})}),m.jsx("span",{className:"w-6 text-center font-black text-[#00ff88] text-xs",children:u.quantity}),m.jsx("button",{onClick:()=>r(u.id,1),className:"w-8 h-8 flex items-center justify-center text-gray-400 hover:text-[#00ff88] transition-colors",children:m.jsx(Yt,{size:14,strokeWidth:3})})]}),m.jsx("button",{onClick:()=>i(u.id),className:"w-8 h-8 rounded-full bg-red-500/10 text-red-500 border border-red-500/10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all",children:m.jsx(Tr,{size:14,strokeWidth:3})})]})]},u.id))}),!e&&m.jsxs("div",{className:"flex gap-2 mt-4",children:[m.jsx("button",{onClick:()=>l("/inventory"),className:"flex-1 py-3 bg-[#00ff88]/10 text-[#00ff88] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-[#00ff88]/20 transition-all border border-[#00ff88]/20",children:"查看詳情"}),m.jsx("button",{onClick:n,className:"px-4 py-3 bg-white/5 text-gray-500 rounded-xl text-[10px] font-black uppercase tracking-widest hover:text-white transition-all border border-white/5",children:"清空"})]})]})})}function rv({videoRef:e}){const{addItem:t,tempDetections:r,clearTempDetections:i}=at(),[n,a]=U.useState(!1),[s,l]=U.useState([]),[u,d]=U.useState(!1),p=U.useRef(null),f=["tomato","spinach","egg","eggplant","rotten"];U.useEffect(()=>{async function x(){try{console.log("正在載入 AI 大腦 (ONNX)...");const v=await Ta.create("/AI-fridge-3/best.onnx",{executionProviders:["wasm"],graphOptimizationLevel:"all"});p.current=v,d(!0),console.log("✅ AI 大腦載入成功，隨手可辨！")}catch(v){console.error("❌ 模型載入失敗:",v)}}x()},[]);const h=async()=>{if(!(!e.current||!p.current)){a(!0),l([]);try{const x=document.createElement("canvas");x.width=640,x.height=640;const v=x.getContext("2d");if(!v)return;v.drawImage(e.current,0,0,640,640);const S=v.getImageData(0,0,640,640),$=new Float32Array(3*640*640);for(let j=0;j<640*640;j++)$[j]=S.data[j*4]/255,$[j+640*640]=S.data[j*4+1]/255,$[j+2*640*640]=S.data[j*4+2]/255;const w=new Ze("float32",$,[1,3,640,640]),I={[p.current.inputNames[0]]:w},C=(await p.current.run(I))[p.current.outputNames[0]].data,N=[],z=.25;for(let j=0;j<8400;j++){let R=0,H=-1;for(let W=0;W<f.length;W++){const B=C[8400*(4+W)+j];B>R&&(R=B,H=W)}if(R>z){const W=C[j],B=C[8400+j],M=C[8400*2+j],L=C[8400*3+j],F=(W-M/2)/640,Y=(B-L/2)/640,X=(W+M/2)/640,te=(B+L/2)/640;if(N.push({name:f[H],confidence:R,box:[F,Y,X,te],isSpoiled:f[H]==="rotten",category:H===1?"蔬菜":"其他"}),N.length>5)break}}const _=N.sort((j,R)=>R.confidence-j.confidence).slice(0,3);l(_),_.forEach(j=>t({name:j.name,quantity:1,category:j.category,confidence:j.confidence,isSpoiled:j.isSpoiled,box:j.box}))}catch(x){console.warn("AI 核心運作異常:",x)}finally{a(!1)}}},b=()=>{i(),l([])};return m.jsxs("div",{className:"flex flex-col items-center w-full max-w-sm",children:[m.jsxs("div",{className:"relative w-full",children:[m.jsxs("div",{className:`absolute top-4 left-1/2 transform -translate-x-1/2 z-20 bg-[#0f2e24]/80 backdrop-blur-md border ${u?n?"border-amber-400":"border-[#00ff88]":"border-red-400"} rounded-full px-4 py-1.5 flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,136,0.3)] transition-colors duration-500`,children:[m.jsx("div",{className:`w-2 h-2 rounded-full ${u?n?"bg-amber-400 animate-pulse":"bg-[#00ff88]":"bg-red-400"} shadow-[0_0_8px_currentColor]`}),m.jsx("span",{className:`text-[10px] font-black tracking-widest ${u?n?"text-amber-400":"text-[#00ff88]":"text-red-400"} uppercase`,children:u?n?"Analyzing...":"離線 AI 核心已就緒":"Loading Engine..."})]}),m.jsxs("div",{className:"relative aspect-[3/4] bg-[#1a4d3d] rounded-[2.5rem] overflow-hidden border-4 border-[#1a4d3d] shadow-2xl",children:[m.jsx("video",{ref:e,autoPlay:!0,playsInline:!0,muted:!0,className:"absolute inset-0 w-full h-full object-cover"}),m.jsx("div",{className:"absolute inset-0 z-10 pointer-events-none",children:s.map((x,v)=>x.box&&m.jsx("div",{className:"absolute",style:{left:`${x.box[0]*100}%`,top:`${x.box[1]*100}%`,width:`${(x.box[2]-x.box[0])*100}%`,height:`${(x.box[3]-x.box[1])*100}%`,borderColor:x.isSpoiled?"#ff4d4d":"#00ff88",borderWidth:"2px",borderStyle:"solid",borderRadius:"8px"},children:m.jsxs("div",{className:`absolute -top-6 left-0 px-2 py-0.5 rounded-t-md text-[8px] font-black uppercase whitespace-nowrap ${x.isSpoiled?"bg-red-500 text-white":"bg-[#00ff88] text-[#0f2e24]"}`,children:[x.isSpoiled?"BAD":"GOOD"," | ",x.name," | ",Math.round((x.confidence||0)*100),"%"]})},`box-${v}`))}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#0f2e24]/40 to-transparent pointer-events-none"}),n&&m.jsx("div",{className:"absolute inset-0 bg-[#00ff88]/5 flex flex-col items-center justify-center",children:m.jsx("div",{className:"w-full h-[2px] bg-amber-400 shadow-[0_0_15px_#fbbf24] absolute top-0 animate-[scan_2s_ease-in-out_infinite]"})})]})]}),r.length>0&&m.jsx("div",{className:"w-full flex justify-end px-2 mb-2 mt-4",children:m.jsxs("button",{onClick:b,className:"flex items-center gap-2 px-3 py-1.5 bg-red-500/10 text-red-500 rounded-lg border border-red-500/20 hover:bg-red-500 hover:text-white transition-all text-[10px] font-black tracking-widest uppercase",children:[m.jsx(nx,{size:12}),"重新整理畫面"]})}),m.jsx(tv,{readOnly:!0}),m.jsx("div",{className:"w-full mt-8 space-y-3 px-2",children:m.jsxs("button",{onClick:h,disabled:n||!u,className:"w-full bg-[#00ff88] text-[#0f2e24] py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-[#00dd77] transition-all active:scale-[0.98] shadow-[0_8px_20px_rgba(0,255,136,0.3)] disabled:opacity-50",children:[n?m.jsx(sp,{size:24,className:"animate-spin"}):m.jsx(Xc,{size:24,strokeWidth:3}),n?"LOCAL INFERENCING...":"離線 AI 辨識"]})})]})}function iv({item:e,onUpdate:t,onRemove:r}){return m.jsx("div",{className:"bg-[#1a4d3d]/30 backdrop-blur-xl rounded-[1.5rem] p-4 border border-white/5 hover:border-[#00ff88]/20 transition-all group active:scale-[0.98]",children:m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"w-12 h-12 rounded-xl bg-[#0f2e24] border border-white/5 flex items-center justify-center flex-shrink-0 shadow-inner group-hover:scale-110 transition-transform",children:m.jsx("div",{className:"w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]"})}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("h3",{className:"font-black text-white text-sm tracking-tight mb-1 uppercase truncate group-hover:text-[#00ff88] transition-colors leading-tight",children:e.name}),m.jsx("div",{className:"flex items-center gap-2",children:m.jsx("span",{className:"text-[9px] font-black text-[#00ff88]/50 uppercase tracking-widest",children:"已驗證節點"})})]}),m.jsxs("div",{className:"flex items-center gap-3",children:[m.jsxs("div",{className:"flex items-center bg-[#0f2e24] rounded-full p-1 border border-white/10 shadow-inner",children:[m.jsx("button",{onClick:()=>t(e.id,-1),className:"w-8 h-8 flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0f2e24] rounded-full transition-all text-gray-500",children:m.jsx(ma,{size:14,strokeWidth:3})}),m.jsx("span",{className:"w-8 text-center font-black text-[#00ff88] text-sm tabular-nums",children:e.quantity}),m.jsx("button",{onClick:()=>t(e.id,1),className:"w-8 h-8 flex items-center justify-center hover:bg-[#00ff88] hover:text-[#0f2e24] rounded-full transition-all text-gray-500",children:m.jsx(Yt,{size:14,strokeWidth:3})})]}),m.jsx("button",{onClick:()=>r(e.id),className:"w-10 h-10 rounded-xl bg-red-500/10 text-red-500 border border-red-500/10 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-lg active:scale-90",children:m.jsx(ga,{size:16,strokeWidth:2.5})})]})]})})}function nv({totalItems:e,freshItems:t,expiredItems:r}){return m.jsxs("div",{className:"grid grid-cols-3 gap-3 px-6 py-4",children:[m.jsxs("div",{className:"bg-[#1a4d3d]/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-5 shadow-2xl relative group overflow-hidden",children:[m.jsx("div",{className:"text-2xl font-black text-white mb-1",children:e}),m.jsx("div",{className:"text-[9px] font-black text-gray-500 uppercase tracking-widest",children:"總數量"})]}),m.jsxs("div",{className:"bg-[#1a4d3d]/40 backdrop-blur-md border border-white/10 rounded-[2rem] p-5 shadow-2xl relative overflow-hidden group",children:[m.jsx("div",{className:"absolute top-4 right-4 w-2 h-2 rounded-full bg-[#00ff88] shadow-[0_0_12px_#00ff88] animate-pulse"}),m.jsx("div",{className:"text-2xl font-black text-[#00ff88] mb-1",children:t}),m.jsx("div",{className:"text-[9px] font-black text-gray-500 uppercase tracking-widest",children:"保鮮中"})]}),m.jsxs("div",{className:`backdrop-blur-md border rounded-[2rem] p-5 shadow-2xl relative overflow-hidden group transition-all ${r>0?"bg-red-500/20 border-red-500/50 animate-pulse":"bg-white/5 border-white/10 opacity-40"}`,children:[m.jsx("div",{className:`text-2xl font-black mb-1 ${r>0?"text-red-500":"text-gray-500"}`,children:r}),m.jsx("div",{className:`text-[9px] font-black uppercase tracking-widest ${r>0?"text-red-500":"text-gray-500"}`,children:"已過期"})]})]})}function av({onAdd:e,onDismiss:t,categories:r}){const[i,n]=U.useState(""),[a,s]=U.useState(1),[l,u]=U.useState("Other"),d=()=>{i.trim()&&(e({name:i.trim(),quantity:a,category:l}),n(""),s(1),t())};return m.jsx("div",{className:"px-6 py-4 animate-in slide-in-from-top-4 duration-300",children:m.jsxs("div",{className:"bg-[#1a4d3d] rounded-[2.5rem] p-8 border-2 border-[#00ff88]/20 shadow-2xl relative overflow-hidden",children:[m.jsx("div",{className:"absolute top-0 right-0 p-4",children:m.jsx("button",{onClick:t,className:"text-white/20 hover:text-white/50",children:m.jsx(Tr,{size:20})})}),m.jsx("div",{className:"flex items-center gap-3 mb-6",children:m.jsx("h3",{className:"font-black text-xs tracking-widest uppercase text-white/50",children:"Add New Entry"})}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block",children:"Item Name"}),m.jsx("input",{type:"text",placeholder:"e.g. Avocado",value:i,onChange:p=>n(p.target.value),className:"w-full px-5 py-4 bg-[#0f2e24] rounded-2xl border border-white/10 focus:outline-none focus:border-[#00ff88] transition-all text-sm font-bold shadow-inner"})]}),m.jsxs("div",{className:"flex gap-4",children:[m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block",children:"Quantity"}),m.jsx("input",{type:"number",min:"1",value:a,onChange:p=>s(parseInt(p.target.value)||1),className:"w-full px-5 py-4 bg-[#0f2e24] rounded-2xl border border-white/10 focus:outline-none focus:border-[#00ff88] transition-all text-sm font-bold shadow-inner"})]}),m.jsxs("div",{className:"flex-1",children:[m.jsx("label",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2 block",children:"Category"}),m.jsx("select",{value:l,onChange:p=>u(p.target.value),className:"w-full px-5 py-4 bg-[#0f2e24] rounded-2xl border border-white/10 focus:outline-none focus:border-[#00ff88] transition-all text-sm font-bold appearance-none shadow-inner",children:r.filter(p=>p!=="All").map(p=>m.jsx("option",{value:p,children:p},p))})]})]}),m.jsx("div",{className:"pt-2",children:m.jsx("button",{onClick:d,className:"w-full py-4 bg-[#00ff88] text-[#0f2e24] rounded-2xl font-black uppercase tracking-widest text-xs shadow-[0_10px_20px_rgba(0,255,136,0.3)] active:scale-95 transition-all",children:"Confirm Registry"})})]})]})})}const ug=[{id:"tomato-pasta",name:"Zesty Tomato Pasta",image:"https://images.unsplash.com/photo-1714385988516-85f063e4fcdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwcGFzdGElMjB0b21hdG8lMjBzYXVjZXxlbnwxfHx8fDE3NzI2MTIxODR8MA&ixlib=rb-4.1.0&q=80&w=1080",time:"25 min",difficulty:"easy",category:"vegetable",requiredIngredients:["Tomatoes"],optionalIngredients:["Spinach","Garlic","Olive Oil"],wasteReduction:"35%",description:"Fresh tomato pasta with aromatic herbs"},{id:"spinach-frittata",name:"Spinach-Tomato Frittata",image:"https://images.unsplash.com/photo-1766375884263-016cd780fa1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGluYWNoJTIwZnJpdHRhdGElMjBlZ2clMjBkaXNofGVufDF8fHx8MTc3MjYxMjE4NXww&ixlib=rb-4.1.0&q=80&w=1080",time:"20 min",difficulty:"easy",category:"vegetable",requiredIngredients:["Spinach","Tomatoes"],optionalIngredients:["Cheese","Onions"],wasteReduction:"40%",description:"Protein-packed vegetable frittata"},{id:"mediterranean-salad",name:"Mediterranean Harvest Salad",image:"https://images.unsplash.com/photo-1769481614068-47cfb4d1f125?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwc2FsYWQlMjBmcmVzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcyNjEyMTg1fDA&ixlib=rb-4.1.0&q=80&w=1080",time:"15 min",difficulty:"easy",category:"vegetable",requiredIngredients:["Spinach","Tomatoes"],optionalIngredients:["Cucumber","Feta Cheese","Olives"],wasteReduction:"30%",description:"Fresh and healthy Mediterranean bowl"},{id:"veggie-stir-fry",name:"Asian Vegetable Stir-Fry",image:"https://images.unsplash.com/photo-1758979690131-11e2aa0b142b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZWdldGFibGUlMjBzdGlyJTIwZnJ5JTIwYXNpYW58ZW58MXx8fHwxNzcyNjAxOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080",time:"18 min",difficulty:"easy",category:"vegetable",requiredIngredients:["Spinach","Tomatoes","Celery"],optionalIngredients:["Soy Sauce","Ginger","Garlic"],wasteReduction:"45%",description:"Quick and flavorful Asian-style stir-fry"},{id:"roasted-vegetables",name:"Roasted Vegetable Medley",image:"https://images.unsplash.com/photo-1762773302175-7583d34b79ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwdmVnZXRhYmxlcyUyMGNvbG9yZnVsJTIwbWVkbGV5fGVufDF8fHx8MTc3MjYxMjE4Nnww&ixlib=rb-4.1.0&q=80&w=1080",time:"35 min",difficulty:"easy",category:"vegetable",requiredIngredients:["Tomatoes"],optionalIngredients:["Bell Peppers","Zucchini","Olive Oil"],wasteReduction:"38%",description:"Colorful oven-roasted vegetables"},{id:"fruit-salad",name:"Rainbow Fruit Salad",image:"https://images.unsplash.com/photo-1564093497595-593b96d80180?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMHNhbGFkJTIwYm93bCUyMGNvbG9yZnVsfGVufDF8fHx8MTc3MjYxNjUzNnww&ixlib=rb-4.1.0&q=80&w=1080",time:"10 min",difficulty:"easy",category:"fruit",requiredIngredients:["Apple","Banana","Orange"],optionalIngredients:["Honey","Mint","Berries"],wasteReduction:"25%",description:"Fresh and vibrant fruit medley"},{id:"berry-smoothie",name:"Berry Blast Smoothie Bowl",image:"https://images.unsplash.com/photo-1588068403046-169c80c69938?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJyeSUyMHNtb290aGllJTIwYm93bCUyMGZyZXNofGVufDF8fHx8MTc3MjYxNjUzNnww&ixlib=rb-4.1.0&q=80&w=1080",time:"8 min",difficulty:"easy",category:"fruit",requiredIngredients:["Banana","Strawberry"],optionalIngredients:["Blueberry","Yogurt","Granola"],wasteReduction:"30%",description:"Nutritious and delicious smoothie bowl"},{id:"grilled-chicken",name:"Herb Grilled Chicken",image:"https://images.unsplash.com/photo-1753775290395-09e3cb0b6f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGJyZWFzdCUyMG1lYWx8ZW58MXx8fHwxNzcyNjE2NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",time:"30 min",difficulty:"medium",category:"meat",requiredIngredients:["Chicken"],optionalIngredients:["Rosemary","Garlic","Lemon"],wasteReduction:"20%",description:"Juicy herb-marinated grilled chicken"},{id:"beef-stir-fry",name:"Beef & Vegetable Stir-Fry",image:"https://images.unsplash.com/photo-1760504526069-ff0f8bf6e4ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWVmJTIwc3RpciUyMGZyeSUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzcyNjE2NTM1fDA&ixlib=rb-4.1.0&q=80&w=1080",time:"25 min",difficulty:"medium",category:"meat",requiredIngredients:["Beef"],optionalIngredients:["Bell Peppers","Onions","Soy Sauce"],wasteReduction:"28%",description:"Savory beef with crisp vegetables"},{id:"roasted-chicken-veggies",name:"Roasted Chicken & Garden Vegetables",image:"https://images.unsplash.com/photo-1762631383362-bad467f94a8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2FzdGVkJTIwY2hpY2tlbiUyMHZlZ2V0YWJsZXMlMjBkaW5uZXJ8ZW58MXx8fHwxNzcyNjE2NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080",time:"45 min",difficulty:"medium",category:"mixed",requiredIngredients:["Chicken","Tomatoes"],optionalIngredients:["Spinach","Carrots","Potatoes"],wasteReduction:"42%",description:"Complete meal with protein and veggies"}];function sv(e){const t={vegetables:["Tomatoes","Spinach","Celery","Lettuce","Carrot","Broccoli","Cucumber","Bell Pepper","Onion","Garlic"],fruits:["Apple","Banana","Orange","Strawberry","Blueberry","Grape","Mango","Pineapple"],meat:["Chicken","Beef","Pork","Fish","Lamb"]},r=e.map(a=>a.name.toLowerCase()),i={vegetable:0,fruit:0,meat:0,mixed:0};return e.forEach(a=>{const s=a.name.toLowerCase();t.vegetables.some(l=>s.includes(l.toLowerCase()))?i.vegetable++:t.fruits.some(l=>s.includes(l.toLowerCase()))?i.fruit++:t.meat.some(l=>s.includes(l.toLowerCase()))&&i.meat++}),ug.map(a=>{let s=0;const l=[];return a.requiredIngredients.forEach(u=>{r.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d))&&(s+=40,l.push(u))}),a.optionalIngredients.forEach(u=>{r.some(d=>d.includes(u.toLowerCase())||u.toLowerCase().includes(d))&&(s+=10,l.push(u))}),i[a.category]>0&&(s+=20),a.category==="mixed"&&i.meat>0&&i.vegetable>0&&(s+=30),{...a,matchScore:s,matchedIngredients:l}}).filter(a=>a.matchScore>0).sort((a,s)=>s.matchScore-a.matchScore).slice(0,6)}function ov({recipe:e,onClick:t,getCategoryLabel:r}){return m.jsxs("div",{onClick:t,className:"group relative h-[400px] rounded-[3rem] overflow-hidden bg-gray-900 shadow-2xl transition-all duration-500 cursor-pointer",children:[m.jsx("img",{src:e.image,alt:e.name,className:"absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0f2e24] via-[#0f2e24]/30 to-transparent"}),m.jsxs("div",{className:"absolute top-6 left-6 right-6 flex justify-between items-start",children:[m.jsxs("div",{className:"flex flex-col gap-2",children:[m.jsx("div",{className:"bg-[#00ff88] text-[#0f2e24] text-[9px] font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-widest",children:"減少食物浪費"}),m.jsx("div",{className:"bg-white/10 backdrop-blur-md text-white border border-white/10 text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-tighter",children:r(e.category)})]}),m.jsxs("div",{className:"bg-[#0f2e24]/80 backdrop-blur-md rounded-2xl p-2 border border-[#00ff88]/30 flex flex-col items-center min-w-[50px] shadow-2xl",children:[m.jsxs("span",{className:"text-[12px] font-black text-[#00ff88]",children:[e.matchScore,"%"]}),m.jsx("span",{className:"text-[7px] font-black text-white/40 uppercase tracking-tighter",children:"匹配度"})]})]}),m.jsxs("div",{className:"absolute bottom-6 left-6 right-6 p-2",children:[m.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse"}),m.jsx("span",{className:"text-[9px] font-black text-[#00ff88]/80 uppercase tracking-widest",children:"準備執行"})]}),m.jsx("h3",{className:"font-black text-xl text-white mb-3 uppercase tracking-tight group-hover:text-[#00ff88] transition-colors leading-tight",children:e.name}),m.jsxs("div",{className:"flex items-center gap-6 mb-6 text-[10px] font-black text-white/50 uppercase tracking-widest",children:[m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(ya,{size:14,className:"text-[#00ff88]",strokeWidth:3}),m.jsx("span",{children:e.time})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsx(ax,{size:14,className:"text-[#00ff88]",strokeWidth:3}),m.jsx("span",{children:e.difficulty})]})]}),m.jsxs("button",{className:"w-full bg-[#00ff88] text-[#0f2e24] py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all flex items-center justify-center gap-3",children:[m.jsx("span",{children:"開始烹飪"}),m.jsx(sx,{size:16,strokeWidth:3})]})]})]})}function lv({items:e,onAddMore:t}){return m.jsxs("div",{className:"mb-8",children:[m.jsxs("div",{className:"flex items-center justify-between mb-4 px-1",children:[m.jsx("h3",{className:"text-[10px] font-black text-gray-500 uppercase tracking-widest",children:"現有食材庫"}),m.jsxs("span",{className:"text-[10px] font-black text-[#00ff88] uppercase tracking-tighter",children:[e.length," 個項目"]})]}),m.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.length>0?e.map((r,i)=>m.jsxs("div",{className:"group flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-xl hover:border-[#00ff88]/50 transition-all cursor-default shadow-lg",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]"}),m.jsx("span",{className:"text-[10px] font-black text-white uppercase tracking-tight",children:r.name}),m.jsxs("span",{className:"text-[9px] font-bold text-[#00ff88]/60",children:["×",r.quantity]})]},i)):m.jsx("div",{className:"w-full py-6 text-center bg-white/5 rounded-2xl border-2 border-dashed border-white/5",children:m.jsx("p",{className:"text-[10px] font-black text-gray-600 uppercase tracking-widest",children:"無食材訊號"})}),m.jsxs("button",{onClick:t,className:"flex items-center gap-2 px-4 py-2 bg-[#00ff88]/5 border border-[#00ff88]/20 rounded-xl hover:bg-[#00ff88]/10 transition-all group",children:[m.jsx(Yt,{size:14,className:"text-[#00ff88] group-hover:rotate-90 transition-transform"}),m.jsx("span",{className:"text-[10px] font-black text-[#00ff88] uppercase tracking-widest",children:"管理"})]})]})]})}function uv({image:e,name:t}){return m.jsxs("div",{className:"relative h-80 overflow-hidden",children:[m.jsx("img",{src:e,alt:t,className:"w-full h-full object-cover"}),m.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#0f2e24] via-[#0f2e24]/20 to-transparent"}),m.jsxs("div",{className:"absolute bottom-6 left-6 right-6",children:[m.jsx("div",{className:"flex items-center gap-2 mb-2",children:m.jsx("div",{className:"px-3 py-1 bg-[#00ff88] text-[#0f2e24] text-[9px] font-black rounded-full uppercase tracking-widest shadow-lg",children:"98% Compatible"})}),m.jsx("h2",{className:"text-3xl font-black text-white uppercase tracking-tight leading-tight",children:t})]})]})}function dv({ingredients:e,checkedItems:t,onToggle:r,progress:i}){return m.jsxs("div",{className:"mb-10 bg-[#1a4d3d]/20 rounded-[2.5rem] p-8 border border-white/5",children:[m.jsxs("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#00ff88] shadow-[0_0_8px_#00ff88]"}),"食材確認"]}),m.jsx("div",{className:"space-y-4",children:e.map((n,a)=>m.jsxs("button",{onClick:()=>r(a),className:"w-full flex items-center gap-4 group text-left",children:[m.jsx("div",{className:"flex-shrink-0",children:t[a]?m.jsx("div",{className:"w-6 h-6 rounded-lg bg-[#00ff88] flex items-center justify-center shadow-[0_0_10px_rgba(0,255,136,0.3)]",children:m.jsx(ox,{size:16,className:"text-[#0f2e24]",strokeWidth:3})}):m.jsx("div",{className:"w-6 h-6 rounded-lg border-2 border-white/10 group-hover:border-[#00ff88]/50 transition-colors"})}),m.jsx("span",{className:`text-[11px] font-bold uppercase tracking-tight transition-all ${t[a]?"text-white/20 line-through":"text-white"}`,children:n})]},a))}),m.jsxs("div",{className:"mt-8 pt-6 border-t border-white/5",children:[m.jsxs("div",{className:"flex justify-between items-end mb-3 px-1",children:[m.jsx("span",{className:"text-[9px] font-black text-white/30 uppercase tracking-widest",children:"備料進度"}),m.jsxs("span",{className:"text-xs font-black text-[#00ff88]",children:[i,"%"]})]}),m.jsx("div",{className:"w-full h-2 bg-white/5 rounded-full overflow-hidden p-0.5 border border-white/5",children:m.jsx("div",{className:"h-full bg-[#00ff88] rounded-full transition-all duration-500 shadow-[0_0_10px_#00ff88]",style:{width:`${i}%`}})})]})]})}function cv({steps:e}){return m.jsxs("div",{className:"mb-10 px-2",children:[m.jsxs("h3",{className:"text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8 flex items-center gap-2",children:[m.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-[#00ff88]"}),"烹飪執行協議"]}),m.jsx("div",{className:"space-y-10",children:e.map((t,r)=>m.jsxs("div",{className:"relative pl-10",children:[m.jsx("div",{className:"absolute left-0 top-0 w-6 h-6 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00ff88] text-[9px] font-black",children:r+1}),r<e.length-1&&m.jsx("div",{className:"absolute left-3 top-6 bottom-[-40px] w-[1px] bg-gradient-to-b from-[#00ff88]/20 to-transparent"}),m.jsx("h4",{className:"font-black text-xs text-white uppercase tracking-widest mb-2",children:t.title}),m.jsx("p",{className:"text-[11px] text-gray-500 font-medium leading-relaxed uppercase tracking-tighter",children:t.description})]},r))})]})}function pv(){nt();const{scannedItems:e}=at(),{videoRef:t}=Mb();return m.jsx("div",{className:"pb-24",children:m.jsxs("div",{className:"flex flex-col items-center justify-center px-6 pt-12 pb-4",children:[m.jsx(rv,{videoRef:t}),m.jsxs("p",{className:"text-center text-gray-400 text-xs mt-8 px-10 leading-relaxed uppercase tracking-widest font-medium opacity-60",children:["將鏡頭對準食材",m.jsx("br",{}),"AI 將自動辨識並同步庫存"]})]})})}function fv(){const e=nt(),{scannedItems:t,updateQuantity:r,removeItem:i,clearAll:n}=at();return m.jsxs("div",{className:"pb-32",children:[m.jsx(Jt,{showBackButton:!0,title:"最近辨識",rightAction:m.jsx("button",{onClick:n,className:"p-2 sm:p-2.5 bg-red-500/10 hover:bg-red-500 hover:text-white rounded-2xl border border-red-500/10 text-red-500",children:m.jsx(ga,{size:20,className:"stroke-[2.5]"})})}),m.jsxs("div",{className:"px-6 py-6",children:[m.jsxs("h2",{className:"text-[11px] font-black text-white/30 uppercase tracking-[0.2em] mb-6 px-1 flex items-center gap-2",children:[m.jsx("div",{className:"w-1 h-1 rounded-full bg-[#00ff88]"}),"掃描紀錄"]}),t.length===0?m.jsxs("div",{className:"flex flex-col items-center justify-center py-24 text-center bg-white/5 rounded-[3.5rem] border border-white/5",children:[m.jsxs("div",{className:"relative mb-8 group",children:[m.jsx("div",{className:"absolute inset-0 bg-[#00ff88]/5 rounded-full blur-3xl"}),m.jsx("div",{className:"relative w-24 h-24 bg-[#1a4d3d]/50 rounded-[2rem] border border-white/10 flex items-center justify-center shadow-2xl",children:m.jsx(Yt,{size:40,className:"text-[#00ff88]/20"})})]}),m.jsx("h3",{className:"text-sm font-black text-white/30 uppercase tracking-widest mb-4",children:"目前無數據暫存"}),m.jsx("button",{onClick:()=>e("/"),className:"flex items-center gap-3 bg-[#00ff88] text-[#0f2e24] px-8 py-4 rounded-2xl font-black uppercase text-[10px] shadow-xl",children:"啟動感測器"})]}):m.jsx("div",{className:"space-y-3",children:t.slice(0,10).map(a=>m.jsx(iv,{item:a,onUpdate:r,onRemove:i},a.id))})]})]})}function hv(){const e=nt(),{scannedItems:t,recommendedRecipes:r,setRecipes:i}=at(),[n,a]=U.useState(!0);return U.useEffect(()=>{t.length>0&&r.length===0?(async()=>{a(!0);try{const l=await $a.generateRecipes({ingredients:t.map(u=>u.name)});i(l)}catch{i(sv(t))}finally{a(!1)}})():a(!1)},[t,r,i]),m.jsxs("div",{className:"pb-24",children:[m.jsx(Jt,{showBackButton:!0,title:"AI 推薦食譜",rightAction:m.jsx("button",{className:"p-2.5 bg-white/5 rounded-2xl hover:bg-white/10",children:m.jsx(lx,{size:20,className:"text-white"})})}),m.jsxs("div",{className:"px-6 py-4",children:[m.jsx(lv,{items:t,onAddMore:()=>e("/inventory")}),n?m.jsxs("div",{className:"flex flex-col items-center justify-center py-20 gap-6 bg-white/5 rounded-[3rem] border border-white/10",children:[m.jsxs("div",{className:"relative w-16 h-16",children:[m.jsx("div",{className:"absolute inset-0 border-2 border-[#00ff88]/20 rounded-full"}),m.jsx("div",{className:"absolute inset-0 border-2 border-[#00ff88] border-t-transparent rounded-full animate-spin"}),m.jsx(Sr,{className:"absolute inset-0 m-auto text-[#00ff88] animate-pulse",size:20})]}),m.jsxs("div",{className:"text-center",children:[m.jsx("h3",{className:"text-[#00ff88] font-black text-xs uppercase animate-pulse mb-1",children:"運算中..."}),m.jsx("p",{className:"text-gray-500 text-[9px] font-bold uppercase",children:"正在分析口味分佈"})]})]}):r.length>0?m.jsxs("div",{className:"space-y-8",children:[m.jsxs("div",{className:"bg-[#1a4d3d]/40 backdrop-blur-md rounded-[2.5rem] p-6 border border-[#00ff88]/20 flex items-start gap-4",children:[m.jsx("div",{className:"w-12 h-12 rounded-2xl bg-[#00ff88] flex items-center justify-center flex-shrink-0 shadow-lg",children:m.jsx(Mt,{size:24,className:"text-[#0f2e24]",strokeWidth:2.5})}),m.jsxs("div",{children:[m.jsx("h3",{className:"font-black text-xs text-white uppercase mb-1",children:"AI 神經網路推薦"}),m.jsxs("p",{className:"text-[10px] text-gray-400 font-bold uppercase leading-tight",children:["已優化 ",m.jsxs("span",{className:"text-[#00ff88]",children:[r.length," 個相容節點"]})," ",m.jsx("br",{}),"惜食減廢協議已啟動"]})]})]}),m.jsx("div",{className:"grid grid-cols-1 gap-10",children:r.map(s=>m.jsx(ov,{recipe:s,onClick:()=>e(`/recipe/${s.id}`),getCategoryLabel:l=>l==="vegetable"?"蔬菜":l==="fruit"?"水果":l==="meat"?"肉類":"綜合"},s.id))})]}):m.jsxs("div",{className:"text-center py-24 px-8 bg-white/5 rounded-[3rem] border-2 border-dashed border-white/5",children:[m.jsx("div",{className:"w-20 h-20 mx-auto mb-6 bg-[#00ff88]/5 rounded-full flex items-center justify-center",children:m.jsx(Mt,{size:40,className:"text-[#00ff88]/20"})}),m.jsx("h4",{className:"text-white font-black text-sm uppercase mb-2",children:"未發現相容方案"}),m.jsx("button",{onClick:()=>e("/"),className:"inline-flex items-center gap-3 px-8 py-4 bg-[#00ff88] text-[#0f2e24] rounded-2xl font-black uppercase text-[10px]",children:"返回掃描"})]})]})]})}function mv({item:e,onSave:t,onDismiss:r}){const[i,n]=U.useState(e.name),[a,s]=U.useState(e.category||"其他"),[l,u]=U.useState(e.storageType||"fridge"),[d,p]=U.useState(e.expiryDays!==void 0?e.expiryDays:7),[f,h]=U.useState(!1),b=()=>{if(d===0&&!f){h(!0);return}t(e.id,{name:i,category:a,storageType:l,expiryDays:d})};return m.jsx("div",{className:"fixed inset-0 z-[100] bg-[#0f2e24]/90 backdrop-blur-xl flex items-center justify-center p-6",children:m.jsxs("div",{className:"bg-[#1a4d3d] w-full max-w-sm rounded-[2.5rem] p-6 border border-white/10 shadow-2xl relative",children:[m.jsx("button",{onClick:r,className:"absolute right-6 top-6 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-500 hover:text-white",children:m.jsx(Tr,{size:16})}),m.jsx("div",{className:"w-12 h-12 bg-[#00ff88]/10 rounded-2xl flex items-center justify-center mb-6",children:m.jsx(lp,{size:24,className:"text-[#00ff88]"})}),m.jsx("h3",{className:"text-xl font-black text-white uppercase tracking-wider mb-6",children:"編輯食材資訊"}),m.jsxs("div",{className:"space-y-4 mb-8",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-black uppercase text-gray-500 mb-2 block tracking-widest",children:"食材名稱"}),m.jsx("input",{type:"text",value:i,onChange:x=>n(x.target.value),className:"w-full bg-[#0f2e24] border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:border-[#00ff88] outline-none transition-colors"})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-black uppercase text-gray-500 mb-2 block tracking-widest",children:"分類標籤"}),m.jsx("div",{className:"flex flex-wrap gap-2",children:["蔬菜","水果","肉類","乳製品","五穀","其他"].map(x=>m.jsx("button",{onClick:()=>s(x),className:`px-4 py-2 rounded-lg text-[10px] font-black uppercase border transition-all ${a===x?"bg-[#00ff88] text-[#0f2e24] border-[#00ff88]":"bg-white/5 text-gray-400 border-white/10"}`,children:x},x))})]}),m.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-black uppercase text-gray-500 mb-2 block tracking-widest",children:"保存位置"}),m.jsxs("div",{className:"flex bg-[#0f2e24] p-1 rounded-xl border border-white/10",children:[m.jsxs("button",{onClick:()=>u("fridge"),className:`flex-1 py-2 rounded-lg text-[10px] font-black uppercase transition-all flex items-center justify-center gap-1 ${l==="fridge"?"bg-white/10 text-white":"text-gray-500"}`,children:[m.jsx(Mt,{size:12}),"冷藏"]}),m.jsxs("button",{onClick:()=>u("freezer"),className:`flex-1 py-2 rounded-lg text-[10px] font-black uppercase transition-all flex items-center justify-center gap-1 ${l==="freezer"?"bg-blue-500/20 text-blue-300":"text-gray-500"}`,children:[m.jsx(op,{size:12}),"冷凍"]})]})]}),m.jsxs("div",{children:[m.jsx("label",{className:"text-[10px] font-black uppercase text-gray-500 mb-2 block tracking-widest",children:"保鮮期 (天)"}),m.jsx("input",{type:"number",min:"0",value:d,onChange:x=>p(parseInt(x.target.value)||0),className:"w-full bg-[#0f2e24] border border-white/10 rounded-xl px-4 py-3 text-white font-bold focus:border-[#00ff88] outline-none transition-colors text-center"})]})]})]}),m.jsxs("div",{className:"space-y-3",children:[f&&m.jsxs("div",{className:"bg-red-500/10 border border-red-500/20 p-4 rounded-xl mb-4 animate-in fade-in slide-in-from-bottom-2",children:[m.jsxs("h4",{className:"text-red-500 font-black text-xs uppercase tracking-widest mb-1 flex items-center gap-2",children:[m.jsx(up,{size:14}),"警告：直接標記過期"]}),m.jsx("p",{className:"text-[10px] text-gray-400 font-bold leading-relaxed",children:"您將保存期限設為 0 天，食材將立刻被歸類至「已過期」。若確定請再次點擊下方按鈕。"})]}),m.jsx("button",{onClick:b,className:`w-full py-4 rounded-xl font-black text-sm uppercase tracking-widest shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 ${f?"bg-red-500 text-white":"bg-[#00ff88] text-[#0f2e24]"}`,children:f?"確定標記為過期":"更新資料 (Update)"}),f&&m.jsx("button",{onClick:()=>h(!1),className:"w-full py-3 rounded-xl font-black text-xs uppercase tracking-widest text-gray-400 hover:text-white bg-white/5 transition-all",children:"取消操作 (Cancel)"})]})]})})}function gv(){const e=nt(),{scannedItems:t,addItem:r,updateQuantity:i,removeIngredient:n,selectedIds:a,toggleSelection:s,generateRecipe:l,wasteHistory:u,updateItem:d}=at(),[p,f]=U.useState(!1),[h,b]=U.useState(""),[x,v]=U.useState("全部"),[S,$]=U.useState(!1),[w,I]=U.useState("fridge"),[T,C]=U.useState(null),[N,z]=U.useState(!1),_=()=>{const B=window.SpeechRecognition||window.webkitSpeechRecognition;if(!B)return alert("您的瀏覽器不支援語音辨識功能！");const M=new B;M.lang="zh-TW",M.start(),z(!0),M.onresult=L=>{const F=L.results[0][0].transcript;b(F),z(!1)},M.onerror=()=>z(!1),M.onend=()=>z(!1)},j=t.filter(B=>(B.storageType||"fridge")===w&&(x==="全部"||B.category===x)&&B.name.toLowerCase().includes(h.toLowerCase())),R=t.reduce((B,M)=>B+M.quantity,0),H=t.filter(B=>{const M=Math.floor((Date.now()-(B.timestamp||Date.now()))/864e5);return(B.expiryDays!==void 0?B.expiryDays:7)-M<=0||B.isSpoiled}).length,W=(B,M)=>{d(B,{...M,timestamp:Date.now()}),C(null)};return m.jsxs("div",{className:"pb-24",children:[m.jsx(Jt,{showBackButton:!0,title:"食材清單",rightAction:m.jsx("button",{onClick:()=>$(!S),className:"p-1.5 bg-[#00ff88] rounded-xl shadow-lg",children:m.jsx(Yt,{size:20,className:"text-[#0f2e24] stroke-[3]"})})}),m.jsxs("div",{className:"bg-[#0f2e24] sticky top-[64px] z-20 pb-4 px-6 py-4",children:[m.jsxs("div",{className:"flex bg-white/5 p-1 rounded-2xl mb-4",children:[m.jsxs("button",{onClick:()=>I("fridge"),className:`flex-1 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center justify-center gap-2 ${w==="fridge"?"bg-[#00ff88] text-[#0f2e24]":"text-gray-400"}`,children:[m.jsx(Mt,{size:16}),"冷藏庫"]}),m.jsxs("button",{onClick:()=>I("freezer"),className:`flex-1 py-2.5 rounded-xl text-xs font-black uppercase transition-all flex items-center justify-center gap-2 ${w==="freezer"?"bg-blue-400 text-[#0f2e24]":"text-gray-400"}`,children:[m.jsx(op,{size:16}),"冷凍庫"]})]}),m.jsxs("div",{className:"relative flex items-center gap-2",children:[m.jsxs("div",{className:"relative flex-1",children:[m.jsx(cx,{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500",size:18}),m.jsx("input",{type:"text",placeholder:"搜尋食材...",value:h,onChange:B=>b(B.target.value),className:"w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#00ff88] text-sm font-bold placeholder:text-gray-600 outline-none"})]}),m.jsx("button",{onClick:_,className:`p-4 rounded-2xl transition-all ${N?"bg-red-500 text-white animate-pulse":"bg-white/5 text-gray-400 border border-white/10"}`,children:m.jsx(px,{size:20})})]}),m.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar mt-4",children:["全部","蔬菜","水果","乳製品","肉類","五穀","其他"].map(B=>m.jsx("button",{onClick:()=>v(B),className:`px-5 py-2 rounded-xl text-[10px] font-black uppercase whitespace-nowrap border transition-colors ${x===B?w==="fridge"?"bg-[#00ff88] text-[#0f2e24] border-[#00ff88]":"bg-blue-400 text-[#0f2e24] border-blue-400":"bg-white/5 text-gray-500 border-white/10"}`,children:B},B))})]}),m.jsx("div",{className:"px-6 mb-2",children:m.jsxs("button",{onClick:async()=>{f(!0);try{await l(),e("/recipes")}catch(B){alert(B.message)}finally{f(!1)}},disabled:p||a.length===0,className:`w-full ${w==="fridge"?"bg-[#00ff88]":"bg-blue-400"} text-[#0f2e24] py-5 rounded-[2rem] font-black text-xs uppercase tracking-widest shadow-[0_10px_30px_rgba(0,255,136,0.2)] flex items-center justify-center gap-3 disabled:opacity-50 transition-all hover:scale-[1.02] active:scale-[0.98]`,children:[p?m.jsx(sp,{size:18,className:"animate-spin"}):m.jsx(Sr,{size:18}),p?"Synthesizing...":"生成 AI 食譜方案"]})}),m.jsx(nv,{totalItems:R,freshItems:t.length-H,expiredItems:H}),S&&m.jsx(av,{onAdd:r,onDismiss:()=>$(!1),categories:["全部","蔬菜","水果","乳製品","肉類","五穀","其他"]}),m.jsxs("div",{className:"px-6 py-4",children:[m.jsxs("h3",{className:"font-black text-xs uppercase text-white/30 mb-4 px-2",children:["存貨紀錄 (",j.length,")"]}),j.length===0?m.jsxs("div",{className:"text-center py-20 bg-white/5 rounded-[3rem] border border-white/5",children:[m.jsx(si,{size:48,className:"mx-auto mb-4 text-white/10"}),m.jsx("p",{className:"text-[10px] font-bold text-gray-500",children:"該庫存區域為空"})]}):m.jsx("div",{className:"space-y-3",children:j.map(B=>{const M=Math.floor((Date.now()-(B.timestamp||Date.now()))/864e5),F=(B.expiryDays!==void 0?B.expiryDays:7)-M,Y=F<=0,X=!Y&&F<=2;return m.jsxs("div",{className:`bg-[#1a4d3d]/30 rounded-2xl p-4 border transition-all relative overflow-hidden group ${B.isSpoiled||Y?"border-red-500/50 bg-red-500/10 shadow-[0_0_20px_rgba(239,68,68,0.1)]":X?"border-amber-400/50 bg-amber-400/5 shadow-[0_0_20px_rgba(251,191,36,0.1)]":"border-white/5"}`,children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("button",{onClick:()=>s(B.id),disabled:B.isSpoiled||Y,className:`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 transition-all ${B.isSpoiled||Y?"opacity-20 cursor-not-allowed border-gray-600":a.includes(B.id)?w==="fridge"?"bg-[#00ff88] border-[#00ff88]":"bg-blue-400 border-blue-400":"bg-transparent border-white/20"}`,children:[a.includes(B.id)&&!B.isSpoiled&&!Y&&m.jsx("div",{className:"w-3 h-3 bg-[#0f2e24] rounded-sm"}),(B.isSpoiled||Y)&&m.jsx(Tr,{size:12,className:"text-red-500"})]}),m.jsxs("div",{className:"w-12 h-12 rounded-xl bg-[#0f2e24] flex items-center justify-center flex-shrink-0 relative",children:[m.jsx(si,{size:20,className:B.isSpoiled||Y?"text-red-500":w==="fridge"?"text-[#00ff88]":"text-blue-400"}),(B.isSpoiled||Y)&&m.jsx("div",{className:"absolute inset-0 bg-red-500/10 rounded-xl"})]}),m.jsxs("div",{className:"flex-1 min-w-0",children:[m.jsx("h4",{className:`font-black text-sm truncate uppercase ${B.isSpoiled||Y?"text-red-500/70 line-through":"text-white"}`,children:B.name}),m.jsxs("div",{className:"flex flex-wrap items-center gap-2 mt-1",children:[m.jsx("span",{className:`text-[8px] font-black uppercase px-2 py-0.5 rounded-md ${B.isSpoiled?"bg-red-500/10 text-red-500":w==="fridge"?"bg-[#00ff88]/10 text-[#00ff88]":"bg-blue-400/10 text-blue-400"}`,children:B.isSpoiled?"品質異常":B.category||"其他"}),m.jsxs("span",{className:`text-[8px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-1 ${Y||B.isSpoiled?"bg-red-500 text-white":X?"bg-amber-400 text-[#0f2e24]":"bg-white/5 text-gray-400"}`,children:[m.jsx(ya,{size:8}),Y?"已過期 (EXPIRED)":B.isSpoiled?"偵測毀損":X?`即將到期 (${F}天)`:`保鮮 ${F} 天`]}),m.jsx("span",{className:"text-[8px] font-black uppercase px-2 py-0.5 rounded-md flex items-center gap-1 bg-white/5 text-gray-400",children:new Date(B.timestamp||Date.now()).toLocaleString("zh-TW",{month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})})]})]}),m.jsxs("div",{className:"flex items-center gap-2",children:[(Y||B.isSpoiled)&&m.jsx("div",{className:"text-[10px] font-black text-red-500 animate-pulse hidden sm:block",children:"請移除食材"}),X&&m.jsx("div",{className:"text-[10px] font-black text-amber-400 animate-pulse hidden sm:block",children:"儘速使用"}),m.jsx("button",{onClick:()=>C(B),className:"w-8 h-8 rounded-full bg-white/5 text-gray-400 flex items-center justify-center hover:text-white hover:bg-white/10 transition-colors",children:m.jsx(lp,{size:14})})]})]}),m.jsxs("div",{className:"flex items-center justify-end gap-2 border-t border-white/5 pt-3",children:[m.jsxs("div",{className:"flex items-center bg-[#0f2e24]/80 rounded-full p-1 border border-white/10",children:[m.jsx("button",{onClick:()=>i(B.id,-1),className:`w-7 h-7 flex items-center justify-center text-gray-500 hover:${w==="fridge"?"text-[#00ff88]":"text-blue-400"}`,children:m.jsx(ma,{size:12,strokeWidth:3})}),m.jsx("span",{className:"w-8 text-center font-black text-white text-xs",children:B.quantity}),m.jsx("button",{onClick:()=>i(B.id,1),className:`w-7 h-7 flex items-center justify-center text-gray-500 hover:${w==="fridge"?"text-[#00ff88]":"text-blue-400"}`,children:m.jsx(Yt,{size:12,strokeWidth:3})})]}),m.jsx("button",{onClick:()=>n(B.id),className:"w-8 h-8 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center transition-all hover:bg-red-500 hover:text-white",children:m.jsx(ga,{size:12,strokeWidth:3})})]}),X&&!Y&&m.jsx("div",{className:"absolute top-0 right-0 w-8 h-8 overflow-hidden",children:m.jsx("div",{className:"absolute top-[-10px] right-[-10px] bg-amber-400 w-12 h-12 rotate-45 transform origin-bottom-left flex items-end justify-center pb-1",children:m.jsx(up,{size:8,className:"text-[#0f2e24] -rotate-45",strokeWidth:3})})})]},B.id)})})]}),T&&m.jsx(mv,{item:T,onSave:W,onDismiss:()=>C(null)})]})}function yv({data:e,scannedItems:t}){const[r,i]=U.useState("history"),[n,a]=U.useState(null),s=t.filter(p=>{const f=Math.floor((Date.now()-(p.timestamp||Date.now()))/864e5),h=(p.expiryDays!==void 0?p.expiryDays:7)-f;return h>=0&&h<=3&&!p.isSpoiled});U.useEffect(()=>{if(r==="predict"){const p=t.map(f=>{const h=Math.floor((Date.now()-(f.timestamp||Date.now()))/864e5);return`${f.name}: ${(f.expiryDays!==void 0?f.expiryDays:7)-h} days left`});console.log("🔮 [NeuralAnalytics] Inventory Status:",p),console.log("🔮 [NeuralAnalytics] Expiring Soon:",s)}},[r,s]),Array.from(new Set(s.map(p=>p.category||"其他")));const l=100-e.reduce((p,f)=>p+f.amount,0)*2,u=Math.max(...e.map(p=>p.amount),5),d=80;return m.jsxs("div",{className:"bg-[#1a4d3d]/30 rounded-[2.5rem] p-6 border border-white/5 mb-8 relative overflow-hidden group",children:[m.jsx("div",{className:"absolute -top-24 -right-24 w-48 h-48 bg-[#00ff88]/5 rounded-full blur-[80px] pointer-events-none"}),m.jsxs("div",{className:"flex items-center justify-between mb-8 relative z-20",children:[m.jsxs("div",{children:[m.jsx("h3",{className:"text-[10px] font-black text-[#00ff88] uppercase tracking-[0.2em] mb-1",children:"數據統計 (Data Statistics)"}),m.jsxs("div",{className:"flex items-center gap-2",children:[m.jsxs("div",{className:"text-xl font-black text-white tracking-tighter",children:[l,"%"]}),m.jsx("div",{className:"text-[8px] font-bold text-gray-500 uppercase tracking-widest border-l border-white/10 pl-2",children:"惜食達成率"})]})]}),m.jsxs("div",{className:"flex bg-[#0f2e24] p-1 rounded-xl border border-white/10",children:[m.jsx("button",{onClick:()=>i("history"),className:`px-4 py-1.5 rounded-lg text-[8px] font-black uppercase transition-all ${r==="history"?"bg-[#00ff88] text-[#0f2e24]":"text-gray-500"}`,children:"歷史"}),m.jsx("button",{onClick:()=>i("predict"),className:`px-4 py-1.5 rounded-lg text-[8px] font-black uppercase transition-all ${r==="predict"?"bg-amber-400 text-[#0f2e24]":"text-gray-500"}`,children:"預測"})]})]}),m.jsx(ui,{mode:"wait",children:r==="history"?m.jsxs(Ot.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"relative h-[130px] w-full flex items-end gap-3 px-2 overflow-x-auto no-scrollbar pb-6 pt-2",ref:p=>{p&&setTimeout(()=>{p.scrollLeft=p.scrollWidth},100)},children:[e.map((p,f)=>{const h=p.amount/u*d;return m.jsxs("div",{className:"flex-shrink-0 w-8 flex flex-col items-center gap-2 group/bar relative cursor-pointer pt-6",children:[m.jsxs("div",{className:"absolute top-0 opacity-0 group-hover/bar:opacity-100 transition-all duration-300 -translate-y-2 group-hover/bar:translate-y-0 flex flex-col items-center",children:[m.jsxs("span",{className:"bg-[#0f2e24] border border-white/20 text-white text-[8px] font-black px-2 py-1 rounded-lg tracking-widest shadow-xl",children:[p.amount," 個"]}),m.jsx("div",{className:"w-1 h-1 bg-white/20 rotate-45 -mt-0.5"})]}),m.jsx("div",{className:"relative w-full flex items-end justify-center",children:m.jsx(Ot.div,{initial:{height:0},animate:{height:h},className:`w-full max-w-[12px] rounded-t-full transition-all duration-500 group-hover/bar:brightness-150 ${p.amount>=3?"bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]":"bg-[#00ff88] shadow-[0_0_15px_rgba(0,255,136,0.2)]"}`})}),m.jsx("span",{className:"text-[7px] font-black text-gray-500 group-hover/bar:text-white transition-colors",children:p.date.split("-").slice(1).join("/")})]},f)}),m.jsx("div",{className:"absolute bottom-6 left-0 min-w-full w-max h-[1px] bg-white/5 -z-10"})]},"history"):m.jsx(Ot.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},className:"py-2",children:(()=>{const p=t.length;if(p===0)return m.jsxs("div",{className:"flex flex-col items-center justify-center py-6 text-center border-2 border-dashed border-white/5 rounded-3xl",children:[m.jsx(si,{size:24,className:"text-white/20 mb-3"}),m.jsx("p",{className:"text-[9px] font-black text-white/30 uppercase tracking-widest",children:"請先新增食材以啟用預測"})]});const f=t.filter(S=>{const $=Math.floor((Date.now()-(S.timestamp||Date.now()))/864e5),w=(S.expiryDays!==void 0?S.expiryDays:7)-$;return w>0&&w<=2&&!S.isSpoiled}),h=t.filter(S=>{const $=Math.floor((Date.now()-(S.timestamp||Date.now()))/864e5),w=(S.expiryDays!==void 0?S.expiryDays:7)-$;return w>2&&w<=5&&!S.isSpoiled}),b=t.filter(S=>{const $=Math.floor((Date.now()-(S.timestamp||Date.now()))/864e5);return(S.expiryDays!==void 0?S.expiryDays:7)-$>5&&!S.isSpoiled}),x=S=>`${Math.max(S/p*100,0)}%`,v=()=>f.length===0&&h.length===0?null:m.jsxs("div",{className:"mt-4 pt-4 border-t border-white/5 space-y-2 relative z-10",children:[m.jsx("div",{className:"text-[8px] font-black text-gray-400 uppercase tracking-widest mb-2",children:"優先處理建議 (近迫排序)"}),m.jsx("div",{className:"flex gap-2 overflow-x-auto no-scrollbar pb-1",children:[...f,...h].sort((S,$)=>{const w=(S.expiryDays!==void 0?S.expiryDays:7)-Math.floor((Date.now()-(S.timestamp||Date.now()))/864e5),I=($.expiryDays!==void 0?$.expiryDays:7)-Math.floor((Date.now()-($.timestamp||Date.now()))/(1e3*60*60*24));return w-I}).map(S=>{const $=(S.expiryDays!==void 0?S.expiryDays:7)-Math.floor((Date.now()-(S.timestamp||Date.now()))/864e5),w=$<=2;return m.jsxs("div",{className:`flex-shrink-0 whitespace-nowrap px-3 py-2 rounded-xl flex items-center gap-2 border ${w?"bg-red-500/10 border-red-500/20":"bg-amber-400/10 border-amber-400/20"}`,children:[m.jsx("span",{className:"text-[10px] font-black uppercase text-white",children:S.name}),m.jsxs("span",{className:`text-[8px] font-black uppercase px-1.5 py-0.5 rounded-md ${w?"bg-red-500/20 text-red-500":"bg-amber-400/20 text-amber-400"}`,children:["剩餘 ",$," 天"]})]},S.id)})})]});return m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between mt-2 mb-2",children:[m.jsx("span",{className:"text-[10px] font-black text-white uppercase tracking-widest",children:"全庫存壽命分佈預測"}),m.jsxs("span",{className:"text-[8px] font-bold text-gray-500 uppercase",children:[p," ITEMS"]})]}),m.jsxs("div",{className:"w-full h-3 bg-white/5 rounded-full overflow-hidden flex shadow-inner mb-4",children:[f.length>0&&m.jsx("div",{style:{width:x(f.length)},className:"bg-red-500 transition-all duration-1000 animate-pulse border-r border-[#0f2e24]"}),h.length>0&&m.jsx("div",{style:{width:x(h.length)},className:"bg-amber-400 transition-all duration-1000 border-r border-[#0f2e24]"}),b.length>0&&m.jsx("div",{style:{width:x(b.length)},className:"bg-[#00ff88] transition-all duration-1000 border-r border-[#0f2e24]"}),p-f.length-h.length-b.length>0&&m.jsx("div",{style:{width:x(p-f.length-h.length-b.length)},className:"bg-gray-600 transition-all duration-1000"})]}),m.jsxs("div",{className:"grid grid-cols-3 gap-2 relative z-10",children:[m.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border text-left border-red-500/20 relative",children:[m.jsx("div",{className:"text-[8px] font-black text-gray-500 uppercase mb-1",children:"1-2 天 (高風險)"}),m.jsx("div",{className:"text-lg font-black text-red-500",children:f.length}),m.jsx("div",{className:"text-[7px] text-gray-400 mt-1 whitespace-nowrap overflow-hidden text-ellipsis",children:f.length>0?"建議立即合成":"無近迫風險"})]}),m.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border text-left border-amber-400/20 relative",children:[m.jsx("div",{className:"text-[8px] font-black text-gray-500 uppercase mb-1",children:"3-5 天 (需注意)"}),m.jsx("div",{className:"text-lg font-black text-amber-400",children:h.length}),m.jsx("div",{className:"text-[7px] text-gray-400 mt-1 whitespace-nowrap overflow-hidden text-ellipsis",children:h.length>0?"準備排入計畫":"暫無疑慮"})]}),m.jsxs("div",{className:"bg-white/5 rounded-xl p-3 border text-left border-[#00ff88]/20 relative",children:[m.jsx("div",{className:"text-[8px] font-black text-gray-500 uppercase mb-1",children:"> 5 天 (安全)"}),m.jsx("div",{className:"text-lg font-black text-[#00ff88]",children:b.length}),m.jsx("div",{className:"text-[7px] text-gray-400 mt-1 whitespace-nowrap overflow-hidden text-ellipsis",children:"庫存穩定"})]})]}),v()]})})()},"predict")}),m.jsxs("div",{className:"mt-6 pt-4 border-t border-white/5 flex items-center justify-between",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsxs("div",{className:"text-center border-r border-white/10 pr-4",children:[m.jsx("div",{className:"text-[10px] font-black text-white",children:e.reduce((p,f)=>p+f.amount,0)}),m.jsx("div",{className:"text-[6px] font-bold text-gray-500 uppercase",children:"本週損耗"})]}),m.jsxs("div",{children:[m.jsxs("div",{className:"text-[10px] font-black text-[#00ff88]",children:["+",Math.floor(l/10)]}),m.jsx("div",{className:"text-[6px] font-bold text-gray-500 uppercase",children:"惜食獎勵"})]})]}),m.jsx("div",{className:"text-[8px] font-black text-white/20 uppercase tracking-widest",children:"Protocol: Waste_Zero.v1"})]})]})}function xv(){const{settings:e,updateSettings:t}=at();return m.jsxs("div",{className:"pb-24 px-6 py-8",children:[m.jsx(Jt,{title:"個人設定"}),m.jsxs("div",{className:"flex flex-col items-center mb-10",children:[m.jsx("div",{className:"w-28 h-28 rounded-full bg-[#1a4d3d] border-4 border-[#00ff88]/20 flex items-center justify-center shadow-2xl mb-6",children:m.jsx(Qc,{size:48,className:"text-[#00ff88]",strokeWidth:1})}),m.jsx("h2",{className:"text-lg font-black text-white uppercase mb-2",children:"AI 廚房大腦"})]}),m.jsxs("div",{className:"bg-[#1a4d3d]/20 p-6 rounded-[2rem] border border-white/5 mb-8",children:[m.jsx("h3",{className:"text-[10px] font-black text-white/30 uppercase tracking-widest mb-6 px-1",children:"系統設定"}),m.jsxs("div",{className:"space-y-4",children:[m.jsxs("div",{className:"flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-[#00ff88]/10 flex items-center justify-center",children:m.jsx(Zt,{size:18,className:"text-[#00ff88]"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[10px] font-black text-white uppercase",children:"通知"}),m.jsx("div",{className:"text-[8px] font-bold text-gray-500 uppercase",children:"接收過期與庫存示警"})]})]}),m.jsx("button",{onClick:async()=>{const r=!e.notifications;r&&await kp.requestPermission(),t({notifications:r})},className:`w-12 h-6 rounded-full relative transition-all duration-300 ${e.notifications?"bg-[#00ff88]":"bg-white/10"}`,children:m.jsx("div",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${e.notifications?"left-7":"left-1"}`})})]}),m.jsxs("div",{className:"flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5",children:[m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center",children:m.jsx(dx,{size:18,className:"text-purple-400"})}),m.jsxs("div",{children:[m.jsx("div",{className:"text-[10px] font-black text-white uppercase",children:"深色模式"}),m.jsx("div",{className:"text-[8px] font-bold text-gray-500 uppercase",children:"切換應用程式語意顏色"})]})]}),m.jsx("button",{onClick:()=>t({darkMode:!e.darkMode}),className:`w-12 h-6 rounded-full relative transition-all duration-300 ${e.darkMode?"bg-purple-500":"bg-white/10"}`,children:m.jsx("div",{className:`absolute top-1 w-4 h-4 rounded-full bg-white transition-all duration-300 ${e.darkMode?"left-7":"left-1"}`})})]})]})]})]})}function bv(){const e=nt(),{wasteHistory:t,scannedItems:r}=at();return m.jsxs("div",{className:"pb-24 pt-6",children:[m.jsx(Jt,{showBackButton:!0,title:"數據統計"}),m.jsx("div",{className:"px-6 mb-8 mt-2 text-left",children:m.jsx(yv,{data:t,scannedItems:r})}),m.jsxs("div",{className:"px-6 flex flex-col items-center justify-center py-12 text-center bg-white/5 rounded-[2rem] border border-white/5 mx-6",children:[m.jsx("div",{className:"w-20 h-20 bg-[#00ff88]/5 rounded-full border border-[#00ff88]/10 flex items-center justify-center mb-6",children:m.jsx(Zt,{size:32,className:"text-[#00ff88]/20"})}),m.jsx("h2",{className:"text-[11px] font-black text-white/50 uppercase mb-5 tracking-widest",children:"暫無儲存的食譜方案"}),m.jsx("button",{onClick:()=>e("/"),className:"bg-[#00ff88] text-[#0f2e24] px-10 py-4 rounded-xl font-black uppercase text-[11px] tracking-widest shadow-lg hover:scale-105 transition-all",children:"啟動掃描器去發掘"})]})]})}function wv(){const{id:e}=_y(),t=nt(),{recommendedRecipes:r,scannedItems:i,setRecipes:n}=at(),[a,s]=U.useState(!1),[l]=U.useState(()=>r.find(p=>p.id===e)||ug.find(p=>p.id===e)||{name:"AI 合成食譜",image:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",time:"15 分鐘",difficulty:"簡單",requiredIngredients:["番茄","菠菜"],optionalIngredients:[],description:"智慧生成食譜。"}),[u,d]=U.useState(new Array(l.requiredIngredients.length).fill(!1));return m.jsxs("div",{className:"pb-32",children:[m.jsx(Jt,{showBackButton:!0,title:"烹飪指南"}),m.jsx(uv,{image:l.image,name:l.name}),m.jsxs("div",{className:"px-6 py-8",children:[m.jsx("div",{className:"grid grid-cols-3 gap-3 mb-10",children:[{i:ya,v:l.time},{i:Mt,v:l.difficulty},{i:ux,v:"2-3人份"}].map((p,f)=>m.jsxs("div",{className:"bg-white/5 rounded-2xl p-4 text-center",children:[m.jsx(p.i,{className:"w-4 h-4 mx-auto mb-2 text-[#00ff88]"}),m.jsx("div",{className:"text-xs font-black text-white",children:p.v})]},f))}),m.jsx(dv,{ingredients:l.requiredIngredients,checkedItems:u,onToggle:p=>{const f=[...u];f[p]=!f[p],d(f)},progress:Math.round(u.filter(Boolean).length/l.requiredIngredients.length*100)}),m.jsx(cv,{steps:l.steps||[{title:"初始化",description:"準備食材。"},{title:"執行",description:"標準烹飪。"}]}),m.jsx("div",{className:"mt-12 mb-8 px-2",children:m.jsxs("button",{onClick:async()=>{try{const p=i.map(h=>h.name),f=await $a.generateRecipes({ingredients:p});n(f),alert("AI 食譜已重新合成！")}catch{alert("更新食譜失敗")}},className:"w-full flex items-center justify-center gap-3 bg-white/5 border border-white/10 py-5 rounded-2xl text-[10px] font-black text-[#00ff88] uppercase tracking-[0.2em] hover:bg-[#00ff88]/10 transition-all shadow-lg text-center",children:[m.jsx(Sr,{size:18}),"重新分析並合成新方案"]})}),m.jsxs("button",{onClick:()=>s(!0),className:"w-full bg-[#00ff88] text-[#0f2e24] py-5 rounded-2xl font-black text-sm uppercase shadow-lg flex items-center justify-center gap-3 mt-4 hover:scale-[1.02] active:scale-[0.98] transition-all",children:[m.jsx(Zt,{size:20}),"儲存食譜"]})]}),m.jsx(ui,{children:a&&m.jsx(Ot.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[100] bg-[#0f2e24]/90 backdrop-blur-xl flex items-center justify-center p-6 pb-[15vh] sm:pb-6",children:m.jsxs(Ot.div,{initial:{scale:.95,y:20},animate:{scale:1,y:0},exit:{scale:.95,y:20},className:"bg-[#1a4d3d] w-full max-w-sm max-h-[75vh] flex flex-col rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden",children:[m.jsx("button",{onClick:()=>s(!1),className:"absolute right-4 top-4 z-20 w-8 h-8 rounded-full bg-black/20 flex items-center justify-center text-gray-300 hover:text-white backdrop-blur-md transition-colors",children:m.jsx(Tr,{size:16})}),m.jsx("div",{className:"p-6 pb-4 shrink-0 relative z-10 border-b border-white/5 bg-[#1a4d3d]",children:m.jsxs("div",{className:"flex items-center gap-4",children:[m.jsx("div",{className:"w-12 h-12 bg-[#00ff88]/20 rounded-2xl flex items-center justify-center text-[#00ff88] border border-[#00ff88]/10 shadow-lg",children:m.jsx(Zt,{size:24})}),m.jsxs("div",{children:[m.jsx("h3",{className:"text-lg font-black text-white uppercase tracking-widest",children:"食譜已儲存"}),m.jsx("div",{className:"text-[10px] font-bold tracking-widest text-[#00ff88] mt-0.5",children:"已同步至雲端與暫存清單"})]})]})}),m.jsxs("div",{className:"p-6 overflow-y-auto w-full flex-1 relative z-10 space-y-4 bg-[#0f2e24]/30",children:[m.jsxs("div",{children:[m.jsxs("h4",{className:"font-black text-xl text-white tracking-widest mb-2 leading-tight flex items-start gap-2",children:[m.jsx(Mt,{size:18,className:"text-[#00ff88] mt-1 shrink-0"}),l.name]}),m.jsx("div",{className:"text-[11px] text-gray-400 font-bold leading-relaxed",children:l.description})]}),m.jsxs("div",{className:"bg-white/5 rounded-2xl p-4 border border-white/5 shadow-inner",children:[m.jsxs("div",{className:"text-[10px] text-[#00ff88] mb-3 font-black uppercase tracking-widest flex items-center gap-2",children:[m.jsx(Mt,{size:12}),"所需食材"]}),m.jsx("div",{className:"flex flex-wrap gap-2",children:l.requiredIngredients.map((p,f)=>m.jsx("span",{className:"bg-black/30 border border-white/10 text-white px-3 py-1.5 rounded-xl text-[10px] font-bold",children:p},f))})]}),m.jsxs("div",{className:"bg-white/5 rounded-2xl p-4 border border-white/5 shadow-inner",children:[m.jsxs("div",{className:"text-[10px] text-amber-400 mb-3 font-black uppercase tracking-widest flex items-center gap-2",children:[m.jsx(Zt,{size:12}),"烹飪步驟"]}),m.jsx("div",{className:"space-y-4",children:l.steps?l.steps.map((p,f)=>m.jsxs("div",{className:"flex gap-3",children:[m.jsx("div",{className:"w-6 h-6 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center text-[10px] font-black shrink-0 border border-amber-400/20",children:f+1}),m.jsxs("div",{children:[m.jsx("div",{className:"text-white font-black text-[11px] tracking-wider mb-1 mt-0.5",children:p.title}),m.jsx("div",{className:"text-gray-400 text-[10px] leading-relaxed font-bold",children:p.description})]})]},f)):m.jsx("div",{className:"text-[10px] text-gray-500 font-bold tracking-widest",children:"無詳細步驟"})})]})]}),m.jsx("div",{className:"p-4 shrink-0 relative z-10 bg-[#1a4d3d] border-t border-white/5",children:m.jsx("button",{onClick:()=>{s(!1),t("/saved")},className:"w-full bg-[#00ff88] text-[#0f2e24] py-4 rounded-xl font-black text-[11px] uppercase tracking-widest shadow-lg hover:brightness-110 active:scale-[0.98] transition-all",children:"前往數據統計查看"})})]})})})]})}const vv=$y([{path:"/",element:m.jsx(jb,{}),children:[{index:!0,element:m.jsx(pv,{})},{path:"ingredients",element:m.jsx(fv,{})},{path:"recipes",element:m.jsx(hv,{})},{path:"recipe/:id",element:m.jsx(wv,{})},{path:"saved",element:m.jsx(bv,{})},{path:"profile",element:m.jsx(xv,{})},{path:"inventory",element:m.jsx(gv,{})}]}]);function _v(){return m.jsx(Ab,{children:m.jsx(ky,{router:vv})})}gx.createRoot(document.getElementById("root")).render(m.jsx(_v,{}));
