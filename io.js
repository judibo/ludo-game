const Game = require('./models/game');
const board = require('./config/game');
let io;
var games = {};

module.exports = {
  
  init: function(httpServer) {
    io = require('socket.io')(httpServer);
    io.on('connection', function(socket) {

      socket.on('chat', function(chat) {
        io.emit('chat', chat);
      });

      socket.on('getActiveGame', function(userId) {
        var game = Object.values(games).find(g => g.players.some(p => p.id === userId));
        if (game) {
          socket.gameId = game._id;
          socket.join(game._id);
        }
        io.emit('gameData', game);
      });
      
      socket.on('createGame', function(user) {
        var game = new Game();
        game.players.push({
          name: user.name,
          id: user._id,
          role: 'Host',
        });
        game.save(function(err) {
          socket.gameId = game.id;
          socket.join(game.id);
          io.to(game.id).emit('gameData', game);
          games[game._id] = game;
        });
      });
      
      socket.on('joinGame', function(user, roomId) {
        var game = games[roomId];
        game.players.push({
          name: user.name,
          id: user._id,
          role: 'Player',
        });
        socket.join(roomId);
        if (game.players.length === 4) game.gameInPlay = true;
        io.emit('gameData', game);
        game.save();
      });

      socket.on('startGame', function(roomId) {
        var game = games[roomId];
        game.gameInPlay = true;
        io.emit('gameData', game);
        game.save();
      });
      
      socket.on('rollDice', function() {
        var game = games[roomId];
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        game.dice = randomNumber;
        io.emit('gameData', game);
        game.save();
      });
      socket.on('makeMove', function() {
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        io.emit('gameData', game);
        game.save();
      });
    })
  },
  
  getIo: function() {return io}

};