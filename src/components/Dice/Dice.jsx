import React from 'react';
import gameService from '../../utils/gameService';
import './Dice.css';


const Dice = ({game, user}) => {
  let makeMove = game.dice === 6 ? <div>You got a 6! Bonus roll</div> : null; 
  let playerIdx = game.players.findIndex(player => player.id === user._id)
  let playerTurn = ( game.playerIndex === playerIdx)?
    <div>
      <h3>It's your turn!</h3>
        {makeMove}
      <div className="Dice-display">
        <button onClick={() => gameService.rollDice(game._id)} disabled={game.waitingToMove}>Roll the dice</button> 
      </div>
    </div>
    : <div>Waiting for <strong>{game.players[game.playerIndex].name}</strong> take its turn</div>;
    return (
      <div>
      <img src={`/imgs/dice-${game.dice}.png`} className="Dice" id="dice" alt="Dice"/>
      {playerTurn}
    </div>
  );
};


export default Dice;

