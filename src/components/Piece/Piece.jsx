import React from 'react';
import './Piece.css';
import gameService from '../../utils/gameService';


const Piece = ({piece, color}) => {
  return (
    <div className="Piece">
      <div className="Piece-color" 
                style={{backgroundColor: color}}
                onClick={() => gameService.handleMovePosition(piece._id)}/>
    </div>
  );
}
export default Piece;