// Import the swagger-jsdoc library to generate Swagger documentation
const swaggerJsdoc = require('swagger-jsdoc');

// Define the options for the Swagger documentation
const options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'Trade History API',
      version: '1.0.0',
      description: 'API documentation for the Trade History service',
    },
  },
  apis: ['./routes/*.js'], // Path to the API documentation files
};

// Generate the Swagger specifications using the defined options
const specs = swaggerJsdoc(options);

// Export the generated Swagger specifications for use in other parts of the application
module.exports = specs;
