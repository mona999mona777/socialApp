import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { PostsService } from '../../core/services/posts.service';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IPost } from '../../core/interfaces/post';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { CommentsComponent } from "../../shared/ui/comments/comments.component";
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MytranslateService } from '../../core/services/mytranslate.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { RandomnumberService } from '../../core/services/randomnumber.service';
declare var $:any;

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [RouterLink,DatePipe, CommentsComponent,FormsModule,InfiniteScrollModule,TranslateModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit , OnDestroy{
  private readonly _Router =inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _NgxSpinnerService =inject(NgxSpinnerService);
private readonly _PostsService =inject(PostsService);
private readonly _AuthService =inject(AuthService);
private readonly _MytranslateService=inject(MytranslateService);
readonly _TranslateService=inject(TranslateService);
private readonly _Renderer2=inject(Renderer2);
private readonly _RandomnumberService=inject(RandomnumberService);
id:string|null=localStorage.getItem("userid");
userName!:string
unSubGetAllPosts!:Subscription;
unsublogwtuserdata!:Subscription;
unsubscroll!:Subscription;
unSubCreatePost!:Subscription;
unsubgetUserPosts!:Subscription;
messgerror:string='';
messsuccess:string='';
userPosts:IPost|null=null;
postList:IPost[]=[]; 
postllist:IPost[]=[];
currentPage!:number
current!:number
content:string='';
userPhoto!:string
savedFile:File=new File([],"");
step:string='true';
randomNumber!: number;
ngOnInit(): void {
  if (isPlatformBrowser(this._PLATFORM_ID)) {
    if(localStorage.getItem('lang')==null){
      localStorage.setItem('lang','en')
    }}
// random
this.randomNumber = this._RandomnumberService.generateUniqueRandomNumber(1, 50);
this.currentPage=this.randomNumber+1;
this.current=this.randomNumber+2;
// darkmode
 if (isPlatformBrowser(this._PLATFORM_ID)) {
  if(localStorage.getItem('socialAppDarkMode')!=null){
  this._Renderer2.addClass( document.documentElement,'dark')
  } 
}
//translations
if (isPlatformBrowser(this._PLATFORM_ID)) {
  if(localStorage.getItem('lang')!=null){
    this._MytranslateService.useChoiceLang();
        } 
}
// allposts
this.getallposts();
// loged user data
    this.unsublogwtuserdata=this._AuthService.getLoggedUserData().subscribe({
      next:(res)=>{
        this.userName=res.user.name;
       this.userPhoto =res.user.photo;
     localStorage.setItem("userid",res.user._id)
      },
      error:(err:HttpErrorResponse)=>{
        console.log(err);
      }
  });
}
getUserPosts(){
  this.unsubgetUserPosts=this._PostsService.getUserPosts().subscribe({
    next:(res)=>{
   this.userPosts=res.posts.pop();
    },
    error:(err:HttpErrorResponse)=>{
      console.log("userposts",err);
    }
});
}
getallposts(){
if (isPlatformBrowser(this._PLATFORM_ID)) {
// 1
if(localStorage.getItem('step')==null){
  this._NgxSpinnerService.hide("loadingSec");
  this._NgxSpinnerService.show("loadingOffical");
  if (this.step=='true') {
  this.unSubGetAllPosts=this._PostsService.getAllPosts(this.randomNumber).subscribe({
    next:(res)=>{
   this.postList=res.posts;
  this._NgxSpinnerService.hide("loadingOffical");
  localStorage.setItem("step",'false')
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
});
}
}
//2
if(localStorage.getItem('step')!=null){
  this._NgxSpinnerService.show("loadingSec");
  const step=localStorage.getItem('step')
  if(step=='false'){
          this.unSubGetAllPosts=this._PostsService.getAllPosts(this.randomNumber).subscribe({
            next:(res)=>{
          this.postList=res.posts;
          this._NgxSpinnerService.hide("loadingSsec");
            },
            error:(err:HttpErrorResponse)=>{
              console.log(err);
            }
        });
  }
}}
}
onScrollDown() {
      this.unsubscroll=this._PostsService.getAllPostsWithScrolling(this.currentPage).subscribe({
        next:(res)=>{
            this.postllist=res.posts;
            this.postList=this.postList.concat(this.postllist);
             this.current =res.paginationInfo.nextPage
        },
        error:(err:HttpErrorResponse)=>{
          console.log(err);
        }
    });
    this.currentPage=this.current
}
changefile(e:Event){
  const input =e.target as HTMLInputElement;
 if(input.files && input.files.length>0){
  this.savedFile= input.files[0];
 }
}
@ViewChild('createInput') createInput!:ElementRef;
showcreatemodal(){
  this.messgerror=''
  this.messsuccess='';
  $('body').css("overflow","hidden")
  $('#authentication-modal').show()
  $('#authentication-modal').css("display","flex")
  if(this.createInput.nativeElement.checked==false ){
    this.savedFile=new File([],"")
    }
    this.content=''
}
creatPost(){
  if (this.content.length==0) {
    this.content=" "
  }
  const formData=new FormData();
   formData.set('body',this.content);
   formData.set('image',this.savedFile); 
    this.unSubCreatePost=this._PostsService.createPost(formData).subscribe({
    next:(res)=>{
          if (res.message == "success") {
            this.getUserPosts();
            this.messgerror=''
            this.messsuccess=res.message;
            // this.getallposts(); 
          //  hide modal
          this.hiddencreatemodal();
          }
    },
            error:(err:HttpErrorResponse)=>{
              this.messsuccess=''
              this.messgerror=err.error.error;
              console.log(err);
            }
});
}
hiddencreatemodal(){
  $('#authentication-modal').hide()
  $('body').css("overflow","auto")
  $('#authentication-modal').css("display","hidden")
}
// logout
logout(){
  localStorage.removeItem("socialAppToken");
  localStorage.removeItem("userid");
  localStorage.removeItem("step");
  this.closenavdiv();
  setTimeout(() => {
    this._Router.navigate(['/login']);
    }, 1000);
}
// lightercomp
ischeecked:boolean=false;
theCurentImg:string='';
open(currentImg:string){
     this.ischeecked=true;
     this.theCurentImg= currentImg;
}
close(){
    this.ischeecked=false;
}
@ViewChild('light') lightcomp!:ElementRef
ligthfunc(e:any){
  if(e.target==this.lightcomp.nativeElement){
    this.close()
    }
}
// moode
lightMoode(){
  this._Renderer2.removeClass( document.documentElement ,"dark");
  localStorage.removeItem("socialAppDarkMode");
}
dark(){
  this._Renderer2.addClass( document.documentElement ,"dark");
  localStorage.setItem("socialAppDarkMode",'dark');
}
system(){
  if  ( window.matchMedia('(prefers-color-scheme: dark)').matches){
  this._Renderer2.addClass( document.documentElement ,"dark");
  localStorage.setItem("socialAppDarkMode",'dark');
} else {
  this._Renderer2.removeClass( document.documentElement ,"dark");
  localStorage.removeItem("socialAppDarkMode");
}
}
@ViewChild('dropdownMe') dropdownMe!:ElementRef;
@ViewChild('dropdownMe2') dropdownMe2!:ElementRef;
@ViewChild('doubleDropdown1') doubleDropdown1!:ElementRef;
@ViewChild('doubleDropdown2') doubleDropdown2!:ElementRef;
@ViewChildren('lista') lista!:QueryList<ElementRef>;
display(){
  this.dropdownMe.nativeElement.classList.toggle("hidden");
  this.dropdownMe.nativeElement.classList.toggle("block");
  this.dropdownMe.nativeElement.classList.toggle("absolute");
}
displayNo2(){
  this.dropdownMe2.nativeElement.classList.toggle("hidden");
  this.dropdownMe2.nativeElement.classList.toggle("block");
  this.dropdownMe2.nativeElement.classList.toggle("absolute");
}
back(){
  this.dropdownMe2.nativeElement.classList.toggle("hidden");
  this.dropdownMe2.nativeElement.classList.toggle("block");
  this.dropdownMe2.nativeElement.classList.toggle("absolute");
}
closeDisplay(e:Event){
  const input =e.target as HTMLInputElement;
if(input.classList.contains("lista")==false){
  this.lista.forEach((el)=>{
this._Renderer2.addClass(this.dropdownMe.nativeElement,"hidden");
this._Renderer2.removeClass(this.dropdownMe.nativeElement,"block");
this._Renderer2.removeClass(this.dropdownMe.nativeElement,"absolute");
    // //////////////
this._Renderer2.addClass(this.doubleDropdown1.nativeElement,"hidden");
this._Renderer2.removeClass(this.doubleDropdown1.nativeElement,"block");
this._Renderer2.removeClass(this.doubleDropdown1.nativeElement,"absolute");
    // //////////////////
this._Renderer2.addClass(this.doubleDropdown2.nativeElement,"hidden");
this._Renderer2.removeClass(this.doubleDropdown2.nativeElement,"block");
this._Renderer2.removeClass(this.doubleDropdown2.nativeElement,"absolute");
// ///////////////////////////
this._Renderer2.addClass(this.dropdownMe2.nativeElement,"hidden");
this._Renderer2.removeClass(this.dropdownMe2.nativeElement,"block");
this._Renderer2.removeClass(this.dropdownMe2.nativeElement,"absolute");
  }) 
}
}
display1(){
this.doubleDropdown1.nativeElement.classList.toggle("hidden");
this.doubleDropdown1.nativeElement.classList.toggle("block");
this.doubleDropdown1.nativeElement.classList.toggle("absolute");
    // //////////////////
this._Renderer2.addClass(this.doubleDropdown2.nativeElement,"hidden");
this._Renderer2.removeClass(this.doubleDropdown2.nativeElement,"block");
this._Renderer2.removeClass(this.doubleDropdown2.nativeElement,"absolute");
}
display2(){
this.doubleDropdown2.nativeElement.classList.toggle("hidden");
this.doubleDropdown2.nativeElement.classList.toggle("block");
this.doubleDropdown2.nativeElement.classList.toggle("absolute");
// //////////////////////////////////////
this._Renderer2.addClass(this.doubleDropdown1.nativeElement,"hidden");
this._Renderer2.removeClass(this.doubleDropdown1.nativeElement,"block");
this._Renderer2.removeClass(this.doubleDropdown1.nativeElement,"absolute");
}
lang(type:string){
this._MytranslateService.changeLang(type);
}
showHiddenComment(id:string){
  const element=document.getElementById(id);
  if (element?.classList.contains('hidden')) {
    this._Renderer2.removeClass(element,'hidden')
  }
}
LangText(){
  if (isPlatformBrowser(this._PLATFORM_ID)) {
    if (localStorage.getItem("lang")!=null) {
   if (localStorage.getItem("lang")=='en') {
    return false;
   }
   else if (localStorage.getItem("lang")=='ar') {
    return true;
   }

        } 
        else if (localStorage.getItem("lang")==null) {
           return false;            
               } 
        }
    return false
}
@ViewChild ("navtoogle") navtoogle!:ElementRef
togglevav(){
  if (this.navtoogle.nativeElement.classList.contains('hidden')==false) {
    this._Renderer2.addClass(document.getElementById("navbar-solid-bg"),'hidden')
  }
  else if (this.navtoogle.nativeElement.classList.contains('hidden')==true) {
    this._Renderer2.removeClass(document.getElementById("navbar-solid-bg"),'hidden')
  }
}
closenavdiv(){
  if (this.navtoogle.nativeElement.classList.contains('hidden')==false) {
    this._Renderer2.addClass(document.getElementById("navbar-solid-bg"),'hidden')
  }
}
ngOnDestroy(): void {
this.unSubGetAllPosts?.unsubscribe();
this.unsublogwtuserdata?.unsubscribe();
this.unsubscroll?.unsubscribe();
this.unSubCreatePost?.unsubscribe();
}
}
