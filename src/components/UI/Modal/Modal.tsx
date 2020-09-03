import React, { useEffect, FunctionComponent } from "react";
import Backdrop from "../Backdrop/Backdrop";
import {
  createStyles,
  Theme,
  makeStyles,
  useTheme,
} from "@material-ui/core/styles";

interface ModalProps{
  show:boolean,
  modalClosed: Function
}


const modalCss = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'fixed',
      zIndex: 999999,
      backgroundColor: 'white',
      width: '70%',
      border: '1px solid #ccc',
      boxShadow: '1px 1px 1px black',
      padding: '16px',
      left: '15%',
      top: '30%',
      boxSizing: 'border-box',
      transition: 'all 0.3s ease-out'
    },
  })
);

const Modal: FunctionComponent<ModalProps> = props => {


  const classes = modalCss();
  
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed}></Backdrop>
      <div
        className={classes.root}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? 1 : 0
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};


export default React.memo(
  Modal,
  (prev, next) => prev.show === next.show && prev.children === next.children
);
