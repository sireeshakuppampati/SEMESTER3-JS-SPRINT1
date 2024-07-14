const fs = require('fs');
const path = require('path');

const searchUser = (query) => {
  const usersPath = path.join(__dirname, '..', '..', 'config', 'user.json');

  try {
    // Check if the file exists
    if (!fs.existsSync(usersPath)) {
      throw new Error('User file not found.');
    }

    // Read and parse the users data
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));

    // Search for the user
    let found = false;
    Object.keys(users).forEach(key => {
      const user = users[key];
      if (user.email === query || key === query) {
        console.log('User found:');
        console.log(user);
        found = true;
      }
    });

    if (!found) {
      console.log('User not found.');
    }

  } catch (err) {
    console.error('Error searching for user:', err.message);
  }
};

module.exports = searchUser;
