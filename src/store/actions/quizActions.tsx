import Actions, {ActionModel} from './actionTypes'
import {QuestionModel} from '../../containers/Questions/Questions'
import quizFetch, { GameDetailsModel } from '../../fetch'


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

export const fetchQuiz = (questions:number, difficulty: string) => {
    return (dispatch:any) => {
        const gameDetails = new GameDetailsModel(questions, difficulty)
        dispatch(fetchQuizStart())

        quizFetch<QuestionModel[]>(gameDetails)
        .then(data => {
            dispatch(fetchQuizDone(data.results))
        })
        .catch(err => dispatch(fetchQuizError(err)))
    }
}

