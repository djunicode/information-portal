const express = require('express');
const verifyjwt = require('../middlewares/auth');
const {
  loginUser,
  logoutUser,
  createUser
} = require('../controllers/auth');

// Initializing router
const router = new express.Router();

//Signup User
router.post('/signup', createUser);

//Login User - Public
router.post('/login', loginUser );

//Logout User - Public
router.post('/logout', verifyjwt, logoutUser);

// Exporting Modules
module.exports = router;