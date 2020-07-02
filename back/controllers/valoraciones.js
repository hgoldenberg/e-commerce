const obj = {};
const { Valoraciones, Product } = require("../models/index");
const sequelize = require("sequelize");
const Op = sequelize.Op;

//creo la valoración de un producto

obj.createValoracion = (req, res, next) => {
      Product.findOne({
        where: {
          id: req.body.productId
        }
      }).then((product) => {
          console.log("producto", product)
        const producto = product
        Valoraciones.create( {
         puntaje: req.body.puntaje
        })
        .then((data)=>{
            console.log("estoy",data)
          data.setUser(req.body.userId)
          producto.addValoraciones(data.id) 
          res.sendStatus(200)
        })
      
    }).catch(next)
  };

// Asigno el promedio de los ratings de un producto a la vista de todos los productos

obj.rating = (req,res,next) => {
  Valoraciones.findAll({
      where: {
          productId: req.params.productId 
          }
      }).then ((data)=>{
          
          let punto = 0
          data.map((val)=>{
            return punto+=val.puntaje
          })
          punto = punto/data.length
        
          res.status(200).json({rating:punto})
      }) 
      .catch(next)
    }


module.exports = obj;
