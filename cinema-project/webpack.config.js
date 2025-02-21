const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
    movie: './src/movie.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  mode: 'development',
};