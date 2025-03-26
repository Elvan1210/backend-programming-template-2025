const User = require('../../models/users-schema');

const findByEmail = async (email) => {
    return await User.findOne({ email });
};

module.exports = { findByEmail };
