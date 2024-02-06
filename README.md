# Name: CUB Film Data (Angular)

## A Client-side app for an arthouse movies database, built with Typescript in Angular.

<img width="1434" alt="Image of a screenshot of the app" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_08.png?raw=true">

### Based on its existing server-side code (REST API and database) the single-page, responsive app displays several interface views that will handle data through the previously-defined REST API endpoints.

#### The project demonstrates mastery of full-stack JavaScript development, including APIs, web server frameworks, databases, business logic, authentication and data security.

### Overview

CUB Film Data is an Angular app built as part of my CareerFoundry's Full-Stack-Web-Development-Course to demonstrate the mastery of full-stack JavaScript development inside the MERN stack.

The web app allows users to load information about specific arthouse movies, directors, and genres. Users are able to create an account, update their personal data or delete their account.

The API is published on [GitHub](https://github.com/ilsegaertner/CUB-Film-Angular-client).

To visit App, click [here](https://ilsegaertner.github.io/CUB-Film-Angular-client/).

### Objective

The objectiv was to build a client-side Angular app for the previously developed [server-side API, the databases and the business logic](https://github.com/ilsegaertner/CUB_Film_data).

### Approach

**Client-Side:**

The development of the clientside was achieved through the usage of the Angular framework.
During the process the routes for the individual endpoints were determined, and the code logic was created in different components, a main view, a navigation-bar, a movie view, a login- and signup view, a movie card, a profile view and a logout link.

<img width="1423" alt="Screenshot Fullscreen of the app" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_10.png?raw=true">

### Features

#### Signup/Login

- A welcome view where users will be able to either log in or register an account.

<img width="823" alt="Screenshot of Signup/Login View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_02.png?raw=true">

#### Main view

- Displaying all movies of the database.
- Ability to navigate to Profile view
- Ability to log out
- Filtering the list of movies with a “search” feature
- Ability to select a movie for more details: Upon clicking on a particular movie, users will be taken to a single movie view:

#### Single Movie view

Additional movie details will be displayed. The single movie view will contain the following additional features via modals that appear when clicked on the button:

- Director View: Details about the director of that particular movie
- Genre View: Details about that particular genre of the movie
- Synopsis: Details about that particular Synopsis of the movie

<img width="412" alt="Screenshot of Director Modal View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_03.png?raw=true">
<img width="412" alt="Screenshot of Genre Modal View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_01.png?raw=true">

#### Profile view

- Displays user registration details
- Allows users to update their info (username, password, email, date of birth)
- Allows existing users to delete their profile

<img width="612" alt="Screenshot of Profile View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_06.png?raw=true">

### Challenges

The implementation of the client-side for the app took me way longer than any other previous project, and especially longer than the backend programming of the app.

As being new to Javascript and React relying on robust underrstanding of Javascript, I learned both (again) in the course of this project, going back and forth of old and new concepts. I was challenged with grasping the concepts of hooks, state and props.

As a conclusion it was not an easy, but very enriching task being aware of all the advantages that come in knowing how to creat REACT projects from scratch.

### Technologies used

- JavaScript
- REACT
- MongoDB
- Express
- HTML
- CSS
