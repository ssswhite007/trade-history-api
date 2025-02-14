// Import the Express app from the app module
const app = require('./app');

// Import the HTTP module to create a server
const http = require('http');

// Import the socket module for WebSocket connections
const socket = require('./socket');

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize the socket with the server
socket.init(server);

// Define the port to listen on, using an environment variable or defaulting to 5555
const PORT = process.env.PORT || 5555;

// Start the server and log the port it's running on
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));