const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const pug = require("pug");
const path = require("path");

// * vistas
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "./views"));

// * rutas
app.use("/", routes());
app.use(express.static("public"));

app.listen(2100, () => console.log(`Servidor corriendo en el puerto 2100`));
