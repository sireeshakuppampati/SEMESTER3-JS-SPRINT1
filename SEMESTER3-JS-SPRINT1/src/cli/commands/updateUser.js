const fs = require('fs');
const path = require('path');

const updateUser = (username, newEmail) => {
  const usersPath = path.join(__dirname, '..', '..', 'config', 'user.json');
  if (fs.existsSync(usersPath)) {
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
    if (users[username]) {
      users[username].email = newEmail;
      fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
      console.log(`Updated email for ${username} to ${newEmail}.`);
    } else {
      console.log(`User ${username} not found.`);
    }
  } else {
    console.log('User file not found.');
  }
};

module.exports = updateUser;
