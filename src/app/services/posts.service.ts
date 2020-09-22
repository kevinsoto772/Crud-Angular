import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}
  getPosts() {
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
  updatePosts(dato: number) {
    return this.http.put(`https://jsonplaceholder.typicode.com/posts/${dato}`, {
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1
    });
  }
  deletePosts(dato: number) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${dato}`);
  }
}
