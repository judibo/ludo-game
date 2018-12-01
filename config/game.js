const Game = require('../models/game');

module.exports = {
    rollDice,
    setPieceOnTrack,
    movePiece
}

function rollDice(req, res) {
    var game = games[roomId];
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    game.dice = randomNumber;
    //if rolled 6, keep dice enabled for user.
} 

// Remove the piece of House and set on the 1st square on the track.
function setPieceOnTrack(req, res) {
    var quarter = Math.floor(game.playerIndex * 13)
    game.piece.position = quarter;
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