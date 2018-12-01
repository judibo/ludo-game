import React from 'react';

const Dice = (props) => {
  let playerTurn = props.players ?
    <span>
    <img src="/imgs/dice-1.png" id="dice" alt="Dice" style={{border: '1px solid black', borderRadius: 5}} onClick={props.handleDiceRoll}/>
  </span>
    : <div>Wait for the other player turn</div>;
  return (
    <div>
        {playerTurn}
    </div>
  );
};


export default Dice;