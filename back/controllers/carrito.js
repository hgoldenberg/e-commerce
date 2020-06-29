const obj = {};
const { Carrito, Product } = require("../models/index");

obj.agregarProductoLogeado = (req, res, next) => {
  console.log(req.body.userId);
  Carrito.findOrCreate({
    where: {
      userId: req.body.userId,
      estado: "pendiente",
    },
  }).then((data) => {
    data[0].addProduct([req.body.product]);
    res.sendStatus(200);
  });
};

obj.buscarPoductos = (req, res, next) => {
  Carrito.findOne({
    include: [{ model: Product }],
    where: {
      userId: req.params.id,
      estado: "pendiente",
    },
  }).then((productoscarrito) => {
    res.status(200).json(productoscarrito);
  });
};

obj.eliminarProducto = (req, res, next) => {
  Carrito.findOne({
    where: {
      id: req.params.carritoId,
      estado: "pendiente",
    },
  }).then((productdelete) => {
    productdelete.removeProduct([req.params.productId]);
    res.sendStatus(200);
  });
};

module.exports = obj;
