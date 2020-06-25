const obj = {};
const { Carrito , Product} = require('../models/index');

obj.agregarProductoLogeado = (req , res, next) =>{
    Carrito.findOrCreate({
        where:{
            userId:req.body.userId,
            estado:'pendiente'
        }
    }).then(data => {
        data[0].addProduct([req.body.product])
        res.sendStatus(200)
    })
};




module.exports = obj