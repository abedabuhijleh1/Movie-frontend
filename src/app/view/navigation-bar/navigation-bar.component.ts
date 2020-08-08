import {Component, Input, OnInit} from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input("pageTitle")
  pageTitle: string;

  constructor(private app: AuthServiceService, private http: HttpClient, private router: Router,
              private cookieService: CookieService) {
  }

  logout() {
      this.cookieService.delete('jwtToken');
      this.router.navigateByUrl('/login');
  }


  ngOnInit(): void {
  }

  authenticated() {
    return this.cookieService.get("jwtToken") != '';
  }
}
