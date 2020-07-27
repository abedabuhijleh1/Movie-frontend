import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthServiceService {

  authenticated = false;
  err: boolean = false;

  constructor(private http: HttpClient) {
  }

  authenticate(credentials, callback) {

    const headers = new HttpHeaders(credentials ? {
      Authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});
    this.http.get('http://localhost:8080/user/authorize', {headers: headers})
      .subscribe(response => {
      this.authenticated = !!response['name'];
      return callback && callback();
    },
    error => {
      this.err = true;
    });

  }

}
