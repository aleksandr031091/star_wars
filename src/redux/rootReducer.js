import { combineReducers } from "redux";
import {
  filmsReducer,
  EntitiesInfoReducer,
  searchReducer,
  errorReducer,
} from "./films/filmsReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  entitiesInfo: EntitiesInfoReducer,
  searchResult: searchReducer,
  error: errorReducer,
});

export default rootReducer;
