const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(req,res){
  // res.send('<h1>Hello</h1>');
  res.sendFile(__dirname+ '/public/index.html')
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });


  //emitting events
  socket.on('chat message', function(msg){
    console.log('message: ' + mstyhfgg);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000,function(){
  console.log('listening on *:3000');
});
