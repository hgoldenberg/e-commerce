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
  });
};

obj.DestruirCategoria = (req, res, next) => {
  Categories.destroy({ where: { id: req.params.id } }).then(() => {
    res.sendStatus(201);
  });
};
//

module.exports = obj;
