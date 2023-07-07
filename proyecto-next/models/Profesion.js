import { DataTypes } from 'sequelize';
import sequelize from '../db/database';

// Modelo Profesion
const Profesion = sequelize.define('Profesion', {
  id_profesion: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  cod_profesion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  }
}, {
  tableName: 'profesion',
  timestamps: false
});

export default Profesion;
