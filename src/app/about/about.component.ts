import { Component } from '@angular/core';
import { NavigationBarComponent } from 'app/navigation-bar/navigation-bar.component';

@Component({
  selector: 'app-about',
  imports: [NavigationBarComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {}
