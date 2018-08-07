/**
 * Created by meathill on 2017/7/18.
 */

const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config');
const prod = require('./config/prod');

config.mode = 'production';
config.devtool = false;
config.output.path = path.resolve(__dirname, './docs/js');
config.optimization = {
  minimizer: [
    new UglifyJSPlugin({
      cache: true,
      parallel: true,
      uglifyOptions: {
        ecma: 7,
        compress: {
          drop_console: true,
        },
      },
    }),
  ],
};
config.plugins = [
  new webpack.DefinePlugin(prod),
];

module.exports = config;
