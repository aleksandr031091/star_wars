import { combineReducers } from "redux";
import {
  filmsReducer,
  EntitiesInfoReducer,
  searchReducer,
  errorReducer,
  isSearchReducer,
} from "./films/filmsReducer";

const rootReducer = combineReducers({
  films: filmsReducer,
  entitiesInfo: EntitiesInfoReducer,
  searchResult: searchReducer,
  isSearch: isSearchReducer,
  error: errorReducer,
});

export default rootReducer;
