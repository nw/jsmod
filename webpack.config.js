var webpack = require('webpack')
, path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    math: './client/math',
    markdown: './client/markdown',
    duration: './client/duration',
    vendor: ['jquery', 'marked', 'lodash', 'moment']
  },

  output: {
    path: path.join(__dirname, "public/js")
  , filename: "[name].js"
  }
  ,
  module: {
    loaders: [
      { test: /\.js$/, loader: "source-map-loader"}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor.js', 'common.js'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin()
  ]
}
