const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const path = require("path");
// const db = require("./config/database.js");

const configs = require("../server/config");
const config = configs[app.get("env")];
app.locals.sitioNombre = config.sitioNombre;

// * vistas
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// db.authenticate()
//   .then(() => console.log("Conexion a la BD establecida"))
//   .catch(err => console.log("Error al conectar DB: ", err.message));

// // * año actual
// app.use((req, res, next) => {
//   const fecha = new Date();
//   res.locals.anioActual = fecha.getFullYear();
//   console.log("locals ", res.locals);
//   return next();
// });

// * rutas
app.use("/", routes());

app.listen(2100, () => console.log(`Servidor corriendo en el puerto 2100`));
