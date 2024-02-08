import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-form/login-form.component';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';

/**
 * @component WelcomePageComponent
 * @description Component for the welcome page of the application.
 * This component displays options for user registration and login.
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
})
export class WelcomePageComponent implements OnInit {
  /**
   * Constructor for WelcomePageComponent.
   * @constructor
   * @param {MatDialog} dialog - Angular Material dialog service.
   */
  constructor(public dialog: MatDialog) {} // passing the Material dialog in the constructor as an argument so that it's available for use in this component

  /**
   * @description Angular lifecycle hook called after component initialization.
   */
  ngOnInit(): void {}

  /**
   * @description Open a dialog for user registration.
   * This function is triggered when the signup button is clicked.
   */ openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      // Assigning the dialog width
      width: '280px',
    });
  }

  /**
   * @description Open a dialog for user login.
   */
  openLoginDialog(): void {
    this.dialog.open(LoginFormComponent, {
      width: '280px',
    });
  }
}
