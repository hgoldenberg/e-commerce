



const obj = {};
const { Users } = require("../models");
const passport = require("../config/passport");


obj.register = (req, res, next) => {
  Users.create(req.body).then((user) => {
    // sendmail(req.body.name, req.body.email);
    res.sendStatus(200)
  });
};

obj.loggin = (req, res, next) => {
  console.log("me loggie");
  console.log("userr", req.user);
  res.status(200).json({
    id:req.user.id,
    name:req.user.name,
    lastname:req.user.lastname,
    avatar:req.user.avatar,
    email:req.user.email,
    direccion:req.user.direccion,
    roll:req.user.roll
  });
};

obj.logout = (req, res, next) => {
  req.logout();
  res.json({});
};

obj.loggedUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.json(req.user);
  } else {
    res.json("");
  }
};



obj.users = (req, res, next) =>{
    Users.findAll()
    .then (data=>(res.json(data)))
};
module.exports= obj
