const path = require('path');

module.exports = {
  entry: './file1_main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-bundle.js'
  }
};
