import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../db/database'
import Profesion from './Profesion';

// Modelo Profesional
const Profesionales = sequelize.define('Profesional', {
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
    type: DataTypes.STRING(20)
  },
  ciudad: {
    type: DataTypes.STRING(255)
  },
  region: {
    type: DataTypes.STRING(255)
  },
  comuna: {
    type: DataTypes.STRING(255)
  },
  id_profesion: {
    type: DataTypes.INTEGER,
    references: {
      model: Profesion,
      key: 'id_profesion'
    }
  }
}, {
  tableName: 'profesionales',
  timestamps: false
});

export default Profesionales;
