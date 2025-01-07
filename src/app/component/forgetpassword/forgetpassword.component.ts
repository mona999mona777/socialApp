import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports:[ ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.scss'
})
export class ForgetpasswordComponent implements OnInit, OnDestroy {
  private readonly _AuthService=inject(AuthService);
  private readonly _FormBuilder=inject(FormBuilder);
  private readonly _Router=inject(Router);
   private readonly _PLATFORM_ID=inject(PLATFORM_ID);
   private readonly _MytranslateService=inject(MytranslateService);
   private readonly _Renderer2=inject(Renderer2);
  messgerror:string=''
  messsuccess:string=''
  isloading:boolean=false
  icon3:string='';
  icon4:string='';
  unsub!:Subscription
 changePassForm:FormGroup=this._FormBuilder.group({
  password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
  newPassword:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
 });
ngOnInit(): void {
  if (isPlatformBrowser(this._PLATFORM_ID)) {
          if(localStorage.getItem('socialAppDarkMode')!=null){
            this._Renderer2.addClass( document.documentElement,'dark')
          } 
    }
         //  translation
         if (isPlatformBrowser(this._PLATFORM_ID)) {
          if(localStorage.getItem('lang')!=null){
            this._MytranslateService.useChoiceLang();
                } 
      }
}
changePassFormFunc(){
     if(this.changePassForm.valid){
       this.isloading=true
         this.unsub=this._AuthService.changePassword(this.changePassForm.value).subscribe({
                   next:(res)=>{
                    this.isloading=false;
                     if (res.message =="success") {
                      this.messsuccess=res.message; 
                     this.messgerror=""
                  //1. save token
                  localStorage.setItem("socialAppToken",res.token);
                  setTimeout(() => {
                    this._Router.navigate(['/user']);
                    }, 1000);
                     }
                   },
                   error:(err:HttpErrorResponse)=>{
                     console.log(err);
                     this.isloading=false
                     this.messgerror=err.error.error;
                     this.messsuccess="";
                   }
             });
     }
     else{
       this.changePassForm.markAllAsTouched();
     }
}
@ViewChild('inputPassword') inputpassword!:ElementRef;
@ViewChild('passIcon') passIcon!:ElementRef;
showPassword(){
 if (this.passIcon.nativeElement.classList.contains("fa-eye-slash")==true) {
  this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye-slash');
  this._Renderer2.addClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','password');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','text');
  localStorage.setItem("icona3",'fa-eye');
 }
 else if (this.passIcon.nativeElement.classList.contains("fa-eye")==true) {
  this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
  localStorage.setItem("icona3",'fa-eye-slash');
 }
}
inputfunc(e:Event){
  const input =e.target as HTMLInputElement;
  if(input.value.length==0){
    this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye-slash');
    this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
  }
  if(input.value.length>0){
    if (isPlatformBrowser(this._PLATFORM_ID)) {

 if(localStorage.getItem('icona3')!=null){
  this.icon3= localStorage.getItem("icona3")!;
  if (this.icon3=='fa-eye') {
    this._Renderer2.addClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','password');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','text');

  }
  if (this.icon3=='fa-eye-slash') {
    this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
  }
}
if (localStorage.getItem('icona3')==null) {
this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
    }
  }
  }
}
@ViewChild('inputPassword2') inputpassword2!:ElementRef;
@ViewChild('passIcon2') passIcon2!:ElementRef;
showPassword2(){
 if (this.passIcon2.nativeElement.classList.contains("fa-eye-slash")==true) {
  this._Renderer2.removeClass(document.getElementById("pass2"),'fa-eye-slash');
  this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','password');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','text');
  localStorage.setItem("icona4",'fa-eye');
 }
 else if (this.passIcon2.nativeElement.classList.contains("fa-eye")==true) {
  this._Renderer2.removeClass(document.getElementById("pass2"),'fa-eye');
  this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');
  localStorage.setItem("icona4",'fa-eye-slash');
 }
}
inputfunc2(e:Event){
  const input =e.target as HTMLInputElement;
  if(input.value.length==0){
    this._Renderer2.removeClass(document.getElementById("pass2"),'fa-eye-slash');
    this._Renderer2.removeClass(document.getElementById("pass2"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');

  }
  if(input.value.length>0){
    if (isPlatformBrowser(this._PLATFORM_ID)) {
 if(localStorage.getItem('icona4')!=null){
  this.icon4= localStorage.getItem("icona4")!;
  if (this.icon4=='fa-eye') {
    this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','password');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','text');

  }
  if (this.icon4=='fa-eye-slash') {
    this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');
  }
}
if (localStorage.getItem('icona4')==null) {
this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye-slash');
this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');
    }
  }
  }
}
ngOnDestroy(): void {
       this.unsub?.unsubscribe()
}
 }
 