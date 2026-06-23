# Express Router API

A Node.js and Express.js project demonstrating how to build a modular REST API using Express Router. This project showcases route organization, middleware usage, dynamic route parameters, and RESTful endpoint design.

## About This Project

This application was built to strengthen backend development skills using Node.js and Express. The primary focus is on creating maintainable API routes by separating concerns with Express Router.

### Skills Demonstrated

* Node.js
* Express.js
* Express Router
* REST API Design
* Middleware
* Route Parameters
* JSON Responses
* Error Handling
* Modular Project Structure

## Project Structure

```text
.
├── routes/
│   └── filmsRouter.js
|   └── showsRouter.js
├── data/
│   └── films.js
├── server.js
├── package.json
└── README.md
```

## Features

* Retrieve film data through API endpoints
* Modular routing with Express Router
* Dynamic URL parameters
* Structured JSON responses
* Basic error handling
* Clean and scalable project organization

## Installation

### Clone the Repository

```bash
git clone https://github.com/Vros15/express-router.git
```

### Navigate to the Project Directory

```bash
cd express-router
```

### Install Dependencies

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

Or if using nodemon:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

## Example Endpoints

### Get All Films

```http
GET /films
```

### Get Film by ID

```http
GET /films/:id
```

### Create a New Film

```http
POST /films
```

### Update a Film

```http
PUT /films/:id
```

### Delete a Film

```http
DELETE /films/:id
```

## Learning Objectives

This project was created to practice:

* Building RESTful APIs
* Organizing routes with Express Router
* Handling HTTP requests and responses
* Implementing middleware
* Creating scalable backend applications

## Future Improvements

* Database integration (MongoDB or PostgreSQL)
* Input validation
* Authentication and authorization
* Automated testing
* API documentation with Swagger
* Docker support

