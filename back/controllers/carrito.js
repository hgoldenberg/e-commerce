const obj = {};
const { Carrito, Product, Producto_carrito } = require("../models/index");

obj.agregarProductoLogeado = (req, res, next) => {
  if (req.body.userId) {
    Carrito.findOrCreate({
      where: {
        userId: req.body.userId,
        estado: "pendiente"
      }
    })
      .then(data => {
        data[0].addProduct([req.body.product]);
        res.sendStatus(200);
      })
      .catch(next);
  }
};

// cuando estas loggeado
obj.buscarPoductos = (req, res, next) => {
  Carrito.findOne({
    include: [{ model: Product }],
    where: {
      userId: req.params.id,
      estado: "pendiente"
    },
    order: [["id", "DESC"]]
  })
    .then(productoscarrito => {
      res.status(200).json(productoscarrito);
    })
    .catch(next);
};

//cuando estas loggeado
obj.eliminarProducto = (req, res, next) => {
  Carrito.findOne({
    where: {
      id: req.params.carritoId,
      estado: "pendiente"
    }
  })
    .then(productdelete => {
      productdelete.removeProduct([req.params.productId]);
      res.sendStatus(200);
    })
    .catch(next);
};

// ruta para udpater la cantidad y el stock
obj.updateCantidadProductoSumar = (req, res, next) => {
  Producto_carrito.findOne({
    where: {
      carritoId: req.body.carritoId,
      productId: req.body.productId
    }
  }).then(data => {
    data
      .update(
        {
          cantidad: data.cantidad + 1
        },
        {
          returning: true
        }
      )
      .then(() => {
        Product.findOne({
          where: {
            id: req.body.productId
          }
        }).then(product => {
          product
            .update(
              {
                stock: product.stock - 1
              },
              {
                returning: true
              }
            )
            .then(() => res.sendStatus(200));
        });
      })
      .catch(next);
  });
};

// ruta para udpater la cantidad y el stock
obj.updateCantidadProductoRestar = (req, res, next) => {
  Producto_carrito.findOne({
    where: {
      carritoId: req.body.carritoId,
      productId: req.body.productId
    }
  }).then(data => {
    data
      .update(
        {
          cantidad: data.cantidad - 1
        },
        {
          returning: true
        }
      )
      .then(() => {
        Product.findOne({
          where: {
            id: req.body.productId
          }
        }).then(product => {
          product
            .update(
              {
                stock: product.stock + 1
              },
              {
                returning: true
              }
            )
            .then(() => res.sendStatus(200));
        });
      })
      .catch(next);
  });
};

// finalizar la compra del carrito
obj.finalizarCarrito = (req, res, next) => {
  Carrito.update(
    {
      estado: "completado"
    },
    {
      where: {
        userId: req.params.id
      },
      returning: true
    }
  )
    .then(carrito => {
      res.status(200).send(carrito);
    })
    .catch(next);
};

module.exports = obj;
