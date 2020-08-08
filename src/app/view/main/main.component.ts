import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  response: any;

  constructor(private http: HttpClient, private authService: AuthServiceService) { }

  ngOnInit(): void {
    this.getMovieInformation();
  }

  getMovieInformation() {
    this.http.get("http://localhost:8081/catalog/" + this.authService.getUserIdFromJwt())
      .subscribe((response) => {
        this.response = response;
      });
  }
}
