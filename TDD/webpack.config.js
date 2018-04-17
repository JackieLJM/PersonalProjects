// var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './test.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader?cacheDirectory=true',
                options: {
                    presets: ['env','react'],
                    plugins: [require('babel-plugin-transform-object-rest-spread')]
                }
            }
        }]
    }
}