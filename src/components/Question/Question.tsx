import React, { FunctionComponent } from "react";

type QuestionProps = {
  category: string;
  question: string;
  correctAnswer: string;
  incorrectAnswers: string[];
};

const Question: FunctionComponent<QuestionProps> = ({
  category,
  question,
  correctAnswer,
  incorrectAnswers,
}) => {

    // incorrectAnswers.push(correctAnswer)
    
return <div>
    <h3>{category}</h3>
    <h4>{question}</h4></div>;
};

export default Question;
