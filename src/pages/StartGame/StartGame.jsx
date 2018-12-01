import React from 'react';
import Header from '../../components/Header/Header';
import './StartGame.css'
import gameService from '../../utils/gameService';


const StartGame = ({game}) => (
  <div>
    <Header />
    <div className="StartGame">
      <h1>Players on the room:</h1>
      <ul>{game.players.map((player) => <li className="StartGame-list">{player.name}</li>)}</ul>
      <button className="Home-Btn" onClick={() => gameService.startGame(game._id)}>START GAME</button>
    </div>
  </div>
)

export default StartGame;


