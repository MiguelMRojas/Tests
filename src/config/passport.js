const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/User');

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, async (email, password, done) => {
  // Confirm if email matches
  const user = await User.findOne({ email });
  if (!user) {
    return done(null, false, { message: 'No user found' });
  }

  // Validate password
  const isMatch = await user.matchPassword(password);
  if (isMatch) {
    return done(null, user);
  } else {
    return done(null, false, { message: 'Incorrect password' });
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id,done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    })
    .catch(err => {
      done(err, null);
    });
});

