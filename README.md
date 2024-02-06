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

<img width="250" alt="Screenshot of Director Modal View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_03.png?raw=true"> <img width="250" alt="Screenshot of Genre Modal View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_01.png?raw=true">

#### Profile view

- Displays user registration details
- Allows users to update their info (username, password, email, date of birth)
- Allows existing users to delete their profile

<img width="612" alt="Screenshot of Profile View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_06.png?raw=true">

### Challenges

I had a fun and straightforward development process with the Angular app.
Using the React concepts as basics I succeeded quicker in grasping the key concepts of the Angular framework, despite its steep learning curve.

I particularly liked the structured system and separation of services that the framework comes with.
In general, I preferred the separation of tasks, the component structure and the data-binding and thought it to be more simple in contrast to state handling and complex prop drilling side effects in React.

Apart from that I deepened my understanding of CSS/SCSS and the importance of consistent stylings. While designing the app my approach was to define a font-size first and then define spacings in relation to that through rem. This helped me to better understand how to achieve consistency in relative design systems for different media.

### Technologies used

- Typescript
- Angular Cli
- MongoDB
- Express
- HTML
- SCSS
- JavaScript

### User Stories/User flow created prior

Prior to code implementation, the following user stories were created to visualize the necessary interfaces and routes needed. These helped to understand the exact operations that needed to be written later and serve as visualization for other stakeholders.

##### User Story 1: As a user I want to be able to go to the Website and see the movies

<img width="612" alt="Screenshot of User Story1" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/UserStory1.png?raw=true">

##### User Story 2: As a user, I want to be able to create a profile so I can see data about my favorite movies.

<img width="612" alt="Screenshot of User Story2" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/UserStory2.png?raw=true">

##### User Story 3: As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.

<img width="612" alt="Screenshot of User Story3" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/UserStory3.png?raw=true">
