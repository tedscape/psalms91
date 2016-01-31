var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');


//In Node.js, __dirname is always the directory in which the currently executing script resides

var BUILD_DIR = path.resolve(__dirname, './public/');
var APP_DIR = path.resolve(__dirname, 'src/');

var bootstrapPath = path.resolve(__dirname, './node_modules/bootstrap/dist/css/bootstrap.min.css');

var config = {

    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client',
        'bootstrap-loader',
        './src/index.js'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js',
        publicPath: '/public/'

    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loaders: ['react-hot', 'babel'],
                include: APP_DIR

            },
            {
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                test: /\.(woff2?|ttf|eot|svg)$/,
                loader: 'url?limit=10000'
            },
            {
                test: /bootstrap-sass\/assets\/javascripts\//,
                loader: 'imports?jQuery=jquery'
            },

        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    postcss: [ autoprefixer ]


};

module.exports = config;