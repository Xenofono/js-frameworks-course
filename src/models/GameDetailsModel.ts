export default class GameDetailsModel {
    questions: number;
    difficulty: string;
    constructor(questions: number, difficulty: string) {
      this.questions = questions;
      this.difficulty = difficulty;
    }
  }