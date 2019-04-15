const express = require("express");
const router = express.Router();
const Viajes = require("../models/Viajes");

module.exports = function() {
  router.get("/", (req, res) => {
    res.render("index");
  });

  router.get("/nosotros", (req, res) => {
    res.render("nosotros", {
      title: "Sobre Nosotros",
      year: new Date().getFullYear()
    });
  });

  router.get("/viajes", (req, res) => {
    Viajes.findAll()
      .then(viajes =>
        res.render("viajes", {
          title: "Proximos Viajes",
          viajes
        })
      )
      .catch(err => console.log("Error al cargar los viajes: ".err.message));
  });

  router.get("/viajes/:id", (req, res) => {
    Viajes.findByPk(req.params.id)
      .then(viaje =>
        res.render("viaje", {
          viaje
        })
      )
      .catch(err => console.log("Error: ", err.message));
  });

  return router;
};
