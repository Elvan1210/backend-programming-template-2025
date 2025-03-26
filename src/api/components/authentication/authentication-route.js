const express = require('express');
const router = express.Router();
const authenticationController = require('./authentication-controller');

router.post('/login', authenticationController.login);

module.exports = (app) => {
    app.use('/api/authentication', router);
};
