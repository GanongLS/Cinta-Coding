import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CintaCodingComponent } from './pages/cinta-coding/cinta-coding.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cinta-coding-page',
    pathMatch: 'full',
  },
  { path: 'cinta-coding-page', component: CintaCodingComponent },
  { path: 'login-page', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
