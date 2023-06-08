import { DataTypes } from 'sequelize';
import sequelize from '../db/database'

// Modelo Cliente
const Cliente = sequelize.define('Cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  correo_electronico: {
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
  cuidad: {
    type: DataTypes.STRING(255)
  },
  region: {
    type: DataTypes.STRING(255)
  },
  comuna: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'clientes',
  timestamps: false
});

export default Cliente;