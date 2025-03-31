# Book Store API

Book Store API is a RESTful API built with Node.js, Express, and MongoDB. It allows users to perform CRUD operations on books in a database.

## Features

- **Get All Books**: Retrieve a list of all books.
- **Get Book by ID**: Retrieve details of a specific book by its ID.
- **Add a New Book**: Create a new book entry.
- **Update a Book**: Update details of an existing book by its ID.
- **Delete a Book**: Remove a book from the database by its ID.

## Project Structure

```
.env
.env.example
.gitignore
package.json
server.js
controllers/
	book.contoller.js
db/
	db.js
models/
	Book.model.js
routes/
	book_routes.js
```

### Key Files and Directories

- **`server.js`**: Entry point of the application.
- **`db/db.js`**: MongoDB connection logic.
- **`models/Book.model.js`**: Mongoose schema and model for books.
- **`controllers/book.contoller.js`**: Controller functions for handling book-related operations.
- **`routes/book_routes.js`**: API routes for book operations.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Book_Store_Api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   ```

4. Start the server:
   - For production:
     ```bash
     npm start
     ```
   - For development (with hot-reloading):
     ```bash
     npm run dev
     ```

## API Endpoints

### Base URL: `/api/book`

| Method | Endpoint         | Description              |
|--------|-------------------|--------------------------|
| GET    | `/get`           | Get all books            |
| GET    | `/get/:id`       | Get a book by ID         |
| POST   | `/add`           | Add a new book           |
| PUT    | `/update/:id`    | Update a book by ID      |
| DELETE | `/delete/:id`    | Delete a book by ID      |

### Request Body for POST/PUT

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedDate": 2023,
  "pages": 200
}
```

## Dependencies

- **dotenv**: For environment variable management.
- **express**: Web framework for Node.js.
- **mongoose**: MongoDB object modeling tool.
- **nodemon**: Development tool for auto-restarting the server.

## License

This project is licensed under the ISC License.
