const path = require('path');
const webpack = require('webpack');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: '',
    filename: 'js/index.js',
    chunkFilename: 'js/[name].[hash].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      vue$:
        process.env.NODE_ENV === 'development'
          ? 'vue/dist/vue.js'
          : 'vue/dist/vue.min.js',
      '@': path.resolve(__dirname + 'src/'),
    },
  },

  module: {
    rules: [
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        query: {
          presets: [
            [
              '@babel/env',
              {
                targets: {
                  browsers: 'last 2 chrome versions',
                },
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|ico|svg|jpg|gif|ttf|eot|svg|ttf|woff|woff2?)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'img',
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'public/index.html',
      chunksSortMode: 'dependency',
      favicon: 'public/assets/favicon.ico',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    }),
    new FriendlyErrorsPlugin(),
  ],
};
