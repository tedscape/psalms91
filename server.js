/* eslint-disable */
var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config');
var WebpackDevServer = require('webpack-dev-server');
var app = express();
var compiler = webpack(config);

/*app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3003, 'localhost', function(err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log('Listening at http://0.0.0.0:3003');
});
*/
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3003, '0.0.0.0', function (err, result) {
  if (err) {
    return console.log(err);
  }

  console.log('Listening at http://localhost:3003/');
});