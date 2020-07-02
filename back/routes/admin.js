const express = require("express");
const Router = express.Router();
const admin = require("../controllers/admin");

// ruta que trae todos los usuarios
Router.get("/clientes", admin.users);

//ruta para traer usuarios admin


// ruta para updatear un usuario a admin
Router.put("/toadmin/:id", admin.isAdmin, admin.updateToAdmin);

// ruta para updatear un admin a user
Router.put("/touser/:id", admin.isAdmin, admin.updateToUser);

module.exports = Router;
