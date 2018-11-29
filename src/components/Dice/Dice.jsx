import React from 'react';

const Dice = (props) => (
  <span>
    <img src="/imgs/dice-6.png" alt="Dice" style={{border: '1px solid black', borderRadius: 5}} onClick={props.handleDiceRoll}/>
    {/* <img src={`/imgs/dice-${randomNumber}.png`} alt="Dice" style={{border: '1px solid black', borderRadius: 5}} onClick={props.handleDiceRoll}/> */}
  </span>
)

export default Dice;