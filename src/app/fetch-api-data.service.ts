import { Injectable } from '@angular/core';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

//Api source
const apiUrl = 'https://cub-film-data-dc72bcc7ff05.herokuapp.com/';

/**
 * Service for user registration operations.
 * @injectable
 */
@Injectable({
  //injectable decorator. A decorator is a function that augments a piece of code - usually another function or a class
  providedIn: 'root',
})
export class UserRegistrationService {
  // Dependency Injection: Inject the HttpClient module to the constructor params
  /**
   * Constructor for UserRegistrationService.
   * @constructor
   * @param {HttpClient} http - Angular's HttpClient module for making HTTP requests.
   */
  constructor(
    private http: HttpClient // This will provide HttpClient to the entire class, making it available via this.http
  ) {}

  /**
   * @description Handle HTTP errors and log them.
   * @param {HttpErrorResponse} error - HTTP error response.
   * @returns {Observable<never>} - Error details.
   * @private
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, Error body is: ${JSON.stringify(
          error.error
        )}`
      );

      const contentType = error.headers.get('content-type')?.toLowerCase();

      if (contentType && contentType.includes('json')) {
        try {
          // If the content type is JSON, parse the error body
          console.error('Full error details:', JSON.parse(error.error));
        } catch (jsonError) {
          console.error('Error parsing JSON:', jsonError);
        }
      } else {
        // If the content type is not JSON, handle it differently
        console.error('Non-JSON response. Details:', error.error);
      }
    }

    return throwError('Something bad happened; please try again later.');
  }

  /**
   * @description Extract non-typed response data from the API response.
   * @param {HttpResponse<any>} res - API response.
   * @returns {any} - Extracted response data.
   * @private
   */
  private extractResponseData(res: HttpResponse<any>): any {
    const body = res;
    return body || {};
  }

  /**
   * @description Make an API call for user registration.
   * @param {any} userDetails - User details for registration.
   * @returns {Observable<any>} - Observable for the API response.
   */
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError)); // The .pipe() function (from RxJS) is used to combine multiple functions into a single function.
  }

  /**
   * @description Make an API call to retrieve all movies.
   * @returns {Observable<any>} - Observable for the API response containing all movies.
   */
  public getAllMovies(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call for user login.
   * @param {any} userDetails - User details for login.
   * @returns {Observable<string>} - Observable for the API response containing the user token.
   */
  userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    const queryParams = `?Username=${userDetails.Username}&Password=${userDetails.Password}`;
    const headers = new HttpHeaders({
      'Content-Type': 'x-www-form-urlencoded',
    });
    return this.http
      .post(apiUrl + 'login' + queryParams, null, {
        headers,
      })
      .pipe(catchError(this.handleError));
  }

  /**
   * @description Make an API call to retrieve a single movie.
   * @param {string} title - title of the movie to be retrieved.
   * @returns {Observable<any>} - Observable for the API response containing the requested movie.
   */
  getMovie(title: string): Observable<any> {
    // adding the public keyword is optional. they are public by default
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/' + title, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to retrieve a director by name.
   * @param {string} name - Name of the director to be retrieved.
   * @returns {Observable<any>} - Observable for the API response containing the requested director.
   */
  getDirector(name: string): Observable<any> {
    // adding the public keyword is optional. they are public by default
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/' + 'director/' + name, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to retrieve a genre by name.
   * @param {string} name - Name of the genre to be retrieved.
   * @returns {Observable<any>} - Observable for the API response containing the requested genre.
   */
  getGenre(name: string): Observable<any> {
    // adding the public keyword is optional. they are public by default
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'movies/' + 'genre/' + name, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to retrieve a user by username.
   * @param {string} username - Name of the user to be retrieved.
   * @returns {Observable<any>} - Observable for the API response containing the requested genre.
   */
  getUser(username: string): Observable<any> {
    // adding the public keyword is optional. they are public by default
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get(apiUrl + 'users/' + encodeURIComponent(username), {
        headers: headers,
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.body === null) {
            console.log('Server returned null response.');
          }
          return response.body;
        }),
        // response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to get all favourite movies of a user.
   * @param {string} Username - Name of the user.
   * @returns {Observable<any>} - Observable for the API response.
   */
  getFavouriteMovies(Username: string): Observable<any> {
    // adding the public keyword is optional. they are public by default
    const token = localStorage.getItem('token');
    return this.http
      .get(apiUrl + 'users/' + Username + '/movies', {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to add a favorite movie for a user.
   * @param {string} Username - Name of the user.
   * @param {string} movieID - ID of the movie to be added to favorites.
   * @returns {Observable<any>} - Observable for the API response.
   */
  addFavouriteMovie(Username: string, movieID: string): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .post(apiUrl + 'users/' + Username + '/movies/' + movieID, null, {
        //null is passed as the request body (needed for "POST") because you're not sending any additional data.
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to update user information.
   * @param {string} Username - Name of the user to be updated.
   * @param {any} updatedDetails - New user information.
   * @returns {Observable<any>} - Observable for the API response.
   */
  editUser(Username: string, updatedDetails: any): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .put(apiUrl + 'users/' + Username, updatedDetails, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to delete a user.
   * @param {string} Username - Name of the user to be deleted.
   * @returns {Observable<any>} - Observable for the API response.
   */
  deleteUser(Username: string): Observable<any> {
    console.log('Deleting user with username:', Username);

    const token = localStorage.getItem('token');
    console.log('Token:', token); // Log the token to the console
    return this.http
      .delete(apiUrl + 'users/' + Username, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        tap((response) => console.log('Response from server:', response)),
        map((response: HttpResponse<any>) => {
          if (response.status === 201) {
            // Successful deletion, return a success message or any other relevant data
            return { success: true, message: 'User successfully deleted' };
          } else {
            // For other status codes, pass the response through
            return response;
          }
        }),

        catchError(this.handleError)
      );
  }

  /**
   * @description Make an API call to delete a favorite movie for a user.
   * @param {string} Username - Name of the user.
   * @param {string} movieID - ID of the movie to be removed from favorites.
   * @returns {Observable<any>} - Observable for the API response.
   */
  deleteMovieFromFavourites(
    Username: string,
    movieID: string
  ): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http
      .delete(apiUrl + 'users/' + Username + '/movies/' + movieID, {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + token,
        }),
        observe: 'response',
      })
      .pipe(
        map((response: HttpResponse<any>) => response),
        catchError(this.handleError)
      );
  }
}
