import React from "react";
import Square from './components/Square';

class Board extends Reac.Components {
  constructor(props){
    super(props)
  }

  render(){
 return(
  <div>
   <Square />
  </div>
  );}
}

export default Board;