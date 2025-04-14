import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js'; // Adjust import according to your setup

const Query = sequelize.define('Query', {
    user: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    query: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    queryStatus: {
        type: DataTypes.ENUM('open', 'closed'),
        defaultValue: 'open', // Default status is 'open'
    }
});

export default Query;
