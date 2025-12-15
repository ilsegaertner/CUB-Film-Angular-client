import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardSubtitle,
  MatCardContent,
} from '@angular/material/card';

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
  /**
   * Constructor for MovieViewComponent.
   * @constructor
   * @param {MatDialogRef<MovieViewComponent>} dialogRef - Reference to the dialog component.
   * @param {any} data - Data passed to the dialog component.
   */
  constructor(
    public dialogRef: MatDialogRef<MovieViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any //  initializes the data property with the data passed to the dialog
  ) {
    console.log('Received data in MovieViewComponent:', data);
  }

  /**
   * Function to handle the click event when the user closes the dialog.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
