import dotenv from 'dotenv';
dotenv.config({ path: '.env' });
import { getIo } from '../socket'; // Adjust the path as necessary
import { createTrade, getUserTrades, getTradeById } from '../services/tradeHistoryService';
import { v4 as uuidv4 } from 'uuid';

// Mock the socket module to prevent actual socket connections during tests
jest.mock('../socket', () => ({
  getIo: jest.fn(),
}));

// Test suite for tradeHistoryService
describe('tradeHistoryService', () => {
  let ioMock;

  // Setup a mock for the socket.io instance before each test
  beforeEach(() => {
    ioMock = {
      emit: jest.fn(),
    };
    getIo.mockReturnValue(ioMock);
  });

  // Clear all mocks after each test
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case for emitting a tradeUpdate event
  it('should emit tradeUpdate event with trade data', async () => {
    // Define a trade object with necessary properties
    const trade = {
      id: uuidv4(),
      user_id: '123e4567-e89b-12d3-a456-426614174001',
      trade_type: 'BUY',
      symbol: 'AAPL',
      amount: 10,
      price: 150.00
    };
    
    // Call the createTrade function from the service
    await createTrade(trade);

    // Assert that the emit function was called with the correct event and data
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