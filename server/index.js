const express = require("express");
const app = express();

app.use("/", (req, res) => {
  res.send("hello friend");
});

app.listen(2100, () => console.log(`Servidor corriendo en el puerto 2100`));
