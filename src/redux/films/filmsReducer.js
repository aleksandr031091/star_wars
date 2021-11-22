import { combineReducers } from "redux";

import { createReducer } from "@reduxjs/toolkit";
import {
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
  //   selectFilm,
  getEntitiesInfoRequest,
  getEntitiesInfoSuccess,
  getEntitiesInfoError,
} from "./filmsActions";

export const filmsReducer = createReducer([], {
  [getAllFilmsSuccess]: (_, { payload }) => payload,
});

// export const selectFilmReducer = createReducer("", {
//   [selectFilm]: (_, { payload }) => payload,
// });

export const EntitiesInfoReducer = createReducer(
  {},
  {
    [getEntitiesInfoSuccess]: (_, { payload }) => payload,
  }
);

export const errorReducer = createReducer("", {
  [getAllFilmsRequest]: () => "",
  [getAllFilmsError]: (_, { payload }) => payload,
  [getEntitiesInfoRequest]: () => "",
  [getEntitiesInfoError]: (_, { payload }) => payload,
});
