const fs = require('fs');
const path = require('path');

const viewConfig = () => {
  // Construct the path to the config file
  const configPath = path.join(__dirname, '..', '..', 'config', 'config.json');

  // Check if the config file exists
  if (fs.existsSync(configPath)) {
    // Read the contents of the config file
    const config = fs.readFileSync(configPath, 'utf-8');

    // Log the current configuration
    console.log('Current Configuration:');
    console.log(config);
  } else {
    // Log error message if config file doesn't exist
    console.log('Configuration file not found.');
  }
};

module.exports = viewConfig;
