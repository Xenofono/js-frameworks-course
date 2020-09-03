import Actions, { ActionModel } from "../actions/actionTypes";
import RawQuestionModel from "../../models/RawQuestionModel";
import QuestionModel from "../../models/QuestionModel";
import AnswerModel from "../../models/AnswerModel";

interface InitalState {
  currentQuiz: QuestionModel[] | null,
  loading: boolean,
  score: number,
  quizEnded: boolean,
  answers: AnswerModel[],
  error: Error | null
}

const initialState : InitalState = {
  currentQuiz: null,
  loading: false,
  score: 0,
  quizEnded: false,
  answers: [],
  error: null
};

const formatHelper = (input: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = input;
  return txt.value;
}

//convert api data to my own model
const formatQuestions = (questions: RawQuestionModel[]): QuestionModel[] => {

  questions.forEach((rawQuestion: RawQuestionModel) => {
    rawQuestion.question = formatHelper(rawQuestion.question);
    rawQuestion.incorrect_answers = rawQuestion.incorrect_answers.map(q => formatHelper(q))
    rawQuestion.correct_answer = formatHelper(rawQuestion.correct_answer)
  });

  return questions.map((rawQuestion: RawQuestionModel) => {
    return new QuestionModel(
      rawQuestion.category,
      rawQuestion.question,
      rawQuestion.correct_answer,
      rawQuestion.incorrect_answers
    );
  });
};

const reducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Actions.QUIZ_FETCH_DONE:
      return {
        ...state,
        currentQuiz: formatQuestions(action.payload),
        loading: false,
      };
    case Actions.QUIZ_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case Actions.QUIZ_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case Actions.QUIZ_SCORE_INCREASE:
      return {
        ...state,
        score: state.score + 1,
      };

    case Actions.QUIZ_ENDED:
      return {
        ...state,
        quizEnded: true,
      };

      case Actions.QUIZ_ANSWER_LOG:
        return {
          ...state,
          answers: state.answers.concat(action.payload)
        }
    default:
      return state;
  }
};

export default reducer;
