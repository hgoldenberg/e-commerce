const obj = {};
const {
  Carrito,
  Product,
  Producto_carrito,
  Users,
} = require("../models/index");

// configuracion de mail

const nodemailer = require("nodemailer");

const sendMail = function (name, email) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ecomercelospibesjs@gmail.com",
      pass: "lospibes1234",
    },
  });
  const mailOptions = {
    from: "ecomercelospibesjs@gmail.com",
    to: `${email}`,
    subject: `Confirmación de la compra de ${name}`,
    text: `Gracias por confiar en nosotros ${name}`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Se ha enviando el mail");
    }
  });
};

obj.agregarProductoLogeado = (req, res, next) => {
  if (req.body.userId) {
    Carrito.findOrCreate({
      where: {
        userId: req.body.userId,
        estado: "pendiente",
      },
    })
      .then((data) => {
        data[0].addProduct([req.body.product]);
        res.sendStatus(200);
      })
      .catch(next);
  }else{
    Carrito.create(req.body).then(() =>{
      res.sendStatus(200)
    })
    .catch(next)
  }
};

// cuando estas loggeado
obj.buscarPoductos = (req, res, next) => {
  Carrito.findOne({
    include: [{ model: Product }],
    where: {
      userId: req.user.id,
      estado: "pendiente",
    },
    order: [["id", "DESC"]],
  })
    .then((productoscarrito) => {
      res.status(200).json(productoscarrito);
    })
    .catch(next);
};

//cuando estas loggeado
obj.eliminarProducto = (req, res, next) => {
  Carrito.findOne({
    where: {
      id: req.params.carritoId,
      estado: "pendiente",
    },
  })
    .then((productdelete) => {
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
      productId: req.body.productId,
    },
  }).then((data) => {
    data
      .update(
        {
          cantidad: data.cantidad + 1,
        },
        {
          returning: true,
        }
      )
      .then(() => {
        Product.findOne({
          where: {
            id: req.body.productId,
          },
        }).then((product) => {
          product
            .update(
              {
                stock: product.stock - 1,
              },
              {
                returning: true,
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
      productId: req.body.productId,
    },
  }).then((data) => {
    data
      .update(
        {
          cantidad: data.cantidad - 1,
        },
        {
          returning: true,
        }
      )
      .then(() => {
        Product.findOne({
          where: {
            id: req.body.productId,
          },
        }).then((product) => {
          product
            .update(
              {
                stock: product.stock + 1,
              },
              {
                returning: true,
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
      estado: "completado",
    },
    {
      where: {
        userId: req.params.id,
      },
      returning: true,
    }
  )
    .then((carrito) => {
      console.log(req.body.name, req.body.email);
      sendMail(req.body.name, req.body.email);
      res.status(200).send(carrito);
    })
    .catch(next);
};

// Agregar storage a carrito

obj.agregarProductoStorage = (req, res, next) =>{
  Carrito.findOrCreate(
    {
      where:{
        userId: req.user.id,
        estado: 'pendiente'
      }
    }
  )
  .then((data) => {
    req.body.storage.map(elemento => {
      data[0].addProduct(elemento.id)
    })
    res.status(200).send(data)
  })
}

module.exports = obj;
