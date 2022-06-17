import React, { useState } from "react";

const Square = (props) => {
 const [state, setState] = useState('');

  return (
    <button className="square" 
    onClick={() => 
    state.onClick()}>
     {state.value} 
    </button>
);
}
export default Square;