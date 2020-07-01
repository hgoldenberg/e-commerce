const express = require('express');
const router = express.Router()

const users = require('./users');
const productos = require('./productos');
const carrito = require('./carrito');
const categoria = require('./categorias');
const comentarios = require ('./comentarios')


router.use('/users', users);
router.use('/productos', productos);
router.use('/carrito' , carrito);
router.use('/categoria' , categoria);
router.use ('/comentarios', comentarios);


module.exports = router;




