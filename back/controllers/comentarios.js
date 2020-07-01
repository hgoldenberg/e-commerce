const obj = {};
const { Comentarios, Product } = require("../models/index");
const sequelize = require("sequelize");
const Op = sequelize.Op;

//creo un comentario

obj.createComentario = (req, res, next) => {
    Product.findOne({
      where: {
        id: req.body.productId
      }
    }).then((product) => {
      const producto = product
      Comentarios.create( {
       comentarios: req.body.comentarios
      })
      .then((data)=>{
        data.setUser(req.body.userId)
        producto.addComentario(data.id) 
        res.sendStatus(200)
      })
    
  }).catch(next)
};

// busco todos los comentarios de un producto
obj.allComentarios = (req, res, next) => {
  Comentarios.findAll({
      where:{
          productId:req.params.productId
      }
  })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch(next);
};

module.exports = obj;
