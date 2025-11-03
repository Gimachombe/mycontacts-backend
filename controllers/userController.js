const asyncHandler = require("express-async-handler");
const User=require("../models/userModel")
//@desc register a user
//@route GET /api/users/register
//@access public
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required")
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error('user already registered');
  }  
  res.json({ message: "Register the user" })
});

//@desc login a user
//@route POST /api/users/login
//@access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Login the user' });
})

//@desc current user info
//@route POST /api/users/current
//@access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: 'Current user information' });
})

module.exports = {
  registerUser,
  loginUser,
  currentUser
 };