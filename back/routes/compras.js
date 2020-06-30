const express = require('express');
const Router = express.Router();
const compras = require('../controllers/compras')

Router.get('/historial/:id', compras.historialDelCompra);

module.exports = Router;