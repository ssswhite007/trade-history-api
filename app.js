const express = require('express');  
const bodyParser = require('body-parser');  
require('dotenv').config();
const tradeHistoryRoutes = require('./routes/tradeHistoryRoutes');  
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swaggerConfig');

const db = require('./models');  

db.sequelize.sync({ alter: true });

const app = express();  
app.use(bodyParser.json());  

app.use('/trade-history', tradeHistoryRoutes);  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

module.exports = app;


