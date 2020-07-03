const express = require("express");
const Router = express.Router();
const users = require("../controllers/users");
const passport = require("../config/passport");

// ruta = /api/users

Router.post("/register", users.register);

// ruta de login
Router.post("/login", passport.authenticate("local"), users.loggin);

// ruta de logout
Router.get("/logout", users.logout);

Router.get("/persistencia", users.loggedUser);

Router.put("/editar", users.editar)

module.exports = Router;
