import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import dotenv from 'dotenv';

dotenv.config();

const SECRET = process.env.JWT_SECRET || 'secret';

<<<<<<< HEAD
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
=======
export const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists. Please log in." });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters long" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    //  Save role, defaulting to 'user' if it's not provided
    const newUser = new User({ name, email, password: hashedPassword, role: role || 'user' });

    await newUser.save();

    res.status(201).json({ message: "Signup successful. Please log in to continue." });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};


export const login= async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log(`User not found: ${email}`);
      return res.status(400).json({ error: "User not found. Signup to create an account." });
    }

    // Compare the password with the hashed password stored in the DB
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordCorrect) {
      console.log(`Invalid credentials for user: ${email}`);
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Create a JWT token including role
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id, role: existingUser.role },
      SECRET,
      { expiresIn: '1h' }
    );

    // Send successful login response with token and role
    res.status(200).json({
      user: {
        name: existingUser.name,
        email: existingUser.email,
        id: existingUser._id,
        role: existingUser.role,
      },
      token,
      message: "Login successful",
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Internal server error. Please try again later." });
  }
};








// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import User from '../models/user.js'; // Assuming your User model is located here

// export const signup= async (req, res) => {
//   const { name, email, password, role } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     // Hash password
//     const hashedPassword = await bcrypt.hash(password, 12);

//     // Create new user
//     const newUser = new User({ name, email, password: hashedPassword, role: role || 'user' });

//     // Save user
//     await newUser.save();

//     // Generate JWT token
//     const token = jwt.sign({ email: newUser.email, id: newUser._id, role: newUser.role }, 'your_secret_key', { expiresIn: '1h' });

//     // Send response
//     res.status(200).json({ result: newUser, token });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong!' });
//   }
// };



// export const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });

//     if (!existingUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

//     if (!isPasswordCorrect) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token with role included
//     const token = jwt.sign({ email: existingUser.email, id: existingUser._id, role: existingUser.role }, 'your_secret_key', { expiresIn: '1h' });

//     // Send response
//     res.status(200).json({ result: existingUser, token });
//   } catch (error) {
//     res.status(500).json({ message: 'Something went wrong!' });
//   }
// };


>>>>>>> bd8644c (final changes)
