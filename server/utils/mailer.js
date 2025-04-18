import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: "gunnusikka21@gmail.com",
    pass: "deemiuidozdqnnpk",
  },
});

const sendRequestAccessEmail = async (toEmail, requesterName, postTitle, requesterEmail) => {
  const mailOptions = {
    from: "gunnusikka21@gmail.com",
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
    console.error('Mail options were:', mailOptions);
    throw error;
  }
};

export { sendRequestAccessEmail };
