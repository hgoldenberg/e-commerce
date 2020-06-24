const obj = {};
const { Product } = require("../models/index");

// filtra por un nombre
/* obj.search = (req, res, next) => {
  Product.findAll({ where: req.params.product }).then(() => {});
}; */

// busco todos los productos
obj.allProductos = (req, res, next) => {
  Product.findAll()
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(next);
};

//busco los productos por id
obj.productoId = (req, res, next) => {
  Product.findByPk(req.params.id)
    .then((producto) => res.send(producto))
    .catch(next);
};

//creo un nuevo producto
obj.createProducto = (req, res, next) => {
  Product.create(req.body)
    .then((productoCreado) => res.status(200).json(productoCreado))
    .catch(next);
};

//modifico un producto
obj.modificarProducto = (req, res, next) => {
  Product.update(req.body, {
    where: {
      id: Number(req.params.id),
    },
    returning: true,
    plain: true,
  })
    .then((productoActualizado) => {
      res.status(200).send(productoActualizado);
    })
    .catch(next);
};

// borro un producto
obj.DeleteProducto = (req, res, next) => {
  Product.destroy({
    where: {
      id: Number(req.params.id),
    },
  })
    .then(() => res.sendStatus(200))
    .catch(next);
};

module.exports = obj;
