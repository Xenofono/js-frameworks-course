import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card'
import Ticker from './Ticker'
import Questions from './Questions'


function App() {
  return (
    <div className="App">
      <h1>Kristoffers jätteroliga quiz</h1>
      <Questions></Questions>
    </div>
  );
}

export default App;
