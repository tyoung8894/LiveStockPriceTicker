var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('A new WebSocket connection has been established');
});

//io.emit Socket.io tracks all connections internally 
//and emit sends a message to all these clients   
//data from server-->clients
//sends the stockprice variable to stock price update event
setInterval(function() {
    var stockprice = Math.floor(Math.random() * 100);
    io.emit('stock price update', stockprice);
}, 50);

http.listen(8000, function() {
    console.log('Listening on *:8000');
});