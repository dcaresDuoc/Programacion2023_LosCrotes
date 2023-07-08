import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('findsome', 'root', 'Nico123', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;