import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  name: string = 'Luki';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  goToDashboard() {
    this.router.navigateByUrl('/dashboard-page');
  }

  goToProfile() {
    // this.router.navigateByUrl('/login-page');
    console.log('buat halaman profile');
  }
}
