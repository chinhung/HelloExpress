var express = require('express');
var app = express();
var addCatPeter = require('./lib/db');

app.get('/', function (req, res) {
    addCatPeter();
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});