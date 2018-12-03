import socket from './socket';

export default {
    createGame,
    joinGame,
    startGame,
    rollDice,
    handleMovePosition,
};

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
function handleMovePosition() {
    socket.emit('handleMovePosition');
}