import React from 'react';
import './WaitingRoom.css';
import Header from '../../components/Header/Header';


const WaitingRoom = (props) => (
  <div>
    <Header />
    <div className="WaitingRoom">
      <h1>Waiting for next players...</h1>
      <h3>Invite your friends to join the game with the code:</h3>
      <h2 className="WaitingRoom-Code">{props.game._id}</h2>
    </div>
  </div>
)

export default WaitingRoom;