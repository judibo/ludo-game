import React from 'react';
import './Piece.css';
import gameService from '../../utils/gameService';


const Piece = ({game}) => {
  let playerPieces = game.pieces.filter(piece => piece.player === game.players[0].id);
  let showPieces = playerPieces.map((piece) => <div className="Piece-color" style={{backgroundColor: '#fff'}}/>);
  let showPiecesClick = playerPieces.map((piece) =>
    <div className="Piece-color" 
          style={{backgroundColor: '#fff'}}
          onClick={() => gameService.handleMovePosition(game._id)}/>
  );
  let canMove = game.dice === 6 ? showPiecesClick : showPieces;
  return (
    // {canMove}
    <div className="Piece">
    {canMove}
    </div>
  );
}





export default Piece;