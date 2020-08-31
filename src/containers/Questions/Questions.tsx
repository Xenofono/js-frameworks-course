import React, { FunctionComponent, useEffect, useState } from "react";
import Question from "../../components/Question/Question";

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { CircularProgress } from "@material-ui/core";

import QuestionModel from '../../models/QuestionModel'


interface QuestionsProps {
  questions: QuestionModel[];
  loading: boolean;
}


const Questions: FunctionComponent<QuestionsProps> = ({
  questions,
  loading,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [clicked, setClicked] = useState(true)
  const history = useHistory();

  const goToNextQuestion = (answer: string) => {
    setClicked(false)
    const currentQuestion = questions[questionIndex];
    if (answer === currentQuestion.correctAnswer) {
      console.log("rätt svar!");
    } else {
      console.log("fel!");
    }
    setTimeout(() => {
      const nextIndex = questionIndex+1;
      if(nextIndex < questions.length){
      setQuestionIndex(questionIndex + 1);
  
      }
      setClicked(true)
    },1500)

  }

  if (!loading && !questions) {
    history.replace("/");
  }

  let toShow = <CircularProgress></CircularProgress>;
  if (!loading && questions) {
    const nextQuestion = questions[questionIndex];
    console.log("QUESTIONSSSS: ", nextQuestion)
    toShow = (
      <Question
        category={nextQuestion.category}
        question={nextQuestion.question}
        options={nextQuestion.options}
        goToNextQuestion={goToNextQuestion}
        correctAnswer={nextQuestion.correctAnswer}
        clicked={clicked}
        ></Question>
    );
  }

  return <div>{toShow}</div>;
};

const mapStateToProps = (state: any) => ({
  questions: state.currentQuiz,
  loading: state.loading,
});

export default connect(mapStateToProps)(Questions);
