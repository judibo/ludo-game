import React from 'react';
import gameService from '../../utils/gameService';
import './Dice.css';


const Dice = ({game, user, handleDiceRoll}) => {
  let playerIdx = game.players.findIndex(player => player.id === user._id)
  let playerTurn = ( game.playerIndex === playerIdx)?
    <div>
      <h3>It's your turn!</h3>
      <div className="Dice-display">
      <button onClick={() => gameService.rollDice(game._id)}>Roll the dice</button> 
      <img src={`/imgs/dice-${game.dice}.png`} className="Dice" id="dice" alt="Dice"/>
      </div>
    </div>
    : <div>Wait for {game.players[game.playerIndex].name} take its turn</div>;
  return (
    <div>
        {playerTurn}
    </div>
  );
};


export default Dice;

