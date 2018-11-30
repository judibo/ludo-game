import React from 'react';
import './GameSet.css';
import Chat from '../Chat/Chat';
import Instructions from '../../pages/Instructions/Instructions';

const GameSet = (props) => (
    <div className="GameSet">
        <div>
            <ul> Players on the room:
            {props.game.players.map((player) => <li className="StartGame-list">{player.name}</li>)}
            </ul>
        </div>
        <div>
            <Instructions />
            <Chat user={props.user}/>
        </div>
    </div>
)

export default GameSet;