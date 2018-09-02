console.log('File 1 Loaded');

var userName = 'Some random string 100 ';

document.getElementById('user-name').innerHTML = userName;

require('./file2');

module.exports = {
  userName
};
