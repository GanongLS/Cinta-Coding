import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  user: BehaviorSubject<User> = new BehaviorSubject({} as User);
  constructor() {}
}
