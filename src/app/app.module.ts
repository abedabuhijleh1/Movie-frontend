import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ViewModule} from './view/view.module';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {AuthServiceService} from './view/services/auth-service.service';
import {FormsModule} from '@angular/forms';

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
  providers: [AuthServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
