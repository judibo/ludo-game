import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import './GamePage.css';
import GameSet from '../../components/GameSet/GameSet';


const GamePage = ({game, user}) => (
  <div className="GamePage">
    <GameBoard />
    <GameSet 
      game={game}
      user={user}
      />
  </div>
)

export default GamePage;