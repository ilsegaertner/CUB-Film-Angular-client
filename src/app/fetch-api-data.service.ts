import { Injectable } from '@angular/core';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import {
  HttpHeaders,
  HttpErrorResponse,
  HttpClient,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

//Declaring the api url that will provide data for the client app
const apiUrl = 'https://cub-film-data-dc72bcc7ff05.herokuapp.com/';

@Injectable({
  //injectable decorator. A decorator is a function that augments a piece of code - usually another function or a class
  providedIn: 'root',
})
export class UserRegistrationService {
  // private: can only be accessed within the class where they are declared.
  // public: accessible from outside the class.

  // Dependency Injection: Inject the HttpClient module to the constructor params
  // This will provide HttpClient to the entire class, making it available via this.http
  constructor(private http: HttpClient) {} // The namespace (here: private) is a way of initializing the instance with whatever is given as a parameter (here: http). http is of Type HttpClient

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

  // Non-typed response extraction
  private extractResponseData(res: HttpResponse<any>): any {
    const body = res;
    return body || {};
  }

  // Making the api call for the user registration endpoint
  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http
      .post(apiUrl + 'users', userDetails)
      .pipe(catchError(this.handleError)); // The .pipe() function (from RxJS) is used to combine multiple functions into a single function.
  }

  // Making the api call for the getMovies endpoint
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

  // added services logic to other endpoints for making an api call
  // Api call - user login
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

  // Api call - get movie
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

  // Api call - get director
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

  // Api call - get genre
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

  // Api call - get user
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

  // Api call - Get favourite movies for user
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

  // Api call - Add favourite movies to a user's list of favourites
  addFavouriteMovie(Username: string, movieID: string): Observable<any> {
    // adding the public keyword is optional. they are public by default
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

  // Api call - Edit a user
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

  // Api call - Delete a user
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

  // Api call - Delete a movie from Favourites
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
