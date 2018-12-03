const Game = require('../models/game');

module.exports = {
  createPlayer,
  rollDice,
  checkIfMoveAvailable,
  setPieceOnTrack,
  movePiece,
  resetPiece,
  createPieces
}

function createPlayer(req, res) {
  game.players.push({
    name: user.name,
    id: user._id,
  });
  var playerIdx = game.players.length - 1;
  for (i = 0; i < 4; i++) {
    game.players[playerIdx].pieces.push({ player: playerIdx });
  };
}



function createPieces(req, res) {
    for (i = 0; i < 4; i++) {
        game.pieces.push({ player: user._id });
    };
}


function rollDice(req, res) {
    var game = games[socket.gameId];
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    game.dice = randomNumber;
    if (randomNumber != 6 && (game.playerIndex < game.players.length - 1)) {
        return game.playerIndex++;
    } else if (randomNumber != 6 && (game.playerIndex = game.players.length - 1)) {
        return game.playerIndex = 0
    } 
    // else { // if (randomNumber = 6) take a new roll
    //   console.log('hello');
    // }
    game.save();
} 



function checkIfMoveAvailable(req, res) {
  // case 1: !game.pieces[Idx].atHome;
  // case 1: game.dice === 6;
    // case 3: game.pieces[selPieceIdx].position != game.pieces[idx].position (same player)
}

// Remove the piece of House and set on the 1st square on the track.
function setPieceOnTrack(req, res) {
    game.piece[selPieceIdx].atHome = false;
    var firstPosition = Math.floor(game.playerIndex * 13)
    game.piece[selPieceIdx].position = firstPosition;
}

function movePiece(req, res) {
    if (!game.piece.atHome && !game.piece.isSafe){
        game.piece[selPieceIdx].position += game.dice;
    } else if(!game.piece.atHome && game.piece.isSafe) {
        //the piece has to take the exact number on dice to enter the center (endGame) 
    } else {
        // pass the turn to the next user
        if (game.playerIndex < game.players.length - 1) {
            game.playerIndex++;
         } else if (game.playerIndex = game.players.length - 1) {
             game.playerIndex = 0 
        }
    }
}


function resetPiece(req, res) {
    game.pieces[selPieceIdx].position = null;
    // if game.pieces[selPieceIdx].position === game.piece.position
    // return game.pieces[selPieceIdx].position = null && game.pieces[selPieceIdx].atHome = true
}