import { getAllFilms } from "../../services/swapiApi";
import {
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
} from "./filmsActions";

export const getAllFilmsOperation = () => async (dispatch, _) => {
  try {
    dispatch(getAllFilmsRequest());
    const result = await getAllFilms();
    console.log(result);
    dispatch(getAllFilmsSuccess(result.data.results));
  } catch (error) {
    dispatch(getAllFilmsError(error));
  }
};
