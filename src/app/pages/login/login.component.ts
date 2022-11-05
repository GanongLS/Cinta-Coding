import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'lodash';
import { DataService } from 'src/app/services/data/data.service';
import { User, UserList } from 'src/app/services/state/model/user';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  constructor(
    private dataService: DataService,
    private router: Router,
    private state: StateService
  ) {}

  ngOnInit(): void {}

  onLogin() {
    console.log({ username: this.username });
    this.dataService.getAllUSer().subscribe({
      next: (r) => {
        // console.log({ r });
        let userList: User[] = r as User[];
        console.log({ userList });

        let user: User = userList.filter((u) => {
          return u.username == this.username;
        })[0];
        if (!isEmpty(user)) {
          this.goToDashboard();
          this.state.user.next(user);
        }
      },
    });
  }

  goToDashboard() {
    this.router.navigateByUrl('/dashboard-page');
  }
}
