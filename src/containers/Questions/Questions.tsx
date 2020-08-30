import React, {FunctionComponent, useEffect, useState} from 'react';
import Question from '../../components/Question/Question'

import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { CircularProgress } from '@material-ui/core';


export interface QuestionModel {
    category: string,
    question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

interface QuestionsProps {
    questions: QuestionModel[],
    loading: boolean
}

const Questions: FunctionComponent<QuestionsProps> = ({questions, loading}) => {
    const [questionIndex, setQuestionIndex] = useState(0)

    const history = useHistory()
    if(!loading && !questions){
        history.replace("/")
    }

    let toShow = <CircularProgress></CircularProgress>
    if(!loading && questions){
        const nextQuestion = questions[questionIndex]
        toShow = <Question category={nextQuestion.category}
        question={nextQuestion.question}
        correctAnswer={nextQuestion.correctAnswer}
        incorrectAnswers={nextQuestion.incorrectAnswers}></Question>

    }

    

    return (
        <div>
            {toShow}
        </div>
    )
}



const mapStateToProps = (state: any) => ({
    questions: state.currentQuiz,
    loading: state.loading
})

export default connect(mapStateToProps)(Questions)