const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  image: String,
  otp: String,
  otpExpires: Date,
  verified: { type: Boolean, default: false },
   role: {
      type: String,
      enum: ['admin', 'staff', 'user'],
      default: 'user',
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
