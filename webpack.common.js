const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'index'),
    plugins: [
        new VueLoaderPlugin(),
        new webpack.EnvironmentPlugin(['NODE_ENV']),
    ],
    resolve: {
        extensions: ['.json', '.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue?$/,
                loader: 'vue-loader',
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')]
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
                                    browsers: 'last 2 chrome versions'
                                }
                            }
                        ]
                    ]
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',

                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif|ttf|eot|svg|ttf|woff|woff2?)$/,
                use: ['file-loader']
            }
        ]
    },
    output: {
        path: path.resolve(__dirname + 'dist'),
        publicPath: '/',
        filename: 'index.js',
        chunkFilename: '[name].js'
    },
}
