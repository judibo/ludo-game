var mongoose = require('mongoose');

var playerSchema = new mongoose.Schema({
  // name: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  name: String,
  id: String,
  role: String,
});

var pieceSchema = new mongoose.Schema({
  player: Number,
  position: Number,
  isSafe: {type: Boolean, default: false},
  atHome: {type: Boolean, default: true},
  safePosition: {type: Number, default: 0},
});

var gameSchema = new mongoose.Schema({
    players: [playerSchema],
    playerIndex: {type: Number, default: 0},
    scoreBoard: {red:0, blue:0, green:0, yellow:0}, //keep track how many pieces the player has on the GameBoard-Center, to be able to check winner
    gameInPlay: {type: Boolean, default: false},
    dice: Number,
    pieces: [pieceSchema],
    
  }, {
    timestamps: true
  });

  
module.exports = mongoose.model('Game', gameSchema);

