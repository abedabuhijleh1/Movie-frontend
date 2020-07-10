import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  response: any;
  movieId: string;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  getMovieInformation() {
    this.http.get("http://localhost:8081/catalog/1")
      .subscribe((response) => {
        this.response = response;
      });
  }
}
