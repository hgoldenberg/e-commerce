const express = require('express');
const Router = express.Router();
const users = require('../controllers/users')


// ruta = /api/users
Router.post('/' , users.create)

module.exports = Router;