import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cinta-coding',
  templateUrl: './cinta-coding.component.html',
  styleUrls: ['./cinta-coding.component.scss'],
})
export class CintaCodingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToCintaCoding() {
    this.router.navigateByUrl('/cinta-coding-page');
  }

  goToLogin() {
    this.router.navigateByUrl('/login-page');
  }
}
