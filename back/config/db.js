const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/e-commerce',{
    logging:false,
    dialect:'postgres'
})

module.exports = db