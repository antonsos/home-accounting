import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AuthModule} from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import {UsersServices} from './shared/services/users.services';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ UsersServices, AuthService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
