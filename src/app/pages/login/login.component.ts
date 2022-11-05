import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  onLogin() {
    console.log({ username: this.username });
    this.dataService.getAllUSer(this.username).subscribe({
      next: (r) => {
        console.log({ r });
      },
    });
  }
}
