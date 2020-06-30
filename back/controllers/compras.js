const obj = {};

const { Carrito , Product} = require("../models/index");


// buscar el historial de la compra 
obj.historialDelCompra = (req, res, next) => {
  Carrito.findAll({
    include: [{ model: Product }],
    where: {
      userId: req.params.id,
      estado: "completado"
    }
  }).then(carritoCompletado => {
    res.status(200).send(carritoCompletado);
  });
};

module.exports = obj;
