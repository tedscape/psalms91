var webpack = require('webpack');
var path = require('path');

//In Node.js, __dirname is always the directory in which the currently executing script resides

var BUILD_DIR = path.resolve(__dirname, './public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {

    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        './src/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
        publicPath: '/public/'

    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: '/node_modules/',
            loaders: ['react-hot', 'babel'],
            include: APP_DIR

        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]


};

module.exports = config;