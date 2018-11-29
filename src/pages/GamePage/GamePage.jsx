import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import './GamePage.css';
import GameSet from '../../components/GameSet/GameSet';


const GamePage = (props) => (
  <div className="GamePage">
    <GameBoard
      handleDiceRoll={props.handleDiceRoll}
      handlePieceClick={props.handlePieceClick}
    />
    <GameSet />
  </div>
)

export default GamePage;