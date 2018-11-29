import React from 'react';
import './GameBoard.css';
import Dice from '../Dice/Dice';
import Piece from '../Piece/Piece';

const GameBoard = (props) => (
    <div className="GameBoard">
        <div className="GameBoard-Row1">
            <div className="GameBoard-ColorHouse GameBoard-Red">
                <div>
                    <Dice handleDiceRoll={props.handleDiceRoll}/>
                </div>
                <div className="House-Pieces">
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                </div>
            </div>
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
            <div className="GameBoard-ColorHouse GameBoard-Yellow">
                <div className="House-Pieces">
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                </div>
                 <div>
                    <Dice handleDiceRoll={props.handleDiceRoll}/>
                </div>
            </div>
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
            <div className="GameBoard-Center" >
                <div id="top"></div>
                <div id="right"></div>
                <div id="bottom"></div>
                <div id="left"></div>
            </div>
            <div className="GameBoard-Col">
                <div></div>
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
                <div className="blue"></div>
                <div></div>
            </div>
        </div>
        <div className="GameBoard-Row3">
            <div className="GameBoard-ColorHouse GameBoard-Green">
                 <div>
                    <Dice handleDiceRoll={props.handleDiceRoll}/>
                </div>
                <div className="House-Pieces">
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                </div>
            </div>
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
            <div className="GameBoard-ColorHouse GameBoard-Blue">
                <div className="House-Pieces">
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                    <Piece handlePieceClick={props.handlePieceClick}/>
                </div>
                 <div>
                    <Dice handleDiceRoll={props.handleDiceRoll}/>
                </div>
            </div>
        </div>
    </div>
)

export default GameBoard;

