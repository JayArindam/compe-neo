import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Assuming you're exporting your Sequelize instance from here

const Computer = sequelize.define('computers', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  tableName: 'computers', // name of the table in DB
  timestamps: false // if you're not using createdAt/updatedAt
});

export default Computer;
