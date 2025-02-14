const request = require('supertest');  
const app = require('../app');  
const jwt = require('jsonwebtoken');
const db = require('../models');
const redisClient = require('../redisClient');

jest.mock('../socket', () => ({
  getIo: jest.fn(() => ({
    emit: jest.fn(),
  })),
}));

const secret = process.env.JWT_SECRET;
const payload = {
  userId: '123e4567-e89b-12d3-a456-426614174001',
};

const token = jwt.sign(payload, secret, { expiresIn: '1h' });

beforeAll(async () => {
  await db.sequelize.authenticate();
  await db.sequelize.sync();
});

describe('GET /trade-history/:userId', () => {  
  it('should return paginated trade history for a user', async () => {  
    const res = await request(app)
      .get(`/trade-history/${payload.userId}?page=1&limit=2`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(200);  
    expect(res.body.trades).toBeDefined();  
  });

  it('should return 401 if no token is provided', async () => {
    const res = await request(app)
      .get(`/trade-history/${payload.userId}`)
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Unauthorized');
  });

});

describe('POST /trade-history', () => {

  const newTrade = {
    user_id: '123e4567-e89b-12d3-a456-426614174001',
    trade_type: 'BUY',
    symbol: 'AAPL',
    amount: 10,
    price: 150.00,
  };

  it('should create a new trade', async () => {
    const res = await request(app)
      .post('/trade-history')
      .set('Authorization', `Bearer ${token}`)
      .send(newTrade);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id');
    expect(res.body.user_id).toBe(newTrade.user_id);
    expect(res.body.trade_type).toBe(newTrade.trade_type);
    expect(res.body.symbol).toBe(newTrade.symbol);
    expect(res.body.amount).toBe(newTrade.amount);
    expect(res.body.price).toBe(newTrade.price);
  });

  it('should return 401 if no token is provided', async () => {
    const res = await request(app)
      .post('/trade-history')
      .send(newTrade);

    expect(res.status).toBe(401);
    expect(res.body.error).toBe('Unauthorized');
  });
});

describe('GET /trade-history/:userId/:tradeId', () => {
  it('should return a specific trade by ID for a user', async () => {
    const tradeId = 'ca9ae447-e131-4a53-bd9f-d89310dba9a1'; // Replace with a valid trade ID from your database
    const res = await request(app)
      .get(`/trade-history/${payload.userId}/${tradeId}`)
      .set('Authorization', `Bearer ${token}`);
    
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('id', tradeId);
  });

  it('should return 404 if trade is not found', async () => {
    const tradeId = 'ca9ae447-e131-4a53-bd9f-d89310dba9af';
    const res = await request(app)
      .get(`/trade-history/${payload.userId}/${tradeId}`)
      .set('Authorization', `Bearer ${token}`);
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('error', 'Trade not found');
  });

  it('should return 401 if no token is provided', async () => {
    const tradeId = 'ca9ae447-e131-4a53-bd9f-d89310dba9af'; // Replace with a valid trade ID from your database
    const res = await request(app)
      .get(`/trade-history/${payload.userId}/${tradeId}`);
    
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty('error', 'Unauthorized');
  });
});

afterAll(async () => {
  await redisClient.disconnect();
});