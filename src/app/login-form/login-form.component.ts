import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserRegistrationService } from '../fetch-api-data.service';
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
 * @component LoginFormComponent
 * @description Component for the login form.
 * This component handles user login and displays login form.
 */
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
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
export class LoginFormComponent implements OnInit {
  @Input() userLoginData = { Username: '', Password: '' };

  /**
   * Constructor for LoginFormComponent.
   * @constructor
   * @param {UserRegistrationService} fetchApiData - Service for user registration API calls.
   * @param {MatDialogRef<LoginFormComponent>} dialogRef - Reference to the Material dialog for the login form.
   * @param {MatSnackBar} snackBar - Material snack bar service for displaying notifications.
   * @param {Router} router - Router service for navigation.
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  /**
   * Angular lifecycle hook called after component initialization.
   */
  ngOnInit(): void {}

  /**
   * Function responsible for sending the form inputs to the backend for user login.
   * This function is triggered when the user submits the login form.
   */
  public loginUser(): void {
    this.fetchApiData.userLogin(this.userLoginData).subscribe(
      (result) => {
        // Successfully login done
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.token);
        this.dialogRef.close();
        this.snackBar.open('Login successfull!!', 'OK', { duration: 2000 });
        this.router.navigate(['movies']);
      },
      (result) => {
        this.snackBar.open('User login failed', 'OK', { duration: 2000 });
      }
    );
  }
}
