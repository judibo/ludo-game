import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import './GamePage.css';
import GameSet from '../../components/GameSet/GameSet';


const GamePage = (props) => (
  <div className="GamePage">
    <GameBoard
      handlePieceClick={props.handlePieceClick}
    />
    <GameSet 
      game={props.game}
      user={props.user}
      handleDiceRoll={props.handleDiceRoll}
      />
  </div>
)

export default GamePage;