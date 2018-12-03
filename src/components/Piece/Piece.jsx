import React from 'react';
import './Piece.css';


const Piece = ({game}) => {
  let player1Pieces = game.pieces.filter(piece => piece.player === game.players[0].id);
  return (
    <div className="Piece">
        {player1Pieces.map((piece) => <div className="Piece-color" style={{backgroundColor: 'yellow'}} ></div>)}
    </div>
  );
}





export default Piece;