import React, { useState } from "react";

function Square(number) {
  const [squares, setSquares] = useState(Array(9).fill(null));

 return (
      <button
        className="square"
        onClick={() => setSquares({number: 'X'})}>
        {squares.number}
      </button>
);
}
export default Square;