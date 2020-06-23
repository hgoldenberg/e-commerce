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

Users.beforeCreate(user=>{
    user.salt = Crypto.randomBytes(20).toString("hex");
    user.password = user.hashFunction(user.password);
});

// Función HASH que almacena el pass hasheado de manera que no se muestre como texto plano en la BD

Users.prototype.hashFunction = function(password){
    return Crypto.createHmac("sha1", this.salt).update(password).digest("hex");
}

// Valida si el pass ingresado en texto plano por el usuario ya registrado tiene su correspondiente hasheado en la BD

Users.prototype.validatePassword= function(password){
    return this.hashFunction(password) === this.password;
};


module.exports = Users