import express from 'express';
<<<<<<< HEAD
import {loginUser , signupUser } from '../controllers/auth.js';
const router =express.Router();
router.post('/login',loginUser);
router.post('/signup',signupUser);
=======
import {login , signup } from '../controllers/auth.js';
const router =express.Router();
router.post('/login',login);
router.post('/signup',signup);
>>>>>>> bd8644c (final changes)
export default router;