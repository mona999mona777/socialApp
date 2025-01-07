import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild, input } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,RouterLink,TranslateModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit ,OnDestroy {
private readonly _AuthService=inject(AuthService)
private readonly _FormBuilder=inject(FormBuilder)
private readonly _Router=inject(Router)
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _MytranslateService=inject(MytranslateService);
private readonly _Renderer2=inject(Renderer2);
 messgerror:string=''
 messsuccess:string=''
 isloading:boolean=false
 unsub!:Subscription
 icon!:string
login:FormGroup=this._FormBuilder.group({
      email:[null,[Validators.required, Validators.email]],
      password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
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
loginfunction(){
    if(this.login.valid){
      this.isloading=true
        this.unsub=this._AuthService.singIn(this.login.value).subscribe({
                  next:(res)=>{
                    this.messsuccess=res.message; 
                    this.messgerror=""
                 this.isloading=false
                   //1. save token
                   localStorage.setItem("socialAppToken",res.token);
                 if(res.message == "success"){
                setTimeout(() => {
                  this._Router.navigate(['/Timeline']);
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
      this.login.markAllAsTouched();
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
  localStorage.setItem("icona",'fa-eye');
 }
 else if (this.passIcon.nativeElement.classList.contains("fa-eye")==true) {
  this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
  localStorage.setItem("icona",'fa-eye-slash');
 }
}
inputfunc(e:Event){
  const input =e.target as HTMLInputElement;
  if(input.value.length==0){
    this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye-slash');
    this._Renderer2.removeClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');

  }
  if(input.value.length>0){
    if (isPlatformBrowser(this._PLATFORM_ID)) {
 if(localStorage.getItem('icona')!=null){
  this.icon= localStorage.getItem("icona")!;
  if (this.icon=='fa-eye') {
    this._Renderer2.addClass(document.getElementById("pass"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','password');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','text');

  }
  if (this.icon=='fa-eye-slash') {
    this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
  }
}
if (localStorage.getItem('icona')==null) {
this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
    }
  }
  }
}
ngOnDestroy(): void {
      this.unsub?.unsubscribe()
}
}
