import { DataTypes } from 'sequelize';
import sequelize from '../db/database'

const Contacto = sequelize.define('Contacto', {
  id_contacto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'contacto',
  timestamps: false
});

export default Contacto;
