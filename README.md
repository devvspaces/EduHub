# EduHub

An open-source educational platform that provides access to a wide range of courses and learning materials. EduHub should support features like user profiles, course creation, progress tracking, quizzes, and discussions.

## Environment Files

- Every project has some special content that is not displayed to public. These "secrets" are usually placed inside the environment file of the project.
- Since backend and frontend of a project are supposed to be loosely coupled projects, both of them have their own environment file as described below.

### Frontend Environment

Create a `.env` file in the frontend root folder and add following variables with there corresponding appropriate values

```bash
```

### Backend Environment

Create a `.env` file in the backend root folder and add following variables with there corresponding appropriate values

```bash
MONGODB_URL="<mongodb-database-connection-url-here>"
PORT=<port-on-which-the-backend-runs>
JWT_SECRET="<secret-string-used-to-sign-the-authentication-tokens-used-for-logged-in-users>"
FRONTEND_URL="<url-of-the-frontend-which-requires-cors-access-once-deployed>"
```

## Installation

### Frontend

To run the Backend locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/devvspaces/EduHub.git
    ```

2. Navigate to the project directory:

    ```bash
    cd EduHub/frontend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open your web browser, if it didn't lauch automatically, and visit <http://localhost:3000> to access the application.

### Backend

To run the Backend locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/devvspaces/EduHub.git
    ```

2. Navigate to the project directory:

    ```bash
    cd EduHub/backend
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    node server.js
    ```

    OR, If you have `nodemon` installed, simply run "nodemon" in the command prompt.

    ```bash
    nodemon 
    ```

5. Open your web browser and visit <http://localhost:3000> to access the application.

### Mobile

To run the Mobile locally, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/devvspaces/EduHub.git
    ```

2. Navigate to the project directory:

    ```bash
    cd EduHub/mobile
    ```

3. Install project dependencies:

    ```bash
    flutter pub get
    ```

4. Run the app:

    ```bash
    flutter run
    ```
