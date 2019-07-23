const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HtmlPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  watch: true,
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  output: {
    path: __dirname + 'dist',
    publicPath: '/',
    filename: 'index.js',
    chunkFilename: '[name].js',
  },
  resolve: {
    extensions: ['.json', '.js', '.vue'],
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
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
  module: {
    rules: [
      {
        test: /\.vue?$/,
        loader: 'vue-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
      },
      {
        test: /\.js?$/,
        include: [path.resolve(__dirname, 'src')],
        exclude: [path.resolve(__dirname, 'node_modules')],
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
            : MiniCSSExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlPlugin({
      template: 'public/index.html',
      chunksSortMode: 'dependency',
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin(),
  ],
}
