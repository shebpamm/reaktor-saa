var webpack = require('webpack');
var path = require('path');
var glob = require('glob');

var BUILD_DIR = path.resolve(__dirname, 'client/js/build');
var SRC_DIR = path.resolve(__dirname, 'client/js/source/');

var config = {
  entry: {
    UI : [SRC_DIR + 'menu_animations.jsx', SRC_DIR + 'UIHandle.jsx'],
    components : [SRC_DIR + 'addForm.jsx', SRC_DIR + 'container.jsx', SRC_DIR + 'header.jsx', SRC_DIR + 'header.jsx', SRC_DIR + 'list.jsx', SRC_DIR + 'listRow.jsx', SRC_DIR + 'statRow.jsx']
  },

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
    filename: '[name].js'
  }
};

module.exports = config;
