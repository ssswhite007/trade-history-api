require('dotenv').config();
const { getIo } = require('../socket'); // Adjust the path as necessary
const tradeHistoryService = require('../services/tradeHistoryService');
const { v4: uuidv4 } = require('uuid');

jest.mock('../socket', () => ({
  getIo: jest.fn(),
}));

describe('tradeHistoryService', () => {
  let ioMock;

  beforeEach(() => {
    ioMock = {
      emit: jest.fn(),
    };
    getIo.mockReturnValue(ioMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should emit tradeUpdate event with trade data', async () => {
    const trade = {
      id: uuidv4(),
      user_id: '123e4567-e89b-12d3-a456-426614174001',
      trade_type: 'BUY',
      symbol: 'AAPL',
      amount: 10,
      price: 150.00
    };
    
    await tradeHistoryService.createTrade(trade);

    expect(ioMock.emit).toHaveBeenCalledWith(
      'tradeUpdate',
      expect.objectContaining({
        id: trade.id,
        user_id: trade.user_id,
        trade_type: trade.trade_type,
        symbol: trade.symbol,
        amount: trade.amount,
        price: trade.price,
      })
    );
  });
});