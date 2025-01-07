import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
export const blankGuard: CanActivateFn = (route, state) => {
  const _Router=inject(Router);
if(typeof localStorage!=='undefined'){
    // you have token
      if( localStorage.getItem("socialAppToken") !== null){
                  return true;
                  }
      else{
                    // navigate to login
                _Router.navigate(['/login'])
                return false;
                }
}
else{
                   return false;   
    }
};
