import { createAction } from "@reduxjs/toolkit";

export const getAllFilmsRequest = createAction("films/getAllfilms");
export const getAllFilmsSuccess = createAction("films/getAllFilmsSuccess");
export const getAllFilmsError = createAction("films/getAllfilmsError");

export const getEntitiesInfoRequest = createAction(
  "entities/getEntitiesInfoRequest"
);
export const getEntitiesInfoSuccess = createAction(
  "entities/getEntitiesInfoSuccess"
);
export const getEntitiesInfoError = createAction(
  "entities/getEntitiesInfoError"
);

export const getSearchQueryRequest = createAction(
  "search/getSearchQueryRequest"
);
export const getSearchQuerySuccess = createAction(
  "search/getSearchQuerySuccess"
);
export const getSearchQueryError = createAction("search/getSearchQueryError");

export const setIsSearch = createAction("search/setIsSearch");
