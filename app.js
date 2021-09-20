const express = require("express");
const app = express();

const port = 3000;

// motor de plantillas
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// routes:
app.use("/", require("./router/web_routes"));
app.use("/mascotas", require("./router/pets"));

app.use((req, res, next) => {
  res
    .status(404)
    .render("404", { title: "Error 404", description: "Página no encontrada" });
});

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto", port);
});
