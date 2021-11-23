import {
  getAllFilms,
  getEntitiesInfo,
  getSearch,
} from "../../services/swapiDev";
import {
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
  getEntitiesInfoRequest,
  getEntitiesInfoSuccess,
  getEntitiesInfoError,
  getSearchQueryRequest,
  getSearchQuerySuccess,
  getSearchQueryError,
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

    dispatch(getEntitiesInfoSuccess(result.data));
  } catch (error) {
    dispatch(getEntitiesInfoError(error));
  }
};

export const getSearchOperation = (value) => async (dispatch, _) => {
  try {
    dispatch(getSearchQueryRequest());

    const result = await getSearch(value);

    dispatch(getSearchQuerySuccess(result.map((res) => res.data.results)));
  } catch (error) {
    dispatch(getSearchQueryError(error));
  }
};
