import { combineReducers } from "redux";
import {
  filmsReducer,
  EntitiesInfoReducer,
  //   selectFilmReducer,
  errorReducer,
} from "./films/filmsReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  entitiesInfo: EntitiesInfoReducer,
  //   selectFilm: selectFilmReducer,
  error: errorReducer,
});

export default rootReducer;
