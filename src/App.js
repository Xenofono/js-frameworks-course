import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './containers/Questions/Questions'
import Start from './containers/Start/Start'


function App() {

  const [gameDetails, setGameDetails] = useState({})


  return (
    <div className="App">
      <h1>Kristoffers jätteroliga quiz</h1>
      <Start setGameDetails={setGameDetails}></Start>
      <Questions></Questions>
    </div>
  );
}

export default App;
