// Import the Sequelize library for database interaction
const { Sequelize } = require('sequelize');

// Create an object to hold the database connection and models
const db = {};

// Initialize a new Sequelize instance with the database URL from environment variables
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', // Specify the database dialect
  logging: false, // Disable logging for Sequelize
});

// Assign the Sequelize instance to the db object
db.sequelize = sequelize;

// Assign the Sequelize library to the db object for model definitions
db.Sequelize = Sequelize;

// Export the db object containing the Sequelize instance and library
module.exports = db;