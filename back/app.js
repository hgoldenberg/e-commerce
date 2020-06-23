const express = require("express");
const volleyball = require("volleyball");
const path = require("path");

require("dotenv").config();
const app = express();
const db = require("./config/db");
const port = process.env.PORT;
const router = require("./routes");

// req.body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// middlewere
app.use(volleyball);
app.use(express.static(__dirname + "/public"));

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
