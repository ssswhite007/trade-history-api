// Import the Redis client library
const redis = require('redis');

// Create a Redis client instance with the specified URL
const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

// Handle Redis client errors
redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

// Function to connect to the Redis server
async function connect() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

// Function to disconnect from the Redis server
async function disconnect() {
  if (redisClient.isOpen) {
    await redisClient.disconnect();
  }
}

// Export the Redis client and connection functions
module.exports = { redisClient, connect, disconnect }; 