const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique:true },
  address: { type: String },
  country: { type: String },
  state: { type: String },
  city: { type: String },
  chapter: { type: String },
  chapterAddress: { type: String },
  zone: { type: String },
});

const User = mongoose.model('User', userSchema);

module.exports = User;