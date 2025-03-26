const usersRepository = require('../users/users-repository');

const authenticateUser = async (email, password) => {
    const user = await usersRepository.getUserByEmail(email);
    if (!user) {
        throw new Error('USER_NOT_FOUND');
    }

    if (user.password !== password) { // Gantilah dengan bcrypt.compare jika password di-hash
        throw new Error('INVALID_PASSWORD');
    }

    return { message: "success", user };
};

module.exports = { authenticateUser };
