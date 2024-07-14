const crypto = require('crypto');

const generateUniqueToken = (value) => {
  return crypto.createHash('crc32').update(value).digest('hex');
};

module.exports = { generateUniqueToken };
