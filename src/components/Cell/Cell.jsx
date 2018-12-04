import React from 'react';
import './Cell.css';
import gameService from '../../utils/gameService';

const Cell = ({position, game, colors}) => {
  let piece;
  if (game) piece = gameService.getPieceAtPosition(game, position);
  console.log(piece)
  return (
    <div className="Cell">
      {/* {game && <div className="Cell-color" style={{backgroundColor: 'grey'}}/> } */}
      {game && piece && <div className="Cell-color" style={{backgroundColor: colors[piece.player]}}/> }
    </div>
    );
  }
    
export default Cell;