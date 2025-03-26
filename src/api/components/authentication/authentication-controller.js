const authenticationService = require('./authentication-service');

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const result = await authenticationService.authenticateUser(email, password);
        res.status(200).json(result);
    } catch (error) {
        if (error.message === 'INVALID_PASSWORD') {
            res.status(403).json({ error: "INVALID_PASSWORD" });
        } else if (error.message === 'USER_NOT_FOUND') {
            res.status(404).json({ error: "USER_NOT_FOUND" });
        } else {
            res.status(500).json({ error: "INTERNAL_SERVER_ERROR" });
        }
    }
};

module.exports = { login };
