import './polyfills.server.mjs';
import{a as b}from"./chunk-DIKRYFYL.mjs";import{c as x,d as k}from"./chunk-QYWQGVGL.mjs";import{Bb as a,Cb as p,Db as d,Ib as v,Kb as o,Lb as r,Na as t,Sa as f,U as e,Y as m,ic as _,lb as n,mb as i,nb as h,pb as g,rc as c,ta as u}from"./chunk-EGVBZG6N.mjs";import"./chunk-VVCT4QZE.mjs";var R=(()=>{class l{constructor(){this._PLATFORM_ID=e(u),this._Location=e(_),this._MytranslateService=e(b),this._Renderer2=e(f)}ngOnInit(){c(this._PLATFORM_ID)&&localStorage.getItem("socialAppDarkMode")!=null&&this._Renderer2.addClass(document.documentElement,"dark"),c(this._PLATFORM_ID)&&localStorage.getItem("lang")!=null&&this._MytranslateService.useChoiceLang()}back(){this._Location.back()}static{this.\u0275fac=function(s){return new(s||l)}}static{this.\u0275cmp=m({type:l,selectors:[["app-notfoundpage"]],standalone:!0,features:[v],decls:16,vars:12,consts:[[1,"w-[100%]","h-[100vh]","flex","justify-center","items-center","bg-white","dark:bg-[#1C1C1D]","font-bold","dark:text-white"],[1,"text-center"],["src","./assets/images/okey.png","alt","not found imag",1,"w-full","my-5"],[1,"text-blue-700","hover:underline","mx-5",3,"click"],[1,"text-blue-700","hover:underline","mx-5"]],template:function(s,I){s&1&&(n(0,"section",0)(1,"div",1)(2,"h1"),a(3),o(4,"translate"),i(),n(5,"p"),a(6),o(7,"translate"),i(),h(8,"img",2),n(9,"P")(10,"a",3),g("click",function(){return I.back()}),a(11),o(12,"translate"),i(),n(13,"a",4),a(14),o(15,"translate"),i()()()()),s&2&&(t(3),p(r(4,4,"notfound.Sorry, this page isn't available")),t(3),d(" ",r(7,6,"notfound.This link you follow may be broken, or the page may have been removed"),". "),t(5),d("",r(12,8,"notfound.go back to the previous page")," "),t(3),p(r(15,10,"notfound.Visit Our Help Center")))},dependencies:[k,x]})}}return l})();export{R as NotfoundpageComponent};