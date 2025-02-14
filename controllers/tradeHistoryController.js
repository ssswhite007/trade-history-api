// Import the TradeHistoryService to handle trade-related operations
const TradeHistoryService = require('../services/tradeHistoryService');

/**
 * Controller to handle the creation of a new trade
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.createTrade = async (req, res) => {
  try {
    // Call the service to create a new trade with the request body data
    const trade = await TradeHistoryService.createTrade(req.body);
    // Respond with the created trade data
    res.status(200).json(trade);
  } catch (error) {
    // Log the error and respond with a 500 status code
    console.error('Error creating trade:', error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to get all trades for a user with pagination
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getUserTrades = async (req, res) => {
  // Extract page and limit from query parameters, with default values
  const { page = 1, limit = 10 } = req.query;
  try {
    // Call the service to get trades for the user with pagination
    const trades = await TradeHistoryService.getUserTrades(req.params.userId, page, limit);
    // Respond with the list of trades
    res.status(200).json(trades);
  } catch (error) {
    // Log the error and respond with a 500 status code
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

/**
 * Controller to get a specific trade by its ID
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 */
exports.getTradeById = async (req, res) => {
  try {
    // Call the service to get a trade by its ID
    const trade = await TradeHistoryService.getTradeById(req.params.tradeId);
    // If the trade is not found, respond with a 404 status code
    if (!trade) return res.status(404).json({ error: 'Trade not found' });
    // Respond with the trade data
    res.status(200).json(trade);
  } catch (error) {
    // Respond with a 500 status code in case of an error
    res.status(500).json({ error: error.message });
  }
};