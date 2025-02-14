const TradeHistoryService = require('../services/tradeHistoryService');  

exports.createTrade = async (req, res) => {  
  try {  
    const trade = await TradeHistoryService.createTrade(req.body);  
    res.status(200).json(trade);  
  } catch (error) {  
    console.error('Error creating trade:', error);  
    res.status(500).json({ error: error.message });  
  }  
};  

exports.getUserTrades = async (req, res) => {  
  const { page = 1, limit = 10 } = req.query;  
  try {  
    const trades = await TradeHistoryService.getUserTrades(req.params.userId, page, limit);  
    res.status(200).json(trades);  
  } catch (error) {  
    console.log(error);
    res.status(500).json({ error: error.message });  
  }  
};  

exports.getTradeById = async (req, res) => {  
  try {  
    const trade = await TradeHistoryService.getTradeById(req.params.tradeId);  
    if (!trade) return res.status(404).json({ error: 'Trade not found' });  
    res.status(200).json(trade);  
  } catch (error) {  
    res.status(500).json({ error: error.message });  
  }  
};