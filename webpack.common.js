const path = require('path');

module.exports = {
  entry: {
    app: './src/mm-animations.js',
  },
  output: {
    filename: 'mm-animations.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
  },
};
