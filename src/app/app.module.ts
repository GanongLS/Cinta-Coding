import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CintaCodingComponent } from './pages/cinta-coding/cinta-coding.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AppComponent, CintaCodingComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
