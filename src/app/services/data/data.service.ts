import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  headersObj = {};
  constructor(private http: HttpClient) {}

  getAllUSer() {
    const headerObj = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const options = { headers: headerObj };
    return this.http.get('https://jsonplaceholder.typicode.com/users', options);
  }

  getAllPost() {
    const headerObj = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const options = { headers: headerObj };
    return this.http.get('https://jsonplaceholder.typicode.com/posts', options);
  }

  getAllCommentByPostID(postId: number) {
    const headerObj = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const options = { headers: headerObj };
    return this.http.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      options
    );
  }
}
