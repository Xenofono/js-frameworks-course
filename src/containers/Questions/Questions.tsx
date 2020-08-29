import React, {FunctionComponent, useEffect, useState} from 'react';
import Question from '../../components/Question/Question'

import {connect} from 'react-redux'


export interface QuestionModel {
    category: string,
    question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

interface QuestionsProps {
    questions: QuestionModel[]
}

const Questions: FunctionComponent<QuestionsProps> = ({questions}) => {

    // const [questions, setQuestions] = useState<QuestionModel[]>([])
    const [questionIndex, setQuestionIndex] = useState(questions?.length || 0)

    useEffect(() => {
        // http<QuestionModel[]>()
        // .then(data => setQuestions(data.results))
    }, [])


    let toShow = <p>Laddar frågor...</p>
    if(questions && questions.length > 0){
        const nextQuestion = questions[questionIndex]
        console.log(nextQuestion)
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
    questions: state.currentQuiz
})

export default connect(mapStateToProps)(Questions)