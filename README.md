# Todo Management API

A simple RESTful API for managing to-do items with user authentication, built using Node.js, Express, and MongoDB. This project supports creating, reading, updating, and deleting to-do items with secure JWT-based authentication.

https://roadmap.sh/projects/todo-list-api

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Introduction

The Todo Management API allows users to manage their to-do items efficiently. It includes user authentication for secure access and supports CRUD operations with optional pagination for fetching to-do items. Built using modern web development practices, it ensures secure and scalable performance.

## Features

- **User Authentication**:
  - Sign up and sign in with hashed passwords and JWT.
  - Secure endpoints with token-based authentication.
- **Todo Management**:
  - Add, update, retrieve, and delete to-do items.
  - Support for paginated retrieval of items.
- **Error Handling**:
  - Handles invalid requests, authentication errors, and server issues.
- **Environment Configuration**:
  - Supports `.env` for customizable setups.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** with Mongoose ORM
- **JWT** for authentication
- **bcrypt** for password hashing
- **dotenv** for environment variable management

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/todo-management-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd todo-management-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Set up the environment variables by creating a `.env` file in the root directory and adding the following:

    ```env
    MONGODB_URL=your-mongodb-connection-string
    SECRET_KEY=your-secret-key
    PORT=your-port
    ```

## Configuration

- **MongoDB**: Ensure you have a MongoDB instance running and configure the `MONGODB_URL` in the `.env` file.
- **JWT Secret**: Set a secure secret key in the `SECRET_KEY` field for token signing.
- **Port**: Specify the port in the `.env` file, or the server defaults to port `3000`.

## Usage

1. Start the server:

    ```bash
    npm start
    ```

2. The API will run at `http://localhost:3000` (or the configured port).

## API Endpoints

### User Routes

- **Sign Up**:
  - **URL**: `/signup`
  - **Method**: `POST`
  - **Body**:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**: Returns a user object and a JWT token.

- **Sign In**:
  - **URL**: `/signin`
  - **Method**: `GET`
  - **Body**:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Response**: Returns a user object and a JWT token.

### Todo Routes

- **Add Todo**:
  - **URL**: `/addTodo`
  - **Method**: `POST`
  - **Headers**:
    ```
    Authorization: Bearer <token>
    ```
  - **Body**:
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```
  - **Response**: Returns the created to-do item.

- **Get Todos**:
  - **URL**: `/getTodos/todos?page=number&limit=number`
  - **Method**: `GET`
  - **Headers**:
    ```
    Authorization: Bearer <token>
    ```
  - **Response**: Returns a paginated list of to-do items.

- **Update Todo**:
  - **URL**: `/:id`
  - **Method**: `POST`
  - **Headers**:
    ```
    Authorization: Bearer <token>
    ```
  - **Body**:
    ```json
    {
      "title": "string",
      "description": "string"
    }
    ```
  - **Response**: Returns the updated to-do item.

- **Delete Todo**:
  - **URL**: `/:id`
  - **Method**: `DELETE`
  - **Headers**:
    ```
    Authorization: Bearer <token>
    ```
  - **Response**: Returns a success message.

## Examples

- **Create a new to-do**:
    ```bash
    curl -X POST http://localhost:3000/addTodo \
      -H "Authorization: Bearer <token>" \
      -H "Content-Type: application/json" \
      -d '{"title": "Sample Todo", "description": "This is a test to-do"}'
    ```

- **Get all to-dos**:
    ```bash
    curl -X GET http://localhost:3000/getTodos/todos?page=1&limit=5 \
      -H "Authorization: Bearer <token>"
    ```

## Troubleshooting

- **MongoDB Connection Issues**: Ensure the MongoDB URI in the `.env` file is correct and that the MongoDB service is running.
- **Invalid Token**: Make sure to pass a valid JWT in the `Authorization` header.
- **Port Already in Use**: Change the port in the `.env` file or terminate the process using the current port.

## Contributors

- [Rahul Rasal](https://github.com/Rahul-Rasal)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
