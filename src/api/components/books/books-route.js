const express = require('express');

const booksController = require('./books-controller');

const route = express.Router();

route.get('/', booksController.getBooks);

module.exports = (app) => {
  app.use('/books', route);

  // Get list of books

  // Create a new book
  route.post('/', booksController.createBook);

  // TODO: Get a book by id

  // TODO: Update a book by id

  // TODO: Delete a book by id
  app.use('/api/users', router);
};
