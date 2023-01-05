
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'output'),
    filename: 'main.js',
  },
  mode: 'development',
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],

      },
    ],
  },
  optimization: {
    minimizer: [
      '...',
      new CssMinimizerPlugin(),
    ],
  },
};
