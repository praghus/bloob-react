var path = require('path');
var express = require('express');
var webpack = require('webpack');
var favicon = require('serve-favicon');
var config = require('./webpack.config.dev');
var compiler = webpack(config);
var app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use(favicon(path.join(__dirname,'favicon.ico')));
app.use('/static', express.static('public'));
app.use("/assets", express.static(__dirname + '/src/assets'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:3000');
});