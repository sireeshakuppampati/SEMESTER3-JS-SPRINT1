const fs = require('fs');
const path = require('path');

const updateConfig = (key, value) => {
  // Construct the path to the config file
  const configPath = path.join(__dirname, '..', '..', 'config', 'config.json');

  // Check if the config file exists
  if (fs.existsSync(configPath)) {
    // Read the contents of the config file
    const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

    // Update the specified key with the new value
    config[key] = value;

    // Write the updated config back to the file
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));

    // Log success message
    console.log(`Updated ${key} to ${value} in configuration.`);
  } else {
    // Log error message if config file doesn't exist
    console.log('Configuration file not found.');
  }
};

module.exports = updateConfig;
