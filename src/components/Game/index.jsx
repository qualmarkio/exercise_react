import React from "react";
import Board from './components/Board';

class Game extends React.Component {
 constructor(props){
  super(props);
 }

render(){
 return (
    <div>
      <Board />
    </div>
  );}
}
export default Game;