



const obj = {};
const { Users } = require("../models");
const passport = require("../config/passport");
const nodemailer = require("nodemailer");

// Configuración del envío de un mail confirmando la compra
const sendmail = (userName, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "winesellectionp5@gmail.com",
      pass: "plataforma5",
    },
  });
  const mailOptions = {
    from: "winesellectionp5@gmail.com",
    to: `${email}`,
    subject: `Bienvenido ${userName} a LOS PIBES JS`,
    text: "Esto es un e-commerce de juegos",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Email enviado");
    }
  });
};

obj.register = (req, res, next) => {
  Users.create(req.body).then((user) => {
    // sendmail(req.body.name, req.body.email);
    res.status(200).json(req.body);
  });
};

obj.loggin = (req, res, next) => {
  console.log("me loggie");
  console.log("userr", req.user);
  res.status(200).json(req.user);
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
