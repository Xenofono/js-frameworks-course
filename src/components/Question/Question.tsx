import React, { FunctionComponent, MouseEvent } from "react";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


type QuestionProps = {
  category: string;
  question: string;
  options: string[];
  goToNextQuestion: Function;
  gameActive: boolean;
  correctAnswer: string;
  countDown: number;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root:{
      width:'90%',
      margin: 'auto'
    },
    list:{
      width:'50%',
      margin: 'auto'
    }
    ,
    itemRoot: {
      '&$disabled': {
        opacity: 1
      },
      '&:hover' :{
        backgroundColor : '#eee !important'
      }
    },
    correct: {
      backgroundColor: "#2ECC40",
  
    },
    incorrect: {
      backgroundColor: "#FF4136",
  
    },
    listItemIconHidden:{
      display: 'none'
    },
    listItemIconShow:{
      display: 'block'
    }
    ,
    iconCorrect:{
      color: "#2ECC40"
    },
    iconIncorrect:{
      color: "#FF4136"
    },
    disabled: {}
    
  })
);


const Question: FunctionComponent<QuestionProps> = ({
  category,
  question,
  options,
  goToNextQuestion,
  gameActive,
  correctAnswer,
  countDown
}) => {
  const classes = useStyles();
  

  const answersList = options.map((answer) => {
    return (
      <ListItem
        key={answer}
        onClick={(e: MouseEvent) => goToNextQuestion(answer)}
        divider
        disabled={!gameActive}
        selected={gameActive}
        button
        classes={{
          root: classes.itemRoot,
          disabled: classes.disabled // class name, e.g. `root-x`
        }}
        >
        <ListItemText primary={answer} />
        <ListItemIcon classes={{root: gameActive ? classes.listItemIconHidden : classes.listItemIconShow}}> 
        {answer === correctAnswer ?
         <CheckIcon classes={{root:classes.iconCorrect}}></CheckIcon> :
          <CloseIcon classes={{root:classes.iconIncorrect}}/>}
        </ListItemIcon>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <Typography variant="h2">{category}</Typography>
      <Typography variant="h4">{question}</Typography>
      <List component="nav" aria-label="" className={classes.list}>
        {answersList}
      </List>
      <p>Tid kvar: {countDown}</p>
    </div>
  );
};

export default Question;
