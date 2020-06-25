const obj = {};
const { Users } = require('../models')


obj.register = (req, res, next) =>{
    console.log(req.body)
    Users.create(req.body).then (user=> res.status(200).send(user))
};

obj.loggin = (req, res, next) =>{
    console.log('me loggie')
    console.log(req.user)
    res.status(200).json(req.user)
};

obj.logout = (req, res, next) =>{
    req.logout();
    res.json({});
};

obj.users = (req, res, next) =>{
    Users.findAll()
    .then (data=>(res.json(data)))
};

obj.loggedUser = (req, res, next) => {
    console.log(req.user)
    if (req.isAuthenticated()) {
        res.json(req.user)
    } else {
        res.json("")
    }
};

module.exports= obj
