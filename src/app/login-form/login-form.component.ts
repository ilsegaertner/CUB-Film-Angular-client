import { Component, OnInit, Input } from '@angular/core';

// Close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

// Display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  // <-- tells Angular that this is a component
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent implements OnInit {
  @Input() userLoginData = { Username: '', Password: '' };

  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<LoginFormComponent>,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  //This is the function responsible for sending the form inputs to the backend

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
