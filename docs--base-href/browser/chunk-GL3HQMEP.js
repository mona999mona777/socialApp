import{a as E}from"./chunk-5E2UCTCB.js";import{f as w}from"./chunk-CK2VLTDO.js";import{d as T,f as M,i as P,n as D}from"./chunk-6H6Y5CQX.js";import{a as A}from"./chunk-7QNPCXHN.js";import"./chunk-X2P3I5TM.js";import{Eb as S,Gb as p,Hb as c,Ja as o,Oa as k,T as s,W as _,Ya as u,dc as x,eb as m,ga as v,ha as y,hb as r,ib as n,jb as g,jc as U,kc as R,lb as f,mb as h,ra as I,xb as a,yb as C,zb as d}from"./chunk-BHZUFO2F.js";import"./chunk-TMC7WMLO.js";function O(t,b){t&1&&g(0,"span",15)}function N(t,b){if(t&1&&(r(0,"p",16),a(1),n()),t&2){let i=h();o(),d(" ",i.messgerror," ")}}function j(t,b){if(t&1&&(r(0,"p",17),a(1),n()),t&2){let i=h();o(),d(" ",i.messsuccess," ")}}var X=(()=>{class t{constructor(){this._AuthService=s(E),this._Router=s(w),this._PLATFORM_ID=s(I),this._MytranslateService=s(A),this._Renderer2=s(k),this.messgerror="",this.messsuccess="",this.isloading=!1}changeImage(i){let e=i.target;e.files&&e.files.length>0&&(this.savedImage=e.files[0])}ngOnInit(){x(this._PLATFORM_ID)&&localStorage.getItem("socialAppDarkMode")!=null&&this._Renderer2.addClass(document.documentElement,"dark"),x(this._PLATFORM_ID)&&localStorage.getItem("lang")!=null&&this._MytranslateService.useChoiceLang()}addUserImage(){let i=new FormData;i.append("photo",this.savedImage),this.savedImage&&(this.isloading=!0,this.unsubUserImage=this._AuthService.uploadProfilePhoto(i).subscribe({next:e=>{e.message=="success"&&(this.isloading=!1,this.messsuccess=e.message,this.messgerror="",setTimeout(()=>{this._Router.navigate(["/user"])},1e3))},error:e=>{this.isloading=!1,console.log(e),e.message=="Http failure response for https://linked-posts.routemisr.com/users/upload-photo: 0 undefined"?(this.messgerror="Sorry, Not Support This Type Of Image",this.messsuccess=""):(this.messgerror=e.error.error,this.messsuccess="")}}))}ngOnDestroy(){this.unsubUserImage?.unsubscribe()}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=_({type:t,selectors:[["app-upload-image"]],standalone:!0,features:[S],decls:25,vars:12,consts:[[1,"dark:bg-[#1C1C1D]","w-full","h-[100vh]","pt-5"],[1,"w-1/2","mx-auto","bg-zinc-50","p-4","my-4","rounded-3xl","dark:bg-[#1C1C1D]","dark:border","dark:border-gray-600"],[1,"title"],[1,"text-center","text-lg","text-slate-900","font-bold","my-3","dark:text-white"],[1,"space-y-4"],[1,"flex","items-center","justify-center","w-full"],["for","dropzone-file",1,"flex","flex-col","items-center","justify-center","w-full","h-64","border-2","border-gray-300","border-dashed","rounded-lg","cursor-pointer","bg-gray-50","dark:bg-gray-700","hover:bg-gray-100","dark:border-gray-600","dark:hover:border-gray-500","dark:hover:bg-gray-600"],[1,"flex","flex-col","items-center","justify-center","pt-5","pb-6"],["aria-hidden","true","xmlns","http://www.w3.org/2000/svg","fill","none","viewBox","0 0 20 16",1,"w-8","h-8","mb-4","text-gray-500","dark:text-gray-400"],["stroke","currentColor","stroke-linecap","round","stroke-linejoin","round","stroke-width","2","d","M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"],[1,"mb-2","text-sm","text-gray-500","dark:text-gray-400"],[1,"font-semibold"],[1,"text-xs","text-gray-500","dark:text-gray-400"],["id","dropzone-file","type","file",1,"hidden",3,"change"],[1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","block","mx-auto","w-3/4","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800",3,"click"],[1,"fas","fa-spin","fa-spinner"],["role","alert",1,"text-center","bg-red-200","rounded","text-red-700","p-3","my-2","w-full","mx-auto"],["role","alert",1,"text-center","bg-green-200","rounded","text-green-700","p-3","my-2","w-full","mx-auto"]],template:function(e,l){e&1&&(r(0,"section",0)(1,"div",1)(2,"div",2)(3,"h2",3),a(4),p(5,"translate"),n()(),r(6,"form",4)(7,"div",5)(8,"label",6)(9,"div",7),v(),r(10,"svg",8),g(11,"path",9),n(),y(),r(12,"p",10)(13,"span",11),a(14),p(15,"translate"),n()(),r(16,"p",12),a(17," JPEG, PNG, JPG "),n()(),r(18,"input",13),f("change",function(L){return l.changeImage(L)}),n()()(),r(19,"button",14),f("click",function(){return l.addUserImage()}),a(20),p(21,"translate"),u(22,O,1,0,"span",15),n()(),u(23,N,2,1,"p",16)(24,j,2,1,"p",17),n()()),e&2&&(o(4),d(" ",c(5,6,"upload.Select Your Profile Picture")," "),o(10),C(c(15,8,"authenmodal.Click to upload or drag and drop")),o(6),d(" ",c(21,10,"authenmodal.Post")," "),o(2),m(22,l.isloading?22:-1),o(),m(23,l.messgerror?23:-1),o(),m(24,l.messsuccess?24:-1))},dependencies:[D,P,T,M,R,U]})}}return t})();export{X as UploadImageComponent};
