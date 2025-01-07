import { Component, ElementRef, inject, Input, OnDestroy, OnInit, PLATFORM_ID, QueryList, Renderer2, viewChildren, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe, isPlatformBrowser } from '@angular/common';
import { CommentsService } from '../../../core/services/comments.service';
import { Icomment } from '../../../core/interfaces/icomment';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../../core/services/mytranslate.service';
@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [DatePipe,ReactiveFormsModule,FormsModule,TranslateModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
//post.user._id
export class CommentsComponent implements OnInit , OnDestroy{
@Input({required:true}) postId!:string;
id:string|null=localStorage.getItem('userid');
private readonly _CommentsService =inject(CommentsService);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _MytranslateService=inject(MytranslateService);
private readonly _Renderer2=inject(Renderer2);
unsubgetPostComment!:Subscription;
unsubCreatComment!:Subscription;
unsubDeleteComment!:Subscription;
unsubUpdateComment!:Subscription;
messageerror:boolean=false;
messageerr2:string='true';
newestWord:boolean=false;
thePostid!:string;
commentList:Icomment[]=[];
commentGroup!:FormGroup;
updateCommentGroup:FormGroup=new FormGroup({
id:new FormControl(null) ,
contentUpdate:new FormControl(null),
})
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
// creat comment form
this.commentGroup=new FormGroup({
        content:new FormControl(null),
        post:new FormControl(this.postId)  
})
// api getPostComment()
this.getPostComment();
}
getPostComment():void{
  this.unsubgetPostComment=this._CommentsService.getPostComment(this.postId).subscribe({
    next:(res)=>{
this.thePostid=this.postId;
  this.commentList=res.comments;
  if(res.total>0){
this.newestWord=true;
  }
  if(res.total<=0){
    this.newestWord=false;
      }
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
});
}
createComment(): void{
  this.unsubCreatComment=this._CommentsService.createComment(this.commentGroup.value).subscribe({
    next:(res)=>{
      this.commentList=res.comments;      // .reverse()
      this.newestWord=true;
      this.commentGroup.get('content')?.reset();
                 },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
                  }
          });
}
deleteComment(id:string):void{
  this.unsubDeleteComment=this._CommentsService.deleteComment(id).subscribe({
    next:(res)=>{
     if(res.message=="success"){
      this.getPostComment();
      this.commentGroup.get('content')?.reset();
     }
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
      if(err.error.message=="you are not allowed to perform this action."){
        this.messageerror=true
      }
    }
});
}
closeerrormessg(){
    this.messageerror=false;
}
updateComment(updatecomment:Icomment){
  const addform=document.getElementById('addform')
  const updateform=document.getElementById('updateform')
  this._Renderer2.removeClass(addform,"flex")
  this._Renderer2.addClass(addform,"hidden")
  this._Renderer2.removeClass(updateform,"hidden")
  this._Renderer2.addClass(updateform,"flex")
this.updateCommentGroup.get('contentUpdate')?.setValue(updatecomment.content)
this.updateCommentGroup.get("id")?.setValue(updatecomment.id)
}
UpdateComponentFun(){
const {id, contentUpdate}=this.updateCommentGroup.value
  this.unsubDeleteComment=this._CommentsService.updateComment(id ,{'content':contentUpdate}).subscribe({
    next:(res)=>{
 if (res.message== 'success') {
  // api getPostComment()
  this.getPostComment();
  this.updateCommentGroup.get('contentUpdate')?.reset();
  const addform=document.getElementById('addform')
  const updateform=document.getElementById('updateform')
  this._Renderer2.addClass(addform,"flex")
  this._Renderer2.removeClass(addform,"hidden")
  this._Renderer2.addClass(updateform,"hidden")
  this._Renderer2.removeClass(updateform,"flex")
 }
    },
    error:(err:HttpErrorResponse)=>{
      console.log(err);
    }
});
}
thehidden(theCommentId:string){
  const item= document.getElementById(theCommentId)
  this._Renderer2.removeClass(item,"hidden");
  this._Renderer2.addClass(item,"absolute");}
@ViewChildren('theComment') theComment!:QueryList<ElementRef>;
closehidden(e:Event){
  const input =e.target as HTMLInputElement;
  if (input.classList.contains("fa-ellipsis")==false) {
    this.theComment.forEach((iteam)=>{
      iteam.nativeElement.classList.add("hidden")
  })
  }
}
dots(e:Event ,coomentId:string){
    const input =e.target as HTMLInputElement;
    if(input.classList.contains('fa-ellipsis')==true){
      this.theComment.forEach((item)=>{
    if(item.nativeElement.id!=coomentId){
      item.nativeElement.classList.add('hidden')
    
    }})
    }
}
@ViewChildren('Commentspage') Commentspage!:QueryList<ElementRef>;
closeComment(postid:string){
this.Commentspage.forEach((el)=>{
if (el.nativeElement.id==postid&&el.nativeElement.classList.contains('commentpage')) {
this._Renderer2.addClass(el.nativeElement,"hidden")
}
})
}
ngOnDestroy(): void {
      this.unsubCreatComment?.unsubscribe();
      this.unsubgetPostComment?.unsubscribe();
      this.unsubDeleteComment?.unsubscribe();
      this.unsubUpdateComment?.unsubscribe();
}
  }
  