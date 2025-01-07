import { Component, inject, OnDestroy, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';
@Component({
  selector: 'app-upload-image',
  standalone: true,
  imports: [ FormsModule,TranslateModule],
  templateUrl: './upload-image.component.html',
  styleUrl: './upload-image.component.scss'
})
export class UploadImageComponent implements OnInit, OnDestroy{
private readonly _AuthService=inject(AuthService);
private readonly _Router=inject(Router);
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _MytranslateService=inject(MytranslateService);
private readonly _Renderer2=inject(Renderer2);
 messgerror:string=''
 messsuccess:string=''
 isloading:boolean=false
unsubUserImage!:Subscription;
savedImage!:File;
changeImage(e:Event){
    const image =e.target as HTMLInputElement;
   if(image.files && image.files.length>0){
    this.savedImage= image.files[0];
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
addUserImage(){
    const imageData=new FormData();
    imageData.append('photo',this.savedImage);
   if (this.savedImage){
    this.isloading=true;
    this.unsubUserImage=this._AuthService.uploadProfilePhoto(imageData).subscribe({
      next:(res)=>{
     if (res.message== 'success') {
      this.isloading=false;
      this.messsuccess=res.message;
      this.messgerror="";
      setTimeout(() => {
        this._Router.navigate(['/user']);
        }, 1000);
     }
      },
      error:(err:HttpErrorResponse)=>{
        this.isloading=false;
        console.log(err);
        if (err.message=="Http failure response for https://linked-posts.routemisr.com/users/upload-photo: 0 undefined") {
        this.messgerror="Sorry, Not Support This Type Of Image";
        this.messsuccess="";
        }
        else{
        this.messgerror=err.error.error;
        this.messsuccess="";
        }
        }   
  });
   }
}
ngOnDestroy(): void {
    this.unsubUserImage?.unsubscribe();
}
}
