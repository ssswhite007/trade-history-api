const express = require('express');  
const controller = require('../controllers/tradeHistoryController');  
const { authenticateJWT } = require('../middleware/authMiddleware');  

const router = express.Router();  

/**
 * @swagger
 * /trade-history:
 *   post:
 *     summary: Create a new trade
 *     tags: [Trade History]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: string
 *               trade_type:
 *                 type: string
 *                 enum: [BUY, SELL]
 *               symbol:
 *                 type: string
 *               amount:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Trade created successfully
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticateJWT, controller.createTrade);  

/**
 * @swagger
 * /trade-history/{userId}:
 *   get:
 *     summary: Get all trades for a user
 *     tags: [Trade History]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of trades per page
 *     responses:
 *       200:
 *         description: A list of trades
 *       401:
 *         description: Unauthorized
 */
router.get('/:userId', authenticateJWT, controller.getUserTrades);  

/**
 * @swagger
 * /trade-history/{userId}/{tradeId}:
 *   get:
 *     summary: Get a specific trade by ID for a user
 *     tags: [Trade History]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: The user's ID
 *       - in: path
 *         name: tradeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The trade ID
 *     responses:
 *       200:
 *         description: Trade details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Trade not found
 */
router.get('/:userId/:tradeId', authenticateJWT, controller.getTradeById);  

module.exports = router;