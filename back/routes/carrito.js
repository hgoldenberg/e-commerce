const express = require('express');
const Router = express.Router();
const carrito = require('../controllers/carrito');

Router.post('/agregarProducto' , carrito.agregarProductoLogeado);

Router.get('/:id', carrito.buscarPoductos);

Router.delete('/:carritoId/:productId', carrito.eliminarProducto);

module.exports = Router;