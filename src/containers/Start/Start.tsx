import React, { FunctionComponent } from "react";
import Form from "../../components/Form/Form";
import { Typography } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

interface StartProps {}

const useStyles = makeStyles((theme) =>
  createStyles({
    title: {
      color:"#f50057"
    },
  })
);

const Start: FunctionComponent<StartProps> = () => {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" className={classes.title}>
        Kristoffers quiz
      </Typography>
      <Form></Form>
    </div>
  );
};

export default Start;
