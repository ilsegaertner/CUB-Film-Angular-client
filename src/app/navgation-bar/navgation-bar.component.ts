import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

/**
 * @component NavgationBarComponent
 * @description Component for the navigation bar.
 * This component provides navigation functionality and includes a logout feature.
 */
@Component({
  selector: 'app-navgation-bar',
  templateUrl: './navgation-bar.component.html',
  styleUrl: './navgation-bar.component.scss',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    RouterLink,
    RouterLinkActive,
    MatTabsModule,
  ],
})
export class NavgationBarComponent {
  private readonly router = inject(Router);
  dialog = inject(MatDialog);
  // confirmationDialogRef = inject(MatDialogRef<ConfirmationDialogComponent>);
  // confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent>
  /**
   * Function to handle user logout.
   * It removes the authentication token from local storage and navigates the user back to the welcome page.
   */
  logout(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to logout?',
      },
    });

    dialogRef.afterClosed().subscribe((confirmed: boolean | undefined) => {
      if (confirmed) {
        localStorage.removeItem('token');
        this.router.navigate(['/welcome']);
      }
    });
  }
}
