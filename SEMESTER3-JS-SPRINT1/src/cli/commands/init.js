const fs = require('fs');
const path = require('path');

const init = () => {
    // Implementation to create directories and configuration file
  console.log('Init command executed');

  const directories = ['config', 'logs', 'web'];
  const configContent = {
    database: {
      host: 'localhost',
      user: 'your_database_user',
      password: 'your_database_password',
      name: 'your_database_name',
    },
    server: {
      port: 3000,
    },
  };

  directories.forEach((dir) => {
    const dirPath = path.join(__dirname, '..', '..', dir);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`Created directory: ${dir}`);
    }
  });

  const configPath = path.join(__dirname, '..', '..', 'config', 'config.json');
  fs.writeFileSync(configPath, JSON.stringify(configContent, null, 2));
  console.log(`Created configuration file: ${configPath}`);
};

module.exports = init;
