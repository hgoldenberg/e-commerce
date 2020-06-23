const S = require("sequelize");
const db = require("../config/db");

class Valoraciones extends S.Model {}

Valoraciones.init(
  {
    puntaje: {
      type: S.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "valoraciones",
  }
);

module.exports = Valoraciones;
