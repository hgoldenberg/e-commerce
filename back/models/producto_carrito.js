const S = require('sequelize');
const db = require('../config/db');

class Producto_carrito extends S.Model {}

Producto_carrito.init({
    cantidad:{
        type:S.INTEGER,
        defaultValue:1
    }
},{sequelize:db , modelName:'producto_carrito'});


module.exports = Producto_carrito