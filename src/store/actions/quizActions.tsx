import Actions, { ActionModel } from "./actionTypes";
import quizFetch from "../../fetch";
import GameDetailsModel from "../../models/GameDetailsModel";
import RawQuestionModel from "../../models/RawQuestionModel";

export const fetchQuizStart = () => ({
  type: Actions.QUIZ_FETCH_START,
});

export const fetchQuizError = (error: Error): ActionModel => ({
  type: Actions.QUIZ_FETCH_START,
  payload: error,
});

export const fetchQuizDone = (quizArray: RawQuestionModel[]) => ({
  type: Actions.QUIZ_FETCH_DONE,
  payload: quizArray,
});

export const fetchQuiz = (gameDetails: GameDetailsModel) => {
  return (dispatch: any) => {
    dispatch(fetchQuizStart());

    quizFetch<RawQuestionModel[]>(gameDetails)
      .then((data) => dispatch(fetchQuizDone(data.results)))
      .catch((err) => dispatch(fetchQuizError(err)));
  };
};
