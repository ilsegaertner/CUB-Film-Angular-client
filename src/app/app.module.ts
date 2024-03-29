// Angular imports
import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Angular Material imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

// Application-specific imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationService } from './fetch-api-data.service';
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { UserProfileComponentComponent } from './user-profile-component/user-profile-component.component';
import { NavgationBarComponent } from './navgation-bar/navgation-bar.component';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { GenreDialogComponent } from './genre-dialog/genre-dialog.component';
import { DirectorDialogComponent } from './director-dialog/director-dialog.component';
import { SynopsisDialogComponent } from './synopsis-dialog/synopsis-dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';

const appRoutes: Routes = [
  { path: 'welcome', title: 'Welcome', component: WelcomePageComponent },
  { path: 'movies', title: 'Movies', component: MovieCardComponent },
  {
    path: 'profile',
    title: 'Profile',
    component: UserProfileComponentComponent,
  },
  { path: '', redirectTo: 'welcome', pathMatch: 'prefix' },
];

/**
 * @module AppModule
 * @description Root module of the Angular application.
 */
@NgModule({
  declarations: [
    /** @component AppComponent */
    AppComponent,

    /** @component UserRegistrationFormComponent */
    UserRegistrationFormComponent,

    /** @component LoginFormComponent */
    LoginFormComponent,

    /** @component MovieCardComponent */
    MovieCardComponent,

    /** @component WelcomePageComponent */
    WelcomePageComponent,

    /** @component UserProfileComponentComponent */
    UserProfileComponentComponent,

    /** @component NavgationBarComponent */
    NavgationBarComponent,

    /** @component MovieViewComponent */
    MovieViewComponent,

    /** @component GenreDialogComponent */
    GenreDialogComponent,

    /** @component DirectorDialogComponent */
    DirectorDialogComponent,

    /** @component SynopsisDialogComponent */
    SynopsisDialogComponent,

    /** @component ConfirmationDialogComponent */
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSnackBarModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    MatToolbar,
    MatToolbarRow,
    MatFormField,
  ],
  providers: [provideClientHydration(), UserRegistrationService],
  bootstrap: [AppComponent],
})
export class AppModule {}
