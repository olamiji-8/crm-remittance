
const User = require('../Models/userModel');


exports.updateUserProfile = async (req, res) => {
    try {
      const userId = req.params.userId;
      const { chapter, chapterAddress, zone } = req.body;
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update Zone and Fellowship Information
      user.chapter = chapter || user.chapter;
      user.chapterAddress = chapterAddress || user.chapterAddress;
      user.zone = zone || user.zone;
  
      // Save the updated user
      await user.save();
  
      res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  };