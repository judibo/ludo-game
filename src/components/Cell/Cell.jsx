import React from 'react';
import './Cell.css';
import gameService from '../../utils/gameService';
import Piece from '../Piece/Piece';
import colors from '../../utils/colors';

const Cell = ({user, position, game}) => {
  let piece;
  if (game) piece = gameService.getPieceAtPosition(game, position);
  console.log(piece)
  return (
    <div className="Cell">
      {game && piece && <Piece color={colors[piece.player]} piece={piece} game={game} user={user}/>}
    </div>
    );
  }
    
export default Cell;