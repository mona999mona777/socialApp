import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private readonly _HttpClient=inject(HttpClient);

  createComment(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}comments`,data)
    }
  getPostComment(postId:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}posts/${postId}/comments`)
    }
  updateComment(commentId:string,data:object):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}comments/${commentId}`,data)
    }
  deleteComment(deleteCommentId:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}comments/${deleteCommentId}`)
    }
  
}
