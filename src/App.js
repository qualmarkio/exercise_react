import React from 'react';
// import Game from './components/Game';
import './App.css';
import styled from 'styled-components';
import Game from './components/Game'

 const App = () =>  {
  return (
    <div>
     <Game />
     <Title>hello word</Title>
    </div>
    );
}

const Title = styled.h1`
  font-size: 5.5em;
  text-align: center;
  background-color: green;
`
export default App;