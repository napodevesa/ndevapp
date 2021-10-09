import React from 'react';

import './App.css';

function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      {props.mytext}
    </div>
    
  );
}

function HelloWorld2() {
  return (
    <div id="hello2">
      Hello Ndev!
    </div>
    
  );
}


function App() {
  return (
    <div >
      This is my componente: <HelloWorld/>
      <HelloWorld mytext="Hello Ndev85"/>
      <HelloWorld mytext="Hello Piru"/>
      <HelloWorld mytext="Hello René"/>
      <HelloWorld2/>
      <HelloWorld2/>
    </div>

  );
}


export default App;
