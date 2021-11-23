import axios from "axios";

axios.defaults.baseURL = "https://swapi.dev/api";

export const getAllFilms = async () => {
  try {
    return await axios.get("films");
  } catch (error) {
    throw error;
  }
};

// ========================== on Click link==========================

export const getEntitiesInfo = async (entities) => {
  try {
    return await axios.get(entities);
  } catch (error) {
    throw error;
  }
};

// ========================== Searching ==========================

export const getSearch = async (searchValue) => {
  const promises = [
    axios.get(`films/?search=${searchValue}`),
    axios.get(`people/?search=${searchValue}`),
    axios.get(`planets/?search=${searchValue}`),
    axios.get(`starships/?search=${searchValue}`),
  ];

  const promisesResolved = promises.map((promise) =>
    promise.catch((error) => ({ error }))
  );

  try {
    return await axios.all(promisesResolved);
  } catch (error) {
    throw error;
  }
};
