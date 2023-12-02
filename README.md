# nodejs_task_1_api
#Node.js Authentication APIs

Overview :
  This repository contains a Node.js application with APIs for user registration, login, and password recovery. The application is designed to handle user authentication securely.

Features:
  - User Registration API: Endpoint for users to register with their email, password, and username.
  - User Login API: Endpoint for users to log in using their username and password, generating authentication tokens.
  - Forget User Password API: Endpoint for password recovery, allowing users to request for reset password through a temporary tokens sent through email.
  - Reset User Password API: Endpoint for Password reset,  allowing users to reset password through temporary tokens got from the email.
  - Post CRUD APIs: Endpoints for creating, reading, updating, and deleting social media posts.
  - Like Post API: Endpoint for users to like a post.
  - Add Comment API: Endpoint for users to add comments to a post.
Technologies Used :
  Node.js: Server-side JavaScript runtime.
  Express.js: Web application framework for Node.js.
  Database: (Specify the database used, e.g., MongoDB, MySQL) for storing user information.
  Thunder Client: Used for testing and demonstrating the APIs.

#How to Use

Installation:
  npm install
Run the Application:
  npm start

Endpoints:
  - User Registration: POST /auth/register    #[username,password and email should be passed with the request]
  - User Login: POST /auth/login    #[username and password should be passed with the request]
  - Forget Password: POST /forget-password    #[body should contain email with the temporary jwt token should be send to and barrier token should also passed with       the request]
  - Reset Password: POST /reset-password    #[body should contain the email and the new password and there should be the barrier token got from the email which is       only valid only for 60 seconds]
  - Create Post: POST /posts #[body should contain the username and the content of the post with the temporary jwt token should be send to and barrier token should also passed with the request]
  - Read Posts: GET /posts
  -  Update Post: PUT /posts/:id #[body should contain the updated content and the username with the temporary jwt token should be send to and barrier token should also passed with the request]
  - Delete Post: DELETE /posts/:id
  - Like Post: POST /posts/:id/likes #[body should contain the username with the temporary jwt token should be send to and barrier token should also passed with       the request]
  - Add Comment: POST /api/posts/:id/comments #[body should contain the username and comment content with the temporary jwt token should be send to and barrier token should also passed with       the request]

Testing:
  Use Postman, Thunder Client or a similar tool to test the APIs.
Security Considerations:
  Passwords are securely hashed before storage.
  JWT Tokens are used for authentication to enhance security.
Submission:
Please refer to the provided video for a walkthrough of the functionalities.

Author
Aalan sason singarayan A
