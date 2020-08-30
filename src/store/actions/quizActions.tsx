import Actions, {ActionModel} from './actionTypes'
import {QuestionModel} from '../../containers/Questions/Questions'
import quizFetch from '../../fetch'
import GameDetailsModel from '../../models/GameDetailsModel'



export const fetchQuizStart = () => ({
    type: Actions.QUIZ_FETCH_START
})

export const fetchQuizError = (error: Error): ActionModel => ({
    type: Actions.QUIZ_FETCH_START,
    payload: error
})

export const fetchQuizDone = (quizArray:QuestionModel[]) => ({
    type: Actions.QUIZ_FETCH_DONE,
    payload: quizArray
})

export const fetchQuiz = (gameDetails: GameDetailsModel) => {
    return (dispatch:any) => {
        dispatch(fetchQuizStart())

        quizFetch<QuestionModel[]>(gameDetails)
        .then(data => {
            const results = data.results
            //change &quot; for ", &#039 for ', &pi; for pi
            results.forEach((question:QuestionModel) => {
                question.question = question.question.replace(/&quot;/g, "\"")
                .replace(/&#039;/g, "'")
                .replace(/&pi;/g, "pi")
                
            })
            dispatch(fetchQuizDone(results))
        })
        .catch(err => dispatch(fetchQuizError(err)))
    }
}

