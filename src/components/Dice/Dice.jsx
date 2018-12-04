import React from 'react';
import gameService from '../../utils/gameService';
import './Dice.css';


const Dice = ({game, user}) => {
  let makeMove = game.dice === 6 ? <div>You got a 6!<br/>Bonus round</div> : null; 
  let playerIdx = game.players.findIndex(player => player.id === user._id)
  let playerTurn = ( game.playerIndex === playerIdx)?
    <div>
      <h3>It's your turn!</h3>
      <div className="Dice-display">
        <button onClick={() => gameService.rollDice(game._id)}>Roll the dice</button> 
        {makeMove}
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

