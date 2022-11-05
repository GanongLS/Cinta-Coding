import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './model/post';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  user: BehaviorSubject<User> = new BehaviorSubject({} as User);
  posts: BehaviorSubject<Post[]> = new BehaviorSubject([] as Post[]);
  constructor() {}
}
