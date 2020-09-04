import React from "react";
import css from "./App.module.css";
import Questions from "./containers/Questions/Questions";
import Start from "./containers/Start/Start";
import Score from "./components/Score/Score";

import { Switch, Route } from "react-router-dom";


function App() {

  return (
    <div className={css.App}>
      <div className={css.AppHeader}>
        <Switch>
          <Route exact path="/" component={Start}></Route>
          <Route path="/quiz" component={Questions}></Route>
          <Route path="/score" component={Score}></Route>
        </Switch>
      </div>
    </div>
  );
}



export default App
