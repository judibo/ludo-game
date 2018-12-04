import React from 'react';
import './Piece.css';
import gameService from '../../utils/gameService';


const Piece = ({game, piece, color}) => {
  return (
    <div className="Piece">
      <div className="Piece-color" 
                style={{backgroundColor: game.waitingToMove ? 'white' : color}}
                onClick={() => gameService.handleMovePosition(piece._id)}/>
    </div>
  );
}
export default Piece;