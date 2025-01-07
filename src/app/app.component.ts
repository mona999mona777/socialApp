import { isPlatformBrowser } from '@angular/common';
import { FlowbiteService } from './core/services/flowbite.service';
import { Component, inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerComponent } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
private readonly _PLATFORM_ID=inject(PLATFORM_ID);
private readonly _Renderer2=inject(Renderer2);
constructor(private FlowbiteService: FlowbiteService) {}
ngOnInit(): void {
    this.FlowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
}
darkmode(){
if (isPlatformBrowser(this._PLATFORM_ID)) {
      if(localStorage.getItem('socialAppDarkMode')!=null){
              return true;
        } 
        
      if(localStorage.getItem('socialAppDarkMode')==null){
            return false;
        } 
}
        return false; 
}

}