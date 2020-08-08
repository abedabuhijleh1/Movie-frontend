import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthServiceService} from '../../services/auth-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  credentials = {username: '', password: ''};

  constructor(private app: AuthServiceService, private http: HttpClient, private router: Router,private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  authenticated() {
    return this.cookieService.get("jwtToken") != '';
  }

  register() {
    this.app.register(this.credentials, () => {
      this.router.navigateByUrl('/');
    });
    return false;
  }

  err(){
    return this.app.err;
  }
}
