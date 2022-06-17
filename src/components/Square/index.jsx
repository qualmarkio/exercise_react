import React, { useState } from "react";

const Square = (props) => {
 const [state, setState] = useState('');

  return (
    <button className="square" 
    onClick={() => 
    setState({value: 'X'})}>
     {state.value} 
    </button>
  );
}
export default Square;