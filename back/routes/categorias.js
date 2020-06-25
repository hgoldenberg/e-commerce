const express = require('express');
const Router = express.Router();
const categoria = require('../controllers/categories');

Router.get('/:id',categoria.UnaCategoria)
Router.get('/',categoria.buscarCategorias)


module.exports = Router