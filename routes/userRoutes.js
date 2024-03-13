const express = require('express');
const router = express.Router();

const userController = require("../Controllers/userController");


// Login route
router.post('/login', userController.login);

router.get('/login', userController.getLogin);

// Password reset route
router.post('/reset-password', userController.resetPassword);

// Add any other routes you need

module.exports = router;