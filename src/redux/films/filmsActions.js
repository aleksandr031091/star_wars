import { createAction } from "@reduxjs/toolkit";

export const getAllFilmsRequest = createAction("films/getAllfilms");
export const getAllFilmsSuccess = createAction("films/getAllFilmsSuccess");
export const getAllFilmsError = createAction("films/getAllfilmsError");

// export const selectFilm = createAction("films/addFilmName");
export const getEntitiesInfoRequest = createAction(
  "entities/getEntitiesInfoRequest"
);
export const getEntitiesInfoSuccess = createAction(
  "entities/getEntitiesInfoSuccess"
);
export const getEntitiesInfoError = createAction(
  "entities/getEntitiesInfoError"
);
