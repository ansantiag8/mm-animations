const path = require('path');

module.exports = {
  entry: {
    app: './src/animations.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};
