import React from 'react';

const Piece = (props) => {
  let style = {
    width: 30,
    height: 30,
    margin: 5,
    borderRadius: '50%',
    backgroundColor: 'white',
    opacity: 0.5,
    border: '1px solid grey',
    cursor: 'pointer'
  };

  return (
    <div style={style}/>
  );
}

export default Piece;