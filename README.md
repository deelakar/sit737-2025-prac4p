# Calculator Microservice API

This is a simple **Calculator API** that performs basic arithmetic operations (addition, subtraction, multiplication, and division) using **Node.js** and **Express**. The application is built using **REST architecture** and follows **microservice** principles.

## Features

- **Addition**: Adds two numbers.
- **Subtraction**: Subtracts two numbers.
- **Multiplication**: Multiplies two numbers.
- **Division**: Divides two numbers, with a check for division by zero.

## Technologies Used

- **Node.js**
- **Express** The web framework used to build the API
- **REST API**
- **Microservice Architecture**
- **Winston** for logging
- **dotenv** for environment variable management
- **CORS** for enabling cross-origin requests

## Requirements

Before getting started, ensure you have the following installed:

- **Git**: To clone the repository and manage version control.
- **Visual Studio Code** (VSCode): A popular IDE for editing and running JavaScript applications.
- **Node.js**: To run the application. You can download it from [nodejs.org](https://nodejs.org/).

## Getting Started

### 1. Clone the repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/calculator-microservice.git
cd calculator-microservice
```

### 2. Install Dependencies

The project uses several npm packages, including express, dotenv, winston, and cors. Install the dependencies by running the following command:

```bash
npm install
```

### 3. Configuration

Create a .env file in the root of the project directory to store environment variables. with the following:

```bash
PORT=3000
```

### 4. Start the Application

To run the application, use the following command:

```bash
npm start
```

This will start the API on http://localhost:3000. You can modify the PORT value in the .env file to change the port.

### 5. Testing the API Endpoints

You can test the API using tools like Postman or curl. Below are the API endpoints:

# API Endpoints

### 1. Addition

- Endpoint: POST /add

- Request Body:

  ```bash
  {
    "num1": 10,
    "num2": 4
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Addition successful"
    "result": 14
  }
  ```

### 2. Subtraction

- Endpoint: POST /subtract

- Request Body:

  ```bash
  {
    "num1": 20,
    "num2": 3
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Subtraction successful"
    "result": 17
  }
  ```

### 3. Multiplication

- Endpoint: POST /multiply

- Request Body:

  ```bash
  {
    "num1": 12,
    "num2": 2
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Multiplication successful"
    "result": 24
  }
  ```

### 4. Division

- Endpoint: POST /divide

- Request Body:

  ```bash
  {
    "num1": 12,
    "num2": 4
  }
  ```

- Response:

  ```bash
  {
    "success": true
    "message": "Division successful"
    "result": 3
  }
  ```

### Error Handling

If invalid inputs or missing parameters are provided, the API will return meaningful error messages.

### Example Errors:

- Missing Parameters:
  ```bash
  {
    "success": false
    "error": "Missing parameters: num1 and num2 are required"
  }
  ```
- Invalid Input:
  ```bash
  {
    "success": false
    "error": "Invalid input: num1 and num2 must be valid numbers"
  }
  ```
- Division by Zero:
  ```bash
  {
    "success": false
    "error": "Invalid input: Division by zero is not allowed"
  }
  ```
