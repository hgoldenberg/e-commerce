const obj = {};
const { Carrito , Product} = require('../models/index');

obj.agregarProductoLogeado = (req , res, next) =>{
    Carrito.findOrCreate({
        where:{
            userId:req.params.userid,
            estado:'pendiente'
        }
    }).then(data => {
        
    })
};




module.exports = obj