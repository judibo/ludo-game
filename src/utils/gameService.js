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
function startGame(code) {
    socket.emit('startGame', code);
}
function rollDice(user) {
    socket.emit('rollDice', user);
}