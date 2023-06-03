const { DataTypes } = require('sequelize');
const db = require('../db');

const Profesional = db.define('profesional', {
  id_profesional: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  contrasena: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING(20)
  },
  direccion: {
    type: DataTypes.STRING(255)
  },
  biografia: {
    type: DataTypes.TEXT
  },
  profesion: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  ciudad: {
    type: DataTypes.STRING(255)
  },
  region: {
    type: DataTypes.STRING(255)
  },
  comuna: {
    type: DataTypes.STRING(255)
  }
});

// Definir relación con la tabla Profesion
const Profesion = require('./profesion');

Profesional.belongsTo(Profesion, { foreignKey: 'id_profesion' });

module.exports = Profesional;
