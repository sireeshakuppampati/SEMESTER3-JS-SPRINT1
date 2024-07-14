const { Pool } = require('pg');
const config = require('./config.json');

const pool = new Pool(config.dbConfig);

module.exports = pool;
