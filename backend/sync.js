import mysql from 'mysql2/promise';
import sequelize from './config/db.js';
import User from './models/userModel.js';
import Computer from './models/computerModel.js';
import Query from './models/queryModel.js';
import CartItem from './models/cartitemModel.js';
import Order from './models/orderModel.js';

const dbName = 'compe';

async function createDatabaseIfNotExists() {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
  });

  await connection.query(`CREATE DATABASE IF NOT EXISTS \`${dbName}\`;`);
  await connection.end();
}

async function syncDatabase() {
  try {
    await createDatabaseIfNotExists();
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    await sequelize.sync({ alter: true });
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error syncing database:', error);
  }
}

syncDatabase();
