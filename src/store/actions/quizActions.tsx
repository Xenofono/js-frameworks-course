import Actions, { ActionModel } from "./actionTypes";
import quizFetch from "../../fetch";
import GameDetailsModel from "../../models/GameDetailsModel";
import RawQuestionModel from "../../models/RawQuestionModel";
import AnswerModel from "../../models/AnswerModel";

const fetchQuizStart = (): ActionModel => ({
  type: Actions.QUIZ_FETCH_START,
});

const fetchQuizError = (): ActionModel => ({
  type: Actions.QUIZ_FETCH_ERROR,
});

export const fetchQuizErrorConfirm = (): ActionModel => ({
  type: Actions.QUIZ_FETCH_ERROR_CONFIRM,
});

const fetchQuizDone = (quizArray: RawQuestionModel[]): ActionModel => ({
  type: Actions.QUIZ_FETCH_DONE,
  payload: quizArray,
});

export const fetchQuiz = (gameDetails: GameDetailsModel) => {
  return (dispatch: any) => {
    dispatch(fetchQuizStart());

    quizFetch<RawQuestionModel[]>(gameDetails)
      .then((data) => dispatch(fetchQuizDone(data.results)))
      .catch((err) => dispatch(fetchQuizError()));
  };
};

export const increaseScore = (): ActionModel => ({
    type: Actions.QUIZ_SCORE_INCREASE
})

export const quizEnded = (): ActionModel => ({
    type: Actions.QUIZ_ENDED
})

export const logAnswer = (answer: AnswerModel): ActionModel => ({
  type: Actions.QUIZ_ANSWER_LOG,
  payload: answer
})
