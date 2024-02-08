import { Component } from '@angular/core';
import { Router } from '@angular/router';

/**
 * @component NavgationBarComponent
 * @description Component for the navigation bar.
 * This component provides navigation functionality and includes a logout feature.
 */
@Component({
  selector: 'app-navgation-bar',
  templateUrl: './navgation-bar.component.html',
  styleUrl: './navgation-bar.component.scss',
})
export class NavgationBarComponent {
  /**
   * Constructor for NavgationBarComponent.
   * @constructor
   * @param {Router} router - Angular router service.
   */
  constructor(private router: Router) {}

  /**
   * Function to handle user logout.
   * It removes the authentication token from local storage and navigates the user back to the welcome page.
   */
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/welcome']);
  }
}
