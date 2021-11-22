import { getAllFilms, getEntitiesInfo } from "../../services/swapiApi";
import {
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
  getEntitiesInfoRequest,
  getEntitiesInfoSuccess,
  getEntitiesInfoError,
} from "./filmsActions";

export const getAllFilmsOperation = () => async (dispatch, _) => {
  try {
    dispatch(getAllFilmsRequest());
    const result = await getAllFilms();
    dispatch(getAllFilmsSuccess(result.data.results));
  } catch (error) {
    dispatch(getAllFilmsError(error));
  }
};

export const getEntitiesInfoOperation = (entities) => async (dispatch, _) => {
  try {
    dispatch(getEntitiesInfoRequest());
    const result = await getEntitiesInfo(entities);
    console.log(result);
    dispatch(getEntitiesInfoSuccess(result.data));
  } catch (error) {
    dispatch(getEntitiesInfoError(error));
  }
};
