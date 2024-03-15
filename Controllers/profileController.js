const User = require('../Models/userModel');

// Get user profile
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update user profile
exports.updateProfile = async (req, res) => {
  try {
    const { email, phoneNumber, address, country, state, city, name, surname,chapter, chapterAddress, zone } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update personal information
    user.email = email || user.email;
    user.phoneNumber = phoneNumber || user.phoneNumber;
    user.address = address || user.address;
    user.country = country || user.country;
    user.state = state || user.state;
    user.city = city || user.city;
    user.name = name || user.name;
    user.surname = surname || user.surname;
    user.chapter = chapter || user.chapter;
    user.chapterAddress = chapterAddress || user.chapterAddress;
    user.zone = zone || user.zone;

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update profile picture
exports.updateProfilePicture = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' });
      }
  
      const user = await User.findById(req.user._id);
      user.profilePicture = req.file.buffer;
      await user.save();
  
      res.status(200).json({ message: 'Profile picture updated successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  // Get profile picture
  exports.getProfilePicture = async (req, res) => {
    try {
      const user = await User.findById(req.user._id);
  
      if (!user || !user.profilePicture) {
        return res.status(404).json({ message: 'Profile picture not found' });
      }
  
      res.set('Content-Type', 'image/jpeg'); // Adjust the content type based on your file format
      res.send(user.profilePicture);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };