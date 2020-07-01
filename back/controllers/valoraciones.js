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

//   obj.rating = (req,res,next) => {
//     Valoraciones.findAll({
//         where: {
//             productId: req.params.id 
//         }
//     }).then ((data)=>{
//         let punto 
//         data.map((val)=>{
//             punto+=val.puntaje
//         })
//         punto = punto/data.lenght
//     })
//   }


module.exports = obj;
