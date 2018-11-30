import socket from './socket';

export default {
    createGame,
    joinGame,
    startGame,
};

function createGame(user) {
    socket.emit('createGame', user);
}
function joinGame(user, code) {
    socket.emit('joinGame', user, code);
}
function startGame(user) {
    socket.emit('startGame', user);
}