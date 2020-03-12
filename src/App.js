import React from 'react';
import './App.css';
import Cursor from './components/Cursor';
import Pong from './components/Pong';

function App() {
  return (
    <div className="App" style={{display:'flex', justifyContent:'center', flexDirection:'column', alignItems:'center'}}>
      <Cursor
      width ={150} height={100} />

      <Pong width ={window.innerWidth/2} height={window.innerHeight/2}  />
    </div>
  
  );
}

export default App;
