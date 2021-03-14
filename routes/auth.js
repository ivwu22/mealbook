const express = require('express');
const router = express.Router();
const passport = require('../config/ppConfig')
const db = require("../models")

const authController = require('../controllers/authController');

router.get('/signup', authController.getSignUpPage);

router.post('/signup', authController.signUpUser);

router.get('/login', authController.getLogInPage);

router.post('/login', passport.authenticate('local', {
  successRedirect: '/user/dashboard',
  failureRedirect: '/auth/login',
  successFlash: 'You have logged in!',
  failureFlash: 'Invalid username and/or password.'
}));

router.get('/logout', authController.logOutUser);

module.exports = router;