const nodemailer = require('nodemailer');
require('dotenv').config();


const sendOtp = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const options = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your OTP Code',
    html: `<p>Your OTP code is <b>${otp}</b>. It expires in 5 minutes.</p>`
  };

  await transporter.sendMail(options);
};

module.exports = sendOtp;
