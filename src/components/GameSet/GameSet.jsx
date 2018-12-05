import React from 'react';
import './GameSet.css';
import Chat from '../Chat/Chat';
import Instructions from '../../pages/Instructions/Instructions';
import Dice from '../Dice/Dice';

const GameSet = ({game, user, colors}) => {
    return (
        <div className="GameSet">
            <Dice 
                user={user}
                game={game}/>
            <div className="GameSet-players">
                <h4>Players online:</h4>
                <ul> 
                    {game.players.map((player, index) =>
                        <div style={{display: 'flex'}}> 
                            <div className="GameSet-players-color" style={{backgroundColor: colors[index]}} />
                            <li style={{color: colors[index], fontWeight: 'bold'}}>{player.name} </li> 
                        </div>)}
                </ul>
            </div>
            <hr/>
            <div>
                <Instructions />
                <hr/>
                <Chat user={user}/>
            </div>
        </div>
    )
}

export default GameSet;