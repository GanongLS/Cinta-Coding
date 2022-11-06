import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Post } from './model/post';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  users: BehaviorSubject<User[]> = new BehaviorSubject({} as User[]);
  user: BehaviorSubject<User> = new BehaviorSubject({} as User);
  posts: BehaviorSubject<Post[]> = new BehaviorSubject([] as Post[]);
  post: BehaviorSubject<Post> = new BehaviorSubject({} as Post);

  constructor() {}

  getUserById(userId: number): User {
    // console.log({ userId });
    let _user = this.users.value.filter((u) => {
      return u.id == userId;
    })[0];
    // console.log({ _user });
    return _user;
  }
}
