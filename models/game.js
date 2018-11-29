var mongoose = require('mongoose');

var gameSchema = new mongoose.Schema({
    player: [{type: mongoose.Schema.Types.ObjectId, ref: 'Pokemon'}],
    isGameActive: false,
    playerTurn: [],
    scoreBoard: null,
  }, {
    timestamps: true
  });

module.exports = mongoose.model('Game', gameSchema);




// as the game is player, msgs are being sent to the socket.io of what it was moved.
// the server watch the game
// in active game mantain in memory in an Array/object
// var games = {
// 680....: <gamedoc>
// 
// }