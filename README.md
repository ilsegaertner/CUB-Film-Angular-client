# CUB Film Data (Angular)

## A Client-side Application for an Arthouse Movie Database, Built with TypeScript in Angular.

<img width="1434" alt="Image of a screenshot of the app" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_08.png?raw=true">

<!-- ### Based on its existing server-side code (REST API and database) the single-page, responsive app displays several interface views that will handle data through the previously-defined REST API endpoints.

#### The project demonstrates mastery of full-stack JavaScript development, including APIs, web server frameworks, databases, business logic, authentication and data security. -->

### Overview

CUB Film Data (Angular) is an Angular application developed as part of CareerFoundry's Full-Stack Web Development Course. This project showcases proficiency in full-stack JavaScript development within the MERN stack.

The web app allows users to explore information about specific arthouse movies, directors, and genres. Users can create an account, update their personal information, or delete their account as needed.

To visit App, click [here](https://ilsegaertner.github.io/CUB-Film-Angular-client/).

[GitHub](https://github.com/ilsegaertner/CUB-Film-Angular-client).

### Objective

The objective of this project was to build a client-side Angular application to complement the existing [server-side API, the databases and the business logic](https://github.com/ilsegaertner/CUB_Film_data).

### Approach

**Client-Side Development:**

The Angular framework was utilized for the client-side development of this application. The implementation involved defining routes for various endpoints and structuring code logic across different components, including the main view, navigation bar, movie view, login/signup view, movie card, profile view, and logout link.

<img width="1423" alt="Screenshot Fullscreen of the app" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_10.png?raw=true">

### Features

#### Signup/Login

- Users are greeted with a welcome view where they can log in or register an account

<img width="823" alt="Screenshot of Signup/Login View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_02.png?raw=true">

#### Main view

- Displays all movies from the database.
- Provides navigation to the profile view.
- Offers the option to log out.
- Includes a search feature for filtering the list of movies.
- Allows users to select a movie for detailed information.

#### Single Movie view

- Presents additional movie details, including director information, genre details, and synopsis.
- Additional details are displayed via modals for a seamless user experience.

<img width="250" alt="Screenshot of Director Modal View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_03.png?raw=true"> <img width="250" alt="Screenshot of Genre Modal View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_01.png?raw=true">

#### Profile view

- Shows user registration details.
- Enables users to update their information (username, password, email, date of birth).
- Allows existing users to delete their profiles.

<img width="612" alt="Screenshot of Profile View" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/CUB-Film-Angular-client_documentation_06.png?raw=true">

### Challenges

The development process for the Angular app was enjoyable and straightforward. Leveraging React concepts as a foundation facilitated a quicker grasp of the key Angular framework concepts, despite its steep learning curve.

I particularly appreciated the structured system and separation of services inherent in Angular. The component-based architecture and data-binding capabilities simplified development compared to the complexities of state handling and prop drilling in React.

In addition, I deepened my understanding of CSS/SCSS and the significance of consistent styling. Adopting a systematic approach to defining font sizes and spacing ratios using rem units enhanced design consistency across various media.

### Technologies used

- Typescript
- Angular Cli
- MongoDB
- Express
- HTML
- SCSS
- JavaScript

### User Stories/User flow created prior

Prior to implementation, user stories were created to visualize necessary interfaces and routes, aiding in the understanding of required operations and serving as a visualization tool for stakeholders.

##### User Story 1: As a user I want to be able to go to the Website and see the movies

<img width="612" alt="Screenshot of User Story1" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/UserStory1.png?raw=true">

##### User Story 2: As a user, I want to be able to create a profile so I can see data about my favorite movies.

<img width="612" alt="Screenshot of User Story2" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/UserStory2.png?raw=true">

##### User Story 3: As a user, I want to be able to receive information on movies, directors, and genres so that I can learn more about movies I’ve watched or am interested in.

<img width="612" alt="Screenshot of User Story3" src="https://github.com/ilsegaertner/CUB-Film-Angular-client/blob/main/src/assets/CUB-Film-Angular-client_documentation/UserStory3.png?raw=true">
