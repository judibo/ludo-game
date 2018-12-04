import socket from './socket';

export default {
    createGame,
    joinGame,
    startGame,
    rollDice,
    setPieceOnTrack,
    handleMovePosition,
    getPieceAtPosition,
    // computeNextPos
};

const lookup = [
    {firstPosition: 0, lastPosition: 50},
    {firstPosition: 13, lastPosition: 11},
    {firstPosition: 26, lastPosition: 24},
    {firstPosition: 39, lastPosition: 37},
];

function getPieceAtPosition(game, position) {
    for (let i = 0; i < game.players.length; i++) {
       let player = game.players[i];
       let piece = player.pieces.find(piece => piece.position === position);
       if (piece) return piece;
    }
    return null;
}

// function computeNextPos(playerIndex, curPos, dice) {
//     let tempNext = curPos + dice;
//     let lastPos = lookup[playerIndex].lastPosition;
//     if(curPos < lastPosition && tempNext > lastPosition)  {
//         //Check safe lane
//     }  else {
//         tempNext = tempNext % 52;
//         let otherPiece = getPieceAtPosition(tempNext);
//     }
//     return {valid: true, isSafe: false, position: curPos}
// }


function createGame(user) {
    socket.emit('createGame', user);
}

function joinGame(user, code) {
    socket.emit('joinGame', user, code);
}

function startGame() {
    socket.emit('startGame');
}

function rollDice() {
    socket.emit('rollDice');
}

function setPieceOnTrack() {
    socket.emit('setPieceOnTrack');
}

function handleMovePosition() {
    socket.emit('handleMovePosition');
}