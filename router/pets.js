const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("mascotas", {
    arrayPets: [
        { id: "1", name: "rex", description: "rex descripción" },
        { id: "2", name: "chanchan", description: "chanchan descripción" }
    ],
  });
});

module.exports = router;
