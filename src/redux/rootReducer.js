import { combineReducers } from "redux";
import {
  filmsReducer,
  //   selectFilmReducer,
  errorReducer,
} from "./films/filmsReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  //   selectFilm: selectFilmReducer,
  error: errorReducer,
});

export default rootReducer;
