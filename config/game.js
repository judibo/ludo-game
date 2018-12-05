const Game = require('../models/game');

module.exports = {
  createPlayer,
  checkIfMoveAvailable,
  getPieceAtPosition,
  movePiece,
  resetPiece,
  computeNextPos,
}

const lookup = [
  {firstPosition: 0, lastPosition: 50},
  {firstPosition: 13, lastPosition: 11},
  {firstPosition: 26, lastPosition: 24},
  {firstPosition: 39, lastPosition: 37},
];

function createPlayer(game, user) {
  game.players.push({
    name: user.name,
    id: user._id,
  });
  var playerIdx = game.players.length - 1;
  for (i = 0; i < 4; i++) {
    game.players[playerIdx].pieces.push({ player: playerIdx });
  };
}

function getPieceAtPosition(game, position) {
  for (let i = 0; i < game.players.length; i++) {
    let player = game.players[i];
    let piece = player.pieces.find(piece => piece.position === position);
    if (piece) return piece;
  }
  return null;
}

function computeNextPos(playerIndex, curPos, dice) {
  let tempNext = curPos + dice;
  let lastPos = lookup[playerIndex].lastPosition;
  if(curPos < lastPosition && tempNext > lastPosition)  {
      //Check safe lane
  }  else {
      tempNext = tempNext % 52;
      let otherPiece = getPieceAtPosition(tempNext);
  }
  return {valid: true, isSafe: false, position: curPos}
}

function checkIfMoveAvailable(game) {
  for (let i = 0; i < game.players[game.playerIndex].pieces.length; i++){
    let p = game.players[game.playerIndex].pieces[i];
    let validMove = checkIfMoveValid(game, p);
    if (validMove) return true;
  }
  game.playerIndex = (++game.playerIndex) % game.players.length;
  game.waitingToMove = false;
  return false;
}

function checkIfMoveValid(game, p) {
    let nextPosition = p.position + game.dice;
    if (!p.atHome && (newPosition !== getPieceAtPosition(game, nextPosition))) {
      var newPosition = nextPosition;
      game.waitingToMove = true;
      return true;
    } else if (p.atHome && game.dice === 6 && !getPieceAtPosition(game, lookup[game.playerIndex].firstPosition)) {
      game.waitingToMove = true;
      return true;
    }
    return false;
}

function movePiece(game, piece) {
  var playerPiece = game.players[game.playerIndex].pieces.find(p => p._id.equals(piece._id));
  if (playerPiece.atHome && game.dice === 6 && !getPieceAtPosition(game, lookup[game.playerIndex].firstPosition)) {
    playerPiece.position = lookup[game.playerIndex].firstPosition;
    playerPiece.atHome = false;
    game.waitingToMove = false;
  } else if (!playerPiece.atHome) {
    playerPiece.position += game.dice;
    game.playerIndex = (++game.playerIndex) % game.players.length;
    game.waitingToMove = false;
  } 
}

function resetPiece(game, piece) {
  var playerPiece = game.players[game.playerIndex].pieces.find(p => p._id.equals(piece._id));
  playerPiece.position = null;
  playerPiece.atHome = true;
}