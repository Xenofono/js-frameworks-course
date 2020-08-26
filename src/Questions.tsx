import React, {FunctionComponent, useEffect, useState} from 'react';
import {http} from './fetch'



const Questions: FunctionComponent = () => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        http()
        .then(data => setQuestions(data.results))
    }, [])

    return (
        <div>
            {questions.map(q => <div>hej</div>)}
        </div>
    )
}

export default Questions