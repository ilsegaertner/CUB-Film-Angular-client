import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrl: './movie-view.component.scss',
})
export class MovieViewComponent {
  constructor(
    public dialogRef: MatDialogRef<MovieViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any //  initializes the data property with the data passed to the dialog
  ) {
    console.log('Received data in MovieViewComponent:', data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
