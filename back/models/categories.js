const S = require("sequelize");
const db = require("../config/db");

class Categories extends S.Model {}

Categories.init(
  {
    tipo: {
      type: S.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "categories",
  }
);

module.exports = Categories;
