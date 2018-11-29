module.exports = function(httpServer) {

    const io = require('socket.io')(httpServer);
    
    io.on('connection', function(socket) {
    
      socket.on('chat', function(chat) {
        io.emit('chat', chat);
      });
    
    });
  
  
  };
  