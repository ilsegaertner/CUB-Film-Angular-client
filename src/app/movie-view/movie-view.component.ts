import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
} from '@angular/material/card';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/**
 * @component MovieViewComponent
 * @description Component for displaying detailed information about a movie.
 * This component is typically used within a dialog to show additional details when a movie is selected.
 */
@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.scss',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
  ],
})
export class MovieViewComponent {
  sanitizer = inject(DomSanitizer);

  videoLoaded = false;

  movieViewDialogRef = inject(MatDialogRef<MovieViewComponent>);
  data = inject(MAT_DIALOG_DATA);

  videoPath = this.data.movie.VideoPath;

  safeSrc: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    this.videoPath
  );

  onVideoLoad(): void {
    this.videoLoaded = true;
  }

  onNoClick(): void {
    this.movieViewDialogRef.close();
    this.videoLoaded = false;
  }
}
