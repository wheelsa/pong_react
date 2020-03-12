import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Pong from './components/Pong';

function App() {
  return (
    <div className="App" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Cursor
      width ={150} height={100} />
      <p>For pong press the arrow up and arrow down for player one, "W" for up and "S" for down for player 2</p>
      <Pong width ={window.innerWidth/2} height={window.innerHeight/2}  />
      
    </div>
  
  );
}

export default App;
