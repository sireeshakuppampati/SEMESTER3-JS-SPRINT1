const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Implement login logic here
  res.json({ message: 'Login route reached', username, password });
});

module.exports = router;
