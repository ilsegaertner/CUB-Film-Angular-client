import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginFormComponent } from '../login-signup/login-form/login-form.component';
import { UserRegistrationFormComponent } from '../login-signup/user-registration-form/user-registration-form.component';
import { MatButton } from '@angular/material/button';

/**
 * @component WelcomePageComponent
 * @description Component for the welcome page of the application.
 * This component displays options for user registration and login.
 */
@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss',
  standalone: true,
  imports: [MatButton],
})
export class WelcomePageComponent {
  dialog = inject(MatDialog);

  /**
   * @description Open a dialog for user registration.
   * This function is triggered when the signup button is clicked.
   */ openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
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
