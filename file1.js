console.log('File 1 Loaded');

var userName = 'John';

document.getElementById('user-name').innerHTML = userName;

require('./file2');

module.exports = {
  userName
};
