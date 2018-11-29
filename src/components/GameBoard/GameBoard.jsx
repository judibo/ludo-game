import React from 'react';
import './GameBoard.css';
import Dice from '../Dice/Dice';

const GameBoard = (props) => (
    <div className="GameBoard">
        <div className="GameBoard-Row1">
            <div className="GameBoard-Col GameBoard-ColorHouse GameBoard-Red">O O O O</div>
            <div className="GameBoard-Col">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="yellow"></div>
                <div className="yellow"></div>
                <div></div>
                <div className="yellow"></div>
                <div></div>
                <div></div>
                <div className="yellow"></div>
                <div></div>
                <div></div>
                <div className="yellow"></div>
                <div></div>
                <div></div>
                <div className="yellow"></div>
                <div></div>
            </div>
            <div className="GameBoard-Col GameBoard-ColorHouse GameBoard-Yellow">O O O O</div>
        </div>
        <div className="GameBoard-Row2">
            <div className="GameBoard-Col">
                <div></div>
                <div className="red"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="red"></div>
                <div className="red"></div>
                <div className="red"></div>
                <div className="red"></div>
                <div className="red"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="GameBoard-Col">GameBoard</div>
            <div className="GameBoard-Col">
                <div></div>
                <div className="blue"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className="blue"></div>
                <div className="blue"></div>
                <div className="blue"></div>
                <div className="blue"></div>
                <div className="blue"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="GameBoard-Row3">
            <div className="GameBoard-Col GameBoard-ColorHouse GameBoard-Green">O O O O</div>
            <div className="GameBoard-Col">
                <div></div>
                <div className="green"></div>
                <div></div>
                <div></div>
                <div className="green"></div>
                <div></div>
                <div></div>
                <div className="green"></div>
                <div></div>
                <div></div>
                <div className="green"></div>
                <div></div>
                <div className="green"></div>
                <div className="green"></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="GameBoard-Col GameBoard-ColorHouse GameBoard-Blue">O O O O</div>
        </div>
        <Dice />
    </div>
)

export default GameBoard;

