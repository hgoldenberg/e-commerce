const obj = {};

const { Categories, Product } = require("../models/index");

obj.buscarCategorias = (req, res, next) => {
  Categories.findAll()
    .then((data) => res.json(data))
    .catch(next);
};

obj.UnaCategoria = (req, res, next) => {
  Categories.findAll({
    include: [
      {
        model: Product,
      },
    ],
    where: {
      id: req.params.id,
    },
  })
    .then((data) => res.json(data))
    .catch(next);
};

// funcionalidades de admin
obj.CrearCategoria = (req, res, next) => {
  Categories.create(req.body).then(() => {
    res.sendStatus(201);
  }).catch(next)
};

obj.DestruirCategoria = (req, res, next) => {
  Categories.destroy({ where: { id: req.params.id } }).then(() => {
    res.sendStatus(201);
  }).catch(next)
};
//

obj.updateCategoria = (req, res, next ) =>{
  Categories.update({
    tipo: req.body.tipo
  },{
    where:{
      id:req.params.id
    },
    returning:true
  }).then(()=> res.sendStatus(201))
  .catch(next)
};

module.exports = obj;
