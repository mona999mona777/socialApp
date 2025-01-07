import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly _HttpClient=inject(HttpClient);

  singIn(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}users/signin`,data)
    }

  singUp(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}users/signup`,data)
    }
    // logout() in user commonent

  changePassword(data:object):Observable<any>{
    return this._HttpClient.patch(`${environment.baseUrl}users/change-password`,data)
    }

              //  image===>    {key:value}===>{photo:alimage nafsaha}
  uploadProfilePhoto(image:object):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}users/upload-photo`,image)
    }

   getLoggedUserData():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}users/profile-data`)
    }






}
