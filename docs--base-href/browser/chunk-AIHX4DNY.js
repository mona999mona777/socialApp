import{c as K}from"./chunk-CK2VLTDO.js";import{$b as Z,Eb as B,Fa as L,Gb as G,Hb as Q,I as O,Ja as u,Ka as c,N as P,O as E,Ob as X,Q as N,W as j,X as R,Ya as p,Z as k,_b as Y,ab as a,bb as d,bc as $,da as z,db as M,f as F,g as x,hb as f,ib as g,jb as y,ma as T,mb as m,nb as q,ob as A,ub as V,v as I,vb as U,wb as H}from"./chunk-BHZUFO2F.js";import{a as C,b as w}from"./chunk-TMC7WMLO.js";var l=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(l||{}),de="*";function ee(t,e){return{type:l.Trigger,name:t,definitions:e,options:{}}}function b(t,e=null){return{type:l.Animate,styles:e,timings:t}}function fe(t,e=null){return{type:l.Sequence,steps:t,options:e}}function _(t){return{type:l.Style,styles:t,offset:null}}function te(t,e,n){return{type:l.State,name:t,styles:e,options:n}}function v(t,e,n=null){return{type:l.Transition,expr:t,animation:e,options:n}}var J=class{constructor(e=0,n=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+n}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let n=e=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},W=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let n=0,i=0,s=0,r=this.players.length;r==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(o=>{o.onDone(()=>{++n==r&&this._onFinish()}),o.onDestroy(()=>{++i==r&&this._onDestroy()}),o.onStart(()=>{++s==r&&this._onStart()})}),this.totalTime=this.players.reduce((o,ie)=>Math.max(o,ie.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let n=e*this.totalTime;this.players.forEach(i=>{let s=i.totalTime?Math.min(1,n/i.totalTime):1;i.setPosition(s)})}getPosition(){let e=this.players.reduce((n,i)=>n===null||i.totalTime>n.totalTime?i:n,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let n=e=="start"?this._onStartFns:this._onDoneFns;n.forEach(i=>i()),n.length=0}},me="!";var se=["overlay"],re=["*"];function oe(t,e){t&1&&y(0,"div")}function ae(t,e){if(t&1&&(f(0,"div"),p(1,oe,1,0,"div",6),g()),t&2){let n=m(2);M(n.spinner.class),d("color",n.spinner.color),u(),a("ngForOf",n.spinner.divArray)}}function le(t,e){if(t&1&&(y(0,"div",7),G(1,"safeHtml")),t&2){let n=m(2);a("innerHTML",Q(1,1,n.template),L)}}function he(t,e){if(t&1&&(f(0,"div",2,0),p(2,ae,2,5,"div",3)(3,le,2,3,"div",4),f(4,"div",5),A(5),g()()),t&2){let n=m();d("background-color",n.spinner.bdColor)("z-index",n.spinner.zIndex)("position",n.spinner.fullScreen?"fixed":"absolute"),a("@.disabled",n.disableAnimation)("@fadeIn","in"),u(2),a("ngIf",!n.template),u(),a("ngIf",n.template),u(),d("z-index",n.spinner.zIndex)}}var ce={"ball-8bits":16,"ball-atom":4,"ball-beat":3,"ball-circus":5,"ball-climbing-dot":4,"ball-clip-rotate":1,"ball-clip-rotate-multiple":2,"ball-clip-rotate-pulse":2,"ball-elastic-dots":5,"ball-fall":3,"ball-fussion":4,"ball-grid-beat":9,"ball-grid-pulse":9,"ball-newton-cradle":4,"ball-pulse":3,"ball-pulse-rise":5,"ball-pulse-sync":3,"ball-rotate":1,"ball-running-dots":5,"ball-scale":1,"ball-scale-multiple":3,"ball-scale-pulse":2,"ball-scale-ripple":1,"ball-scale-ripple-multiple":3,"ball-spin":8,"ball-spin-clockwise":8,"ball-spin-clockwise-fade":8,"ball-spin-clockwise-fade-rotating":8,"ball-spin-fade":8,"ball-spin-fade-rotating":8,"ball-spin-rotate":2,"ball-square-clockwise-spin":8,"ball-square-spin":8,"ball-triangle-path":3,"ball-zig-zag":2,"ball-zig-zag-deflect":2,cog:1,"cube-transition":2,fire:3,"line-scale":5,"line-scale-party":5,"line-scale-pulse-out":5,"line-scale-pulse-out-rapid":5,"line-spin-clockwise-fade":8,"line-spin-clockwise-fade-rotating":8,"line-spin-fade":8,"line-spin-fade-rotating":8,pacman:6,"square-jelly-box":2,"square-loader":1,"square-spin":1,timer:1,"triangle-skew-spin":1},S={BD_COLOR:"rgba(51,51,51,0.8)",SPINNER_COLOR:"#fff",Z_INDEX:99999},D="primary",h=class t{constructor(e){Object.assign(this,e)}static create(e){return!e?.template&&!e?.type&&console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`),new t(e)}},ue=(()=>{class t{constructor(){this.spinnerObservable=new x(null)}getSpinner(n){return this.spinnerObservable.asObservable().pipe(I(i=>i&&i.name===n))}show(n=D,i){return new Promise((s,r)=>{setTimeout(()=>{i&&Object.keys(i).length?(i.name=n,this.spinnerObservable.next(new h(w(C({},i),{show:!0}))),s(!0)):(this.spinnerObservable.next(new h({name:n,show:!0})),s(!0))},10)})}hide(n=D,i=10){return new Promise((s,r)=>{setTimeout(()=>{this.spinnerObservable.next(new h({name:n,show:!1})),s(!0)},i)})}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=P({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ne=new N("NGX_SPINNER_CONFIG"),pe=(()=>{class t{constructor(n){this._sanitizer=n}transform(n){if(n)return this._sanitizer.bypassSecurityTrustHtml(n)}static{this.\u0275fac=function(i){return new(i||t)(c(K,16))}}static{this.\u0275pipe=k({name:"safeHtml",type:t,pure:!0,standalone:!0})}}return t})(),ke=(()=>{class t{constructor(n,i,s,r){this.spinnerService=n,this.changeDetector=i,this.elementRef=s,this.globalConfig=r,this.disableAnimation=!1,this.spinner=new h,this.ngUnsubscribe=new F,this.setDefaultOptions=()=>{let{type:o}=this.globalConfig??{};this.spinner=h.create({name:this.name,bdColor:this.bdColor,size:this.size,color:this.color,type:this.type??o,fullScreen:this.fullScreen,divArray:this.divArray,divCount:this.divCount,show:this.show,zIndex:this.zIndex,template:this.template,showSpinner:this.showSpinner})},this.bdColor=S.BD_COLOR,this.zIndex=S.Z_INDEX,this.color=S.SPINNER_COLOR,this.size="large",this.fullScreen=!0,this.name=D,this.template=null,this.showSpinner=!1,this.divArray=[],this.divCount=0,this.show=!1}initObservable(){this.spinnerService.getSpinner(this.name).pipe(O(this.ngUnsubscribe)).subscribe(n=>{this.setDefaultOptions(),Object.assign(this.spinner,n),n.show&&this.onInputChange(),this.changeDetector.detectChanges()})}ngOnInit(){this.setDefaultOptions(),this.initObservable()}isSpinnerZone(n){return n===this.elementRef.nativeElement.parentElement?!0:n.parentNode&&this.isSpinnerZone(n.parentNode)}ngOnChanges(n){for(let i in n)if(i){let s=n[i];if(s.isFirstChange())return;typeof s.currentValue<"u"&&s.currentValue!==s.previousValue&&s.currentValue!==""&&(this.spinner[i]=s.currentValue,i==="showSpinner"&&(s.currentValue?this.spinnerService.show(this.spinner.name,this.spinner):this.spinnerService.hide(this.spinner.name)),i==="name"&&this.initObservable())}}getClass(n,i){this.spinner.divCount=ce[n],this.spinner.divArray=Array(this.spinner.divCount).fill(0).map((r,o)=>o);let s="";switch(i.toLowerCase()){case"small":s="la-sm";break;case"medium":s="la-2x";break;case"large":s="la-3x";break;default:break}return"la-"+n+" "+s}onInputChange(){this.spinner.class=this.getClass(this.spinner.type,this.spinner.size)}ngOnDestroy(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete()}static{this.\u0275fac=function(i){return new(i||t)(c(ue),c(X),c(T),c(ne,8))}}static{this.\u0275cmp=j({type:t,selectors:[["ngx-spinner"]],viewQuery:function(i,s){if(i&1&&V(se,5),i&2){let r;U(r=H())&&(s.spinnerDOM=r.first)}},inputs:{bdColor:"bdColor",size:"size",color:"color",type:"type",fullScreen:"fullScreen",name:"name",zIndex:"zIndex",template:"template",showSpinner:"showSpinner",disableAnimation:"disableAnimation"},standalone:!0,features:[z,B],ngContentSelectors:re,decls:1,vars:1,consts:[["overlay",""],["class","ngx-spinner-overlay",3,"background-color","z-index","position",4,"ngIf"],[1,"ngx-spinner-overlay"],[3,"class","color",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[1,"loading-text"],[4,"ngFor","ngForOf"],[3,"innerHTML"]],template:function(i,s){i&1&&(q(),p(0,he,6,12,"div",1)),i&2&&a("ngIf",s.spinner.show)},dependencies:[pe,Z,Y],styles:[".ngx-spinner-overlay[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%}.ngx-spinner-overlay[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:not(.loading-text){top:50%;left:50%;margin:0;position:absolute;transform:translate(-50%,-50%)}.loading-text[_ngcontent-%COMP%]{position:absolute;top:60%;left:50%;transform:translate(-50%,-60%)}"],data:{animation:[ee("fadeIn",[te("in",_({opacity:1})),v(":enter",[_({opacity:0}),b(300)]),v(":leave",b(200,_({opacity:0})))])]},changeDetection:0})}}return t})(),ze=(()=>{class t{static forRoot(n){return{ngModule:t,providers:[{provide:ne,useValue:n}]}}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=R({type:t})}static{this.\u0275inj=E({imports:[$]})}}return t})();export{l as a,de as b,fe as c,_ as d,J as e,W as f,me as g,ue as h,ke as i,ze as j};
