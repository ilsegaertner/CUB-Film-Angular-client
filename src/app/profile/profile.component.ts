import { Component, inject, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatFormField } from '@angular/material/form-field';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { ChangeDetectorRef } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardSubtitle,
  MatCardActions,
} from '@angular/material/card';
import { CdkScrollable } from '@angular/cdk/scrolling';
import { FormsModule } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import { DatePipe } from '@angular/common';
import { Movie } from 'app/movie-card/movie-card.component';

interface User {
  Birthday: string;
  Email: string;
  Username: string;
  FavouriteMovies?: Movie['_id'][];
  _id: string;
  createdAt?: string;
  lastLoginAt?: string;
}
interface UserData {
  birthday?: User['Birthday'];
  email?: User['Email'];
  username: User['Username'];
  password?: string;
  favouriteMovies: User['FavouriteMovies'];
}

/**
 * @component UserProfileComponentComponent
 * @description Component for user profile management.
 * This component allows users to view, update, and delete their profile.
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrls: ['./profile.component.scss'],
  imports: [
    NavigationBarComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatCardSubtitle,
    CdkScrollable,
    MatDialogContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
    DatePipe,
  ],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  userData: UserData = {
    username: '',
    email: '',
    birthday: '',
    password: '',
    favouriteMovies: [],
  };
  confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent> | undefined;

  fetchApiData = inject(UserRegistrationService);
  snackBar = inject(MatSnackBar);
  router = inject(Router);
  private dialog = inject(MatDialog);

  ngOnInit(): void {
    this.getUser();
  }

  /**
   * Function to fetch user data from local storage.
   * If user data exists, it populates the component's user property and userData object with initial values.
   * If not, it logs an error.
   */
  getUser(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);

      this.userData.username = this.user!.Username;
      this.userData.password = '';
      this.userData.birthday = this.user?.Birthday;
      this.userData.email = this.user?.Email;
      this.userData.favouriteMovies = this.user?.FavouriteMovies;
    } else {
      console.error('User not found in local storage.');
    }
  }

  /**
   * Function to update user profile.
   * It sends updated user data to the backend for updating the user's profile.
   */
  updateProfile(): void {
    this.fetchApiData
      .editUser(this.user!.Username, {
        Username: this.userData.username,
        Password: this.userData.password,
        Email: this.userData.email,
        Birthday: this.userData.birthday,
      })
      .subscribe(
        (response) => {
          this.user = response.body;

          this.userData.username = response.body.Username;
          this.userData.email = response.body.Email;
          this.userData.birthday = response.body.Birthday;
          this.userData.password = response.body.Password;

          localStorage.setItem('user', JSON.stringify(response.body));
          this.snackBar.open('Profile updated successfully', 'Close', {
            duration: 3000,
          });

          this.user!.Username = response.Username;
          this.user!.Email = response.Email;
          this.user!.Birthday = response.Birthday;
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

  /**
   * Function to delete user profile.
   * It sends a request to the backend to delete the user's profile.
   */
  deleteProfile(): void {
    if (this.user && this.user.Username) {
      this.fetchApiData.deleteUser(this.user.Username).subscribe(
        () => {
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
    }
  }

  /**
   * Function to open a confirmation dialog before deleting the user profile.
   * It opens a confirmation dialog asking the user if they're sure they want to delete their profile.
   * If the user confirms, it calls the deleteProfile function.
   */
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
