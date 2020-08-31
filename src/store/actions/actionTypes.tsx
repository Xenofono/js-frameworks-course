enum Actions{
    QUIZ_FETCH_START = "QUIZ_FETCH_START",
    QUIZ_FETCH_DONE = "QUIZ_FETCH_DONE",
    QUIZ_FETCH_ERROR = "QUIZ_FETCH_ERROR",

    QUIZ_SCORE_INCREASE = "QUIZ_SCORE_INCREASE",
    QUIZ_ENDED = "QUIZ_ENDED"
}

export interface ActionModel{
    type: Actions,
    payload: any
}

export default Actions