import Actions, {ActionModel} from '../actions/actionTypes'

const initialState = {
    currentQuiz:[],
    loading: false
}

const reducer = (state = initialState, action: ActionModel) => {
    console.log(state)
    switch(action.type){
        case Actions.QUIZ_FETCH_DONE :
            
            return {
                ...state,
                currentQuiz: action.payload
            }

        default: return state
    }
}

export default reducer;