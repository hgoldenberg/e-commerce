const S = require('sequelize');
const db = require('../config/db');

class Users extends S.Model{};

Users.init({

    name:{
        type:S.STRING,
        allowNull:false
    },
    lastname:{
        type:S.STRING,
        allowNull:false
    },
    avatar:{
        type:S.STRING,
    },
    email:{
        type:S.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:S.STRING,
        allowNull:false
    },
    salt:{
        type:S.STRING
    },
    direccion:{
        type:S.STRING,
        allowNull:false
    }
    
},{
    sequelize:db, 
    modelName:'user'
})


module.exports = Users