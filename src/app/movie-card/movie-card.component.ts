import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { HttpResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieViewComponent } from '../movie-view/movie-view.component';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { SynopsisDialogComponent } from '../synopsis-dialog/synopsis-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { response } from 'express';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule, MatFormFieldModule } from '@angular/material';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  movies: any[] = [];
  favorites: { [movieId: string]: boolean } = {};
  searchTerm: string = '';
  toggleSwitchChecked: boolean = false;

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

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

  openMovieView(movie: any): void {
    this.dialog.open(MovieViewComponent, {
      width: '380px',
      data: { movie: movie },
    });
  }

  openGenreDialog(movie: any): void {
    this.fetchApiData.getGenre(movie.Genre.Name).subscribe(
      (result) => {
        this.dialog.open(GenreDialogComponent, {
          width: '380px',
          data: { genre: result },
        });
      },
      (error) => {
        console.error('Error fetching genre', error);
      }
    );
  }

  openDirectorDialog(movie: any): void {
    this.fetchApiData.getDirector(movie.Director.Name).subscribe(
      (result) => {
        this.dialog.open(DirectorDialogComponent, {
          width: '380px',
          data: { director: result },
        });
      },
      (error) => {
        console.error('Error fetching director data', error);
      }
    );
  }

  openSynopsisDialog(movie: any): void {
    this.dialog.open(SynopsisDialogComponent, {
      width: '380px',
      data: { movie: movie },
    });
  }

  // Toggle the favorite state for the given movie card
  toggleFavorite(movieId: string, movieTitle: string): void {
    this.favorites[movieId] = !this.favorites[movieId];
    const action = this.favorites[movieId] ? 'added to' : 'removed from';
    const message = `${movieTitle} ${action} favorites!`;

    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  // Check if the movie card is marked as favorite
  isFavorite(movieId: string): boolean {
    return this.favorites[movieId] || false;
  }

  onSearch(): void {
    this.fetchApiData.getAllMovies().subscribe(
      (response: HttpResponse<any[]>) => {
        if (Array.isArray(response.body)) {
          this.movies = response.body.filter(
            (movie) =>
              movie.Title.toLowerCase().includes(
                this.searchTerm.toLowerCase()
              ) ||
              movie.Director.Name.toLowerCase().includes(
                this.searchTerm.toLowerCase()
              )
          );
        } else {
          console.error('Invalid response format. Expected an array.');
        }
      },
      (error) => {
        console.error('Error fetching movies:', error);
      }
    );
  }

  toggleButton(): { [key: string]: string } {
    // Check the toggle switch state and apply styles accordingly
    if (this.toggleSwitchChecked) {
      return {
        order: '2',
        color: '#4051b5',
        'footer-margin-left': '63vw',
        'footer-border-color': '#f487f9',
      };
    } else {
      return {
        order: 'auto',
        color: '#f487f9',
        'footer-margin-left': '106px',
        'footer-border-color': '#4051b5',
      };
    }
  }

  onToggleSwitchChange(event: Event) {
    this.toggleSwitchChecked = (event.target as HTMLInputElement).checked;
  }
}
