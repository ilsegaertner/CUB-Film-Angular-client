import { Component, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';

/**
 * @component DirectorDialogComponent
 * @description Component for displaying director details in a dialog.
 * This component receives director data and displays it in a dialog.
 */
@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrl: './director-dialog.component.scss',
})
export class DirectorDialogComponent {
  director: any;

  /**
   * Constructor for DirectorDialogComponent.
   * @constructor
   * @param {MatDialogRef<DirectorDialogComponent>} dialogRef - Reference to the Material dialog for the director dialog.
   * @param {MatDialog} dialog - Reference to the Material dialog service for opening dialogs.
   * @param {any} data - Data passed to the dialog, containing director information.
   */
  constructor(
    private dialogRef: MatDialogRef<DirectorDialogComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.director = data.director?.body?.Director || null;
  }

  /**
   * Function to handle closing the dialog.
   * This function is called when the user clicks outside the dialog or on the cancel button.
   */
  onNoClick(): void {
    this.dialogRef.close();
  }
}
