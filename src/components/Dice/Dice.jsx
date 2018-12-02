import React from 'react';

const Dice = ({game, user, handleDiceRoll}) => {
  let playerIdx = game.players.findIndex(player => player.id === user._id)
  let playerTurn = ( game.playerIndex === playerIdx)?
    <span>
    <img src="/imgs/dice-1.png" id="dice" alt="Dice" style={{border: '1px solid black', borderRadius: 5}} onClick={handleDiceRoll}/>
  </span>
    : <div>Wait for the other player turn {playerIdx}</div>;
  return (
    <div>
        {playerTurn}
    </div>
  );
};


export default Dice;

