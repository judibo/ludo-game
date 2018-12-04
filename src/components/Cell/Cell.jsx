import React from 'react';
import './Cell.css';
import gameService from '../../utils/gameService';

const Cell = ({position, game, colors}) => {
  let piece;
  if (game) piece = gameService.getPieceAtPosition(game, position);
  return (
    <div className="Cell">
      {game && <div className="Cell-color" style={{backgroundColor: 'grey'}}/> }
      {/* {game && <div style={{backgroundColor: colors[piece.player]}}/> } */}
    </div>
    );
  }
    
export default Cell;