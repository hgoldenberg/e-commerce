const { Users } = require("../models/index");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function(inputEmail, inputPassword, done) {
      Users.findOne({ where: { email: inputEmail } })
        .then(user => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validatePassword(inputPassword)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.findByPk(id).then(function(user) {
    done(null, user);
  });
});

module.exports = passport;
