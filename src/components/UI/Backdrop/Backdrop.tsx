import React, { FunctionComponent } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

interface BackdropProps {
  show: boolean;
  clicked: Function;
}

const backdropCss = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "100%",
      position: "fixed",
      zIndex: 100,
      left: 0,
      top: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  })
);

const Backdrop: FunctionComponent<BackdropProps> = (props) => {
  const classes = backdropCss();

  return props.show ? (
    <div onClick={() => props.clicked()} className={classes.root}></div>
  ) : null;
};

export default Backdrop;
