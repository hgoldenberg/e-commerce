const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DB_URL,{
    logging:false,
    dialect:process.env.DB_DIALECT
})

module.exports = db