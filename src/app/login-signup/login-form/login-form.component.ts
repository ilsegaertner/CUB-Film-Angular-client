import { Component, Input, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { UserRegistrationService } from '../../fetch-api-data.service';
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
import { LoginUserData } from './models';

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
export class LoginFormComponent {
  @Input() userLoginData: LoginUserData = { Username: '', Password: '' };

  fetchApiData = inject(UserRegistrationService);
  dialogRef = inject(MatDialogRef<LoginFormComponent>);
  snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);

  public loginUser(): void {
    this.fetchApiData.userLogin(this.userLoginData).subscribe(
      (result) => {
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
