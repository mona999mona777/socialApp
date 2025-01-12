import { Component, ElementRef, inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { isPlatformBrowser, NgClass } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,NgClass,TranslateModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit, OnDestroy {
 private readonly _AuthService=inject(AuthService);
 private readonly _FormBuilder=inject(FormBuilder);
 private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _MytranslateService=inject(MytranslateService);
private readonly _Renderer2=inject(Renderer2);
 messgerror:string='';
 messsuccess:string='';
 icon:string='';
 icon2:string='';
 isloading:boolean=false;
 unsub!:Subscription;
register:FormGroup=this._FormBuilder.group({
name:[null,[Validators.required, Validators.minLength(2),Validators.maxLength(30)]],
email:[null,[Validators.required, Validators.email]],
password:[null,[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)]],
rePassword:[null],
dateOfBirth:[null,[Validators.required]],
gender:[null,[Validators.required]],

},{validators:this.repassword});
repassword(g:AbstractControl){
  if(g.get('password')?.value===g.get('rePassword')?.value){
  return null
  }
  else{
    return {mismatch:true}
  }
}
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
registerfunction(){
    if(this.register.valid){
      this.isloading=true
        this.unsub=    this._AuthService.singUp(this.register.value).subscribe({
                  next:(res)=>{
                    this.messsuccess=res.message; 
                    this.messgerror=""
                 this.isloading=false
                 if(res.message == "success"){
                setTimeout(() => {
                  this._Router.navigate(['/login']);
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
     this.register.setErrors({mismatch:true})
      this.register.markAllAsTouched();
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
 if(localStorage.getItem('icona3')!=null){
  this.icon= localStorage.getItem("icona3")!;
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
if (localStorage.getItem('icona3')==null) {
this._Renderer2.addClass(document.getElementById("pass"),'fa-eye-slash');
this._Renderer2.removeAttribute(this.inputpassword.nativeElement,'type','text');
this._Renderer2.setAttribute(this.inputpassword.nativeElement,'type','password');
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
  localStorage.setItem("icona2",'fa-eye');
 }
 else if (this.passIcon2.nativeElement.classList.contains("fa-eye")==true) {
  this._Renderer2.removeClass(document.getElementById("pass2"),'fa-eye');
  this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');
  localStorage.setItem("icona2",'fa-eye-slash');
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
 if(localStorage.getItem('icona2')!=null){
  this.icon2= localStorage.getItem("icona2")!;
  if (this.icon2=='fa-eye') {
    this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','password');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','text');

  }
  if (this.icon2=='fa-eye-slash') {
    this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye-slash');
  this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
  this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');
  }
}
if (localStorage.getItem('icona2')==null) {
this._Renderer2.addClass(document.getElementById("pass2"),'fa-eye-slash');
this._Renderer2.removeAttribute(this.inputpassword2.nativeElement,'type','text');
this._Renderer2.setAttribute(this.inputpassword2.nativeElement,'type','password');
    }
  }
}
}
ngOnDestroy(): void {
      this.unsub?.unsubscribe();
  }
}
