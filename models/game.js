var mongoose = require('mongoose');

var pieceSchema = new mongoose.Schema({
  player: Number,
  position: {type: Number, default: null},  // 0 thru 51
  isSafe: {type: Boolean, default: false},
  atHome: {type: Boolean, default: true},
  safePosition: {type: Number, default: 0}, // inside the safe track, to calculate the number needed to roll on die.
});

var playerSchema = new mongoose.Schema({
  name: String,
  id: String,
  color: String,
  pieces: [pieceSchema],
  score: {type: Number, default: 0},
  rolls: [Number]
});

var gameSchema = new mongoose.Schema({
  players: [playerSchema],
  playerIndex: {type: Number, default: 0},
  gameInPlay: {type: Boolean, default: false},
  dice: {type:Number, default: 0},
  waitingToMove: {type: Boolean, default: false},  
  }, {
    timestamps: true
});

  
module.exports = mongoose.model('Game', gameSchema);