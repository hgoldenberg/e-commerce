const S = require('sequelize');
const db = require('../config/db');
const User = require('../../../24-OMDB/back/db/models/users');

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
    // agregamos validacion de email
    email:{
        type:S.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:true
        }
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
});

User.beforeCreate(user=>{
    user.salt = Crypto.randomBytes(20).toString("hex");
    user.password = Crypto.createHmac
    ("sha1", user.salt).update(user.password).digest("hex");
});

// Función HASH que almacena el pass hasheado de manera que no se muestre como texto plano en la BD

User.hashFunction = function(password){
    return Crypto.createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
}

// Valida si el pass ingresado en texto plano por el usuario ya registrado tiene su correspondiente hasheado en la BD

User.prototype.authenticate = function(password){
    return this.hashFunction(password) === this.password;
};


module.exports = Users