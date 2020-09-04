import RawQuestionModel from './RawQuestionModel'

export default class Question {
  readonly category: string;
  readonly question: string;
  readonly options: string[];
  readonly correctAnswer: string;

  // constructor(
  //   category: string,
  //   question: string,
  //   correctAnswer: string,
  //   incorrectAnswers: string[]
  // ) {
  //   this.category = category;
  //   this.question = question;
  //   this.options = arrayShuffle(incorrectAnswers, correctAnswer);
  //   this.correctAnswer = correctAnswer;
  // }

  constructor(rawQuestion: RawQuestionModel){
    const formattedQuestion = formatQuestion(rawQuestion)
    this.category = formattedQuestion.category;
    this.question = formattedQuestion.question;
    this.options = arrayShuffle(formattedQuestion.incorrect_answers, formattedQuestion.correct_answer);
    this.correctAnswer = formattedQuestion.correct_answer;

  }
}

//Durstenfeld shuffle
const arrayShuffle = (
  wrongAnswers: string[],
  correctAnswer: string
): string[] => {
  const newArray = [...wrongAnswers, correctAnswer];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};

const formatQuestion = (question: RawQuestionModel): RawQuestionModel => {
  question.question = formatHelper(question.question);
  question.incorrect_answers = question.incorrect_answers.map(q => formatHelper(q))
  question.correct_answer = formatHelper(question.correct_answer)
  return question
};

const formatHelper = (input: string): string => {
  const txt = document.createElement("textarea");
  txt.innerHTML = input;
  return txt.value;
}
