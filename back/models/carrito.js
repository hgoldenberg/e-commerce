const S = require("sequelize");
const db = require("../config/db");

class Carrito extends S.Model {}

Carrito.init(
  {
    valor_compra: {
      type: S.FLOAT,
    },
    dir_entrega: {
      type: S.STRING,
    },
    ciudad_entrega: {
      type: S.STRING,
    },
    CP_entrega: {
      type: S.INTEGER,
    },
    estado: {
      // estado pendiente || completado
      type: S.STRING,
      defaultValue: "pendiente",
    },
  },
  {
    sequelize: db,
    modelName: "carrito",
  }
);

module.exports = Carrito;
