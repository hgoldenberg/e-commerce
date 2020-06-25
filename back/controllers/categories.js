const obj = {};

const { Categories , Product} = require('../models/index');

obj.buscarCategorias = (req, res, next) =>{
    Categories.findAll()
        .then(data => res.json(data))
        .catch(next); 
};

obj.UnaCategoria = (req, res, next) =>{
    Categories.findAll({
        include:[{
            model:Product
        }],
        where:{
            id:req.params.id
        }
    })
        .then(data => res.json(data))
        .catch(next); 
};


module.exports = obj 

