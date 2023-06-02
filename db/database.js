const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

module.exports = sequelize;
