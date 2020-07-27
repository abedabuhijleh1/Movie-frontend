import {Component, Input, OnInit} from '@angular/core';
import {AuthServiceService} from '../services/auth-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { finalize } from "rxjs/operators";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  @Input("pageTitle")
  pageTitle: string;

  constructor(private app: AuthServiceService, private http: HttpClient, private router: Router) {
  }

  logout() {
    this.http.post('logout', {}).pipe(
      finalize(() => {
      this.app.authenticated = false;
      this.router.navigateByUrl('/login');
    })).subscribe();
  }


  ngOnInit(): void {
  }

  authenticated() {
    return this.app.authenticated;
  }
}
