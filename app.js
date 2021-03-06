var express = require('express');
var path = require('path');
var app = express().use(express.static(path.join(__dirname, 'dist')));
var server = app.listen(process.env.PORT || 3000);
var io = require('socket.io').listen(server);
var state = require('./app-sockets')(io);
app.get('/app/reset/hard', function () {
   process.exit();
});
console.log('Socket Polling App listening on %s', process.env.port || 3000);
module.exports = app;