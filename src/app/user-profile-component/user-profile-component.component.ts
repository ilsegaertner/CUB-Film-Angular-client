import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-profile-component',
  templateUrl: './user-profile-component.component.html',
  styleUrls: ['./user-profile-component.component.scss'],
})
export class UserProfileComponentComponent implements OnInit {
  user: any;
  userData: any = {}; // Initialize userData object to store form values
  confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent> | undefined;

  constructor(
    public fetchApiData: UserRegistrationService,
    private snackBar: MatSnackBar,
    private router: Router,
    private dialog: MatDialog,
    private cdRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getUser();
    console.log('Initial user:', this.user);
  }

  getUser(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      // Set initial values for form fields
      this.userData.username = this.user.Username;
      this.userData.password = ''; // Set default password value if needed
      this.userData.birthday = this.user.Birthday;
      this.userData.email = this.user.Email;
    } else {
      console.error('User not found in local storage.');
    }
  }

  updateProfile(): void {
    console.log('Before profile update:', this.user);

    // Call service method to update user data
    this.fetchApiData
      .editUser(
        this.user.Username,
        {
          Username: this.userData.username,
          Password: this.userData.password,
          Email: this.userData.email,
          Birthday: this.userData.birthday,
        }

        // this.userData
      )
      .subscribe(
        (response) => {
          // Handle successful update
          console.log('Profile updated successfully:', response);
          // Optionally, update the local user object in case of changes

          this.user = response.body;

          this.userData.username = response.body.Username;
          this.userData.email = response.body.Email;
          this.userData.birthday = response.body.Birthday;
          this.userData.password = response.body.Password;
          localStorage.setItem('user', JSON.stringify(response.body));
          this.snackBar.open('Profile updated successfully', 'Close', {
            duration: 3000,
          });

          this.user.Username = response.Username;
          this.user.Email = response.Email;
          this.user.Birthday = response.Birthday;

          this.cdRef.detectChanges();

          console.log('After profile update:', this.user);
        },
        (error) => {
          console.error('Error updating profile:', error);
          this.snackBar.open(
            'Error updating profile. Please try again.',
            'Close',
            {
              duration: 3000,
            }
          );
        }
      );
  }

  deleteProfile(): void {
    if (this.user && this.user.Username) {
      this.fetchApiData.deleteUser(this.user.Username).subscribe(
        (response) => {
          console.log('Delete response:', response);
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          this.router.navigate(['/welcome']);
        },
        (error) => {
          console.error('Error deleting user', error);
          this.snackBar.open(
            'Error deleting user. Please try again.',
            'Close',
            {
              duration: 3000,
            }
          );
        }
      );
    } else {
      console.error('User or username is not defined.');
      // Handle the case where user or username is not defined
    }
  }

  openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to delete your profile?',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        if (result) {
          this.deleteProfile();
        } else {
          console.log('Deletion canceled by the user');
        }
      } else {
        console.warn('Dialog closed without a result');
      }
    });
  }
}
