import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(public fetchApiData: UserRegistrationService) {}

  ngOnInit(): void {
    //After implementing the function getMovies(), it's then called in the ngOnInit() lifecycle hook. ngOnInit() is called when Angular is done creating the component.
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe(
      (response: HttpResponse<any[]>) => {
        // Check if the response body is an array
        if (Array.isArray(response.body)) {
          this.movies = response.body;
          console.log(this.movies);
        } else {
          console.error('Invalid response format. Expected an array.');
        }
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
    //   return this.movies;
    // });
  }
}
