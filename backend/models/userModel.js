// models/User.js
import { DataTypes } from 'sequelize';
// import sequelize from '../db.js';
import sequelizer from '../config/db.js';

const User = sequelizer.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cartData: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: {}
  }
}, {
  freezeTableName: true,
  timestamps: true
});

export default User;