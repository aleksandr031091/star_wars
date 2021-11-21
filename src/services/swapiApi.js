import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

export const getAllFilms = async () => {
  try {
    return await axios.get("films");
  } catch (error) {
    throw error;
  }
};
// console.log(getAllFilms());
