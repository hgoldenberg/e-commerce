const express = require('express');
const router = express.Router()

const users = require('./users');
const productos = require('./productos');


router.use('/users', users);
router.use('/productos', productos);


module.exports = router;




