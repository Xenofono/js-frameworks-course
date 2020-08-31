import React, { useState } from "react";
import logo from "./logo.svg";
import css from "./App.module.css";
import Questions from "./containers/Questions/Questions";
import Start from "./containers/Start/Start";

import { Switch, Route} from "react-router-dom";
import { connect } from "react-redux";
import { Typography } from '@material-ui/core';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}),
);

function App(props) {

  const classes = useStyles();


  return (
    <div className={css.App}>
      <div className={css.AppHeader}>
        <AppBar>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
          <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          Kristoffers quiz
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
        </AppBar>
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
