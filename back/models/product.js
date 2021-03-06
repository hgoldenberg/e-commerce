const S = require("sequelize");
const db = require("../config/db");


class Product extends S.Model {}

Product.init(
  {
    name: {
      type: S.STRING,
      allowNull: false,
    },
    price: {
      type: S.INTEGER,
      allowNull: false,
    },
    imageUno: {
      type: S.STRING,
    },
    imageDos: {
      type: S.STRING,
    },
    description: {
      type: S.TEXT,
      allowNull: false,
    },
    stock: {
      type: S.INTEGER,
      allowNull: false,
    },
    rating: {
      type: S.FLOAT,
      defaultValue: 0
    }
  },
  {
    sequelize: db,
    modelName: "product",
  }
);

module.exports = Product;
