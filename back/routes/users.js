const express = require('express');
const Router = express.Router();
const users = require('../controllers/users');
const passport = require("passport");


// ruta = /api/users

// esta ruta de registro hay que descomponerla en la carpeta controllers
Router.post("/register", users.register);

// ruta de login
Router.post("/login", passport.authenticate("local") , users.register);

//ruta de logout
Router.get("/logout", users.logout);

module.exports = Router;


