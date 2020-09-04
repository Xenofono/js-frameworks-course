import React, { useState } from "react";
import logo from "./logo.svg";
import css from "./App.module.css";
import Questions from "./containers/Questions/Questions";
import Start from "./containers/Start/Start";
import Score from "./components/Score/Score";

import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { Typography, Backdrop } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {
  createStyles,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

function App(props) {
  const [show, setShow] = useState(false);

  const classes = useStyles();
  const confirmError = () => setShow(false);

  if (props.error && !show) {
    setShow(true);
  }

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
  error: state.error,
});

export default connect(mapStateToProps)(App);
