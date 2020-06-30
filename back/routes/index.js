const express = require('express');
const router = express.Router()

const users = require('./users');
const productos = require('./productos');
const carrito = require('./carrito');
const categoria = require('./categorias');
const compras = require('./compras');


router.use('/users', users);
router.use('/productos', productos);
router.use('/carrito' , carrito);
router.use('/categoria' , categoria);
router.use('/compra' , compras)


module.exports = router;




