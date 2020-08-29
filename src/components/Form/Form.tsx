import React, { FunctionComponent, useState } from "react";
import css from "./Form.module.css";

import { FormControl } from "@material-ui/core";
import { FormLabel } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { Input } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { Button } from '@material-ui/core';

import {useHistory} from 'react-router-dom'

import {fetchQuiz} from '../../store/actions/quizActions'
import {connect} from 'react-redux'

interface FormProps {
  setGameDetails: Function,
  fetchQuiz: Function
}

const Form: FunctionComponent<FormProps> = ({setGameDetails, fetchQuiz}) => {
  const [questions, setQuestions] = useState<number>(10);
  const [diffValue, setDiffValue] = useState("Mellan");

  const history = useHistory()
  const handleClick = () => {
      fetchQuiz(questions, diffValue)
      history.push("/quiz")
  }

  return (
    <FormControl>
      <FormLabel htmlFor="input">Antal Frågor: </FormLabel>
      <Input
        id="input"
        type="number"
        placeholder="10"
        value={questions}
        required
        autoFocus
        onChange={(e) => setQuestions(+e.target.value)}></Input>
        <FormLabel htmlFor="radio">Svårighetsgrad</FormLabel>
      <RadioGroup id="radio" aria-label="difficulty" name="difficulty" value={diffValue} onChange={e => setDiffValue(e.target.value)}>
        <FormControlLabel value="Lätt" control={<Radio />} label="Lätt" />
        <FormControlLabel value="Mellan" control={<Radio />} label="Mellan" />
        <FormControlLabel value="Svårt" control={<Radio />} label="Svårt" />
      </RadioGroup>
      <Button size="large" variant="outlined" onClick={handleClick}>Börja</Button>
    </FormControl>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  fetchQuiz: (questions:number, diffValue:string) => dispatch(fetchQuiz(questions, diffValue))
})



export default connect(null, mapDispatchToProps)(Form);
