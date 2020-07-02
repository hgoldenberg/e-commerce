const express = require("express");
const Router = express.Router();
const valoraciones = require("../controllers/valoraciones");

Router.post("/", valoraciones.createValoracion);
Router.get ("/:productId", valoraciones.rating)

module.exports = Router