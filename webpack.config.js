const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/src/index.jsx'),
    output: {
        path: path.join(__dirname, '/build/static/js'),
        filename: 'application.js',
    },

    module: {
        rules: [{
            test: /\.jsx?$/,
            include: path.join(__dirname, '/src'),
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            query: {
                presets: ['@babel/env', '@babel/react']
            }
        }, {
            test: /\.css$/,
            exclude: /(node_modules)/,
            loaders: ['style-loader','css-loader']
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /(node_modules)/,
            loader: 'file-loader',
            options: {}
        }],
    },

    resolve: {
        extensions: ['.jsx', '.js', '.json', '.css']
    },

    watch: true
};