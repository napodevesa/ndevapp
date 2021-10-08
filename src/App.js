import React from 'react';

import './App.css';

function HelloWorld() {
  return (
    <div id="hello">
      Hello Ndev
    </div>
    
  );
}

function HelloWorld2() {
  return (
    <div id="hello2">
      Hello Ndev
    </div>
    
  );
}

function App() {
  return (
    <div >
      This is my componente: <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld/>
      <HelloWorld2/>
      <HelloWorld2/>
    </div>

  );
}


export default App;
