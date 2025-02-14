// Import the TradeHistory model for database operations
const TradeHistory = require('../models/tradeHistory');

// Import the function to get the socket.io instance
const { getIo } = require('../socket');

// Import the Redis client and connection function
const { redisClient, connect } = require('../redisClient');

/**
 * Create a new trade and emit a socket event
 * @param {Object} tradeData - The data for the new trade
 * @returns {Object} - The created trade
 */
exports.createTrade = async (tradeData) => {
  // Create a new trade record in the database
  const trade = await TradeHistory.create(tradeData);

  // Get the socket.io instance and emit a trade update event
  const io = getIo();
  io.emit('tradeUpdate', trade);

  // Return the created trade
  return trade;
};  

/**
 * Get all trades for a user with pagination and caching
 * @param {string} userId - The ID of the user
 * @param {number} page - The page number for pagination
 * @param {number} limit - The number of trades per page
 * @returns {Object} - An object containing the total count and the list of trades
 */
exports.getUserTrades = async (userId, page, limit) => {
  // Ensure the Redis client is connected
  await connect();

  // Generate a cache key for the user's trades
  const cacheKey = `user:${userId}:trades:page:${page}:limit:${limit}`;

  // Check if the trades are cached in Redis
  const cachedTrades = await redisClient.get(cacheKey);
  if (cachedTrades) {
    return JSON.parse(cachedTrades);
  }

  // Calculate the offset for pagination
  const offset = (page - 1) * limit;

  // Query the database for the user's trades
  const { count, rows } = await TradeHistory.findAndCountAll({
    where: { user_id: userId },
    offset,
    limit,
  });

  // Create a result object with the total count and trades
  const result = { total: count, trades: rows };

  // Cache the result in Redis for 1 hour
  await redisClient.set(cacheKey, JSON.stringify(result), { EX: 3600 });

  // Return the result
  return result;
};  

/**
 * Get a trade by its ID
 * @param {string} tradeId - The ID of the trade
 * @returns {Object|null} - The trade if found, otherwise null
 */
exports.getTradeById = async (tradeId) => {  
  // Find the trade by its primary key
  return TradeHistory.findByPk(tradeId);  
};