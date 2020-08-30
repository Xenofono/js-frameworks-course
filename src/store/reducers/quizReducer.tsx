import Actions, { ActionModel } from "../actions/actionTypes";

const initialState = {
  currentQuiz: null,
  loading: false,
};

const reducer = (state = initialState, action: ActionModel) => {
  switch (action.type) {
    case Actions.QUIZ_FETCH_DONE:
      return {
        ...state,
        currentQuiz: action.payload,
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
