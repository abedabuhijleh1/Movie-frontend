import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {FormsModule} from '@angular/forms';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AppRoutingModule} from '../app-routing.module';
import { LoginComponent } from './auth/login/login.component';



@NgModule({
  declarations: [
    MainComponent,
    NavigationBarComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatToolbarModule,
    AppRoutingModule
  ],
  exports: [
    MainComponent
  ]
})
export class ViewModule { }
