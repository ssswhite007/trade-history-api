require('dotenv').config();
const TradeHistory = require('../models/tradeHistory');

async function seedTradeHistory() {
  try {
    await TradeHistory.bulkCreate([
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a0',
        user_id: '123e4567-e89b-12d3-a456-426614174000',
        trade_type: 'BUY',
        symbol: 'AAPL',
        amount: 10,
        price: 150.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a1',
        user_id: '123e4567-e89b-12d3-a456-426614174001',
        trade_type: 'SELL',
        symbol: 'GOOGL',
        amount: 5,
        price: 2800.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a2',
        user_id: '123e4567-e89b-12d3-a456-426614174002',
        trade_type: 'BUY',
        symbol: 'MSFT',
        amount: 15,
        price: 300.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a3',
        user_id: '123e4567-e89b-12d3-a456-426614174003',
        trade_type: 'SELL',
        symbol: 'TSLA',
        amount: 8,
        price: 700.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a4',
        user_id: '123e4567-e89b-12d3-a456-426614174004',
        trade_type: 'BUY',
        symbol: 'AMZN',
        amount: 20,
        price: 3300.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a5',
        user_id: '123e4567-e89b-12d3-a456-426614174005',
        trade_type: 'SELL',
        symbol: 'NFLX',
        amount: 12,
        price: 550.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a6',
        user_id: '123e4567-e89b-12d3-a456-426614174006',
        trade_type: 'BUY',
        symbol: 'FB',
        amount: 25,
        price: 350.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a7',
        user_id: '123e4567-e89b-12d3-a456-426614174007',
        trade_type: 'SELL',
        symbol: 'NVDA',
        amount: 7,
        price: 600.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a8',
        user_id: '123e4567-e89b-12d3-a456-426614174008',
        trade_type: 'BUY',
        symbol: 'BABA',
        amount: 18,
        price: 200.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9a9',
        user_id: '123e4567-e89b-12d3-a456-426614174009',
        trade_type: 'SELL',
        symbol: 'ORCL',
        amount: 10,
        price: 90.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
      {
        id: 'ca9ae447-e131-4a53-bd9f-d89310dba9aa',
        user_id: '123e4567-e89b-12d3-a456-426614174010',
        trade_type: 'BUY',
        symbol: 'INTC',
        amount: 30,
        price: 50.00,
        timestamp: new Date(),
        status: 'SUCCESS',
      },
    ]);
    console.log('TradeHistory seed data inserted successfully.');
  } catch (error) {
    console.error('Error seeding TradeHistory data:', error);
  }
}

seedTradeHistory();