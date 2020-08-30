import React, { useState } from "react";
import logo from "./logo.svg";
import css from "./App.module.css";
import Questions from "./containers/Questions/Questions";
import Start from "./containers/Start/Start";

import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Typography } from '@material-ui/core';

function App(props) {


  return (
    <div className={css.App}>
      <div className={css.AppHeader}>
      <Typography variant="h3">Kristoffers jätteroliga quiz</Typography>
      <Switch>
      <Route exact path="/" component={Start}></Route>
      <Route  path="/quiz" component={Questions}></Route>
      </Switch>
      </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
  currentQuiz: state.currentQuiz,
});

export default connect(mapStateToProps)(App);
