import React from 'react';
import './GameBoard.css';
import Piece from '../Piece/Piece';

const GameBoard = ({game}) => {
    // let player1Pieces = game.pieces.filter(piece => piece.player === game.players[0].id);
    // let player2Pieces = game.pieces.filter(piece => piece.player === game.players[1].id);
    // let player3Pieces = game.pieces.filter(piece => piece.player === game.players[2].id);

    return (
        <div className="GameBoard">
            <div className="GameBoard-Row1">
                <div className="GameBoard-ColorHouse GameBoard-Red">
                    <div className="House-Pieces">
                        {/* {player1Pieces.map((piece) => <div className="Piece-color" style={{backgroundColor: 'red'}} ></div>)} */}
                        <Piece game={game}/>
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
                    {/* {player1Pieces.map((piece) => <div className="Piece-color" style={{backgroundColor: 'yellow'}} ></div>)} */}
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
                    <div className="House-Pieces">
                        {/* <Piece game={game}/> */}
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
                        {/* <Piece game={game}/> */}
                
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameBoard;
