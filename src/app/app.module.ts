import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { UsersService } from './shared/services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './shared/services/auth.service';
import {AuthGuard} from './shared/services/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ UsersService, AuthService, AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
