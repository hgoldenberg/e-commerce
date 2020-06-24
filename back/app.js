const express = require("express");
const volleyball = require("volleyball");
const path = require("path");
const cookies = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const bodyParser = require("body-parser");

require("dotenv").config();
const app = express();
const db = require("./config/db");
const port = process.env.PORT || 3000;
const router = require("./routes");

app.use(volleyball);
// req.body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// middlewere

app.use(express.static(__dirname + "/public"));

app.use(cookies());
app.use(
  session({
    secret: "lospibesJs",
    saveUninitialized: true,
    resave: true,
  })
);

//router
app.use("/api", router);

app.get("/*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

app.use((err, req, res, next) => {
  res.status(500).json(err);
});

// conectando con la base de datos
db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log(`Escuchando en el puerto ${port}`);
    });
  })
  .catch(console.log);
