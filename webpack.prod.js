const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new HtmlPlugin({
      title: 'Production',
      template: 'public/index.html',
      chunksSortMode: 'dependency',
    }),
    new CleanWebpackPlugin(),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
});
