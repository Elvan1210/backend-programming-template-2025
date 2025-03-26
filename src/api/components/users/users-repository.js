const { Users } = require('../../../models');

const users = [
  { id: 1, email: "user1@gmail.com", password: "password123" },
  { id: 2, email: "user2@gmail.com", password: "password456" },
  { id: 3, email: "user3@gmail.com", password: "password789" },
  // Tambahkan lebih banyak data di sini
];

const getUsers = (offset = 0, limit = 10) => {
  return users.slice(offset, offset + limit);
};

const getUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

async function getUsers() {
  return Users.find({});
}

async function getUser(id) {
  return Users.findById(id);
}

async function getUserByEmail(email) {
  return Users.findOne({ email });
}

async function createUser(email, password, fullName) {
  return Users.create({ email, password, fullName });
}

async function updateUser(id, email, fullName) {
  return Users.updateOne({ _id: id }, { $set: { email, fullName } });
}

async function changePassword(id, password) {
  return Users.updateOne({ _id: id }, { $set: { password } });
}

async function deleteUser(id) {
  return Users.deleteOne({ _id: id });
}

module.exports = {
  getUsers,
  getUser,
  getUserByEmail,
  createUser,
  updateUser,
  changePassword,
  deleteUser,
};
