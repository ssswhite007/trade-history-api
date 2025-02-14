// Import the Express app
import app from './app.js';

// Import the HTTP module to create a server
import http from 'http';

// Import the socket module for WebSocket connections
import { init } from './socket.js';

// Create an HTTP server using the Express app
const server = http.createServer(app);

// Initialize the socket with the server
init(server);

// Define the port to listen on, using an environment variable or defaulting to 5555
const PORT = process.env.PORT || 5555;

// Start the server and log the port it's running on
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));