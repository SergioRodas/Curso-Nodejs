const express = require("express");
const app = express();

const port = 3000;

// motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { title: "Mi título dinámico" });
});

app.get("/servicios", (req, res) => {
  res.render("servicios", { title: "Servicios" });
});

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { title: "Error 404", description: "Página no encontrada" });
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto", port);
});
