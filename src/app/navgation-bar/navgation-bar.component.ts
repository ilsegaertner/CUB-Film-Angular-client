import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navgation-bar',
  templateUrl: './navgation-bar.component.html',
  styleUrl: './navgation-bar.component.scss',
})
export class NavgationBarComponent {
  constructor(private router: Router) {}

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/welcome']);
  }
}
