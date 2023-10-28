const passport = require('passport');
const googleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

passport.use(
  new googleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: 'http://localhost:5000/auth/google/callback',
      state: false,
      passReqToCallback: true,
    },
    async (request, accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
