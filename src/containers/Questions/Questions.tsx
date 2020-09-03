import React, { FunctionComponent, useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import {
  increaseScore,
  quizEnded,
  logAnswer,
} from "../../store/actions/quizActions";

import QuestionModel from "../../models/QuestionModel";
import AnswerModel from "../../models/AnswerModel";

interface QuestionsProps {
  questions: QuestionModel[];
  loading: boolean;
  increaseScore: Function;
  quizEnded: Function;
  logAnswer: Function;
}

const Questions: FunctionComponent<QuestionsProps> = ({
  questions,
  loading,
  increaseScore,
  quizEnded,
  logAnswer,
}) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [gameActive, setgameActive] = useState(true);
  const [countDown, setCountDown] = useState<number>(10);

  const history = useHistory();

  useEffect(() => {
    //creates an interval to reduce countDown
    if (gameActive && countDown > 0) {
        const interval = setInterval(() => {
          setCountDown((oldState) => oldState - 1);
        }, 1000);
        return () => clearInterval(interval);
      
    }
    //if game is active and coundown 0 or lower than force the game to next question
    else if (gameActive && countDown <= 0){
      goToNextQuestion("");

    }
  });

  //setTimeout is so correct and wrong answers are displayed 1500 ms before next question
  const goToNextQuestion = (answer: string) => {
    setgameActive(false);
    const currentQuestion = questions[questionIndex];
    const hasScored = answer === currentQuestion.correctAnswer;
    if (hasScored) {
      increaseScore();
    }
    const answerToLog = new AnswerModel(hasScored, currentQuestion.question);
    logAnswer(answerToLog);

    const nextIndex = questionIndex + 1;
    setTimeout(() => {
      if (nextIndex < questions.length) {
        setCountDown(() => {
          setQuestionIndex(questionIndex + 1);
          setgameActive(true);
          return 10;
        });
      } else {
        quizEnded();
        history.push("/score");
      }
    }, 1500);
  };

  //if API isn't loading and there are no questions then redirect to root
  if (!loading && !questions) {
    history.replace("/");
  }

  let toShow = <CircularProgress color="secondary"></CircularProgress>;
  if (!loading && questions) {
    const nextQuestion = questions[questionIndex];
    toShow = (
      <Question
        category={nextQuestion.category}
        question={nextQuestion.question}
        options={nextQuestion.options}
        goToNextQuestion={goToNextQuestion}
        correctAnswer={nextQuestion.correctAnswer}
        gameActive={gameActive}
        countDown={countDown}></Question>
    );
  }

  return <div>{toShow}</div>;
};

const mapDispatchToProps = (dispatch: any) => ({
  increaseScore: () => dispatch(increaseScore()),
  quizEnded: () => dispatch(quizEnded()),
  logAnswer: (answer: AnswerModel) => dispatch(logAnswer(answer)),
});

const mapStateToProps = (state: any) => ({
  questions: state.currentQuiz,
  loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
