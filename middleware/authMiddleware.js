// Import the jsonwebtoken library for handling JWTs
import jwt from 'jsonwebtoken';

/**
 * Middleware to authenticate requests using JWT
 * @param {Object} req - The request object
 * @param {Object} res - The response object
 * @param {Function} next - The next middleware function
 */
export const authenticateJWT = (req, res, next) => {
  // Extract the token from the Authorization header
  const token = req.header('Authorization')?.split(' ')[1];

  // If no token is provided, respond with a 401 Unauthorized status
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  // Verify the token using the secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    // If the token is invalid, respond with a 403 Forbidden status
    if (err) return res.status(403).json({ error: 'Forbidden' });

    // Attach the user information to the request object
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  });
};