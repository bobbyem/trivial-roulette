import axios from "axios";

// const URL = "localhost:3000/api";
const URL = process.env.API_URL;

//Function for randomizing response data
const randomize = async (arr: Array<any>) => {
  const input = [...arr];
  const output: Array<any> = [];
  while (input.length > 0) {
    let rand = Math.floor(Math.random() * input.length);
    let element = input.splice(rand, 1)[0];
    output.push(element);
  }
  return output;
};

//Get ALL questions
const getQuestions = async (category: string | any): Promise<any> => {
  //Get data
  const response = await axios
    .get(URL + `/questions/vetted/${category ? category : ""}`)
    .then((resp) => resp.data);

  //Randomize the data here
  return await randomize(response);
};

const questionsService = {
  getQuestions,
};

export default questionsService;
