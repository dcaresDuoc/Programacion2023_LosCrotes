import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('find-some', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;