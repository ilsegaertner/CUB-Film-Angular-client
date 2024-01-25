import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrl: './director-dialog.component.scss',
})
export class DirectorDialogComponent {
  director: any;

  constructor(
    private dialogRef: MatDialogRef<DirectorDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.director = data.director?.body?.Director || null;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
