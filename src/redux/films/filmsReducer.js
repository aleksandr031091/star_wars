import { createReducer } from "@reduxjs/toolkit";
import {
  getAllFilmsRequest,
  getAllFilmsSuccess,
  getAllFilmsError,
  //   selectFilm,
} from "./filmsActions";

export const filmsReducer = createReducer([], {
  [getAllFilmsSuccess]: (_, { payload }) => payload,
});

// export const selectFilmReducer = createReducer("", {
//   [selectFilm]: (_, { payload }) => payload,
// });

export const errorReducer = createReducer("", {
  [getAllFilmsRequest]: () => "",
  [getAllFilmsError]: (_, { payload }) => payload,
});
