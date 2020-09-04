enum Actions{
    QUIZ_FETCH_START = "QUIZ_FETCH_START",
    QUIZ_FETCH_DONE = "QUIZ_FETCH_DONE",
    QUIZ_FETCH_ERROR = "QUIZ_FETCH_ERROR",
    QUIZ_FETCH_ERROR_CONFIRM = "QUIZ_FETCH_ERROR_CONFIRM",

    QUIZ_SCORE_INCREASE = "QUIZ_SCORE_INCREASE",
    QUIZ_ENDED = "QUIZ_ENDED",

    QUIZ_ANSWER_LOG = "QUIZ_ANSWER_LOG"
}

export interface ActionModel{
    type: Actions,
    payload: any
}

export default Actions