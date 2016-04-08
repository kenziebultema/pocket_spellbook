var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var db = require('./modules/database');
var index = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', index);

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function(){
    console.log('listening on port', app.get('port'));
});

module.exports = app;
