const S = require("sequelize");
const db = require("../config/db");

class Comentarios extends S.Model {}

Comentarios.init(
  {
    comentarios: {
      type: S.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "comentarios",
  }
);

module.exports = Comentarios;
