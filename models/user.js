// Import DataTypes from Sequelize for defining model attributes
import { DataTypes } from 'sequelize';

// Import the sequelize instance from the index file
import { sequelize } from './index';

// Define the User model with its attributes and options
const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
  // Add more fields as needed
});

// Export the User model for use in other parts of the application
export default User;
