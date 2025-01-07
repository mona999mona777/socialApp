import{Db as v,Jb as de,Ka as o,L as N,M as m,N as z,O as S,Oa as k,Ob as ce,Q as _,Rb as he,Sb as X,T as ae,Ta as u,V as c,X as O,Y as l,cb as Z,da as x,i as re,ia as le,ka as ue,lb as A,ma as P,n as se,na as y,t as oe}from"./chunk-BHZUFO2F.js";import{a as d,b as g}from"./chunk-TMC7WMLO.js";var De=(()=>{class i{constructor(e,n){this._renderer=e,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static{this.\u0275fac=function(n){return new(n||i)(o(k),o(P))}}static{this.\u0275dir=l({type:i})}}return i})(),be=(()=>{class i extends De{static{this.\u0275fac=(()=>{let e;return function(r){return(e||(e=le(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[u]})}}return i})(),L=new _("");var ze={provide:L,useExisting:m(()=>Ae),multi:!0};function Ze(){let i=X()?X().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Xe=new _(""),Ae=(()=>{class i extends De{constructor(e,n,r){super(e,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ze())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static{this.\u0275fac=function(n){return new(n||i)(o(k),o(P),o(Xe,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&A("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[v([ze]),u]})}}return i})();function f(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Me(i){return i!=null&&typeof i.length=="number"}var $=new _(""),W=new _(""),Ye=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,fe=class{static min(t){return Ke(t)}static max(t){return Je(t)}static required(t){return Qe(t)}static requiredTrue(t){return et(t)}static email(t){return tt(t)}static minLength(t){return it(t)}static maxLength(t){return nt(t)}static pattern(t){return rt(t)}static nullValidator(t){return Fe(t)}static compose(t){return Oe(t)}static composeAsync(t){return xe(t)}};function Ke(i){return t=>{if(f(t.value)||f(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e<i?{min:{min:i,actual:t.value}}:null}}function Je(i){return t=>{if(f(t.value)||f(i))return null;let e=parseFloat(t.value);return!isNaN(e)&&e>i?{max:{max:i,actual:t.value}}:null}}function Qe(i){return f(i.value)?{required:!0}:null}function et(i){return i.value===!0?null:{required:!0}}function tt(i){return f(i.value)||Ye.test(i.value)?null:{email:!0}}function it(i){return t=>f(t.value)||!Me(t.value)?null:t.value.length<i?{minlength:{requiredLength:i,actualLength:t.value.length}}:null}function nt(i){return t=>Me(t.value)&&t.value.length>i?{maxlength:{requiredLength:i,actualLength:t.value.length}}:null}function rt(i){if(!i)return Fe;let t,e;return typeof i=="string"?(e="",i.charAt(0)!=="^"&&(e+="^"),e+=i,i.charAt(i.length-1)!=="$"&&(e+="$"),t=new RegExp(e)):(e=i.toString(),t=i),n=>{if(f(n.value))return null;let r=n.value;return t.test(r)?null:{pattern:{requiredPattern:e,actualValue:r}}}}function Fe(i){return null}function Ee(i){return i!=null}function we(i){return de(i)?re(i):i}function Ie(i){let t={};return i.forEach(e=>{t=e!=null?d(d({},t),e):t}),Object.keys(t).length===0?null:t}function Ne(i,t){return t.map(e=>e(i))}function st(i){return!i.validate}function Se(i){return i.map(t=>st(t)?t:e=>t.validate(e))}function Oe(i){if(!i)return null;let t=i.filter(Ee);return t.length==0?null:function(e){return Ie(Ne(e,t))}}function Q(i){return i!=null?Oe(Se(i)):null}function xe(i){if(!i)return null;let t=i.filter(Ee);return t.length==0?null:function(e){let n=Ne(e,t).map(we);return oe(n).pipe(se(Ie))}}function ee(i){return i!=null?xe(Se(i)):null}function pe(i,t){return i===null?[t]:Array.isArray(i)?[...i,t]:[i,t]}function Pe(i){return i._rawValidators}function ke(i){return i._rawAsyncValidators}function Y(i){return i?Array.isArray(i)?i:[i]:[]}function T(i,t){return Array.isArray(i)?i.includes(t):i===t}function ge(i,t){let e=Y(t);return Y(i).forEach(r=>{T(e,r)||e.push(r)}),e}function me(i,t){return Y(t).filter(e=>!T(i,e))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(t){this._rawValidators=t||[],this._composedValidatorFn=Q(this._rawValidators)}_setAsyncValidators(t){this._rawAsyncValidators=t||[],this._composedAsyncValidatorFn=ee(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(t){this._onDestroyCallbacks.push(t)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(t=>t()),this._onDestroyCallbacks=[]}reset(t=void 0){this.control&&this.control.reset(t)}hasError(t,e){return this.control?this.control.hasError(t,e):!1}getError(t,e){return this.control?this.control.getError(t,e):null}},h=class extends j{get formDirective(){return null}get path(){return null}},p=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},B=class{constructor(t){this._cd=t}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},ot={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qt=g(d({},ot),{"[class.ng-submitted]":"isSubmitted"}),zt=(()=>{class i extends B{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(o(p,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[u]})}}return i})(),Zt=(()=>{class i extends B{constructor(e){super(e)}static{this.\u0275fac=function(n){return new(n||i)(o(h,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Z("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[u]})}}return i})();var M="VALID",G="INVALID",C="PENDING",F="DISABLED";function te(i){return(q(i)?i.validators:i)||null}function at(i){return Array.isArray(i)?Q(i):i||null}function ie(i,t){return(q(t)?t.asyncValidators:i)||null}function lt(i){return Array.isArray(i)?ee(i):i||null}function q(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ge(i,t,e){let n=i.controls;if(!(t?Object.keys(n):n).length)throw new N(1e3,"");if(!n[e])throw new N(1001,"")}function Te(i,t,e){i._forEachChild((n,r)=>{if(e[r]===void 0)throw new N(1002,"")})}var V=class{constructor(t,e){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(t),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(t){this._rawValidators=this._composedValidatorFn=t}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(t){this._rawAsyncValidators=this._composedAsyncValidatorFn=t}get parent(){return this._parent}get valid(){return this.status===M}get invalid(){return this.status===G}get pending(){return this.status==C}get disabled(){return this.status===F}get enabled(){return this.status!==F}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(t){this._assignValidators(t)}setAsyncValidators(t){this._assignAsyncValidators(t)}addValidators(t){this.setValidators(ge(t,this._rawValidators))}addAsyncValidators(t){this.setAsyncValidators(ge(t,this._rawAsyncValidators))}removeValidators(t){this.setValidators(me(t,this._rawValidators))}removeAsyncValidators(t){this.setAsyncValidators(me(t,this._rawAsyncValidators))}hasValidator(t){return T(this._rawValidators,t)}hasAsyncValidator(t){return T(this._rawAsyncValidators,t)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(t={}){this.touched=!0,this._parent&&!t.onlySelf&&this._parent.markAsTouched(t)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(t=>t.markAllAsTouched())}markAsUntouched(t={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(e=>{e.markAsUntouched({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}markAsDirty(t={}){this.pristine=!1,this._parent&&!t.onlySelf&&this._parent.markAsDirty(t)}markAsPristine(t={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(e=>{e.markAsPristine({onlySelf:!0})}),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}markAsPending(t={}){this.status=C,t.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!t.onlySelf&&this._parent.markAsPending(t)}disable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=F,this.errors=null,this._forEachChild(n=>{n.disable(g(d({},t),{onlySelf:!0}))}),this._updateValue(),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(g(d({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(n=>n(!0))}enable(t={}){let e=this._parentMarkedDirty(t.onlySelf);this.status=M,this._forEachChild(n=>{n.enable(g(d({},t),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent}),this._updateAncestors(g(d({},t),{skipPristineCheck:e})),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(t){this._parent&&!t.onlySelf&&(this._parent.updateValueAndValidity(t),t.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(t){this._parent=t}getRawValue(){return this.value}updateValueAndValidity(t={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===M||this.status===C)&&this._runAsyncValidator(t.emitEvent)),t.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!t.onlySelf&&this._parent.updateValueAndValidity(t)}_updateTreeValidity(t={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(t)),this.updateValueAndValidity({onlySelf:!0,emitEvent:t.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:M}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(t){if(this.asyncValidator){this.status=C,this._hasOwnPendingAsyncValidator=!0;let e=we(this.asyncValidator(this));this._asyncValidationSubscription=e.subscribe(n=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(n,{emitEvent:t})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(t,e={}){this.errors=t,this._updateControlsErrors(e.emitEvent!==!1)}get(t){let e=t;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,r)=>n&&n._find(r),this)}getError(t,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[t]:null}hasError(t,e){return!!this.getError(t,e)}get root(){let t=this;for(;t._parent;)t=t._parent;return t}_updateControlsErrors(t){this.status=this._calculateStatus(),t&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(t)}_initObservables(){this.valueChanges=new y,this.statusChanges=new y}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?G:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(C)?C:this._anyControlsHaveStatus(G)?G:M}_anyControlsHaveStatus(t){return this._anyControls(e=>e.status===t)}_anyControlsDirty(){return this._anyControls(t=>t.dirty)}_anyControlsTouched(){return this._anyControls(t=>t.touched)}_updatePristine(t={}){this.pristine=!this._anyControlsDirty(),this._parent&&!t.onlySelf&&this._parent._updatePristine(t)}_updateTouched(t={}){this.touched=this._anyControlsTouched(),this._parent&&!t.onlySelf&&this._parent._updateTouched(t)}_registerOnCollectionChange(t){this._onCollectionChange=t}_setUpdateStrategy(t){q(t)&&t.updateOn!=null&&(this._updateOn=t.updateOn)}_parentMarkedDirty(t){let e=this._parent&&this._parent.dirty;return!t&&!!e&&!this._parent._anyControlsDirty()}_find(t){return null}_assignValidators(t){this._rawValidators=Array.isArray(t)?t.slice():t,this._composedValidatorFn=at(this._rawValidators)}_assignAsyncValidators(t){this._rawAsyncValidators=Array.isArray(t)?t.slice():t,this._composedAsyncValidatorFn=lt(this._rawAsyncValidators)}},D=class extends V{constructor(t,e,n){super(te(e),ie(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(t,e){return this.controls[t]?this.controls[t]:(this.controls[t]=e,e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange),e)}addControl(t,e,n={}){this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(t,e={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}setControl(t,e,n={}){this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),delete this.controls[t],e&&this.registerControl(t,e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(t){return this.controls.hasOwnProperty(t)&&this.controls[t].enabled}setValue(t,e={}){Te(this,!0,t),Object.keys(t).forEach(n=>{Ge(this,!0,n),this.controls[n].setValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(Object.keys(t).forEach(n=>{let r=this.controls[n];r&&r.patchValue(t[n],{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t={},e={}){this._forEachChild((n,r)=>{n.reset(t?t[r]:null,{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this._reduceChildren({},(t,e,n)=>(t[n]=e.getRawValue(),t))}_syncPendingControls(){let t=this._reduceChildren(!1,(e,n)=>n._syncPendingControls()?!0:e);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){Object.keys(this.controls).forEach(e=>{let n=this.controls[e];n&&t(n,e)})}_setUpControls(){this._forEachChild(t=>{t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(t){for(let[e,n]of Object.entries(this.controls))if(this.contains(e)&&t(n))return!0;return!1}_reduceValue(){let t={};return this._reduceChildren(t,(e,n,r)=>((n.enabled||this.disabled)&&(e[r]=n.value),e))}_reduceChildren(t,e){let n=t;return this._forEachChild((r,s)=>{n=e(n,r,s)}),n}_allControlsDisabled(){for(let t of Object.keys(this.controls))if(this.controls[t].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(t){return this.controls.hasOwnProperty(t)?this.controls[t]:null}};var K=class extends D{};var b=new _("CallSetDisabledState",{providedIn:"root",factory:()=>I}),I="always";function je(i,t){return[...t.path,i]}function R(i,t,e=I){ne(i,t),t.valueAccessor.writeValue(i.value),(i.disabled||e==="always")&&t.valueAccessor.setDisabledState?.(i.disabled),dt(i,t),ht(i,t),ct(i,t),ut(i,t)}function _e(i,t,e=!0){let n=()=>{};t.valueAccessor&&(t.valueAccessor.registerOnChange(n),t.valueAccessor.registerOnTouched(n)),H(i,t),i&&(t._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function U(i,t){i.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(t)})}function ut(i,t){if(t.valueAccessor.setDisabledState){let e=n=>{t.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(e),t._registerOnDestroy(()=>{i._unregisterOnDisabledChange(e)})}}function ne(i,t){let e=Pe(i);t.validator!==null?i.setValidators(pe(e,t.validator)):typeof e=="function"&&i.setValidators([e]);let n=ke(i);t.asyncValidator!==null?i.setAsyncValidators(pe(n,t.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();U(t._rawValidators,r),U(t._rawAsyncValidators,r)}function H(i,t){let e=!1;if(i!==null){if(t.validator!==null){let r=Pe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==t.validator);s.length!==r.length&&(e=!0,i.setValidators(s))}}if(t.asyncValidator!==null){let r=ke(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==t.asyncValidator);s.length!==r.length&&(e=!0,i.setAsyncValidators(s))}}}let n=()=>{};return U(t._rawValidators,n),U(t._rawAsyncValidators,n),e}function dt(i,t){t.valueAccessor.registerOnChange(e=>{i._pendingValue=e,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Be(i,t)})}function ct(i,t){t.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Be(i,t),i.updateOn!=="submit"&&i.markAsTouched()})}function Be(i,t){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function ht(i,t){let e=(n,r)=>{t.valueAccessor.writeValue(n),r&&t.viewToModelUpdate(n)};i.registerOnChange(e),t._registerOnDestroy(()=>{i._unregisterOnChange(e)})}function Re(i,t){i==null,ne(i,t)}function ft(i,t){return H(i,t)}function Ue(i,t){if(!i.hasOwnProperty("model"))return!1;let e=i.model;return e.isFirstChange()?!0:!Object.is(t,e.currentValue)}function pt(i){return Object.getPrototypeOf(i.constructor)===be}function He(i,t){i._syncPendingControls(),t.forEach(e=>{let n=e.control;n.updateOn==="submit"&&n._pendingChange&&(e.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Le(i,t){if(!t)return null;Array.isArray(t);let e,n,r;return t.forEach(s=>{s.constructor===Ae?e=s:pt(s)?n=s:r=s}),r||n||e||null}function gt(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}var mt={provide:h,useExisting:m(()=>_t)},E=Promise.resolve(),_t=(()=>{class i extends h{constructor(e,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._directives=new Set,this.ngSubmit=new y,this.form=new D({},Q(e),ee(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(e){E.then(()=>{let n=this._findContainer(e.path);e.control=n.registerControl(e.name,e.control),R(e.control,e,this.callSetDisabledState),e.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(e)})}getControl(e){return this.form.get(e.path)}removeControl(e){E.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name),this._directives.delete(e)})}addFormGroup(e){E.then(()=>{let n=this._findContainer(e.path),r=new D({});Re(r,e),n.registerControl(e.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(e){E.then(()=>{let n=this._findContainer(e.path);n&&n.removeControl(e.name)})}getFormGroup(e){return this.form.get(e.path)}updateModel(e,n){E.then(()=>{this.form.get(e.path).setValue(n)})}setValue(e){this.control.setValue(e)}onSubmit(e){return this.submitted=!0,He(this.form,this._directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(e){return e.pop(),e.length?this.form.get(e):this.form}static{this.\u0275fac=function(n){return new(n||i)(o($,10),o(W,10),o(b,8))}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&A("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{options:[c.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[v([mt]),u]})}}return i})();function ye(i,t){let e=i.indexOf(t);e>-1&&i.splice(e,1)}function ve(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var w=class extends V{constructor(t=null,e,n){super(te(e),ie(n,e)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(t),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(e)&&(e.nonNullable||e.initialValueIsDefault)&&(ve(t)?this.defaultValue=t.value:this.defaultValue=t)}setValue(t,e={}){this.value=this._pendingValue=t,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(t,e={}){this.setValue(t,e)}reset(t=this.defaultValue,e={}){this._applyFormState(t),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(t){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(t){this._onChange.push(t)}_unregisterOnChange(t){ye(this._onChange,t)}registerOnDisabledChange(t){this._onDisabledChange.push(t)}_unregisterOnDisabledChange(t){ye(this._onDisabledChange,t)}_forEachChild(t){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(t){ve(t)?(this.value=this._pendingValue=t.value,t.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=t}};var yt=i=>i instanceof w;var vt={provide:p,useExisting:m(()=>Ct)},Ce=Promise.resolve(),Ct=(()=>{class i extends p{constructor(e,n,r,s,a,qe){super(),this._changeDetectorRef=a,this.callSetDisabledState=qe,this.control=new w,this._registered=!1,this.name="",this.update=new y,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Le(this,s)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Ue(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){R(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){Ce.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,r=n!==0&&he(n);Ce.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?je(e,this._parent):[e]}static{this.\u0275fac=function(n){return new(n||i)(o(h,9),o($,10),o(W,10),o(L,10),o(ce,8),o(b,8))}}static{this.\u0275dir=l({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"],options:[c.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[v([vt]),u,x]})}}return i})(),Yt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Vt={provide:L,useExisting:m(()=>bt),multi:!0};var Dt=(()=>{class i{constructor(){this._accessors=[]}add(e,n){this._accessors.push([e,n])}remove(e){for(let n=this._accessors.length-1;n>=0;--n)if(this._accessors[n][1]===e){this._accessors.splice(n,1);return}}select(e){this._accessors.forEach(n=>{this._isSameGroup(n,e)&&n[1]!==e&&n[1].fireUncheck(e.value)})}_isSameGroup(e,n){return e[0].control?e[0]._parent===n._control._parent&&e[1].name===n.name:!1}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})(),bt=(()=>{class i extends be{constructor(e,n,r,s){super(e,n),this._registry=r,this._injector=s,this.setDisabledStateFired=!1,this.onChange=()=>{},this.callSetDisabledState=ae(b,{optional:!0})??I}ngOnInit(){this._control=this._injector.get(p),this._checkName(),this._registry.add(this._control,this)}ngOnDestroy(){this._registry.remove(this)}writeValue(e){this._state=e===this.value,this.setProperty("checked",this._state)}registerOnChange(e){this._fn=e,this.onChange=()=>{e(this.value),this._registry.select(this)}}setDisabledState(e){(this.setDisabledStateFired||e||this.callSetDisabledState==="whenDisabledForLegacyCode")&&this.setProperty("disabled",e),this.setDisabledStateFired=!0}fireUncheck(e){this.writeValue(e)}_checkName(){this.name&&this.formControlName&&(this.name,this.formControlName),!this.name&&this.formControlName&&(this.name=this.formControlName)}static{this.\u0275fac=function(n){return new(n||i)(o(k),o(P),o(Dt),o(ue))}}static{this.\u0275dir=l({type:i,selectors:[["input","type","radio","formControlName",""],["input","type","radio","formControl",""],["input","type","radio","ngModel",""]],hostBindings:function(n,r){n&1&&A("change",function(){return r.onChange()})("blur",function(){return r.onTouched()})},inputs:{name:"name",formControlName:"formControlName",value:"value"},features:[v([Vt]),u]})}}return i})();var $e=new _("");var At={provide:h,useExisting:m(()=>Mt)},Mt=(()=>{class i extends h{constructor(e,n,r){super(),this.callSetDisabledState=r,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new y,this._setValidators(e),this._setAsyncValidators(n)}ngOnChanges(e){this._checkFormPresent(),e.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(H(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(e){let n=this.form.get(e.path);return R(n,e,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(e),n}getControl(e){return this.form.get(e.path)}removeControl(e){_e(e.control||null,e,!1),gt(this.directives,e)}addFormGroup(e){this._setUpFormContainer(e)}removeFormGroup(e){this._cleanUpFormContainer(e)}getFormGroup(e){return this.form.get(e.path)}addFormArray(e){this._setUpFormContainer(e)}removeFormArray(e){this._cleanUpFormContainer(e)}getFormArray(e){return this.form.get(e.path)}updateModel(e,n){this.form.get(e.path).setValue(n)}onSubmit(e){return this.submitted=!0,He(this.form,this.directives),this.ngSubmit.emit(e),e?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(e=void 0){this.form.reset(e),this.submitted=!1}_updateDomValue(){this.directives.forEach(e=>{let n=e.control,r=this.form.get(e.path);n!==r&&(_e(n||null,e),yt(r)&&(R(r,e,this.callSetDisabledState),e.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(e){let n=this.form.get(e.path);Re(n,e),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(e){if(this.form){let n=this.form.get(e.path);n&&ft(n,e)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ne(this.form,this),this._oldForm&&H(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o($,10),o(W,10),o(b,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&A("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[c.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[v([At]),u,x]})}}return i})();var Ft={provide:p,useExisting:m(()=>Et)},Et=(()=>{class i extends p{set isDisabled(e){}static{this._ngModelWarningSentOnce=!1}constructor(e,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new y,this._ngModelWarningSent=!1,this._parent=e,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Le(this,s)}ngOnChanges(e){this._added||this._setUpControl(),Ue(e,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}get path(){return je(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(h,13),o($,10),o(W,10),o(L,10),o($e,8))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""]],inputs:{name:[c.None,"formControlName","name"],isDisabled:[c.None,"disabled","isDisabled"],model:[c.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[v([Ft]),u,x]})}}return i})();var We=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=S({})}}return i})(),J=class extends V{constructor(t,e,n){super(te(e),ie(n,e)),this.controls=t,this._initObservables(),this._setUpdateStrategy(e),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(t){return this.controls[this._adjustIndex(t)]}push(t,e={}){this.controls.push(t),this._registerControl(t),this.updateValueAndValidity({emitEvent:e.emitEvent}),this._onCollectionChange()}insert(t,e,n={}){this.controls.splice(t,0,e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(t,e={}){let n=this._adjustIndex(t);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:e.emitEvent})}setControl(t,e,n={}){let r=this._adjustIndex(t);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),e&&(this.controls.splice(r,0,e),this._registerControl(e)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(t,e={}){Te(this,!1,t),t.forEach((n,r)=>{Ge(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e)}patchValue(t,e={}){t!=null&&(t.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:e.emitEvent})}),this.updateValueAndValidity(e))}reset(t=[],e={}){this._forEachChild((n,r)=>{n.reset(t[r],{onlySelf:!0,emitEvent:e.emitEvent})}),this._updatePristine(e),this._updateTouched(e),this.updateValueAndValidity(e)}getRawValue(){return this.controls.map(t=>t.getRawValue())}clear(t={}){this.controls.length<1||(this._forEachChild(e=>e._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:t.emitEvent}))}_adjustIndex(t){return t<0?t+this.length:t}_syncPendingControls(){let t=this.controls.reduce((e,n)=>n._syncPendingControls()?!0:e,!1);return t&&this.updateValueAndValidity({onlySelf:!0}),t}_forEachChild(t){this.controls.forEach((e,n)=>{t(e,n)})}_updateValue(){this.value=this.controls.filter(t=>t.enabled||this.disabled).map(t=>t.value)}_anyControls(t){return this.controls.some(e=>e.enabled&&t(e))}_setUpControls(){this._forEachChild(t=>this._registerControl(t))}_allControlsDisabled(){for(let t of this.controls)if(t.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(t){t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange)}_find(t){return this.at(t)??null}};function Ve(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Kt=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let e=new i;return e.useNonNullable=!0,e}group(e,n=null){let r=this._reduceControls(e),s={};return Ve(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new D(r,s)}record(e,n=null){let r=this._reduceControls(e);return new K(r,n)}control(e,n,r){let s={};return this.useNonNullable?(Ve(n)?s=n:(s.validators=n,s.asyncValidators=r),new w(e,g(d({},s),{nonNullable:!0}))):new w(e,n,r)}array(e,n,r){let s=e.map(a=>this._createControl(a));return new J(s,n,r)}_reduceControls(e){let n={};return Object.keys(e).forEach(r=>{n[r]=this._createControl(e[r])}),n}_createControl(e){if(e instanceof w)return e;if(e instanceof V)return e;if(Array.isArray(e)){let n=e[0],r=e.length>1?e[1]:null,s=e.length>2?e[2]:null;return this.control(n,r,s)}else return this.control(e)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=z({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var Jt=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:b,useValue:e.callSetDisabledState??I}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=S({imports:[We]})}}return i})(),Qt=(()=>{class i{static withConfig(e){return{ngModule:i,providers:[{provide:$e,useValue:e.warnOnNgModelWithFormControl??"always"},{provide:b,useValue:e.callSetDisabledState??I}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=O({type:i})}static{this.\u0275inj=S({imports:[We]})}}return i})();var ii={baseUrl:"https://linked-posts.routemisr.com/"};export{Ae as a,fe as b,zt as c,Zt as d,D as e,_t as f,w as g,Ct as h,Yt as i,bt as j,Mt as k,Et as l,Kt as m,Jt as n,Qt as o,ii as p};
