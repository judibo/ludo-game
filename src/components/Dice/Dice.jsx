import React from 'react';

const Dice = (props) => (
  <span>
    <img src="/imgs/dice-1.png" id="dice" alt="Dice" style={{border: '1px solid black', borderRadius: 5}} onClick={props.handleDiceRoll}/>
  </span>
)

export default Dice;