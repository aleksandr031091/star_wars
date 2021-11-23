import { createReducer } from "@reduxjs/toolkit";
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

export const filmsReducer = createReducer([], {
  [getAllFilmsSuccess]: (_, { payload }) => payload,
});

export const EntitiesInfoReducer = createReducer(
  {},
  {
    [getEntitiesInfoSuccess]: (_, { payload }) => payload,
  }
);

export const searchReducer = createReducer([], {
  [getSearchQuerySuccess]: (state, { payload }) => payload,
});

export const errorReducer = createReducer("", {
  [getAllFilmsRequest]: () => "",
  [getAllFilmsError]: (_, { payload }) => payload,
  [getEntitiesInfoRequest]: () => "",
  [getEntitiesInfoError]: (_, { payload }) => payload,
  [getSearchQueryRequest]: () => "",
  [getSearchQueryError]: (_, { payload }) => payload,
});
