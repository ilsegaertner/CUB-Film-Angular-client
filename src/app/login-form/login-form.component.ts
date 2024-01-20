import { Component, OnInit, Input } from '@angular/core';

// Close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { UserRegistrationService } from '../fetch-api-data.service';

// Display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

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
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  //This is the function responsible for sending the form inputs to the backend
  loginUser(): void {
    console.log('Login data:', this.userLoginData);
    this.fetchApiData.userLogin(this.userLoginData).subscribe(
      (result) => {
        console.log('Login success', result);
        localStorage.setItem('user', JSON.stringify(result.user));
        localStorage.setItem('token', result.token);
        //Logic for a successful user login goes here! (to be implemented)
        this.dialogRef.close(); //This will close the modal on success!
        this.snackBar.open(result, 'OK', {
          duration: 2000,
        });
      },

      (error) => {
        console.error('Login Error:', error);
        console.log('Error Body:', error.error);

        let errorMessage = 'An error occurred during login.';

        if (error && error.error && error.error.message) {
          errorMessage = error.error.message;
        }

        this.snackBar.open(errorMessage, 'OK', {
          duration: 2000,
        });
      }
    );
  }

  // public loginUser(): void {
  //   this.fetchApiData.userLogin(this.userLoginData).subscribe(
  //     (result) => {
  //       // Successfully login done
  //       localStorage.setItem('user', JSON.stringify(result.user));
  //       localStorage.setItem('token', result.token);
  //       this.dialogRef.close();
  //       this.snackBar.open('Login successfull!!', 'OK', { duration: 2000 });
  //     },
  //     (response) => {
  //       this.snackBar.open(response, 'OK', { duration: 2000 });
  //     }
  //   );
  // }
}
