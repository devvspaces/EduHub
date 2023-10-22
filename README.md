# EduHub

An open-source educational platform that provides access to a wide range of courses and learning materials. EduHub should support features like user profiles, course creation, progress tracking, quizzes, and discussions.

## Environment Files

### Frontend Environment

- Create a `.env` file in the frontend and fill it up with appropriate values for following environment variables.

```bash
# REQUIRED FRONTEND ENVIRONMENT FILE
```

### Backend Environment

- Create a `.env` file in the backend and fill it up with appropriate values for following environment variables.

```bash
# REQUIRED BACKEND ENVIRONMENT FILE
MONGODB_URL="<mongodb-database-connection-url-here>"
PORT=<port-on-which-the-server-is-running>
JWT_SECRET="<a-string-used-to-sign-json-webtoken>"
FRONTEND_URL="<url-of-the-website-frontend>"
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


5. Open your web browser and visit <http://localhost:3000> to access the application.

### Mobile

To run the Mobile locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/devvspaces/EduHub.git
2. Navigate to the project directory:
   ```bash
   cd EduHub/mobile
3. Install project dependencies:
   ```bash
   flutter pub get
4. Run the app:
   ```bash
   flutter run
