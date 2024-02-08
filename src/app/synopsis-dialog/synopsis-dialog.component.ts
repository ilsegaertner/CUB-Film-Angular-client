import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * @component SynopsisDialogComponent
 * @description Component for displaying movie synopsis in a dialog.
 * This component is responsible for displaying the synopsis of a movie in a dialog box.
 */
@Component({
  selector: 'app-synapsis-dialog',
  templateUrl: './synopsis-dialog.component.html',
  styleUrl: './synopsis-dialog.component.scss',
})
export class SynopsisDialogComponent {
  movie: any;

  /**
   * Constructor for SynopsisDialogComponent.
   * @constructor
   * @param {MatDialogRef<SynopsisDialogComponent>} dialogRef - Reference to the dialog instance.
   * @param {any} data - Data passed to the dialog.
   */
  constructor(
    public dialogRef: MatDialogRef<SynopsisDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.movie = data.movie || null;
  }

  /**
   * Function to handle closing the dialog.
   * It closes the dialog when called.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
