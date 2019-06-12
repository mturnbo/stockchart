const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    host: 'localhost',
    port: 3000,
    open: true
  },
  output: {
    sourceMapFilename: '[name].[hash].map'
  }
});
