const express = require("express");
const app = express();

require('dotenv').config()

const port = process.env.PORT

// conexión a base de datos:

const mongoose = require("mongoose");

const user = process.env.USER
const password = process.env.PASSWORD
const dbname = process.env.DBNAME

const uri = `mongodb+srv://${user}:${password}@cluster0.zl5zh.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose
  .connect(uri)
  .then(() => console.log("Base de datos conectada."))
  .catch((e) => console.log(e));

// motor de plantillas:
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// routes:
app.use("/", require("./router/rutas_web"));
app.use("/mascotas", require("./router/mascotas"));

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { title: "Error 404", description: "Página no encontrada" });
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto", port);
});
