import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'secret';

export const signupUser = async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) 
        return res.status(400).json({ message: "User already exists. Please log in." });
  
      if (password.length < 6) 
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
  
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ name, email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "Signup successful. Redirecting to login..." });  // ✅ Return success message
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ message: "Internal server error. Please try again later." });
    }
  };
  
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser) 
      return res.status(400).json({ message: "User not found. Signup to create an account." });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) 
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, SECRET, { expiresIn: "1h" });

    res.status(200).json({ user: existingUser, token, message: "Login successful" });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: "Internal server error. Please try again later." });
  }
};
