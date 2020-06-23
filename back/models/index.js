const Users = require("./users");
const Product = require("./product");
const Carrito = require("./carrito");
const Categories = require("./categories");
const Valoraciones = require("./valoraciones");
const Comentarios = require("./comentarios");

// faltan relaciones

// Product.belongsToMany(Categories);

// Categories.belongsToMany(Product);

Carrito.belongsTo(Users);

// Carrito.belongsToMany(Product);

Comentarios.belongsTo(Product);

Product.hasMany(Comentarios);

Comentarios.belongsTo(Users);

Product.hasMany(Valoraciones);

Valoraciones.belongsTo(Users);

module.exports = {
  Users,
  Product,
  Carrito,
  Categories,
  Valoraciones,
  Comentarios,
};
