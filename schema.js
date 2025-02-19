const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  }
}, { _id: false });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'Please fill a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: [String],
    default: ['user'],
    enum: ['user', 'admin', 'moderator'],
  },
  profile: {
    type: profileSchema,
    required: true,
  },
  lastLogin: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
