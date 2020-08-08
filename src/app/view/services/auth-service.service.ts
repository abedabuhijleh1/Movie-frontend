import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthServiceService {

  err: boolean = false;

  constructor(private http: HttpClient, private cookieService: CookieService, public jwtHelper: JwtHelperService) {
  }

  authenticate(credentials, callback) {
    this.http.post('http://localhost:8080/authenticate',
      {username:credentials.username, password:credentials.password})
      .subscribe(response => {
      this.cookieService.set( 'jwtToken', response['jwt'] );
      this.err = false;
      return callback && callback();
    },
    error => {
      this.err = true;
    });
  }

  register(credentials, callback) {
    this.http.post('http://localhost:8080/register',
      {username:credentials.username, password:credentials.password})
      .subscribe(response => {
          this.cookieService.set( 'jwtToken', response['jwt'] );
          this.err = false;
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
        this.err = false;
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

  public getUserIdFromJwt(){
    const jwtToken = this.cookieService.get('jwtToken');
    let jwtData = jwtToken.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    return decodedJwtData.jti;
  }

}
