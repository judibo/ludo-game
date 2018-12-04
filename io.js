const Game = require('./models/game');
const board = require('./config/game');
// const gameService = require( './src/utils/gameService');
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
        });
        var playerIdx = game.players.length - 1;
        for (i = 0; i < 4; i++) {
          game.players[playerIdx].pieces.push({ player: playerIdx });
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
        });
        var playerIdx = game.players.length - 1;
        for (i = 0; i < 4; i++) {
          game.players[playerIdx].pieces.push({ player: playerIdx });
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
        board.checkIfMoveAvailable(game);
        // game.playerIndex = (++game.playerIndex) % game.players.length;
        io.to(game.id).emit('gameData', game);
        game.save();
      });
      
      socket.on('setPieceOnTrack', function() {
        var game = games[socket.gameId];
        game.players[game.playerIndex].piece[selPieceIdx].atHome = false;
        var firstPosition = Math.floor(game.playerIndex * 13);
        game.players[game.playerIndex].piece[selPieceIdx].position = firstPosition;
        io.to(game.id).emit('gameData', game);
        game.save();
      });

      // Move the selected piece inside the track
      socket.on('handleMovePosition', function() {
        var game = games[socket.gameId];
        game.players[game.playerIndex].pieces[selPieceIdx].position += game.dice;
        console.log(`Position: ${game.players[game.playerIndex].pieces[selPieceIdx].position}`);
        io.to(game.id).emit('gameData', game);
        game.save();
      });

    })
  },
  
  getIo: function() {return io}

};