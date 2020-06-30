const express = require("express");
const Router = express.Router();
const users = require("../controllers/users");
const passport = require("passport");
const { Users } = require("../models/index");

// ruta = /api/users

Router.get("/", (req, res, next) => {
  Users.findAll().then((data) => {
    res.json(data);
  });
});

// ruta de register

Router.post("/register", users.register);

// ruta de login
Router.post("/login", passport.authenticate("local"), users.loggin);

//ruta de logout
Router.get("/logout", users.logout);





// ruta de persistencia

Router.get('/persistencia' , users.loggedUser)

module.exports = Router;
