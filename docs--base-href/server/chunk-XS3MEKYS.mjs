import './polyfills.server.mjs';
import{p as e}from"./chunk-ZWOSWUCK.mjs";import{a as n}from"./chunk-Y55FHL77.mjs";import{O as i,U as o}from"./chunk-EGVBZG6N.mjs";var u=(()=>{class s{constructor(){this._HttpClient=o(n)}createPost(t){return this._HttpClient.post(`${e.baseUrl}posts`,t)}getAllPosts(t){return this._HttpClient.get(`${e.baseUrl}posts?page=${t}`)}getAllPostsWithScrolling(t){return this._HttpClient.get(`${e.baseUrl}posts?page=${t}`)}getAllPostsWithScrollingup(t){return this._HttpClient.get(`${e.baseUrl}posts?page=${t}`)}getUserPosts(){return this._HttpClient.get(`${e.baseUrl}users/664bcf3e33da217c4af21f00/posts`)}getSinglePost(t){return this._HttpClient.get(`${e.baseUrl}posts/${t}`)}updatePost(t,r){return this._HttpClient.put(`${e.baseUrl}posts/${t}`,r)}deletePost(t){return this._HttpClient.delete(`${e.baseUrl}posts/${t}`)}static{this.\u0275fac=function(r){return new(r||s)}}static{this.\u0275prov=i({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{u as a};
