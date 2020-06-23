const express = require('express');
const Router = express.Router();
const productos = require('../controllers/productos');

// ruta = /api/productos

Router.get('/', productos.allProductos);

Router.get('/:id', productos.productoId);

Router.post('/' , productos.createProducto);

Router.put('/:id' , productos.modificarProducto);

Router.delete('/:id' , productos.modificarProducto);

module.exports = Router