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
        for (i = 0; i < 4; i++) {
          game.pieces.push({ player: user._id });
        };
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
        for (i = 0; i < 4; i++) {
          game.pieces.push({ player: user._id });
        };
        socket.gameId = game.id;
        socket.join(roomId);
        if (game.players.length === 4) game.gameInPlay = true;
        io.to(game.id).emit('gameData', game);
        game.save();
      });

      socket.on('startGame', function() {
        var game = games[socket.gameId];
        game.gameInPlay = true;
        io.to(game.id).emit('gameData', game);
        game.save();
      });
      
      socket.on('rollDice', function() {
        var game = games[socket.gameId];
        var randomNumber = Math.floor(Math.random() * 6) + 1;
        game.dice = randomNumber;
        console.log(`Dice:${game.dice}`);
        if (game.dice != 6 && ( game.playerIndex < game.players.length - 1)) {
           game.playerIndex++;
        } else if (game.dice != 6 && (game.playerIndex = game.players.length - 1)) {
            game.playerIndex = 0
        } 
        else {
          let firstPosition = Math.floor(game.playerIndex * 13)  // place the piece on the 1st square of the track
          game.pieces[0].position = firstPosition;
          game.pieces[0].atHome = false
        }
        io.to(game.id).emit('gameData', game);
        game.save();
      });

      // Check if player can make a move
      socket.on('checkMoveAvailable', function() {
        var game = games[socket.gameId];
        // CODE HERE...
        io.to(game.id).emit('gameData', game);
        game.save();
      })


      // Move the selected piece inside the track
      socket.on('handleMovePosition', function() {
        var game = games[socket.gameId];
        // game.pieces[idx].position += game.dice; // Adds the value rolled on the dice to the position.
        game.pieces[0].position += game.dice;
        console.log(`Position: ${game.pieces[0].position}`);
        io.to(game.id).emit('gameData', game);
        game.save();
      });

    })
  },
  
  getIo: function() {return io}

};