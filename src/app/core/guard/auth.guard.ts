import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);
if(typeof localStorage!=='undefined'){
    // you havenot token
      if( localStorage.getItem("socialAppToken") == null){
                  return true;
                  }
      else{
                    // navigate to Timeline
                _Router.navigate(['/Timeline'])
                return false;

                }
}
else{
                   return false;   
    }
}
