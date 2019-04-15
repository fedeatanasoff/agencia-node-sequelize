const Sequelize = require("sequelize");
const db = require("../config/database");

const Viajes = db.define("viajes", {
  //   id: {
  //     type: Sequelize.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true
  //   },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  precio: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  fecha_ida: {
    type: Sequelize.DATE,
    allowNull: false
  },
  fecha_vuelta: {
    type: Sequelize.DATE,
    allowNull: false
  },
  imagen: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descripcion: {
    type: Sequelize.STRING,
    allowNull: false
  },
  disponibles: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Viajes;
