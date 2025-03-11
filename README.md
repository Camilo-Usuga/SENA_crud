# My CRUD Application

This is a simple CRUD application built with Node.js and Express, using a MySQL database for data storage.

## Features

- Create, Read, Update, and Delete operations for items.
- RESTful API structure.
- MySQL database integration.

## Prerequisites

- Node.js installed on your machine.
- MySQL server running and accessible.

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```
   cd my-crud-app
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your database configuration:

   ```
   DB_HOST=your_database_host
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   DB_NAME=your_database_name
   ```

## Usage

1. Start the application:

   ```
   npm start
   ```

2. The application will be running on `http://localhost:3000`.

## API Endpoints

- `POST /items` - Create a new item.
- `GET /items` - Retrieve all items.
- `GET /items/:id` - Retrieve a specific item by ID.
- `PUT /items/:id` - Update a specific item by ID.
- `DELETE /items/:id` - Delete a specific item by ID.

## License

This project is licensed under the MIT License.# SENA_crud
