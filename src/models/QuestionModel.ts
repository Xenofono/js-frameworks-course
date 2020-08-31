export default class Question {
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;

  constructor(
    category: string,
    question: string,
    correctAnswer: string,
    incorrectAnswers: string[]
  ) {
    this.category = category;
    this.question = question;
    this.options = arrayShuffle(incorrectAnswers, correctAnswer);
    this.correctAnswer = correctAnswer;
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
