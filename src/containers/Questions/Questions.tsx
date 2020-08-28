import React, {FunctionComponent, useEffect, useState} from 'react';
import {http} from '../../fetch'
import Question from '../../components/Question/Question'


interface QuestionModel {
    category: string,
    question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
}

const Questions: FunctionComponent = () => {

    const [questions, setQuestions] = useState<QuestionModel[]>([])
    const [questionIndex, setQuestionIndex] = useState(0)

    useEffect(() => {
        http<QuestionModel[]>()
        .then(data => setQuestions(data.results))
    }, [])

    let toShow = <p>Laddar frågor...</p>
    if(questions.length > 0){
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

export default Questions