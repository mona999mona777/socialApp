import { IPost } from './../../core/interfaces/post';
import { Component, ElementRef, inject, input, OnDestroy, OnInit, PLATFORM_ID, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { PostsService } from '../../core/services/posts.service';
import {IUserData } from '../../core/interfaces/user';
import { CommentsComponent } from "../../shared/ui/comments/comments.component";
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
declare var $:any;
@Component({
  selector: 'app-user-data',
  standalone: true,
  imports: [RouterLink, RouterLinkActive,FormsModule, CommentsComponent, DatePipe,TranslateModule],
  templateUrl: './user-data.component.html',
  styleUrl: './user-data.component.scss'
})
export class UserDataComponent implements OnInit,  OnDestroy {
private readonly _AuthService=inject(AuthService);
private readonly _PostsService=inject(PostsService);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _MytranslateService=inject(MytranslateService);
private readonly _Renderer2=inject(Renderer2);
userPosts:IPost[]=[];
getLoggedUserData!:Subscription;
unsubgetUserPosts!:Subscription;
unsubDeletePost!:Subscription;
unsubUpdatePost!:Subscription;
unSubCreatePost!:Subscription;
messgerror:string='';
messsuccess:string='';
userdata!:IUserData;
// update post
contentUpdate:string='';
postid!:string;
// create post
savedFile!:File
savedFoleSize!:number
// savedFile:File=new File([],"");
content:string='';
ngOnInit(): void {
// mode
if (isPlatformBrowser(this._PLATFORM_ID)) {
          if(localStorage.getItem('socialAppDarkMode')!=null){
            this._Renderer2.addClass( document.documentElement ,"dark");
          } 
}  
//  translation
if (isPlatformBrowser(this._PLATFORM_ID)) {
      if(localStorage.getItem('lang')!=null){
        this._MytranslateService.useChoiceLang();
            } 
}
//user data
this.getLoggedUserData=this._AuthService.getLoggedUserData().subscribe({
                   next:(res)=>{
                  this.userdata=res.user;
                   },
                   error:(err:HttpErrorResponse)=>{
                     console.log('userData',err);
                   }
});
// user posts
this.getUserPosts();
}
getUserPosts(){
  this.unsubgetUserPosts=this._PostsService.getUserPosts().subscribe({
    next:(res)=>{
   this.userPosts=res.posts.reverse();
    },
    error:(err:HttpErrorResponse)=>{
      console.log("userposts",err);
    }
});
}
// create post 
changefile(e:Event){
  const input =e.target as HTMLInputElement;
 if(input.files && input.files.length>0){
  this.savedFile= input.files[0]; 
}
}
@ViewChild('textareaa') textareaa!:ElementRef;
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
const  formCreateData=new FormData();
formCreateData.set('body',this.content);
formCreateData.set('image',this.savedFile); 
   this.unSubCreatePost=this._PostsService.createPost(formCreateData).subscribe({
    next:(res)=>{
          if (res.message == "success") {
            this.messgerror=''
            this.messsuccess=res.message;
            this.content=''
            this.getUserPosts();
            // hidemodal
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
// delete post 
deletePost(post_id:string){
  this.unsubDeletePost=this._PostsService.deletePost(post_id).subscribe({
    next:(res)=>{
   if (res. message=="success") {
    this.getUserPosts();
   }
    },
    error:(err:HttpErrorResponse)=>{
      console.log("deletePOST",err);
    }
});
}
// update post 
@ViewChild('input') theInput!:ElementRef;
@ViewChild('textareaupdate') textareaupdate!:ElementRef;
updateData(post:IPost){
   this.messgerror=''
   this.messsuccess='';
 // show modal 
  $('body').css("overflow","hidden")
  $('#default-modal').show()
  $('#default-modal').css("display","flex")
if(this.theInput.nativeElement.checked==false ){
this.savedFile=new File([],"")
}
  this.postid=post._id;
 if(post.body.valueOf()==' '&& post.body.length==1){
  this.contentUpdate=''
 }
 else{
  this.contentUpdate=post.body;
 }
}
// update api (api ,form send to api )
 updatepost(){
if(this.contentUpdate.length==0){
  this.contentUpdate=" "
}
const  formDataupdate=new FormData();
formDataupdate.set('body',this.contentUpdate);
formDataupdate.set('image',this.savedFile);
formDataupdate.set('id',this.postid);
const id=formDataupdate.get('id');
this.unsubUpdatePost=this._PostsService.updatePost(id ,formDataupdate).subscribe({
    next:(res)=>{
   if (res.message=="success") {
    this.messgerror=''
    this.messsuccess=res.message;
    this.contentUpdate=''
    this.getUserPosts();
    // hide modal
   this.hidedefultmodal()
   }
    },
    error:(err:HttpErrorResponse)=>{
      this.messsuccess=''
      this.messgerror=err.error.error;
      console.log("updatePost",err);
    }
});
 }
//after success hide update modal
 hidedefultmodal(){
  $('#default-modal').hide()
  $('body').css("overflow","auto")
  $('#default-modal').css("display","hidden")
 }
//logout
logout(){
localStorage.removeItem("socialAppToken");
localStorage.removeItem("userid");
localStorage.removeItem("step");
setTimeout(() => {
  this._Router.navigate(['/login']);
  }, 1000);
}
// show box of 2button(update , delete )
thehidden(thepostid:string){
  const el=document.getElementById(thepostid);
  this._Renderer2.removeClass(el,"hidden");
  this._Renderer2.addClass(el,"absolute");
  this._Renderer2.addClass(el,"top-0");
  this._Renderer2.addClass(el,"right-0");
}
@ViewChildren('commentLista') commentLista!:QueryList<ElementRef>;
closehidden(e:Event){
const input =e.target as HTMLInputElement;
if (input.classList.contains("fa-ellipsis")==false) {
this.commentLista.forEach((item)=>{
  this._Renderer2.addClass(item.nativeElement,'hidden')
})
}
}
dots(e:Event ,postId:string){
const input =e.target as HTMLInputElement;
if(input.classList.contains('fa-ellipsis')==true){
  this.commentLista.forEach((item)=>{
if(item.nativeElement.id!=postId){
  if (item.nativeElement.classList.contains('hidden')==false) {
    this._Renderer2.addClass(item.nativeElement,'hidden')
  }}})
}
}
showHiddenComment(Id:string){
  const elements=document.querySelectorAll(".commentpage");
  elements.forEach((el)=>{
if (el.id==Id) {
this._Renderer2.removeClass(el,"hidden");
}
  })
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
ligthfunc(e:Event){
   if(e.target==this.lightcomp.nativeElement){
    this.close()
    }
}
ngOnDestroy(): void {
       this.getLoggedUserData?.unsubscribe();
       this.unsubgetUserPosts?.unsubscribe();
       this.unsubUpdatePost?.unsubscribe();
       this.unsubDeletePost?.unsubscribe();
}
 }
