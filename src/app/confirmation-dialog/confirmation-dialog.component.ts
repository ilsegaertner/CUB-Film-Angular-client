import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { MatButton } from '@angular/material/button';

/**
 * @component ConfirmationDialogComponent
 * @description Component for displaying a confirmation dialog.
 * This component is used to display a dialog with a confirmation message.
 */
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss'],
  standalone: true,

  imports: [
    MatDialogTitle,
    CdkScrollable,
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
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
