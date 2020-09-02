import React, { useState } from "react";
import logo from "./logo.svg";
import css from "./App.module.css";
import Questions from "./containers/Questions/Questions";
import Start from "./containers/Start/Start";
import Score from "./components/Score/Score";

import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";



function App(props) {

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

const mapStateToProps = (state) => ({
  currentQuiz: state.currentQuiz,
});

export default connect(mapStateToProps)(App);
