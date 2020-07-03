const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const cookies = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

// require("dotenv").config();
const app = express();
const db = require("./config/db");
const port = 3200;
const router = require("./routes");
require("./config/passport");

app.use(express.static(__dirname + "/public"));
app.use(volleyball);
app.use(cookies());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(
  session({
    secret: "lospibesJs"
  })
);
app.use(passport.initialize());
app.use(passport.session());

//router
app.use("/api", router);

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// conectando con la base de datos
db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Escuchando en el puerto ${port}`);
    });
  })
  .catch(console.log);
