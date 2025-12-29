import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardSubtitle,
} from '@angular/material/card';
import { Genre } from './models';

/**
 * @component GenreDialogComponent
 * @description Component for displaying genre details in a dialog.
 * This component receives genre data and displays it in a dialog.
 */
@Component({
  selector: 'app-genre-dialog',
  templateUrl: './genre-dialog.component.html',
  styleUrl: './genre-dialog.component.scss',
  standalone: true,

  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
  ],
})
export class GenreDialogComponent {
  genreDialogRef = inject(MatDialogRef<GenreDialogComponent>);
  data = inject(MAT_DIALOG_DATA);

  genre: Genre = this.data.genre?.body?.Genre || null;

  onNoClick(): void {
    this.genreDialogRef?.close();
  }
}
