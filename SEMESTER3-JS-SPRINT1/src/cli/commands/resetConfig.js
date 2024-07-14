// resetConfig.js
const fs = require('fs');
const path = require('path');

const resetConfig = () => {
  const defaultConfig = {
    database: {
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'your_database_user',
      password: process.env.DB_PASSWORD || 'your_database_password',
      name: process.env.DB_NAME || 'your_database_name',
    },
    server: {
      port: process.env.SERVER_PORT || 3000,
    },
  };

  const configPath = path.join(__dirname, '..', '..', 'config', 'config.json');
  fs.writeFileSync(configPath, JSON.stringify(defaultConfig, null, 2));

  console.log('Configuration has been reset to default values.');
};

module.exports = resetConfig;
