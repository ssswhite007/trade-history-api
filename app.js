// Import the Express framework
const express = require('express');

// Import body-parser to parse incoming request bodies
const bodyParser = require('body-parser');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the trade history routes
const tradeHistoryRoutes = require('./routes/tradeHistoryRoutes');

// Import Swagger UI for API documentation
const swaggerUi = require('swagger-ui-express');

// Import Swagger specifications
const swaggerSpecs = require('./swaggerConfig');

// Import the database models
const db = require('./models');

// Synchronize the database models with the database
db.sequelize.sync({ alter: true });

// Create an Express application
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Use the trade history routes for the /trade-history endpoint
app.use('/trade-history', tradeHistoryRoutes);

// Serve the Swagger API documentation at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

// Export the Express app
module.exports = app;


