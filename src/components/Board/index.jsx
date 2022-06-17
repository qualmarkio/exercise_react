import React, { useState } from "react";
import Square from '../Square';
import styled from 'styled-components';

const Board = () => {

  const status = 'Next player: X';
  const [squares, setSquares] = useState ([]);

  function renderSquare(number){
    return (
    <Square
      value={squares[number]} 
      onClick={() =>
      setSquares.handleClick(number)}
    />
    ); 
  }
  
return (

   <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      );
}

export default Board;