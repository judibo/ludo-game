import React from 'react';
import './GameSet.css';
import Chat from '../Chat/Chat';
import Instructions from '../../pages/Instructions/Instructions';
import Dice from '../Dice/Dice';

const GameSet = (props) => (
    <div className="GameSet">
        <Dice handleDiceRoll={props.handleDiceRoll}/>
        <div className="GameSet-players">
            <h4>Players online:</h4>
            <ul>
            {props.game.players.map((player) => <li className="StartGame-list">{player.name}</li>)}
            </ul>
        </div>
        <hr/>
        <div>
            <Instructions />
            <hr/>
            <Chat user={props.user}/>
        </div>
    </div>
)

export default GameSet;