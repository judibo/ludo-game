var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
  // name: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  name: String,
  id: String,
  role: String,
});

var gameSchema = new mongoose.Schema({
    players: [playerSchema],
    playerIndex: Number,
    scoreBoard: {red:0, blue:0, green:0, yellow:0}, //keep track how many pieces the player has on the GameBoard-Center, to be able to check winner
    gameInPlay: {type: Boolean, default: false},
    dice: Number
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