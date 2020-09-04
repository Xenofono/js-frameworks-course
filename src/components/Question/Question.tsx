import React, { FunctionComponent, MouseEvent } from "react";
import { List, ListItem, ListItemText, ListItemIcon, Typography, useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import {
  classesCommon,
  classesMobile,
  classesLandscape,
} from "./QuestionStyles";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

type QuestionProps = {
  category: string;
  question: string;
  options: string[];
  goToNextQuestion: Function;
  gameActive: boolean;
  correctAnswer: string;
  countDown: number;
};

const Question: FunctionComponent<QuestionProps> = ({
  category,
  question,
  options,
  goToNextQuestion,
  gameActive,
  correctAnswer,
  countDown,
}) => {
  const theme = useTheme();

  //checks if screen is larger than md which is 960px
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const commonClasses = classesCommon();
  const mobileClasses = classesMobile();
  const mobileClassesLandscape = classesLandscape();
  let classes = commonClasses;
  if (!matches) {
    classes = { ...commonClasses, ...mobileClasses };
  }

  //checks if window is in landscape mode, if yes then applies landscape css
  if (window.matchMedia("(orientation: landscape)").matches && !matches) {
    classes = { ...classes, ...mobileClassesLandscape };
  }

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
          disabled: classes.disabled, // class name, e.g. `root-x`
        }}>
        <ListItemText primary={answer} />
        <ListItemIcon
          classes={{
            root: gameActive
              ? classes.listItemIconHidden
              : classes.listItemIconShow,
          }}>
          {answer === correctAnswer ? (
            <CheckIcon classes={{ root: classes.iconCorrect }}></CheckIcon>
          ) : (
            <CloseIcon classes={{ root: classes.iconIncorrect }} />
          )}
        </ListItemIcon>
      </ListItem>
    );
  });

  return (
    <div className={classes.root}>
      <div className={classes.innerDiv}>
        <Typography variant="h3">{category}</Typography>
        <Typography variant="h5">{question}</Typography>
      </div>
      <div className={classes.innerDiv}>
        <List component="nav" aria-label="" className={classes.list}>
          {answersList}
        </List>
        <p>Tid kvar: {countDown}</p>
      </div>
    </div>
  );
};

export default Question;
