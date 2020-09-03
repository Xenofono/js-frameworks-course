import GameDetailsModel from './models/GameDetailsModel'

const BASE_URL = `https://opentdb.com/api.php?amount=`;


export default async function http<T>(details: GameDetailsModel): Promise<any> {
  try{
    const query = `${BASE_URL}${details.questions}&difficulty=${details.difficulty}`;
    const response = await fetch(query);
    const body = await response.json();
    return body;
  }catch(err){
    return err;
  }

}
