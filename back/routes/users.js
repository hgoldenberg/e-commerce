const express = require('express');
const Router = express.Router();
const users = require('../controllers/users');
const passport = require("passport");
const router = require('../../../24-OMDB/back/routes');
const User = require('../../../24-OMDB/back/db/models/users');


// ruta = /api/users
Router.post('/' , users.create)


// esta ruta de registro hay que descomponerla en la carpeta controllers
router.post("/register",(req,res)=>{
    User.create(req.body).then (user=>res.status(200).send(user));
});

// ruta de login
router.post("/login", passport.authenticate("local"),(req,res)=>{
    res.send(req.body.email);
});

//ruta de logout
router.get("/logout",(req,res)=>{
    req.logout();
    res.send(req.user);
});

module.exports = Router;


