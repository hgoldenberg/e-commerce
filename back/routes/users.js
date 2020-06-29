const express = require("express");
const Router = express.Router();
const users = require("../controllers/users");
const passport = require("passport");
const { Users } = require("../models/index");
const admin = require("../controllers/admin");

// ruta = /api/users

// router.get("/" , admin.isAdmin, admin.users)

Router.post("/register", users.register);

// ruta que trae todos los usuarios
Router.get("/", admin.users);

// ruta para updatear un usuario a admin
Router.put("/admin/toadmin/:id", admin.updateToAdmin);

// ruta para updatear un admin a user
Router.put("/admin/touser/:id", admin.updateToUser);

// ruta de login
Router.post("/login", passport.authenticate("local"), users.loggin);

// ruta de logout
Router.get("/logout", users.logout);

Router.get("/persistencia", users.loggedUser);

module.exports = Router;
