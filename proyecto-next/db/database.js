const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('findsome', 'root', 'Nico123', {
  host: 'localhost',
  dialect: 'mysql', // O el dialecto que estés utilizando (por ejemplo, 'postgres' para PostgreSQL)
});

module.exports = sequelize;
