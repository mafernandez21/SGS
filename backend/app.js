var config = require ('./config/config');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var routes = require('./routes/routes');

app.listen(config.app.port, function () {
  console.log('Example app listening on port '+config.app.port);
});

app.use('*',bodyParser.json());
app.use('*',bodyParser.urlencoded({extended: true})); 


routes(app);

app.route(routes);

