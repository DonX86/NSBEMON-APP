
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');

require('babel-core/register');
require('babel-polyfill');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // Since 'aws-sdk' is not compatible with webpack,
  // we exclude all node dependencies
  externals: [nodeExternals(), ['sqlite3', 'tedious', 'mysql2']],
  // Run babel on all .js files and skip those in node_modules
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new UglifyJSPlugin()],
};
