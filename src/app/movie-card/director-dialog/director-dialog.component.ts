import { Component, inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardSubtitle,
} from '@angular/material/card';
import { Director } from './models';

/**
 * @component DirectorDialogComponent
 * @description Component for displaying director details in a dialog.
 * This component receives director data and displays it in a dialog.
 */
@Component({
  selector: 'app-director-dialog',
  templateUrl: './director-dialog.component.html',
  styleUrl: './director-dialog.component.scss',
  standalone: true,

  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
  ],
})
export class DirectorDialogComponent {
  data = inject(MAT_DIALOG_DATA);
  director: Director = this.data.director?.body?.Director || null;

  dialog = inject(MatDialog);
  directorDialogRef = inject(MatDialogRef<DirectorDialogComponent>);

  /**
   * Function to handle closing the dialog.
   * This function is called when the user clicks outside the dialog or on the cancel button.
   */
  onNoClick(): void {
    this.directorDialogRef?.close();
  }
}
