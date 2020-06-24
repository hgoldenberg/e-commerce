const express = require('express');
const Router = express.Router();
const carrito = require('../controllers/carrito');

Router.post('/agregarProducto/:productId' , carrito.agregarProductoLogeado)

module.exports = Router;