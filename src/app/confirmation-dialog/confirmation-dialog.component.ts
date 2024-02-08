import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

/**
 * @component ConfirmationDialogComponent
 * @description Component for displaying a confirmation dialog.
 * This component is used to display a dialog with a confirmation message.
 */
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
})
export class ConfirmationDialogComponent {
  /**
   * Constructor for ConfirmationDialogComponent.
   * @constructor
   * @param {MatDialogRef<ConfirmationDialogComponent>} dialogRef - Reference to the Material dialog for the confirmation dialog.
   * @param {any} data - Data passed to the dialog, containing the confirmation message.
   */
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
