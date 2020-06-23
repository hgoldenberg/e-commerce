const express = require("express");
const Router = express.Router();
const productos = require("../controllers/productos");

// ruta = /api/productos
Router.get("/buscar", productos.allProductos);

Router.post("/add", productos.createProducto);

Router.get("/:id", productos.productoId);

Router.put("/:id", productos.modificarProducto);

Router.delete("/:id", productos.modificarProducto);

module.exports = Router;
