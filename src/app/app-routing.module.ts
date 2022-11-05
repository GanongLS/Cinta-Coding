import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CintaCodingComponent } from './pages/cinta-coding/cinta-coding.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cinta-coding-page',
    pathMatch: 'full',
  },
  { path: 'cinta-coding-page', component: CintaCodingComponent },
  { path: 'login-page', component: LoginComponent },
  { path: 'dashboard-page', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
