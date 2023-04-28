import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//const endpoint = 'https://jsonplaceholder.typicode.com/posts';

const endpoint = 'http://localhost:8080/api/v1/getPost';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  getAllPosts() {
    return this.http.get(endpoint);
  }
}
