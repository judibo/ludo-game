import socket from './socket';

export default {
    createGame,
    joinGame,
    startGame,
    rollDice,
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