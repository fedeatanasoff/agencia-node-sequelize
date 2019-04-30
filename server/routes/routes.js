const express = require("express");
const router = express.Router();
const Viajes = require("../models/Viajes");
const Testimoniales = require("../models/Testimonial");

module.exports = function() {
  router.get("/", (req, res) => {
    Viajes.findAll()
      .then(viajes =>
        res.render("index", {
          title: "Home",
          clase: "home",
          viajes
        })
      )
      .catch(err => console.log(`Error al cargar los viajes. ${err.message}`));
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
      .catch(err => console.log(`Error al cargar los viajes. ${err.message}`));
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

  router.get("/testimoniales", (req, res) => {
    Testimoniales.findAll().then(testimoniales =>
      res.render("testimoniales", {
        title: "Testimoniales",
        testimoniales
      })
    );
  });

  router.post("/testimoniales", (req, res) => {
    let { nombre, email, mensaje } = req.body;
    let errores = [];

    if (!nombre) errores.push({ mensaje: "agrega tu nombre" });
    if (!email) errores.push({ mensaje: "agrega tu email" });
    if (!mensaje) errores.push({ mensaje: "agrega tu mensaje" });

    if (errores.length > 0) {
      console.log(errores);
      Testimoniales.findAll().then(testimoniales =>
        res.render("testimoniales", {
          title: "Testimoniales",
          testimoniales,
          errores,
          nombre,
          email,
          mensaje
        })
      );
    } else {
      Testimoniales.create({
        nombre,
        email,
        mensaje
      })
        .then(testimonial => res.redirect("/testimoniales"))
        .catch(err => console.log(err));
    }
  });

  return router;
};
