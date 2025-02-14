const { DataTypes } = require('sequelize');  
const { sequelize } = require('./index');  

const TradeHistory = sequelize.define('TradeHistory', {  
  id: {  
    type: DataTypes.UUID,  
    primaryKey: true,  
    defaultValue: DataTypes.UUIDV4,  
  },  
  user_id: {  
    type: DataTypes.UUID,  
    allowNull: false,  
  },  
  trade_type: {  
    type: DataTypes.ENUM('BUY', 'SELL'),  
    allowNull: false,  
  },  
  symbol: {  
    type: DataTypes.STRING,  
    allowNull: false,  
  },  
  amount: {  
    type: DataTypes.FLOAT,  
    allowNull: false,  
  },  
  price: {  
    type: DataTypes.FLOAT,  
    allowNull: false,  
  },  
  timestamp: {  
    type: DataTypes.DATE,  
    allowNull: false,  
    defaultValue: DataTypes.NOW,  
  },  
  status: {  
    type: DataTypes.ENUM('SUCCESS', 'FAILED'),  
    defaultValue: 'SUCCESS',  
  },  
});  

module.exports = TradeHistory;