import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private readonly _HttpClient=inject(HttpClient);

  // data ==>(image) or (data) or (image and data)
  createPost(data:object):Observable<any>{
    return this._HttpClient.post(`${environment.baseUrl}posts`,data)
    }

  getAllPosts(pagerandom:number):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}posts?page=${pagerandom}`)
    }
    getAllPostsWithScrolling(postpage:number):Observable<any>{
      return this._HttpClient.get(`${environment.baseUrl}posts?page=${postpage}`)
      }
      getAllPostsWithScrollingup(prevpage:number):Observable<any>{
        return this._HttpClient.get(`${environment.baseUrl}posts?page=${prevpage}`)
        }
    // 664bcf3e33da217c4af21f00 =>itsnot id (ده شكل في الكتابه وخلاص وكانه كلمه يعني )
  getUserPosts():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}users/664bcf3e33da217c4af21f00/posts`)
    }


  getSinglePost(postId:string):Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}posts/${postId}`)
    }

  updatePost(updatePostId:any,data:object):Observable<any>{
    return this._HttpClient.put(`${environment.baseUrl}posts/${updatePostId}`,data)
    }

  deletePost(deletePostId:string):Observable<any>{
    return this._HttpClient.delete(`${environment.baseUrl}posts/${deletePostId}`)
    }

}
