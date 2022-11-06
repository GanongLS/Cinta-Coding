import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { faArrowAltCircleLeft } from '@fortawesome/free-regular-svg-icons';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';
import { User } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  arrowLeft = faArrowAltCircleLeft;
  @Output() hide = new EventEmitter();
  subUser: Subscription = {} as Subscription;
  constructor(private state: StateService, private dataService: DataService) {}
  user: User = {} as User;

  user_display: Pair[] = [];

  ngOnInit(): void {
    this.stateSubscribe();
  }

  stateSubscribe() {
    this.subUser = this.state.user.subscribe({
      next: (u) => {
        console.log({ u });
        this.user = u;

        let _user: Pair[] = [
          { title: 'Name', value: u.name },
          { title: 'Username', value: u.username },
          { title: 'Email', value: u.email },
          {
            title: 'Addres',
            value:
              'Suite ' +
              u.address.suite +
              ', ' +
              'Street ' +
              u.address.street +
              ', ' +
              'City ' +
              u.address.city +
              ', ' +
              u.address.zipcode,
          },
          { title: 'Phone', value: u.phone },
        ];

        this.user_display = _user;
      },
    });
  }

  stateUnsubscribe() {
    this.subUser.unsubscribe();
  }

  ngOnDestroy(): void {
    this.stateUnsubscribe();
  }

  backToDashboard(e: any) {
    this.hide.emit(e);
  }
}

export interface Pair {
  title: string;
  value: string;
}
