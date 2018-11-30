import React from 'react';


const WaitingRoom = (props) => (
  <div className="WaitingRoom">
    Waiting for next players...
    Send the code {props.gameId} to your friends
  </div>
)

export default WaitingRoom;