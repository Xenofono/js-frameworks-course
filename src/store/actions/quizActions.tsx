import Actions, {ActionModel} from './actionTypes'
import quizFetch from '../../fetch'
import GameDetailsModel from '../../models/GameDetailsModel'
import RawQuestionModel from '../../models/RawQuestionModel'



export const fetchQuizStart = () => ({
    type: Actions.QUIZ_FETCH_START
})

export const fetchQuizError = (error: Error): ActionModel => ({
    type: Actions.QUIZ_FETCH_START,
    payload: error
})

export const fetchQuizDone = (quizArray:RawQuestionModel[]) => ({
    type: Actions.QUIZ_FETCH_DONE,
    payload: quizArray
})

export const fetchQuiz = (gameDetails: GameDetailsModel) => {
    return (dispatch:any) => {
        dispatch(fetchQuizStart())

    quizFetch<RawQuestionModel[]>(gameDetails)
        .then(data => {
            const results = data.results
            //change &quot; for ", &#039 for ', &pi; for pi
            results.forEach((question:RawQuestionModel) => {
                question.question = question.question.replace(/&quot;/g, "\"")
                .replace(/&#039;/g||/&rsquo;/g, "'")
                .replace(/&pi;/g, "pi")
                
            })
            dispatch(fetchQuizDone(results))
        })
        .catch(err => dispatch(fetchQuizError(err)))
    }
}



