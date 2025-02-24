const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const router = express.Router();

//User Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, password} = req.body;
        const user = new User({username, password});
        await user.save();
        res.status(201).json({message: 'User registered successfully'});
    } catch (error) {
        res.status(400).json({message: 'Error creating user'});
    }
});

//User Login
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username});

        if (!user || !(await user.comparePassword(password))) {
            return res.status(400).json({ message: 'Invalid credentials'});
        }

        const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRES_IN });
        res.json({ token });
    } catch (error) {
        res.status(500).json({message: 'Server error'});
    }
});

module.exports = router;