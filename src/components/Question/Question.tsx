import React, { FunctionComponent, MouseEvent, useState } from "react";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";

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
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    correct: {
      backgroundColor: "green",
    },
    incorrect: {
      backgroundColor: "red",
    },
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
        selected={clicked}
        className={
          answer === correctAnswer ? classes.correct : classes.incorrect
        }>
        <ListItemText primary={answer} />
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <h3>{category}</h3>
      <h4>{question}</h4>
      <List component="nav" aria-label="">
        {answersList}
      </List>
    </div>
  );
};

export default Question;
