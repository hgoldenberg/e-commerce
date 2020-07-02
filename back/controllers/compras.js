const obj = {};

const { Carrito, Product, Users } = require("../models/index");

// buscar el historial de la compra
obj.historialDelCompra = (req, res, next) => {
  Carrito.findAll({
    include: [{ model: Product }],
    where: {
      userId: req.params.id,
      estado: "completado",
    },
  }).then((carritoCompletado) => {
    res.status(200).send(carritoCompletado);
  });
};

obj.allhistorialDeUser = (req, res, next) => {
  Carrito.findAll({
    include: [{ model: Product }, { model: Users }],
  }).then((historial) => {
    res.status(200).send(historial);
  });
};

module.exports = obj;
