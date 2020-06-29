const Users = require("./users");
const Product = require("./product");
const Carrito = require("./carrito");
const Categories = require("./categories");
const Valoraciones = require("./valoraciones");
const Comentarios = require("./comentarios");
const Producto_carrito = require('./producto_carrito');

// faltan relaciones

Product.belongsToMany(Categories ,{ through: "producto_categoria" });
Categories.belongsToMany(Product , { through: "producto_categoria" });

Carrito.belongsTo(Users);

Carrito.belongsToMany(Product ,{ through: Producto_carrito});
Product.belongsToMany(Carrito ,{ through: Producto_carrito});

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
  Producto_carrito
};
