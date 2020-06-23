const obj = {};
const { Users } = require('../models')


obj.register = (req, res, next) =>{
    Users.create(req.body).then (user=> res.status(200).send(user))
};

obj.loggin = (req, res, next) =>{
    res.status(200).json(req.user)
};

obj.logout = (req, res, next) =>{
    req.logout();
    res.json({});
};

module.exports= obj