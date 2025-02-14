// Import the Server class from the socket.io library
import { Server } from 'socket.io';

// Declare a variable to hold the socket.io instance
let io;

/**
 * Initialize the socket.io server
 * @param {Object} server - The HTTP server instance
 */
export function init(server) {
  // Create a new socket.io instance and attach it to the server
  io = new Server(server);

  // Listen for new client connections
  io.on('connection', (socket) => {
    console.log('New client connected');

    // Listen for client disconnection
    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
}

/**
 * Get the initialized socket.io instance
 * @returns {Object} - The socket.io instance
 * @throws Will throw an error if socket.io is not initialized
 */
export function getIo() {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
}
