import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card.component';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardSubtitle,
} from '@angular/material/card';

/**
 * @component GenreDialogComponent
 * @description Component for displaying genre details in a dialog.
 * This component receives genre data and displays it in a dialog.
 */
@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrl: './genre-dialog.component.scss',
  standalone: true,

  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
  ],
})
export class GenreDialogComponent {
  genre: any;

  /**
   * Constructor for GenreDialogComponent.
   * @constructor
   * @param {MatDialogRef<GenreDialogComponent>} dialogRef - Reference to the Material dialog for the genre dialog.
   * @param {any} data - Data passed to the dialog, containing genre information.
   */
  constructor(
    public dialogRef: MatDialogRef<GenreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    console.log('Received data in GenreDialogComponent:', data);
    // Extract the genre from the response body
    this.genre = data.genre?.body?.Genre || null;
  }

  /**
   * Function to handle closing the dialog.
   * This function is called when the user clicks outside the dialog or on the cancel button.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
