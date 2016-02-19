
var webpack = require('webpack');
module.exports = {
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "babel-loader",
      query: {
        presets: ['es2015']
      }
    }]
  },
  entry: {
    a: "./app/index.js",
    vendor: ['angular']
  },
  output: {
    // filename: './app/bundle.js'
    path:"app",
    filename: '[name].bundle.js'
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json']
  },
  plugins: [

  ]
};
