import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import postRoutes from './routes/post.js';
import authRoutes from './routes/auth.js';
import requestAccessRoutes from './routes/requestAccess.js'; // ✅ NEW

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/posts', postRoutes);
app.use('/auth', authRoutes);
app.use('/request-access', requestAccessRoutes); // ✅ NEW

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

console.log("MongoDB Connection URL:", CONNECTION_URL);

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));
