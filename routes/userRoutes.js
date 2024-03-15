const express = require('express');
const router = express.Router();

const multer = require('multer');
const upload = multer();
const userController = require("../Controllers/userController");

const profileController = require('../Controllers/profileController');

// const adminController = require('../Controllers/adminController');


// Login route
router.post('/login', userController.login);

//SignUp route

router.post('/signup', userController.signUp)

// Password reset route
router.post('/reset-password', userController.resetPassword);

// Add any other routes you need


//Logout route

router.post('/logout', userController.logout);

// Profile

router.get('/profile', profileController.getProfile);
router.put('/profile', profileController.updateProfile);

// // Admin updating profile

// router.put('/admin/profile/:userId', adminController.updateUserProfile);

// Route to update profile picture
router.put('/profile/picture', upload.single('profilePicture'), profileController.updateProfilePicture);

// Route to get profile picture
router.get('/profile/picture', profileController.getProfilePicture);



module.exports = router;