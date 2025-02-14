const TradeHistory = require('../models/tradeHistory');
const { getIo } = require('../socket');
const { redisClient, connect } = require('../redisClient');

exports.createTrade = async (tradeData) => {
  const trade = await TradeHistory.create(tradeData);
  const io = getIo();
  io.emit('tradeUpdate', trade);
  return trade;
};  

exports.getUserTrades = async (userId, page, limit) => {
  await connect(); // Ensure the client is connected
  const cacheKey = `user:${userId}:trades:page:${page}:limit:${limit}`;
  const cachedTrades = await redisClient.get(cacheKey);

  if (cachedTrades) {
    return JSON.parse(cachedTrades);
  }

  const offset = (page - 1) * limit;
  const { count, rows } = await TradeHistory.findAndCountAll({
    where: { user_id: userId },
    offset,
    limit,
  });

  const result = { total: count, trades: rows };
  await redisClient.set(cacheKey, JSON.stringify(result), { EX: 3600 }); // Cache for 1 hour

  return result;
};  

exports.getTradeById = async (tradeId) => {  
  return TradeHistory.findByPk(tradeId);  
};