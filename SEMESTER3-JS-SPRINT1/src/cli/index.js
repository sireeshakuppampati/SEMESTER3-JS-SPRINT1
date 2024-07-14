// src/cli/index.js
const init = require('./commands/init');
const viewConfig = require('./commands/viewConfig');
const updateConfig = require('./commands/updateConfig');
const resetConfig = require('./commands/resetConfig');
const generateToken = require('./commands/generateToken');
const updateUser = require('./commands/updateUser');
const searchUser = require('./commands/searchUser');

const args = process.argv.slice(2);

switch (args[0]) {
  case 'init':
    init();
    break;
  case 'viewConfig':
    viewConfig();
    break;
  case 'updateConfig':
    updateConfig(args[1], args[2]);
    break;
  case 'resetConfig':
    resetConfig();
    break;
  case 'generateToken':
    generateToken(args[1]);
    break;
  case 'updateUser':
    updateUser(args[1], args[2]);
    break;
  case 'searchUser':
    searchUser(args[1]);
    break;
  default:
    console.log('Command not found.');
}
