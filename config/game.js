const Game = require('../models/game');

module.exports = {
    rollDice,
    setPieceOnTrack,
    movePiece,
    resetPiece,
    createPieces
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
    io.to(game.id).emit('gameData', game);
    game.save();
} 

// Remove the piece of House and set on the 1st square on the track.
function setPieceOnTrack(req, res) {
    var quarter = Math.floor(game.playerIndex * 13)
    game.piece[idx].position = quarter;
}

function movePiece(req, res) {
    if (!game.piece.atHome && !game.piece.isSafe){ //check if piece is available to move
        game.piece.position += game.dice;
    } else if(!game.piece.atHome && game.piece.isSafe) {
        //the piece has to take the exact number on dice to enter the center (endGame) 
    } else {
        return playerIndex++; // pass the turner to the next user
    }
}

function resetPiece(req, res) {
    // if game.piece.position.playerIndex === game.piece.position
    // return game.piece.position = null && game.piece.atHome = true
}