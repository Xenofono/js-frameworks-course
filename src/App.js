import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Questions from './containers/Questions/Questions'
import Start from './containers/Start/Start'

import {Switch, Route} from 'react-router-dom'


function App() {


  return (
    <div className="App">
      <h1>Kristoffers jätteroliga quiz</h1>
      <Switch>
      <Route exact path="/" component={Start}></Route>
      <Route path="/quiz" component={Questions}></Route>
      </Switch>
    </div>
  );
}

export default App;
