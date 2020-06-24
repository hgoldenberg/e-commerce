const express = require('express');
const router = express.Router()

const users = require('./users');
const productos = require('./productos');
const carrito = require('./carrito');


router.use('/users', users);
router.use('/productos', productos);
router.use('/carrito' , carrito);


module.exports = router;




