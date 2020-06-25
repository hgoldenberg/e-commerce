const S = require("sequelize");
const db = require("../config/db");

class Carrito extends S.Model {}

Carrito.init(
  {
    valor_compra: {
      type: S.FLOAT,
      defaultValue:null
    },
    dir_entrega: {
      type: S.STRING,
      defaultValue:null
    },
    ciudad_entrega: {
      type: S.STRING,
      defaultValue:null,
    },
    CP_entrega: {
      type: S.INTEGER,
      defaultValue:null
    },
    estado: {
      // estado pendiente || completado 
      type: S.STRING,
      defaultValue:'pendiente'
    },
  },
  {
    sequelize: db,
    modelName: "carrito",
  }
);

module.exports = Carrito;
