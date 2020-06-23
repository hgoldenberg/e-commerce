const { User } = require("../models/index");
const passport = require("passport");
LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function(email, password, done) {
      User.findOne({ where: { email: email } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validatePassword(password)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.Id);
});

passport.deserializeUser(function(id, done) {
  User.findByPk(id).then(function(user) {
    done(null, user);
  });
});

module.exports = passport;
