import Actions, { ActionModel } from "../actions/actionTypes";
import RawQuestionModel from '../../models/RawQuestionModel'
import QuestionModel from '../../models/QuestionModel'

const initialState = {
  currentQuiz: null,
  loading: false,
};

const formatQuestions = (questions: RawQuestionModel[]): QuestionModel[] => {
  questions.forEach((question:RawQuestionModel) => {
    question.question = question.question.replace(/&quot;/g, "\"")
    .replace(/&#039;/g||/&rsquo;/g, "'")
    .replace(/&pi;/g, "pi")
    
})
return questions.map((rawQuestion: RawQuestionModel) => {
  return new QuestionModel(rawQuestion.category,
     rawQuestion.question,
      rawQuestion.correct_answer,
       rawQuestion.incorrect_answers)
})
}

const reducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Actions.QUIZ_FETCH_DONE:
      return {
        ...state,
        currentQuiz: formatQuestions(action.payload),
        loading: false
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
        };
    default:
      return state;
  }
};

export default reducer;
