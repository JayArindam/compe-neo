// models/orderModel.js
import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';
import User from './userModel.js';

const Order = sequelize.define('Order', {
   id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
   },
   userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
   },
   items: {
      type: DataTypes.JSON, // To store an array of items (you can normalize later if needed)
      allowNull: false,
   },
   amount: {
      type: DataTypes.FLOAT,
      allowNull: false,
   },
   address: {
      type: DataTypes.JSON, // SQL doesn’t support nested object, so JSON works well
      allowNull: false,
   },
   status: {
      type: DataTypes.STRING,
      defaultValue: 'Order Processing',
   },
   date: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
   },
   payment: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
   }
});

// Define relationship (if needed)
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

export default Order;