const bcrypt = require('bcrypt');
const User = require('../Models/userModel');

exports.login = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // User is authenticated, you can generate and return a token here
    // or any other desired response

    res.status(200).json({ message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};



exports.resetPassword = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const user = await User.findOne({ phoneNumber });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Generate a new password (e.g., using the user's surname)
    const newPassword = user.surname;

    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.signUp = async (req, res) => {
  try {
    const { phoneNumber, surname, name, password } = req.body;

    // Check if a user with the provided phoneNumber already exists
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this phone number already exists' });
    }

    // Hash the password provided by the user
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      phoneNumber,
      surname,
      name,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();

    // Return a success response
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    // Handle any errors that occurred during the sign-up process
    console.error('Error during sign-up:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};




