const { Users } = require("../models/index");
const passport = require("passport");
LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password" },
    function(email, password, done) {
      console.log(email,password)
      Users.findOne({ where: { email: email } })
        .then(user => {
          console.log(user)
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
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Users.findByPk(id).then(function(user) {
    done(null, user);
  });
});

module.exports = passport;
