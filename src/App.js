import React from 'react';

import './App.css';

function HelloWorld(props) {
  console.log(props)
  return (
    <div id="hello">
      
      {props.mytext}

      <h3>
      {props.subtitle}
      </h3>
      
    </div>
    
  );
}



function App() {
  return (
    <div >
      This is my componente: <HelloWorld/>
      <HelloWorld mytext="Hello Ndev85" 
      subtitle= "Piru TIME"/>
      <HelloWorld mytext="Hello Piru"/>
      <HelloWorld mytext="Hello René"/>
    </div>

  );
}


export default App;
