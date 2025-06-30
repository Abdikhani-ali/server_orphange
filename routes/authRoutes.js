const express = require('express');
const { register, verifyOtp, login, sendOtp } = require('../controllers/authController');
const upload = require('../middleware/upload');
const router = express.Router();

router.post('/register', upload.single('image'), register);
router.post('/verify-otp', verifyOtp);
router.post('/login', login);
router.post('/send-otp', sendOtp);
module.exports = router;
