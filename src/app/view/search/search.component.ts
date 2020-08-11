import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchQuery: string;
  response: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  search() {
    this.http.get("http://localhost:8083/movie/search/" + this.searchQuery)
      .subscribe((response) => {
        this.response = response;
      });
  }
}
