const express = require('express');
const router = express.Router();
const userController = require("./userController");

// Login route
router.post('/login', userController.login);

// Password reset route
router.post('/reset-password', userController.resetPassword);

// Add any other routes you need

module.exports = router;