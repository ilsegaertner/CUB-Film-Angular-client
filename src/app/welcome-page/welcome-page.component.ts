import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent implements OnInit {
  constructor(public dialog: MatDialog) {} // passing the Material dialog in the constructor as an argument so that it's available for use in this component

  ngOnInit(): void {}

  // This is the function that will open the dialog when the signup button is clicked
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assigning the dialog width
      width: '280px',
    });
  }

  openLoginDialog(): void {
    this.dialog.open(LoginFormComponent, {
      width: '280px',
    });
  }
}
