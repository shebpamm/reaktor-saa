var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var BUILD_DIR = path.resolve(__dirname, 'client/js/build/');
var SRC_DIR = path.resolve(__dirname, 'client/js/source/');

var config = {
  entry: glob.sync('./client/js/source/*.jsx'),

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  output: {
    libraryTarget: 'umd',
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
};

module.exports = config;
