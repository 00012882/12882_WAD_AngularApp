import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Blog } from './Blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  httpClient=inject(HttpClient);

  constructor() { }

  getAll(){
    return this.httpClient.get<Blog[]>("http://localhost:5084/api/Posts/GetPosts");
  };

  getById(id:number){
    return this.httpClient.get<Blog>("http://localhost:5084/api/Posts/GetPost/"+id);
  };

  edit(item:Blog){
    return this.httpClient.put("http://localhost:5084/api/Posts/PutPost", item);
  };

  delete(id:number){
    return this.httpClient.delete("http://localhost:5084/api/Posts/DeletePost"+id);
  };

  create(item:Blog){
    return this.httpClient.post("http://localhost:5084/api/Posts/PostPost", item);
  };

  getAllUsers(){
    return this.httpClient.get("http://localhost:5084/api/Users/GetUsers");
  };
}
