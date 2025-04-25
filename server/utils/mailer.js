import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// ✅ Create transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Use environment variables for safety
    pass: process.env.EMAIL_PASS,
  },
});

// ✅ Function to send request access email
const sendRequestAccessEmail = async (toEmail, requesterName, postTitle, requesterEmail) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    replyTo: requesterEmail,
    to: toEmail,
    subject: `Access Request for Your Post: ${postTitle}`,
    text: `Hello,

You have received a new access request from ${requesterName} (${requesterEmail}) for your post titled "${postTitle}".

Please review the request in your dashboard.

Best regards,
SkillShare Team`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Access request email sent:', info.response);
  } catch (error) {
    console.error('Error sending access request email:', error);
    throw error;
  }
};

export { sendRequestAccessEmail };
