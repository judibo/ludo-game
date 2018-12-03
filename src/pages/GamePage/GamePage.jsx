import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import './GamePage.css';
import GameSet from '../../components/GameSet/GameSet';


const GamePage = ({game, user, colors}) => (
  <div className="GamePage">
    <GameBoard
      game={game}
      user={user}
      colors={colors}
      />
    <GameSet 
      game={game}
      user={user}
      colors={colors}
      />
  </div>
)

export default GamePage;