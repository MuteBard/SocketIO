//this is an alias of express
const express = require('express');
//this is an object of express
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function(req, res) {
    res.send('<h1>Test</h1>')
});






io.on('connection', function(socket) {
    console.log('a user connected');

    socket.on('draw', function(data) {
        console.log(data);


        socket.broadcast.emit('draw', data);
    });




    socket.on('disconnect', function() {
        console.log('a user disconnected');
    })
})

http.listen(3000, function() {
    console.log('listening on *: 3000')
});
