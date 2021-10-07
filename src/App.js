import React from 'react';

import './App.css';

function HelloWorld() {
  return (
    <div id="hello">
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
    </div>

  );
}

export default App;
