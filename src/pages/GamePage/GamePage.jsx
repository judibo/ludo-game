import React from 'react';
import GameBoard from '../../components/GameBoard/GameBoard';
import Chat from '../../components/Chat/Chat';
import './GamePage.css';


const GamePage = (props) => (
  <div className="GamePage">
    <GameBoard />
    <Chat user={props.user}/>
  </div>
)

export default GamePage;