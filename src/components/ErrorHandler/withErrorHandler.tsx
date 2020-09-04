import React, { FunctionComponent, useState } from "react";
import { Backdrop } from "@material-ui/core";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { createStyles, makeStyles } from "@material-ui/core/styles";
import { fetchQuizErrorConfirm } from "../../store/actions/quizActions";

const useStyles = makeStyles((theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

interface ErrorHandlerProps {
  Component: any;
  error: string | null;
  removeError: Function;
}

//higher order component, renders Component if there are no errors, otherwise backdrop with error message
export const withErrorHandler = (Component: any) => {
  const ErrorHandler: FunctionComponent<ErrorHandlerProps> = (props) => {
    const [show, setShow] = useState(false);
    const history = useHistory();
    const confirmError = () => {
      setShow(() => {
        props.removeError();
        return false;
      });
      history.replace("/");
    };
    const classes = useStyles();

    if (props.error && !show) {
      setShow(true);
    }

    return (
      <React.Fragment>
        <Backdrop
          open={show}
          className={classes.backdrop}
          onClick={confirmError}>
          <p>Kan inte ladda frågorna, kolla din internetuppkoppling</p>
        </Backdrop>
        <Component {...props}></Component>
      </React.Fragment>
    );
  };

  const mapDispatchToProps = (dispatch: any) => ({
    removeError: () => dispatch(fetchQuizErrorConfirm()),
  });
  const mapStateToProps = (state: any) => ({ error: state.error });

  return connect(mapStateToProps, mapDispatchToProps)(ErrorHandler);
};
