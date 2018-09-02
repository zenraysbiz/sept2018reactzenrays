const path = require('path');

module.exports = {
  mode: 'development', // Webpack v4
  entry: './src/es6/index.js',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-bundle.js'
  },
  module: {
    // Loaders
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  // plugins
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
