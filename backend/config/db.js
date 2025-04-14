import { Sequelize } from 'sequelize';

const sequelizer = new Sequelize('compe', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false // optional: disable SQL logs
});

export default sequelizer;