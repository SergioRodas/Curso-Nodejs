const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Motor de plantilla
const hbs = require("hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});
app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// Aquí detallar rutas

app.get("/", (req, res) => {
  res.render("index", {
    title: "Inicio",
  });
});

app.get("/servicios", (req, res) => {
  res.render("service", {
    title: "Servicios",
    state: true,
    service: "Curso de JavaScript",
  });
});

app.get("/equipo", (req, res) => {
  res.render("team", {
    title: "Nuestro equipo",
    team: [
      {
        name: "Sergio",
        year: 2020,
      },
      {
        name: "Agustín",
        year: 2020,
      },
      {
        name: "Only Players",
        year: 2021,
      },
    ],
  });
});

app.use((req, res, next) => {
    res.status(404).render("404", {
        title: '404',
        description: 'Página no encontrada'
    })
})

// Iniciar servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
