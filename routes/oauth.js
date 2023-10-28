const express = require('express');
const router = express.Router();
const passport = require('passport');
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('../config/passport');

router.use(cookieParser());

router.get('/google', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

module.exports = router;
