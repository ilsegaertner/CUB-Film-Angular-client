import { Component, inject, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { HttpResponse } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MovieViewComponent } from '../movie-view/movie-view.component';
import { GenreDialogComponent } from './genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from './director-dialog/director-dialog.component';
import { SynopsisDialogComponent } from './synopsis-dialog/synopsis-dialog.component';

import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { NgStyle, NgClass } from '@angular/common';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel, MatInput } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardActions,
} from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

interface Genre {
  // id?
  Description: string;
  Name: string;
}
interface Director {
  // id?
  Name: string;
  Bio: string;
  Birth: string;
  Movies: string[]; //improve
}

export interface Movie {
  _id: string;
  Year: string;
  Title: string;
  ImagePath: string;
  Genre: Genre;
  Featured: boolean;
  Director: Director;
  Description: string;
  Actors: string[];
}

/**
 * @component MovieCardComponent
 * @description Component for displaying movie cards.
 * This component retrieves movie data from the backend and provides functionality to open dialogs for detailed movie information.
 */
@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgStyle,
    NgClass,
    MatFormField,
    MatLabel,
    MatInput,
    FormsModule,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardActions,
    MatButton,
    MatIcon,
  ],
})
export class MovieCardComponent implements OnInit {
  movies: Movie[] = [];
  favorites: { [movieId: string]: boolean } = {};
  searchTerm: string = '';
  toggleSwitchChecked: boolean = false;

  fetchApiData = inject(UserRegistrationService);
  dialog = inject(MatDialog);
  snackBar = inject(MatSnackBar);

  ngOnInit(): void {
    this.getMovies();
  }

  /**
   * Fetches all movies from the backend.
   */
  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe(
      (response: HttpResponse<any[]>) => {
        console.log('response', response);
        // Check if the response body is an array
        if (Array.isArray(response.body)) {
          console.log('movie response body:', response.body);
          this.movies = response.body;
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
   * Opens a dialog to display detailed information about a movie.
   * @param {Movie} movie - The selected movie.
   */
  openMovieView(movie: Movie): void {
    this.dialog.open(MovieViewComponent, {
      width: '40rem',
      data: { movie: movie },
    });
  }

  /**
   * Opens a dialog to display information about the genre of a movie.
   * @param {Movie} movie - The movie object containing genre information.
   */
  openGenreDialog(movie: Movie): void {
    this.fetchApiData.getGenre(movie.Genre.Name).subscribe(
      (result) => {
        this.dialog.open(GenreDialogComponent, {
          width: '40rem',
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
   * @param {Movie} movie - The movie object containing director information.
   */
  openDirectorDialog(movie: Movie): void {
    this.fetchApiData.getDirector(movie.Director.Name).subscribe(
      (result) => {
        this.dialog.open(DirectorDialogComponent, {
          width: '40rem',
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
   * @param {Movie} movie - The movie object containing synopsis information.
   */
  openSynopsisDialog(movie: Movie): void {
    this.dialog.open(SynopsisDialogComponent, {
      width: '40rem',
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
  isFavorite(movieId: Movie['_id']): boolean {
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
