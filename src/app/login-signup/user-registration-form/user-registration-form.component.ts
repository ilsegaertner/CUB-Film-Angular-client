import { Component, OnInit, Input, input, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { UserRegistrationService } from '../../fetch-api-data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCard,
  MatCardHeader,
  MatCardTitle,
  MatCardContent,
  MatCardActions,
} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatButton } from '@angular/material/button';

/**
 * @component UserRegistrationFormComponent
 * @description Component for user registration form.
 * This component handles user registration form inputs and sends them to the backend for registration.
 */
@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.scss',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    FormsModule,
    MatFormField,
    MatInput,
    MatCardActions,
    MatButton,
  ],
})
export class UserRegistrationFormComponent {
  @Input() userRegistrationData = {
    Username: '',
    Password: '',
    Email: '',
    Birthday: '',
  };

  userRegistrationDialogRef:
    | MatDialogRef<UserRegistrationFormComponent>
    | undefined;
  fetchApiData = inject(UserRegistrationService);
  snackBar = inject(MatSnackBar);
  /**
   * Function for sending the form inputs to the backend to create a new user
   * @returns alert indicating a successful registration or an error
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userRegistrationData).subscribe(
      (result) => {
        // Logic for a successful user registration goes here! (to be implemented)
        console.log(result);
        this.userRegistrationDialogRef?.close(); // This will close the modal on success!
        this.snackBar.open('User registration successful', 'OK', {
          duration: 2000,
        });
      },
      (result) => {
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      }
    );
  }
}
