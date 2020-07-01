const express = require("express");
const router = express.Router();

const users = require('./users');
const productos = require('./productos');
const carrito = require('./carrito');
const categoria = require('./categorias');
const comentarios = require ('./comentarios');
const valoraciones = require ('./valoraciones')

const compras = require('./compras');
const admin = require("./admin");

router.use('/users', users);
router.use('/productos', productos);
router.use('/carrito' , carrito);
router.use('/categoria' , categoria);
router.use ('/comentarios', comentarios);
router.use ('/valoraciones', valoraciones)
router.use("/admin", admin);
router.use('/compra' , compras);


module.exports = router;
