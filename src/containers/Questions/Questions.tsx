import React, { FunctionComponent, useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { increaseScore, quizEnded } from "../../store/actions/quizActions";

import QuestionModel from "../../models/QuestionModel";

interface QuestionsProps {
  questions: QuestionModel[];
  loading: boolean;
  increaseScore: Function;
  quizEnded: Function;
}

const Questions: FunctionComponent<QuestionsProps> = ({
  questions,
  loading,
  increaseScore,
  quizEnded,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [clicked, setClicked] = useState(true);
  const [changingToNextQuestion, setChaningToNextQuestion] = useState(false)
  const history = useHistory();

  //setTimeout is so correct and wrong answers are displayed 1500 ms before next question
  const goToNextQuestion = (answer: string) => {
    setClicked(false);
    if(!changingToNextQuestion){
      setChaningToNextQuestion(true)
      const currentQuestion = questions[questionIndex];
      if (answer === currentQuestion.correctAnswer) {
        increaseScore();
      }
      setTimeout(() => {
        const nextIndex = questionIndex + 1;
        if (nextIndex < questions.length) {
          setQuestionIndex(questionIndex + 1);
        } else {
          quizEnded();
          history.push("/score");
        }
        setClicked(true);
        setChaningToNextQuestion(false)
      }, 1500);
    }

  };

  if (!loading && !questions) {
    history.replace("/");
  }

  let toShow = <CircularProgress></CircularProgress>;
  if (!loading && questions) {
    const nextQuestion = questions[questionIndex];
    console.log("QUESTIONSSSS: ", nextQuestion);
    toShow = (
      <Question
        category={nextQuestion.category}
        question={nextQuestion.question}
        options={nextQuestion.options}
        goToNextQuestion={goToNextQuestion}
        correctAnswer={nextQuestion.correctAnswer}
        clicked={clicked}></Question>
    );
  }

  return <div>{toShow}</div>;
};

const mapDispatchToProps = (dispatch: any) => ({
  increaseScore: () => dispatch(increaseScore()),
  quizEnded: () => dispatch(quizEnded()),
});

const mapStateToProps = (state: any) => ({
  questions: state.currentQuiz,
  loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
