const express = require("express");
const Router = express.Router();
const categoria = require("../controllers/categories");

Router.get("/:id", categoria.UnaCategoria);
Router.get("/", categoria.buscarCategorias);

Router.post("/crear", categoria.CrearCategoria);
Router.delete("/:id", categoria.DestruirCategoria);
Router.put("/:id", categoria.updateCategoria);

module.exports = Router;
