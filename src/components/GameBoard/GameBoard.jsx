import React from 'react';
import './GameBoard.css';
import Piece from '../Piece/Piece';
import Cell from '../Cell/Cell';

const GameBoard = ({game, colors}) => {
  return (
    <div className="GameBoard">
      <div className="GameBoard-Row1">
        <div className="GameBoard-ColorHouse GameBoard-Red">
          <div className="House-Pieces">
            { game.players[0].pieces.map(p => p.atHome && <Piece color={colors[0]} piece={p} game={game}/>) }
          </div>
        </div>
        <div className="GameBoard-Col">
          <Cell position={10} game={game}/>
          <Cell position={11} game={game}/>
          <Cell position={12} game={game}/>
          <Cell position={9} game={game}/>
          <div className="yellow"></div>
          <Cell position={13} style={{backgroundColor: colors[0]}} game={game} />
          <Cell position={8} game={game}/>
          <div className="yellow"></div>
          <Cell position={14} game={game}/>
          <Cell position={7} game={game}/>
          <div className="yellow"></div>
          <Cell position={15} game={game}/>
          <Cell position={6} game={game}/>
          <div className="yellow"></div>
          <Cell position={16} game={game}/>
          <Cell position={5} game={game}/>
          <div className="yellow"></div>
          <Cell position={17} game={game}/>
        </div>
        <div className="GameBoard-ColorHouse GameBoard-Yellow">
          <div className="House-Pieces">
            { game.players[1].pieces.map(p => <Piece color={colors[1]} piece={p} game={game}/>) }
          </div>
        </div>
      </div>
      <div className="GameBoard-Row2">
        <div className="GameBoard-Col">
          <Cell position={51} game={game}/>
          <Cell position={0} style={{backgroundColor: colors[0]}} game={game} />
          <Cell position={1} game={game}/>
          <Cell position={2} game={game}/>
          <Cell position={3} game={game}/>
          <Cell position={4} game={game}/>
          <Cell position={50} game={game}/>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <Cell position={49} game={game}/>
          <Cell position={48} game={game}/>
          <Cell position={47} game={game}/>
          <Cell position={46} game={game}/>
          <Cell position={45} game={game}/>
          <Cell position={44} game={game}/>
        </div>
        <div className="GameBoard-Center" >
          <div id="top"></div>
          <div id="right"></div>
          <div id="bottom"></div>
          <div id="left"></div>
        </div>
        <div className="GameBoard-Col">
          <Cell position={18} game={game}/>
          <Cell position={19} game={game}/>
          <Cell position={20} game={game}/>
          <Cell position={21} game={game}/>
          <Cell position={22} game={game}/>
          <Cell position={23} game={game}/>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <Cell position={24} game={game}/>
          <Cell position={30} game={game}/>
          <Cell position={29} game={game}/>
          <Cell position={28} game={game}/>
          <Cell position={27} game={game}/>
          <Cell position={26} style={{backgroundColor: colors[4]}} game={game} />
          <Cell position={25} game={game}/>
        </div>
      </div>
      <div className="GameBoard-Row3">
          <div className="GameBoard-ColorHouse GameBoard-Green">
            <div className="House-Pieces">
              { game.players.length > 2 && game.players[2].pieces.map(p => <Piece color={colors[2]} piece={p} game={game}/>) }
            </div>
          </div>
          <div className="GameBoard-Col">
            <Cell position={43} game={game}/>
            <div className="green"></div>
            <Cell position={31} game={game}/>
            <Cell position={42} game={game}/>
            <div className="green"></div>
            <Cell position={32} game={game}/>
            <Cell position={41} game={game}/>
            <div className="green"></div>
            <Cell position={33} game={game}/>
            <Cell position={40} game={game}/>
            <div className="green"></div>
            <Cell position={34} game={game}/>
            <Cell position={39} game={game}/>
            <div className="green"></div>
            <Cell position={35} game={game}/>
            <Cell position={38} game={game}/>
            <Cell position={37} game={game}/>
            <Cell position={36} game={game}/>
          </div>
          <div className="GameBoard-ColorHouse GameBoard-Blue">
            <div className="House-Pieces">
              { game.players.length === 4 && game.players[3].pieces.map(p => <Piece color={colors[3]} piece={p} game={game}/>) }
            </div>
          </div>
      </div>
    </div>
  );
};

export default GameBoard;
