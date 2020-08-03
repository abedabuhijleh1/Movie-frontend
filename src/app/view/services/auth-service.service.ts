import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthServiceService {

  authenticated = false;
  err: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService, public jwtHelper: JwtHelperService) {
  }

  authenticate(credentials, callback) {
    this.http.post('http://localhost:8080/authenticate',
      {username:credentials.username, password:credentials.password})
      .subscribe(response => {
      this.authenticated = !!response['jwt'];
      this.cookieService.set( 'jwtToken', response['jwt'] );
      return callback && callback();
    },
    error => {
      this.err = true;
    });
  }

  public validJWT(token: string) {
    const headers = new HttpHeaders({
      "Authorization" : 'Bearer ' + token,
      "Content-type":" application/text"
    });
    return this.http.get("http://localhost:8080/validJwt", {headers: headers})
      .subscribe(
      response => {
        return response["message"] == "yes";
        },
      error => {
        return false;
      }
    );
  }

  public isAuthenticated(): boolean {
    const token = this.cookieService.get('jwtToken');
    if(token != "") {
      if(this.validJWT(token)){
        return true;
      }
    }
    return false;
  }

}
