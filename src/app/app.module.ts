import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ViewModule} from './view/view.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AuthServiceService} from './view/services/auth-service.service';
import {FormsModule} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import {AuthGuardService} from './view/services/auth-guard.service';
import {JwtHelperService, JWT_OPTIONS} from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ViewModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    CookieService,
    AuthGuardService,
    JwtHelperService,
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
