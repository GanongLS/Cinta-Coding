import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  headersObj = {};
  constructor(private http: HttpClient) {}

  getAllUSer(username: string) {
    const headerObj = { 'Content-Type': 'application/x-www-form-urlencoded' };
    const options = { headers: headerObj };
    return this.http.get('https://jsonplaceholder.typicode.com/users', options);
  }
}
