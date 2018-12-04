import React from 'react';
import gameService from '../../utils/gameService';

const Cell = ({position, game, colors}) => {
  let piece;
  if (game) piece = gameService.getPieceAtPosition(game, position);
  debugger;
  return (
    <div>
      {game && <div style={{backgroundColor: 'red'}}/> }
      {/* {game && <div style={{backgroundColor: colors[piece.player]}}/> } */}
    </div>
    );
  }
    
export default Cell;