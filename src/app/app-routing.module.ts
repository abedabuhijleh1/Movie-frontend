import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './view/main/main.component';
import {LoginComponent} from './view/auth/login/login.component';
import {AuthGuardService} from './view/services/auth-guard.service';
import {SignUpComponent} from './view/auth/sign-up/sign-up.component';
import {SearchComponent} from './view/search/search.component';
import {MovieRateComponent} from './view/movie-rate/movie-rate.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "signUp",
    component: SignUpComponent
  },
  {
    path: 'search',
    component: SearchComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'movieRate',
    component: MovieRateComponent,
    canActivate: [AuthGuardService]
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
