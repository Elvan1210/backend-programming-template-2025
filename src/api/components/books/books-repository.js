const { Books } = require('../../../models');

const books = [
  { id: 1, title: "Book 1", author: "Author 1" },
  { id: 2, title: "Book 2", author: "Author 2" },
  { id: 3, title: "Book 3", author: "Author 3" },
  // Tambahkan lebih banyak data di sini
];

const getBooks = (offset = 0, limit = 10) => {
  return books.slice(offset, offset + limit);
};

async function getBooks() {
  return Books.find({});
}

async function create(title) {
  return Books.create({ title });
}

module.exports = {
  getBooks,
  create,
};
