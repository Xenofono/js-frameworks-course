export default class AnswerModel{
    readonly correct: boolean;
    readonly question: string;

    constructor(correct: boolean, question: string){
        this.correct = correct;
        this.question = question;
    }
}