const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  watch: true,
  devServer: {
    contentBase: path.resolve(__dirname + '/dist'),
    compress: true,
    historyApiFallback: true,
    hot: true,
    open: true,
    overlay: true,
    port: 8000,
    stats: {
      normal: true,
    },
  },
});
