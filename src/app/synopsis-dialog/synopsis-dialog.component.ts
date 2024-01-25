import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-synapsis-dialog',
  templateUrl: './synopsis-dialog.component.html',
  styleUrl: './synopsis-dialog.component.scss',
})
export class SynopsisDialogComponent {
  movie: any;
  constructor(
    public dialogRef: MatDialogRef<SynopsisDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.movie = data.movie || null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
