var webpack = require('webpack');
var path = require('path');

//In Node.js, __dirname is always the directory in which the currently executing script resides

var BUILD_DIR = path.resolve(__dirname, './public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var config = {
    context: __dirname,
    entry:[
        'webpack-dev-server/client?http://localhost:3000/', // WebpackDevServer host and port
        'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
        APP_DIR + '/index.js'
        ],
    output: {
        path: BUILD_DIR,
        filename: 'app.js',
        publicPath: '/public/'

    },
    module: {
        loaders:[{
            test : /\.js$/,
            exclude:'/node_modules/',
            loaders:['react-hot','babel'],
            include :APP_DIR

        }]
    },
    /*plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]*/

};

module.exports = config;