const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlPlugin = require('html-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlPlugin({
            title: 'Production',
            template: 'public/index.html',
            chunksSortMode: 'dependency'
        }),
    ],
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
});