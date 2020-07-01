const express = require("express");
const Router = express.Router();
const comentarios = require("../controllers/comentarios");

Router.post("/", comentarios.createComentario);
Router.get ("/:productId", comentarios.allComentarios)

module.exports = Router