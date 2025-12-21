import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: 'welcome', title: 'Welcome', component: WelcomePageComponent },
  { path: 'movies', title: 'Movies', component: MovieCardComponent },
  {
    path: 'profile',
    title: 'Profile',
    component: ProfileComponent,
  },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];
