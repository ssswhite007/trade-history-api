// Import the Redis client library
import { createClient } from 'redis';

// Create a Redis client instance with the specified URL
const redisClient = createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

// Handle Redis client errors
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Function to connect to the Redis server
export async function connect() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

// Function to disconnect from the Redis server
export async function disconnect() {
  if (redisClient.isOpen) {
    await redisClient.disconnect();
  }
}

// Export the Redis client and connection functions
export { redisClient }; 