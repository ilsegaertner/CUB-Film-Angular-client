import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrl: './genre-dialog.component.scss',
})
export class GenreDialogComponent {
  genre: any;

  constructor(
    public dialogRef: MatDialogRef<GenreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Received data in GenreDialogComponent:', data);
    // Extract the genre from the response body
    this.genre = data.genre?.body?.Genre || null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
