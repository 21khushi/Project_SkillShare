import express from 'express';
import { sendRequestAccessEmail } from '../utils/mailer.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { toEmail, requesterName, postTitle, requesterEmail } = req.body;

  if (!toEmail || !requesterName || !postTitle || !requesterEmail) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    await sendRequestAccessEmail(toEmail, requesterName, postTitle, requesterEmail);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
});

export default router;
