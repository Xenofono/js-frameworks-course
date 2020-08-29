
const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium"

export class GameDetailsModel {
    questions: number;
    difficulty:string;
    constructor(questions: number, difficulty: string){
        this.questions = questions;
        this.difficulty = difficulty;
    }
}

export default async function http<T>(details: GameDetailsModel):Promise<any> {
    const response = await fetch(URL);
    const body = await response.json();
    return body;
}