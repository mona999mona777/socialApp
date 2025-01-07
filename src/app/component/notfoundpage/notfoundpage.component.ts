import { isPlatformBrowser, Location } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MytranslateService } from '../../core/services/mytranslate.service';

@Component({
  selector: 'app-notfoundpage',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './notfoundpage.component.html',
  styleUrl: './notfoundpage.component.scss'
})
export class NotfoundpageComponent implements OnInit{
  private readonly _PLATFORM_ID=inject(PLATFORM_ID);
 private readonly  _Location=inject(Location);
 private readonly _MytranslateService=inject(MytranslateService);
 private readonly _Renderer2=inject(Renderer2);
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
back(){
  this._Location.back();
}
}