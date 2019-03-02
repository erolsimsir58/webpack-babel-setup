const path = require('path');

module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  output: {
    filename: 'dist.js',
    path: path.resolve(__dirname, 'dist')
  },
  mode: 'development',
  watch: true
};
