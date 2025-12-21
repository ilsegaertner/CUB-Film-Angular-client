import { Component, inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardSubtitle,
} from '@angular/material/card';

/**
 * @component SynopsisDialogComponent
 * @description Component for displaying movie synopsis in a dialog.
 * This component is responsible for displaying the synopsis of a movie in a dialog box.
 */
@Component({
  selector: 'app-synapsis-dialog',
  templateUrl: './synopsis-dialog.component.html',
  styleUrl: './synopsis-dialog.component.scss',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
  ],
})
export class SynopsisDialogComponent {
  dialogRef = inject(MatDialogRef<SynopsisDialogComponent>);
  data = inject(MAT_DIALOG_DATA);

  movie = this.data?.movie ?? null;

  onNoClick(): void {
    this.dialogRef.close();
  }
}
