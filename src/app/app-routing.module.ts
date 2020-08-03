import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './view/main/main.component';
import {LoginComponent} from './view/auth/login/login.component';
import {AuthGuardService} from './view/services/auth-guard.service';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: '**',
    component: MainComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
