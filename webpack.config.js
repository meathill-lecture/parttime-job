/**
 * Created by meathill on 2017/7/18.
 */

const path = require('path');
const webpack = require('webpack');
const dev = require('./config/dev');

module.exports = {
  mode: 'development',
  context: path.resolve(__dirname, './app'),
  entry: {
    'main': './main.js'
  },
  output: {
    path: path.resolve(__dirname, './js'),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin(dev),
  ]
};
