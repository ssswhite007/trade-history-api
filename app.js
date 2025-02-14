// Import the Express framework
import express from 'express';

// Import body-parser to parse incoming request bodies
import bodyParser from 'body-parser';

// Load environment variables from a .env file into process.env
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

// Import the trade history routes
import tradeHistoryRoutes from './routes/tradeHistoryRoutes.js';

// Import Swagger UI for API documentation
import swaggerUi from 'swagger-ui-express';

// Import Swagger specifications
import swaggerSpecs from './swaggerConfig.js';

// Import the database models
import { sequelize, db } from './models/index.js';

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
export default app;


