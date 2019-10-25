var path = require('path');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var VueLoaderPlugin = require('vue-loader/lib/plugin'); 
var htmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ],
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ],
            },
            {
                test: /\.(jpg|png|gif|bmp|jpeg)$/,
                use: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js"
        }
    },
    plugins: [
        // make sure to include the plugin for the magic
        new VueLoaderPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './index.html'),
            filename: 'index.html'
        })
    ],
    
};

module.exports = config;