const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 1° Babel transpila o JSX para JS normal, 2° Webpack faz o bundle dos arquivos JS para um só.
module.exports = {
  entry: path.resolve(__dirname, 'transpiled', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle[hash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
    new CleanWebpackPlugin()
  ],
};
