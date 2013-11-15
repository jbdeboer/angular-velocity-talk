var express = require('express');

var oneYear = 86400000 * 364;

// Production server with compression and caching enabled.
var app = express()
    .use(express.logger('dev'))
    .use(express.compress())
    .use(slowness)
    .use(express.directory(__dirname + '/..'))
    .use(express.static(__dirname + '/..', {maxAge: oneYear }))
    .listen(3000);

console.log('Listening on http://localhost:3000/ for ' + __dirname);

function slowness(req, res, next) {
  setTimeout(function() { next(); }, 1700);
}
