import React from 'react';
import './GameBoard.css';
import Piece from '../Piece/Piece';
import Cell from '../Cell/Cell';

const GameBoard = ({game, colors, user}) => {
  return (
    <div className="GameBoard">
      <div className="GameBoard-Row1">
        <div className="GameBoard-ColorHouse GameBoard-Red">
          <div className="House-Pieces">
            { game.players[0].pieces.map(p => p.atHome && <Piece color={colors[0]} piece={p} game={game} user={user}/> ) }
          </div>
        </div>
        <div className="GameBoard-Col">
          <Cell user={user} position={10} game={game} colors={colors}/>
          <Cell user={user} position={11} game={game} colors={colors}/>
          <Cell user={user} position={12} game={game} colors={colors}/>
          <Cell user={user} position={9} game={game} colors={colors}/>
          <div className="yellow"></div>
          <Cell user={user} position={13} style={{backgroundColor: 'red'}} game={game} />
          <Cell user={user} position={8} game={game} colors={colors}/>
          <div className="yellow"></div>
          <Cell user={user} position={14} game={game} colors={colors}/>
          <Cell user={user} position={7} game={game} colors={colors}/>
          <div className="yellow"></div>
          <Cell user={user} position={15} game={game} colors={colors}/>
          <Cell user={user} position={6} game={game} colors={colors}/>
          <div className="yellow"></div>
          <Cell user={user} position={16} game={game} colors={colors}/>
          <Cell user={user} position={5} game={game} colors={colors}/>
          <div className="yellow"></div>
          <Cell user={user} position={17} game={game} colors={colors}/>
        </div>
        <div className="GameBoard-ColorHouse GameBoard-Yellow">
          <div className="House-Pieces">
            { game.players[1].pieces.map(p => p.atHome && <Piece color={colors[1]} piece={p} game={game} user={user}/>) }
          </div>
        </div>
      </div>
      <div className="GameBoard-Row2">
        <div className="GameBoard-Col">
          <Cell user={user} position={51} game={game} colors={colors}/>
          <Cell user={user} position={0} style={{backgroundColor: colors[0]}} game={game} />
          <Cell user={user} position={1} game={game} colors={colors}/>
          <Cell user={user} position={2} game={game} colors={colors}/>
          <Cell user={user} position={3} game={game} colors={colors}/>
          <Cell user={user} position={4} game={game} colors={colors}/>
          <Cell user={user} position={50} game={game} colors={colors}/>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <div className="red"></div>
          <Cell user={user} position={49} game={game} colors={colors}/>
          <Cell user={user} position={48} game={game} colors={colors}/>
          <Cell user={user} position={47} game={game} colors={colors}/>
          <Cell user={user} position={46} game={game} colors={colors}/>
          <Cell user={user} position={45} game={game} colors={colors}/>
          <Cell user={user} position={44} game={game} colors={colors}/>
        </div>
        <div className="GameBoard-Center" >
          <div id="top"></div>
          <div id="right"></div>
          <div id="bottom"></div>
          <div id="left"></div>
        </div>
        <div className="GameBoard-Col">
          <Cell user={user} position={18} game={game} colors={colors}/>
          <Cell user={user} position={19} game={game} colors={colors}/>
          <Cell user={user} position={20} game={game} colors={colors}/>
          <Cell user={user} position={21} game={game} colors={colors}/>
          <Cell user={user} position={22} game={game} colors={colors}/>
          <Cell user={user} position={23} game={game} colors={colors}/>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <div className="blue"></div>
          <Cell user={user} position={24} game={game} colors={colors}/>
          <Cell user={user} position={30} game={game} colors={colors}/>
          <Cell user={user} position={29} game={game} colors={colors}/>
          <Cell user={user} position={28} game={game} colors={colors}/>
          <Cell user={user} position={27} game={game} colors={colors}/>
          <Cell user={user} position={26} style={{backgroundColor: colors[4]}} game={game} />
          <Cell user={user} position={25} game={game} colors={colors}/>
        </div>
      </div>
      <div className="GameBoard-Row3">
          <div className="GameBoard-ColorHouse GameBoard-Green">
            <div className="House-Pieces">
              { game.players.length === 4 && game.players[3].pieces.map(p => p.atHome && <Piece color={colors[3]} piece={p} game={game} user={user} />) }
            </div>
          </div>
          <div className="GameBoard-Col">
            <Cell user={user} position={43} game={game} colors={colors}/>
            <div className="green"></div>
            <Cell user={user} position={31} game={game} colors={colors}/>
            <Cell user={user} position={42} game={game} colors={colors}/>
            <div className="green"></div>
            <Cell user={user} position={32} game={game} colors={colors}/>
            <Cell user={user} position={41} game={game} colors={colors}/>
            <div className="green"></div>
            <Cell user={user} position={33} game={game} colors={colors}/>
            <Cell user={user} position={40} game={game} colors={colors}/>
            <div className="green"></div>
            <Cell user={user} position={34} game={game} colors={colors}/>
            <Cell user={user} position={39} game={game} colors={colors}/>
            <div className="green"></div>
            <Cell user={user} position={35} game={game} colors={colors}/>
            <Cell user={user} position={38} game={game} colors={colors}/>
            <Cell user={user} position={37} game={game} colors={colors}/>
            <Cell user={user} position={36} game={game} colors={colors}/>
          </div>
          <div className="GameBoard-ColorHouse GameBoard-Blue">
            <div className="House-Pieces">
              { game.players.length > 2 && game.players[2].pieces.map(p => p.atHome && <Piece color={colors[2]} piece={p} game={game} user={user}/>) }
            </div>
          </div>
      </div>
    </div>
  );
};

export default GameBoard;
