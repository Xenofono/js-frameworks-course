import React, { FunctionComponent, MouseEvent, useState } from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";


type QuestionProps = {
  category: string;
  question: string;
  options: string[];
  goToNextQuestion: Function;
  clicked: boolean;
  correctAnswer: string;
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
    },
    correct: {
      backgroundColor: "#2ECC40",
      '&$disabled': {
        opacity: 1
      }
    },
    incorrect: {
      backgroundColor: "#FF4136",
      '&$disabled': {
        opacity: 1
      }
    },
    disabled: {}
  })
);

const Question: FunctionComponent<QuestionProps> = ({
  category,
  question,
  options,
  goToNextQuestion,
  clicked,
  correctAnswer,
}) => {
  const classes = useStyles();

  const handleClick = (answer: String) => {
    goToNextQuestion(answer);
  };

  const answersList = options.map((answer) => {
    return (
      <ListItem
        key={answer}
        onClick={(e: MouseEvent) => handleClick(answer)}
        divider
        disabled={!clicked}
        selected={clicked}
        button
        className={
          answer === correctAnswer ? classes.correct : classes.incorrect
        }
        classes={{disabled: classes.disabled}}>
        <ListItemText primary={answer} />
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
    </div>
  );
};

export default Question;
