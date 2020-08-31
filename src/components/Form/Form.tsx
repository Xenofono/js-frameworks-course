import React, { FunctionComponent, useState } from "react";
import css from "./Form.module.css";

import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { Button } from "@material-ui/core";

import { useHistory } from "react-router-dom";

import { fetchQuiz } from "../../store/actions/quizActions";
import { connect } from "react-redux";
import GameDetailsModel from "../../models/GameDetailsModel";

interface FormProps {
  fetchQuiz: Function;
}

const Form: FunctionComponent<FormProps> = ({ fetchQuiz }) => {
  const [questions, setQuestions] = useState<number>(8);
  const [diffValue, setDiffValue] = useState("medium");

  const history = useHistory();
  const handleClick = () => {
    const gameDetails = new GameDetailsModel(questions, diffValue);
    fetchQuiz(gameDetails);
    history.push("/quiz");
  };

  return (
    <FormControl margin="normal" variant="outlined">
      <FormLabel htmlFor="input">Antal Frågor: </FormLabel>
      <Input
        id="input"
        type="number"
        placeholder="8"
        value={questions === 0 ? "" : questions}
        required
        autoFocus
        onChange={(e) => setQuestions(+e.target.value)}></Input>
      <FormLabel htmlFor="radio">Svårighetsgrad</FormLabel>
      <RadioGroup
        id="radio"
        aria-label="difficulty"
        name="difficulty"
        value={diffValue}
        onChange={(e) => setDiffValue(e.target.value)}>
        <FormControlLabel value="easy" control={<Radio />} label="Lätt" />
        <FormControlLabel value="medium" control={<Radio />} label="Mellan" />
        <FormControlLabel value="hard" control={<Radio />} label="Svårt" />
      </RadioGroup>
      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleClick}>
        Börja
      </Button>
    </FormControl>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchQuiz: (gameDetails: GameDetailsModel) =>
    dispatch(fetchQuiz(gameDetails)),
});

export default connect(null, mapDispatchToProps)(Form);
