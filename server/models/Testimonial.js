const Sequelize = require("sequelize");
const db = require("../config/database");

const Testimonial = db.define("testimoniales", {
  nombre: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  mensaje: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Testimonial;
