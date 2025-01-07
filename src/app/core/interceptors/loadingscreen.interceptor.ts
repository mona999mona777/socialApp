import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { finalize } from 'rxjs';

export const loadingscreenInterceptor: HttpInterceptorFn = (req, next) => {
  const _NgxSpinnerService=inject(NgxSpinnerService);
  _NgxSpinnerService.show('loadingSec')
  return next(req).pipe(finalize(()=>{
    _NgxSpinnerService.hide('loadingSec');
  }))
};