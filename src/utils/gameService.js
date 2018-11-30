import socket from './socket';

export default {
    createGame
};

function createGame(user) {
    socket.emit('createGame', user);
}