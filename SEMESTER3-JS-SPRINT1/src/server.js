const express = require('express');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load configuration
const configPath = path.join(__dirname, 'config/config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// Serve static files from the 'web' directory
app.use(express.static(path.join(__dirname, 'web')));

// Endpoint to generate token
app.post('/generate-token', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }

  const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
  return res.json({ token });
});

// Endpoint to confirm user
app.post('/confirm-user', (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(400).json({ error: 'Token is required' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    return res.json({ message: 'User confirmed', username: decoded.username });
  } catch (err) {
    return res.status(400).json({ error: 'Invalid token' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
