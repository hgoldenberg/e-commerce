const obj = {};
const { Users } = require("../models");

// admin: subir un usuario a admin. Crear, updatear y eliminar un producto. Puede crear una categoria.

// trae todos
obj.usersAdmin = (req, res, next) => {
  Users.findAll({
    where: {
      roll: "user"
    }
  }).then(data => res.json(data));
};

obj.usersSuperAdmin = (req, res, next) => {
  Users.findAll({
    where: {
      roll: ["user", "admin"]
    }
  }).then(data => res.json(data));
};

//

// estas son las funcionalidades de admin y super admin
obj.isAdmin = (req, res, next) => {
  if (req.user.roll === "admin" || req.user.roll === "superAdmin") {
    next();
  } else {
    res.sendStatus(401);
  }
};

obj.updateToAdmin = (req, res, next) => {
  Users.update({ roll: "admin" }, { where: { id: req.params.id } }).then(() => {
    res.sendStatus(200);
  });
};
// cierra aca

// funcionalidad para los super admin
obj.updateToUser = (req, res, next) => {
  Users.update({ roll: "user" }, { where: { id: req.params.id } }).then(() => {
    res.sendStatus(200);
  });
};

module.exports = obj;
