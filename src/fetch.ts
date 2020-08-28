
const URL = "https://opentdb.com/api.php?amount=10&difficulty=medium"

export async function http<T>():Promise<any> {
    const response = await fetch(URL);
    const body = await response.json();
    return body;
}