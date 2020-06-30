const express = require('express');
const Router = express.Router();
const carrito = require('../controllers/carrito');

Router.post('/agregarProducto' , carrito.agregarProductoLogeado);

Router.get('/:id', carrito.buscarPoductos);

Router.delete('/:carritoId/:productId', carrito.eliminarProducto);

Router.put('/sumar', carrito.updateCantidadProductoSumar);

Router.put('/restar', carrito.updateCantidadProductoRestar);

Router.put('/:id', carrito.finalizarCarrito);




module.exports = Router;