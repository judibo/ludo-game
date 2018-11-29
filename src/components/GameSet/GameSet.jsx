import React from 'react';
import './GameSet.css';
import Chat from '../Chat/Chat';
import Instructions from '../../pages/Instructions/Instructions';

const GameSet = (props) => (
    <div className="GameSet">
        <div>
            <ul>
                <li className="Player-List"><strong>Player Red: Take your turn</strong></li>
                <li className="Player-List">Player Yellow: </li>
                <li className="Player-List">Player Blue: </li>
                <li className="Player-List">Player Green: </li>
            </ul>
        </div>
        <div>
            <Instructions />
            <Chat />
        </div>
    </div>
)

export default GameSet;