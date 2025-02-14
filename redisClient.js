const redis = require('redis');

const redisClient = redis.createClient({
  url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

async function connect() {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
}

async function disconnect() {
  if (redisClient.isOpen) {
    await redisClient.disconnect();
  }
}

module.exports = { redisClient, connect, disconnect }; 