import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

export const getAllFilms = async () => {
  try {
    return await axios.get("films");
  } catch (error) {
    throw error;
  }
};

export const getEntitiesInfo = async (entities) => {
  try {
    return await axios.get(entities);
  } catch (error) {
    throw error;
  }
};
