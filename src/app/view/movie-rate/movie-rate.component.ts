import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthServiceService} from '../services/auth-service.service';

@Component({
  selector: 'app-movie-rate',
  templateUrl: './movie-rate.component.html',
  styleUrls: ['./movie-rate.component.css']
})

export class MovieRateComponent implements OnInit {

  response : any;
  movieRate: string;

  constructor(private http: HttpClient,
              private route: ActivatedRoute, private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
    this.getMovieInformation();
  }

  getMovieInformation() {
    this.http.get("http://localhost:8083/movie/" + this.route.snapshot.queryParamMap.get("id"))
      .subscribe((response) => {
        this.response = response;
      });
  }
  submitRate(){
    this.submitRateAndRedirect(() => {
      this.router.navigateByUrl('/');
    });
  }

  submitRateAndRedirect(callback){
    this.http.post('http://localhost:8082/userRatings/rateMovie',
    {userId:this.authService.getUserIdFromJwt(), movieId:this.route.snapshot.queryParamMap.get("id"), rate:this.movieRate})
    .subscribe(response => {
        return callback && callback();
      },
      error => {
      //todo check why returning error!
      });
    return callback && callback();
  }
}
