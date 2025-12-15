import { Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';

export const routes: Routes = [
  { path: 'welcome', title: 'Welcome', component: WelcomePageComponent },
  { path: 'movies', title: 'Movies', component: MovieCardComponent },
  { path: 'profile', title: 'Profile', component: UserProfileComponentComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];
