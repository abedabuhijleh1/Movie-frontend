import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {AuthServiceService} from './auth-service.service';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthServiceService, private router: Router) { }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
