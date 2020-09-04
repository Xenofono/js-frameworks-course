import Actions, { ActionModel } from "../actions/actionTypes";
import RawQuestionModel from "../../models/RawQuestionModel";
import Question from "../../models/QuestionModel";
import AnswerModel from "../../models/AnswerModel";

interface InitalState {
  currentQuiz: Question[] | null,
  loading: boolean,
  score: number,
  quizEnded: boolean,
  answers: AnswerModel[],
  error: string | null
}

const initialState : InitalState = {
  currentQuiz: null,
  loading: false,
  score: 0,
  quizEnded: false,
  answers: [],
  error: null
};


//convert api data to my own model
const formatQuestions = (questions: RawQuestionModel[]): Question[] => {
  return questions.map(question => new Question(question))
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
        error: "Kunde inte hämta frågorna, kolla din internetuppkoppling"
      };

      case Actions.QUIZ_FETCH_ERROR_CONFIRM:
        return{
        ...state,
        error: null
      }

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
