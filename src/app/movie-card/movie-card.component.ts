import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { HttpResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MovieViewComponent } from '../movie-view/movie-view.component';
import { GenreDialogComponent } from '../genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from '../director-dialog/director-dialog.component';
import { SynopsisDialogComponent } from '../synopsis-dialog/synopsis-dialog.component';

import { response } from 'express';
// import { FormsModule } from '@angular/forms';
// import { MatInputModule, MatFormFieldModule } from '@angular/material';

/**
 * @component MovieCardComponent
 * @description Component for displaying movie cards.
 * This component retrieves movie data from the backend and provides functionality to open dialogs for detailed movie information.
 */
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

  /**
   * Constructor for MovieCardComponent.
   * @constructor
   * @param {UserRegistrationService} fetchApiData - Service for fetching movie data from the backend.
   * @param {MatDialog} dialog - Angular Material dialog service for opening dialogs.
   * @param {MatSnackBar} snackBar - Angular Material snack bar service for displaying notifications.
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    //After implementing the function getMovies(), it's then called in the ngOnInit() lifecycle hook. ngOnInit() is called when Angular is done creating the component.
    this.getMovies();
  }

  /**
   * Fetches all movies from the backend.
   */
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

  /**
   * Opens a dialog to display detailed information about a movie.
   * @param {any} movie - The selected movie.
   */
  openMovieView(movie: any): void {
    this.dialog.open(MovieViewComponent, {
      width: '380px',
      data: { movie: movie },
    });
  }

  /**
   * Opens a dialog to display information about the genre of a movie.
   * @param {any} movie - The movie object containing genre information.
   */
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

  /**
   * Opens a dialog to display information about the director of a movie.
   * @param {any} movie - The movie object containing director information.
   */
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

  /**
   * Opens a dialog to display the synopsis of a movie.
   * @param {any} movie - The movie object containing synopsis information.
   */
  openSynopsisDialog(movie: any): void {
    this.dialog.open(SynopsisDialogComponent, {
      width: '380px',
      data: { movie: movie },
    });
  }

  /**
   * Toggles the favorite state for the given movie card.
   * @param {string} movieId - The ID of the movie card.
   * @param {string} movieTitle - The title of the movie card.
   */
  toggleFavorite(movieId: string, movieTitle: string): void {
    this.favorites[movieId] = !this.favorites[movieId];
    const action = this.favorites[movieId] ? 'added to' : 'removed from';
    const message = `${movieTitle} ${action} favorites!`;

    this.snackBar.open(message, 'Close', {
      duration: 2000,
    });
  }

  /**
   * Checks if the movie card is marked as favorite.
   * @param {string} movieId - The ID of the movie card.
   * @returns {boolean} - Indicates whether the movie card is marked as favorite.
   */
  isFavorite(movieId: string): boolean {
    return this.favorites[movieId] || false;
  }

  /**
   * Performs a search based on the entered search term.
   * Updates the movie list to display only movies matching the search term.
   */
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

  /**
   * Determines the styles for the toggle button based on its state.
   * @returns {Object} - An object containing CSS properties for styling the toggle button.
   */
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

  /**
   * Handles the change event of the toggle switch.
   * @param {Event} event - The change event.
   */
  onToggleSwitchChange(event: Event) {
    this.toggleSwitchChecked = (event.target as HTMLInputElement).checked;
  }
}
