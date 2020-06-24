const express = require("express");
const Router = express.Router();
const users = require("../controllers/users");
const passport = require("passport");
const { Users } = require("../models/index");

// ruta = /api/users


Router.post("/register", users.register);

Router.get("/", (req, res, next) => {
  Users.findAll().then((data) => {
    res.json(data);
  });
});

// ruta de login
Router.post("/login", passport.authenticate("local"), users.loggin);

//ruta de logout
Router.get("/logout", users.logout);

module.exports = Router;
