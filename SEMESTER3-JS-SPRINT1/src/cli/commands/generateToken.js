// generateToken.js
const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET || 'defaultSecret'; // Use environment variable or a default secret

const generateToken = (username) => {
  try {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    console.log(`Generated token for ${username}: ${token}`);
    return token;
  } catch (error) {
    console.error('Error generating token:', error.message);
    return null;
  }
};

module.exports = generateToken;
