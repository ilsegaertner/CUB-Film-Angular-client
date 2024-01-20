import { Component, OnInit, Input } from '@angular/core';

//You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls I created
import { UserRegistrationService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  // telling Angular that the class below is a component
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrl: './user-registration-form.component.scss',
})
export class UserRegistrationFormComponent implements OnInit {
  // onInit = lifecycle hook which allows you to run some code when the component is  first initialized
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: '' };

  /**
   * Called when creating an instance of the class
   * @param fetchApiData
   * @param dialogRef
   * @param snackBar
   */
  constructor(
    public fetchApiData: UserRegistrationService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {} // This method is called once the component has received all inputs (all its data-bound properties) from the calling component - the real life user

  //This is the function responsible for sending the form inputs to the backend
  /**
   * Function for sending the form inputs to the backend to create a new user
   * @returns alert indicating a successful registration or an error
   */

  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe(
      (result) => {
        // Logic for a successful user registration goes here! (to be implemented)
        console.log(result);
        this.dialogRef.close(); // This will close the modal on success!
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
